"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, MapPin, Users} from "lucide-react"
import { Button } from "./ui/button"
import React from "react"

interface MerryMeProps {
  isVisible?: boolean
}

const weddingServices = [
  {
    title: "Wedding Planning",
    description: "Complete wedding planning and coordination to make your special day perfect.",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    image: "/images/merry/merry-playa.webp"
  },
  {
    title: "Venue Selection",
    description: "Find the perfect location for your ceremony and reception.",
    icon: <MapPin className="w-6 h-6 text-pink-500" />,
    image: "/images/merry/merry2.webp"
  },
  {
    title: "Guest Management",
    description: "Handle invitations and guest accommodations with ease.",
    icon: <Users className="w-6 h-6 text-pink-500" />,
    image: "/images/merry/merry3.webp"
  }
]

export default function MerryMe({ isVisible = true }: MerryMeProps) {
  return (
    <section id="merry-me" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Merry Me
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let us make your dream wedding come true with our exceptional planning services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href="https://wa.me/573054384698?text=Hello%2C%20I'm%20interested%20in%20wedding%20planning%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center"
                  >
                    Contact on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Dream Wedding?</h3>
          <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
            <a 
              href="https://wa.me/573054384698?text=Hello%2C%20I%20would%20like%20to%20get%20more%20information%20about%20wedding%20planning"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
