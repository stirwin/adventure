"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { vehicles, type Vehicle, type VehicleCategory } from "@/data/transport"
import { Users, Zap, Shield, Star, ChevronRight, ArrowRight, MessageCircle } from "lucide-react"

interface TransportationProps {
  isVisible?: boolean
}

const categories: { id: VehicleCategory; name: string; icon: React.ReactNode }[] = [
  { id: "classic", name: "Classic Cars", icon: <Zap className="w-4 h-4" /> },
  { id: "sports", name: "Sports Cars", icon: <Zap className="w-4 h-4" /> },
  { id: "suv", name: "SUVs", icon: <Shield className="w-4 h-4" /> },
  { id: "van", name: "Vans", icon: <Users className="w-4 h-4" /> },
  { id: "other", name: "Others", icon: <Star className="w-4 h-4" /> },
]

export default function Transportation({ isVisible = true }: TransportationProps) {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory | 'all'>('all')
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles)
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredVehicles(vehicles)
    } else {
      setFilteredVehicles(vehicles.filter(vehicle => 
        vehicle.categories.includes(activeCategory as VehicleCategory)
      ))
    }
  }, [activeCategory])

  const formatPrice = (price?: number) => {
    if (!price) return 'Contact Us'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }
  return (
    <motion.section 
      className="py-16 px-6 bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Premium Transportation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Travel in style with our exclusive fleet of vehicles. Perfect for city tours, special occasions, and luxury travel experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 px-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === 'all' 
                ? 'bg-green-500 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Vehicles
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image with Tag */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
                {vehicle.tag && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {vehicle.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{vehicle.name}</h3>
                    <p className="text-sm text-gray-200">{vehicle.shortDescription}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{vehicle.shortDescription}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatPrice(vehicle.pricePerHour)}
                    </div>
                    <div className="text-xs text-gray-500">per hour</div>
                    {vehicle.pricePerDay && (
                      <div className="text-sm text-gray-600 mt-1">
                        or {formatPrice(vehicle.pricePerDay)} <span className="text-xs">/ day</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-green-500" />
                      <span>{vehicle.capacity} Seats</span>
                    </div>
                    {vehicle.features?.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={`/transport/${vehicle.slug ?? vehicle.id}`}
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                  >
                    View details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <a
                    href={`https://wa.me/573054384698?text=Hello%2C%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(vehicle.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/services/transportation"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            View All Vehicles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

      {/* Custom styles for reduced motion */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
          .group { 
            transition: none !important; 
            transform: none !important; 
          }
        }
        
        /* Smooth scroll for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </motion.section>
  )
}
