"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Users, Bed, Bath, Wifi, Utensils, Anchor } from "lucide-react"
import Image from "next/image"

interface LuxuryVillasProps {
  isVisible: boolean
}

export default function LuxuryVillas({ isVisible }: LuxuryVillasProps) {
  return (
    <section
      className={`py-16 px-6 bg-gray-50 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Luxury Villas & Colonial <span className="text-gray-500">Houses in Cartagena</span>
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
            {/* Villa Card 1 - Colonial Mansion */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600 relative overflow-hidden">
                  <Image
                    src="/images/colonial-mansion-cartagena.png"
                    alt="Colonial Mansion"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Casa Colonial Elegante</h3>
                  <p className="text-gray-600 mb-4">Historic colonial mansion in Old Town</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 10 guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">5 bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">4 bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Pool & WiFi</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$450</p>
                        <p className="text-sm text-gray-500">per night</p>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Villa Card 2 - Modern Villa */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                  <Image
                    src="/images/modern-luxury-villa-cartagena.png"
                    alt="Modern Villa"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Villa Moderna Bocagrande</h3>
                  <p className="text-gray-600 mb-4">Contemporary villa with ocean views</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 8 guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">4 bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">3 bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Full kitchen</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$320</p>
                        <p className="text-sm text-gray-500">per night</p>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Villa Card 3 - Boutique House */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                  <Image
                    src="/images/boutique-colonial-house-cartagena.png"
                    alt="Boutique House"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Boutique
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Casa Boutique Getsemaní</h3>
                  <p className="text-gray-600 mb-4">Charming house in vibrant neighborhood</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 6 guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">3 bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">2 bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Rooftop terrace</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$180</p>
                        <p className="text-sm text-gray-500">per night</p>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Villa Card 4 - Penthouse */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                  <Image
                    src="/images/luxury-penthouse-cartagena.png"
                    alt="Luxury Penthouse"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Luxury
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Penthouse Castillogrande</h3>
                  <p className="text-gray-600 mb-4">Exclusive penthouse with panoramic views</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 12 guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">6 bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">5 bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Private chef</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$650</p>
                        <p className="text-sm text-gray-500">per night</p>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Villa Card 5 - Beach House */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 relative overflow-hidden">
                  <Image src="/images/placeholder-699ep.png" alt="Beach House" width={500} height={500} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Beachfront
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Casa Playa Baru</h3>
                  <p className="text-gray-600 mb-4">Beachfront house with private access</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 8 guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">4 bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">3 bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Beach access</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$380</p>
                        <p className="text-sm text-gray-500">per night</p>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
