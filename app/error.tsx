'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600 mb-4">Erreur</h1>
          <h2 className="text-2xl font-semibold text-text-dark mb-4">
            Une erreur s'est produite
          </h2>
          <p className="text-text-gray mb-8">
            Nous sommes désolés, quelque chose s'est mal passé.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Réessayer
            </button>
            <Link
              href="/"
              className="inline-block bg-gray-200 text-text-dark px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
