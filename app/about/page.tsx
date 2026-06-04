export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">À propos de nous</h1>
      <p className="text-gray-500 leading-relaxed mb-8">
        Fondée en 2020, MonEntreprise accompagne ses clients dans leur transformation digitale.
        Notre équipe de passionnés met tout en œuvre pour livrer des projets de qualité.
      </p>
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-teal-800 mb-2">Notre mission</h2>
        <p className="text-teal-700 text-sm leading-relaxed">
          Rendre la technologie accessible et utile pour toutes les entreprises,
          quelle que soit leur taille.
        </p>
      </div>
    </main>
  )
}