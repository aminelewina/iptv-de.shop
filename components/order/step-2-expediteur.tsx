"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useOrder } from "@/lib/order-context"

export function Step2Expediteur() {
  const router = useRouter()
  const { order, setSender, setStep } = useOrder()
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!order.sender.firstName.trim()) newErrors.firstName = "Prénom requis"
    if (!order.sender.lastName.trim()) newErrors.lastName = "Nom requis"
    if (!order.sender.email.trim()) newErrors.email = "Email requis"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(order.sender.email)) {
      newErrors.email = "Format d'email invalide"
    }
    if (!order.sender.address.trim()) newErrors.address = "Adresse requise"
    if (!order.sender.postalCode.trim()) newErrors.postalCode = "Code postal requis"
    else if (!/^\d{5}$/.test(order.sender.postalCode)) {
      newErrors.postalCode = "Code postal invalide (5 chiffres)"
    }
    if (!order.sender.city.trim()) newErrors.city = "Localité requise"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      setStep(3)
      router.push("/envoyer/destinataire")
    }
  }

  const handleBack = () => {
    setStep(1)
    router.push("/envoyer")
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl text-text-dark mb-8">
          {"2. Adresse de l'expéditeur"}
        </h1>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          {/* Professional toggle */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  order.sender.isProfessional ? "bg-brand-yellow" : "bg-gray-300"
                }`}
                onClick={() => {
                  setSender({ isProfessional: !order.sender.isProfessional })
                  if (!order.sender.isProfessional) {
                    setSender({ firstName: "" })
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSender({ isProfessional: !order.sender.isProfessional })
                    if (!order.sender.isProfessional) {
                      setSender({ firstName: "" })
                    }
                  }
                }}
                tabIndex={0}
                role="switch"
                aria-checked={order.sender.isProfessional}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    order.sender.isProfessional ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-text-dark bg-brand-blue-dark text-white px-4 py-2 rounded">
                Je suis un <span className="font-bold">professionnel</span>
              </span>
            </label>

            <div className="hidden md:block bg-brand-blue-light border border-brand-blue rounded-lg p-4 max-w-xs">
              <p className="text-brand-blue font-semibold text-sm mb-1">Bon à savoir</p>
              <p className="text-xs text-text-gray">
                {"Les coordonnées de l'expéditeur font foi sur la preuve de l'envoi de votre courrier"}
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
                value={order.sender.firstName}
                onChange={(e) => setSender({ firstName: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Prénom"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm text-text-gray mb-1">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={order.sender.lastName}
                onChange={(e) => setSender({ lastName: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Nom"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-text-gray mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={order.sender.email}
              onChange={(e) => setSender({ email: e.target.value })}
              className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="email@exemple.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm text-text-gray mb-1">
              Adresse <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={order.sender.address}
              onChange={(e) => setSender({ address: e.target.value })}
              className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Adresse"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm text-text-gray mb-1">
              {"Complément d'adresse"}
            </label>
            <input
              type="text"
              value={order.sender.addressComplement}
              onChange={(e) => setSender({ addressComplement: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="Appartement, étage, etc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-text-gray mb-1">
                Code postal <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={order.sender.postalCode}
                onChange={(e) => setSender({ postalCode: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.postalCode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Code postal"
              />
              {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
            </div>
            <div>
              <label className="block text-sm text-text-gray mb-1">
                Localité <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={order.sender.city}
                onChange={(e) => setSender({ city: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Ville"
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
          </div>

          <div className="md:w-1/2">
            <label className="block text-sm text-text-gray mb-1">Pays</label>
            <select
              value={order.sender.country}
              onChange={(e) => setSender({ country: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text-dark bg-brand-blue-dark text-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="FRANCE">FRANCE</option>
              <option value="BELGIQUE">BELGIQUE</option>
              <option value="SUISSE">SUISSE</option>
              <option value="LUXEMBOURG">LUXEMBOURG</option>
            </select>
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
