"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react"
import LazyImage from "./lazy-image"
import CarouselProgress from "./carousel-progress"
import CarouselKeyboardNav from "./carousel-keyboard-nav"

export default function FootballLeagues() {
  const leagues = [
    {
      id: 1,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/UEFA_Euro_2024-205x300.png",
      alt: "UEFA Euro 2024 - Europameisterschaft mit Live-Übertragungen aller Spiele",
      name: "UEFA Euro",
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 2,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/uel-logo-dark-205x300.png",
      alt: "UEFA Europa League - Europäischer Klubwettbewerb mit deutschen Vereinen",
      name: "Europa League",
      color: "from-orange-500 to-orange-700",
    },
    {
      id: 3,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/serie-a-logo-205x300.png",
      alt: "Serie A - Italienische Fußballliga mit Topvereinen wie Juventus und Inter",
      name: "Serie A",
      color: "from-green-600 to-green-800",
    },
    {
      id: 4,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/UEFA_Champions_League-205x300.png",
      alt: "UEFA Champions League - Prestigeträchtigster Klubwettbewerb mit HD-Übertragungen",
      name: "Champions League",
      color: "from-blue-700 to-indigo-900",
    },
    {
      id: 5,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/uecl-logo-205x300.png",
      alt: "UEFA Conference League - Neuer europäischer Wettbewerb für mehr Vereine",
      name: "Conference League",
      color: "from-green-500 to-teal-700",
    },
    {
      id: 6,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/Premier-League-Emblem-205x300.png",
      alt: "Premier League - Englische Topliga mit Stars und spannenden Derbys",
      name: "Premier League",
      color: "from-purple-600 to-purple-900",
    },
    {
      id: 7,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/ligue-1-205x300.png",
      alt: "Ligue 1 - Französische Liga mit Paris Saint-Germain und anderen Topteams",
      name: "Ligue 1",
      color: "from-red-600 to-red-800",
    },
    {
      id: 8,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/laliga-logo-205x300.png",
      alt: "La Liga - Spanische Liga mit Real Madrid, Barcelona und Atletico Madrid",
      name: "La Liga",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      id: 9,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/EFL-Championship-205x300.png",
      alt: "EFL Championship - Zweithöchste englische Liga mit Aufstiegsambitionen",
      name: "Championship",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 10,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/mls-205x300.png",
      alt: "MLS - Major League Soccer aus den USA mit internationalen Stars",
      name: "MLS",
      color: "from-red-500 to-red-700",
    },
    {
      id: 11,
      src: "https://tvspot.shop/wp-content/uploads/2024/11/bundesliga-logo-205x300.png",
      alt: "Bundesliga - Deutsche Topliga mit Bayern München, Dortmund und allen Spielen live",
      name: "Bundesliga",
      color: "from-red-600 to-red-900",
    },
  ]

  // Create infinite loop array by duplicating items
  const infiniteLeagues = [...leagues, ...leagues, ...leagues]

  const [currentIndex, setCurrentIndex] = useState(leagues.length)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [autoScrollPaused, setAutoScrollPaused] = useState(false)
  const [visibleItems, setVisibleItems] = useState(5)
  const [itemWidth, setItemWidth] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth
      let newVisibleItems = 1

      if (width >= 1280) newVisibleItems = 5
      else if (width >= 1024) newVisibleItems = 4
      else if (width >= 768) newVisibleItems = 3
      else if (width >= 640) newVisibleItems = 2
      else if (width >= 480) newVisibleItems = 1.5 // Show partial item on mobile

      setVisibleItems(newVisibleItems)

      // Calculate item width based on container width and visible items
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.clientWidth
        setItemWidth(containerWidth / newVisibleItems)
      }
    }

    updateVisibleItems()
    window.addEventListener("resize", updateVisibleItems)

    return () => {
      window.removeEventListener("resize", updateVisibleItems)
    }
  }, [])

  // Initialize scroll position to middle set for infinite loop
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = leagues.length * itemWidth
    }
  }, [itemWidth, leagues.length])

  // Handle infinite loop
  const handleInfiniteLoop = () => {
    if (!scrollRef.current) return

    const totalWidth = leagues.length * itemWidth

    if (scrollRef.current.scrollLeft < itemWidth) {
      // If we're at the beginning of the first set, jump to the second set
      setIsTransitioning(true)
      scrollRef.current.style.scrollBehavior = "auto"
      scrollRef.current.scrollLeft = totalWidth + scrollRef.current.scrollLeft
      setCurrentIndex(currentIndex + leagues.length)
      setTimeout(() => {
        scrollRef.current!.style.scrollBehavior = "smooth"
        setIsTransitioning(false)
      }, 10)
    } else if (scrollRef.current.scrollLeft >= totalWidth * 2 - itemWidth) {
      // If we're at the end of the third set, jump to the second set
      setIsTransitioning(true)
      scrollRef.current.style.scrollBehavior = "auto"
      scrollRef.current.scrollLeft = totalWidth + (scrollRef.current.scrollLeft - totalWidth * 2)
      setCurrentIndex(currentIndex - leagues.length)
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

  // Auto-scroll effectcurrent) return
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
  }, [currentIndex, isTransitioning, autoScrollPaused, goToNext])

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
          <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
          <h2 className="text-2xl font-bold text-white text-center">Schauen Sie Ihre Lieblingsfußballligen</h2>
        </div>

        <div className="relative">
          <div ref={containerRef} className="overflow-hidden" id="leagues-carousel">
            <CarouselKeyboardNav onPrev={goToPrev} onNext={goToNext} enabled={!isTransitioning} id="leagues-carousel" />
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
              {infiniteLeagues.map((league, index) => {
                const uniqueId = `league-${league.id}-${index}`
                return (
                  <div
                    key={uniqueId}
                    className="flex-shrink-0"
                    style={{ width: `${100 / visibleItems}%`, padding: "0px 8px" }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`w-full h-[280px] md:h-[300px] rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform ${
                        hoveredIndex === index ? "scale-105" : ""
                      }`}
                    >
                      {/* Gradient background with league color */}
                      <div
                        className={`w-full h-full bg-gradient-to-br ${league.color} relative flex flex-col items-center justify-center p-4`}
                      >
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                          <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white -translate-x-10 -translate-y-10"></div>
                          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white translate-x-16 translate-y-16"></div>
                        </div>

                        {/* Trophy icon */}
                        <div
                          className={`absolute top-3 right-3 text-white/70 transition-all duration-300 ${
                            hoveredIndex === index ? "opacity-100 rotate-12" : "opacity-50"
                          }`}
                        >
                          <Trophy size={20} />
                        </div>

                        {/* Logo container with white background - OPTIMIZED */}
                        <div className="w-full aspect-square max-h-[160px] bg-white/90 rounded-lg shadow-inner flex items-center justify-center mb-4 relative overflow-hidden">
                          {/* Shine effect on hover */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full ${
                              hoveredIndex === index ? "animate-shine" : ""
                            }`}
                          ></div>

                          {/* Image container with fixed dimensions */}
                          <div className="w-[80%] h-[80%] relative flex items-center justify-center">
                            <LazyImage
                              src={league.src || "/placeholder.svg"}
                              alt={league.alt}
                              className="w-full h-full"
                              objectFit="contain"
                              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
                              quality={90}
                            />
                          </div>
                        </div>

                        {/* League name */}
                        <h3 className="text-white font-bold text-center text-lg mt-auto">{league.name}</h3>

                        {/* Live indicator that appears on hover */}
                        <div
                          className={`mt-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center transition-all duration-300 ${
                            hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                        >
                          <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                          LIVE
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
            aria-label="Vorherige Fußballligen anzeigen"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md hover:bg-white z-10 carousel-nav-button"
            aria-label="Nächste Fußballligen anzeigen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <CarouselProgress
            totalItems={leagues.length}
            currentIndex={currentIndex % leagues.length}
            visibleItems={visibleItems}
            className="mt-4"
          />
        </div>
      </div>
    </section>
  )
}
