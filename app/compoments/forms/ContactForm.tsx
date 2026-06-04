"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { contactSchema, type ContactFormData } from "@/app/lib/validations"
import { sendContactForm } from "@/app/actions/sendContactForm"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    const result = await sendContactForm(data)
    if (result.success) {
      setStatus("success")
      reset()
    } else {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
        <input
          {...register("nom")}
          placeholder="Votre nom complet"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500 transition-colors"
        />
        {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          {...register("email")}
          type="email"
          placeholder="votre@email.com"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500 transition-colors"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
        <select
          {...register("sujet")}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500 transition-colors"
        >
          <option value="">Choisissez un sujet</option>
          <option value="devis">Demande de devis</option>
          <option value="support">Support technique</option>
          <option value="autre">Autre</option>
        </select>
        {errors.sujet && <p className="text-red-500 text-xs mt-1">{errors.sujet.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          {...register("message")}
          placeholder="Décrivez votre demande..."
          rows={5}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm text-center bg-green-50 rounded-lg py-3">
          Message envoyé ! Nous vous répondons sous 24h.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg py-3">
          Une erreur est survenue, veuillez réessayer.
        </p>
      )}

    </form>
  )
}