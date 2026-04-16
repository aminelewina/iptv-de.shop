import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { faqSchema } from "@/lib/faq-schema"
import { Info, Tv, Wifi, DollarSign, Search, MessageSquare, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Häufig gestellte Fragen (FAQ) | UPIPTV",
  description:
    "Finden Sie Antworten auf häufig gestellte Fragen zu IPTV, Funktionsweise, Anforderungen und mehr. Alles, was Sie über unseren IPTV-Service wissen müssen.",
  keywords: "IPTV FAQ, IPTV Fragen, IPTV Anbieter, Internet TV, UPIPTV Hilfe, IPTV Kosten, IPTV Anforderungen",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Header />

      {/* Hero Section */}
      <div className="relative bg-black pt-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/digital-stream-red-flow.png"
            alt="Digitaler Datenstrom - Hintergrundbild für die FAQ-Seite zum Thema IPTV-Technologie"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">Häufig gestellte Fragen (FAQ)</h1>
          <p className="text-xl md:text-2xl text-center text-gray-300 mb-8">
            Alles, was Sie über unseren <span className="text-red-500 font-semibold">IPTV-Service</span> wissen müssen
          </p>
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <p className="text-lg text-white">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unserem IPTV-Service. Falls Sie weitere Fragen
              haben, zögern Sie nicht, unseren Kundensupport zu kontaktieren.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="sticky top-16 z-30 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-3 px-4 w-full">
        <div className="container mx-auto">
          <div className="flex items-center justify-start overflow-x-auto scrollbar-hide gap-4 pb-1">
            <a
              href="#was-ist-iptv"
              className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
            >
              Was ist IPTV?
            </a>
            <a
              href="#wie-funktioniert-iptv"
              className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
            >
              Wie funktioniert IPTV?
            </a>
            <a
              href="#bester-iptv-anbieter"
              className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
            >
              Bester Anbieter
            </a>
            <a
              href="#iptv-kosten"
              className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
            >
              IPTV Kosten
            </a>
            <a
              href="#iptv-anforderungen"
              className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
            >
              Anforderungen
            </a>
            <a
              href="#tv-ip-adresse"
              className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
            >
              TV IP-Adresse
            </a>
          </div>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Cards */}
          <div className="space-y-8">
            {/* What is IPTV */}
            <section
              id="was-ist-iptv"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <Tv size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold text-white">Was ist IPTV / IPTV TV?</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-white">
                  <p>
                    IPTV steht für Internet Protocol Television (Internetprotokoll-Fernsehen). Anders als traditionelle
                    Übertragungswege wie Satellit oder Kabel, liefert IPTV Fernsehinhalte über die
                    Internet-Netzwerkinfrastruktur. Das bedeutet, Sie können Live-TV-Kanäle, Filme und Serien (Video on
                    Demand - VOD) direkt über Ihre Internetverbindung auf kompatiblen Geräten streamen.
                  </p>
                  <p>
                    UPIPTV ist ein führender Anbieter, der einen robusten und vielfältigen IPTV-Dienst direkt zu Ihnen
                    nach Hause bringt.
                  </p>
                </div>
              </div>
            </section>

            {/* How IPTV works */}
            <section
              id="wie-funktioniert-iptv"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <Wifi size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold text-white">Wie funktioniert IPTV?</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-white">
                  <p>
                    IPTV funktioniert, indem Fernsehsignale in Datenpakete umgewandelt werden, die dann über das
                    Internet (mittels des Internet-Protokolls, daher der Name) übertragen werden. Wenn Sie bei einem
                    Dienst wie UPIPTV einen Kanal oder Film auswählen, wird der Inhalt direkt von unseren Servern auf
                    Ihr Gerät gestreamt.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p>
                      Sie benötigen eine stabile Internetverbindung und ein kompatibles Gerät (wie einen Smart TV, eine
                      Android Box, einen Amazon Firestick, einen Computer oder ein Smartphone), auf dem eine
                      IPTV-Player-App läuft oder das unsere dedizierte UPIPTV-Anwendung nutzt, um den Inhalt zu
                      entschlüsseln und anzuzeigen.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Best IPTV Provider */}
            <section
              id="bester-iptv-anbieter"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <Info size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold text-white">Welcher IPTV-Anbieter ist der beste?</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-white">
                  <p>
                    Die Wahl des "besten" IPTV-Anbieters hängt oft von individuellen Bedürfnissen ab, wie z. B.
                    Kanalpräferenzen, Größe der VOD-Bibliothek, Stream-Stabilität, Qualität des Kundensupports und
                    Preis. Obwohl es viele Anbieter gibt, strebt UPIPTV danach, die erste Wahl zu sein, indem wir ein
                    umfassendes Paket anbieten, das Folgendes beinhaltet:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                            <ArrowRight size={16} className="text-red-500" />
                          </div>
                          <span>Eine große Auswahl an internationalen und lokalen Kanälen.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                            <ArrowRight size={16} className="text-red-500" />
                          </div>
                          <span>Eine riesige und regelmäßig aktualisierte VOD-Bibliothek.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                            <ArrowRight size={16} className="text-red-500" />
                          </div>
                          <span>Stabile und qualitativ hochwertige Streams mit minimalem Buffering.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                            <ArrowRight size={16} className="text-red-500" />
                          </div>
                          <span>Exzellenten Kundensupport.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                            <ArrowRight size={16} className="text-red-500" />
                          </div>
                          <span>Wettbewerbsfähige Preispläne.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Wir ermutigen Sie, die auf upiptv.tech verfügbaren Funktionen und Pläne zu erkunden, um zu sehen,
                    warum viele UPIPTV als die beste Lösung für ihre Bedürfnisse betrachten.
                  </p>
                </div>
              </div>
            </section>

            {/* IPTV Costs */}
            <section
              id="iptv-kosten"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <DollarSign size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold text-white">Was kostet IPTV?</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-white">
                  <p>
                    Die Kosten für IPTV-Dienste können je nach Anbieter, Abonnementdauer (monatlich, vierteljährlich,
                    jährlich), Anzahl der erlaubten gleichzeitigen Verbindungen sowie dem Umfang der enthaltenen Kanäle
                    und Funktionen erheblich variieren.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border-l-4 border-red-600">
                    <p>
                      Für spezifische Preisdetails zu UPIPTV besuchen Sie bitte die offizielle Abonnement- oder
                      Preisseite auf unserer Website upiptv.tech. Wir bieten verschiedene Pakete an, die auf
                      unterschiedliche Budgets und Sehgewohnheiten zugeschnitten sind, um sicherzustellen, dass Sie mit
                      UPIPTV ein hervorragendes Preis-Leistungs-Verhältnis erhalten.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* IPTV Requirements */}
            <section
              id="iptv-anforderungen"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <Wifi size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold text-white">Was brauche ich für Internet TV (IPTV)?</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-white">
                  <p>
                    Um Internet-Fernsehen, insbesondere über einen Dienst wie UPIPTV, genießen zu können, benötigen Sie
                    im Allgemeinen Folgendes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <ArrowRight size={16} className="text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Eine stabile Internetverbindung:</p>
                          <p className="text-sm text-gray-300 mt-1">
                            Eine Breitbandverbindung ist erforderlich. Obwohl die Geschwindigkeiten variieren können,
                            empfehlen wir typischerweise mindestens 15-25 Mbit/s für flüssiges HD-Streaming und höhere
                            Geschwindigkeiten für 4K-Inhalte.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <ArrowRight size={16} className="text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Ein kompatibles Gerät:</p>
                          <p className="text-sm text-gray-300 mt-1">
                            Dies kann ein Smart TV (Samsung, LG, Sony usw.), eine Android TV Box, ein Amazon Fire TV
                            Stick/Cube, ein Apple TV, ein Computer (Windows oder Mac) oder ein Smartphone/Tablet (iOS
                            oder Android) sein.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <ArrowRight size={16} className="text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Ein IPTV-Abonnement:</p>
                          <p className="text-sm text-gray-300 mt-1">
                            Sie benötigen einen aktiven Abonnementplan von einem IPTV-Anbieter wie UPIPTV.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <ArrowRight size={16} className="text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Eine IPTV-Player-Anwendung (falls zutreffend):</p>
                          <p className="text-sm text-gray-300 mt-1">
                            Einige Geräte erfordern eine IPTV-Player-App (wie Smarters Pro, Tivimate, GSE Smart IPTV
                            oder andere), in die Sie Ihre UPIPTV-Abonnementdaten eingeben. Einige Dienste bieten
                            möglicherweise ihre eigene dedizierte App an.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TV IP Address */}
            <section
              id="tv-ip-adresse"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <Search size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold text-white">
                  Wie finde ich die IP-Adresse meines Fernsehers? (Einschließlich Samsung TV)
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4 text-white">
                  <p>
                    Die IP-Adresse Ihres Fernsehers zu finden ist oft notwendig, um bestimmte IPTV-Apps einzurichten
                    oder Netzwerkprobleme zu beheben. Die Schritte können je nach Marke und Modelljahr Ihres Fernsehers
                    leicht variieren, aber der allgemeine Prozess ist ähnlich:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-3">Allgemeine Schritte:</h3>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>Drücken Sie die Menü- oder Einstellungen-Taste auf Ihrer TV-Fernbedienung.</li>
                        <li>Navigieren Sie zum Abschnitt Netzwerk oder Netzwerkeinstellungen.</li>
                        <li>Suchen Sie nach Netzwerkstatus, Netzwerkinformationen oder IP-Einstellungen.</li>
                        <li>
                          Die IP-Adresse Ihres Fernsehers (zusammen mit anderen Netzwerkdetails wie Subnetzmaske,
                          Gateway und DNS) sollte hier angezeigt werden.
                        </li>
                      </ol>
                    </div>

                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-3">Spezifische Schritte für Samsung TVs:</h3>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>Drücken Sie die Home- oder Smart Hub-Taste auf Ihrer Fernbedienung.</li>
                        <li>Navigieren Sie zu Einstellungen (oft ein Zahnrad-Symbol).</li>
                        <li>Gehen Sie zu Allgemein oder direkt zu Netzwerk.</li>
                        <li>Wählen Sie Netzwerkstatus.</li>
                        <li>Sie sollten Ihre Netzwerkverbindungsdetails sehen, einschließlich der IP-Adresse.</li>
                        <li>
                          Alternativ: Gehen Sie zu Einstellungen {`>`} Unterstützung {`>`} Info zu diesem TV {`>`}{" "}
                          Netzwerkinformationen.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-8 text-center mt-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Haben Sie weitere Fragen?</h2>
            <p className="text-white mb-6">
              Unser Support-Team steht Ihnen jederzeit zur Verfügung, um alle Ihre Fragen zu beantworten.
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=447539147993&text=Hallo%2C+Ich+habe+eine+Frage+zu+Ihrem+IPTV-Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Kontaktieren Sie uns über WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
