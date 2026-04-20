"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Check, Shield, Clock, TrendingUp } from "lucide-react"
import { useOrder, type MailType } from "@/lib/order-context"

const mailOptions = [
  {
    id: "recommandee" as MailType,
    title: "Recommandée",
    subtitle: "La plus sécurisée",
    price: "4,32",
    priceValue: 4.32,
    features: [
      "Distribution J + 3",
      "Preuve de dépôt garantie",
      "Avec ou sans avis de réception",
      "Traçabilité complète"
    ],
    color: "brand-orange",
    gradient: "from-orange-50 to-white",
    isPrimary: true,
    badge: "Recommandé"
  },
  {
    id: "suivie" as MailType,
    title: "Suivie",
    subtitle: "Suivi en temps réel",
    price: "2,22",
    priceValue: 2.22,
    features: [
      "Distribution J + 3",
      "Suivi de votre courrier",
      "Notification de dépôt"
    ],
    color: "brand-blue",
    gradient: "from-blue-50 to-white"
  },
  {
    id: "verte" as MailType,
    title: "Verte",
    subtitle: "Économique & écologique",
    price: "1,92",
    priceValue: 1.92,
    features: [
      "Distribution J + 3",
      "Option éco-responsable",
      "Tarif avantageux"
    ],
    color: "green-600",
    gradient: "from-green-50 to-white"
  }
]

export function Step1Affranchissement() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { order, setMailType, setStep } = useOrder()

  useEffect(() => {
    const typeFromUrl = searchParams.get("type") as MailType | null
    if (typeFromUrl && ["recommandee", "suivie", "verte"].includes(typeFromUrl)) {
      setMailType(typeFromUrl)
      setStep(2)
      router.push("/envoyer/expediteur")
    }
  }, [searchParams, setMailType, setStep, router])

  const handleSelect = (type: MailType) => {
    setMailType(type)
    setStep(2)
    router.push("/envoyer/expediteur")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            <Shield className="w-3.5 h-3.5" />
            Service Éco inclus 24h – Puis 49,90€/mois sans engagement
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-text-dark mb-3">
            <span className="font-light">1. Sélectionnez votre</span>
            <br />
            <span className="font-bold">affranchissement</span>
          </h1>
          
          <p className="text-text-gray text-sm md:text-base max-w-2xl mx-auto">
            Choisissez l'option qui correspond le mieux à vos besoins
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-gray">
            <Shield className="w-4 h-4 text-brand-blue" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-gray">
            <Clock className="w-4 h-4 text-brand-blue" />
            <span>Envoi sous 24-48h</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-gray">
            <TrendingUp className="w-4 h-4 text-brand-blue" />
            <span>+10 000 lettres envoyées</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {mailOptions.map((option) => {
            const isSelected = order.mailType === option.id
            
            return (
              <div
                key={option.id}
                className={`relative bg-gradient-to-br ${option.gradient} rounded-xl transition-all duration-300 cursor-pointer group ${
                  option.isPrimary 
                    ? "shadow-lg scale-105 md:scale-105 border-2 border-brand-orange z-10" 
                    : "shadow-md hover:shadow-lg border-2 border-gray-100 hover:border-gray-200"
                } ${
                  isSelected ? "ring-4 ring-brand-blue/30" : ""
                }`}
                onClick={() => handleSelect(option.id)}
                onKeyDown={(e) => e.key === "Enter" && handleSelect(option.id)}
                tabIndex={0}
                role="button"
                aria-label={`Sélectionner ${option.title}`}
              >
                {/* Badge */}
                {option.badge && (
                  <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                      {option.badge}
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-4 md:p-6">
                  
                  {/* Title Section */}
                  <div className="text-center mb-4 pt-1">
                    <h3 className={`text-xl md:text-2xl font-bold mb-1 ${
                      option.color === "brand-orange" ? "text-brand-orange" :
                      option.color === "brand-blue" ? "text-brand-blue" : "text-green-600"
                    }`}>
                      Lettre {option.title}
                    </h3>
                    <p className="text-sm text-text-gray font-medium">
                      {option.subtitle}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className="text-center mb-6 pb-4 border-b border-gray-200">
                    <div className="flex items-end justify-center gap-1 mb-1">
                      <span className={`text-4xl md:text-5xl font-bold tracking-tight ${
                        option.color === "brand-orange" ? "text-brand-orange" :
                        option.color === "brand-blue" ? "text-brand-blue" : "text-green-600"
                      }`}>
                        {option.price}
                      </span>
                      <span className={`text-xl font-bold pb-1 ${
                        option.color === "brand-orange" ? "text-brand-orange" :
                        option.color === "brand-blue" ? "text-brand-blue" : "text-green-600"
                      }`}>
                        €
                      </span>
                    </div>
                    <p className="text-xs text-text-light font-medium">
                      À partir de <span className="text-text-gray">*</span>
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          option.color === "brand-orange" ? "bg-orange-100" :
                          option.color === "brand-blue" ? "bg-blue-100" : "bg-green-100"
                        }`}>
                          <Check className={`w-3 h-3 ${
                            option.color === "brand-orange" ? "text-brand-orange" :
                            option.color === "brand-blue" ? "text-brand-blue" : "text-green-600"
                          }`} />
                        </div>
                        <span className="text-sm text-text-gray leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelect(option.id)
                    }}
                    className={`w-full py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      option.isPrimary
                        ? "bg-brand-orange hover:bg-brand-orange-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                        : "bg-white hover:bg-gray-50 text-text-dark border-2 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {isSelected ? "✓ Sélectionné" : "Choisir cette option"}
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent group-hover:from-white/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>

        {/* Footer Notice */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
          <p className="text-xs md:text-sm text-text-gray text-center leading-relaxed max-w-5xl mx-auto">
            <span className="font-semibold text-text-dark">* Tarifs tout compris.</span> Les tarifs affichés intègrent le Service Éco, activé automatiquement avec votre commande. Inclus pendant 24h, puis 49,90 €/mois. Sans engagement. Nous acceptons les cartes bancaires (CB, Mastercard, Visa). Vos lettres seront imprimées et postées sous 24h à 48h par notre prestataire de services.
          </p>
        </div>
      </div>
    </div>
  )
}
