import Image from "next/image"

export default function StreamingServices() {
  const services = [
    { name: "Hulu", src: "/placeholder.svg?height=120&width=80" },
    { name: "Apple TV", src: "/placeholder.svg?height=120&width=80" },
    { name: "Amazon Prime", src: "/placeholder.svg?height=120&width=80" },
    { name: "Netflix", src: "/placeholder.svg?height=120&width=80" },
    { name: "Disney+", src: "/placeholder.svg?height=120&width=80" },
    { name: "HBO Max", src: "/placeholder.svg?height=120&width=80" },
  ]

  return (
    <section className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div key={index} className="w-[80px] h-[120px]">
              <Image
                src={service.src || "/placeholder.svg"}
                alt={service.name}
                width={80}
                height={120}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
