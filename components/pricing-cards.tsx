import Link from "next/link"
import { Check } from "lucide-react"

const pricingOptions = [
  {
    id: "recommandee",
    title: "Recommandée",
    subtitle: "La plus sécurisée",
    price: "4,32",
    features: [
      "Distribution J + 3",
      "Preuve de dépôt garantie",
      "Avec ou sans avis de réception",
      "Traçabilité complète"
    ],
    cta: "Choisir cette option",
    color: "brand-orange",
    badge: "Le plus populaire"
  },
  {
    id: "suivie",
    title: "Suivie",
    subtitle: "Suivi en temps réel",
    price: "2,22",
    features: [
      "Distribution J + 3",
      "Suivi de votre courrier",
      "Notification de dépôt"
    ],
    cta: "Choisir cette option",
    color: "brand-blue"
  },
  {
    id: "verte",
    title: "Verte",
    subtitle: "Économique & écologique",
    price: "1,92",
    features: [
      "Distribution J + 3",
      "Option éco-responsable",
      "Tarif avantageux"
    ],
    cta: "Choisir cette option",
    color: "green-600"
  }
]

export function PricingCards() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Sélectionnez votre affranchissement
          </h2>
          
          <p className="text-text-gray text-base md:text-lg max-w-2xl mx-auto">
            Choisissez l'option qui correspond le mieux à vos besoins
          </p>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div
              key={option.id}
              className={`relative bg-white rounded-2xl transition-all duration-300 ${
                index === 0 
                  ? "shadow-2xl scale-105 md:scale-105 border-2 border-brand-orange" 
                  : "shadow-lg hover:shadow-xl border border-gray-200"
              }`}
            >
              {/* Badge */}
              {option.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    {option.badge}
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 md:p-8">
                
                {/* Title Section */}
                <div className="text-center mb-6 pt-2">
                  <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                    option.color === "brand-orange" ? "text-brand-orange" :
                    option.color === "brand-blue" ? "text-brand-blue" : "text-green-600"
                  }`}>
                    Lettre {option.title}
                  </h3>
                  <p className="text-sm text-text-gray">
                    {option.subtitle}
                  </p>
                </div>

                {/* Price Section */}
                <div className="text-center mb-8 pb-6 border-b-2 border-gray-100">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className={`text-5xl md:text-6xl font-bold ${
                      option.color === "brand-orange" ? "text-brand-orange" :
                      option.color === "brand-blue" ? "text-brand-blue" : "text-green-600"
                    }`}>
                      {option.price}
                    </span>
                    <span className={`text-2xl font-bold ${
                      option.color === "brand-orange" ? "text-brand-orange" :
                      option.color === "brand-blue" ? "text-brand-blue" : "text-green-600"
                    }`}>
                      €
                    </span>
                  </div>
                  <p className="text-xs text-text-light">
                    À partir de <span className="text-text-gray">*</span>
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
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
                      <span className="text-sm text-text-gray">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/form/${option.id}`}
                  className={`block w-full py-4 px-6 rounded-xl text-base font-semibold text-center transition-all duration-200 ${
                    index === 0
                      ? "bg-brand-orange hover:bg-brand-orange-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                      : "bg-gray-50 hover:bg-gray-100 text-text-dark border-2 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {option.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom disclaimer */}
        <div className="text-center mt-8">
          <p className="text-xs text-text-light max-w-3xl mx-auto">
            *Tarifs indicatifs. Sans abonnement, sans engagement. Vous ne payez que les lettres que vous envoyez.
          </p>
        </div>
      </div>
    </section>
  )
}
