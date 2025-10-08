"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";

const serviceDetails = {
  title: "Concierge Services",
  description: "The best concierge service in Cartagena: your trip without worries. Service starts at $120 USD By Day",
  overview: "Cartagena is a magical destination full of history, culture, and breathtaking scenery. To make your experience perfect, a reliable concierge service is essential. At Saura Travel, we take care of every detail so you can enjoy the city with peace of mind and total comfort.",
  features: [
    {
      title: "Exclusive Reservations",
      description: "From boutique hotels to the finest restaurants and private clubs, we guarantee access to unique experiences with priority availability and VIP attention."
    },
    {
      title: "Customized Experiences",
      description: "We organize yacht trips around the islands, historical tours with expert guides, visits to emblematic places, and gastronomic experiences with renowned chefs."
    },
    {
      title: "Luxury Transportation",
      description: "We offer airport transfers, private chauffeurs, high-end vehicles, and marine transportation services for your convenience and enjoyment."
    },
    {
      title: "24/7 Support",
      description: "Our team is always available to attend to any request, resolve unforeseen issues, and guarantee a stress-free stay."
    }
  ],
  benefits: [
    "Personalized attention and professionalism",
    "Premium partner network with the best suppliers",
    "Fast and secure reservations",
    "Local expertise and insider access",
    "Multilingual concierge team"
  ]
};

export default function ConciergePage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 14 } },
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
        {/* Header Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          <motion.h1 
            variants={item}
            className="text-4xl font-bold text-amber-500 mb-4"
          >
            {serviceDetails.title}
          </motion.h1>
          <motion.div
            variants={item}
            className="h-1 w-20 bg-amber-500 mb-6"
          />
          <motion.p 
            variants={item}
            className="text-xl text-gray-700 mb-8"
          >
            {serviceDetails.description}
          </motion.p>
        </motion.section>

        {/* Overview Section */}
        <motion.section 
          variants={container}
          className="mb-12"
        >
          <motion.div 
            variants={item}
            className="prose max-w-3xl text-gray-600"
          >
            <p className="text-lg leading-relaxed">
              {serviceDetails.overview}
            </p>
          </motion.div>
        </motion.section>

        {/* Image Section */}
        <motion.section 
          variants={container}
          className="my-16"
        >
          <motion.div
            variants={item}
            className="relative h-96 w-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/services/concierge.jpg"
              alt="Professional Concierge Service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Your Personal Concierge in Cartagena</h3>
              <p className="max-w-2xl">Experience the city like a local with our dedicated concierge team at your service.</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Grid */}
        <motion.section 
          variants={container}
          className="mb-20"
        >
          <motion.h2 
            variants={item}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-50 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-amber-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          variants={container}
          className="mb-16"
        >
          <motion.h2 
            variants={item}
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            Why Choose Our Concierge Service?
          </motion.h2>
          
          <motion.ul 
            variants={container}
            className="space-y-3"
          >
            {serviceDetails.benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                variants={item}
                className="flex items-start"
              >
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={container}
          className="bg-gray-50 rounded-xl p-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 
              variants={item}
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Ready to Experience Cartagena Without the Hassle?
            </motion.h2>
            <motion.p 
              variants={item}
              className="text-gray-600 mb-6"
            >
              Contact us now to book your personalized concierge service and make the most of your stay in Cartagena.
            </motion.p>
            <motion.div
              variants={item}
            >
              <Button
                asChild
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6"
              >
                <a 
                  href="https://wa.me/573054384698?text=¡Hola! Estoy interesado en el servicio de Concierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}