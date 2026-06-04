"use client"
import Link from "next/link"
import { useState } from "react"

export function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-teal-600 text-white px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">
          MonEntreprise
        </Link>

        {/* Menu desktop — caché sur mobile */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/"       className="text-white/80 hover:text-white">Accueil</Link>
          <Link href="/about"   className="text-white/80 hover:text-white">À propos</Link>
          <Link href="/contact" className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-lg">
            Contact
          </Link>
        </div>

        {/* Bouton hamburger — visible sur mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 pt-4 px-2">
          <Link href="/"       onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/about"   onClick={() => setOpen(false)}>À propos</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}