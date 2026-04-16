import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Datenschutzrichtlinie",
  description: "Informationen zur Erhebung, Verwendung und zum Schutz Ihrer persönlichen Daten bei UPIPTV.",
  keywords: "iptv datenschutz, upiptv datenschutz, datenschutzrichtlinie",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#111] p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-6">Datenschutzrichtlinie</h1>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold mb-4">WILLKOMMEN ZUR UP IPTV DATENSCHUTZRICHTLINIE</h2>

            <p className="mb-4">
              Diese Richtlinie legt fest, wie wir mit Ihren persönlichen Daten umgehen, wenn Sie unser Nutzer oder
              Besucher unserer Website sind. Sie gilt für unser gesamtes Netzwerk.
            </p>

            <p className="mb-4">
              Wenn wir 'wir', 'uns' oder 'UP IPTV' sagen, dann deshalb, weil wir das sind und wir die Website besitzen
              und betreiben.
            </p>

            <p className="mb-6">
              Wenn wir "Richtlinie" sagen, sprechen wir über diese Datenschutzrichtlinie. Wenn wir "Nutzungsbedingungen"
              sagen, sprechen wir über die Regeln für die Nutzung unserer Website. Die Regeln variieren je nach Produkt
              und jedes Produkt stellt sie separat zur Verfügung und bittet separat um Zustimmung zu dieser Richtlinie.
            </p>

            <h3 className="text-lg font-bold mb-3">DIE ART DER PERSÖNLICHEN DATEN, DIE WIR SAMMELN</h3>

            <p className="mb-4">Wir sammeln bestimmte persönliche Daten über Besucher und Nutzer unserer Website.</p>

            <p className="mb-6">
              Die häufigsten Arten von Informationen, die wir sammeln, sind: Benutzernamen, Mitgliedsnamen,
              E-Mail-Adressen, IP-Adressen, andere Kontaktinformationen, Umfrageantworten, Zahlungsinformationen wie
              Kontaktinformationen des Zahlungsagenten, Transaktionsdetails, Steuerinformationen, Support-Anfragen,
              Forumkommentare, Inhalte, die Sie auf unserer Website verfügbar machen möchten (wie Artikelbeschreibungen)
              und Web-Analytics-Daten. Wir sammeln auch persönliche Daten aus Bewerbungen (wie Ihren Lebenslauf, das
              Bewerbungsformular selbst, das Anschreiben und Notizen zum Vorstellungsgespräch).
            </p>

            <h3 className="text-lg font-bold mb-3">WIE WIR PERSÖNLICHE DATEN SAMMELN</h3>

            <p className="mb-4">
              Wir sammeln persönliche Daten direkt, wenn Sie sie uns zur Verfügung stellen, automatisch, wenn Sie auf
              der Website surfen, oder über andere, wenn Sie mit unserer Website verbundene Dienste nutzen.
            </p>

            <p className="mb-4">
              Wir sammeln Ihre persönlichen Daten, wenn Sie sie uns während der Mitgliedsregistrierung zur Verfügung
              stellen und wenn Sie Artikel oder Dienstleistungen auf unserer Website kaufen oder bereitstellen, wenn Sie
              uns Feedback geben, wenn Sie an einem Wettbewerb teilnehmen, wenn Sie an einer Umfrage teilnehmen oder
              wenn Sie uns eine Mitteilung senden.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
