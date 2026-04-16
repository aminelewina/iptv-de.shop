"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

type FAQItem = {
  id: string
  question: string
  answer: React.ReactNode
}

const faqItems: FAQItem[] = [
  {
    id: "what-is-iptv",
    question: "Was ist IPTV?",
    answer:
      "IPTV (Internet Protocol Television) ist eine Technologie, die Fernsehprogramme über das Internet überträgt, anstatt über herkömmliche Satelliten- oder Kabelnetze. Dies ermöglicht Zugang zu tausenden von Kanälen weltweit mit nur einer Internetverbindung.",
  },
  {
    id: "iptv-cost",
    question: "Was kostet IPTV?",
    answer: (
      <>
        <p className="mb-3">
          Die Preise für IPTV-Dienste variieren je nach Servergeschwindigkeit und Verfügbarkeit von Inhalten.
        </p>
        <p>
          Das bedeutet, dass billigere IPTV-Server in der Regel eine langsamere Leistung und weniger Kanäle oder
          Funktionen bieten, während Premium-Optionen eine höhere Geschwindigkeit und mehr Inhalte bieten.
        </p>
      </>
    ),
  },
  {
    id: "best-provider",
    question: "Welcher IPTV-Anbieter ist der beste?",
    answer:
      "Der beste IPTV-Anbieter bietet eine stabile Verbindung, HD-Qualität, umfangreiche Kanalauswahl und guten Kundensupport. UPIPTV erfüllt all diese Kriterien mit über 97.000 Kanälen, 24/7 Support und einer 99,9% Uptime-Garantie.",
  },
  {
    id: "requirements",
    question: "Was benötige ich für Internet TV (IPTV)?",
    answer:
      "Für IPTV benötigen Sie nur eine stabile Internetverbindung (mindestens 10 Mbit/s) und ein kompatibles Gerät wie Smart TV, Smartphone, Tablet, Computer oder einen speziellen IPTV-Receiver. Unsere Dienste sind mit allen gängigen Plattformen kompatibel.",
  },
]

export default function CondensedFAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section ref={sectionRef} className="bg-black py-16 relative overflow-hidden">
      {/* Subtle gradient background that matches the site's aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a1a1f] opacity-50" aria-hidden="true" />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 0, 0, 0.2) 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      <div
        className={`container mx-auto px-4 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Häufig gestellte Fragen</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hier finden Sie schnelle Antworten auf die häufigsten Fragen zu unserem IPTV-Service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`mb-4 bg-[#0a1a1f] border border-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-t-lg"
                aria-expanded={openItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="font-medium text-white text-lg">{item.question}</span>
                <span
                  className={`text-red-500 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openItem === item.id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </span>
              </button>

              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={openItem !== item.id}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="text-gray-300 mb-3 leading-relaxed">{item.answer}</div>
                  <Link
                    href={`/faq#${item.id}`}
                    className="text-red-500 hover:text-red-400 inline-flex items-center font-medium transition-colors duration-200"
                  >
                    Mehr erfahren
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div
            className={`text-center mt-10 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/faq"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-red-900/20"
            >
              Alle FAQs anzeigen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
