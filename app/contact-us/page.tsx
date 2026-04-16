"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SendIcon, MessageSquare, Mail, CheckCircle, ShieldCheck, HelpCircle } from "lucide-react"
import { faqSchema } from "@/lib/structured-data"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    device: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  // Add JSON-LD script to the page
  useEffect(() => {
    // Create script element
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    // Clean up
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the WhatsApp message
    const message = `Kontaktanfrage**%0AName: ${formData.name}%0AEmail: ${formData.email}%0AGerät: ${formData.device}%0ANachricht: ${formData.message}%0A%0Aupiptv.tech`

    // Create the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=447539147993&text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Show success message
    setFormSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: "",
        email: "",
        device: "",
        message: "",
      })
    }, 5000)
  }

  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-12 pt-28">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Kontakt</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Haben Sie Fragen zu unseren Diensten? Benötigen Sie Hilfe mit Ihrem Abonnement? Unser Team ist rund um die
            Uhr für Sie da.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg p-6 text-center transform transition-transform hover:scale-105">
            <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">WhatsApp Support</h2>
            <p className="text-gray-300 mb-4">Erhalten Sie sofortigen Support über WhatsApp</p>
            <p className="text-white font-bold">+44 753 914 7993</p>
            <p className="text-sm text-gray-300 mt-2">Rund um die Uhr verfügbar</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-purple-950 rounded-lg p-6 text-center transform transition-transform hover:scale-105">
            <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">E-Mail Support</h2>
            <p className="text-gray-300 mb-4">Senden Sie uns jederzeit eine E-Mail</p>
            <p className="text-white font-bold">contact@viewmax.store</p>
            <p className="text-sm text-gray-300 mt-2">Antwort innerhalb von 24 Stunden</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#1a2332] rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Kontaktieren Sie uns</h2>
              <p className="text-gray-300">
                Füllen Sie das Formular aus und wir melden uns so schnell wie möglich bei Ihnen
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 flex flex-col items-center justify-center">
                <div className="bg-green-500/20 rounded-full p-4 mb-4">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Nachricht gesendet!</h3>
                <p className="text-gray-300 text-center">
                  Vielen Dank für Ihre Kontaktaufnahme. Wir werden so schnell wie möglich auf Ihre Anfrage antworten.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Ihr Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Geben Sie Ihren Namen ein"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#2a3447] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Ihre E-Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Geben Sie Ihre E-Mail ein"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#2a3447] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="device" className="block text-sm font-medium text-gray-300 mb-1">
                    Ihr Gerät
                  </label>
                  <select
                    id="device"
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Ihre Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Wie können wir Ihnen helfen?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-[#2a3447] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  <span>Ihre Daten sind sicher und verschlüsselt</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  <SendIcon className="h-5 w-5 mr-2" />
                  Über WhatsApp senden
                </button>

                <p className="text-xs text-center text-gray-400">*Alle Felder sind erforderlich</p>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-[#1a2332] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2 text-yellow-500" />
                Häufig gestellte Fragen
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-yellow-500 mb-2">Wie schnell kann ich mein Abonnement aktivieren?</h3>
                  <p className="text-white">
                    Die meisten Abonnements werden sofort nach Zahlungsbestätigung aktiviert.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-yellow-500 mb-2">Bieten Sie Rückerstattungen an?</h3>
                  <p className="text-white">
                    Ja, wir bieten eine 24-Stunden-Geld-zurück-Garantie, wenn Sie mit unserem Service nicht zufrieden
                    sind.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-yellow-500 mb-2">
                    Wie viele Geräte kann ich mit einem Abonnement nutzen?
                  </h3>
                  <p className="text-white">
                    Jedes Abonnement erlaubt Ihnen, den Service auf einem Gerät gleichzeitig zu nutzen.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-yellow-500 mb-2">Welche Zahlungsmethoden akzeptieren Sie?</h3>
                  <p className="text-white">Wir akzeptieren PayPal, Kreditkarten und Kryptowährungszahlungen.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a2332] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-green-500" />
                WhatsApp Support Vorteile
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white">Sofortige Antworten</h3>
                    <p className="text-gray-300 text-sm">Erhalten Sie sofortige Hilfe von unserem Support-Team</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white">Einfache Fehlerbehebung</h3>
                    <p className="text-gray-300 text-sm">Teilen Sie Screenshots für schnellere Problemlösung</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white">24/7 Verfügbarkeit</h3>
                    <p className="text-gray-300 text-sm">Support rund um die Uhr verfügbar</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white">Sichere Kommunikation</h3>
                    <p className="text-gray-300 text-sm">Ende-zu-Ende verschlüsselte Nachrichten</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 text-center">
                <a
                  href="https://api.whatsapp.com/send?phone=447539147993&text=Hallo%2C+Ich+habe+eine+Frage+zu+Ihrem+Service+bei+upiptv.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Kontaktieren Sie uns über WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
