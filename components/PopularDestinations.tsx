"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Plane } from "lucide-react"
import Image from "next/image"

interface PopularDestinationsProps {
  isVisible: boolean
}

export default function PopularDestinations({ isVisible }: PopularDestinationsProps) {
  return (
    <section
      className={`py-16 px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Popular <span className="text-gray-500">destination</span>
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            
          }}
          className="w-full relative"
        >
          <div className="absolute -top-16 right-0 flex items-center gap-2 z-10">
            <CarouselPrevious className="static translate-y-0 h-10 w-10" />
            <CarouselNext className="static translate-y-0 h-10 w-10" />
          </div>

          <CarouselContent className="-ml-2 md:-ml-4">
            {/* Destination Card 1 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                  <Image
                    src="/images/rosario-islands-paradise.png"
                    alt="Rosario Islands"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-700 font-medium">Cartagena</span>
                    <Plane className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 font-medium">Rosario Islands</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Fri, May 21 - Mon, Jun 10</p>
                  <p className="text-lg font-semibold text-gray-900">From $120.00</p>
                </div>
              </div>
            </CarouselItem>

            {/* Destination Card 2 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                  <Image src="/images/tayrona-beach-jungle.png" alt="Tayrona Park" width={500} height={500} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-700 font-medium">Cartagena</span>
                    <Plane className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 font-medium">Tayrona Park</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Fri, May 21 - Mon, Jun 10</p>
                  <p className="text-lg font-semibold text-gray-900">From $180.00</p>
                </div>
              </div>
            </CarouselItem>

            {/* Destination Card 3 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 relative overflow-hidden">
                  <Image src="/images/san-basilio-de-palenque.png" alt="Palenque" width={500} height={500} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-700 font-medium">Cartagena</span>
                    <Plane className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 font-medium">Palenque</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Fri, May 21 - Mon, Jun 10</p>
                  <p className="text-lg font-semibold text-gray-900">From $95.00</p>
                </div>
              </div>
            </CarouselItem>

            {/* Destination Card 4 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                  <Image src="/images/mompox-colonial-river.png" alt="Mompox" width={500} height={500} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-700 font-medium">Cartagena</span>
                    <Plane className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 font-medium">Mompox</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Fri, May 21 - Mon, Jun 10</p>
                  <p className="text-lg font-semibold text-gray-900">From $150.00</p>
                </div>
              </div>
            </CarouselItem>

            {/* Destination Card 5 */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden">
                  <Image src= "/images/santa-marta-colonial-coast.png" alt="Santa Marta" width={500} height={500} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-700 font-medium">Cartagena</span>
                    <Plane className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 font-medium">Santa Marta</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Fri, May 21 - Mon, Jun 10</p>
                  <p className="text-lg font-semibold text-gray-900">From $140.00</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
