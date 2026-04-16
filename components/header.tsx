"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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
            ref={buttonRef}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md p-1"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <div className="flex items-center">
              <span className="mr-1 text-sm font-medium">Menü</span>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        ref={dropdownRef}
        className={`md:hidden absolute w-full left-0 bg-gradient-to-b from-black to-gray-900 shadow-lg transition-all duration-300 overflow-hidden z-40 ${
          isMenuOpen ? "max-h-[400px] opacity-100 border-b border-gray-800" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col divide-y divide-gray-800">
            <MobileNavLink href="/our-channels" onClick={closeMenu}>
              Kanäle
            </MobileNavLink>
            <MobileNavLink href="/setup-guide" onClick={closeMenu}>
              Anleitung
            </MobileNavLink>
            <MobileNavLink href="/reseller-plane" onClick={closeMenu}>
              Reseller
            </MobileNavLink>
            <MobileNavLink href="/faq" onClick={closeMenu}>
              FAQ
            </MobileNavLink>
            <div className="py-4">
              <Link
                href="/contact-us"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-4 py-3 rounded-md transition-colors font-medium"
                onClick={closeMenu}
              >
                Kontakt
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

interface MobileNavLinkProps {
  href: string
  children: React.ReactNode
  onClick: () => void
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between py-4 text-white hover:text-red-400 transition-colors"
      onClick={onClick}
    >
      <span className="font-medium">{children}</span>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </Link>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
