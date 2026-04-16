"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckIcon, SendIcon, DollarSign, Users, BarChart, Award, ShieldCheck, Star } from "lucide-react"

export default function ResellerPlanePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    device: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the WhatsApp message
    const message = `Reseller-Anfrage**%0AName: ${formData.name}%0AEmail: ${formData.email}%0AGerät: ${formData.device}%0A%0Aupiptv.tech`

    // Create the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=447539147993&text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Profitables Geschäftsmodell",
      description:
        "Verdienen Sie erhebliche Margen bei jedem verkauften Abonnement mit unserer wettbewerbsfähigen Preisstruktur.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Wachsender Markt",
      description: "Erschließen Sie den schnell wachsenden IPTV-Markt mit Millionen potenzieller Kunden weltweit.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-purple-500" />,
      title: "Einfach zu skalieren",
      description:
        "Starten Sie klein und lassen Sie Ihr Geschäft in Ihrem eigenen Tempo wachsen, ohne Lagerbestand oder Gemeinkosten.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Premium-Inhalte",
      description: "Bieten Sie Ihren Kunden hochwertige Inhalte mit Tausenden von Kanälen und VOD-Optionen.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-12 pt-28">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Werden Sie Reseller</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Starten Sie noch heute Ihr eigenes IPTV-Geschäft mit unserem umfassenden Reseller-Programm
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#111] rounded-lg p-6 text-center hover:bg-[#1a1a1a] transition-colors">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-yellow-500 mb-6 flex items-center">
              <span className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center mr-2">
                1
              </span>
              WIE FUNKTIONIERT DAS KREDITSYSTEM?
            </h2>

            <p className="text-white mb-6 pl-10">
              Wenn Sie Reseller werden, müssen Sie Credits kaufen, um Ihr Reseller-Panel aufzuladen, das ist alles, das
              Panel ist kostenlos.
            </p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-3 pl-10">Beispiel:</h3>

            <ul className="space-y-2 pl-10">
              <li className="flex items-start text-white">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>1-Monats-Konto kostet 0,1 Credit</span>
              </li>
              <li className="flex items-start text-white">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>3-Monats-Konto kostet 0,25 Credits</span>
              </li>
              <li className="flex items-start text-white">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>6-Monats-Konto kostet 0,5 Credit</span>
              </li>
              <li className="flex items-start text-white">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>1-Jahres-Konto kostet 1 Credit</span>
              </li>
            </ul>

            <p className="text-white mt-4 mb-12 pl-10">
              Dies hängt davon ab, wie das Panel funktioniert, daher variiert es von Panel zu Panel.
            </p>

            <h2 className="text-2xl font-bold text-yellow-500 mt-12 mb-6 flex items-center">
              <span className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center mr-2">
                2
              </span>
              WIE FUNKTIONIERT DAS RESELLER-KONTO?
            </h2>

            <p className="text-white mb-4 pl-10">
              Um mit dem Weiterverkauf zu beginnen, benötigen Sie nur 2 Dinge: Panel + Credits
            </p>

            <ul className="space-y-3 mb-12 pl-10">
              <li className="flex items-start text-white">
                <span className="text-blue-400 mr-2 text-xl">■</span>
                <span>Das Panel ist die Plattform, mit der Sie Linien für Ihre Kunden erstellen.</span>
              </li>
              <li className="flex items-start text-white">
                <span className="text-blue-400 mr-2 text-xl">■</span>
                <span>Wir stellen es kostenlos zur Verfügung und es hat kein Ablaufdatum.</span>
              </li>
              <li className="flex items-start text-white">
                <span className="text-blue-400 mr-2 text-xl">■</span>
                <span>Sie zahlen nur für die Credits, die Sie zur Erstellung von Konten verwenden.</span>
              </li>
              <li className="flex items-start text-white">
                <span className="text-blue-400 mr-2 text-xl">■</span>
                <span>
                  Solange Sie Credits haben, können Sie Ihren Service verkaufen. Wenn Ihnen die Credits ausgehen, können
                  Sie sie durch eine neue Bestellung hinzufügen.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-yellow-500 mt-12 mb-6 flex items-center">
              <span className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center mr-2">
                3
              </span>
              WAS BIETEN WIR, UM IHNEN BEIM START IHRES GESCHÄFTS ZU HELFEN?
            </h2>

            <ul className="space-y-3 pl-10">
              <li className="flex items-start text-white">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Um Ihr Reseller-Panel aufzuladen, müssen Sie Credits kaufen, wenn Sie Reseller werden.</span>
              </li>
              <li className="flex items-start text-white">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Ein Agent wird Ihnen mit Screenshots und Videos helfen, die Nutzung des Panels zu erlernen.</span>
              </li>
              <li className="flex items-start text-white">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Sie müssen nur für die Credits bezahlen, um mit der Erstellung von Linien zu beginnen.</span>
              </li>
              <li className="flex items-start text-white">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Spezielle Rabatte: Je mehr Credits Sie kaufen, desto weniger zahlen Sie!</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <div className="relative mx-auto mb-8">
              <div className="absolute -top-6 -right-4 z-10">
                <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 1L12.39 6.3H18.13L13.87 9.7L15.26 15L10 11.6L4.74 15L6.13 9.7L1.87 6.3H7.61L10 1Z" />
                </svg>
              </div>
              <div className="bg-[#1a2332] rounded-lg p-4 w-[150px]">
                <div className="bg-yellow-500 text-black font-bold text-xl p-3 rounded-lg mb-2 text-center">IPTV</div>
                <div className="bg-[#1e3a69] text-[#4dde64] font-bold text-2xl p-3 rounded-lg flex items-center justify-center">
                  $
                </div>
              </div>
            </div>

            <div className="bg-[#1a2332] rounded-lg p-8 w-full max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Starten Sie noch heute als Reseller</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#2a3447] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ihre E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#2a3447] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <select
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#2a3447] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Wählen Sie Ihr Gerät/App</option>
                    <option value="Smart TV">Smart TV</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                    <option value="Windows">Windows</option>
                    <option value="MAG Box">MAG Box</option>
                    <option value="Formuler">Formuler</option>
                    <option value="Other">Anderes</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-0 bg-green-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center justify-center">
                    <SendIcon className="h-5 w-5 mr-2" />
                    Über WhatsApp senden
                  </span>
                </button>

                <p className="text-xs text-center text-gray-400">*Alle Felder sind erforderlich</p>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-300">Ihre Daten sind sicher und verschlüsselt</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-[#111] rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Was unsere Reseller sagen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-white">Michael S.</h3>
                  <p className="text-gray-400 text-sm">Reseller seit 2022</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Ich habe mit nur 10 Credits begonnen und habe jetzt über 200 regelmäßige Kunden. Das Panel ist einfach
                zu bedienen und das Support-Team ist immer da, wenn ich Hilfe brauche."
              </p>
              <div className="flex text-yellow-500 mt-2">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                  S
                </div>
                <div>
                  <h3 className="font-bold text-white">Sarah K.</h3>
                  <p className="text-gray-400 text-sm">Reseller seit 2023</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Die Qualität der Streams ist ausgezeichnet, was den Verkauf erleichtert. Meine Kunden sind zufrieden
                und verlängern ihre Abonnements. Eine großartige Geschäftsmöglichkeit!"
              </p>
              <div className="flex text-yellow-500 mt-2">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-white">Alex T.</h3>
                  <p className="text-gray-400 text-sm">Reseller seit 2021</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Dieses Reseller-Programm ist zu meiner Haupteinnahmequelle geworden. Die Gewinnmargen sind großartig
                und die Plattform ist zuverlässig. Sehr empfehlenswert für jeden, der ein Geschäft starten möchte."
              </p>
              <div className="flex text-yellow-500 mt-2">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Häufig gestellte Fragen</h2>
          <div className="space-y-4">
            <div className="bg-[#111] p-6 rounded-lg">
              <h3 className="font-bold text-yellow-500 mb-2">Wie viel kann ich als Reseller verdienen?</h3>
              <p className="text-gray-300">
                Ihre Einnahmen hängen davon ab, wie viele Abonnements Sie verkaufen und zu welchem Preis. Viele unserer
                Reseller erhöhen die Preise um 50-100% und erzielen ein beträchtliches Einkommen.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg">
              <h3 className="font-bold text-yellow-500 mb-2">Benötige ich technisches Wissen, um Reseller zu sein?</h3>
              <p className="text-gray-300">
                Nein, unser Panel ist benutzerfreundlich gestaltet. Sie benötigen kein technisches Wissen, um zu
                beginnen. Wir bieten auch vollständige Schulung und Unterstützung, um Ihnen zum Erfolg zu verhelfen.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg">
              <h3 className="font-bold text-yellow-500 mb-2">Wie werde ich von meinen Kunden bezahlt?</h3>
              <p className="text-gray-300">
                Sie können Zahlungen von Ihren Kunden über verschiedene Methoden wie PayPal, Kreditkarten,
                Banküberweisungen oder sogar Kryptowährung akzeptieren. Sie haben die volle Kontrolle darüber, wie Sie
                Zahlungen sammeln.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-lg">
              <h3 className="font-bold text-yellow-500 mb-2">
                Gibt es eine Mindestanzahl an Credits, die ich kaufen muss?
              </h3>
              <p className="text-gray-300">
                Wir empfehlen, mit mindestens 10 Credits zu beginnen, aber es gibt kein strenges Minimum. Sie können
                klein anfangen und Ihre Investition erhöhen, wenn Ihr Geschäft wächst.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
