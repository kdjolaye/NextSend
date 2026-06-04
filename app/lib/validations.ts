import { z } from "zod"

export const contactSchema = z.object({
  nom: z.string()
    .min(2, { message: "Le nom doit faire au moins 2 caractères" })
    .max(50, { message: "Nom trop long" }),

  email: z.string()
    .email({ message: "Adresse email invalide" }),

  sujet: z.enum(["devis", "support", "autre"], {
    message: "Veuillez choisir un sujet",
  }),

  message: z.string()
    .min(10, { message: "Message trop court (10 caractères minimum)" })
    .max(1000, { message: "Message trop long" }),
})

export type ContactFormData = z.infer<typeof contactSchema>