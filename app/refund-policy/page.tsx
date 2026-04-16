import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Rückerstattungsrichtlinie",
  description:
    "Informationen zu Rückgabebedingungen, Erstattungsberechtigung und dem Rückerstattungsprozess bei UPIPTV.",
  keywords: "iptv rückerstattung, iptv geld zurück, upiptv erstattung",
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#111] p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-6">Rückerstattungsrichtlinie</h1>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold mb-4">RÜCKERSTATTUNGSRICHTLINIE</h2>

            <h3 className="text-lg font-bold mb-3">ALLGEMEINE RÜCKGABERICHTLINIE:</h3>

            <p className="mb-4">
              Alle Rücksendungen müssen innerhalb von 7 Tagen nach dem Zahlungsdatum abgestempelt sein.
            </p>

            <h3 className="text-lg font-bold mb-3">WIE MAN EINE RÜCKGABE EINLEITET</h3>

            <p className="mb-4">
              Wenn Sie eine Rückgabe, eine Rückerstattung wünschen und wenn Sie andere Fragen haben, zögern Sie nicht,
              uns per E-Mail zu kontaktieren:{" "}
              <a href="mailto:contact@viewmax.store" className="text-red-500 hover:underline">
                contact@viewmax.store
              </a>
            </p>

            <p className="mb-4">
              Nach Erhalt Ihrer Rückgabeanfrage werden wir diese innerhalb von 24 Stunden bearbeiten. Sie werden über
              den Status der Rückgabe informiert.
            </p>

            <h3 className="text-lg font-bold mb-3">RÜCKERSTATTUNGSBERECHTIGUNG</h3>

            <p className="mb-4">Wir bieten Rückerstattungen unter folgenden Umständen an:</p>

            <ul className="list-disc pl-6 mb-4">
              <li>Der Service ist innerhalb von 24 Stunden nach dem Kauf vollständig nicht funktionsfähig</li>
              <li>Technische Probleme, die von unserem Support-Team nicht gelöst werden können</li>
              <li>Der Service entspricht nicht der zum Zeitpunkt des Kaufs angegebenen Beschreibung</li>
            </ul>

            <h3 className="text-lg font-bold mb-3">NICHT ERSTATTUNGSFÄHIGE ARTIKEL</h3>

            <p className="mb-4">Folgendes ist nicht für Rückerstattungen berechtigt:</p>

            <ul className="list-disc pl-6 mb-4">
              <li>Käufe, die vor mehr als 7 Tagen getätigt wurden</li>
              <li>Dienste, die umfangreich genutzt wurden</li>
              <li>Probleme, die durch Anwendungen oder Hardware von Drittanbietern verursacht wurden</li>
              <li>Dienste, die nach der Testphase gekündigt wurden</li>
            </ul>

            <p className="mb-4">
              UP IPTV behält sich das Recht vor, von Fall zu Fall zu entscheiden, welche Transaktionen für
              Rückerstattungen in Frage kommen.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
