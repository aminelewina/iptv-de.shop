"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function StreamingContentCarousel() {
  const streamingContent = [
    { id: 1, src: "/placeholder.svg?height=300&width=187", alt: "Streaming Content 1" },
    { id: 2, src: "/placeholder.svg?height=300&width=187", alt: "Streaming Content 2" },
    { id: 3, src: "/placeholder.svg?height=300&width=187", alt: "Streaming Content 3" },
    { id: 4, src: "/placeholder.svg?height=300&width=187", alt: "Streaming Content 4" },
    { id: 5, src: "/placeholder.svg?height=300&width=187", alt: "Streaming Content 5" },
    { id: 6, src: "/placeholder.svg?height=300&width=187", alt: "Streaming Content 6" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleContent, setVisibleContent] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const updateVisibleContent = () => {
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
        visible.push((currentIndex + i) % streamingContent.length)
      }
      setVisibleContent(visible)
    }

    updateVisibleContent()
    window.addEventListener("resize", updateVisibleContent)

    return () => {
      window.removeEventListener("resize", updateVisibleContent)
    }
  }, [currentIndex, streamingContent.length])

  const goToPrev = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? streamingContent.length - 1 : prevIndex - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
  }

  const goToNext = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % streamingContent.length)

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
    <div className="elementor-image-carousel-wrapper swiper relative max-w-6xl mx-auto">
      <div
        ref={containerRef}
        className="elementor-image-carousel swiper-wrapper flex overflow-hidden py-4"
        aria-live="off"
        id="streaming-content-wrapper"
        style={{ transition: isTransitioning ? "transform 300ms ease" : "none" }}
      >
        {visibleContent.map((index, i) => (
          <div
            key={`content-${streamingContent[index].id}-${i}`}
            className="swiper-slide flex-shrink-0 w-[187.5px] px-2"
            role="group"
            aria-roledescription="slide"
            data-swiper-slide-index={index}
            style={{
              marginRight: "19px",
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 300ms ease",
            }}
          >
            <div className="relative">
              <figure className="swiper-slide-inner">
                <Image
                  src={streamingContent[index].src || "/placeholder.svg"}
                  alt={streamingContent[index].alt}
                  width={187}
                  height={300}
                  className="swiper-slide-image rounded-lg w-full h-auto"
                  decoding="async"
                />
              </figure>
              <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/70 to-transparent rounded-t-lg">
                <h3 className="text-white font-medium text-[0.85em]" style={{ fontSize: "calc(1em * 0.85)" }}>
                  {streamingContent[index].alt.split(" - ")[0]}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="elementor-swiper-button elementor-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
        role="button"
        tabIndex={0}
        aria-label="Previous slide"
        aria-controls="streaming-content-wrapper"
        onClick={goToPrev}
      >
        <i aria-hidden="true" className="eicon-chevron-left">
          <ChevronLeft className="h-6 w-6" />
        </i>
      </div>

      <div
        className="elementor-swiper-button elementor-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
        role="button"
        tabIndex={0}
        aria-label="Next slide"
        aria-controls="streaming-content-wrapper"
        onClick={goToNext}
      >
        <i aria-hidden="true" className="eicon-chevron-right">
          <ChevronRight className="h-6 w-6" />
        </i>
      </div>

      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  )
}
