import { decorateCardHint } from "./hint-decorator";
import { type Card } from "./types";

export type CardHelperProps = { card: Card };

export function CardHelper({ card }: CardHelperProps) {
  return (
    <div className="m-4">
      <div>Front: {card.front}</div>
      <div>Hint: {card.hint}</div>
      <div>Result: {decorateCardHint(card)}</div>
    </div>
  );
}
