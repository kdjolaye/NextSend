import { ContactForm } from "../compoments/forms/ContactForm"

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contactez-nous</h1>
        <p className="text-gray-500">Remplissez le formulaire, nous vous répondons sous 24h.</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <ContactForm />
      </div>
    </main>
  )
}