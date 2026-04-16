import Header from "@/components/header"
import Footer from "@/components/footer"
import GermanyChannels from "@/components/germany-channels"

export const metadata = {
  title: "Deutschland Kanäle - Alle deutschen Sender | IPTV Anbieter",
  description:
    "Alle deutschen TV-Sender in einer übersichtlichen Liste. Entdecken Sie öffentlich-rechtliche, private, Sport-, Dokumentations- und Unterhaltungskanäle in HD-Qualität.",
  keywords:
    "upiptv, ip tv anbieter, upiptv erfahrungen, iptv anbieter, iptv germany, iptv deutschland, iptv abo, ip tv kaufen, iptv tv",
}

export default function GermanyChannelsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-12 pt-28">
        <GermanyChannels />
      </div>
      <Footer />
    </main>
  )
}
