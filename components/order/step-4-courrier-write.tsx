"use client"

import React from "react"

import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Upload, RotateCcw } from "lucide-react"
import { useOrder } from "@/lib/order-context"

export function Step4CourrierWrite() {
  const router = useRouter()
  const { order, setLetter, setStep } = useOrder()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasError, setHasError] = useState(false)

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
  }, [])

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
      setLetter({ signature: canvas.toDataURL() })
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
    setLetter({ signature: null })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setLetter({ attachments: Array.from(files) })
    }
  }

  const handleNext = () => {
    if (!order.letter.text.trim()) {
      setHasError(true)
      return
    }
    if (!order.letter.signature) {
      alert("Veuillez signer votre courrier")
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl md:text-2xl text-text-dark mb-8">
          4. Rédiger votre courrier
        </h1>

        {/* Address preview boxes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sender */}
            <div className="flex-1 bg-brand-yellow/20 rounded-lg p-4">
              <p className="text-sm text-text-light italic mb-2">Zone dédiée à vos coordonnées</p>
              <p className="font-semibold text-text-dark">
                {order.sender.firstName} {order.sender.lastName}
              </p>
              <p className="text-sm text-text-dark">{order.sender.address}</p>
              {order.sender.addressComplement && (
                <p className="text-sm text-text-dark">{order.sender.addressComplement}</p>
              )}
              <p className="text-sm text-text-dark">
                {order.sender.postalCode} {order.sender.city}
              </p>
            </div>

            {/* Recipient */}
            <div className="flex-1 bg-brand-blue-light rounded-lg p-4">
              <p className="text-sm text-text-light italic mb-2">Zone dédiée aux coordonnées du destinataire</p>
              <p className="font-semibold text-text-dark">
                {order.recipient.firstName} {order.recipient.lastName}
              </p>
              <p className="text-sm text-text-dark">{order.recipient.address}</p>
              {order.recipient.addressComplement && (
                <p className="text-sm text-text-dark">{order.recipient.addressComplement}</p>
              )}
              <p className="text-sm text-text-dark">
                {order.recipient.postalCode} {order.recipient.city}
              </p>
              <p className="text-sm text-text-dark">{order.recipient.country}</p>
            </div>
          </div>

          {/* Location and date */}
          <div className="flex items-center gap-4 mt-6 justify-end">
            <span className="text-sm text-text-gray">À</span>
            <input
              type="text"
              value={order.letter.location}
              onChange={(e) => setLetter({ location: e.target.value })}
              placeholder="localité"
              className="border border-gray-300 rounded px-3 py-2 text-sm w-40"
            />
            <span className="text-sm text-text-gray">, le</span>
            <input
              type="text"
              value={order.letter.date}
              onChange={(e) => setLetter({ date: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2 text-sm w-32"
            />
          </div>
        </div>

        {/* Letter editor */}
        <div className="mb-8">
          <h3 className="text-lg text-text-dark mb-2">
            <span className="font-bold">Rédigez</span> votre courrier
          </h3>
          
          {/* Simple toolbar */}
          <div className="flex items-center gap-4 border border-gray-300 border-b-0 rounded-t-lg px-4 py-2 bg-gray-50">
            <button type="button" className="font-bold text-text-dark hover:text-brand-blue">B</button>
            <button type="button" className="italic text-text-dark hover:text-brand-blue">I</button>
            <button type="button" className="underline text-text-dark hover:text-brand-blue">U</button>
          </div>
          
          <textarea
            value={order.letter.text}
            onChange={(e) => {
              setLetter({ text: e.target.value })
              setHasError(false)
            }}
            placeholder="Rédigez votre courrier ici..."
            className={`w-full h-64 border rounded-b-lg px-4 py-3 text-text-dark resize-none focus:outline-none focus:ring-2 focus:ring-brand-blue ${
              hasError ? "border-red-500" : "border-gray-300"
            }`}
          />
          {hasError && <p className="text-red-500 text-sm mt-1">requis</p>}
        </div>

        {/* Attachments and Signature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Attachments */}
          <div>
            <h3 className="text-lg text-text-dark mb-2">
              <span className="font-bold text-brand-orange">Déposer</span> vos pièces jointes
            </h3>
            <p className="text-sm text-text-gray mb-3">Ajoutez des pièces complémentaires</p>
            
            <label className="block border-2 border-dashed border-brand-yellow bg-brand-yellow/10 rounded-lg p-8 cursor-pointer hover:bg-brand-yellow/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Upload className="w-8 h-8 text-brand-yellow mb-2" />
                <p className="text-sm text-text-dark font-medium">Glisser-déposer des fichiers ou Parcourir</p>
                <p className="text-xs text-text-light">Format des fichiers : PDF</p>
              </div>
              <input
                type="file"
                accept=".pdf"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            
            {order.letter.attachments.length > 0 && (
              <div className="mt-2">
                {order.letter.attachments.map((file, index) => (
                  <p key={file.name + index} className="text-sm text-text-gray">{file.name}</p>
                ))}
              </div>
            )}
          </div>

          {/* Signature */}
          <div>
            <h3 className="text-lg text-text-dark mb-2">
              <span className="font-bold text-brand-orange">Signez</span> votre courrier
            </h3>
            <p className="text-sm text-text-gray mb-3">{"Dessiner votre signature à l'intérieur du cadre"}</p>
            
            <div className="relative">
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
                className="border border-gray-300 rounded-lg w-full cursor-crosshair"
              />
              <button
                type="button"
                onClick={clearSignature}
                className="absolute top-2 right-2 text-text-light hover:text-text-dark"
                aria-label="Effacer signature"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
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
            className="px-8 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-full font-medium transition-colors"
          >
            Je poursuis
          </button>
        </div>
      </div>
    </div>
  )
}
