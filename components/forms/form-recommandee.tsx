"use client"

import { DedicatedForm } from "./dedicated-form"

export function FormRecommandee() {
  return (
    <DedicatedForm
      mailType="recommandee"
      mailTypeLabel="recommandée"
      mailTypeColor="brand-orange"
      price="4,32"
      features={[
        "Distribution J + 3",
        "Preuve de dépôt",
        "Avec ou sans avis de réception"
      ]}
    />
  )
}
