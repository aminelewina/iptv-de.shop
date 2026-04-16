import ProductPage from "@/components/product-page"
import type { Metadata } from "next"
import { productSchema } from "@/lib/product-schema"

export const metadata: Metadata = {
  title: "3-Monats IPTV Abo | Premium Kanäle & HD-Qualität",
  description:
    "Unser 3-Monats IPTV Abo bietet Zugang zu 97.000+ Kanälen in HD-Qualität. Bundesliga, Champions League, Filme & Serien. Jetzt testen!",
  keywords: "iptv abo 3 monate, iptv subscription, iptv deutschland, iptv anbieter, hd fernsehen",
}

export default function ThreeMonthSubscriptionPage() {
  const productData = {
    duration: "3" as const,
    price: "25",
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
      "Hohe Geschwindigkeit: Genießen Sie flüssiges Streaming ohne Pufferung oder Aussetzer.",
      "Umfangreiche Inhalte: Zugang zu über 97.000 Kanälen und 182.000 On-Demand-Titeln.",
      "Flexibilität: Nutzen Sie den Dienst auf Smart TVs, Smartphones, Tablets und mehr.",
    ],
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobres-R0CxdzU4PWRtt9yeYRJCUADAF9ijtS.png",
    title: "3-Monats IPTV Premium Abo",
    description:
      "Unser 3-Monats IPTV-Abo bietet Zugang zu 97.000+ Kanälen in HD-Qualität. Ideal für Einsteiger mit flexibler Laufzeit und allen Premium-Inhalten.",
    slug: "3-months",
  }

  return (
    <>
      {/* Product Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productSchema({
              name: "3-Monats IPTV Premium Abo",
              description:
                "3-Monats IPTV-Abo mit 97.000+ Kanälen in HD-Qualität. Ideal für Einsteiger mit flexibler Laufzeit.",
              price: "25",
              priceCurrency: "EUR",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bobres-R0CxdzU4PWRtt9yeYRJCUADAF9ijtS.png",
              sku: "IPTV-3M",
              brand: "UPIPTV",
              reviewCount: 124,
              reviewRating: 4.8,
              availability: "https://schema.org/InStock",
              url: `https://upiptv.tech/${"iptv-3m"}-subscription`,
            }),
          ),
        }}
      />
      <ProductPage {...productData} />
    </>
  )
}
