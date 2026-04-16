"use client"

import { useEffect } from "react"

interface CarouselKeyboardNavProps {
  onPrev: () => void
  onNext: () => void
  enabled: boolean
  id: string
}

export default function CarouselKeyboardNav({ onPrev, onNext, enabled, id }: CarouselKeyboardNavProps) {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if the carousel is focused or one of its children is focused
      const activeElement = document.activeElement
      const carouselElement = document.getElementById(id)

      if (!carouselElement || !activeElement) return

      const isCarouselFocused = carouselElement === activeElement || carouselElement.contains(activeElement)

      if (!isCarouselFocused) return

      if (e.key === "ArrowLeft") {
        e.preventDefault()
        onPrev()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        onNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.addEventListener("keydown", handleKeyDown)
    }
  }, [enabled, onPrev, onNext, id])

  return null
}
