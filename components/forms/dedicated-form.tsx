"use client"

import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check, Upload, RotateCcw, ChevronRight } from "lucide-react"
import Link from "next/link"

interface FormData {
  // Sender
  senderIsProfessional: boolean
  senderFirstName: string
  senderLastName: string
  senderEmail: string
  senderPhone: string
  senderAddress: string
  senderAddressComplement: string
  senderPostalCode: string
  senderCity: string
  senderCountry: string
  
  // Recipient
  recipientIsProfessional: boolean
  recipientFirstName: string
  recipientLastName: string
  recipientAddress: string
  recipientAddressComplement: string
  recipientPostalCode: string
  recipientCity: string
  recipientCountry: string
  
  // Letter
  letterText: string
  letterLocation: string
  letterDate: string
  letterSignature: string | null
  letterAttachments: File[]
  
  // Options
  colorPrinting: boolean
  acknowledgmentOfReceipt: boolean
}

interface DedicatedFormProps {
  mailType: "recommandee" | "suivie" | "verte"
  mailTypeLabel: string
  mailTypeColor: string
  price: string
  features: string[]
}

export function DedicatedForm({ mailType, mailTypeLabel, mailTypeColor, price, features }: DedicatedFormProps) {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [isDrawing, setIsDrawing] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [senderCountrySearch, setSenderCountrySearch] = useState("")
  const [recipientCountrySearch, setRecipientCountrySearch] = useState("")
  const [showSenderCountries, setShowSenderCountries] = useState(false)
  const [showRecipientCountries, setShowRecipientCountries] = useState(false)
  
  // Countries list
  const countries = [
    "FRANCE", "AFGHANISTAN", "ALBANIA", "ANTARCTICA", "ALGERIA", "AMERICAN SAMOA", "ANDORRA", "ANGOLA", 
    "ANTIGUA AND BARBUDA", "AZERBAIJAN", "ARGENTINA", "AUSTRALIA", "AUSTRIA", "BAHAMAS", "BAHRAIN", 
    "BANGLADESH", "ARMENIA", "BARBADOS", "BELGIUM", "BERMUDA", "BHUTAN", "BOLIVIA", "BOSNIA AND HERZEGOVINA", 
    "BOTSWANA", "BOUVET ISLAND", "BRAZIL", "BELIZE", "BRITISH INDIAN OCEAN TERRITORY", "SOLOMON ISLANDS", 
    "BRITISH VIRGIN ISLANDS", "BRUNEI DARUSSALAM", "BULGARIA", "MYANMAR", "BURUNDI", "BELARUS", "CAMBODIA", 
    "CAMEROON", "CANADA", "CAPE VERDE", "CAYMAN ISLANDS", "CENTRAL AFRICAN", "SRI LANKA", "CHAD", "CHILE", 
    "CHINA", "TAIWAN", "CHRISTMAS ISLAND", "COCOS (KEELING) ISLANDS", "COLOMBIA", "COMOROS", "MAYOTTE", 
    "REPUBLIC OF THE CONGO", "THE DEMOCRATIC REPUBLIC OF THE CONGO", "COOK ISLANDS", "COSTA RICA", "CROATIA", 
    "CUBA", "CYPRUS", "CZECH REPUBLIC", "BENIN", "DENMARK", "DOMINICA", "DOMINICAN REPUBLIC", "ECUADOR", 
    "EL SALVADOR", "EQUATORIAL GUINEA", "ETHIOPIA", "ERITREA", "ESTONIA", "FAROE ISLANDS", "FALKLAND ISLANDS", 
    "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS", "FIJI", "FINLAND", "ÅLAND ISLANDS", "FRENCH GUIANA", 
    "FRENCH POLYNESIA", "FRENCH SOUTHERN TERRITORIES", "DJIBOUTI", "GABON", "GEORGIA", "GAMBIA", 
    "OCCUPIED PALESTINIAN TERRITORY", "GERMANY", "GHANA", "GIBRALTAR", "KIRIBATI", "GREECE", "GREENLAND", 
    "GRENADA", "GUADELOUPE", "GUAM", "GUATEMALA", "GUINEA", "GUYANA", "HAITI", "HEARD ISLAND AND MCDONALD ISLANDS", 
    "VATICAN CITY STATE", "HONDURAS", "HONG KONG", "HUNGARY", "ICELAND", "INDIA", "INDONESIA", 
    "ISLAMIC REPUBLIC OF IRAN", "IRAQ", "IRELAND", "ISRAEL", "ITALY", "CÔTE D'IVOIRE", "JAMAICA", "JAPAN", 
    "KAZAKHSTAN", "JORDAN", "KENYA", "DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA", "REPUBLIC OF KOREA", "KUWAIT", 
    "KYRGYZSTAN", "LAO PEOPLE'S DEMOCRATIC REPUBLIC", "LEBANON", "LESOTHO", "LATVIA", "LIBERIA", 
    "LIBYAN ARAB JAMAHIRIYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MACAO", "MADAGASCAR", "MALAWI", 
    "MALAYSIA", "MALDIVES", "MALI", "MALTA", "MARTINIQUE", "MAURITANIA", "MAURITIUS", "MEXICO", "MONGOLIA", 
    "REPUBLIC OF MOLDOVA", "MONTSERRAT", "MOROCCO", "MOZAMBIQUE", "OMAN", "NAMIBIA", "NAURU", "NEPAL", 
    "NETHERLANDS", "NETHERLANDS ANTILLES", "ARUBA", "NEW CALEDONIA", "VANUATU", "NEW ZEALAND", "NICARAGUA", 
    "NIGER", "NIGERIA", "NIUE", "NORFOLK ISLAND", "NORWAY", "NORTHERN MARIANA ISLANDS", 
    "UNITED STATES MINOR OUTLYING ISLANDS", "FEDERATED STATES OF MICRONESIA", "MARSHALL ISLANDS", "PALAU", 
    "PAKISTAN", "PANAMA", "PAPUA NEW GUINEA", "PARAGUAY", "PERU", "PHILIPPINES", "PITCAIRN", "POLAND", 
    "PORTUGAL", "GUINEA-BISSAU", "TIMOR-LESTE", "PUERTO RICO", "QATAR", "RÉUNION", "ROMANIA", 
    "RUSSIAN FEDERATION", "RWANDA", "SAINT HELENA", "SAINT KITTS AND NEVIS", "ANGUILLA", "SAINT LUCIA", 
    "SAINT-PIERRE AND MIQUELON", "SAINT VINCENT AND THE GRENADINES", "SAN MARINO", "SAO TOME AND PRINCIPE", 
    "SAUDI ARABIA", "SENEGAL", "SEYCHELLES", "SIERRA LEONE", "SINGAPORE", "SLOVAKIA", "VIETNAM", "SLOVENIA", 
    "SOMALIA", "SOUTH AFRICA", "ZIMBABWE", "SPAIN", "WESTERN SAHARA", "SUDAN", "SURINAME", 
    "SVALBARD AND JAN MAYEN", "SWAZILAND", "SWEDEN", "SWITZERLAND", "SYRIAN ARAB REPUBLIC", "TAJIKISTAN", 
    "THAILAND", "TOGO", "TOKELAU", "TONGA", "TRINIDAD AND TOBAGO", "UNITED ARAB EMIRATES", "TUNISIA", 
    "TURKEY", "TURKMENISTAN", "TURKS AND CAICOS ISLANDS", "TUVALU", "UGANDA", "UKRAINE", 
    "THE FORMER YUGOSLAV REPUBLIC OF MACEDONIA", "EGYPT", "UNITED KINGDOM", "ISLE OF MAN", 
    "UNITED REPUBLIC OF TANZANIA", "UNITED STATES", "U.S. VIRGIN ISLANDS", "BURKINA FASO", "URUGUAY", 
    "UZBEKISTAN", "VENEZUELA", "WALLIS AND FUTUNA", "SAMOA", "YEMEN", "SERBIA AND MONTENEGRO", "ZAMBIA"
  ]
  
  const filteredSenderCountries = countries.filter(country => 
    country.toLowerCase().includes(senderCountrySearch.toLowerCase())
  )
  
  const filteredRecipientCountries = countries.filter(country => 
    country.toLowerCase().includes(recipientCountrySearch.toLowerCase())
  )
  
  // Color classes based on mail type
  const getColorClass = (type: 'bg' | 'text' | 'border' | 'ring') => {
    const classes = {
      recommandee: {
        bg: 'bg-brand-orange',
        text: 'text-brand-orange',
        border: 'border-brand-orange',
        ring: 'ring-brand-orange'
      },
      suivie: {
        bg: 'bg-brand-blue',
        text: 'text-brand-blue',
        border: 'border-brand-blue',
        ring: 'ring-brand-blue'
      },
      verte: {
        bg: 'bg-green-600',
        text: 'text-green-600',
        border: 'border-green-600',
        ring: 'ring-green-600'
      }
    }
    return classes[mailType][type]
  }
  
  const inputClassName = (hasError: boolean) => 
    `w-full border-2 rounded-xl px-4 py-3 sm:py-3.5 text-text-dark text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-4 ${getColorClass('ring')} focus:ring-opacity-10 transition-all duration-200 ${
      hasError ? "border-red-500 bg-red-50/50" : "border-gray-200 hover:border-gray-300 focus:border-gray-400"
    }`
  
  const textareaClassName = (hasError: boolean) => 
    `w-full h-48 sm:h-64 border-2 rounded-xl px-4 py-3 sm:py-3.5 text-text-dark text-sm sm:text-base placeholder:text-gray-400 resize-none focus:outline-none focus:ring-4 ${getColorClass('ring')} focus:ring-opacity-10 transition-all duration-200 ${
      hasError ? "border-red-500 bg-red-50/50" : "border-gray-200 hover:border-gray-300 focus:border-gray-400"
    }`
  
  const buttonClassName = 
    `flex items-center gap-2 px-8 py-3 ${getColorClass('bg')} hover:opacity-90 text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg`
  
  const [formData, setFormData] = useState<FormData>({
    senderIsProfessional: false,
    senderFirstName: "",
    senderLastName: "",
    senderEmail: "",
    senderPhone: "",
    senderAddress: "",
    senderAddressComplement: "",
    senderPostalCode: "",
    senderCity: "",
    senderCountry: "FRANCE",
    
    recipientIsProfessional: false,
    recipientFirstName: "",
    recipientLastName: "",
    recipientAddress: "",
    recipientAddressComplement: "",
    recipientPostalCode: "",
    recipientCity: "",
    recipientCountry: "",
    
    letterText: "",
    letterLocation: "",
    letterDate: new Date().toLocaleDateString("fr-FR"),
    letterSignature: null,
    letterAttachments: [],
    
    colorPrinting: false,
    acknowledgmentOfReceipt: mailType === "recommandee"
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.strokeStyle = "#333"
        ctx.lineWidth = 2
        ctx.lineCap = "round"
      }
    }
  }, [currentStep])

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
    setErrors({})
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.senderFirstName.trim() && !formData.senderIsProfessional) 
      newErrors.senderFirstName = "Prénom requis"
    if (!formData.senderLastName.trim()) 
      newErrors.senderLastName = "Nom requis"
    if (!formData.senderEmail.trim()) 
      newErrors.senderEmail = "Email requis"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.senderEmail)) 
      newErrors.senderEmail = "Format d'email invalide"
    if (!formData.senderPhone.trim()) 
      newErrors.senderPhone = "Téléphone requis"
    else if (!/^[0-9\s+()-]{10,}$/.test(formData.senderPhone)) 
      newErrors.senderPhone = "Format de téléphone invalide"
    if (!formData.senderAddress.trim()) 
      newErrors.senderAddress = "Adresse requise"
    if (!formData.senderPostalCode.trim()) 
      newErrors.senderPostalCode = "Code postal requis"
    else if (!/^\d{5}$/.test(formData.senderPostalCode)) 
      newErrors.senderPostalCode = "Code postal invalide (5 chiffres)"
    if (!formData.senderCity.trim()) 
      newErrors.senderCity = "Localité requise"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.recipientFirstName.trim() && !formData.recipientIsProfessional) 
      newErrors.recipientFirstName = "Prénom requis"
    if (!formData.recipientLastName.trim()) 
      newErrors.recipientLastName = "Nom requis"
    if (!formData.recipientAddress.trim()) 
      newErrors.recipientAddress = "Adresse requise"
    if (!formData.recipientPostalCode.trim()) 
      newErrors.recipientPostalCode = "Code postal requis"
    else if (!/^\d{5}$/.test(formData.recipientPostalCode)) 
      newErrors.recipientPostalCode = "Code postal invalide (5 chiffres)"
    if (!formData.recipientCity.trim()) 
      newErrors.recipientCity = "Localité requise"
    if (!formData.recipientCountry.trim()) 
      newErrors.recipientCountry = "Pays requis"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.letterText.trim()) 
      newErrors.letterText = "Le contenu du courrier est requis"
    if (!formData.letterSignature) 
      newErrors.letterSignature = "Veuillez signer votre courrier"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    let isValid = false
    
    if (currentStep === 1) isValid = validateStep1()
    else if (currentStep === 2) isValid = validateStep2()
    else if (currentStep === 3) isValid = validateStep3()
    else if (currentStep === 4) isValid = true // Step 4 is verification, no validation needed
    
    if (isValid) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        // Step 4: Redirect to checkout with form data
        const baseUrl = 'https://t.trklinkx.com/click?pid=3137&offer_id=10622'
        
        // Map mail type to sub3 parameter
        const sub3Map = {
          recommandee: 'Lettre recommandée',
          suivie: 'Lettre Suivie',
          verte: 'Lettre Verte'
        }
        
        // Build URL parameters
        const params = new URLSearchParams({
          sub3: sub3Map[mailType],
          sub9: formData.senderFirstName,
          sub10: formData.senderLastName,
          sub11: formData.senderEmail,
          sub12: formData.senderPhone,
          sub13: formData.senderAddress,
          sub15: formData.senderCity
        })
        
        // Redirect to checkout
        window.location.href = `${baseUrl}&${params.toString()}`
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push("/")
    }
  }

  // Signature canvas handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setIsDrawing(true)
    const rect = canvas.getBoundingClientRect()
    ctx.beginPath()
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    const canvas = canvasRef.current
    if (canvas) {
      updateFormData({ letterSignature: canvas.toDataURL() })
    }
  }

  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setIsDrawing(true)
    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    ctx.beginPath()
    ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top)
  }

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top)
    ctx.stroke()
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    updateFormData({ letterSignature: null })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      updateFormData({ letterAttachments: Array.from(files) })
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Vos coordonnées (Expéditeur)"
      case 2: return "Coordonnées du destinataire"
      case 3: return "Rédigez votre courrier"
      case 4: return "Vérification et paiement"
      default: return ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-text-dark hover:text-brand-blue transition-all duration-200 group">
            <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-brand-blue/10 flex items-center justify-center transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:text-brand-blue transition-colors" />
            </div>
            <span className="text-sm font-medium hidden sm:inline">Retour</span>
          </Link>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-text-gray">Étape</span>
            <div className={`w-8 h-8 rounded-full ${getColorClass('bg')} text-white flex items-center justify-center font-bold text-sm`}>
              {currentStep}
            </div>
            <span className="text-text-gray">/ 4</span>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 sm:py-6">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center w-full">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-all duration-300 ${
                    step <= currentStep 
                      ? `${getColorClass('bg')} text-white shadow-lg shadow-${mailType === 'recommandee' ? 'orange' : mailType === 'suivie' ? 'blue' : 'green'}-200` 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step < currentStep ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : step}
                  </div>
                  <span className={`text-[10px] sm:text-xs mt-1.5 sm:mt-2 text-center font-medium transition-colors ${
                    step <= currentStep ? getColorClass('text') : 'text-gray-400'
                  }`}>
                    {step === 1 && <span className="hidden sm:inline">Expéditeur</span>}
                    {step === 2 && <span className="hidden sm:inline">Destinataire</span>}
                    {step === 3 && <span className="hidden sm:inline">Courrier</span>}
                    {step === 4 && <span className="hidden sm:inline">Validation</span>}
                    {step === 1 && <span className="sm:hidden">Exp.</span>}
                    {step === 2 && <span className="sm:hidden">Dest.</span>}
                    {step === 3 && <span className="sm:hidden">Doc.</span>}
                    {step === 4 && <span className="sm:hidden">Val.</span>}
                  </span>
                </div>
                {index < 3 && (
                  <div className={`h-0.5 sm:h-1 flex-1 mx-1 sm:mx-2 rounded-full transition-all duration-300 ${
                    step < currentStep ? getColorClass('bg') : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plan info banner */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-1">
                <div className={`w-1 h-6 sm:h-8 rounded-full ${getColorClass('bg')}`}></div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-dark">
                  Lettre <span className={getColorClass('text')}>{mailTypeLabel}</span>
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-text-gray pl-5 sm:pl-6">
                {features.join(" • ")}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-text-gray mb-0.5">À partir de</p>
              <p className={`text-2xl sm:text-3xl font-bold ${getColorClass('text')}`}>{price} €</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-dark">{getStepTitle()}</h2>
          <div className={`h-1 w-16 sm:w-20 rounded-full ${getColorClass('bg')} mt-2`}></div>
        </div>

        {/* Step 1: Sender Information */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-5 sm:p-6 md:p-8 lg:p-10 border border-gray-100">
            {/* Professional toggle */}
            <div className="mb-6 sm:mb-8">
              <label className="inline-flex items-center gap-3 cursor-pointer px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div
                  className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                    formData.senderIsProfessional ? "bg-brand-yellow" : "bg-gray-300"
                  }`}
                  onClick={() => {
                    updateFormData({ 
                      senderIsProfessional: !formData.senderIsProfessional,
                      senderFirstName: !formData.senderIsProfessional ? "" : formData.senderFirstName
                    })
                  }}
                  role="switch"
                  aria-checked={formData.senderIsProfessional}
                  tabIndex={0}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                      formData.senderIsProfessional ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white bg-brand-blue-dark px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                  Je suis un <span className="font-bold">professionnel</span>
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
              {!formData.senderIsProfessional && (
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-text-dark mb-2">
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.senderFirstName}
                    onChange={(e) => updateFormData({ senderFirstName: e.target.value })}
                    className={inputClassName(!!errors.senderFirstName)}
                    placeholder="Prénom"
                  />
                  {errors.senderFirstName && <p className="text-red-500 text-xs mt-1">{errors.senderFirstName}</p>}
                </div>
              )}
              <div className={!formData.senderIsProfessional ? "" : "md:col-span-2"}>
                <label className="block text-sm font-medium text-text-gray mb-1">
                  {formData.senderIsProfessional ? "Nom de l'entreprise" : "Nom"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.senderLastName}
                  onChange={(e) => updateFormData({ senderLastName: e.target.value })}
                  className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    errors.senderLastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder={formData.senderIsProfessional ? "Nom de l'entreprise" : "Nom"}
                />
                {errors.senderLastName && <p className="text-red-500 text-xs mt-1">{errors.senderLastName}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-text-gray mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.senderEmail}
                onChange={(e) => updateFormData({ senderEmail: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.senderEmail ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="email@exemple.com"
              />
              {errors.senderEmail && <p className="text-red-500 text-xs mt-1">{errors.senderEmail}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-text-gray mb-1">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.senderPhone}
                onChange={(e) => updateFormData({ senderPhone: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.senderPhone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="06 12 34 56 78"
              />
              {errors.senderPhone && <p className="text-red-500 text-xs mt-1">{errors.senderPhone}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-text-gray mb-1">
                Adresse <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.senderAddress}
                onChange={(e) => updateFormData({ senderAddress: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.senderAddress ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Adresse"
              />
              {errors.senderAddress && <p className="text-red-500 text-xs mt-1">{errors.senderAddress}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-text-gray mb-1">
                Complément d'adresse
              </label>
              <input
                type="text"
                value={formData.senderAddressComplement}
                onChange={(e) => updateFormData({ senderAddressComplement: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="Appartement, étage, etc."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-text-gray mb-1">
                  Code postal <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.senderPostalCode}
                  onChange={(e) => updateFormData({ senderPostalCode: e.target.value })}
                  className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    errors.senderPostalCode ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Code postal"
                  maxLength={5}
                />
                {errors.senderPostalCode && <p className="text-red-500 text-xs mt-1">{errors.senderPostalCode}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-text-gray mb-1">
                  Localité <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.senderCity}
                  onChange={(e) => updateFormData({ senderCity: e.target.value })}
                  className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    errors.senderCity ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ville"
                />
                {errors.senderCity && <p className="text-red-500 text-xs mt-1">{errors.senderCity}</p>}
              </div>
            </div>

            <div className="md:w-1/2">
              <label className="block text-xs sm:text-sm font-semibold text-text-dark mb-2">Pays</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.senderCountry || senderCountrySearch}
                  onChange={(e) => {
                    setSenderCountrySearch(e.target.value)
                    updateFormData({ senderCountry: "" })
                    setShowSenderCountries(true)
                  }}
                  onFocus={() => setShowSenderCountries(true)}
                  placeholder="Rechercher un pays..."
                  className="w-full border-2 rounded-xl px-4 py-3 sm:py-3.5 text-text-dark text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-4 ring-brand-blue focus:ring-opacity-10 transition-all duration-200 border-gray-200 hover:border-gray-300 focus:border-gray-400"
                />
                {showSenderCountries && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowSenderCountries(false)}
                    />
                    <div className="absolute z-20 w-full mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                      {filteredSenderCountries.length > 0 ? (
                        filteredSenderCountries.map((country) => (
                          <div
                            key={country}
                            onClick={() => {
                              updateFormData({ senderCountry: country })
                              setSenderCountrySearch("")
                              setShowSenderCountries(false)
                            }}
                            className="px-4 py-2.5 hover:bg-brand-blue/5 cursor-pointer transition-colors text-sm border-b border-gray-100 last:border-0"
                          >
                            {country}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-sm text-gray-500 text-center">
                          Aucun pays trouvé
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Recipient Information */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-5 sm:p-6 md:p-8 lg:p-10 border border-gray-100">
            {/* Professional toggle */}
            <div className="mb-6 sm:mb-8">
              <label className="inline-flex items-center gap-3 cursor-pointer px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div
                  className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                    formData.recipientIsProfessional ? "bg-brand-yellow" : "bg-gray-300"
                  }`}
                  onClick={() => {
                    updateFormData({ 
                      recipientIsProfessional: !formData.recipientIsProfessional,
                      recipientFirstName: !formData.recipientIsProfessional ? "" : formData.recipientFirstName
                    })
                  }}
                  role="switch"
                  aria-checked={formData.recipientIsProfessional}
                  tabIndex={0}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      formData.recipientIsProfessional ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white bg-brand-blue-dark px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                  Le destinataire est un <span className="font-bold">professionnel</span>
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
              {!formData.recipientIsProfessional && (
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-1">
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.recipientFirstName}
                    onChange={(e) => updateFormData({ recipientFirstName: e.target.value })}
                    className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                      errors.recipientFirstName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Prénom"
                  />
                  {errors.recipientFirstName && <p className="text-red-500 text-xs mt-1">{errors.recipientFirstName}</p>}
                </div>
              )}
              <div className={!formData.recipientIsProfessional ? "" : "md:col-span-2"}>
                <label className="block text-sm font-medium text-text-gray mb-1">
                  {formData.recipientIsProfessional ? "Nom de l'entreprise" : "Nom"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.recipientLastName}
                  onChange={(e) => updateFormData({ recipientLastName: e.target.value })}
                  className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    errors.recipientLastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder={formData.recipientIsProfessional ? "Nom de l'entreprise" : "Nom"}
                />
                {errors.recipientLastName && <p className="text-red-500 text-xs mt-1">{errors.recipientLastName}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-text-gray mb-1">
                Adresse <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.recipientAddress}
                onChange={(e) => updateFormData({ recipientAddress: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.recipientAddress ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Adresse"
              />
              {errors.recipientAddress && <p className="text-red-500 text-xs mt-1">{errors.recipientAddress}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-text-gray mb-1">
                Complément d'adresse
              </label>
              <input
                type="text"
                value={formData.recipientAddressComplement}
                onChange={(e) => updateFormData({ recipientAddressComplement: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="Appartement, étage, etc."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-text-gray mb-1">
                  Code postal <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.recipientPostalCode}
                  onChange={(e) => updateFormData({ recipientPostalCode: e.target.value })}
                  className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    errors.recipientPostalCode ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Code postal"
                  maxLength={5}
                />
                {errors.recipientPostalCode && <p className="text-red-500 text-xs mt-1">{errors.recipientPostalCode}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-text-gray mb-1">
                  Localité <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.recipientCity}
                  onChange={(e) => updateFormData({ recipientCity: e.target.value })}
                  className={`w-full border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    errors.recipientCity ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ville"
                />
                {errors.recipientCity && <p className="text-red-500 text-xs mt-1">{errors.recipientCity}</p>}
              </div>
            </div>

            <div className="md:w-1/2">
              <label className="block text-xs sm:text-sm font-semibold text-text-dark mb-2">
                Pays <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.recipientCountry || recipientCountrySearch}
                  onChange={(e) => {
                    setRecipientCountrySearch(e.target.value)
                    updateFormData({ recipientCountry: "" })
                    setShowRecipientCountries(true)
                  }}
                  onFocus={() => setShowRecipientCountries(true)}
                  placeholder="Rechercher un pays..."
                  className={`w-full border-2 rounded-xl px-4 py-3 sm:py-3.5 text-text-dark text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-4 ${getColorClass('ring')} focus:ring-opacity-10 transition-all duration-200 ${
                    errors.recipientCountry ? "border-red-500 bg-red-50/50" : "border-gray-200 hover:border-gray-300 focus:border-gray-400"
                  }`}
                />
                {showRecipientCountries && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowRecipientCountries(false)}
                    />
                    <div className="absolute z-20 w-full mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                      {filteredRecipientCountries.length > 0 ? (
                        filteredRecipientCountries.map((country) => (
                          <div
                            key={country}
                            onClick={() => {
                              updateFormData({ recipientCountry: country })
                              setRecipientCountrySearch("")
                              setShowRecipientCountries(false)
                            }}
                            className="px-4 py-2.5 hover:bg-brand-blue/5 cursor-pointer transition-colors text-sm border-b border-gray-100 last:border-0"
                          >
                            {country}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-sm text-gray-500 text-center">
                          Aucun pays trouvé
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
              {errors.recipientCountry && <p className="text-red-500 text-xs mt-1">{errors.recipientCountry}</p>}
            </div>
          </div>
        )}

        {/* Step 3: Letter Content */}
        {currentStep === 3 && (
          <div className="space-y-5 sm:space-y-6">
            {/* Address preview */}
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-5 sm:p-6 border border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-text-dark mb-4 sm:mb-5">Aperçu des adresses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 rounded-xl p-4 sm:p-5 border border-brand-yellow/20">
                  <p className="text-xs text-text-light italic mb-2">Expéditeur</p>
                  <p className="font-semibold text-text-dark">
                    {formData.senderFirstName} {formData.senderLastName}
                  </p>
                  <p className="text-sm text-text-dark">{formData.senderAddress}</p>
                  {formData.senderAddressComplement && (
                    <p className="text-sm text-text-dark">{formData.senderAddressComplement}</p>
                  )}
                  <p className="text-sm text-text-dark">
                    {formData.senderPostalCode} {formData.senderCity}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-brand-blue-light to-blue-50 rounded-xl p-4 sm:p-5 border border-brand-blue/20">
                  <p className="text-xs text-text-light italic mb-2">Destinataire</p>
                  <p className="font-semibold text-text-dark">
                    {formData.recipientFirstName} {formData.recipientLastName}
                  </p>
                  <p className="text-sm text-text-dark">{formData.recipientAddress}</p>
                  {formData.recipientAddressComplement && (
                    <p className="text-sm text-text-dark">{formData.recipientAddressComplement}</p>
                  )}
                  <p className="text-sm text-text-dark">
                    {formData.recipientPostalCode} {formData.recipientCity}
                  </p>
                  <p className="text-sm text-text-dark">{formData.recipientCountry}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 justify-end">
                <span className="text-sm text-text-gray">À</span>
                <input
                  type="text"
                  value={formData.letterLocation}
                  onChange={(e) => updateFormData({ letterLocation: e.target.value })}
                  placeholder="localité"
                  className="border border-gray-300 rounded px-3 py-2 text-sm w-40"
                />
                <span className="text-sm text-text-gray">, le</span>
                <input
                  type="text"
                  value={formData.letterDate}
                  onChange={(e) => updateFormData({ letterDate: e.target.value })}
                  className="border border-gray-300 rounded px-3 py-2 text-sm w-32"
                />
              </div>
            </div>

            {/* Letter content */}
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-5 sm:p-6 border border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-text-dark mb-4 sm:mb-5">
                Contenu du courrier <span className="text-red-500">*</span>
              </h3>
              <textarea
                value={formData.letterText}
                onChange={(e) => updateFormData({ letterText: e.target.value })}
                placeholder="Rédigez votre courrier ici..."
                className={`w-full h-64 border rounded-lg px-4 py-3 text-text-dark resize-none focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  errors.letterText ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.letterText && <p className="text-red-500 text-sm mt-1">{errors.letterText}</p>}
            </div>

            {/* Attachments and Signature */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
              {/* Attachments */}
              <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-5 sm:p-6 border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-text-dark mb-4">
                  Pi\u00e8ces jointes <span className="text-xs sm:text-sm text-text-gray font-normal">(Optionnel)</span>
                </h3>
                <label className="block border-2 border-dashed border-brand-yellow/30 bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 rounded-xl p-6 sm:p-8 cursor-pointer hover:border-brand-yellow/50 hover:bg-brand-yellow/15 transition-all duration-200 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                      <Upload className="w-6 h-6 sm:w-7 sm:h-7 text-brand-yellow" />
                    </div>
                    <p className="text-sm sm:text-base text-text-dark font-semibold mb-1">Glisser-d\u00e9poser ou Parcourir</p>
                    <p className="text-xs sm:text-sm text-text-gray">Format : PDF</p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {formData.letterAttachments.length > 0 && (
                  <div className="mt-2">
                    {formData.letterAttachments.map((file, index) => (
                      <p key={file.name + index} className="text-sm text-text-gray">{file.name}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Signature */}
              <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-5 sm:p-6 border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-text-dark mb-4">
                  Signature <span className="text-red-500">*</span>
                </h3>
                <div className="relative group">
                  <canvas
                    ref={canvasRef}
                    width={350}
                    height={150}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawingTouch}
                    onTouchMove={drawTouch}
                    onTouchEnd={stopDrawing}
                    className="border-2 border-gray-200 rounded-xl w-full cursor-crosshair hover:border-gray-300 transition-colors bg-gray-50/50"
                  />
                  <button
                    type="button"
                    onClick={clearSignature}
                    className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-white/90 hover:bg-white shadow-sm flex items-center justify-center text-text-gray hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Effacer signature"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
                {errors.letterSignature && <p className="text-red-500 text-xs sm:text-sm mt-2 font-medium">{errors.letterSignature}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Verification */}
        {currentStep === 4 && (
          <div className="space-y-5 sm:space-y-6">
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-5 sm:p-6 md:p-8 border border-gray-100">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-text-dark mb-5 sm:mb-6">Récapitulatif de votre envoi</h3>
              
              {/* Summary sections */}
              <div className="space-y-5">
                <div className="border-b border-gray-100 pb-4 sm:pb-5">
                  <h4 className="font-bold text-text-dark mb-2 text-sm sm:text-base">Type d'envoi</h4>
                  <p className={`${getColorClass('text')} font-bold`}>Lettre {mailTypeLabel}</p>
                  <p className="text-sm text-text-gray">{features.join(" • ")}</p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-semibold text-text-dark mb-2">Expéditeur</h4>
                  <p>{formData.senderFirstName} {formData.senderLastName}</p>
                  <p className="text-sm text-text-gray">{formData.senderEmail}</p>
                  <p className="text-sm text-text-gray">
                    {formData.senderAddress}, {formData.senderPostalCode} {formData.senderCity}
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-semibold text-text-dark mb-2">Destinataire</h4>
                  <p>{formData.recipientFirstName} {formData.recipientLastName}</p>
                  <p className="text-sm text-text-gray">
                    {formData.recipientAddress}, {formData.recipientPostalCode} {formData.recipientCity}, {formData.recipientCountry}
                  </p>
                </div>

                {mailType === "recommandee" && (
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-text-dark mb-2">Options</h4>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.acknowledgmentOfReceipt}
                        onChange={(e) => updateFormData({ acknowledgmentOfReceipt: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Avis de réception (+2,00 €)</span>
                    </label>
                  </div>
                )}

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 sm:p-6 border border-gray-200 shadow-inner">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-text-dark">Total</span>
                    <span className={`text-2xl font-bold ${getColorClass('text')}`}>
                      2,35 €
                    </span>
                  </div>
                </div>

                {/* Promotional Banner */}
                <div className="bg-gradient-to-r from-brand-orange to-orange-500 rounded-xl p-4 sm:p-5 text-white">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">Offre promotionnelle limitée</p>
                      <p className="text-xs mt-1 text-white/90">Prix exceptionnel de 2,35 € - Aucun frais supplémentaire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-blue-light to-blue-50 border-2 border-brand-blue/20 rounded-xl p-4 sm:p-5">
              <p className="text-sm text-text-dark">
                <strong>Note :</strong> En validant votre commande, vous acceptez nos conditions générales de vente.
                Votre courrier sera imprimé et posté sous 24h à 48h.
              </p>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-gray-200 rounded-xl text-text-dark hover:border-gray-300 hover:bg-gray-50 transition-all font-medium order-2 sm:order-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentStep === 1 ? "Annuler" : "Retour"}</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className={`flex items-center justify-center gap-2 px-8 py-3.5 ${getColorClass('bg')} hover:opacity-90 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl order-1 sm:order-2`}
          >
            <span>{currentStep === 4 ? "Valider et Payer" : "Continuer"}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
