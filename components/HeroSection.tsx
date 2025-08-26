"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Anchor, Package, HomeIcon } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const images = [
    "/images/pasadia1.webp",
    "/images/pasadia2.jpeg",
    "/images/pasadia3.png",
  ]

  const [currentImage, setCurrentImage] = useState(0)

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[calc(100vh-2rem)] rounded-2xl overflow-hidden">
        
        {/* Fondo con fade */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20"></div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2">
            <Image src="/images/logo.png" alt="Adventure by Colombia team" width={24} height={24}/>
            <span className="font-semibold text-gray-900">ADVENTURE</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">VACATION RENTALS</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">TOURS & DAY TRIPS</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">BOAT RENTALS</a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1">
                PACKAGES <ChevronDown className="w-3 h-3" />
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1">
                SERVICES <ChevronDown className="w-3 h-3" />
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1">
                THING TO DO <ChevronDown className="w-3 h-3" />
              </a>
            </div>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 font-medium">CONTACT US</Button>
          </div>
        </header>

        {/* Main Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in [animation-delay:0.2s]">
            <span className="text-gray-700 font-medium">Travel More, Worry Less</span>
          </div>

          <div className="bg-black/20 backdrop-blur-[1px] rounded-3xl px-8 py-6 mb-6 animate-slide-up [animation-delay:0.4s]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight drop-shadow-2xl">
              Experience Timeless Luxury
              <br />
              in <span className="text-green-400 drop-shadow-2xl">Cartagena</span>.
            </h1>
          </div>

          <div className="bg-black/15 backdrop-blur-[1px] rounded-2xl px-6 py-4 mb-12 animate-fade-in [animation-delay:0.6s]">
            <p className="text-white text-lg text-center max-w-2xl leading-relaxed drop-shadow-lg font-medium">
              Our travel agency offers personalized and hassle-free travel experiences, tailored to meet your unique
              preferences and needs.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-[2px] rounded-2xl p-4 w-full max-w-4xl shadow-xl border border-white/20 animate-slide-up [animation-delay:0.8s]">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Service Options */}
              <div className="flex flex-col md:flex-row items-center gap-4 flex-1">
                <button className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 hover:scale-105 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md">
                  <Anchor className="w-5 h-5 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">Service</span>
                    <span className="text-sm font-semibold text-gray-800">BOAT RENTALS</span>
                  </div>
                </button>

                <div className="hidden md:block w-px h-8 bg-gray-200"></div>

                <button className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 hover:scale-105 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md">
                  <Package className="w-5 h-5 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">Experience</span>
                    <span className="text-sm font-semibold text-gray-800">PACKAGES</span>
                  </div>
                </button>

                <div className="hidden md:block w-px h-8 bg-gray-200"></div>

                <button className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 hover:scale-105 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md">
                  <HomeIcon className="w-5 h-5 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">Stay</span>
                    <span className="text-sm font-semibold text-gray-800">VACATION RENTALS</span>
                  </div>
                </button>
              </div>

              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Discover
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
