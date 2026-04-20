"use client"

import { useRouter } from "next/navigation"
import { useOrder } from "@/lib/order-context"

export function Step4CourrierChoice() {
  const router = useRouter()
  const { setLetter } = useOrder()

  const handleWriteChoice = () => {
    setLetter({ type: "write" })
    router.push("/envoyer/courrier/rediger")
  }

  const handleImportChoice = () => {
    setLetter({ type: "import" })
    router.push("/envoyer/courrier/importer")
  }

  const handleBack = () => {
    router.push("/envoyer/destinataire")
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl text-text-dark mb-8">
          4. Charger ou rédiger votre courrier
        </h1>

        {/* Write option */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Illustration */}
              <div className="w-20 h-20 flex-shrink-0">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <circle cx="40" cy="30" r="12" fill="#f5d89a"/>
                  <rect x="30" y="42" width="20" height="25" rx="2" fill="#1a73a7"/>
                  <rect x="15" y="50" width="30" height="20" rx="1" fill="#ffc107" stroke="#f5a623" strokeWidth="1"/>
                  <line x1="18" y1="55" x2="40" y2="55" stroke="#1a73a7" strokeWidth="1"/>
                  <line x1="18" y1="60" x2="35" y2="60" stroke="#1a73a7" strokeWidth="1"/>
                  <line x1="18" y1="65" x2="38" y2="65" stroke="#1a73a7" strokeWidth="1"/>
                  <rect x="50" y="45" width="15" height="20" rx="1" fill="#f5a623"/>
                  <circle cx="57" cy="52" r="3" fill="white"/>
                </svg>
              </div>
              
              <div>
                <h3 className="text-lg text-text-dark">
                  <span className="font-bold">Rédigez</span> votre courrier
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWriteChoice}
              className="px-12 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-full font-medium transition-colors"
            >
              Je rédige
            </button>
          </div>
        </div>

        {/* Import option */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Illustration */}
              <div className="w-20 h-20 flex-shrink-0">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <rect x="20" y="10" width="40" height="50" rx="2" fill="white" stroke="#1a73a7" strokeWidth="2"/>
                  <rect x="25" y="18" width="30" height="3" fill="#e0e0e0"/>
                  <rect x="25" y="24" width="25" height="2" fill="#e0e0e0"/>
                  <rect x="25" y="28" width="28" height="2" fill="#e0e0e0"/>
                  <rect x="25" y="32" width="20" height="2" fill="#e0e0e0"/>
                  <circle cx="55" cy="55" r="15" fill="#1a73a7"/>
                  <path d="M55 48 L55 62 M48 55 L55 48 L62 55" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              
              <div>
                <h3 className="text-lg text-text-dark">
                  <span className="font-bold">Importez</span> votre courrier
                </h3>
                <p className="text-sm text-text-light">Depuis votre ordinateur</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <ul className="text-sm text-text-gray">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                  Format PDF
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                  Maximum 20Mo
                </li>
              </ul>

              <button
                type="button"
                onClick={handleImportChoice}
                className="px-12 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full font-medium transition-colors"
              >
                {"J'importe"}
              </button>
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
      </div>
    </div>
  )
}
