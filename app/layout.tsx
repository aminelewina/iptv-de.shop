import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LettreRapide - Envoyez vos courriers en ligne',
  description: 'Envoyez vos recommandés en quelques minutes, 7J/7, 24H/24 à coût réduit avec notre offre Éco',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Start cookieyes banner */}
        <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/1a432a16b3796518a610b50ce7aca039/script.js"></script>
        {/* End cookieyes banner */}
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: '"Open Sans", system-ui, -apple-system, sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
