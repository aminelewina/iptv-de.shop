import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Package, CreditCard, DollarSign, ShoppingCart, Clock, Search, ShieldAlert, UserCheck, AlertCircle, Lock, Scale, Mail } from "lucide-react"

const sections = [
  {
    icon: FileText,
    title: "1. Objet",
    content: [
      { 
        text: "Les présentes Conditions Générales de Vente (ci‑après « CGV ») ont pour objet d'encadrer l'ensemble des prestations proposées par LettreRapide Solutions SAS, éditrice du site lettrerapide.online, permettant aux utilisateurs d'envoyer des courriers postaux en ligne."
      },
      { 
        text: "En utilisant le site et en validant une commande, l'utilisateur (ci‑après « le Client ») accepte sans réserve les présentes CGV."
      }
    ]
  },
  {
    icon: Package,
    title: "2. Description du service",
    content: [
      { text: "lettrerapide.online propose un service d'envoi de courrier postal en ligne comprenant :" },
      { list: [
        "la rédaction d'une lettre via l'éditeur intégré,",
        "l'envoi de documents PDF fournis par le Client,",
        "l'impression, la mise sous pli et l'expédition du courrier,",
        "l'accès aux options d'envoi (standard, suivi, recommandé),",
        "la réception d'emails de confirmation et, le cas échéant, d'un numéro de suivi."
      ]},
      { 
        text: "lettrerapide.online est un service indépendant. L'acheminement final est assuré par La Poste ou d'autres opérateurs postaux agréés."
      }
    ]
  },
  {
    icon: CreditCard,
    title: "3. Absence d'abonnement",
    content: [
      { text: "LettreRapide fonctionne exclusivement en paiement à l'envoi." },
      { list: [
        "Aucun abonnement n'est proposé.",
        "Aucun renouvellement automatique n'est appliqué.",
        "Aucun frais caché n'est facturé."
      ]},
      { text: "Le Client paie uniquement le prix de son courrier, clairement affiché avant validation." }
    ]
  },
  {
    icon: DollarSign,
    title: "4. Tarifs",
    content: [
      { text: "Les tarifs appliqués dépendent :" },
      { list: [
        "du type d'envoi (standard, suivi, recommandé),",
        "du nombre de pages,",
        "de l'impression (noir et blanc ou couleur),",
        "de la destination (France ou international)."
      ]},
      { text: "Les prix sont indiqués en euros (€) TTC. LettreRapide se réserve le droit de mettre à jour ses tarifs en fonction des évolutions des tarifs postaux." },
      { text: "Le montant total est affiché avant paiement et doit être accepté par le Client." }
    ]
  },
  {
    icon: ShoppingCart,
    title: "5. Commande et validation",
    content: [
      { text: "Une commande est considérée comme validée lorsque :" },
      { list: [
        "le Client a vérifié le contenu de son courrier,",
        "le Client a confirmé les adresses d'expédition,",
        "le paiement a été accepté."
      ]},
      { text: "Une fois l'impression lancée, la commande ne peut plus être modifiée ni annulée." }
    ]
  },
  {
    icon: Clock,
    title: "6. Délais de traitement et d'expédition",
    content: [
      { text: "Toute commande passée avant 17h (du lundi au vendredi) est généralement imprimée et remise au transporteur le jour même." },
      { text: "Les commandes passées après 17h ou durant le week‑end sont traitées le jour ouvré suivant." },
      { text: "Les délais de livraison dépendent exclusivement des services postaux." },
      { text: "LettreRapide ne peut garantir un délai d'acheminement précis." }
    ]
  },
  {
    icon: Search,
    title: "7. Suivi et preuve de dépôt",
    content: [
      { text: "Pour les envois suivis ou recommandés :" },
      { list: [
        "un numéro de suivi est transmis dès qu'il est communiqué par La Poste,",
        "un délai de 1 à 4 jours ouvrés peut être nécessaire pour l'attribution du numéro,",
        "la preuve de dépôt des recommandés peut nécessiter plusieurs jours avant d'être disponible."
      ]}
    ]
  },
  {
    icon: UserCheck,
    title: "8. Responsabilités du Client",
    content: [
      { text: "Le Client s'engage à :" },
      { list: [
        "fournir des informations exactes (adresses, contenu, pièces jointes),",
        "vérifier le Bon à Tirer (BAT) avant validation,",
        "respecter la législation en vigueur concernant le contenu des courriers."
      ]},
      { text: "Sont strictement interdits : contenus illicites, diffamatoires, menaçants, haineux, pornographiques, violents, ou portant atteinte à l'ordre public." },
      { text: "LettreRapide se réserve le droit de refuser tout courrier manifestement contraire à la loi." }
    ]
  },
  {
    icon: ShieldAlert,
    title: "9. Limitations de responsabilité",
    content: [
      { text: "LettreRapide agit en tant que prestataire technique. La distribution du courrier dépend exclusivement des services postaux." },
      { text: "LettreRapide ne peut être tenue responsable :" },
      { list: [
        "des retards d'acheminement,",
        "des pertes de courrier,",
        "des erreurs d'adressage fournies par le Client,",
        "des problèmes techniques liés aux documents PDF (éléments non imprimables, calques, annotations, etc.)."
      ]},
      { text: "La responsabilité maximale de LettreRapide est limitée au montant payé pour la commande concernée." }
    ]
  },
  {
    icon: Lock,
    title: "10. Données personnelles",
    content: [
      { text: "Les données collectées sont utilisées uniquement pour :" },
      { list: [
        "traiter les commandes,",
        "assurer le suivi des envois,",
        "respecter les obligations légales."
      ]}
    ]
  },
  {
    icon: AlertCircle,
    title: "11. Propriété intellectuelle",
    content: [
      { text: "Tous les éléments du site (textes, images, interface, structure) sont protégés par le droit d'auteur. Toute reproduction ou exploitation non autorisée est interdite." }
    ]
  },
  {
    icon: Scale,
    title: "12. Droit applicable et litiges",
    content: [
      { text: "Les présentes CGV sont soumises au droit français. En cas de litige, le Client peut recourir gratuitement à un médiateur de la consommation avant toute action judiciaire." }
    ]
  }
]

export default function CGVPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff]">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">
              <span className="font-bold">Conditions Générales de Vente</span>
              <br />
              <span className="font-light">(CGV)</span>
            </h1>
            <p className="text-text-gray text-sm md:text-base max-w-2xl mx-auto">
              Conditions applicables à l'ensemble des prestations proposées par lettrerapide.online
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h2 className="text-lg md:text-xl font-semibold text-text-dark pt-1">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        {item.text && (
                          <p className="text-text-gray text-sm md:text-base leading-relaxed">
                            {item.text}
                          </p>
                        )}
                        {item.list && (
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            {item.list.map((listItem, listIdx) => (
                              <li key={listIdx} className="text-text-gray text-sm md:text-base">
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Additional sections with links */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-brand-blue" />
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-text-dark pt-1">
                  10. Données personnelles
                </h2>
              </div>
              <div className="ml-14 space-y-3">
                <p className="text-text-gray text-sm md:text-base leading-relaxed">
                  Les données collectées sont utilisées uniquement pour :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="text-text-gray text-sm md:text-base">traiter les commandes,</li>
                  <li className="text-text-gray text-sm md:text-base">assurer le suivi des envois,</li>
                  <li className="text-text-gray text-sm md:text-base">respecter les obligations légales.</li>
                </ul>
                <p className="text-text-gray text-sm md:text-base leading-relaxed">
                  Elles sont traitées conformément au RGPD. Pour plus d'informations, consultez notre{" "}
                  <a href="/confidentialite" className="text-brand-blue hover:text-brand-orange font-semibold underline">
                    Politique de confidentialité
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-text-dark pt-1">
                  13. Contact
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-text-gray text-sm md:text-base leading-relaxed mb-2">
                  Pour toute question concernant les CGV ou le fonctionnement du service :
                </p>
                <a 
                  href="mailto:support@lettrerapide.online"
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange font-semibold text-sm md:text-base"
                >
                  <Mail className="w-4 h-4" />
                  support@lettrerapide.online
                </a>
              </div>
            </div>
          </div>

          {/* Footer Notice */}
          <div className="mt-8 bg-brand-blue/5 rounded-lg p-4 border border-brand-blue/20">
            <p className="text-xs text-text-gray text-center">
              Dernière mise à jour : Janvier 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
