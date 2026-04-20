import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Clock, Search, MapPin, CreditCard, DollarSign, X, UserCircle, Building } from "lucide-react"

const faqs = [
  {
    icon: Mail,
    question: "Quels services propose LettreRapide ?",
    answer: "LettreRapide vous permet d'envoyer vos courriers postaux directement en ligne, depuis votre ordinateur ou votre mobile. Vous rédigez votre lettre, nous l'imprimons, la mettons sous pli et l'expédions via les services postaux officiels."
  },
  {
    icon: Clock,
    question: "Quel est le délai de livraison de mon courrier ?",
    answer: "L'acheminement est assuré par La Poste. Le délai de livraison standard observé est généralement de 1 à 3 jours ouvrés, selon la destination et le type d'envoi choisi."
  },
  {
    icon: Search,
    question: "Comment suivre ma lettre ?",
    answer: "Si vous sélectionnez un envoi avec suivi, vous recevrez un numéro de suivi vous permettant de consulter l'avancement de votre courrier directement sur le site de La Poste."
  },
  {
    icon: MapPin,
    question: "D'où est envoyé mon courrier ?",
    answer: "Votre courrier est imprimé en France dans un centre d'impression partenaire, puis remis au réseau postal pour un traitement rapide et sécurisé."
  },
  {
    icon: CreditCard,
    question: "Y a‑t‑il un abonnement ?",
    answer: "Non. LettreRapide fonctionne exclusivement en paiement à l'envoi. Aucun abonnement, aucune reconduction automatique, aucun frais caché. Vous payez uniquement le prix de votre lettre, clairement affiché avant validation."
  },
  {
    icon: DollarSign,
    question: "Comment sont calculés les tarifs ?",
    answer: "Le tarif dépend de plusieurs éléments : la longueur de votre courrier, le type d'envoi (standard, suivi, recommandé), et la destination (France ou international). Tous les prix sont affichés de manière transparente avant paiement."
  },
  {
    icon: X,
    question: "Puis‑je annuler un envoi ?",
    answer: "Vous pouvez annuler votre commande tant que votre courrier n'a pas été imprimé. Une fois l'impression lancée, l'envoi ne peut plus être modifié ou remboursé."
  },
  {
    icon: UserCircle,
    question: "Dois‑je créer un compte pour envoyer une lettre ?",
    answer: "Non, la création de compte est facultative. Vous pouvez envoyer un courrier en mode rapide ou créer un compte pour retrouver votre historique et vos documents."
  },
  {
    icon: Building,
    question: "LettreRapide est‑il un service officiel de La Poste ?",
    answer: "Non. LettreRapide est un service indépendant qui facilite l'envoi de courrier en ligne. L'acheminement final est assuré par La Poste."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff]">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">
              <span className="font-light">FAQ –</span>
              <br />
              <span className="font-bold">LettreRapide</span>
            </h1>
            <p className="text-text-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Nous avons conçu cette FAQ pour vous offrir des réponses simples et rapides aux questions les plus fréquentes concernant l'envoi de courrier avec LettreRapide.
            </p>
            <p className="text-text-gray text-sm md:text-base max-w-2xl mx-auto mt-4">
              Si vous avez besoin d'aide supplémentaire, notre équipe reste disponible via notre{" "}
              <a href="/contact" className="text-brand-blue hover:text-brand-orange font-semibold underline">
                page de contact
              </a>
              .
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg md:text-xl font-semibold text-text-dark mb-3">
                        {faq.question}
                      </h2>
                      <p className="text-text-gray text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-white/90 mb-6">
              Notre équipe est à votre disposition pour vous accompagner.
            </p>
            <a
              href="/contact"
              className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-full text-base font-semibold transition-colors shadow-lg"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
