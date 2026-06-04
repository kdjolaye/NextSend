import type { Metadata } from "next";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mon Entreprise",
  description: "Site officiel",
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}