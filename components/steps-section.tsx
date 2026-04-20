import { FileText, Upload, MapPin, Send } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Sélectionner le mode",
    subtitle: "d'expédition",
    number: "01"
  },
  {
    icon: Upload,
    title: "Importer ou rédiger",
    subtitle: "votre courrier",
    number: "02"
  },
  {
    icon: MapPin,
    title: "Renseigner l'adresse",
    subtitle: "de vos destinataires",
    number: "03"
  },
  {
    icon: Send,
    title: "Impression et envoi",
    subtitle: "de votre courrier",
    number: "04"
  }
]

export function StepsSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Expédiez votre courrier en ligne
            <span className="block text-brand-orange mt-2">en un clin d'œil !</span>
          </h2>
          <p className="text-base md:text-lg text-text-gray max-w-2xl mx-auto">
            Un processus simple et rapide en 4 étapes
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center group">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-blue to-brand-orange opacity-20" />
              )}
              
              {/* Icon container */}
              <div className="relative mb-6 w-32 h-32 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Step number background */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <step.icon className="w-12 h-12 text-brand-blue" />
              </div>
              
              {/* Text */}
              <h3 className="text-lg md:text-xl font-bold text-text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-text-gray">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
