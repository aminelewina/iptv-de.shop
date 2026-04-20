"use client"

import { Stepper } from "@/components/order/stepper"
import { Step2Expediteur } from "@/components/order/step-2-expediteur"

export default function ExpediteurPage() {
  return (
    <>
      <Stepper currentStep={2} />
      <Step2Expediteur />
    </>
  )
}
