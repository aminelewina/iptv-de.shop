import Link from "next/link"
import { Check, Shield, Clock, TrendingUp, Info } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
      "Traçabilité complète",
      "Signature du destinataire",
      "Garantie en cas de perte"
    ],
    cta: "Choisir cette option",
    color: "brand-orange",
    gradient: "from-orange-50 to-white",
    badge: "Recommandé"
  },
  {
    id: "suivie",
    title: "Suivie",
    subtitle: "Suivi en temps réel",
    price: "2,22",
    features: [
      "Distribution J + 3",
      "Suivi de votre courrier",
      "Notification de dépôt",
      "Historique de suivi",
      "Confirmation de distribution"
    ],
    cta: "Choisir cette option",
    color: "brand-blue",
    gradient: "from-blue-50 to-white"
  },
  {
    id: "verte",
    title: "Verte",
    subtitle: "Économique & écologique",
    price: "1,92",
    features: [
      "Distribution J + 3",
      "Option éco-responsable",
      "Tarif avantageux",
      "Compensation carbone",
      "Papier recyclé"
    ],
    cta: "Choisir cette option",
    color: "green-600",
    gradient: "from-green-50 to-white"
  }
]

export default function TarifsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff] py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
              Nos <span className="text-brand-blue">Tarifs</span>
            </h1>
            <p className="text-lg md:text-xl text-text-gray max-w-3xl mx-auto mb-6">
              Des tarifs transparents et compétitifs pour tous vos envois de courrier
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-text-gray">
                <Shield className="w-4 h-4 text-brand-blue" />
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-gray">
                <Clock className="w-4 h-4 text-brand-blue" />
                <span>Envoi sous 24-48h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-gray">
                <TrendingUp className="w-4 h-4 text-brand-blue" />
                <span>+10 000 lettres envoyées</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
              {pricingOptions.map((option, index) => (
                <div
                  key={option.id}
                  className={`relative bg-gradient-to-br ${option.gradient} rounded-xl transition-all duration-300 group ${
                    index === 0 
                      ? "shadow-lg scale-105 md:scale-105 border-2 border-brand-orange z-10" 
                      : "shadow-md hover:shadow-lg border-2 border-gray-100 hover:border-gray-200"
                  }`}
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
                    <Link
                      href={`/form/${option.id}`}
                      className={`block w-full py-3 px-4 rounded-lg text-sm font-semibold text-center transition-all duration-200 ${
                        index === 0
                          ? "bg-brand-orange hover:bg-brand-orange-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                          : "bg-white hover:bg-gray-50 text-text-dark border-2 border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {option.cta}
                    </Link>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-transparent group-hover:from-white/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
            
            {/* Footer Notice */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100 mb-8">
              <p className="text-xs md:text-sm text-text-gray text-center leading-relaxed max-w-5xl mx-auto">
                <span className="font-semibold text-text-dark">* Tarifs tout compris.</span> Les tarifs affichés intègrent le Service Éco, activé automatiquement avec votre commande. Inclus pendant 24h, puis 49,90 €/mois. Sans engagement. Nous acceptons les cartes bancaires (CB, Mastercard, Visa). Vos lettres seront imprimées et postées sous 24h à 48h par notre prestataire de services.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Info className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-text-dark mb-4">
                    Informations complémentaires
                  </h2>
                  
                  <div className="space-y-4 text-text-gray">
                    <div>
                      <h3 className="font-semibold text-text-dark mb-2">Service Éco</h3>
                      <p className="text-sm">
                        Le Service Éco est automatiquement activé avec votre première commande. Il vous permet de bénéficier de tarifs préférentiels sur tous vos envois. Gratuit pendant 24h, puis 49,90 € par mois sans engagement.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-text-dark mb-2">Délais de traitement</h3>
                      <p className="text-sm">
                        Vos lettres sont imprimées et postées sous 24h à 48h après validation de votre commande. La distribution est assurée sous 3 jours ouvrés (J+3).
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-text-dark mb-2">Modes de paiement</h3>
                      <p className="text-sm">
                        Nous acceptons les cartes bancaires (CB, Visa, Mastercard). Tous les paiements sont sécurisés et cryptés.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-text-dark mb-2">Annulation</h3>
                      <p className="text-sm">
                        Le Service Éco est sans engagement. Vous pouvez annuler à tout moment depuis votre espace client. Aucun frais d'annulation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à envoyer votre courrier ?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Choisissez votre affranchissement et commencez dès maintenant
            </p>
            <Link
              href="/envoyer"
              className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Envoyer un courrier
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
