"use client";

import { motion } from "framer-motion";
import { ArrowRight, Utensils, Check, Star, ChefHat, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const serviceDetails = {
  title: "Private Chef Experience",
  description: "Luxury Gastronomy: Your personal chef in your dream destination. Starting at $250",
  overview: "Looking for more than just a vacation? Imagine being in your dream destination and enjoying a gourmet meal created just for you. With our Personalized Chef service, we offer you a unique culinary experience prepared according to your tastes, needs and preferences, all while enjoying the destination of your choice.",
  features: [
    {
      title: "Customized Menu",
      description: "Our chef will create an exclusive menu for you, tailored to your tastes, allergies or dietary preferences. From international dishes to local options, each meal will be a surprise full of flavor and quality.",
      icon: <Utensils className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Fresh & Local Ingredients",
      description: "We work with only the finest fresh and local ingredients to ensure an authentic experience that reflects the flavor of the destination.",
      icon: <MapPin className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Total Convenience",
      description: "Enjoy your meal directly in your chosen location: your villa, resort, or even on the beach. Our chef handles everything.",
      icon: <Check className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Unforgettable Memories",
      description: "Create special moments around the table with private sunset dinners, intimate breakfasts or family lunches.",
      icon: <Star className="w-6 h-6 text-amber-500" />
    }
  ],
  pricing: {
    basePrice: 250,
    includes: [
      "Personalized three-course menu",
      "Service for up to 15 people",
      "Lunch or dinner service",
      "Professional chef service",
      "Meal preparation and cleanup"
    ],
    note: "Groceries and ingredients are not included and must be paid for separately."
  }
};

export default function ChefServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-amber-500 mb-4"
          >
            {serviceDetails.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-amber-400 mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            {serviceDetails.description}
          </motion.p>
        </section>

        {/* Hero Image */}
        <motion.section 
          className="mb-16 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-96 w-full">
            <Image
              src="/images/chef/chef.jpg"
              alt="Private Chef Service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Culinary Excellence at Your Service</h2>
              <p className="text-lg max-w-2xl">Experience the luxury of having a personal chef create memorable dining experiences in the comfort of your accommodation.</p>
            </div>
          </div>
        </motion.section>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="prose max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-600">
              {serviceDetails.overview}
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="bg-amber-50 p-3 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20 bg-amber-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Details</h2>
              <div className="text-4xl font-bold text-amber-600 mb-2">
                From ${serviceDetails.pricing.basePrice}
              </div>
              <p className="text-gray-600">Personal Chef Service</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  {serviceDetails.pricing.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  {serviceDetails.pricing.note}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Highlights</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-lg mr-4">
                      <ChefHat className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Professional Chefs</h4>
                      <p className="text-sm text-gray-600">Experienced chefs with expertise in international and local cuisines</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-lg mr-4">
                      <Clock className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Flexible Timing</h4>
                      <p className="text-sm text-gray-600">Available for lunch or dinner, at your preferred time</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-lg mr-4">
                      <Users className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Group Service</h4>
                      <p className="text-sm text-gray-600">Perfect for groups of up to 15 people</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Elevate Your Dining Experience?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your private chef service today and enjoy a culinary journey without leaving your accommodation.
            </p>
            <Button
              asChild
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 text-lg"
              size="lg"
            >
              <a 
                href="https://wa.me/573054384698?text=¡Hola! Estoy interesado en el servicio de Chef Privado"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Book Your Private Chef
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}