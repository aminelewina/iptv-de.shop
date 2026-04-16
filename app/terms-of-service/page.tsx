import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Nutzungsbedingungen",
  description: "Wichtige Informationen zu Kontoeinrichtung, Übertragungen und weiteren Bedingungen für UPIPTV-Nutzer.",
  keywords: "iptv nutzungsbedingungen, iptv agb, upiptv bedingungen",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#111] p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-6">Nutzungsbedingungen</h1>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold mb-4">NUTZUNGSBEDINGUNGEN</h2>

            <p className="mb-4">
              Die Nutzung der Dienste von VIEW MAX stellt die Zustimmung zu diesen Bedingungen dar. Sie können unsere{" "}
              <Link href="/privacy-policy" className="text-red-500 hover:underline">
                Datenschutzrichtlinie hier einsehen
              </Link>
              .
            </p>

            <h3 className="text-lg font-bold mb-3">KONTOEINRICHTUNG / E-MAIL IN DATEI</h3>

            <p className="mb-4">
              Wir richten Ihr Konto ein, nachdem die Zahlung eingegangen ist und wir und/oder unsere Zahlungspartner die
              Bestellung(en) auf Betrug überprüft haben. Es liegt in Ihrer Verantwortung, uns eine E-Mail-Adresse zur
              Verfügung zu stellen, die nicht @ der Domain(s) ist, unter der Sie sich registrieren. Im Falle eines
              Missbrauchsproblems oder wenn wir Sie kontaktieren müssen, wird die primäre registrierte E-Mail-Adresse
              für diesen Zweck verwendet. Es liegt in Ihrer Verantwortung, sicherzustellen, dass die registrierte
              E-Mail-Adresse jederzeit aktuell ist.
            </p>

            <p className="mb-4">
              Wenn Sie einen Domainnamen bei VIEW MAX registriert haben, liegt es in Ihrer Verantwortung,
              sicherzustellen, dass die Kontaktinformationen für Ihr Domainkonto und Ihren tatsächlichen Domainnamen
              korrekt und aktuell sind. VIEW MAX ist nicht verantwortlich für eine abgelaufene Registrierung aufgrund
              veralteter Kontaktinformationen, die mit der Domain verbunden sind. Wenn Sie diese Informationen
              überprüfen oder ändern müssen, müssen Sie uns per E-Mail kontaktieren.
            </p>

            <p className="mb-4">
              Die Angabe falscher Kontaktinformationen jeglicher Art kann zur Kündigung Ihres Kontos führen. Bei Käufen
              dedizierter Server oder Transaktionen mit hohem Risiko kann es notwendig sein, einen staatlich
              ausgestellten Ausweis und möglicherweise einen Scan der für den Kauf verwendeten Kreditkarte vorzulegen.
              Wenn Sie diese Bedingungen nicht erfüllen, kann die Bestellung als betrügerisch angesehen und abgelehnt
              werden.
            </p>

            <h3 className="text-lg font-bold mb-3">ÜBERTRAGUNGEN</h3>

            <p className="mb-4">
              Unser Support-Team wird alles tun, um Ihnen beim Umzug Ihrer Website zu uns zu helfen. Übertragungen
              werden jedoch als Gefälligkeitsdienst angeboten und wir können die Verfügbarkeit, Möglichkeit oder die für
              eine Kontoübertragung erforderliche Zeit nicht garantieren. Jedes Hosting-Unternehmen ist unterschiedlich
              eingerichtet, und einige Hosting-Plattformen speichern Daten in einem inkompatiblen oder proprietären
              Format, was die Migration einiger oder aller Kontodaten extrem schwierig, wenn nicht unmöglich machen
              kann.
            </p>

            <p className="mb-4">
              Wir werden unser Bestes tun, aber in sehr seltenen Fällen können wir Ihnen möglicherweise nicht bei einer
              Datenübertragung von einem alten Host helfen. Kostenlose Übertragungsdienste sind für 30 Tage ab Ihrem
              Anmeldedatum verfügbar und nur verfügbar, wenn Ihr vorheriges Hosting-Unternehmen cPanel verwendet. Wenn
              Ihr vorheriges Unternehmen ein nicht standardmäßiges Kontrollpanel betrieb, kann eine Migrationsgebühr
              anfallen.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
