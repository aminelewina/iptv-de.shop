"use client"

import { Stepper } from "@/components/order/stepper"
import { Step4CourrierWrite } from "@/components/order/step-4-courrier-write"

export default function RedigerPage() {
  return (
    <>
      <Stepper currentStep={4} />
      <Step4CourrierWrite />
    </>
  )
}
