"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type MailType = "recommandee" | "suivie" | "verte"

export interface SenderInfo {
  isProfessional: boolean
  firstName: string
  lastName: string
  email: string
  address: string
  addressComplement: string
  postalCode: string
  city: string
  country: string
}

export interface RecipientInfo {
  isProfessional: boolean
  firstName: string
  lastName: string
  address: string
  addressComplement: string
  postalCode: string
  city: string
  country: string
}

export interface LetterContent {
  type: "write" | "import" | null
  text: string
  location: string
  date: string
  attachments: File[]
  signature: string | null
  importedFile: File | null
}

export interface OrderOptions {
  colorPrinting: boolean
  acknowledgmentOfReceipt: boolean
}

export interface OrderState {
  mailType: MailType
  sender: SenderInfo
  recipient: RecipientInfo
  letter: LetterContent
  options: OrderOptions
  currentStep: number
}

const defaultSender: SenderInfo = {
  isProfessional: false,
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  addressComplement: "",
  postalCode: "",
  city: "",
  country: "FRANCE"
}

const defaultRecipient: RecipientInfo = {
  isProfessional: false,
  firstName: "",
  lastName: "",
  address: "",
  addressComplement: "",
  postalCode: "",
  city: "",
  country: ""
}

const defaultLetter: LetterContent = {
  type: null,
  text: "",
  location: "",
  date: new Date().toLocaleDateString("fr-FR"),
  attachments: [],
  signature: null,
  importedFile: null
}

const defaultOptions: OrderOptions = {
  colorPrinting: false,
  acknowledgmentOfReceipt: true
}

const defaultOrder: OrderState = {
  mailType: "recommandee",
  sender: defaultSender,
  recipient: defaultRecipient,
  letter: defaultLetter,
  options: defaultOptions,
  currentStep: 1
}

interface OrderContextType {
  order: OrderState
  setMailType: (type: MailType) => void
  setSender: (sender: Partial<SenderInfo>) => void
  setRecipient: (recipient: Partial<RecipientInfo>) => void
  setLetter: (letter: Partial<LetterContent>) => void
  setOptions: (options: Partial<OrderOptions>) => void
  setStep: (step: number) => void
  getPrice: () => { basePrice: number; printPrice: number; arPrice: number; totalBeforeDiscount: number; total: number }
  resetOrder: () => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<OrderState>(defaultOrder)

  const setMailType = (type: MailType) => {
    setOrder(prev => ({ ...prev, mailType: type }))
  }

  const setSender = (sender: Partial<SenderInfo>) => {
    setOrder(prev => ({ ...prev, sender: { ...prev.sender, ...sender } }))
  }

  const setRecipient = (recipient: Partial<RecipientInfo>) => {
    setOrder(prev => ({ ...prev, recipient: { ...prev.recipient, ...recipient } }))
  }

  const setLetter = (letter: Partial<LetterContent>) => {
    setOrder(prev => ({ ...prev, letter: { ...prev.letter, ...letter } }))
  }

  const setOptions = (options: Partial<OrderOptions>) => {
    setOrder(prev => ({ ...prev, options: { ...prev.options, ...options } }))
  }

  const setStep = (step: number) => {
    setOrder(prev => ({ ...prev, currentStep: step }))
  }

  const getPrice = () => {
    const basePrices: Record<MailType, number> = {
      recommandee: 3.18,
      suivie: 2.22,
      verte: 1.92
    }

    const basePrice = basePrices[order.mailType]
    const printPrice = order.options.colorPrinting ? 1.14 + 0.24 : 1.14
    const arPrice = order.options.acknowledgmentOfReceipt ? 0.90 : 0

    const totalBeforeDiscount = (basePrice + printPrice + arPrice) * 2
    // Promotional price: fixed at €2.35 for all mail types
    const total = 2.35

    return { basePrice, printPrice, arPrice, totalBeforeDiscount, total }
  }

  const resetOrder = () => {
    setOrder(defaultOrder)
  }

  return (
    <OrderContext.Provider value={{
      order,
      setMailType,
      setSender,
      setRecipient,
      setLetter,
      setOptions,
      setStep,
      getPrice,
      resetOrder
    }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider")
  }
  return context
}
