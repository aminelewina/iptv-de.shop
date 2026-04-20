"use client"

import { Stepper } from "@/components/order/stepper"
import { Step3Destinataire } from "@/components/order/step-3-destinataire"

export default function DestinatairePage() {
  return (
    <>
      <Stepper currentStep={3} />
      <Step3Destinataire />
    </>
  )
}
