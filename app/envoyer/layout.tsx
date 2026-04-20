import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TopBar } from "@/components/order/top-bar"
import { OrderProvider } from "@/lib/order-context"

export default function EnvoyerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <OrderProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </OrderProvider>
  )
}
