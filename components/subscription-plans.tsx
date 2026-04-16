"use client"

import { useState } from "react"
import { Check, Star, Shield, Clock, Zap } from "lucide-react"
import Link from "next/link"
import DeviceSelectionModal from "./device-selection-modal"
import OptimizedImage from "./optimized-image"

export default function SubscriptionPlans() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPlan, setCurrentPlan] = useState<string>("")

  // Common benefits for all plans
  const commonBenefits = [
    "80.000+ deutsche IPTV-Kanäle (inkl. DAZN, SKY) live & unterbrechungsfrei",
    "EPG & Replay auf allen Sendern",
    "Netflix, Prime, Disney+, Paramount+ u.v.m.",
    "Bundesliga & Champions League live",
    "Live: Basketball, Handball, Eishockey, Formel 1",
    "XXX-Kanäle für Erwachsene inklusive",
    "Wöchentlich neue VOD-Filme & Serien",
    "24/7 Kundenservice",
    "Und vieles mehr",
  ]

  const plans = [
    {
      duration: "3 MONATE",
      price: "€25",
      originalPrice: "€35",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      borderColor: "border-gray-700",
      features: commonBenefits,
      link: "/3-months-subscription",
    },
    {
      duration: "6 MONATE",
      price: "€35",
      originalPrice: "€50",
      bgColor: "bg-gradient-to-br from-red-900 to-red-950",
      borderColor: "border-red-800",
      features: commonBenefits,
      link: "/6-months-subscription",
    },
    {
      duration: "12 MONATE",
      price: "€50",
      originalPrice: "€75",
      bgColor: "bg-gradient-to-br from-amber-700 to-amber-900",
      borderColor: "border-amber-600",
      isBestValue: true,
      features: commonBenefits,
      link: "/12-months-subscription",
    },
  ]

  const handleTestNowClick = (planDuration: string) => {
    setCurrentPlan(planDuration)
    setIsModalOpen(true)
  }

  const handleDeviceSelect = (device: string) => {
    // Close the modal
    setIsModalOpen(false)

    // Format the WhatsApp message with the selected device
    const message = `Testanfrage**%0AAntwort* %2311362%0AGewähltes Gerät: ${device}%0AGewählter Plan: ${currentPlan}%0A%0Aupiptv.tech%0A%0A`

    // Create the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=447539147993&text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="plans" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Premium-Abonnementpläne</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Wählen Sie Ihren Plan und genießen Sie Live-Kanäle, Sportkanäle, VOD, Serien und mehr Ihrer Favoriten
          </p>
          <div className="flex justify-center mt-6">
            <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              Zeitlich begrenztes Angebot - Bis zu 40% sparen
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 border-2 ${plan.borderColor} ${
                plan.isBestValue ? "md:scale-105 md:-mt-4 md:mb-4 z-10" : ""
              }`}
            >
              {plan.isBestValue && (
                <div className="bg-amber-500 text-black text-center py-2 font-bold text-sm uppercase tracking-wider flex items-center justify-center">
                  <Star className="h-4 w-4 mr-1" /> Bestes Angebot <Star className="h-4 w-4 ml-1" />
                </div>
              )}
              <div className={`${plan.bgColor} text-white text-center py-8`}>
                <h3 className="font-bold text-xl uppercase tracking-wider">{plan.duration}</h3>
                <div className="mt-2 flex items-center justify-center">
                  <span className="text-gray-400 line-through text-lg mr-2">{plan.originalPrice}</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">Einmalzahlung</p>
              </div>
              <div className="p-6 bg-[#111] text-white">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={plan.link}
                    className={`block w-full ${
                      plan.isBestValue
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-yellow-500 hover:bg-yellow-400"
                    } text-black font-bold py-4 text-center rounded-lg transition-colors relative overflow-hidden group`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Zap className="h-5 w-5 mr-2" />
                      DETAILS ANZEIGEN
                    </span>
                    {plan.isBestValue && (
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    )}
                  </Link>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-center text-sm text-gray-300">
                    <Clock className="h-4 w-4 mr-1 text-green-500" />
                    <span>Sofortige Aktivierung</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-300">
                    <Shield className="h-4 w-4 mr-1 text-green-500" />
                    <span>Kein bindender Vertrag</span>
                  </div>
                  <div className="flex justify-center mt-2">
                    <OptimizedImage
                      src="http://tvspot.shop/wp-content/uploads/2024/11/guaranteed-safe-checkout-filled-300x23-1.webp"
                      alt="Garantiert sicherer Checkout - Visa, Mastercard, PayPal, Bitcoin und weitere Zahlungsmethoden"
                      width={300}
                      height={23}
                      className="h-6 w-auto"
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DeviceSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDeviceSelect={handleDeviceSelect}
        selectedPlan={currentPlan}
      />
    </section>
  )
}
