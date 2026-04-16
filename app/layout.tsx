import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import WhatsAppWidget from "@/components/whatsapp-widget"
import { organizationSchema, websiteSchema } from "@/lib/structured-data"
import Script from "next/script"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: {
    template: "%s | UPIPTV",
    default: "IPTV Anbieter Deutschland - UPIPTV",
  },
  description: "IPTV mit 97.000+ Sendern & 182.000+ VOD in bester Qualität. Keine Aussetzer, günstiger Preis.",
  keywords: "upiptv, iptv anbieter, iptv deutschland, iptv abo, ip tv kaufen",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        {/* Start cookieyes banner */}
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/681cade0998a75844d08bebc/script.js"
        ></script>
        {/* End cookieyes banner */}
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "r4d24d8i3d");
`,
          }}
        />
        <Script
          defer
          data-domain="upiptv.tech"
          src="https://plausible.io/js/script.hash.outbound-links.pageview-props.revenue.tagged-events.js"
          strategy="afterInteractive"
        />
        <Script
          id="plausible-custom"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">{children}</div>
        <WhatsAppWidget />
      </body>
    </html>
  )
}
