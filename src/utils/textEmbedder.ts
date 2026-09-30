import type { Embedding, TextEmbedder } from "@mediapipe/tasks-text";
import { intents, outOfScopeExamples } from "@/data";
import type { Intent } from "@/models/intent";

// Self-hosted assets (see public/). File names in WASM_BASE_PATH are resolved
// by FilesetResolver.forTextTasks at runtime (SIMD vs non-SIMD variants), so
// the files must keep their original names.
const WASM_BASE_PATH = "/mediapipe/text";
const MODEL_PATH = "/models/universal_sentence_encoder.tflite";

type TextModule = typeof import("@mediapipe/tasks-text");

interface EmbedderRuntime {
  module: TextModule;
  embedder: TextEmbedder;
}

let runtimePromise: Promise<EmbedderRuntime> | null = null;

/**
 * TensorFlow Lite prints initialization status to stderr, e.g.
 * `INFO: Created TensorFlow Lite XNNPACK delegate for CPU.` or
 * `W0930 ... inference_feedback_manager.cc:121] ...`. Emscripten binds stderr
 * to `console.error`, so Next.js dev reports these benign lines as console
 * errors. The WASM loader honors `Module["printErr"]`, so we intercept stderr
 * and send only known-benign status lines to `console.info`; real failures
 * (`Aborted(...)`, `Uncaught ...`, emscripten warnings) still reach
 * `console.error` untouched.
 */
const BENIGN_TFLITE_LOG = /^(?:INFO:\s|W\d{4}\s)/;

function routeWasmStderr(): void {
  const scope = globalThis as {
    Module?: { printErr?: (text: string) => void };
  };
  if (scope.Module?.printErr) return; // someone else already owns stderr
  scope.Module = {
    ...(scope.Module ?? {}),
    printErr: (text: string) => {
      if (BENIGN_TFLITE_LOG.test(text)) console.info(text);
      else console.error(text);
    },
  };
}

async function loadRuntime(): Promise<EmbedderRuntime> {
  // Dynamic import keeps the MediaPipe bundle (and its WASM/model downloads)
  // out of the initial page load and away from SSR.
  routeWasmStderr();
  const module = await import("@mediapipe/tasks-text");
  const fileset = await module.FilesetResolver.forTextTasks(WASM_BASE_PATH);
  const embedder = await module.TextEmbedder.createFromOptions(fileset, {
    baseOptions: { modelAssetPath: MODEL_PATH },
  });
  return { module, embedder };
}

/**
 * Loads the MediaPipe Text Embedder task (WASM runtime + model) and caches it.
 * Every caller shares a single initialization; a failure clears the cache so a
 * later call can retry instead of failing forever.
 */
function getRuntime(): Promise<EmbedderRuntime> {
  if (!runtimePromise) {
    runtimePromise = loadRuntime().catch((error) => {
      runtimePromise = null;
      throw error;
    });
  }
  return runtimePromise;
}

/**
 * Returns the initialized TextEmbedder. Intended for warm-up calls:
 * `getTextEmbedder().catch(() => {})`.
 */
export async function getTextEmbedder(): Promise<TextEmbedder> {
  const { embedder } = await getRuntime();
  return embedder;
}

/** Embeds a single string. Rejects if the task fails to load or run. */
export async function embedText(text: string): Promise<Embedding> {
  const { embedder } = await getRuntime();
  const result = embedder.embed(text);
  const embedding = result.embeddings[0];
  if (!embedding) {
    throw new Error("MediaPipe TextEmbedder returned no embedding.");
  }
  return embedding;
}

/** Cosine similarity between two embeddings, via MediaPipe's own utility. */
export async function cosineSimilarity(
  u: Embedding,
  v: Embedding,
): Promise<number> {
  const { module } = await getRuntime();
  return module.TextEmbedder.cosineSimilarity(u, v);
}

// ---------------------------------------------------------------------------
// Intent retrieval
//
// Every canned answer in `intents` carries example questions; the user's query
// is embedded and compared against all of them with cosine similarity, so the
// chat is pure semantic retrieval — no keyword matching anywhere.
// ---------------------------------------------------------------------------

/**
 * How far the best intent must beat the out-of-scope target to count as a
 * match. Calibrated empirically: on the test battery every accepted real
 * question scored at least +0.017 above out-of-scope, while off-topic
 * questions landed at -0.06 .. +0.016.
 */
const SIMILARITY_MARGIN = 0.01;

// "hi", "hey there", "good morning" ... answered directly from the Greetings
// intent. Long messages that merely start with a greeting word are still sent
// through the embedder.
const GREETING_PATTERN =
  /^\s*(hi+|hey+|hello+|howdy|yo+|sup|greetings|good\s+(morning|afternoon|evening))\b/i;
const GREETING_MAX_WORDS = 3;

export const FALLBACK_RESPONSE =
  "I'm not quite sure about that. Try asking about John's projects, tech stack, C++ programming awards, or contact info!";

interface ExampleEmbedding {
  intent: Intent;
  embedding: Embedding;
}

interface IntentIndex {
  /** Embeddings of every example question of every semantic intent. */
  examples: ExampleEmbedding[];
  /** Embeddings of the out-of-scope documents (fallback gate). */
  outOfScope: Embedding[];
}

let indexPromise: Promise<IntentIndex> | null = null;

/**
 * Embeds all example questions once (a few hundred ms) and caches the index
 * for the page's lifetime. Failures clear the cache so a later message retries.
 */
function getIntentIndex(): Promise<IntentIndex> {
  if (!indexPromise) {
    indexPromise = (async () => {
      // Fail fast if the task can't load; embedText would reject anyway.
      await getTextEmbedder();

      const semanticIntents = intents.filter((intent) => !intent.lexicalOnly);

      const [examples, outOfScope] = await Promise.all([
        Promise.all(
          semanticIntents.flatMap((intent) =>
            intent.examples.map(async (example) => ({
              intent,
              embedding: await embedText(example),
            })),
          ),
        ),
        Promise.all(outOfScopeExamples.map((text) => embedText(text))),
      ]);

      return { examples, outOfScope };
    })().catch((error) => {
      indexPromise = null;
      throw error;
    });
  }
  return indexPromise;
}

async function bestMatch(queryEmbedding: Embedding, index: IntentIndex) {
  let best: ExampleEmbedding | null = null;
  let bestScore = -Infinity;

  for (const candidate of index.examples) {
    const score = await cosineSimilarity(queryEmbedding, candidate.embedding);
    if (score > bestScore) {
      bestScore = score;
      best = candidate;
    }
  }
  return { best, bestScore };
}

async function outOfScopeScore(
  queryEmbedding: Embedding,
  index: IntentIndex,
): Promise<number> {
  let highest = -Infinity;
  for (const document of index.outOfScope) {
    const score = await cosineSimilarity(queryEmbedding, document);
    if (score > highest) highest = score;
  }
  return highest;
}

/**
 * Answers a chat message with the MediaPipe Text Embedder task.
 *
 * Three paths:
 * 1. Short greeting ("hi", "hey there") -> Greetings intent, no embedding.
 * 2. Query is embedded and compared with every example question; the best
 *    intent wins if it also beats the out-of-scope documents (rejection gate).
 * 3. Otherwise the generic fallback reply.
 *
 * Never throws: if the embedder fails to load or run (offline, blocked asset,
 * unsupported WASM), the generic fallback response is returned.
 */
export async function answerQuery(userInput: string): Promise<string> {
  const query = userInput.trim();
  if (!query) return FALLBACK_RESPONSE;

  // 1. Pure greetings are answered lexically: the Greetings intent is an
  //    embedding "attractor" (its generic wording wins unrelated questions),
  //    and a plain "hi" shouldn't need the model at all.
  if (
    GREETING_PATTERN.test(query) &&
    query.split(/\s+/).length <= GREETING_MAX_WORDS
  ) {
    const greeting = intents.find((intent) => intent.lexicalOnly);
    if (greeting) return greeting.response;
  }

  try {
    const index = await getIntentIndex();
    const queryEmbedding = await embedText(query);
    const [{ best, bestScore }, scopeScore] = await Promise.all([
      bestMatch(queryEmbedding, index),
      outOfScopeScore(queryEmbedding, index),
    ]);

    if (best && bestScore - scopeScore >= SIMILARITY_MARGIN) {
      return best.intent.response;
    }
    return FALLBACK_RESPONSE;
  } catch {
    return FALLBACK_RESPONSE;
  }
}
