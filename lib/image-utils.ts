/**
 * Utility functions for image optimization
 */

/**
 * Generates a responsive image URL with appropriate size and format parameters
 * @param src Original image URL
 * @param width Desired width
 * @param quality Image quality (1-100)
 * @param format Image format (webp, jpeg, png)
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  src: string,
  width?: number,
  quality = 80,
  format: "webp" | "jpeg" | "png" = "webp",
): string {
  // Don't process data URLs, SVGs, or already optimized images
  if (!src || src.startsWith("data:") || src.endsWith(".svg") || src.includes("?format=")) {
    return src
  }

  // Build query parameters
  const params = new URLSearchParams()

  if (width) {
    params.append("width", width.toString())
  }

  params.append("quality", quality.toString())
  params.append("format", format)

  // If the URL already has query parameters, append our new ones
  if (src.includes("?")) {
    return `${src}&${params.toString()}`
  }

  // Otherwise, add a new query string
  return `${src}?${params.toString()}`
}

/**
 * Generates a low-quality image placeholder for blur-up effect
 * @param src Original image URL
 * @returns Base64 encoded tiny image
 */
export async function generateBlurPlaceholder(src: string): Promise<string> {
  try {
    // This would typically be done server-side or at build time
    // For client-side, we'd need a service that can generate these
    // This is a placeholder implementation
    return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
  } catch (error) {
    console.error("Error generating blur placeholder:", error)
    return ""
  }
}

/**
 * Checks if the browser supports WebP format
 * @returns Promise resolving to boolean indicating WebP support
 */
export async function supportsWebP(): Promise<boolean> {
  try {
    const webpData = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
    const blob = await fetch(webpData).then((r) => r.blob())
    return blob.type === "image/webp"
  } catch (e) {
    return false
  }
}
