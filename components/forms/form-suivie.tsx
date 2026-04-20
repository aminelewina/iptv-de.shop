"use client"

import { DedicatedForm } from "./dedicated-form"

export function FormSuivie() {
  return (
    <DedicatedForm
      mailType="suivie"
      mailTypeLabel="suivie"
      mailTypeColor="brand-blue"
      price="2,22"
      features={[
        "Distribution J + 3",
        "Suivi de votre courrier"
      ]}
    />
  )
}
