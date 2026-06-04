"use server"

import { renderToBuffer } from "@react-pdf/renderer"
import { contactSchema } from "@/app/lib/validations"
import { ContactPDF } from "@/app/compoments/pdf/ContactPdf"
import { Resend } from "resend"
import React from "react"

const resend = new Resend('re_HosQBiWu_M2VxTxVHZV84H8zy3E3NsNCo')

type ActionResult =
  | { success: true }
  | { success: false; error: string }

export async function sendContactForm(rawData: unknown): Promise<ActionResult> {
  // 1. Valider les données
  const result = contactSchema.safeParse(rawData)
  if (!result.success) {
    return { success: false, error: "Données invalides" }
  }
  const data = result.data

  try {
    // 2. Générer le PDF
    const element = React.createElement(ContactPDF, { data }) as any
    const pdfBuffer = await renderToBuffer(element)

    // 3. Envoyer l'email avec le PDF en pièce jointe
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to:   data.email!,
      subject: `Nouveau message de ${data.nom} — ${data.sujet}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${data.nom}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Sujet :</strong> ${data.sujet}</p>
        <p><strong>Message :</strong> ${data.message}</p>
        <hr/>
        <p style="color:#888;font-size:12px">
          Le formulaire complet est joint en PDF.
        </p>
      `,
      attachments: [
        {
          filename: `contact-${data.nom.replace(/\s+/g, "-")}.pdf`,
          content: Buffer.from(pdfBuffer),
        },
      ],
    })

    if (error) {
      console.error("Erreur Resend :", error)
      return { success: false, error: "Erreur envoi email" }
    }

    console.log("Email envoyé avec PDF à", data.email)
    return { success: true }

  } catch (err) {
    console.error("Erreur :", err)
    return { success: false, error: "Erreur lors du traitement" }
  }
}