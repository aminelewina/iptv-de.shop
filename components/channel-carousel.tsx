"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ChannelCarousel() {
  const channels = [
    { id: 1, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 1" },
    { id: 2, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 2" },
    { id: 3, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 3" },
    { id: 4, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 4" },
    { id: 5, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 5" },
    { id: 6, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 6" },
    { id: 7, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 7" },
    { id: 8, src: "/placeholder.svg?height=180&width=300", alt: "EURO SPORT" },
    { id: 9, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 9" },
    { id: 10, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 10" },
    { id: 11, src: "/placeholder.svg?height=180&width=300", alt: "BT SPORT" },
    { id: 12, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 12" },
    { id: 13, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 13" },
    { id: 14, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 14" },
    { id: 15, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 15" },
    { id: 16, src: "/placeholder.svg?height=180&width=300", alt: "Sports Channel 16" },
    { id: 17, src: "/placeholder.svg?height=180&width=300", alt: "FOX SPORT" },
    { id: 18, src: "/placeholder.svg?height=180&width=300", alt: "MOTO GP" },
    { id: 19, src: "/placeholder.svg?height=180&width=300", alt: "ONE SPORT TV" },
    { id: 20, src: "/placeholder.svg?height=180&width=300", alt: "PRODIGY SPORT" },
    { id: 21, src: "/placeholder.svg?height=180&width=300", alt: "RMC SPORT" },
    { id: 22, src: "/placeholder.svg?height=180&width=300", alt: "SPORT" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleChannels, setVisibleChannels] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const updateVisibleChannels = () => {
      const width = window.innerWidth
      let visibleCount = 1

      if (width >= 1280) visibleCount = 6
      else if (width >= 1024) visibleCount = 5
      else if (width >= 768) visibleCount = 4
      else if (width >= 640) visibleCount = 3
      else if (width >= 480) visibleCount = 2

      const visible = []
      for (let i = 0; i < visibleCount + 4; i++) {
        // Add extra items for smooth looping
        visible.push((currentIndex + i) % channels.length)
      }
      setVisibleChannels(visible)
    }

    updateVisibleChannels()
    window.addEventListener("resize", updateVisibleChannels)

    return () => {
      window.removeEventListener("resize", updateVisibleChannels)
    }
  }, [currentIndex, channels.length])

  const goToPrev = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? channels.length - 1 : prevIndex - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
  }

  const goToNext = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % channels.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
  }

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning])

  return (
    <div className="relative max-w-6xl mx-auto">
      <div
        ref={containerRef}
        className="flex overflow-hidden py-4"
        style={{ transition: isTransitioning ? "transform 300ms ease" : "none" }}
      >
        {visibleChannels.map((index, i) => (
          <div
            key={`channel-${channels[index].id}-${i}`}
            className="flex-shrink-0 w-[168px] px-2" // Reduced by 10%
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 300ms ease",
            }}
          >
            <div className="relative">
              <figure className="bg-white rounded-lg overflow-hidden">
                <Image
                  src={channels[index].src || "/placeholder.svg"}
                  alt={channels[index].alt}
                  width={270} // Reduced by 10% from 300
                  height={162} // Reduced by 10% from 180
                  className="w-full h-auto"
                />
              </figure>
              <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/70 to-transparent rounded-t-lg">
                <h3 className="text-white font-medium truncate" style={{ fontSize: "0.85rem" }}>
                  {channels[index].alt.split(" - ")[0]}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
