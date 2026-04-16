import Link from "next/link"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ContentCarousels from "@/components/content-carousels"
import SubscriptionPlans from "@/components/subscription-plans"
import FootballLeagues from "@/components/football-leagues"
import SupportedDevices from "@/components/supported-devices"
import CustomerReviews from "@/components/customer-reviews"
import CondensedFAQ from "@/components/condensed-faq"
import Footer from "@/components/footer"
import { serviceSchema, subscriptionPlansSchema, reviewSchema, videoCollectionSchema } from "@/lib/structured-data"
import { condensedFaqSchema } from "@/lib/condensed-faq-schema"

export const metadata = {
  title: "IPTV Anbieter Deutschland - UPIPTV",
  description:
    "Premium IPTV mit 97.000+ Sendern in HD-Qualität. Stabile Verbindung, günstiger Preis, sofortige Aktivierung.",
  keywords: "upiptv, iptv anbieter, iptv deutschland, iptv abo, ip tv kaufen",
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-16">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(subscriptionPlansSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoCollectionSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(condensedFaqSchema),
          }}
        />

        <Hero />
        <ContentCarousels />
        <SubscriptionPlans />
        <FootballLeagues />
        <SupportedDevices />
        <CustomerReviews />
        <div className="bg-black py-12" id="contact">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Genießen Sie Ihre Zeit</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Genießen Sie Ihre Lieblingssendungen und -filme überall auf der Welt mit unserem Premium-IPTV-Service, der
              sowohl Live- als auch On-Demand-Inhalte bietet
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-red-600 text-white font-bold py-2 px-6 rounded-md hover:bg-red-700 transition-colors"
            >
              KONTAKT
            </Link>
          </div>
        </div>

        {/* Add the condensed FAQ section before the footer */}
        <CondensedFAQ />
      </div>
      <Footer />
    </main>
  )
}
