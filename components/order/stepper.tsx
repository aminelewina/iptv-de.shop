"use client"

interface Step {
  number: number
  label: string
}

const steps: Step[] = [
  { number: 1, label: "Affranchissement" },
  { number: 2, label: "Expéditeur" },
  { number: 3, label: "Destinaire" },
  { number: 4, label: "Importer / Rédiger" },
  { number: 5, label: "Vérifier / Régler" }
]

interface StepperProps {
  currentStep: number
}

export function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="bg-gray-50 py-4 px-4 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.number === currentStep
                      ? "bg-brand-blue text-white"
                      : step.number < currentStep
                        ? "bg-brand-blue text-white"
                        : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`hidden md:block text-sm ${
                    step.number === currentStep
                      ? "text-brand-blue font-medium"
                      : step.number < currentStep
                        ? "text-brand-blue"
                        : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`hidden md:block w-8 lg:w-16 h-px mx-2 ${
                    step.number < currentStep ? "bg-brand-blue" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
