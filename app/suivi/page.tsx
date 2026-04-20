"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Package, MapPin, CheckCircle, Clock, Truck, Mail, AlertCircle } from "lucide-react"

export default function SuiviPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState<"success" | "notfound" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return

    setIsSearching(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate result - in real app, would check actual tracking
    setSearchResult(trackingNumber.length > 10 ? "success" : "notfound")
    setIsSearching(false)
  }

  const trackingSteps = [
    {
      icon: Mail,
      title: "Courrier enregistré",
      description: "Votre courrier a été enregistré dans notre système",
      completed: searchResult === "success"
    },
    {
      icon: Package,
      title: "En cours d'impression",
      description: "Votre lettre est en cours d'impression",
      completed: searchResult === "success"
    },
    {
      icon: Truck,
      title: "Remis au transporteur",
      description: "Votre courrier a été confié à La Poste",
      completed: searchResult === "success"
    },
    {
      icon: MapPin,
      title: "En cours d'acheminement",
      description: "Votre courrier est en route vers sa destination",
      completed: false
    },
    {
      icon: CheckCircle,
      title: "Distribué",
      description: "Le courrier a été livré à son destinataire",
      completed: false
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff]">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-6">
              <Search className="w-8 h-8 text-brand-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">
              <span className="font-light">Suivi de</span>
              <br />
              <span className="font-bold">votre courrier</span>
            </h1>
            <p className="text-text-gray text-base md:text-lg max-w-2xl mx-auto">
              Suivez l'acheminement de votre courrier en temps réel
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-lg mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="tracking" className="block text-sm font-semibold text-text-dark mb-2">
                  Numéro de suivi
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    id="tracking"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Ex: 1A23456789012"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-text-dark placeholder:text-text-light"
                  />
                  <button
                    type="submit"
                    disabled={isSearching || !trackingNumber.trim()}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                      isSearching || !trackingNumber.trim()
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-brand-blue hover:bg-brand-blue-dark text-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    {isSearching ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span className="hidden sm:inline">Recherche...</span>
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        <span className="hidden sm:inline">Rechercher</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <p className="text-xs text-text-light">
                Le numéro de suivi vous a été envoyé par email lors de votre commande
              </p>
            </form>
          </div>

          {/* Search Results */}
          {searchResult === "success" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm mb-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-dark">
                    Courrier trouvé
                  </h2>
                  <p className="text-sm text-text-gray">
                    Numéro de suivi : <span className="font-mono font-semibold">{trackingNumber}</span>
                  </p>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="space-y-6">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed 
                            ? "bg-green-100" 
                            : "bg-gray-100"
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            step.completed 
                              ? "text-green-600" 
                              : "text-gray-400"
                          }`} />
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div className={`w-0.5 h-12 ${
                            step.completed 
                              ? "bg-green-200" 
                              : "bg-gray-200"
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <h3 className={`font-semibold mb-1 ${
                          step.completed 
                            ? "text-text-dark" 
                            : "text-text-gray"
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-sm text-text-gray">
                          {step.description}
                        </p>
                        {step.completed && (
                          <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Complété
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-text-gray">
                  <strong>Estimation de livraison :</strong> 1 à 3 jours ouvrés à compter du dépôt
                </p>
              </div>
            </div>
          )}

          {searchResult === "notfound" && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-900 mb-2">
                    Aucun courrier trouvé
                  </h3>
                  <p className="text-sm text-orange-800 mb-3">
                    Le numéro de suivi saisi ne correspond à aucun envoi dans notre système.
                  </p>
                  <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
                    <li>Vérifiez que vous avez saisi le bon numéro</li>
                    <li>Le numéro peut prendre 24-48h pour être activé</li>
                    <li>Consultez l'email de confirmation de votre commande</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-2">
                    Types de suivi disponibles
                  </h3>
                  <ul className="text-sm text-text-gray space-y-1">
                    <li>• Lettre suivie</li>
                    <li>• Lettre recommandée</li>
                    <li>• Envoi avec AR</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-2">
                    Délais de traitement
                  </h3>
                  <p className="text-sm text-text-gray">
                    Le numéro de suivi est généralement activé sous 24 à 48 heures après la commande.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              Besoin d'aide avec votre suivi ?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour vous aider à localiser votre courrier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-brand-blue px-6 py-3 rounded-lg text-base font-semibold transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="/faq"
                className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors"
              >
                Consulter la FAQ
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
