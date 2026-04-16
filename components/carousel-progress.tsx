"use client"

interface CarouselProgressProps {
  totalItems: number
  currentIndex: number
  visibleItems: number
  className?: string
}

export default function CarouselProgress({
  totalItems,
  currentIndex,
  visibleItems,
  className = "",
}: CarouselProgressProps) {
  // Calculate the number of pages
  const totalPages = Math.ceil(totalItems / visibleItems)

  // Calculate current page (0-based index)
  const currentPage = Math.floor(currentIndex / visibleItems) % totalPages

  return (
    <div className={`flex justify-center items-center space-x-1 mt-4 ${className}`}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === currentPage ? "w-6 bg-white" : "w-2 bg-gray-600 hover:bg-gray-500"
          }`}
          aria-label={`Page ${index + 1} of ${totalPages}`}
          role="button"
          tabIndex={0}
        ></div>
      ))}
    </div>
  )
}
