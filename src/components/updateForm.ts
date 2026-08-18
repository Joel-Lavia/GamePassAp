import { z } from "zod";

export const updateGameSchema = z.object({
  title: z
    .string()
    .min(1, "Le titre ne peut pas être vide")
    .max(15, "15 caractères max"),
  description: z
    .string()
    .min(150, "La description doit contenir au moins 150 caractères"),
  // .optional(),
  imageUrl: z.string().min(1, "L'image ne peut pas être vide"),
  rating: z.number().min(1, "Note minimum: 1").max(100, "Note maximum: 100"),
});
export type UpdateFormInput = z.infer<typeof updateGameSchema>;
