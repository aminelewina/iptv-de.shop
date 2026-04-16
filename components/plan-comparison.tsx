"use client"

import { Check, X } from "lucide-react"
import Link from "next/link"

interface PlanComparisonProps {
  currentPlan: "3" | "6" | "12"
}

export default function PlanComparison({ currentPlan }: PlanComparisonProps) {
  const plans = [
    {
      duration: "3",
      name: "3-Monats Abo",
      price: "39.99",
      pricePerMonth: "13.33",
      link: "/subscription/3-months",
      features: {
        channels: "97.000+ Kanäle",
        vod: "182.000+ Filme & Serien",
        quality: "HD & Ultra-HD",
        devices: "2 Geräte gleichzeitig",
        support: "Standard Support",
        updates: "Regelmäßige Updates",
        vip: false,
      },
    },
    {
      duration: "6",
      name: "6-Monats Abo",
      price: "69.99",
      pricePerMonth: "11.67",
      savings: "12.5%",
      link: "/subscription/6-months",
      features: {
        channels: "97.000+ Kanäle",
        vod: "182.000+ Filme & Serien",
        quality: "HD & Ultra-HD",
        devices: "2 Geräte gleichzeitig",
        support: "Premium Support",
        updates: "Regelmäßige Updates",
        vip: false,
      },
    },
    {
      duration: "12",
      name: "12-Monats Abo",
      price: "119.99",
      pricePerMonth: "10.00",
      savings: "25%",
      link: "/subscription/12-months",
      features: {
        channels: "97.000+ Kanäle",
        vod: "182.000+ Filme & Serien",
        quality: "HD & Ultra-HD",
        devices: "2 Geräte gleichzeitig",
        support: "VIP Support",
        updates: "Priorisierte Updates",
        vip: true,
      },
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left bg-gray-900 text-white">Funktionen</th>
            {plans.map((plan) => (
              <th
                key={plan.duration}
                className={`p-4 text-center ${
                  plan.duration === currentPlan ? "bg-red-600 text-white" : "bg-gray-800 text-white"
                }`}
              >
                <div className="font-bold text-lg">{plan.name}</div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">{plan.price}€</span>
                </div>
                <div className="text-sm opacity-80">{plan.pricePerMonth}€ / Monat</div>
                {plan.savings && (
                  <div className="mt-1 text-sm bg-yellow-500 text-black rounded-full px-2 py-0.5 inline-block">
                    Spare {plan.savings}
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-gray-700 bg-gray-900 text-white">Kanäle</td>
            {plans.map((plan) => (
              <td
                key={`${plan.duration}-channels`}
                className={`p-4 text-center border-b border-gray-700 ${
                  plan.duration === currentPlan ? "bg-red-900/30" : "bg-gray-800/50"
                } text-white`}
              >
                {plan.features.channels}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700 bg-gray-900 text-white">Filme & Serien</td>
            {plans.map((plan) => (
              <td
                key={`${plan.duration}-vod`}
                className={`p-4 text-center border-b border-gray-700 ${
                  plan.duration === currentPlan ? "bg-red-900/30" : "bg-gray-800/50"
                } text-white`}
              >
                {plan.features.vod}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700 bg-gray-900 text-white">Bildqualität</td>
            {plans.map((plan) => (
              <td
                key={`${plan.duration}-quality`}
                className={`p-4 text-center border-b border-gray-700 ${
                  plan.duration === currentPlan ? "bg-red-900/30" : "bg-gray-800/50"
                } text-white`}
              >
                {plan.features.quality}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700 bg-gray-900 text-white">Gleichzeitige Geräte</td>
            {plans.map((plan) => (
              <td
                key={`${plan.duration}-devices`}
                className={`p-4 text-center border-b border-gray-700 ${
                  plan.duration === currentPlan ? "bg-red-900/30" : "bg-gray-800/50"
                } text-white`}
              >
                {plan.features.devices}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700 bg-gray-900 text-white">Kundensupport</td>
            {plans.map((plan) => (
              <td
                key={`${plan.duration}-support`}
                className={`p-4 text-center border-b border-gray-700 ${
                  plan.duration === currentPlan ? "bg-red-900/30" : "bg-gray-800/50"
                } text-white`}
              >
                {plan.features.support}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700 bg-gray-900 text-white">Updates</td>
            {plans.map((plan) => (
              <td
                key={`${plan.duration}-updates`}
                className={`p-4 text-center border-b border-gray-700 ${
                  plan.duration === currentPlan ? "bg-red-900/30" : "bg-gray-800/50"
                } text-white`}
              >
                {plan.features.updates}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700 bg-gray-900 text-white">VIP-Status</td>
            {plans.map((plan) => (
              <td
                key={`${plan.duration}-vip`}
                className={`p-4 text-center border-b border-gray-700 ${
                  plan.duration === currentPlan ? "bg-red-900/30" : "bg-gray-800/50"
                } text-white`}
              >
                {plan.features.vip ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 bg-gray-900 text-white"></td>
            {plans.map((plan) => (
              <td
                key={`${plan.duration}-action`}
                className={`p-4 text-center ${
                  plan.duration === currentPlan ? "bg-red-900/30" : "bg-gray-800/50"
                } text-white`}
              >
                {plan.duration === currentPlan ? (
                  <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-md font-medium">
                    Aktuell ausgewählt
                  </span>
                ) : (
                  <Link
                    href={plan.link}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Plan anzeigen
                  </Link>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
