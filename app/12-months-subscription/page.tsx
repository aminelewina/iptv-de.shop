import ProductPage from "@/components/product-page"
import type { Metadata } from "next"
import { productSchema } from "@/lib/product-schema"

export const metadata: Metadata = {
  title: "12-Monats IPTV Abo | Premium Kanäle & HD-Qualität",
  description:
    "Unser 12-Monats IPTV Abo bietet Zugang zu 97.000+ Kanälen in HD-Qualität. Bundesliga, Champions League, Filme & Serien. Jetzt mit maximalem Preisvorteil!",
  keywords:
    "iptv abo 12 monate, iptv jahresabo, iptv subscription, iptv deutschland, iptv anbieter, hd fernsehen, iptv angebot",
}

export default function TwelveMonthSubscriptionPage() {
  const productData = {
    duration: "12" as const,
    price: "50",
    originalPrice: "75",
    features: [
      "97.000+ Live-TV-Kanäle",
      "182.000+ Filme & Serien (VOD)",
      "Bundesliga & Champions League",
      "Keine Aussetzer oder Pufferung",
      "HD & Ultra-HD Qualität",
      "Kompatibel mit allen Geräten",
      "24/7 Kundensupport",
      "Regelmäßige Updates",
      "VIP-Status mit priorisierten Updates",
    ],
    benefits: [
      "Maximaler Preisvorteil: Sparen Sie über 25% im Vergleich zum 3-Monats-Abo.",
      "VIP-Status: Genießen Sie bevorzugten Support und exklusive Funktionen.",
      "Sorglos-Paket: Ein ganzes Jahr Premium-IPTV ohne Unterbrechungen.",
    ],
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobres-R0CxdzU4PWRtt9yeYRJCUADAF9ijtS.png",
    title: "12-Monats IPTV Premium Abo",
    description:
      "Unser 12-Monats IPTV-Abo bietet maximalen Preisvorteil mit 97.000+ Kanälen in HD-Qualität. Ein ganzes Jahr Premium-Entertainment ohne Unterbrechungen.",
    slug: "12-months",
  }

  return (
    <>
      {/* Product Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productSchema({
              name: "12-Monats IPTV Premium Abo",
              description:
                "12-Monats IPTV-Abo mit 97.000+ Kanälen in HD-Qualität. Maximaler Preisvorteil für ein Jahr Premium-Entertainment.",
              price: "50",
              priceCurrency: "EUR",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobres-R0CxdzU4PWRtt9yeYRJCUADAF9ijtS.png",
              sku: "IPTV-12M",
              brand: "UPIPTV",
              reviewCount: 247,
              reviewRating: 4.9,
              availability: "https://schema.org/InStock",
              url: `https://upiptv.tech/${"IPTV-12M".toLowerCase()}-subscription`,
            }),
          ),
        }}
      />
      <ProductPage {...productData} />
    </>
  )
}
