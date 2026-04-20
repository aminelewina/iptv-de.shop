"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useOrder } from "@/lib/order-context"

export function Step3Destinataire() {
  const router = useRouter()
  const { order, setRecipient, setStep } = useOrder()
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!order.recipient.firstName.trim()) newErrors.firstName = "Prénom requis"
    if (!order.recipient.lastName.trim()) newErrors.lastName = "Nom requis"
    if (!order.recipient.address.trim()) newErrors.address = "Adresse requise"
    if (!order.recipient.postalCode.trim()) newErrors.postalCode = "Code postal requis"
    else if (!/^\d{5}$/.test(order.recipient.postalCode)) {
      newErrors.postalCode = "Code postal invalide (5 chiffres)"
    }
    if (!order.recipient.city.trim()) newErrors.city = "Localité requise"
    if (!order.recipient.country.trim()) newErrors.country = "Pays requis"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      setStep(4)
      router.push("/envoyer/courrier")
    }
  }

  const handleBack = () => {
    setStep(2)
    router.push("/envoyer/expediteur")
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl text-text-dark mb-8">
          3. Adresse du destinataire
        </h1>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          {/* Envelope icons */}
          <div className="flex justify-end mb-4">
            <div className="flex gap-2">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <rect x="8" y="16" width="48" height="32" rx="2" fill="#1a73a7" stroke="#f5a623" strokeWidth="2"/>
                  <path d="M8 20 L32 36 L56 20" stroke="#f5a623" strokeWidth="2" fill="none"/>
                  <rect x="20" y="24" width="8" height="6" fill="#f5a623"/>
                </svg>
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <rect x="8" y="16" width="48" height="32" rx="2" fill="#1a73a7" stroke="#f5a623" strokeWidth="2"/>
                  <path d="M8 20 L32 36 L56 20" stroke="#f5a623" strokeWidth="2" fill="none"/>
                  <rect x="20" y="24" width="8" height="6" fill="#f5a623"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Professional toggle */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  order.recipient.isProfessional ? "bg-brand-yellow" : "bg-gray-300"
                }`}
                onClick={() => {
                  setRecipient({ isProfessional: !order.recipient.isProfessional })
                  if (!order.recipient.isProfessional) {
                    setRecipient({ firstName: "" })
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setRecipient({ isProfessional: !order.recipient.isProfessional })
                    if (!order.recipient.isProfessional) {
                      setRecipient({ firstName: "" })
                    }
                  }
                }}
                tabIndex={0}
                role="switch"
                aria-checked={order.recipient.isProfessional}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    order.recipient.isProfessional ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-white bg-brand-blue-dark px-4 py-2 rounded">
                Votre destinataire est un <span className="font-bold">professionnel</span>
              </span>
            </label>

            <div className="hidden md:block bg-brand-blue-light border border-brand-blue rounded-lg p-4 max-w-xs">
              <p className="text-brand-blue font-semibold text-sm mb-1">Bon à savoir</p>
              <p className="text-xs text-text-gray">
                La preuve de dépot est immédiatement fournie sur votre email après votre paiement
              </p>
            </div>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-text-gray mb-1">
                Prénom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={order.recipient.firstName}
                onChange={(e) => setRecipient({ firstName: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="prénom"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm text-text-gray mb-1">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={order.recipient.lastName}
                onChange={(e) => setRecipient({ lastName: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="nom"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-text-gray mb-1">
              Adresse <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={order.recipient.address}
              onChange={(e) => setRecipient({ address: e.target.value })}
              className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Entrer une adresse"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm text-text-gray mb-1">
              {"Complément d'adresse"}
            </label>
            <input
              type="text"
              value={order.recipient.addressComplement}
              onChange={(e) => setRecipient({ addressComplement: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="complément d'adresse"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-text-gray mb-1">
                Code postal <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={order.recipient.postalCode}
                onChange={(e) => setRecipient({ postalCode: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.postalCode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="code postal"
              />
              {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
            </div>
            <div>
              <label className="block text-sm text-text-gray mb-1">
                Localité <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={order.recipient.city}
                onChange={(e) => setRecipient({ city: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="localité"
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
          </div>

          <div className="md:w-1/2">
            <label className="block text-sm text-text-gray mb-1">Pays</label>
            <select
              value={order.recipient.country}
              onChange={(e) => setRecipient({ country: e.target.value })}
              className={`w-full border rounded-lg px-4 py-3 text-text-dark bg-brand-blue-dark text-white focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Sélectionnez le pays</option>
              <option value="FRANCE">FRANCE</option>
              <option value="BELGIQUE">BELGIQUE</option>
              <option value="SUISSE">SUISSE</option>
              <option value="LUXEMBOURG">LUXEMBOURG</option>
              <option value="MAROC">MAROC</option>
              <option value="ALLEMAGNE">ALLEMAGNE</option>
            </select>
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-3 border border-gray-300 rounded-full text-text-dark hover:bg-gray-50 transition-colors"
          >
            Retour
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-8 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-full font-medium transition-colors"
          >
            Suivant
          </button>
        </div>

        {/* Privacy notice */}
        <p className="text-xs text-text-light mt-6 leading-relaxed">
          {"Skycall SARL s'engage à protéger vos données personnelles, utilisées uniquement pour assurer la gestion de vos contrats et le traitement de vos commandes. Vous avez le contrôle sur vos données : accès, modification, mise à jour, suppression – tout est possible, et vous pouvez retirer votre consentement à tout moment."}
        </p>
      </div>
    </div>
  )
}
