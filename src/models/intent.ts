export interface Intent {
  id: string
  category: string
  groups: string[][]
  /** Example questions embedded to match user queries against. */
  examples: string[]
  /** Matched with a lexical rule instead of embeddings (see data.ts). */
  lexicalOnly?: boolean
  response: string
};