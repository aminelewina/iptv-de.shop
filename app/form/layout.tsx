import { OrderProvider } from "@/lib/order-context"

export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <OrderProvider>{children}</OrderProvider>
}
