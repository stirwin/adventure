"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {  Anchor, Package, HomeIcon } from "lucide-react"

import type { Variants, Transition } from 'framer-motion';
import React from "react"
import Navbar from "./NavbarNew"

// Animation variants with proper typing
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    } as Transition,
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

const slideIn = (direction: 'left' | 'right' | 'up' = 'up'): Variants => ({
  hidden: { 
    opacity: 0, 
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    y: direction === 'up' ? 30 : 0,
    scale: 0.995,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
});

export default function HeroSection() {
  const images = [
    "/images/pasadia1.webp",
    "/images/pasadia2.jpeg",
    "/images/pasadia3.png",
  ]

  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Smooth background image transition with crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])
  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[100vh] sm:min-h-[calc(100vh-2rem)] sm:rounded-2xl overflow-hidden">
        {/* Background with smooth crossfade transitions */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentImage}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images[currentImage]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              initial={{ opacity: 0.5 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.9] }
              }}
              exit={{ 
                opacity: 0.5,
                transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }
              }}
            />
          </AnimatePresence>
          {/* Preload next image */}
          <div className="hidden">
            {images.map((img, index) => (
              <motion.img 
                key={index} 
                src={img} 
                alt="" 
                className="hidden" 
                loading="eager"
              />
            ))}
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20" />

        {/* Header */}
        <Navbar/>

        {/* Main Hero Content */}
        <motion.main 
          className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 pb-8 overflow-hidden"
          variants={container}
          initial="hidden"
          animate={isLoaded ? "show" : "hidden"}
        >
          {/* Small badge */}
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8"
            variants={slideIn('left')}
          >
            <span className="text-gray-700 font-medium text-xs sm:text-sm">Travel More, Worry Less</span>
          </motion.div>

          {/* Headline */}
          <motion.div 
            className="bg-black/20 backdrop-blur-[1px] rounded-2xl sm:rounded-3xl px-4 py-4 sm:px-8 sm:py-6 mb-4 sm:mb-6 w-full max-w-5xl mx-auto"
            variants={item}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center leading-tight drop-shadow-2xl">
              <motion.span 
                className="block"
                variants={slideIn('right')}
              >
                Experience Timeless Luxury
              </motion.span>
              <motion.span 
                className="block mt-1 sm:mt-2"
                variants={slideIn('up')}
              >
                in <span className="text-green-400 drop-shadow-2xl">Cartagena</span>.
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div 
            className="bg-black/15 backdrop-blur-[1px] rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-12 max-w-2xl text-center mx-4"
            variants={slideIn('up')}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-lg font-medium">
              Our travel agency offers personalized and hassle-free travel experiences, tailored to meet your unique preferences.
            </p>
          </motion.div>

          {/* CTA Card */}
          <motion.div 
            className="bg-white/95 backdrop-blur-[2px] rounded-xl sm:rounded-2xl p-3 sm:p-4 w-full max-w-4xl shadow-xl border border-white/20 mx-4"
            variants={slideIn('up')}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              {/* Service Options */}
              <motion.div 
                className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 sm:gap-4 flex-1 w-full sm:w-auto"
                variants={container}
              >
                {[
                  { icon: Anchor, title: 'BOAT RENTALS', subtitle: 'Service' },
                  { icon: Package, title: 'PACKAGES', subtitle: 'Experience' },
                  { icon: HomeIcon, title: 'VACATION RENTALS', subtitle: 'Stay' },
                ].map((service, i) => (
                  <motion.button 
                    key={service.title}
                    className={`flex items-center gap-1.5 sm:gap-2 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all w-full sm:w-auto ${i === 2 ? 'col-span-2 sm:col-auto' : ''}`}
                    variants={item}
                    whileHover={{ y: -3, scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] sm:text-xs text-gray-500 font-medium">{service.subtitle}</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">{service.title}</span>
                    </div>
                  </motion.button>
                ))}
              </motion.div>

              <div className="mt-2 sm:mt-0 w-full sm:w-auto relative overflow-hidden rounded-lg">
                <motion.div 
                  className="absolute inset-0 bg-black/10"
                  whileHover={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Button 
                  className="relative z-10 w-full bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-2 text-sm sm:text-base rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Discover
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </div>
  )
}
