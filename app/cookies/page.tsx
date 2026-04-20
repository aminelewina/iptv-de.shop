'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Cookie, Info, Layers, Clock, CheckCircle, Settings, Users, RefreshCw, Mail } from "lucide-react"

const sections = [
  {
    icon: Info,
    title: "1. Qu'est‑ce qu'un cookie ?",
    content: [
      { text: "Un cookie est un petit fichier texte enregistré sur votre appareil (ordinateur, smartphone, tablette) lorsque vous consultez un site Internet. Il permet notamment :" },
      { list: [
        "d'assurer le bon fonctionnement du site,",
        "de mémoriser vos préférences,",
        "d'améliorer votre expérience utilisateur,",
        "de mesurer l'audience et les performances du site."
      ]},
      { text: "Les cookies ne permettent pas de vous identifier directement." }
    ]
  },
  {
    icon: Layers,
    title: "2. Types de cookies utilisés",
    content: [
      { text: "lettrerapide.online utilise uniquement les cookies nécessaires au fonctionnement du service, ainsi que certains cookies optionnels soumis à votre consentement." },
      { 
        subtitle: "a) Cookies strictement nécessaires (exemptés de consentement)",
        text: "Ces cookies sont indispensables pour :",
        list: [
          "accéder au site,",
          "utiliser les fonctionnalités essentielles,",
          "sécuriser les transactions,",
          "permettre l'envoi de courrier en ligne."
        ],
        note: "Ils ne peuvent pas être désactivés."
      },
      { 
        subtitle: "b) Cookies de performance et de mesure d'audience (soumis à consentement)",
        text: "Ils nous permettent de :",
        list: [
          "analyser la fréquentation du site,",
          "comprendre l'utilisation des pages,",
          "améliorer la qualité du service."
        ],
        note: "Ces cookies ne sont déposés qu'avec votre accord."
      },
      { 
        subtitle: "c) Cookies de personnalisation (soumis à consentement)",
        text: "Ils servent à mémoriser vos préférences (langue, paramètres d'affichage, etc.)."
      }
    ]
  },
  {
    icon: Clock,
    title: "3. Durée de conservation des cookies",
    content: [
      { text: "La durée de vie d'un cookie varie selon sa nature :" },
      { list: [
        "cookies essentiels : durée limitée au fonctionnement de la session,",
        "cookies soumis à consentement : maximum 13 mois, conformément à la réglementation."
      ]},
      { text: "Les informations collectées via ces cookies sont conservées 24 mois maximum." }
    ]
  },
  {
    icon: CheckCircle,
    title: "4. Votre consentement",
    content: [
      { text: "Lors de votre première visite, un bandeau d'information vous permet :" },
      { list: [
        "d'accepter tous les cookies,",
        "de refuser tous les cookies non essentiels,",
        "de personnaliser vos choix."
      ]},
      { text: "Tant que vous n'avez pas donné votre accord, aucun cookie non essentiel n'est déposé." },
      { text: "Vous pouvez modifier vos préférences à tout moment via le lien « Gérer mes cookies » disponible en bas de page." }
    ]
  },
  {
    icon: Settings,
    title: "5. Comment gérer ou désactiver les cookies ?",
    content: [
      { text: "Vous pouvez :" },
      { list: [
        "configurer vos préférences directement sur notre bandeau de consentement,",
        "supprimer les cookies depuis votre navigateur,",
        "bloquer certains cookies via les paramètres de votre appareil."
      ]},
      { text: "Les navigateurs permettent généralement de :" },
      { list: [
        "refuser tous les cookies,",
        "accepter uniquement certains cookies,",
        "être averti avant l'installation d'un cookie."
      ]}
    ]
  },
  {
    icon: Users,
    title: "6. Cookies déposés par des tiers",
    content: [
      { text: "Certains cookies peuvent être déposés par des prestataires externes (ex. : outils de mesure d'audience). Ces tiers sont soumis à leurs propres politiques de confidentialité et s'engagent à respecter le RGPD." },
      { text: "Aucun cookie publicitaire n'est utilisé sur lettrerapide.online." }
    ]
  },
  {
    icon: RefreshCw,
    title: "7. Mise à jour de la politique cookies",
    content: [
      { text: "Cette politique peut être modifiée pour refléter :" },
      { list: [
        "des évolutions légales,",
        "des changements techniques,",
        "des améliorations du site."
      ]},
      { text: "La version la plus récente est toujours disponible sur cette page." }
    ]
  }
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff]">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-6">
              <Cookie className="w-8 h-8 text-brand-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">
              <span className="font-bold">Gestion des cookies</span>
            </h1>
            <p className="text-text-gray text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              La présente page explique la manière dont lettrerapide.online utilise les cookies et technologies similaires lors de votre navigation. Nous nous engageons à respecter votre vie privée et à vous offrir un contrôle total sur vos préférences.
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
                  
                  <div className="ml-14 space-y-4">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        {'text' in item && item.text && !('subtitle' in item) && (
                          <p className="text-text-gray text-sm md:text-base leading-relaxed">
                            {item.text}
                          </p>
                        )}
                        {'subtitle' in item && item.subtitle && (
                          <div className="mt-4">
                            <p className="font-semibold text-text-dark text-sm md:text-base mb-2">
                              {item.subtitle}
                            </p>
                            {'text' in item && item.text && (
                              <p className="text-text-gray text-sm md:text-base leading-relaxed mb-2">
                                {item.text}
                              </p>
                            )}
                          </div>
                        )}
                        {'list' in item && item.list && (
                          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                            {item.list.map((listItem, listIdx) => (
                              <li key={listIdx} className="text-text-gray text-sm md:text-base">
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        )}
                        {'note' in item && item.note && (
                          <p className="text-text-dark text-sm md:text-base font-medium mt-2 italic">
                            {item.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Warning Notice */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-orange-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <p className="font-semibold text-orange-900 text-sm md:text-base mb-1">
                    Attention
                  </p>
                  <p className="text-orange-800 text-sm md:text-base">
                    La désactivation des cookies essentiels peut empêcher le bon fonctionnement du site.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
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
                  Pour toute question concernant l'utilisation des cookies :
                </p>
                <a 
                  href="mailto:privacy@lettrerapide.online"
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange font-semibold text-sm md:text-base"
                >
                  <Mail className="w-4 h-4" />
                  privacy@lettrerapide.online
                </a>
              </div>
            </div>
          </div>

          {/* Cookie Preference Button */}
          <div className="mt-8 text-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
              onClick={() => {
                // This would open the cookie consent manager
                alert("Le gestionnaire de cookies s'ouvrira ici")
              }}
            >
              <Cookie className="w-5 h-5" />
              Gérer mes préférences cookies
            </button>
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
