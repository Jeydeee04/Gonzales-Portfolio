import { intents } from "@/data";
import { Intent } from "@/models/intent";

export function getBotReplyWithPercentage(userInput: string) {
  const cleanInput = userInput.toLowerCase();
  let bestMatch: Intent | null = null;
  let maxMatchedGroups = 0;

  for (const intent of intents) {
    let matchedGroups = 0;

    // Evaluate each group requirement
    for (const group of intent.groups) {
      const hasMatchInGroup = group.some((keyword) =>
        cleanInput.includes(keyword.toLowerCase())
      );
      if (hasMatchInGroup) {
        matchedGroups++;
      }
    }

    // Must match ALL required groups of the intent AND match more groups than previous candidates
    if (
      matchedGroups === intent.groups.length &&
      matchedGroups > maxMatchedGroups
    ) {
      maxMatchedGroups = matchedGroups;
      bestMatch = intent;
    }
  }

  // Return the best matching intent if all its groups were matched
  if (bestMatch) {
    return {
      response: bestMatch.response,
      matchedGroups: maxMatchedGroups,
    };
  }

  // Fallback response for unmatched input
  return {
    response:
      "I'm not quite sure about that. Try asking about John's projects, tech stack, C++ programming awards, or contact info!",
    matchedGroups: 0,
  };
}