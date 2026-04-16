"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Film, Tv2 } from "lucide-react"
import LazyImage from "./lazy-image"
import CarouselProgress from "./carousel-progress"
import CarouselKeyboardNav from "./carousel-keyboard-nav"

export default function ContentCarousels() {
  // Sports channels data
  const sportsChannels = [
    {
      id: 1,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/FOX-SPORT-400x240-2-300x180-1.jpg",
      alt: "FOX SPORT Live-Übertragung mit HD-Qualität",
    },
    {
      id: 2,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/MOTO-GP-400x240-2-300x180-1.jpg",
      alt: "MOTO GP Rennsport-Kanal mit Live-Rennen",
    },
    {
      id: 3,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/ONE-SPORT-TV-400x240-2-300x180-1.jpg",
      alt: "ONE SPORT TV mit vielfältigen Sportübertragungen",
    },
    {
      id: 4,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/PRODIGY-SPORT-400x240-2-300x180-1.jpg",
      alt: "PRODIGY SPORT Premium-Sportkanal mit exklusiven Inhalten",
    },
    {
      id: 5,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/RMC-SPORT-400x240-2-300x180-1.jpg",
      alt: "RMC SPORT französischer Sportkanal mit internationalen Wettbewerben",
    },
    {
      id: 6,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/SPORT-400x240-2-300x180-1.jpg",
      alt: "SPORT Hauptkanal mit täglichen Sportübertragungen",
    },
    {
      id: 7,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/3-1-300x180-1.png",
      alt: "Sportkanal mit Fußballübertragungen und Analysen",
    },
    {
      id: 8,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/6-300x180-1.png",
      alt: "Sportkanal mit Motorsport und Rennübertragungen",
    },
    {
      id: 9,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/1-1-300x180-1.png",
      alt: "Sportkanal mit Kampfsport und Box-Events",
    },
    {
      id: 10,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/7-300x180-1.png",
      alt: "Sportkanal mit Basketball und Handball",
    },
    {
      id: 11,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/4-300x180-1.png",
      alt: "Sportkanal mit Tennis und Golf",
    },
    {
      id: 12,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/12-300x180-1.png",
      alt: "Sportkanal mit Wintersport und Olympischen Spielen",
    },
    {
      id: 13,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/5-1-300x180-1.png",
      alt: "Sportkanal mit Extremsport und Abenteuerinhalten",
    },
    {
      id: 14,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/EURO-SPORT-400x240-2-300x180-1.jpg",
      alt: "EURO SPORT mit europäischen Fußballligen und Turnieren",
    },
    {
      id: 15,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/9-300x180-1.png",
      alt: "Sportkanal mit Leichtathletik und Schwimmen",
    },
    {
      id: 16,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/11-300x180-1.png",
      alt: "Sportkanal mit Rugby und American Football",
    },
    {
      id: 17,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/BT-SPORT-400x240-2-300x180-2.jpg",
      alt: "BT SPORT mit Premier League und Champions League",
    },
    {
      id: 18,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/2-1-300x180-1.png",
      alt: "Sportkanal mit Volleyball und Beachvolleyball",
    },
    {
      id: 19,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/8-300x180-1.png",
      alt: "Sportkanal mit Radsport und Tour de France",
    },
    {
      id: 20,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/10-300x180-1.png",
      alt: "Sportkanal mit Eishockey und Wintersport",
    },
    {
      id: 21,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/13-300x180-1.png",
      alt: "Sportkanal mit Wassersport und Segeln",
    },
    {
      id: 22,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/15-300x180-1.png",
      alt: "Sportkanal mit Tischtennis und Badminton",
    },
  ]

  // Movie thumbnails data
  const movieThumbnails = [
    {
      id: 1,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/yrxDE5ezobayrMFrnv7NDqoQLk-1.png",
      alt: "Avengers: Endgame - Blockbuster-Superhelden-Film in HD-Qualität",
      title: "Avengers: Endgame",
      rating: 4.8,
    },
    {
      id: 2,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/xnMEotfjdfP77b8IPse0gwIxmCk.png",
      alt: "Joker - Preisgekröntes Drama mit Joaquin Phoenix in 4K",
      title: "Joker",
      rating: 4.5,
    },
    {
      id: 3,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/T06CwgmjjrzgX8rV41wwZ0vVA7A.png",
      alt: "The Batman - Neueste DC-Verfilmung mit Robert Pattinson",
      title: "The Batman",
      rating: 4.6,
    },
    {
      id: 4,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/5xMICFxV2tXHNbzwQIHBUcj7KM.png",
      alt: "Dune - Science-Fiction-Epos basierend auf dem Bestseller",
      title: "Dune",
      rating: 4.7,
    },
    {
      id: 5,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/IXgISvfRkXxvOgvDfhtu2u4Y.png",
      alt: "No Time to Die - James Bond Actionfilm mit Daniel Craig",
      title: "No Time to Die",
      rating: 4.3,
    },
    {
      id: 6,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/a0IjMAHyqYyB965o7ssoqfJNFDs.png",
      alt: "Spider-Man: No Way Home - Marvel-Blockbuster mit Tom Holland",
      title: "Spider-Man: No Way Home",
      rating: 4.9,
    },
    {
      id: 7,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/yrxDE5ezobayrMFrnv7NDqoQLk-1.png",
      alt: "Black Widow - Marvel-Actionfilm mit Scarlett Johansson",
      title: "Black Widow",
      rating: 4.2,
    },
    {
      id: 8,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/xnMEotfjdfP77b8IPse0gwIxmCk.png",
      alt: "Shang-Chi - Marvel-Abenteuer mit asiatischem Superhelden",
      title: "Shang-Chi",
      rating: 4.4,
    },
    {
      id: 9,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/T06CwgmjjrzgX8rV41wwZ0vVA7A.png",
      alt: "Eternals - Episches Marvel-Abenteuer mit kosmischen Wesen",
      title: "Eternals",
      rating: 4.0,
    },
    {
      id: 10,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/5xMICFxV2tXHNbzwQIHBUcj7KM.png",
      alt: "The Matrix Resurrections - Fortsetzung der kultigen Sci-Fi-Reihe",
      title: "The Matrix Resurrections",
      rating: 4.1,
    },
    {
      id: 11,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/IXgISvfRkXxvOgvDfhtu2u4Y.png",
      alt: "Venom: Let There Be Carnage - Action-Fortsetzung mit Tom Hardy",
      title: "Venom: Let There Be Carnage",
      rating: 4.2,
    },
    {
      id: 12,
      src: "http://tvspot.shop/wp-content/uploads/2024/11/a0IjMAHyqYyB965o7ssoqfJNFDs.png",
      alt: "Fast & Furious 9 - Actiongeladenes Rennspektakel mit Vin Diesel",
      title: "Fast & Furious 9",
      rating: 4.3,
    },
  ]

  // Create infinite loop arrays by duplicating items
  const infiniteSportsChannels = [...sportsChannels, ...sportsChannels, ...sportsChannels]
  const infiniteMovieThumbnails = [...movieThumbnails, ...movieThumbnails, ...movieThumbnails]

  // Sports carousel state
  const [sportsIndex, setSportsIndex] = useState(sportsChannels.length)
  const [sportsTransitioning, setSportsTransitioning] = useState(false)
  const sportsContainerRef = useRef<HTMLDivElement>(null)
  const sportsScrollRef = useRef<HTMLDivElement>(null)
  const [sportsDragging, setSportsDragging] = useState(false)
  const [sportsStartX, setSportsStartX] = useState(0)
  const [sportsScrollLeft, setSportsScrollLeft] = useState(0)
  const [sportsAutoScrollPaused, setSportsAutoScrollPaused] = useState(false)
  const [sportsHoveredIndex, setSportsHoveredIndex] = useState<number | null>(null)

  // Movies carousel state
  const [moviesIndex, setMoviesIndex] = useState(movieThumbnails.length)
  const [moviesTransitioning, setMoviesTransitioning] = useState(false)
  const moviesContainerRef = useRef<HTMLDivElement>(null)
  const moviesScrollRef = useRef<HTMLDivElement>(null)
  const [moviesDragging, setMoviesDragging] = useState(false)
  const [moviesStartX, setMoviesStartX] = useState(0)
  const [moviesScrollLeft, setMoviesScrollLeft] = useState(0)
  const [moviesAutoScrollPaused, setMoviesAutoScrollPaused] = useState(false)
  const [moviesHoveredIndex, setMoviesHoveredIndex] = useState<number | null>(null)

  // Responsive state
  const [visibleItems, setVisibleItems] = useState(6)
  const [itemWidth, setItemWidth] = useState(0)

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
      if (sportsScrollRef.current) {
        const containerWidth = sportsScrollRef.current.clientWidth
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
    if (sportsScrollRef.current) {
      sportsScrollRef.current.scrollLeft = sportsChannels.length * itemWidth
    }
    if (moviesScrollRef.current) {
      moviesScrollRef.current.scrollLeft = movieThumbnails.length * itemWidth
    }
  }, [itemWidth, sportsChannels.length, movieThumbnails.length])

  // Handle infinite loop for sports carousel
  const handleSportsInfiniteLoop = () => {
    if (!sportsScrollRef.current) return

    const totalWidth = sportsChannels.length * itemWidth

    if (sportsScrollRef.current.scrollLeft < itemWidth) {
      // If we're at the beginning of the first set, jump to the second set
      setSportsTransitioning(true)
      sportsScrollRef.current.style.scrollBehavior = "auto"
      sportsScrollRef.current.scrollLeft = totalWidth + sportsScrollRef.current.scrollLeft
      setSportsIndex(sportsIndex + sportsChannels.length)
      setTimeout(() => {
        sportsScrollRef.current!.style.scrollBehavior = "smooth"
        setSportsTransitioning(false)
      }, 10)
    } else if (sportsScrollRef.current.scrollLeft >= totalWidth * 2 - itemWidth) {
      // If we're at the end of the third set, jump to the second set
      setSportsTransitioning(true)
      sportsScrollRef.current.style.scrollBehavior = "auto"
      sportsScrollRef.current.scrollLeft = totalWidth + (sportsScrollRef.current.scrollLeft - totalWidth * 2)
      setSportsIndex(sportsIndex - sportsChannels.length)
      setTimeout(() => {
        sportsScrollRef.current!.style.scrollBehavior = "smooth"
        setSportsTransitioning(false)
      }, 10)
    }
  }

  // Handle infinite loop for movies carousel
  const handleMoviesInfiniteLoop = () => {
    if (!moviesScrollRef.current) return

    const totalWidth = movieThumbnails.length * itemWidth

    if (moviesScrollRef.current.scrollLeft < itemWidth) {
      // If we're at the beginning of the first set, jump to the second set
      setMoviesTransitioning(true)
      moviesScrollRef.current.style.scrollBehavior = "auto"
      moviesScrollRef.current.scrollLeft = totalWidth + moviesScrollRef.current.scrollLeft
      setMoviesIndex(moviesIndex + movieThumbnails.length)
      setTimeout(() => {
        moviesScrollRef.current!.style.scrollBehavior = "smooth"
        setMoviesTransitioning(false)
      }, 10)
    } else if (moviesScrollRef.current.scrollLeft >= totalWidth * 2 - itemWidth) {
      // If we're at the end of the third set, jump to the second set
      setMoviesTransitioning(true)
      moviesScrollRef.current.style.scrollBehavior = "auto"
      moviesScrollRef.current.scrollLeft = totalWidth + (moviesScrollRef.current.scrollLeft - totalWidth * 2)
      setMoviesIndex(moviesIndex - movieThumbnails.length)
      setTimeout(() => {
        moviesScrollRef.current!.style.scrollBehavior = "smooth"
        setMoviesTransitioning(false)
      }, 10)
    }
  }

  // Check for infinite loop conditions on scroll
  useEffect(() => {
    const sportsScrollElement = sportsScrollRef.current
    const moviesScrollElement = moviesScrollRef.current

    const handleSportsScroll = () => {
      if (!sportsDragging && !sportsTransitioning) {
        handleSportsInfiniteLoop()
      }
    }

    const handleMoviesScroll = () => {
      if (!moviesDragging && !moviesTransitioning) {
        handleMoviesInfiniteLoop()
      }
    }

    sportsScrollElement?.addEventListener("scroll", handleSportsScroll)
    moviesScrollElement?.addEventListener("scroll", handleMoviesScroll)

    return () => {
      sportsScrollElement?.removeEventListener("scroll", handleSportsScroll)
      moviesScrollElement?.removeEventListener("scroll", handleMoviesScroll)
    }
  }, [sportsDragging, sportsTransitioning, moviesDragging, moviesTransitioning, itemWidth])

  // Sports carousel navigation
  const prevSports = () => {
    if (sportsTransitioning || !sportsScrollRef.current) return
    setSportsTransitioning(true)

    const newIndex = sportsIndex - 1
    setSportsIndex(newIndex)

    const scrollAmount = newIndex * itemWidth
    sportsScrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })

    setTimeout(() => setSportsTransitioning(false), 300)
  }

  const nextSports = () => {
    if (sportsTransitioning || !sportsScrollRef.current) return
    setSportsTransitioning(true)

    const newIndex = sportsIndex + 1
    setSportsIndex(newIndex)

    const scrollAmount = newIndex * itemWidth
    sportsScrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })

    setTimeout(() => setSportsTransitioning(false), 300)
  }

  // Movies carousel navigation
  const prevMovies = () => {
    if (moviesTransitioning || !moviesScrollRef.current) return
    setMoviesTransitioning(true)

    const newIndex = moviesIndex - 1
    setMoviesIndex(newIndex)

    const scrollAmount = newIndex * itemWidth
    moviesScrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })

    setTimeout(() => setMoviesTransitioning(false), 300)
  }

  const nextMovies = () => {
    if (moviesTransitioning || !moviesScrollRef.current) return
    setMoviesTransitioning(true)

    const newIndex = moviesIndex + 1
    setMoviesIndex(newIndex)

    const scrollAmount = newIndex * itemWidth
    moviesScrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })

    setTimeout(() => setMoviesTransitioning(false), 300)
  }

  // Sports mouse drag handlers
  const handleSportsMouseDown = (e: React.MouseEvent) => {
    if (!sportsScrollRef.current) return
    setSportsDragging(true)
    setSportsStartX(e.pageX - sportsScrollRef.current.offsetLeft)
    setSportsScrollLeft(sportsScrollRef.current.scrollLeft)
    setSportsAutoScrollPaused(true)
  }

  const handleSportsMouseMove = (e: React.MouseEvent) => {
    if (!sportsDragging || !sportsScrollRef.current) return
    e.preventDefault()
    const x = e.pageX - sportsScrollRef.current.offsetLeft
    const walk = (x - sportsStartX) * 2 // Scroll speed multiplier
    sportsScrollRef.current.scrollLeft = sportsScrollLeft - walk

    // Update index based on scroll position
    if (itemWidth > 0) {
      const newIndex = Math.round(sportsScrollRef.current.scrollLeft / itemWidth)
      if (newIndex !== sportsIndex) {
        setSportsIndex(newIndex)
      }
    }
  }

  const handleSportsMouseUp = () => {
    setSportsDragging(false)
    // Resume auto-scroll after a delay
    setTimeout(() => setSportsAutoScrollPaused(false), 3000)
  }

  const handleSportsMouseLeave = () => {
    if (sportsDragging) {
      setSportsDragging(false)
      // Resume auto-scroll after a delay
      setTimeout(() => setSportsAutoScrollPaused(false), 3000)
    }
  }

  // Movies mouse drag handlers
  const handleMoviesMouseDown = (e: React.MouseEvent) => {
    if (!moviesScrollRef.current) return
    setMoviesDragging(true)
    setMoviesStartX(e.pageX - moviesScrollRef.current.offsetLeft)
    setMoviesScrollLeft(moviesScrollRef.current.scrollLeft)
    setMoviesAutoScrollPaused(true)
  }

  const handleMoviesMouseMove = (e: React.MouseEvent) => {
    if (!moviesDragging || !moviesScrollRef.current) return
    e.preventDefault()
    const x = e.pageX - moviesScrollRef.current.offsetLeft
    const walk = (x - moviesStartX) * 2 // Scroll speed multiplier
    moviesScrollRef.current.scrollLeft = moviesScrollLeft - walk

    // Update index based on scroll position
    if (itemWidth > 0) {
      const newIndex = Math.round(moviesScrollRef.current.scrollLeft / itemWidth)
      if (newIndex !== moviesIndex) {
        setMoviesIndex(newIndex)
      }
    }
  }

  const handleMoviesMouseUp = () => {
    setMoviesDragging(false)
    // Resume auto-scroll after a delay
    setTimeout(() => setMoviesAutoScrollPaused(false), 3000)
  }

  const handleMoviesMouseLeave = () => {
    if (moviesDragging) {
      setMoviesDragging(false)
      // Resume auto-scroll after a delay
      setTimeout(() => setMoviesAutoScrollPaused(false), 3000)
    }
  }

  // Handle wheel scrolling for sports
  const handleSportsWheel = (e: React.WheelEvent) => {
    if (!sportsScrollRef.current) return
    e.preventDefault()

    setSportsAutoScrollPaused(true)
    sportsScrollRef.current.scrollLeft += e.deltaY

    // Update index based on scroll position
    if (itemWidth > 0) {
      const newIndex = Math.round(sportsScrollRef.current.scrollLeft / itemWidth)
      if (newIndex !== sportsIndex) {
        setSportsIndex(newIndex)
      }
    }

    // Resume auto-scroll after a delay
    clearTimeout(Number(sportsScrollRef.current.dataset.wheelTimeout))
    const timeoutId = setTimeout(() => setSportsAutoScrollPaused(false), 3000)
    sportsScrollRef.current.dataset.wheelTimeout = timeoutId.toString()
  }

  // Handle wheel scrolling for movies
  const handleMoviesWheel = (e: React.WheelEvent) => {
    if (!moviesScrollRef.current) return
    e.preventDefault()

    setMoviesAutoScrollPaused(true)
    moviesScrollRef.current.scrollLeft += e.deltaY

    // Update index based on scroll position
    if (itemWidth > 0) {
      const newIndex = Math.round(moviesScrollRef.current.scrollLeft / itemWidth)
      if (newIndex !== moviesIndex) {
        setMoviesIndex(newIndex)
      }
    }

    // Resume auto-scroll after a delay
    clearTimeout(Number(moviesScrollRef.current.dataset.wheelTimeout))
    const timeoutId = setTimeout(() => setMoviesAutoScrollPaused(false), 3000)
    moviesScrollRef.current.dataset.wheelTimeout = timeoutId.toString()
  }

  // Auto-scroll effect
  useEffect(() => {
    let sportsInterval: NodeJS.Timeout | null = null
    let moviesInterval: NodeJS.Timeout | null = null

    if (!sportsAutoScrollPaused) {
      sportsInterval = setInterval(() => {
        nextSports()
      }, 5000)
    }

    if (!moviesAutoScrollPaused) {
      moviesInterval = setInterval(() => {
        nextMovies()
      }, 5000)
    }

    return () => {
      if (sportsInterval) clearInterval(sportsInterval)
      if (moviesInterval) clearInterval(moviesInterval)
    }
  }, [
    sportsIndex,
    sportsTransitioning,
    sportsAutoScrollPaused,
    moviesIndex,
    moviesTransitioning,
    moviesAutoScrollPaused,
  ])

  // Sports touch handlers
  const handleSportsTouchStart = (e: React.TouchEvent) => {
    if (!sportsScrollRef.current) return
    setSportsDragging(true)
    setSportsStartX(e.touches[0].pageX - sportsScrollRef.current.offsetLeft)
    setSportsScrollLeft(sportsScrollRef.current.scrollLeft)
    setSportsAutoScrollPaused(true)
  }

  const handleSportsTouchMove = (e: React.TouchEvent) => {
    if (!sportsDragging || !sportsScrollRef.current) return
    const x = e.touches[0].pageX - sportsScrollRef.current.offsetLeft
    const walk = (x - sportsStartX) * 2 // Scroll speed multiplier
    sportsScrollRef.current.scrollLeft = sportsScrollLeft - walk

    // Update index based on scroll position
    if (itemWidth > 0) {
      const newIndex = Math.round(sportsScrollRef.current.scrollLeft / itemWidth)
      if (newIndex !== sportsIndex) {
        setSportsIndex(newIndex)
      }
    }
  }

  const handleSportsTouchEnd = () => {
    setSportsDragging(false)
    // Resume auto-scroll after a delay
    setTimeout(() => setSportsAutoScrollPaused(false), 3000)
  }

  // Movies touch handlers
  const handleMoviesTouchStart = (e: React.TouchEvent) => {
    if (!moviesScrollRef.current) return
    setMoviesDragging(true)
    setMoviesStartX(e.touches[0].pageX - moviesScrollRef.current.offsetLeft)
    setMoviesScrollLeft(moviesScrollRef.current.scrollLeft)
    setMoviesAutoScrollPaused(true)
  }

  const handleMoviesTouchMove = (e: React.TouchEvent) => {
    if (!moviesDragging || !moviesScrollRef.current) return
    const x = e.touches[0].pageX - moviesScrollRef.current.offsetLeft
    const walk = (x - moviesStartX) * 2 // Scroll speed multiplier
    moviesScrollRef.current.scrollLeft = moviesScrollLeft - walk

    // Update index based on scroll position
    if (itemWidth > 0) {
      const newIndex = Math.round(moviesScrollRef.current.scrollLeft / itemWidth)
      if (newIndex !== moviesIndex) {
        setMoviesIndex(newIndex)
      }
    }
  }

  const handleMoviesTouchEnd = () => {
    setMoviesDragging(false)
    // Resume auto-scroll after a delay
    setTimeout(() => setMoviesAutoScrollPaused(false), 3000)
  }

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        {/* Sports Channels Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Tv2 className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-bold text-white text-center">Sportkanäle</h2>
          </div>

          <div className="relative">
            <div ref={sportsContainerRef} className="overflow-hidden" id="sports-carousel">
              <CarouselKeyboardNav
                onPrev={prevSports}
                onNext={nextSports}
                enabled={!sportsTransitioning}
                id="sports-carousel"
              />
              <div
                ref={sportsScrollRef}
                className={`flex overflow-x-auto scrollbar-hide ${sportsDragging ? "cursor-grabbing" : "cursor-grab"}`}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
                onMouseDown={handleSportsMouseDown}
                onMouseMove={handleSportsMouseMove}
                onMouseUp={handleSportsMouseUp}
                onMouseLeave={handleSportsMouseLeave}
                onWheel={handleSportsWheel}
                onTouchStart={handleSportsTouchStart}
                onTouchMove={handleSportsTouchMove}
                onTouchEnd={handleSportsTouchEnd}
              >
                {infiniteSportsChannels.map((channel, index) => {
                  const uniqueId = `sports-${channel.id}-${index}`
                  return (
                    <div
                      key={uniqueId}
                      className="flex-shrink-0"
                      style={{ width: `${100 / visibleItems}%`, padding: "0px 8px" }}
                      onMouseEnter={() => setSportsHoveredIndex(index)}
                      onMouseLeave={() => setSportsHoveredIndex(null)}
                    >
                      <div
                        className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                          sportsHoveredIndex === index ? "transform scale-105 shadow-xl" : ""
                        }`}
                      >
                        <div className="relative aspect-video">
                          <LazyImage
                            src={channel.src || "/placeholder.svg"}
                            alt={channel.alt}
                            className="w-full h-full"
                            objectFit="cover"
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
                          />

                          {/* Live badge */}
                          <div
                            className={`absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center transition-all duration-300 ${
                              sportsHoveredIndex === index ? "opacity-100" : "opacity-70"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse"></span>
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
              onClick={prevSports}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md hover:bg-white z-10 carousel-nav-button"
              aria-label="Vorherige Sportkanäle anzeigen"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSports}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md hover:bg-white z-10 carousel-nav-button"
              aria-label="Nächste Sportkanäle anzeigen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <CarouselProgress
              totalItems={sportsChannels.length}
              currentIndex={sportsIndex % sportsChannels.length}
              visibleItems={visibleItems}
              className="mt-4"
            />
          </div>
        </div>

        {/* Movies Carousel */}
        <div className="mt-16">
          <div className="flex items-center justify-center mb-8">
            <Film className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-bold text-white text-center">Filme & TV-Shows</h2>
          </div>

          <div className="relative">
            <div ref={moviesContainerRef} className="overflow-hidden" id="movies-carousel">
              <CarouselKeyboardNav
                onPrev={prevMovies}
                onNext={nextMovies}
                enabled={!moviesTransitioning}
                id="movies-carousel"
              />
              <div
                ref={moviesScrollRef}
                className={`flex overflow-x-auto scrollbar-hide ${moviesDragging ? "cursor-grabbing" : "cursor-grab"}`}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
                onMouseDown={handleMoviesMouseDown}
                onMouseMove={handleMoviesMouseMove}
                onMouseUp={handleMoviesMouseUp}
                onMouseLeave={handleMoviesMouseLeave}
                onWheel={handleMoviesWheel}
                onTouchStart={handleMoviesTouchStart}
                onTouchMove={handleMoviesTouchMove}
                onTouchEnd={handleMoviesTouchEnd}
              >
                {infiniteMovieThumbnails.map((movie, index) => {
                  const uniqueId = `movie-${movie.id}-${index}`
                  return (
                    <div
                      key={uniqueId}
                      className="flex-shrink-0"
                      style={{ width: `${100 / visibleItems}%`, padding: "0px 8px" }}
                      onMouseEnter={() => setMoviesHoveredIndex(index)}
                      onMouseLeave={() => setMoviesHoveredIndex(null)}
                    >
                      <div className="movie-card bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-lg h-full">
                        <div className="aspect-[2/3] relative">
                          <LazyImage
                            src={movie.src || "/placeholder.svg"}
                            alt={movie.alt}
                            className="w-full h-full"
                            objectFit="cover"
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
                          />

                          {/* Title overlay at the top, aligned with image */}
                          <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/70 to-transparent">
                            <h3 className="text-white font-bold truncate" style={{ fontSize: "0.85rem" }}>
                              {movie.title}
                            </h3>
                          </div>

                          {/* Overlay with movie info */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                            <div className="flex items-center justify-between mt-1">
                              <div className="flex items-center">
                                <span className="text-yellow-400 text-xs mr-1">★</span>
                                <span className="text-white text-xs">{movie.rating}</span>
                              </div>
                              <span className="text-white text-xs px-2 py-0.5 bg-red-600 rounded-sm">HD</span>
                            </div>
                          </div>

                          {/* Quality badge */}
                          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-sm">
                            HD
                          </div>

                          {/* Play button overlay that appears on hover */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              moviesHoveredIndex === index ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="white"
                                  className="w-6 h-6 ml-0.5"
                                  aria-hidden="true"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Remove the separate mobile title section since we now have the title at the top of the image */}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <button
              onClick={prevMovies}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md hover:bg-white z-10 carousel-nav-button"
              aria-label="Vorherige Filme anzeigen"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextMovies}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md hover:bg-white z-10 carousel-nav-button"
              aria-label="Nächste Filme anzeigen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <CarouselProgress
              totalItems={movieThumbnails.length}
              currentIndex={moviesIndex % movieThumbnails.length}
              visibleItems={visibleItems}
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
