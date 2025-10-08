"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100
        }
        // Progreso más lento y controlado
        const diff = Math.random() * 3 + 1 // Entre 1-4% por intervalo
        return Math.min(oldProgress + diff, 100)
      })
    }, 150) // Intervalo más frecuente pero incrementos menores

    const minDuration = setTimeout(() => {
      setProgress(100)
    }, 2000)

    return () => {
      clearInterval(timer)
      clearTimeout(minDuration)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Logo and Brand */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-6 h-6 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          ADVENTURE BY <span className="text-green-500">COLOMBIA</span>
        </h1>
        <p className="text-gray-600">Experience Timeless Luxury in Cartagena</p>
      </div>

      {/* Progress Bar */}
      <div className="w-80 max-w-md">
        <div className="relative">
          <Progress value={progress} className="h-3 mb-4 bg-gray-200" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20 animate-pulse"></div>
        </div>
        <p className="text-center text-sm text-gray-500">Loading your adventure... {Math.round(progress)}%</p>
      </div>

      {/* Animated dots */}
      <div className="flex space-x-1 mt-6">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      </div>
    </div>
  )
}
