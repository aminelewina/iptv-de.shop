"use client"

import { Stepper } from "@/components/order/stepper"
import { Step4CourrierImport } from "@/components/order/step-4-courrier-import"

export default function ImporterPage() {
  return (
    <>
      <Stepper currentStep={4} />
      <Step4CourrierImport />
    </>
  )
}
