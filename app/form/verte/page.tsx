"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FormVerte } from "@/components/forms/form-verte"

export default function VertePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FormVerte />
      </main>
      <Footer />
    </div>
  )
}
