import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, Globe, User, Server, Shield, AlertCircle, Mail } from "lucide-react"

const sections = [
  {
    icon: Globe,
    title: "1. Informations sur le site",
    content: [
      { label: "Nom du site", value: "lettrerapide.online" },
      { label: "URL complète", value: "https://www.lettrerapide.online" }
    ]
  },
  {
    icon: Building2,
    title: "2. Éditeur du site",
    content: [
      { text: "Le site lettrerapide.online est édité par :" },
      { label: "Raison sociale", value: "LettreRapide Solutions SAS" },
      { label: "SIRET", value: "912 458 732 00027" },
      { label: "TVA intracommunautaire", value: "FR87912458732" },
      { label: "Siège social", value: "12 Rue du Faubourg Saint-Martin, 75010 Paris, France" },
      { label: "Contact", value: "support@lettrerapide.online" }
    ]
  },
  {
    icon: User,
    title: "3. Directeur de la publication",
    content: [
      { label: "Nom", value: "Julien Morel" },
      { label: "Fonction", value: "Responsable éditorial" }
    ]
  },
  {
    icon: Server,
    title: "4. Hébergement",
    content: [
      { text: "Le site est hébergé par :" },
      { label: "Hébergeur", value: "OVH SAS" },
      { label: "Adresse", value: "2 Rue Kellermann, 59100 Roubaix, France" },
      { label: "Structure juridique", value: "OVH Groupe SAS" }
    ]
  },
  {
    icon: Shield,
    title: "5. Propriété intellectuelle",
    content: [
      { 
        text: "L'ensemble du contenu présent sur lettrerapide.online (textes, images, logos, éléments graphiques, structure du site) est protégé par le droit d'auteur et reste la propriété exclusive de LettreRapide Solutions SAS, sauf mention contraire."
      },
      { 
        text: "Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite."
      }
    ]
  },
  {
    icon: AlertCircle,
    title: "6. Responsabilité",
    content: [
      { 
        text: "lettrerapide.online est un service indépendant permettant l'envoi de courrier en ligne. L'acheminement final des lettres est assuré par les services postaux officiels."
      },
      { text: "LettreRapide Solutions SAS ne peut être tenue responsable :" },
      { list: [
        "des retards liés aux transporteurs postaux,",
        "des erreurs d'adresse fournies par l'utilisateur,",
        "des interruptions temporaires du service pour maintenance."
      ]}
    ]
  }
]

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff]">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">
              <span className="font-bold">Mentions légales</span>
              <br />
              <span className="font-light">lettrerapide.online</span>
            </h1>
            <p className="text-text-gray text-sm md:text-base max-w-2xl mx-auto">
              Informations légales et réglementaires concernant le site lettrerapide.online
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
                        {'text' in item && item.text && !('label' in item) && (
                          <p className="text-text-gray text-sm md:text-base leading-relaxed">
                            {item.text}
                          </p>
                        )}
                        {'label' in item && item.label && (
                          <div className="flex flex-col sm:flex-row sm:gap-2">
                            <span className="text-text-dark font-medium text-sm md:text-base">
                              {item.label} :
                            </span>
                            <span className="text-text-gray text-sm md:text-base">
                              {'value' in item ? item.value : ''}
                            </span>
                          </div>
                        )}
                        {'list' in item && item.list && (
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            {item.list.map((listItem: string, listIdx: number) => (
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

            {/* Additional Sections */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-blue" />
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-text-dark pt-1">
                  7. Données personnelles
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-text-gray text-sm md:text-base leading-relaxed">
                  Le traitement des données personnelles est effectué conformément au RGPD.
                  Pour plus d'informations, consultez notre{" "}
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
                  8. Contact
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-text-gray text-sm md:text-base leading-relaxed mb-2">
                  Pour toute question concernant les mentions légales ou le fonctionnement du site :
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
