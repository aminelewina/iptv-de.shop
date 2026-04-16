"use client"

import { useState, useEffect } from "react"
import { X, Check, Smartphone, Tv, Monitor, Laptop, Award } from "lucide-react"

interface DeviceSelectionModalProps {
  isOpen: boolean
  onClose: () => void
  onDeviceSelect: (device: string) => void
  selectedPlan?: string
}

export default function DeviceSelectionModal({
  isOpen,
  onClose,
  onDeviceSelect,
  selectedPlan,
}: DeviceSelectionModalProps) {
  const [selectedDevice, setSelectedDevice] = useState<string>("")
  const [step, setStep] = useState(1)

  const devices = [
    { id: "smart-tv", name: "SMART TV", icon: <Tv className="h-5 w-5" /> },
    { id: "fire-tv", name: "AMAZON FIRE TV STICK", icon: <Tv className="h-5 w-5" /> },
    { id: "android", name: "ANDROID", icon: <Smartphone className="h-5 w-5" /> },
    { id: "ios", name: "APPLE/IOS", icon: <Smartphone className="h-5 w-5" /> },
    { id: "windows", name: "WINDOWS", icon: <Monitor className="h-5 w-5" /> },
    { id: "formuler", name: "FORMULER Z8", icon: <Tv className="h-5 w-5" /> },
    { id: "mag-box", name: "MAG BOX", icon: <Tv className="h-5 w-5" /> },
    { id: "dreamlink", name: "DREAMLINK", icon: <Tv className="h-5 w-5" /> },
    { id: "enigma", name: "ENIGMA 2", icon: <Tv className="h-5 w-5" /> },
    { id: "other", name: "ANDERES GERÄT", icon: <Laptop className="h-5 w-5" /> },
  ]

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1)
      setSelectedDevice("")
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = () => {
    if (selectedDevice) {
      onDeviceSelect(selectedDevice)
    }
  }

  const handleDeviceSelect = (device: string) => {
    setSelectedDevice(device)
    setStep(2)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3">
      <div className="relative bg-gradient-to-b from-[#111] to-[#1a1a1a] rounded-xl w-full max-w-[95%] sm:max-w-md mx-auto p-4 sm:p-6 shadow-2xl animate-modalFadeIn border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full p-1.5 transition-colors"
          aria-label="Modal schließen"
        >
          <X size={16} />
        </button>

        {step === 1 ? (
          <>
            <div className="text-center mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Wählen Sie Ihr Gerät</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Für welches Gerät möchten Sie den {selectedPlan ? selectedPlan : ""} Plan testen?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4 max-h-[60vh] overflow-y-auto pr-1">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => handleDeviceSelect(device.name)}
                  className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all text-xs sm:text-sm border ${
                    selectedDevice === device.name
                      ? "bg-yellow-500 text-black border-yellow-400"
                      : "bg-gray-800 text-gray-200 hover:bg-gray-700 border-gray-700"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1 sm:mb-2 ${
                      selectedDevice === device.name ? "bg-yellow-600" : "bg-gray-700"
                    }`}
                  >
                    {device.icon}
                  </div>
                  <span className="text-center line-clamp-2">{device.name}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Ausgezeichnete Wahl!</h3>
              <p className="text-gray-300 text-sm">
                <span className="font-bold text-yellow-500">{selectedDevice}</span>
                {selectedPlan && (
                  <span>
                    {" "}
                    für <span className="font-bold text-yellow-500">{selectedPlan}</span>
                  </span>
                )}
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-3 mb-4">
              <div className="flex items-center mb-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2" />
                <h4 className="font-bold text-white text-sm sm:text-base">Ihre Vorteile:</h4>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">80.000+ deutsche IPTV-Kanäle (inkl. DAZN, SKY)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Bundesliga & Champions League live</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Sofortige Aktivierung</span>
                </li>
              </ul>
            </div>
          </>
        )}

        <div className="flex justify-between">
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="px-3 py-2 rounded-lg font-medium text-xs sm:text-sm bg-gray-700 text-white hover:bg-gray-600 transition-colors"
            >
              Zurück
            </button>
          )}
          <button
            onClick={step === 1 ? () => {} : handleSubmit}
            disabled={step === 1 || !selectedDevice}
            className={`${
              step === 1 ? "hidden" : "block"
            } ml-auto px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-bold text-xs sm:text-sm bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:from-yellow-400 hover:to-amber-500 transition-colors shadow-lg`}
          >
            Jetzt über WhatsApp fortfahren
          </button>
        </div>
      </div>
    </div>
  )
}
