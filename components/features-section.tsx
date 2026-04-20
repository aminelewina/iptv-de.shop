import { Banknote, Shield, MousePointerClick, Leaf, Zap } from "lucide-react"

const features = [
  {
    icon: Banknote,
    title: "Économique",
    description: "L'envoi de courrier peut vite devenir coûteux, surtout en cas de volume important. C'est pourquoi lettrerapide.online vous propose une solution optimisée incluant jusqu'à **50% de réduction** sur vos envois*, grâce à notre Service Éco activé avec votre commande. Profitez de **l'envoi illimité de courriers** à tarifs préférentiels dès aujourd'hui.",
    color: "text-brand-orange",
    bgColor: "bg-orange-50"
  },
  {
    icon: Shield,
    title: "Confidentialité",
    description: "Nous assurons une **gestion rigoureuse et sécurisée** de l'impression et de la mise sous pli. Votre courrier est traité avec la **plus grande discrétion**, par nos équipes spécialisées.",
    color: "text-brand-blue",
    bgColor: "bg-blue-50"
  },
  {
    icon: MousePointerClick,
    title: "Simplicité",
    description: "Envoyez votre courrier recommandé **en quelques clics**, où que vous soyez. Nous nous chargeons du traitement ; La Poste assure la distribution à votre destinataire.",
    color: "text-brand-blue",
    bgColor: "bg-blue-50"
  },
  {
    icon: Leaf,
    title: "Écologique",
    description: "Faites un geste pour la planète : **évitez les déplacements**, réduisez votre empreinte carbone tout en économisant du temps.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Zap,
    title: "Rapidité",
    description: "Gagnez en efficacité avec notre service en ligne. Un traitement **rapide, fluide et sans contrainte**, sans compromis sur la qualité.",
    color: "text-brand-orange",
    bgColor: "bg-orange-50"
  }
]

function parseDescription(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Pourquoi choisir
            <span className="block text-brand-blue mt-2">lettrerapide.online ?</span>
          </h2>
          <p className="text-base md:text-lg text-text-gray max-w-2xl mx-auto">
            Une offre Éco exclusive pour un service rapide, sécurisé et économique
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed">
                {parseDescription(feature.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
