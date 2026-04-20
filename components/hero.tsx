import Link from "next/link"
import { Mail, Clock, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
            Expédiez vos courriers
            <span className="block text-brand-orange mt-2">en quelques clics</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base md:text-xl text-text-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Envoyez vos recommandées en ligne, <span className="font-semibold text-text-dark">7J/7, 24H/24</span>
            <br className="hidden md:block" />
            jusqu'à <span className="font-semibold text-brand-orange">50% de réduction</span> avec notre offre Éco<sup>*</sup>
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-text-gray">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-blue" />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-blue" />
              <span>Envoi sous 24-48h</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-blue" />
              <span>+10 000 lettres envoyées</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/form/recommandee"
              className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
            >
              Envoyer un recommandé
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-text-dark px-8 py-4 rounded-full text-base font-semibold transition-all border-2 border-gray-200 hover:border-gray-300"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
