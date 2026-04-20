"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, Clock, Send, MapPin, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ email: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f8ff]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-text-dark mb-4">
              <span className="font-light">Besoin</span>
              <br />
              <span className="font-bold">d'informations ?</span>
            </h1>
            <p className="text-text-gray text-base md:text-lg max-w-2xl mx-auto">
              Nos conseillers sont à votre disposition !
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Information */}
            <div className="space-y-6">
              {/* Description Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <p className="text-text-gray text-sm md:text-base leading-relaxed">
                  Tous nos conseillers sont des spécialistes du service client, prêts à vous fournir leur aide. Vous avez la possibilité de joindre nos conseillers par téléphone ou par e-mail de <span className="font-semibold text-text-dark">8h à 18h, du lundi au vendredi</span>. Notre équipe est là pour répondre à toutes vos interrogations et vous assister dans vos démarches.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 rounded-xl border border-brand-blue/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-dark mb-2">
                        Par téléphone
                      </h3>
                      <a 
                        href="tel:0972767017"
                        className="text-2xl font-bold text-brand-blue hover:text-brand-orange transition-colors"
                      >
                        0 972 767 017
                      </a>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">
                          Service & appel gratuits
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-dark mb-2">
                        Par e-mail
                      </h3>
                      <a 
                        href="mailto:support@lettrerapide.online"
                        className="text-lg font-semibold text-brand-blue hover:text-brand-orange transition-colors break-all"
                      >
                        support@lettrerapide.online
                      </a>
                      <p className="text-xs text-text-gray mt-2">
                        Réponse sous 24h ouvrées
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-dark mb-3">
                        Horaires d'ouverture
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-gray">Lundi - Vendredi</span>
                          <span className="font-semibold text-text-dark">8h00 - 18h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-gray">Samedi - Dimanche</span>
                          <span className="font-medium text-text-light">Fermé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-dark mb-2">
                        Adresse
                      </h3>
                      <p className="text-text-gray text-sm leading-relaxed">
                        LettreRapide Solutions SAS<br />
                        12 Rue du Faubourg Saint-Martin<br />
                        75010 Paris, France
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm sticky top-24">
                <h2 className="text-2xl font-bold text-text-dark mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-text-gray text-sm mb-6">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>

                {isSubmitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-green-800 text-sm font-medium">
                        Message envoyé avec succès ! Nous vous répondrons rapidement.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-dark mb-2">
                      Courriel <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre.email@exemple.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-text-dark placeholder:text-text-light"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-dark mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre demande ou votre question..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-text-dark placeholder:text-text-light resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.email || !formData.message}
                    className={`w-full py-4 px-6 rounded-lg text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      isSubmitting || !formData.email || !formData.message
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-brand-orange hover:bg-brand-orange-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer
                      </>
                    )}
                  </button>

                  <p className="text-xs text-text-light text-center">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a href="/confidentialite" className="text-brand-blue hover:text-brand-orange underline">
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Link */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              Consultez d'abord notre FAQ
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Vous trouverez peut-être rapidement la réponse à votre question dans notre Foire Aux Questions.
            </p>
            <a
              href="/faq"
              className="inline-block bg-white hover:bg-gray-100 text-brand-blue px-8 py-3 rounded-lg text-base font-semibold transition-colors"
            >
              Accéder à la FAQ
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
