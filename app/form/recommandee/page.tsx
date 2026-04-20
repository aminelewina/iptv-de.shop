"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FormRecommandee } from "@/components/forms/form-recommandee"

export default function RecommandePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FormRecommandee />
      </main>
      <Footer />
    </div>
  )
}
