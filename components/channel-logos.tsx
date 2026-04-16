import Image from "next/image"

export default function ChannelLogos() {
  const logos = [
    { name: "beIN Sports", src: "/placeholder.svg?height=80&width=160" },
    { name: "CBS", src: "/placeholder.svg?height=80&width=160" },
    { name: "Disney+", src: "/placeholder.svg?height=80&width=160" },
    { name: "Apple TV", src: "/placeholder.svg?height=80&width=160" },
    { name: "Formula 1", src: "/placeholder.svg?height=80&width=160" },
    { name: "BBC", src: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <section className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="bg-white p-4 rounded-lg w-[160px] h-[120px] flex items-center justify-center">
              <Image src={logo.src || "/placeholder.svg"} alt={logo.name} width={160} height={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
