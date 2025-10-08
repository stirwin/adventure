"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { houses } from "@/data/houses";
import { Users, Bed, Bath, Wifi, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { CarouselApi } from "@/components/ui/carousel";

interface LuxuryVillasProps {
  isVisible: boolean;
}

export default function LuxuryVillas({ isVisible }: LuxuryVillasProps) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  // autoplay cada 5 segundos
  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <motion.section
      className={`py-16 px-6 bg-gray-50 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  House rentals 
                  <span className="text-gray-500"> and apartments</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Experience the comfort of a luxury villa or colonial house in
                  Cartagena
                </p>
              </div>
            </div>
            <div className="md:ml-4">
              <Link
                href="/house"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group whitespace-nowrap"
              >
                View all villas
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full relative"
        >
          <div className="absolute -top-16 right-0 flex items-center gap-2 z-10">
            <CarouselPrevious className="static translate-y-0 h-10 w-10" />
            <CarouselNext className="static translate-y-0 h-10 w-10" />
          </div>

          <CarouselContent className="-ml-2 md:-ml-4">
            {houses.map((house) => (
              <CarouselItem
                key={house.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={house.image}
                      alt={house.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    {house.tag && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {house.tag}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {house.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {house.shortDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>Up to {house.capacity} guests</span>
                      </div>  
                      {house.bedrooms !== undefined && (
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-gray-500" />
                          <span>{house.bedrooms} bedrooms</span>
                        </div>
                      )}
                      {house.bathrooms !== undefined && (
                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4 text-gray-500" />
                          <span>{house.bathrooms} bathrooms</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-gray-500" />
                        <span className="truncate">
                          {house.features?.[0] ?? "Included"}
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {house.currency ?? "USD"} {house.pricePerNight}
                          </p>
                        </div>
                        <a
                          href={`https://wa.me/573054384698?text=Hello%2C%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(
                            house.name
                          )}`}
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.section>
  );
}
