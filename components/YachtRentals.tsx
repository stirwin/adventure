"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Users, Bed, Bath, Wifi, Utensils, Anchor } from "lucide-react"
import Image from "next/image"

interface YachtRentalsProps {
  isVisible: boolean
}

export default function YachtRentals({ isVisible }: YachtRentalsProps) {
  return (
    <section
      className={`py-16 px-6 bg-white transition-all duration-1000 delay-100 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Yacht & Boat <span className="text-gray-500">Rentals in Cartagena</span>
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
            {/* Yacht Card 1 - Luxury Yacht */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                  <Image src="/images/placeholder-0mmqi.png" alt="Luxury Yacht" width={500} height={500} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sea Princess</h3>
                  <p className="text-gray-600 mb-4">Luxury yacht with full amenities</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 12 people</span>
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
                      <span className="text-sm text-gray-600">WiFi included</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$850</p>
                        <p className="text-sm text-gray-500">per day</p>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Boat Card 2 - Speed Boat */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-700 relative overflow-hidden">
                  <Image src="/images/placeholder-kq2vh.png" alt="Speed Boat" width={500} height={500} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ocean Runner</h3>
                  <p className="text-gray-600 mb-4">Fast boat for island hopping</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 8 people</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">1 bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Snacks included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Snorkel gear</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$420</p>
                        <p className="text-sm text-gray-500">per day</p>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Boat Card 3 - Catamaran */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 relative overflow-hidden">
                  <Image src="/images/caribbean-catamaran.png" alt="Catamaran" width={500} height={500} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Family
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Caribbean Wind</h3>
                  <p className="text-gray-600 mb-4">Spacious catamaran for groups</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 15 people</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">2 bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">2 bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Kitchen</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$650</p>
                        <p className="text-sm text-gray-500">per day</p>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Boat Card 4 - Fishing Boat */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 relative overflow-hidden">
                  <Image src="/images/cartagena-fishing-boat.png" alt="Fishing Boat" width={500} height={500} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Adventure
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fisher&apos;s Dream</h3>
                  <p className="text-gray-600 mb-4">Perfect for fishing expeditions</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 6 people</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">1 bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Fishing gear</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Cooler included</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$320</p>
                        <p className="text-sm text-gray-500">per day</p>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Boat Card 5 - Party Boat */}
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-pink-500 to-pink-700 relative overflow-hidden">
                  <Image src="/images/cartagena-party-boat.png" alt="Party Boat" width={500} height={500} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Party
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fiesta Marina</h3>
                  <p className="text-gray-600 mb-4">Ultimate party boat experience</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Up to 20 people</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">2 bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Sound system</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Bar service</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">$750</p>
                        <p className="text-sm text-gray-500">per day</p>
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
