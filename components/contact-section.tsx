import Link from "next/link"
import { MessageCircle, Mail, HelpCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Besoin d'informations ?
            </h2>
            <p className="text-text-gray text-base md:text-lg mb-8 leading-relaxed">
              Notre équipe est là pour répondre à toutes vos questions et vous fournir une assistance personnalisée concernant nos services d'envoi de courrier.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-text-gray">
                <MessageCircle className="w-5 h-5 text-brand-blue" />
                <span>Support réactif</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-gray">
                <Mail className="w-5 h-5 text-brand-blue" />
                <span>Réponse rapide</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-gray">
                <HelpCircle className="w-5 h-5 text-brand-blue" />
                <span>Aide personnalisée</span>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
