import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Database, Target, FileCheck, Cookie, Share2, Clock, Trash2, Key, Lock, RefreshCw, Building2 } from "lucide-react"

const sections = [
  {
    icon: Database,
    title: "2. Données collectées",
    content: [
      { text: "Nous collectons uniquement les données nécessaires au fonctionnement du service, notamment :" },
      { 
        subtitle: "Données d'identification",
        list: ["Nom, prénom", "Adresse postale", "Adresse email", "Numéro de téléphone"]
      },
      { 
        subtitle: "Données liées à l'envoi de courrier",
        list: ["Contenu des lettres et documents fournis", "Adresses d'expédition et de retour", "Historique des envois"]
      },
      { 
        subtitle: "Données de paiement",
        list: ["Informations bancaires (traitées exclusivement par nos prestataires de paiement sécurisés)", "Montant et détails des transactions"]
      },
      { 
        subtitle: "Données techniques",
        list: ["Adresse IP", "Informations de navigation", "Cookies (voir section dédiée)"]
      },
      { text: "Nous ne collectons aucune donnée sensible au sens du RGPD." }
    ]
  },
  {
    icon: Target,
    title: "3. Finalités du traitement",
    content: [
      { text: "Les données sont utilisées pour :" },
      { list: [
        "traiter et expédier les courriers commandés,",
        "gérer les paiements,",
        "envoyer des confirmations et notifications,",
        "assurer le support client,",
        "améliorer le fonctionnement du Site,",
        "respecter nos obligations légales (comptabilité, lutte contre la fraude, etc.)."
      ]},
      { text: "Aucun profilage commercial n'est effectué. Aucune donnée n'est vendue ou partagée à des fins publicitaires." }
    ]
  },
  {
    icon: FileCheck,
    title: "4. Base légale du traitement",
    content: [
      { text: "Les traitements reposent sur :" },
      { list: [
        "l'exécution du contrat (envoi de courrier, paiement, support),",
        "le consentement (cookies, formulaire de contact),",
        "l'intérêt légitime (sécurisation du Site, prévention de la fraude),",
        "le respect des obligations légales."
      ]}
    ]
  },
  {
    icon: Cookie,
    title: "5. Cookies",
    content: [
      { text: "Nous utilisons des cookies pour :" },
      { list: [
        "assurer le bon fonctionnement du Site,",
        "analyser la fréquentation,",
        "améliorer l'expérience utilisateur."
      ]},
      { text: "Les cookies non essentiels ne sont déposés qu'avec votre consentement via un bandeau dédié. La durée maximale de conservation est de 13 mois." },
      { text: "Vous pouvez modifier vos préférences à tout moment." }
    ]
  },
  {
    icon: Share2,
    title: "6. Partage des données",
    content: [
      { text: "Les données peuvent être transmises uniquement à :" },
      { list: [
        "nos prestataires techniques (hébergement, impression, paiement),",
        "les services postaux chargés de l'acheminement,",
        "les autorités compétentes en cas d'obligation légale."
      ]},
      { text: "Aucun transfert commercial ou publicitaire n'est effectué." },
      { text: "Si un transfert hors UE devait avoir lieu, nous appliquerions les garanties prévues par le RGPD (clauses contractuelles types, etc.)." }
    ]
  },
  {
    icon: Clock,
    title: "7. Durée de conservation",
    content: [
      { text: "Les données sont conservées :" },
      { list: [
        "pendant la durée nécessaire à l'exécution du service,",
        "puis archivées pendant 5 ans pour répondre aux obligations légales (comptabilité, litiges),",
        "les données liées au support ou au formulaire de contact sont conservées 3 ans maximum."
      ]},
      { text: "Les documents envoyés via le service peuvent être supprimés automatiquement après traitement, selon les paramètres du compte." }
    ]
  },
  {
    icon: Trash2,
    title: "8. Suppression et désactivation de compte",
    content: [
      { text: "Sur demande, un compte peut être :" },
      { list: [
        "1. Désactivé immédiatement, rendant l'accès impossible.",
        "2. Supprimé définitivement dans un délai maximum d'une semaine."
      ]},
      { text: "Certaines données peuvent être conservées si la loi l'exige (facturation, prévention de la fraude, litiges)." }
    ]
  },
  {
    icon: Key,
    title: "9. Vos droits",
    content: [
      { text: "Conformément au RGPD, vous disposez des droits suivants :" },
      { list: [
        "droit d'accès,",
        "droit de rectification,",
        "droit à l'effacement,",
        "droit d'opposition,",
        "droit à la limitation du traitement,",
        "droit à la portabilité,",
        "droit de retirer votre consentement,",
        "droit de définir des directives post‑mortem."
      ]}
    ]
  },
  {
    icon: Lock,
    title: "10. Sécurité",
    content: [
      { text: "Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :" },
      { list: [
        "chiffrement des communications (HTTPS),",
        "stockage sécurisé,",
        "accès limité aux employés autorisés,",
        "audits réguliers."
      ]}
    ]
  },
  {
    icon: RefreshCw,
    title: "11. Modifications de la politique",
    content: [
      { text: "Cette politique peut être mise à jour pour refléter des évolutions légales ou techniques. La version en vigueur est toujours disponible sur le Site." }
    ]
  }
]

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff]">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">
              <span className="font-bold">Politique de Confidentialité</span>
            </h1>
            <p className="text-text-gray text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              La présente Politique de Confidentialité décrit la manière dont LettreRapide Solutions SAS (ci‑après « la Société », « nous », « notre ») collecte, utilise, protège et traite les données personnelles des utilisateurs du site lettrerapide.online (ci‑après « le Site »).
            </p>
            <p className="text-text-gray text-sm md:text-base max-w-3xl mx-auto mt-4">
              Cette politique est conforme au <span className="font-semibold text-text-dark">Règlement Général sur la Protection des Données (RGPD)</span> et à la <span className="font-semibold text-text-dark">Loi Informatique et Libertés</span>.
            </p>
          </div>

          {/* Responsible Entity */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                <Building2 className="w-5 h-5 text-brand-blue" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-text-dark pt-1">
                1. Responsable du traitement
              </h2>
            </div>
            <div className="ml-14 space-y-2">
              <p className="text-text-dark font-medium text-sm md:text-base">LettreRapide Solutions SAS</p>
              <p className="text-text-gray text-sm md:text-base">SIRET : 912 458 732 00027</p>
              <p className="text-text-gray text-sm md:text-base">Siège social : 12 Rue du Faubourg Saint‑Martin, 75010 Paris</p>
              <a 
                href="mailto:privacy@lettrerapide.online"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange font-semibold text-sm md:text-base"
              >
                Email : privacy@lettrerapide.online
              </a>
            </div>
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
                        {'text' in item && item.text && (
                          <p className="text-text-gray text-sm md:text-base leading-relaxed">
                            {item.text}
                          </p>
                        )}
                        {'subtitle' in item && item.subtitle && (
                          <p className="font-semibold text-text-dark text-sm md:text-base mt-3 mb-2">
                            {item.subtitle}
                          </p>
                        )}
                        {'list' in item && item.list && (
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

            {/* Contact for Rights Section */}
            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 rounded-xl border border-brand-blue/20 p-6">
              <h3 className="text-lg font-semibold text-text-dark mb-4">
                Pour exercer vos droits :
              </h3>
              <div className="space-y-2">
                <a 
                  href="mailto:privacy@lettrerapide.online"
                  className="flex items-center gap-2 text-brand-blue hover:text-brand-orange font-semibold text-sm md:text-base"
                >
                  <Shield className="w-4 h-4" />
                  privacy@lettrerapide.online
                </a>
                <p className="text-text-gray text-sm md:text-base">
                  📮 LettreRapide Solutions SAS – Service RGPD, 12 Rue du Faubourg Saint‑Martin, 75010 Paris
                </p>
                <p className="text-text-gray text-xs mt-3 italic">
                  Une pièce d'identité peut être demandée pour vérifier votre identité.
                </p>
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
