"use client"

import { useState, useEffect } from "react"
import Script from "next/script"

type ChannelCategory = {
  id: string
  title: string
  channels: string[]
}

export default function GermanyChannels() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (categoryId: string) => {
    if (openCategory === categoryId) {
      setOpenCategory(null)
    } else {
      setOpenCategory(categoryId)
    }
  }

  // Load Font Awesome
  useEffect(() => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  const germanCategories: ChannelCategory[] = [
    {
      id: "deutschland",
      title: "DEUTSCHLAND",
      channels: [
        "DE: DAS ERSTE HD",
        "DE: DAS ERSTE FHD",
        "DE: ZDF HD",
        "DE: ZDF FHD",
        "DE: RTL HD",
        "DE: RTL FHD",
        "DE: SAT 1 HD",
        "DE: SAT 1 FHD",
        "DE: VOX HD",
        "DE: VOX FHD",
        "DE: PRO 7 HD",
        "DE: PRO 7 FHD",
        "DE: KABEL EINS HD",
        "DE: KABEL EINS FHD",
        "DE: RTL 2 HD",
        "DE: RTL 2 FHD",
        "DE: NITRO HD",
        "DE: NITRO FHD",
        "DE: PRO 7 MAXX HD",
        "DE: PRO 7 MAXX FHD",
        "DE: SIXX HD",
        "DE: SIXX FHD",
        "DE: 3SAT HD",
        "DE: ANIXE+",
        "DE: ANIXE SERIE",
        "DE: ARTE HD",
        "DE: BIG BROTHER 24 - 7 LIVE HD",
        "DE: DF1",
        "DE: ONE HD",
        "DE: OUT TV",
        "DE: PRO 7 FUN",
        "DE: RTL UP",
        "DE: SONNENKLAR TV",
        "DE: TELE 5",
        "DE: VOXUP",
        "DE: BIBEL TV",
        "DE: BIBEL TV IMPULS",
        "DE: DAS WORT TV",
        "DE: ECHT JETZT",
        "DE: HOPE TV HD",
        "DE: K-TV",
        "DE: LIGHT CHANNEL",
      ],
    },
    {
      id: "vip-deutschland",
      title: "VIP DEUTSCHLAND",
      channels: [
        "DE: VIP DAS ERSTE HD",
        "DE: VIP ZDF HD",
        "DE: VIP RTL HD",
        "DE: VIP SAT 1 HD",
        "DE: VIP VOX HD",
        "DE: VIP PRO 7 HD",
        "DE: VIP KABEL EINS HD",
        "DE: VIP RTL 2 HD",
        "DE: VIP NITRO HD",
        "DE: VIP PRO 7 MAXX HD",
        "DE: VIP SIXX HD",
        "DE: VIP 3SAT HD",
        "DE: VIP ANIXE+",
        "DE: VIP ARTE HD",
        "DE: VIP PRO 7 FUN",
        "DE: VIP RTL UP",
        "DE: VIP TELE 5",
        "DE: VIP VOXUP",
      ],
    },
    {
      id: "vip-news-information",
      title: "VIP NEWS / INFORMATION",
      channels: ["DE: VIP ARD ALPHA", "DE: VIP NTV FHD", "DE: VIP TAGESSCHAU24", "DE: VIP WELT"],
    },
    {
      id: "vip-doku",
      title: "VIP DOKU",
      channels: [
        "DE: VIP ANIMAL PLANET",
        "DE: VIP BON GUSTO",
        "DE: VIP DISCOVERY CHANNEL HD",
        "DE: VIP DMAX",
        "DE: VIP GEO TV",
        "DE: VIP HGTV",
        "DE: VIP HISTORY HD",
        "DE: VIP KABEL EINS DOKU HD",
        "DE: VIP NATIONAL GEOGRAPHIC HD",
        "DE: VIP NAT GEO WILD HD",
        "DE: VIP RTL LIVING",
        "DE: VIP SKY DOCUMENTARIES",
        "DE: VIP SKY NATURE",
        "DE: VIP SPIEGEL GESCHICHTE",
        "DE: VIP ZDF INFO",
        "DE: VIP ZDF NEO HD",
        "DE: VIP TLC",
      ],
    },
    {
      id: "vip-kinder",
      title: "VIP KINDER",
      channels: [
        "DE: VIP CARTOON NETWORK",
        "DE: VIP DISNEY CHANNEL",
        "DE: VIP FIX UND FOXI",
        "DE: VIP KIKA",
        "DE: VIP NICK JR",
        "DE: VIP NICKTOONS",
        "DE: VIP SUPER RTL - TOGGO",
        "DE: VIP TOGGO PLUS",
      ],
    },
    {
      id: "vip-musik",
      title: "VIP MUSIK",
      channels: ["DE: VIP MTV"],
    },
    {
      id: "vip-kino-serien",
      title: "VIP KINO / SERIEN",
      channels: [
        "DE: VIP SKY CINEMA ACTION HD",
        "DE: VIP SKY CINEMA ATLANTIC HD",
        "DE: VIP SKY CINEMA CLASSICS FHD",
        "DE: VIP SKY CINEMA FAMILY FHD",
        "DE: VIP SKY CINEMA PREMIERE HD",
        "DE: VIP SKY CINEMA HIGHLIGHTS HD",
        "DE: VIP SKY CRIME FHD",
        "DE: VIP SKY KRIMI",
        "DE: VIP SKY ONE FHD",
        "DE: VIP SKY REPLAY",
        "DE: VIP SKY SYFY FHD",
        "DE: VIP 13TH STREET HD",
        "DE: VIP AXN BLACK",
        "DE: VIP AXN WHITE",
        "DE: VIP CRIME+ INVESTIGATION",
        "DE: VIP COMEDY CENTRAL",
        "DE: VIP HEIMATKANAL",
        "DE: VIP KINOWELT",
        "DE: VIP ROMANCE TV",
        "DE: VIP RTL CRIME FHD",
        "DE: VIP RTL PASSION",
        "DE: VIP SAT 1 EMOTIONS",
        "DE: VIP SAT 1 GOLD HD",
        "DE: VIP UNIVERSAL TV",
        "DE: VIP WARNER TV COMEDY FHD",
        "DE: VIP WARNER TV FILM FHD",
        "DE: VIP WARNER TV SERIE FHD",
      ],
    },
    {
      id: "hevc-4k",
      title: "HEVC / 4K",
      channels: [
        "DE: DAS ERSTE HEVC",
        "DE: ZDF HEVC",
        "DE: RTL HEVC",
        "DE: RTL UHD",
        "DE: SAT 1 HEVC",
        "DE: VOX HEVC",
        "DE: PRO 7 HEVC",
        "DE: RTL 2 HEVC",
        "DE: PRO 7 MAXX HEVC",
        "DE: SIXX HEVC",
        "DE: NTV HEVC",
        "DE: UHD1 UHD",
        "DE: SES UHD DEMO CHANNEL",
        "DE: DAZN 1 HEVC",
        "DE: DAZN 2 HEVC",
        "DE: EUROSPORT 1 HEVC",
        "DE: EUROSPORT 2 HEVC",
        "DE: SKY SPORT AUSTRIA HEVC",
        "DE: SKY SPORT BUNDESLIGA 1 HEVC",
        "DE: SKY SPORT F1 HEVC",
        "DE: SKY SPORT NEWS HEVC",
      ],
    },
    {
      id: "news-information",
      title: "NEWS / INFORMATION",
      channels: [
        "DE: ARD ALPHA",
        "DE: BILD",
        "DE: DER AKTIONÄR TV HD",
        "DE: PHOENIX",
        "DE: NTV FHD",
        "DE: TAGESSCHAU24",
        "DE: DW TV",
        "DE: EURONEWS",
        "DE: WELT",
        "DE: PARLAMENTSFERNSEHEN",
        "DE: 1-2-3 TV",
        "DE: ASTRO TV",
        "DE: CHANNEL 21",
        "DE: HEALTH TV",
        "DE: HSE",
        "DE: HSE EXTRA",
        "DE: HSE TREND",
        "DE: JUST COOKING",
        "DE: JUWELO",
        "DE: PEARL TV",
        "DE: QVC",
        "DE: QVC STYLE",
        "DE: QVC 2",
      ],
    },
    {
      id: "sport",
      title: "SPORT",
      channels: [
        "DE: DAZN 1 HD",
        "DE: DAZN 1 FHD",
        "DE: DAZN 2 HD",
        "DE: DAZN 2 FHD",
        "DE: AUTO MOTOR SPORT CHANNEL",
        "DE: EDGE SPORT",
        "DE: EUROSPORT 1 HD",
        "DE: EUROSPORT 1 FHD",
        "DE: EUROSPORT 2 FHD",
        "DE: ESPORTS1",
        "DE: EXTREME SPORTS HD",
        "DE: MORE THAN SPORTS TV",
        "DE: MOTORVISION+",
        "DE: SERVUS TV MOTORSPORT",
        "DE: SPORTDIGITAL FUSSBALL",
        "DE: SPORT1",
        "DE: SPORT1+",
        "DE: TRACE SPORT STARS FHD",
        "DE: UFC FIGHT PASS",
        "DE: WWE CHANNEL",
      ],
    },
    {
      id: "sky-sport",
      title: "SKY SPORT",
      channels: [
        "DE: SKY SPORT NEWS HD",
        "DE: SKY SPORT NEWS FHD",
        "DE: SKY SPORT TOP EVENT HD",
        "DE: SKY SPORT TOP EVENT FHD",
        "DE: SKY SPORT F1 HD",
        "DE: SKY SPORT F1 FHD",
        "DE: SKY SPORT PREMIER LEAGUE HD",
        "DE: SKY SPORT PREMIER LEAGUE FHD",
        "DE: SKY SPORT MIX HD",
        "DE: SKY SPORT MIX FHD",
        "DE: SKY SPORT TENNIS HD",
        "DE: SKY SPORT TENNIS FHD",
        "DE: SKY SPORT GOLF HD",
        "DE: SKY SPORT GOLF FHD",
        "DE: SKY SPORT AUSTRIA HD",
        "DE: SKY SPORT AUSTRIA FHD",
        "DE: SKY SPORT 1 HD (SPIELZEIT)",
        "DE: SKY SPORT 1 FHD (SPIELZEIT)",
        "DE: SKY SPORT 2 HD (SPIELZEIT)",
        "DE: SKY SPORT 2 FHD (SPIELZEIT)",
        "DE: SKY SPORT 3 HD (SPIELZEIT)",
        "DE: SKY SPORT 4 HD (SPIELZEIT)",
        "DE: SKY SPORT 5 HD (SPIELZEIT)",
        "DE: SKY SPORT 6 HD (SPIELZEIT)",
        "DE: SKY SPORT 7 HD (SPIELZEIT)",
        "DE: SKY SPORT 8 HD (SPIELZEIT)",
        "DE: SKY SPORT 9 HD (SPIELZEIT)",
        "DE: SKY SPORT 10 HD (SPIELZEIT)",
        "DE: SKY SPORT 11 HD (SPIELZEIT)",
      ],
    },
    {
      id: "bundesliga",
      title: "BUNDESLIGA",
      channels: [
        "DE: SKY SPORT BUNDESLIGA 1 HD",
        "DE: SKY SPORT BUNDESLIGA 1 FHD",
        "DE: SKY SPORT BUNDESLIGA 2 HD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 2 FHD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 3 HD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 3 FHD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 4 HD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 4 FHD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 5 HD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 5 FHD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 6 HD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 6 FHD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 7 HD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 7 FHD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 8 HD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 9 HD (SPIELZEIT)",
        "DE: SKY SPORT BUNDESLIGA 10 HD (SPIELZEIT)",
      ],
    },
    {
      id: "telekom",
      title: "TELEKOM",
      channels: [
        "DE: MAGENTA SPORT HD",
        "DE: MAGENTA SPORT PROGRAMMÜBERSICHT HD",
        "DE: MAGENTA SPORT 1 HD",
        "DE: MAGENTA SPORT 2 HD",
        "DE: MAGENTA SPORT 3 HD",
        "DE: MAGENTA SPORT 4 HD",
        "DE: MAGENTA SPORT 5 HD",
        "DE: MAGENTA SPORT 6 HD",
        "DE: MAGENTA SPORT 7 HD",
        "DE: MAGENTA SPORT 8 HD",
        "DE: MAGENTA SPORT 9 HD",
        "DE: MAGENTA SPORT 10 HD",
        "DE: MAGENTA SPORT 11 HD",
        "DE: MAGENTA SPORT 12 HD",
        "DE: MAGENTA SPORT 13 HD",
        "DE: MAGENTA SPORT 14 HD",
        "DE: MAGENTA SPORT 15 HD",
        "DE: MAGENTA SPORT 16 HD",
        "DE: MAGENTA SPORT 17 HD",
        "DE: MAGENTA SPORT 18 HD",
      ],
    },
    {
      id: "doku",
      title: "DOKU",
      channels: [
        "DE: ANIMAL PLANET",
        "DE: BERGBLICK",
        "DE: BON GUSTO",
        "DE: CURIOSITY CHANNEL",
        "DE: DISCOVERY CHANNEL HD",
        "DE: DISCOVERY CHANNEL FHD",
        "DE: DMAX",
        "DE: GEO TV",
        "DE: HGTV",
        "DE: HIP TRIPS",
        "DE: HISTORY HD",
        "DE: HISTORY FHD",
        "DE: INPLUS",
        "DE: JUST FISHING",
        "DE: KABEL EINS DOKU FHD",
        "DE: MARCO POLO TV",
        "DE: N24 DOKU",
        "DE: NATIONAL GEOGRAPHIC HD",
        "DE: NATIONAL GEOGRAPHIC FHD",
        "DE: NAT GEO WILD HD",
        "DE: NAT GEO WILD FHD",
        "DE: ONE TERRA",
        "DE: RTL LIVING",
        "DE: SKY DOCUMENTARIES",
        "DE: SKY NATURE",
        "DE: SPIEGEL GESCHICHTE",
        "DE: SPIEGEL TV",
        "DE: SRGT",
        "DE: TLC",
        "DE: TRAVELXP",
        "DE: ZDF INFO",
        "DE: ZDF NEO HD",
        "DE: WAIDWERK",
        "DE: WELT DER WUNDER",
        "DE: XPLORE",
      ],
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"
        strategy="afterInteractive"
      />

      <h1 className="text-3xl font-bold text-center mb-8 text-white">Deutschland Kanäle</h1>

      <div className="space-y-4">
        {germanCategories.map((category, index) => (
          <div key={category.id} className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900">
            <div
              id={`pp-accordion-tab-title-${4331 + index}`}
              className="pp-accordion-tab-title"
              tabIndex={0}
              data-tab={index + 1}
              role="tab"
              aria-controls={`pp-accordion-tab-content-${4331 + index}`}
              aria-expanded={openCategory === category.id}
              onClick={() => toggleCategory(category.id)}
            >
              <span className="pp-accordion-title-icon">
                <span className="pp-accordion-title-text">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>{category.title}</font>
                  </font>
                </span>
              </span>
              <div className="pp-accordion-toggle-icon">
                {openCategory !== category.id ? (
                  <span className="pp-accordion-toggle-icon-close pp-icon">
                    <i aria-hidden="true" className="fas fa-plus"></i>
                  </span>
                ) : (
                  <span className="pp-accordion-toggle-icon-open pp-icon">
                    <i aria-hidden="true" className="fas fa-minus"></i>
                  </span>
                )}
              </div>
            </div>

            {openCategory === category.id && (
              <div
                id={`pp-accordion-tab-content-${4331 + index}`}
                className="pp-accordion-tab-content"
                data-tab={index + 1}
                role="tabpanel"
                aria-labelledby={`pp-accordion-tab-title-${4331 + index}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {category.channels.map((channel, idx) => (
                    <div
                      key={idx}
                      className="channel-item py-2 px-3 rounded-md hover:bg-gray-800 transition-colors flex items-center"
                    >
                      <div className="w-4 h-4 mr-2 flex-shrink-0">
                        <div className="w-full h-full bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-200 truncate">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
