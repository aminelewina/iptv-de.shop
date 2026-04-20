"use client"

import { Stepper } from "@/components/order/stepper"
import { Step4CourrierChoice } from "@/components/order/step-4-courrier-choice"

export default function CourrierPage() {
  return (
    <>
      <Stepper currentStep={4} />
      <Step4CourrierChoice />
    </>
  )
}
