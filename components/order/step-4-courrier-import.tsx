"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload, FileText, X } from "lucide-react"
import { useOrder } from "@/lib/order-context"

export function Step4CourrierImport() {
  const router = useRouter()
  const { order, setLetter, setStep } = useOrder()
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFile = (file: File) => {
    setError(null)
    
    if (file.type !== "application/pdf") {
      setError("Seuls les fichiers PDF sont acceptés")
      return
    }

    if (file.size > 20 * 1024 * 1024) {
      setError("Le fichier ne doit pas dépasser 20Mo")
      return
    }

    setLetter({ importedFile: file })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const removeFile = () => {
    setLetter({ importedFile: null })
  }

  const handleNext = () => {
    if (!order.letter.importedFile) {
      setError("Veuillez importer un fichier PDF")
      return
    }
    setStep(5)
    router.push("/envoyer/verification")
  }

  const handleBack = () => {
    router.push("/envoyer/courrier")
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl text-text-dark mb-8">
          4. Importer votre courrier
        </h1>

        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
          {order.letter.importedFile ? (
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <FileText className="w-10 h-10 text-brand-blue" />
                <div>
                  <p className="font-medium text-text-dark">{order.letter.importedFile.name}</p>
                  <p className="text-sm text-text-light">
                    {(order.letter.importedFile.size / 1024 / 1024).toFixed(2)} Mo
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="text-text-light hover:text-red-500"
                aria-label="Supprimer le fichier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <label
              className={`block border-2 border-dashed rounded-lg p-12 cursor-pointer transition-colors ${
                dragActive
                  ? "border-brand-blue bg-brand-blue-light"
                  : "border-gray-300 hover:border-brand-blue"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center text-center">
                <Upload className="w-12 h-12 text-brand-blue mb-4" />
                <p className="text-lg text-text-dark font-medium mb-2">
                  Glisser-déposer votre fichier PDF ici
                </p>
                <p className="text-sm text-text-gray mb-4">ou</p>
                <span className="px-6 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
                  Parcourir
                </span>
                <p className="text-xs text-text-light mt-4">Format PDF uniquement - Maximum 20Mo</p>
              </div>
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}

          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-3 border border-gray-300 rounded-full text-text-dark hover:bg-gray-50 transition-colors"
          >
            Retour
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-8 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full font-medium transition-colors"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  )
}
