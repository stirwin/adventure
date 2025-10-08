"use client";

import { motion } from "framer-motion";
import { ArrowRight, Car, Users, Shield, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { vehicles, type VehicleCategory } from "@/data/transport";

const serviceDetails = {
  title: "Premium Transportation",
  description: "Luxury and comfort for your travels in Cartagena. Starting at $45 USD per hour.",
  overview: "Experience the best of Cartagena with our premium transportation services. Whether you need a stylish ride for a special occasion or comfortable transportation for your group, we have the perfect vehicle for your needs. Our professional drivers and well-maintained fleet ensure a safe and enjoyable journey through the beautiful streets of Cartagena.",
  features: [
    {
      title: "Luxury Fleet",
      description: "Choose from our selection of high-end vehicles including classic cars, sports cars, and more."
    },
    {
      title: "Professional Chauffeurs",
      description: "Our experienced drivers know Cartagena inside out and provide exceptional service."
    },
    {
      title: "Flexible Booking",
      description: "Rent by the hour or for the whole day with our flexible booking options."
    },
    {
      title: "Special Occasions",
      description: "Perfect for weddings, anniversaries, corporate events, and special tours."
    }
  ]
};

const categories = [
  { id: "all", name: "All Vehicles", icon: <Car className="w-4 h-4" /> },
  { id: "classic", name: "Classic Cars", icon: <Shield className="w-4 h-4" /> },
  { id: "sports", name: "Sports Cars", icon: <Zap className="w-4 h-4" /> },
  { id: "van", name: "Vans", icon: <Users className="w-4 h-4" /> }
];

export default function TransportationPage() {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory | "all">("all");
  
  const filteredVehicles = activeCategory === "all" 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.categories.includes(activeCategory as VehicleCategory));

  const formatPrice = (price?: number, type: 'hour' | 'day' = 'hour') => {
    if (!price) return 'Contact Us';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price) + (type === 'hour' ? '/hr' : '/day');
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
        {/* Header Section */}
        <section className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-amber-400 mb-4"
          >
            {serviceDetails.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-amber-400 mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-700 mb-8"
          >
            {serviceDetails.description}
          </motion.p>
        </section>

        {/* Overview Section */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose max-w-3xl text-gray-600"
          >
            <p className="text-lg leading-relaxed">
              {serviceDetails.overview}
            </p>
          </motion.div>
        </section>

        {/* Vehicle Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as VehicleCategory | "all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="mb-16">
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredVehicles.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                    />
                    {vehicle.tag && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {vehicle.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {vehicle.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          {formatPrice(vehicle.pricePerHour, 'hour')}
                        </div>
                        {vehicle.pricePerDay && (
                          <div className="text-sm text-gray-500">
                            {formatPrice(vehicle.pricePerDay, 'day')}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{vehicle.shortDescription}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Users className="w-4 h-4 mr-2 text-green-600" />
                      {vehicle.capacity} Passengers
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features?.map((feature, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <a 
                        href={`https://wa.me/573054384698?text=Hola! Estoy interesado en el vehículo ${vehicle.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Book Now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500">
                More vehicles coming soon!
              </h3>
              <p className="text-gray-400 mt-2">
                Check back later for updates on our fleet.
              </p>
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Our Services
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us for special requests, large groups, or custom itineraries.
            </p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6"
            >
              <a 
                href="https://wa.me/573054384698?text=¡Hola! Necesito información sobre transporte personalizado"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}