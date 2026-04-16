import ProductPage from "@/components/product-page"
import type { Metadata } from "next"
import { productSchema } from "@/lib/product-schema"

export const metadata: Metadata = {
  title: "6-Monats IPTV Abo | Premium Kanäle & HD-Qualität",
  description:
    "Unser 6-Monats IPTV Abo bietet Zugang zu 97.000+ Kanälen in HD-Qualität. Bundesliga, Champions League, Filme & Serien. Jetzt mit Preisvorteil!",
  keywords: "iptv abo 6 monate, iptv subscription, iptv deutschland, iptv anbieter, hd fernsehen, iptv angebot",
}

export default function SixMonthSubscriptionPage() {
  const productData = {
    duration: "6" as const,
    price: "35",
    originalPrice: "50",
    features: [
      "97.000+ Live-TV-Kanäle",
      "182.000+ Filme & Serien (VOD)",
      "Bundesliga & Champions League",
      "Keine Aussetzer oder Pufferung",
      "HD & Ultra-HD Qualität",
      "Kompatibel mit allen Geräten",
      "24/7 Kundensupport",
      "Regelmäßige Updates",
    ],
    benefits: [
      "Preisvorteil: Sparen Sie im Vergleich zum 3-Monats-Abo und genießen Sie längere Laufzeit.",
      "Umfangreiche Inhalte: Zugang zu über 97.000 Kanälen und 182.000 On-Demand-Titeln.",
      "Premium Support: Bevorzugter Kundensupport und schnellere Reaktionszeiten.",
    ],
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobres-R0CxdzU4PWRtt9yeYRJCUADAF9ijtS.png",
    title: "6-Monats IPTV Premium Abo",
    description:
      "Unser 6-Monats IPTV-Abo mit Preisvorteil bietet 97.000+ Kanäle in HD-Qualität. Die perfekte Balance aus Laufzeit und Kosten.",
    slug: "6-months",
  }

  return (
    <>
      {/* Product Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productSchema({
              name: "6-Monats IPTV Premium Abo",
              description: "6-Monats IPTV-Abo mit 97.000+ Kanälen in HD-Qualität. Sparen Sie mit längerer Laufzeit.",
              price: "35",
              priceCurrency: "EUR",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobres-R0CxdzU4PWRtt9yeYRJCUADAF9ijtS.png",
              sku: "IPTV-6M",
              brand: "UPIPTV",
              reviewCount: 186,
              reviewRating: 4.9,
              availability: "https://schema.org/InStock",
              url: `https://upiptv.tech/${"iptv-6m"}-subscription`,
            }),
          ),
        }}
      />
      <ProductPage {...productData} />
    </>
  )
}
