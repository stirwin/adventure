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
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">

        {/* IMAGE */}
        <div className="relative h-48 md:h-56">
          <Image
            src={dest.image}
            alt={dest.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* TAG */}
          {dest.tag && (
            <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              {dest.tag}
            </span>
          )}

          {/* OVERLAY (hover) */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col gap-3">
          {/* REGION & NAME */}
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Plane className="w-4 h-4 text-gray-400" />
            <span className="font-medium">{dest.tag ?? "Caribe"}</span>
            <span className="text-gray-400">•</span>
            <span className="font-medium">{dest.title}</span>
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{dest.title}</h3>

          {/* SHORT DESCRIPTION */}
          <p className="text-sm text-gray-500 line-clamp-2">{dest.description}</p>

          {/* PRICE + CTA */}
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200">
            <div className="">
              <span className="text-xs text-gray-500">Desde</span>
              <p className="text-green-600 font-bold text-base">
                {dest.price?.adults}
              </p>
            </div>

            <div className="flex items-center gap-2">
   

              <a
                href={`https://wa.me/573054384698?text=Hola!%20Quiero%20información%20de:%20${encodeURIComponent(dest.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-medium bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Reservar
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
