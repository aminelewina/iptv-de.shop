import Link from "next/link"
import { Search } from "lucide-react"

export function TrackingSection() {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Vous avez reçu votre numéro de suivi ?
        </h3>
        <p className="text-white/90 text-base md:text-lg mb-6">
          Suivez votre courrier en temps réel
        </p>
        <Link
          href="/suivi"
          className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-blue px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Search className="w-5 h-5" />
          Accéder au suivi
        </Link>
      </div>
    </section>
  )
}
