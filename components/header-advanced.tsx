"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

type MenuItem = {
  label: string
  href: string
  children?: MenuItem[]
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const menuItems: MenuItem[] = [
    { label: "Kanäle", href: "/our-channels" },
    {
      label: "Anleitungen",
      href: "/setup-guide",
      children: [
        { label: "Smart TV", href: "/setup-guide#smart-tvs" },
        { label: "Android", href: "/setup-guide#android-tv" },
        { label: "Fire TV", href: "/setup-guide#fire-tv" },
        { label: "iOS", href: "/setup-guide#ios" },
      ],
    },
    { label: "Reseller", href: "/reseller-plane" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/contact-us" },
  ]

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
    setExpandedItems([])
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setExpandedItems([])
  }

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const isExpanded = (label: string) => expandedItems.includes(label)

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
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.label === "Kontakt" ? (
                  <Link
                    href={item.href}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors text-sm uppercase tracking-wide font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="text-white hover:text-red-400 transition-colors text-sm uppercase tracking-wide font-medium flex items-center"
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {item.children && (
                      <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 origin-top transition-all duration-200">
                        <div className="py-1">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
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
          isMenuOpen ? "max-h-[80vh] opacity-100 border-b border-gray-800" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col divide-y divide-gray-800">
            {menuItems.map((item, index) => (
              <div key={index} className="py-3">
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-white hover:text-red-400 transition-colors"
                      onClick={() => toggleExpanded(item.label)}
                      aria-expanded={isExpanded(item.label)}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                          isExpanded(item.label) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded(item.label) ? "max-h-60 mt-2" : "max-h-0"
                      }`}
                    >
                      <div className="pl-4 border-l border-gray-700 ml-2 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.href}
                            className="block py-2 text-gray-300 hover:text-white transition-colors"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item.label === "Kontakt" ? (
                  <Link
                    href={item.href}
                    className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-4 py-3 rounded-md transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-white hover:text-red-400 transition-colors"
                    onClick={closeMenu}
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
