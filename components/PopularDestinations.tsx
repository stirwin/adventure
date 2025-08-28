"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { Plane } from "lucide-react"
import { destinations, type Destination } from "@/data/destinations"

interface PopularDestinationsProps {
  isVisible: boolean
}

export default function PopularDestinations({ isVisible }: PopularDestinationsProps) {
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
      className="py-16 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >   
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="relative mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Popular <span className="text-gray-500">destinations</span>
                </h2>
                <p className="text-gray-600 mt-2">Experience the best of Cartagena&apos;s coastline</p>
              </div>
            </div>
            <div className="md:ml-4">
              <Link 
                href="/destinations" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group whitespace-nowrap"
              >
                View all destinations
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

        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          setApi={setApi}
          className="w-full relative pb-12"
        >
          <div className="absolute -top-16 right-0 flex items-center gap-2 z-10">
            <CarouselPrevious className="static translate-y-0 h-10 w-10" />
            <CarouselNext className="static translate-y-0 h-10 w-10" />
          </div>

          <CarouselContent className="-ml-2 md:-ml-4">
            {destinations.map((dest: Destination) => (
              <CarouselItem key={dest.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    {dest.tag && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {dest.tag}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-700 font-medium">{dest.region ?? "Cartagena"}</span>
                      <Plane className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700 font-medium">{dest.name}</span>
                    </div>

                    <p className="text-sm text-gray-500 mb-3">{dest.duration ?? "Varies"} • {dest.shortDescription}</p>

                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold text-gray-900">
                        From {dest.currency ?? "USD"} {dest.priceFrom}
                      </p>

                      <div className="flex items-center gap-2">
                        {/* Internal route: use Link WITHOUT <a> */}
                        <Link
                          href={`/destinations/${dest.slug ?? dest.id}`}
                          className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-100"
                        >
                          Details
                        </Link>

                        {/* External WhatsApp: use plain <a> */}
                        <a
                          href={`https://wa.me/573054384698?text=Hola%2C%20estoy%20interesado%20en%20el%20paquete%20${encodeURIComponent(dest.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                        >
                          Book
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.section>
  )
}
