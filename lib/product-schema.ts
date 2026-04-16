interface ProductSchemaProps {
  name: string
  description: string
  price: string
  priceCurrency: string
  image: string
  sku: string
  brand: string
  reviewCount: number
  reviewRating: number
  availability: string
  url: string
}

export function productSchema({
  name,
  description,
  price,
  priceCurrency,
  image,
  sku,
  brand,
  reviewCount,
  reviewRating,
  availability,
  url,
}: ProductSchemaProps) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    description,
    image,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency,
      price,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
      availability,
      seller: {
        "@type": "Organization",
        name: "UPIPTV",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewRating.toString(),
      reviewCount: reviewCount.toString(),
    },
  }
}
