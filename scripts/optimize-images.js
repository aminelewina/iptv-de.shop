/**
 * Image Optimization Script
 *
 * This script can be run as part of the build process to optimize all images
 * in the public directory. It uses sharp to resize, compress, and convert images
 * to modern formats like WebP.
 *
 * Usage: node scripts/optimize-images.js
 */

const fs = require("fs").promises
const path = require("path")
const sharp = require("sharp")
const glob = require("glob")

// Configuration
const config = {
  inputDir: "public",
  outputDir: "public/optimized",
  formats: ["webp", "avif"],
  sizes: [640, 750, 1080, 1920],
  quality: 80,
  // Skip SVG files and already optimized images
  skipPatterns: [".svg", ".webp", ".avif", "optimized/"],
}

// Create output directory if it doesn't exist
async function ensureOutputDir() {
  try {
    await fs.mkdir(config.outputDir, { recursive: true })
    console.log(`Created output directory: ${config.outputDir}`)
  } catch (err) {
    console.error("Error creating output directory:", err)
  }
}

// Get all image files
function getImageFiles() {
  return new Promise((resolve, reject) => {
    glob(`${config.inputDir}/**/*.{jpg,jpeg,png,gif}`, (err, files) => {
      if (err) {
        reject(err)
        return
      }

      // Filter out files that match skip patterns
      const filteredFiles = files.filter((file) => {
        return !config.skipPatterns.some((pattern) => file.includes(pattern))
      })

      resolve(filteredFiles)
    })
  })
}

// Optimize a single image
async function optimizeImage(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath))
  const image = sharp(inputPath)
  const metadata = await image.metadata()

  // Process each format
  for (const format of config.formats) {
    // Process each size
    for (const size of config.sizes) {
      // Skip if target size is larger than original
      if (size > metadata.width) continue

      const outputFilename = `${filename}-${size}.${format}`
      const outputPath = path.join(config.outputDir, outputFilename)

      try {
        await image.resize(size)[format]({ quality: config.quality }).toFile(outputPath)

        console.log(`Created: ${outputPath}`)
      } catch (err) {
        console.error(`Error processing ${inputPath} to ${outputPath}:`, err)
      }
    }
  }
}

// Main function
async function main() {
  try {
    await ensureOutputDir()
    const imageFiles = await getImageFiles()

    console.log(`Found ${imageFiles.length} images to optimize`)

    // Process all images in parallel with a concurrency limit
    const concurrencyLimit = 5
    for (let i = 0; i < imageFiles.length; i += concurrencyLimit) {
      const batch = imageFiles.slice(i, i + concurrencyLimit)
      await Promise.all(batch.map((file) => optimizeImage(file)))
    }

    console.log("Image optimization complete!")
  } catch (err) {
    console.error("Error in optimization process:", err)
    process.exit(1)
  }
}

// Run the script
main()
