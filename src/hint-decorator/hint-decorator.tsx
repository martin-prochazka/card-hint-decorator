import { PREFIXES } from "./constants";
import { Card } from "./types";

const removePrefix = (text: string, prefix: string) => {
  return text.toLowerCase().includes(prefix.toLowerCase())
    ? text.replace(new RegExp(prefix, "ig"), "")
    : null;
};

const removePrefixes = (text: string) =>
  PREFIXES.map((prefix) => removePrefix(text, prefix)).filter(Boolean);

export const decorateCardHint = (card: Card) => {
  const { front, hint } = card;

  if (!front || !hint) return hint;

  const keywords = [front, ...removePrefixes(front)];

  const regex = new RegExp(`\\b(${keywords.join("|")})(\\w*)\\b`, "ig");

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(hint)) !== null) {
    // Before match
    if (match.index > lastIndex) {
      parts.push(hint.substring(lastIndex, match.index));
    }
    // Match
    parts.push(<b key={match.index}>{match[0]}</b>);
    lastIndex = match.index + match[0].length;
  }

  // Add the rest
  if (lastIndex < hint.length) {
    parts.push(hint.substring(lastIndex));
  }

  return <>{parts}</>;
};
