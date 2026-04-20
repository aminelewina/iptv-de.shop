import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-brand-blue" />
              </div>
              <span className="text-lg font-semibold">
                <span className="text-white">Lettre</span>
                <span className="text-brand-orange">Rapide</span>
                <span className="text-white/70">.com</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Envoyez vos courriers recommandés en ligne, simplement et rapidement.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/form/recommandee" className="hover:text-white transition-colors">Lettre recommandée</Link></li>
              <li><Link href="/form/suivie" className="hover:text-white transition-colors">Lettre suivie</Link></li>
              <li><Link href="/form/verte" className="hover:text-white transition-colors">Lettre verte</Link></li>
            </ul>
          </div>
          
          {/* Aide */}
          <div>
            <h4 className="font-semibold mb-4">Aide</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/suivi" className="hover:text-white transition-colors">Suivi de courrier</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="/cgv" className="hover:text-white transition-colors">CGV</Link></li>
              <li><Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Gestion des cookies</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Payment methods */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} lettrerapide.online - Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50">Paiement sécurisé :</span>
            <div className="flex gap-2">
              {/* Payment icons */}
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-brand-blue">VISA</span>
              </div>
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-red-500">MC</span>
              </div>
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">CB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
