export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenue chez MonEntreprise
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
          Nous créons des solutions digitales sur mesure pour votre activité.
        </p>
        <a href="/contact"
          className="bg-teal-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors">
          Nous contacter
        </a>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {["Rapidité", "Fiabilité", "Design"].map((item) => (
          <div key={item} className="bg-slate-50 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item}</h3>
            <p className="text-sm text-gray-500">
              Une promesse que nous tenons à chaque projet.
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}