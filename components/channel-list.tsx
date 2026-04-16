"use client"

import { useState } from "react"

type ChannelCategory = {
  id: string
  title: string
  channels: string[]
}

export default function ChannelList() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId)
  }

  // Update the categories array to remove non-German sections
  const categories: ChannelCategory[] = [
    {
      id: "de-deutschland",
      title: "DE DEUTSCHLAND",
      channels: [
        "DE: ----- DEUTSCHLAND -----",
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
      id: "de-vip-deutschland",
      title: "DE VIP DEUTSCHLAND",
      channels: [
        "DE: ----- VIP DEUTSCHLAND -----",
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
      id: "de-hevc-4k",
      title: "DE (HEVC - 4K)",
      channels: [
        "DE: ----- HEVC / 4K -----",
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
      id: "de-news-information",
      title: "DE NEWS - INFORMATION",
      channels: [
        "DE: ----- NEWS / INFORMATION -----",
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
      ],
    },
    {
      id: "de-sport",
      title: "DE SPORT",
      channels: [
        "DE: ----- SPORT -----",
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
      ],
    },
    {
      id: "de-vip-sport",
      title: "DE VIP SPORT",
      channels: [
        "DE: ----- VIP SPORT -----",
        "DE: VIP EUROSPORT 1 HD",
        "DE: VIP EUROSPORT 2 HD",
        "DE: VIP SPORT1 HD",
        "DE: VIP SKY SPORT NEWS HD",
        "DE: VIP SKY SPORT 1 HD",
        "DE: VIP SKY SPORT 2 HD",
      ],
    },
    {
      id: "de-doku",
      title: "DE DOKU",
      channels: [
        "DE: ----- DOKU -----",
        "DE: ANIMAL PLANET",
        "DE: BERGBLICK",
        "DE: BON GUSTO",
        "DE: CURIOSITY CHANNEL",
        "DE: DISCOVERY CHANNEL HD",
        "DE: DISCOVERY CHANNEL FHD",
        "DE: DMAX",
        "DE: GEO TV",
        "DE: HGTV",
      ],
    },
    {
      id: "de-kino-serien",
      title: "DE KINO - SERIEN",
      channels: [
        "DE: ----- KINO / SERIEN -----",
        "DE: SKY CINEMA ACTION HD",
        "DE: SKY CINEMA COMEDY HD",
        "DE: SKY CINEMA EMOTION HD",
        "DE: SKY CINEMA FAMILY HD",
        "DE: SKY CINEMA HD",
        "DE: SKY CINEMA HITS HD",
        "DE: SKY CINEMA NOSTALGIE",
        "DE: SKY CINEMA THRILLER HD",
        "DE: SKY CINEMA +1 HD",
        "DE: SKY CINEMA +24 HD",
      ],
    },
    {
      id: "de-regional",
      title: "DE REGIONAL",
      channels: [
        "DE: ----- REGIONAL -----",
        "DE: MDR SACHSEN HD",
        "DE: MDR S-ANHALT HD",
        "DE: MDR THÜRINGEN HD",
        "DE: NDR HD",
        "DE: NDR HAMBURG HD",
        "DE: NDR MECKLENBURG-VORPOMMERN HD",
        "DE: NDR NIEDERSACHSEN HD",
        "DE: NDR SCHLESWIG-HOLSTEIN HD",
      ],
    },
    {
      id: "de-kinder",
      title: "DE KINDER",
      channels: [
        "DE: ----- KINDER -----",
        "DE: BOOMERANG",
        "DE: CARTOON NETWORK",
        "DE: DISNEY CHANNEL HD",
        "DE: DISNEY CINEMAGIC HD",
        "DE: DISNEY JUNIOR HD",
        "DE: DISNEY XD",
        "DE: FIX & FOXI",
        "DE: JUNIOR",
        "DE: KIKA HD",
        "DE: NICKELODEON HD",
      ],
    },
    {
      id: "de-musik",
      title: "DE MUSIK",
      channels: [
        "DE: ----- MUSIK -----",
        "DE: CLASSICA",
        "DE: DELUXE MUSIC HD",
        "DE: JUKEBOX",
        "DE: MTV HD",
        "DE: MTV DANCE",
        "DE: MTV HITS",
        "DE: MTV LIVE HD",
        "DE: MTV MUSIC 24",
      ],
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Channel List</h1>

      <div className="space-y-px">
        {categories.map((category) => (
          <div key={category.id} className="overflow-hidden">
            {/* Category Header */}
            <div
              className="flex justify-between items-center p-3 bg-black cursor-pointer border-b border-gray-800"
              onClick={() => toggleCategory(category.id)}
            >
              <h2 className="text-base font-medium text-white">{category.title}</h2>
              <span className="text-white text-xl font-bold w-6 h-6 flex items-center justify-center">
                {openCategory === category.id ? "−" : "+"}
              </span>
            </div>

            {/* Category Content */}
            {openCategory === category.id && (
              <div className="bg-black border-x border-b border-gray-800">
                <div className="p-2">
                  {category.channels.map((channel, idx) => (
                    <div
                      key={idx}
                      className={`py-1 px-2 text-white ${
                        channel.includes("-----") ? "font-bold border-b border-gray-800 mb-2" : ""
                      }`}
                    >
                      {channel}
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
