"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import LazyImage from "./lazy-image"
import CarouselProgress from "./carousel-progress"
import CarouselKeyboardNav from "./carousel-keyboard-nav"

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      src: "http://tvspot.shop/wp-content/uploads/2024/12/review-103-1.webp",
      alt: "Kundenbewertung mit 5 Sternen - Zufriedener Kunde lobt die Kanalvielfalt und Stabilität",
    },
    {
      id: 2,
      src: "http://tvspot.shop/wp-content/uploads/2024/12/review-104-1.webp",
      alt: "Kundenbewertung mit 5 Sternen - Kunde berichtet über hervorragende Bildqualität und Support",
    },
    {
      id: 3,
      src: "http://tvspot.shop/wp-content/uploads/2024/12/Review-105-1.webp",
      alt: "Kundenbewertung mit 5 Sternen - Positive Erfahrung mit dem Sportangebot und der App",
    },
    {
      id: 4,
      src: "http://tvspot.shop/wp-content/uploads/2024/12/Review-106-1.webp",
      alt: "Kundenbewertung mit 5 Sternen - Kunde empfiehlt den Service für seine Zuverlässigkeit",
    },
    {
      id: 5,
      src: "http://tvspot.shop/wp-content/uploads/2024/12/Review-101-1.webp",
      alt: "Kundenbewertung mit 5 Sternen - Lob für die große Auswahl an deutschen Kanälen",
    },
    {
      id: 6,
      src: "http://tvspot.shop/wp-content/uploads/2024/12/Review-102-1.webp",
      alt: "Kundenbewertung mit 5 Sternen - Kunde schätzt die einfache Einrichtung und Bedienung",
    },
  ]

  // Create infinite loop array by duplicating items
  const infiniteReviews = [...reviews, ...reviews, ...reviews]

  const [currentIndex, setCurrentIndex] = useState(reviews.length)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [autoScrollPaused, setAutoScrollPaused] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)
  const [itemWidth, setItemWidth] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      let newVisibleCount = 1

      if (width >= 768)
        newVisibleCount = 3 // Show exactly 3 on desktop and tablet
      else if (width >= 640)
        newVisibleCount = 2 // Show exactly 2 items on mobile
      else newVisibleCount = 1 // Show exactly 1 item on small mobile

      setVisibleCount(newVisibleCount)

      // Calculate item width based on container width and visible items
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.clientWidth
        setItemWidth(containerWidth / newVisibleCount)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)

    return () => {
      window.removeEventListener("resize", updateVisibleCount)
    }
  }, [])

  // Initialize scroll position to middle set for infinite loop
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = reviews.length * itemWidth
    }
  }, [itemWidth, reviews.length])

  // Handle infinite loop
  const handleInfiniteLoop = () => {
    if (!scrollRef.current) return

    const totalWidth = reviews.length * itemWidth

    if (scrollRef.current.scrollLeft < itemWidth) {
      // If we're at the beginning of the first set, jump to the second set
      setIsTransitioning(true)
      scrollRef.current.style.scrollBehavior = "auto"
      scrollRef.current.scrollLeft = totalWidth + scrollRef.current.scrollLeft
      setCurrentIndex(currentIndex + reviews.length)
      setTimeout(() => {
        scrollRef.current!.style.scrollBehavior = "smooth"
        setIsTransitioning(false)
      }, 10)
    } else if (scrollRef.current.scrollLeft >= totalWidth * 2 - itemWidth) {
      // If we're at the end of the third set, jump to the second set
      setIsTransitioning(true)
      scrollRef.current.style.scrollBehavior = "auto"
      scrollRef.current.scrollLeft = totalWidth + (scrollRef.current.scrollLeft - totalWidth * 2)
      setCurrentIndex(currentIndex - reviews.length)
      setTimeout(() => {
        scrollRef.current!.style.scrollBehavior = "smooth"
        setIsTransitioning(false)
      }, 10)
    }
  }

  // Check for infinite loop conditions on scroll
  useEffect(() => {
    const scrollElement = scrollRef.current

    const handleScroll = () => {
      if (!isDragging && !isTransitioning) {
        handleInfiniteLoop()
      }
    }

    scrollElement?.addEventListener("scroll", handleScroll)

    return () => {
      scrollElement?.removeEventListener("scroll", handleScroll)
    }
  }, [isDragging, isTransitioning, itemWidth])

  const goToPrev = () => {
    if (isTransitioning || !scrollRef.current) return
    setIsTransitioning(true)

    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex)

    const scrollAmount = newIndex * itemWidth
    scrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })

    setTimeout(() => setIsTransitioning(false), 300)
  }

  const goToNext = () => {
    if (isTransitioning || !scrollRef.current) return
    setIsTransitioning(true)

    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)

    const scrollAmount = newIndex * itemWidth
    scrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })

    setTimeout(() => setIsTransitioning(false), 300)
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    setAutoScrollPaused(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk

    // Update index based on scroll position
    if (itemWidth > 0) {
      const newIndex = Math.round(scrollRef.current.scrollLeft / itemWidth)
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Resume auto-scroll after a delay
    setTimeout(() => setAutoScrollPaused(false), 3000)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      // Resume auto-scroll after a delay
      setTimeout(() => setAutoScrollPaused(false), 3000)
    }
  }

  // Handle wheel scrolling
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return
    e.preventDefault()

    setAutoScrollPaused(true)
    scrollRef.current.scrollLeft += e.deltaY

    // Update index based on scroll position
    if (itemWidth > 0) {
      const newIndex = Math.round(scrollRef.current.scrollLeft / itemWidth)
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    }

    // Resume auto-scroll after a delay
    clearTimeout(Number(scrollRef.current.dataset.wheelTimeout))
    const timeoutId = setTimeout(() => setAutoScrollPaused(false), 3000)
    scrollRef.current.dataset.wheelTimeout = timeoutId.toString()
  }

  // Auto-scroll effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (!autoScrollPaused) {
      interval = setInterval(() => {
        goToNext()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentIndex, isTransitioning, autoScrollPaused])

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    setAutoScrollPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk

    // Update index based on scroll position
    if (itemWidth > 0) {
      const newIndex = Math.round(scrollRef.current.scrollLeft / itemWidth)
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    // Resume auto-scroll after a delay
    setTimeout(() => setAutoScrollPaused(false), 3000)
  }

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Star className="w-6 h-6 text-yellow-500 mr-2 fill-yellow-500" />
          <h2 className="text-3xl font-bold text-white text-center">Kundenbewertungen</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" id="reviews-carousel">
            <CarouselKeyboardNav onPrev={goToPrev} onNext={goToNext} enabled={!isTransitioning} id="reviews-carousel" />
            <div
              ref={scrollRef}
              className={`flex overflow-x-auto scrollbar-hide ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {infiniteReviews.map((review, index) => {
                const uniqueId = `review-${review.id}-${index}`
                return (
                  <div
                    key={uniqueId}
                    className="flex-shrink-0 flex justify-center"
                    style={{ width: `${100 / visibleCount}%`, padding: "0px 8px" }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`transform transition-all duration-300 ${
                        hoveredIndex === index ? "scale-105" : ""
                      } relative group w-full max-w-[80%] mx-auto`}
                    >
                      <div className="relative">
                        <LazyImage
                          src={review.src || "/placeholder.svg"}
                          alt={review.alt}
                          className="w-full h-auto rounded-lg shadow-lg"
                          objectFit="cover"
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        />

                        {/* Green border overlay */}
                        <div className="absolute inset-0 border-4 border-green-500 rounded-lg pointer-events-none"></div>

                        {/* Hover overlay */}
                        <div
                          className={`absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center transition-opacity duration-300 ${
                            hoveredIndex === index ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-bold transform transition-transform duration-300 flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                            Verifizierte Bewertung
                          </div>
                        </div>

                        {/* Verified badge */}
                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                          Verifiziert
                        </div>
                      </div>

                      {/* Mobile indicator */}
                      <div className="mt-2 flex justify-center md:hidden">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md hover:bg-white z-10 carousel-nav-button"
            aria-label="Vorherige Kundenbewertungen anzeigen"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md hover:bg-white z-10 carousel-nav-button"
            aria-label="Nächste Kundenbewertungen anzeigen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <CarouselProgress
            totalItems={reviews.length}
            currentIndex={currentIndex % reviews.length}
            visibleItems={visibleCount}
            className="mt-4"
          />
        </div>
      </div>
    </section>
  )
}
