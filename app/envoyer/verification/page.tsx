"use client"

import { Stepper } from "@/components/order/stepper"
import { Step5Verification } from "@/components/order/step-5-verification"

export default function VerificationPage() {
  return (
    <>
      <Stepper currentStep={5} />
      <Step5Verification />
    </>
  )
}
