"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useOrder } from "@/lib/order-context"

export function Step5Verification() {
  const router = useRouter()
  const { order, setOptions, getPrice } = useOrder()
  const [confirmed, setConfirmed] = useState(false)

  const prices = getPrice()

  const mailTypeLabel = {
    recommandee: "lettre recommandée (20g)",
    suivie: "lettre suivie (20g)",
    verte: "lettre verte (20g)"
  }

  const handleBack = () => {
    if (order.letter.type === "write") {
      router.push("/envoyer/courrier/rediger")
    } else {
      router.push("/envoyer/courrier/importer")
    }
  }

  const handleSubmit = () => {
    if (!confirmed) return
    
    // Build redirect URL with order data
    const baseUrl = 'https://t.trklinkx.com/click?pid=3137&offer_id=10622'
    
    // Map mail type to subsource
    const subsourceMap = {
      recommandee: 'recommandee',
      suivie: 'suivie',
      verte: 'verte'
    }
    
    // Build URL parameters
    const params = new URLSearchParams({
      sub3: subsourceMap[order.mailType],
      sub9: order.sender.firstName,
      sub10: order.sender.lastName,
      sub11: order.sender.email,
      sub12: order.sender.postalCode, // Using postal code as phone equivalent
      sub13: order.sender.address,
      sub15: order.sender.city
    })
    
    // Redirect to checkout
    window.location.href = `${baseUrl}&${params.toString()}`
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl md:text-2xl text-text-dark mb-8">
          5. Vérifier votre courrier
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Letter preview */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
            <div className="min-h-[400px] flex flex-col">
              {/* Sender info */}
              <div className="mb-8">
                <p className="font-semibold text-text-dark">
                  {order.sender.firstName} {order.sender.lastName}
                </p>
                <p className="text-sm text-text-dark">{order.sender.address}</p>
                {order.sender.addressComplement && (
                  <p className="text-sm text-text-dark">{order.sender.addressComplement}</p>
                )}
                <p className="text-sm text-text-dark">
                  {order.sender.postalCode} {order.sender.city}
                </p>
                <p className="text-sm text-text-dark">FRANCE</p>
              </div>

              {/* Recipient info */}
              <div className="ml-auto text-right mb-8">
                <p className="font-semibold text-text-dark">
                  {order.recipient.firstName} {order.recipient.lastName}
                </p>
                <p className="text-sm text-text-dark">{order.recipient.address}</p>
                {order.recipient.addressComplement && (
                  <p className="text-sm text-text-dark">{order.recipient.addressComplement}</p>
                )}
                <p className="text-sm text-text-dark">
                  {order.recipient.postalCode} {order.recipient.city}
                </p>
                <p className="text-sm text-text-dark">{order.recipient.country}</p>
              </div>

              {/* Date and location */}
              <p className="text-sm text-text-dark mb-6 ml-auto">
                À {order.sender.postalCode} {order.sender.city.toLowerCase()}, le {order.letter.date}
              </p>

              {/* Letter content */}
              <div className="flex-grow">
                {order.letter.type === "write" ? (
                  <p className="text-text-dark whitespace-pre-wrap">{order.letter.text}</p>
                ) : (
                  <p className="text-text-gray italic">
                    Fichier importé: {order.letter.importedFile?.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="space-y-6">
            {/* Price summary */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-text-dark mb-4">Récapitulatif de commande</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-gray">Désignation</span>
                  <span className="text-text-gray">Total</span>
                </div>
                
                <div className="pt-2">
                  <p className="font-semibold text-text-dark">Impression :</p>
                  <div className="flex justify-between">
                    <span className="text-text-gray">1<sup>ère</sup> page</span>
                    <span className="text-text-dark">{prices.printPrice.toFixed(2).replace(".", ",")} €</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="font-semibold text-text-dark">Affranchissement :</p>
                  <div className="flex justify-between">
                    <span className="text-text-gray">{mailTypeLabel[order.mailType]}</span>
                    <span className="text-text-dark">{prices.basePrice.toFixed(2).replace(".", ",")} €</span>
                  </div>
                  {order.options.acknowledgmentOfReceipt && (
                    <div className="flex justify-between">
                      <span className="text-text-gray">Justificatif AR</span>
                      <span className="text-text-dark">{prices.arPrice.toFixed(2).replace(".", ",")} €</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-text-gray text-xs">Service Éco essai libre 24h<br/>puis 49,90€ par mois</span>
                    <span className="text-text-dark">inclus</span>
                  </div>
                </div>
              </div>

              {/* Total box */}
              <div className="mt-4 bg-brand-blue-dark rounded-lg p-4 text-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Total avant remise 50%</span>
                  <span className="line-through text-white/70">
                    {prices.totalBeforeDiscount.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-3xl font-bold">
                    {prices.total.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              </div>

              {/* Promotional Banner */}
              <div className="mt-4 bg-gradient-to-r from-brand-orange to-orange-500 rounded-lg p-4 text-white">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">Offre promotionnelle limitée</p>
                    <p className="text-xs mt-1 text-white/90">Prix exceptionnel de 2,35 € - Aucun frais supplémentaire</p>
                  </div>
                </div>
              </div>

              {/* Confirmation checkbox */}
              <label className="flex items-start gap-3 mt-4 cursor-pointer">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    confirmed ? "bg-brand-blue border-brand-blue" : "border-gray-300"
                  }`}
                  onClick={() => setConfirmed(!confirmed)}
                  onKeyDown={(e) => e.key === "Enter" && setConfirmed(!confirmed)}
                  tabIndex={0}
                  role="checkbox"
                  aria-checked={confirmed}
                >
                  {confirmed && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-text-gray">
                  Je certifie que ma commande est conforme
                </span>
              </label>

              {/* Submit button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!confirmed}
                className={`w-full mt-4 py-3 rounded-full font-medium transition-colors ${
                  confirmed
                    ? "bg-brand-orange hover:bg-brand-orange-hover text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Je poursuis ma commande
              </button>
            </div>
          </div>
        </div>

        {/* Support section */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 flex-shrink-0">
              <svg viewBox="0 0 128 128" className="w-full h-full">
                <circle cx="50" cy="70" r="35" fill="#1a73a7"/>
                <circle cx="50" cy="55" r="15" fill="#f5d89a"/>
                <rect x="35" y="70" width="30" height="25" rx="2" fill="#1a73a7"/>
                <circle cx="75" cy="45" r="10" fill="#f5a623"/>
                <text x="75" y="48" textAnchor="middle" fill="white" fontSize="8">...</text>
                <circle cx="95" cy="55" r="10" fill="#f5a623"/>
                <text x="95" y="58" textAnchor="middle" fill="white" fontSize="8">...</text>
                <circle cx="85" cy="75" r="10" fill="#f5a623"/>
                <text x="85" y="78" textAnchor="middle" fill="white" fontSize="8">...</text>
              </svg>
            </div>
            <div>
              <h3 className="text-xl text-text-dark mb-2">
                Avez-vous <span className="font-bold">besoin {"d'assistance"}</span>
                <br />pour expédier votre courrier ?
              </h3>
              <p className="text-sm text-text-gray mb-4">
                Joignez notre service client sans frais via notre ligne directe gratuite.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-text-dark">0 972 767 017</span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Service & appel gratuits
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <button
          type="button"
          onClick={handleBack}
          className="px-6 py-3 border border-gray-300 rounded-full text-text-dark hover:bg-gray-50 transition-colors"
        >
          Retour
        </button>

        {/* Legal notice */}
        <p className="text-xs text-text-light mt-6 leading-relaxed">
          {"*Cette offre tarifaire dite éco est valable uniquement dans le cas de la souscription d'un abonnement sans engagement, dont les 24 premières heures sont offertes, puis facturé à raison de quarante-neuf euros et quatre-vingt-dix centimes (49,90€) tous les mois, conformément à nos conditions générales de vente, et résiliable à tout moment."}
        </p>
      </div>
    </div>
  )
}
