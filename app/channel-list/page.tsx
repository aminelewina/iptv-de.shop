import Header from "@/components/header"
import Footer from "@/components/footer"
import ChannelList from "@/components/channel-list"

export const metadata = {
  title: "Deutsche Kanäle",
  description:
    "Umfangreiche Liste deutscher TV-Kanäle in HD und FHD Qualität. Sport, Filme und Unterhaltung ohne Unterbrechungen.",
  keywords: "deutsche tv-kanäle, deutsche sender, iptv deutschland, hd sender",
}

export default function ChannelListPage() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-12 pt-28">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Deutsche Kanäle</h1>
        <ChannelList />
      </div>
      <Footer />
    </main>
  )
}
