export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UPIPTV",
  url: "https://upiptv.tech",
  logo: "https://upiptv.tech/favicon.png",
  description: "Premium IPTV provider in Germany with 97,000+ channels in HD quality.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Example Street 123",
    addressLocality: "Berlin",
    addressRegion: "BE",
    postalCode: "10115",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44 753 914 7993",
    contactType: "customer service",
    areaServed: "DE",
    availableLanguage: ["de", "en"],
  },
  sameAs: ["https://www.facebook.com/Example", "https://twitter.com/Example", "https://www.instagram.com/Example"],
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UPIPTV",
  url: "https://upiptv.tech",
  description: "Premium IPTV provider in Germany with 97,000+ channels in HD quality.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://upiptv.tech/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UPIPTV IPTV Service",
  description: "Premium IPTV service with 97,000+ channels, 182,000+ VOD, and instant activation.",
  provider: {
    "@type": "Organization",
    name: "UPIPTV",
    url: "https://upiptv.tech",
  },
  termsOfService: "https://upiptv.tech/terms-of-service",
  category: "IPTV Service",
  availableChannel: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { name: "Live TV Channels" } },
      { "@type": "ListItem", position: 2, item: { name: "Sports Channels" } },
      { "@type": "ListItem", position: 3, item: { name: "Movie Channels" } },
      { "@type": "ListItem", position: 4, item: { name: "International Channels" } },
    ],
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "9.99",
    highPrice: "50",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  },
}

export const subscriptionPlansSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "3-Monats-Abonnement",
        description: "3 Monate Premium-IPTV-Zugang mit allen Kanälen und VOD.",
        offers: {
          "@type": "Offer",
          price: "25",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "6-Monats-Abonnement",
        description: "6 Monate Premium-IPTV-Zugang mit allen Kanälen und VOD.",
        offers: {
          "@type": "Offer",
          price: "35",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "12-Monats-Abonnement",
        description: "12 Monate Premium-IPTV-Zugang mit allen Kanälen und VOD.",
        offers: {
          "@type": "Offer",
          price: "50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
}

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "Service",
    name: "UPIPTV",
  },
  ratingValue: "4.9",
  bestRating: "5",
  ratingCount: "2500",
}

export const videoCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "UPIPTV Channel List Video",
  description: "Video showcasing the extensive channel list available on UPIPTV.",
  url: "https://upiptv.tech/our-channels",
  hasPart: {
    "@type": "VideoObject",
    name: "UPIPTV Channel List",
    description: "A preview of the channels offered by UPIPTV.",
    thumbnailUrl: "https://fast.wistia.net/embed/iframe/d5h3av90qg?seo=false&videoFoam=true",
    uploadDate: "2025-04-13T00:00:00+00:00",
    duration: "PT1M30S",
  },
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [],
}

export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "UPIPTV Channel List",
  description: "A preview of the channels offered by UPIPTV.",
  thumbnailUrl: "https://fast.wistia.net/embed/iframe/d5h3av90qg?seo=false&videoFoam=true",
  uploadDate: "2025-04-13T00:00:00+00:00",
  duration: "PT1M30S",
}

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "IPTV Setup Guide",
  description: "Step-by-step instructions for setting up IPTV on various devices.",
  step: [],
}
