"use client"

import { DedicatedForm } from "./dedicated-form"

export function FormVerte() {
  return (
    <DedicatedForm
      mailType="verte"
      mailTypeLabel="verte"
      mailTypeColor="green-600"
      price="1,92"
      features={[
        "Distribution J + 3"
      ]}
    />
  )
}
