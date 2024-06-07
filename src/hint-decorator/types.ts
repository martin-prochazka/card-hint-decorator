import { z } from "zod";

export const CardSchema = z.object({
  id: z.string(),
  front: z.string(),
  hint: z.string(),
});
export const CardsSchema = CardSchema.array();

export type Card = z.infer<typeof CardSchema>;
export type Cards = z.infer<typeof CardsSchema>;
