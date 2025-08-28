"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Users, Bed, Bath, Anchor } from "lucide-react"
import { yachts as yachtsData, Yacht } from "@/data/yachts"
import { CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"

interface YachtRentalsProps {
  isVisible: boolean
}

export default function YachtRentals({ isVisible }: YachtRentalsProps) {
  const [api, setApi] = React.useState<CarouselApi | null>(null)

  // autoplay cada 5 segundos
  React.useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <motion.section 
      className="py-16 px-6 bg-white transition-all duration-1000 delay-100"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Yacht & Boat <span className="text-gray-500">Rentals</span>
                </h2>
                <p className="text-gray-600 mt-2">Experience the best of Cartagena&apos;s coastline</p>
              </div>
            </div>
            <div className="md:ml-4">
              <Link 
                href="/yachts" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group whitespace-nowrap"
              >
                View all yachts
                <svg 
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false
            }}
            setApi={setApi}
            className="w-full"
          >
            {/* Desktop Navigation - Absolute positioned */}
            <div className="hidden md:block absolute -top-16 right-0 z-10">
              <div className="flex items-center gap-3">
                <CarouselPrevious 
                  className="static translate-y-0 h-12 w-12 rounded-full bg-white border-2 border-gray-200 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-gray-700"
                />
                <CarouselNext 
                  className="static translate-y-0 h-12 w-12 rounded-full bg-green-600 border-2 border-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all [&>svg]:w-5 [&>svg]:h-5"
                />
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex md:hidden justify-end mb-4">
              <div className="flex items-center gap-3">
                <CarouselPrevious 
                  className="static translate-y-0 h-10 w-10 rounded-full bg-white border-2 border-gray-200 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-gray-700"
                />
                <CarouselNext 
                  className="static translate-y-0 h-10 w-10 rounded-full bg-green-600 border-2 border-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all [&>svg]:w-4 [&>svg]:h-4"
                />
              </div>
            </div>

          <CarouselContent className="-ml-2 md:-ml-4">
            {yachtsData.map((yacht: Yacht) => (
              <CarouselItem key={yacht.id} className="pl-2 md:pl-4 mb-2 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="h-48 bg-gradient-to-br from-slate-400 to-slate-600 relative overflow-hidden">
                    <Image
                      src={yacht.image}
                      alt={yacht.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority={false}
                    />
                    {yacht.tag && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {yacht.tag}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{yacht.name}</h3>
                    <p className="text-gray-600 mb-4">{yacht.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{`Up to ${yacht.capacity} people`}</span>
                      </div>
                      {yacht.bedrooms !== undefined && (
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-gray-500" />
                          <span>{`${yacht.bedrooms} bedrooms`}</span>
                        </div>
                      )}
                      {yacht.bathrooms !== undefined && (
                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4 text-gray-500" />
                          <span>{`${yacht.bathrooms} bathrooms`}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Anchor className="w-4 h-4 text-gray-500" />
                        <span>{yacht.features?.slice(0, 1).join(", ") ?? "Included"}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {yacht.currency ?? "USD"} {yacht.pricePerDay}
                          </p>
                          <p className="text-sm text-gray-500">per day</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link href={`/yachts/${yacht.slug ?? yacht.id}`}>
                            <Button className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200">
                              View
                            </Button>
                          </Link>
                          <a 
                            href={`https://wa.me/573054384698?text=Hola%2C%20estoy%20interesado%20en%20rentar%20el%20yate%20${encodeURIComponent(yacht.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                              Book Now
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          </Carousel>
        </div>
      </div>
    </motion.section>
  )
}
