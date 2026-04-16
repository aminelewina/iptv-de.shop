"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Star, Shield, Zap, Award, ArrowRight } from "lucide-react"
import DeviceSelectionModal from "./device-selection-modal"
import Header from "./header"
import Footer from "./footer"
import OptimizedImage from "./optimized-image"

interface ProductPageProps {
  duration: "3" | "6" | "12"
  price: string
  originalPrice?: string
  features: string[]
  benefits: string[]
  imageSrc: string
  title: string
  description: string
  slug: string
}

export default function ProductPage({
  duration,
  price,
  originalPrice,
  features,
  benefits,
  imageSrc,
  title,
  description,
  slug,
}: ProductPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [actionType, setActionType] = useState<"test" | "buy">("test")
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleOpenModal = (type: "test" | "buy") => {
    setActionType(type)
    setIsModalOpen(true)
  }

  const handleDeviceSelect = (device: string) => {
    // Construct WhatsApp message based on action type
    const message =
      actionType === "test"
        ? `Hallo, ich möchte das ${duration}-Monats IPTV-Abo testen. Mein Gerät: ${device} Site=upiptv.tech`
        : `Hallo, ich möchte das ${duration}-Monats IPTV-Abo kaufen. Mein Gerät: ${device} Site=upiptv.tech`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)

    // Redirect to WhatsApp
    window.open(`https://wa.me/+4915792632837?text=${encodedMessage}`, "_blank")

    // Close modal
    setIsModalOpen(false)
  }

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-black to-[#0a1a1f] pt-[5.5rem] mt-[5vw] pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Product Image - Optimized */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[3/4] transform transition-transform duration-700 hover:scale-105">
                  <OptimizedImage
                    src={imageSrc}
                    alt={`UPIPTV ${duration}-Monats Abo Paket`}
                    fill
                    objectFit="contain"
                    priority
                    placeholder="blur"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoad={() => setImageLoaded(true)}
                    className={`transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  />

                  {/* Skeleton loader while image loads */}
                  {!imageLoaded && <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg"></div>}
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full lg:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-gray-300 ml-2">12500+ Kunden</span>
                </div>
                <p className="text-gray-300 mb-6 max-w-2xl">{description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">{price}€</span>
                    {originalPrice && <span className="ml-2 text-xl text-gray-400 line-through">{originalPrice}€</span>}
                    <span className="ml-2 text-gray-300">/ {duration} Monate</span>
                  </div>
                  <p className="text-green-500 font-medium mt-1">
                    <Shield className="inline-block w-4 h-4 mr-1" />
                    Sichere Zahlung & Sofortige Aktivierung
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => handleOpenModal("test")}
                    className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Kostenlos testen
                  </button>
                  <button
                    onClick={() => handleOpenModal("buy")}
                    className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Jetzt aktivieren
                  </button>
                </div>

                {/* Key Features */}
                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4 mb-4">
                  <h3 className="text-white font-bold mb-2 flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    Ihre Vorteile:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#0a1a1f]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Warum unser {duration}-Monats IPTV-Abo wählen?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-900 bg-opacity-50 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 h-full"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    {index === 0 ? (
                      <Zap className="w-6 h-6 text-white" />
                    ) : index === 1 ? (
                      <Shield className="w-6 h-6 text-white" />
                    ) : (
                      <Award className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.split(":")[0]}</h3>
                  <p className="text-gray-300">{benefit.split(":")[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Häufig gestellte Fragen</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Was ist im {duration}-Monats IPTV-Abo enthalten?</h3>
                  <p className="text-gray-300">
                    Unser {duration}-Monats Abo bietet Zugang zu über 97.000 Live-TV-Kanälen aus aller Welt, darunter
                    deutsche Sender, Sport, Filme und internationale Kanäle. Sie erhalten außerdem Zugriff auf eine
                    umfangreiche VOD-Bibliothek mit über 182.000 Filmen und Serien.
                  </p>
                </div>
                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Wie kann ich nach dem Kauf auf den Dienst zugreifen?</h3>
                  <p className="text-gray-300">
                    Nach dem Kauf erhalten Sie sofort Ihre Zugangsdaten per WhatsApp. Sie können den Dienst dann auf
                    Ihrem Smart TV, Smartphone, Tablet, Computer oder IPTV-Box installieren. Wir bieten detaillierte
                    Anleitungen und Support bei der Einrichtung.
                  </p>
                </div>
                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Kann ich das Abonnement auf mehreren Geräten nutzen?</h3>
                  <p className="text-gray-300">
                    Ja, Sie können Ihr IPTV-Abonnement auf bis zu 2 Geräten nutzen, aber nicht gleichzeitig. Sie können
                    zum Beispiel in Ihrem Wohn- und Schlafzimmer oder unterwegs fernsehen, aber nicht gleichzeitig.
                  </p>
                </div>
                <div className="text-center mt-8">
                  <Link
                    href="/faq"
                    className="text-red-500 hover:text-red-400 font-medium flex items-center justify-center"
                  >
                    Alle FAQs anzeigen <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-[#0a1a1f] to-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Bereit für Premium-IPTV-Unterhaltung?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Sichern Sie sich jetzt Ihr {duration}-Monats IPTV-Abo und genießen Sie sofortigen Zugang zu tausenden von
              Kanälen und On-Demand-Inhalten in HD-Qualität.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleOpenModal("test")}
                className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Kostenlos testen
              </button>
              <button
                onClick={() => handleOpenModal("buy")}
                className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Jetzt aktivieren
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Device Selection Modal */}
      <DeviceSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDeviceSelect={handleDeviceSelect}
        selectedPlan={`${duration}-Monats Abo`}
      />
    </>
  )
}
