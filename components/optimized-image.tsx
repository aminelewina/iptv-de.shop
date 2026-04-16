"use client"

import { useMemo } from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  className?: string
  quality?: number
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  fill?: boolean
  onLoad?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  className = "",
  quality = 80,
  objectFit = "cover",
  placeholder = "empty",
  blurDataURL,
  fill = false,
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  // Generate a blur data URL for images without one
  const generatedBlurDataURL = !blurDataURL
    ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
    : blurDataURL

  // Detect WebP support
  const [supportsWebP, setSupportsWebP] = useState(false)
  useEffect(() => {
    const checkWebPSupport = async () => {
      try {
        const webpData = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
        const blob = await fetch(webpData).then((r) => r.blob())
        setSupportsWebP(blob.type === "image/webp")
      } catch (e) {
        setSupportsWebP(false)
      }
    }
    checkWebPSupport()
  }, [])

  // Convert image URL to WebP if supported
  const optimizedSrc = useMemo(() => {
    if (!supportsWebP || !src || src.startsWith("data:") || src.endsWith(".svg")) {
      return src
    }

    // If the URL already has a query string, append the format parameter
    if (src.includes("?")) {
      return `${src}&format=webp`
    }

    // Otherwise, add a new query string with the format parameter
    return `${src}?format=webp`
  }, [src, supportsWebP])

  // Intersection Observer for lazy loading
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
    if (onLoad) onLoad()
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={
        fill
          ? { width: "100%", height: "100%" }
          : { width: width ? `${width}px` : "100%", height: height ? `${height}px` : "auto" }
      }
    >
      {!isLoaded && placeholder === "blur" && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" style={{ zIndex: 1 }} aria-hidden="true"></div>
      )}

      {isInView && (
        <Image
          src={optimizedSrc || "/placeholder.svg"}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          sizes={sizes}
          quality={quality}
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ objectFit }}
          onLoad={handleLoad}
          priority={priority}
          placeholder={placeholder === "blur" ? "blur" : "empty"}
          blurDataURL={placeholder === "blur" ? generatedBlurDataURL : undefined}
          fill={fill}
        />
      )}
    </div>
  )
}
