"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Mail } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white py-3 px-4 md:px-8 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-semibold">
            <span className="text-brand-blue">Lettre</span>
            <span className="text-brand-orange">Rapide</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-text-dark hover:text-brand-blue transition-colors text-sm font-medium">
            Accueil
          </Link>
          <Link href="/envoyer" className="text-text-dark hover:text-brand-blue transition-colors text-sm font-medium">
            Envoyer
          </Link>
          <Link href="/tarifs" className="text-text-dark hover:text-brand-blue transition-colors text-sm font-medium">
            Tarifs
          </Link>
          <Link href="/suivi" className="text-text-dark hover:text-brand-blue transition-colors text-sm font-medium">
            Accéder au suivi
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-text-dark hover:text-brand-blue transition-colors text-sm font-medium">
              Accueil
            </Link>
            <Link href="/envoyer" className="text-text-dark hover:text-brand-blue transition-colors text-sm font-medium">
              Envoyer
            </Link>
            <Link href="/tarifs" className="text-text-dark hover:text-brand-blue transition-colors text-sm font-medium">
              Tarifs
            </Link>
            <Link href="/suivi" className="text-text-dark hover:text-brand-blue transition-colors text-sm font-medium">
              Accéder au suivi
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
