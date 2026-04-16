"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  priority?: boolean
  quality?: number
  sizes?: string
  style?: React.CSSProperties
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = "",
  objectFit = "cover",
  priority = false,
  quality = 90,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  style,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "200px", // Load images 200px before they come into view
        threshold: 0.1,
      },
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%", ...style }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 shimmer" style={{ zIndex: 1 }} aria-hidden="true"></div>
      )}

      {isInView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width || 500}
          height={height || 300}
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ objectFit }}
          onLoad={handleLoad}
          priority={priority}
          quality={quality}
          sizes={sizes}
        />
      )}
    </div>
  )
}
