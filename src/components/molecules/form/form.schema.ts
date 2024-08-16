import { z } from "zod";

export const createSchema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .regex(/^[A-Za-z]+$/i, "é permitido adicionar apenas letras"),
  description: z
    .string()
    .min(1, "O nome é obrigatório")
    .regex(/^[A-Za-z]+$/i, "é permitido adicionar apenas letras"),
});

export type FormProps = z.infer<typeof createSchema>;
