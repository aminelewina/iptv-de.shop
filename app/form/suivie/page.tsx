"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FormSuivie } from "@/components/forms/form-suivie"

export default function SuiviePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FormSuivie />
      </main>
      <Footer />
    </div>
  )
}
