import { MatchResult } from "./match-result";

export interface Message {
  sender: "user" | "bot";
  text: string;
  matchInfo?: MatchResult;
}