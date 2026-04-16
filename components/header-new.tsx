"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm py-2 shadow-lg" : "bg-black py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div
                className={`bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg transition-all duration-300 ${
                  isScrolled ? "px-2 py-1" : "px-3 py-1.5"
                }`}
              >
                <span className="text-white font-bold text-xl">UP</span>
              </div>
              <div className="ml-1.5">
                <span className="text-white font-bold text-xl">IPTV</span>
                <span className="block text-[8px] text-gray-400 -mt-1 tracking-wider">PREMIUM STREAMING</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/our-channels"
              className="text-white hover:text-red-400 transition-colors text-sm uppercase tracking-wide font-medium"
            >
              Kanäle
            </Link>
            <Link
              href="/setup-guide"
              className="text-white hover:text-red-400 transition-colors text-sm uppercase tracking-wide font-medium"
            >
              Anleitung
            </Link>
            <Link
              href="/reseller-plane"
              className="text-white hover:text-red-400 transition-colors text-sm uppercase tracking-wide font-medium"
            >
              Reseller
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-red-400 transition-colors text-sm uppercase tracking-wide font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/contact-us"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors text-sm uppercase tracking-wide font-medium"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 pt-20 transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-6 items-center">
          <Link
            href="/our-channels"
            className="text-white hover:text-red-400 transition-colors text-lg font-medium w-full text-center py-3 border-b border-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kanäle
          </Link>
          <Link
            href="/setup-guide"
            className="text-white hover:text-red-400 transition-colors text-lg font-medium w-full text-center py-3 border-b border-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Anleitung
          </Link>
          <Link
            href="/reseller-plane"
            className="text-white hover:text-red-400 transition-colors text-lg font-medium w-full text-center py-3 border-b border-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reseller
          </Link>
          <Link
            href="/faq"
            className="text-white hover:text-red-400 transition-colors text-lg font-medium w-full text-center py-3 border-b border-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact-us"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium w-full text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  )
}
