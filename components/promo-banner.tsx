import { Check } from "lucide-react"

export function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-orange to-[#ffb347] py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Facturation à la lettre, sans surprise !
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-semibold">Sans abonnement</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-semibold">Sans engagement</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-semibold">Sans frais cachés</span>
          </div>
        </div>
        <p className="text-white/90 text-sm md:text-base mt-4">
          Payez uniquement pour les lettres que vous envoyez
        </p>
      </div>
    </section>
  )
}

export function PromoDisclaimer() {
  return (
    <section className="bg-white py-6 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-text-light text-center leading-relaxed">
          *Tarification transparente : vous ne payez que les lettres que vous envoyez effectivement. Aucun abonnement mensuel, aucun engagement, aucun frais caché. Consultez nos tarifs détaillés pour connaître le coût exact de chaque type d'envoi.
        </p>
      </div>
    </section>
  )
}
