/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable image optimization for Netlify - images are served as-is
  images: {
    unoptimized: true,
  },
}

export default nextConfig

