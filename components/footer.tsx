import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0a1a1f] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="mb-4 md:mb-0">
            <div className="relative h-8 w-auto">
              <span className="font-bold text-xl">
                UP <span className="bg-red-600 px-1">IPTV</span>
              </span>
            </div>
          </Link>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-red-500 transition-colors">
              Datenschutzrichtlinie
            </Link>
            <Link href="/terms-of-service" className="hover:text-red-500 transition-colors">
              Nutzungsbedingungen
            </Link>
            <Link href="/refund-policy" className="hover:text-red-500 transition-colors">
              Rückerstattungsrichtlinie
            </Link>
          </nav>
        </div>
        <div className="text-center text-xs text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  )
}
