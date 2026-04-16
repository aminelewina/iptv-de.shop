"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import DeviceSelectionModal from "@/components/device-selection-modal"
import { Zap, Check } from "lucide-react"
import { videoSchema } from "@/lib/structured-data"

export default function OurChannelsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleTestNowClick = () => {
    setIsModalOpen(true)
  }

  const handleDeviceSelect = (device: string) => {
    // Close the modal
    setIsModalOpen(false)

    // Format the WhatsApp message with the selected device
    const message = `Testanfrage**%0AAntwort* %2311362%0AGewähltes Gerät: ${device}%0A%0Aupiptv.tech%0A%0A`

    // Create the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=447539147993&text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema),
        }}
      />

      <div className="flex-grow container mx-auto px-4 py-12 pt-28">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Unsere Kanäle</h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-300 text-center mb-8">
            Wir bieten über 30.000 Kanäle, über 60.000 Filme und über 8.400 Fernsehserien mit 335.000 Episoden. Nachdem
            Sie Ihren Plan gekauft haben, können Sie die Zeile nach Belieben bearbeiten (Entfernen Sie die unerwünschten
            Kanäle / Länder)
          </p>

          <div className="relative w-full">
            <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <div
                className="wistia_responsive_wrapper"
                style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
              >
                <iframe
                  src="https://fast.wistia.net/embed/iframe/d5h3av90qg?seo=false&videoFoam=true"
                  title="Kanalliste - Beispielvideo"
                  allow="autoplay; fullscreen"
                  allowTransparency={true}
                  frameBorder="0"
                  scrolling="no"
                  className="wistia_embed"
                  name="wistia_embed"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleTestNowClick}
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-bold py-3 px-8 rounded-md transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-md"
            >
              <Zap className="h-5 w-5 mr-2" />
              JETZT TESTEN
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-blue-800 rounded-lg overflow-hidden p-6">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Premium-Inhalte aus aller Welt</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-900/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Umfangreiche Kanalauswahl</h3>
              <ul className="space-y-2">
                <li className="text-white flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Über 30.000 Live-TV-Kanäle aus verschiedenen Ländern</span>
                </li>
                <li className="text-white flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Alle wichtigen deutschen Sender in HD und FHD Qualität</span>
                </li>
                <li className="text-white flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Internationale Sender aus Europa, Amerika, Asien und mehr</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Premium-Inhalte</h3>
              <ul className="space-y-2">
                <li className="text-white flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Über 60.000 Filme in verschiedenen Sprachen</span>
                </li>
                <li className="text-white flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Über 8.400 Serien mit mehr als 335.000 Episoden</span>
                </li>
                <li className="text-white flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regelmäßige Updates mit neuen Inhalten</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-white text-lg">
              Für eine vollständige Kanalliste und weitere Informationen kontaktieren Sie uns bitte über WhatsApp.
            </p>
          </div>
        </div>
      </div>

      <Footer />

      <DeviceSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDeviceSelect={handleDeviceSelect}
      />

      <Script src="https://fast.wistia.net/assets/external/E-v1.js" strategy="afterInteractive" />
    </main>
  )
}
