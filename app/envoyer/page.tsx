"use client"

import { Suspense } from "react"
import { Stepper } from "@/components/order/stepper"
import { Step1Affranchissement } from "@/components/order/step-1-affranchissement"

export default function EnvoyerPage() {
  return (
    <>
      <Stepper currentStep={1} />
      <Suspense fallback={<div className="py-8 px-4 text-center">Chargement...</div>}>
        <Step1Affranchissement />
      </Suspense>
    </>
  )
}
