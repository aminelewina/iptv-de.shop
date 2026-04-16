"use client"

export default function Hero() {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2832%29-9v3fHSxYtaCgcP6KbiFVUHAjrTgCVB.jpeg"
          alt="Familie beim gemeinsamen Fernsehen"
          className="object-cover w-full h-full brightness-50"
        />
      </div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sans">
            Nr. 1 unter den deutschen Anbietern
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light">Ohne Unterbrechungen, auf allen Geräten.</p>
          <a
            href="#plans"
            className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-red-700 transition-colors text-lg"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            JETZT STARTEN
          </a>
          <div className="flex justify-center mt-16">
            <div className="w-full max-w-[366px]">
              <img
                src="http://tvspot.shop/wp-content/uploads/2024/11/devices-4-1.png"
                alt="Kompatible Geräte: Smart TV, Laptop/PC, Android, iOS, Windows"
                width={366}
                height={63}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
