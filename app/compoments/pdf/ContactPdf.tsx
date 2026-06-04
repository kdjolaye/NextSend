import {
  Document, Page, Text, View, StyleSheet,
} from "@react-pdf/renderer"
import type { ContactFormData } from "@/app/lib/validations"

const styles = StyleSheet.create({
  page:   { padding: 48, fontFamily: "Helvetica", backgroundColor: "#ffffff" },
  header: { marginBottom: 32 },
  titre:  { fontSize: 22, fontWeight: "bold", color: "#0F6E56" },
  sous:   { fontSize: 11, color: "#888", marginTop: 4 },
  sep:    { borderBottom: "1.5px solid #E5E7EB", marginVertical: 20 },
  ligne:  { flexDirection: "row", marginBottom: 16 },
  label:  { fontSize: 10, color: "#6B7280", width: 90, paddingTop: 1 },
  valeur: { fontSize: 12, color: "#111827", flex: 1 },
  footer: { marginTop: 40, fontSize: 9, color: "#9CA3AF" },
})

type Props = { data: ContactFormData }

export function ContactPDF({ data }: Props) {
  const date = new Date().toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  })

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Text style={styles.titre}>Nouveau message de contact</Text>
          <Text style={styles.sous}>MonEntreprise — reçu le {date}</Text>
        </View>

        <View style={styles.sep} />

        {(
          [
            ["Nom",     data.nom],
            ["Email",   data.email],
            ["Sujet",   data.sujet],
            ["Message", data.message],
          ] as [string, string][]
        ).map(([label, valeur]) => (
          <View key={label} style={styles.ligne}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.valeur}>{valeur}</Text>
          </View>
        ))}

        <View style={styles.sep} />
        <Text style={styles.footer}>
          Ce document a été généré automatiquement par le site MonEntreprise.
        </Text>

      </Page>
    </Document>
  )
}