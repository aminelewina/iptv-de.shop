import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PricingCards } from "@/components/pricing-cards"
import { TrackingSection } from "@/components/tracking-section"
import { FeaturesSection } from "@/components/features-section"
import { PromoBanner, PromoDisclaimer } from "@/components/promo-banner"
import { StepsSection } from "@/components/steps-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PricingCards />
        <TrackingSection />
        <FeaturesSection />
        <PromoBanner />
        <PromoDisclaimer />
        <StepsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
