"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"
import Image from "next/image"

interface CompanyInfoProps {
  isVisible: boolean
}

export default function CompanyInfo({ isVisible }: CompanyInfoProps) {
  return (
    <motion.section 
      className="py-16 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Company Info */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              About <span className="text-green-500">ADVENTURE BY COLOMBIA</span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">2+</div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Years of Experience</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">1000+</div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Satisfied Travelers</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">50+</div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Unique Experiences</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">24/7</div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Customer Support</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 sm:p-6 rounded-2xl border border-green-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-green-500 text-2xl sm:text-4xl font-bold leading-none mt-1">❝</div>
                  <div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      As Cartagena  &apos;s most experienced adventure tourism company, we&apos;ve been creating unforgettable experiences for over 2 years. 
                      Our commitment to safety, professionalism, and authentic local experiences has made us the top choice for travelers seeking 
                      the very best of Colombia&apos;s Caribbean coast.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Every adventure is carefully curated and led by our certified guides, ensuring your safety while you create 
                      memories that will last a lifetime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="https://wa.me/573054384698" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 font-medium text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex-1 sm:flex-none sm:px-6"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat with us
                </a>
                <a 
                  href="tel:+573054384698" 
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2.5 font-medium text-sm rounded-lg shadow hover:shadow-md transition-all duration-200 flex-1 sm:flex-none sm:px-6"
                >
                  <Phone className="w-4 h-4" />
                  Call us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Company Image */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/colombian-guide-cartagena.png"
                alt="Adventure by Colombia team"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-green-500 text-white p-3 sm:p-4 rounded-2xl shadow-lg">
              <p className="text-xl sm:text-2xl font-bold">2+</p>
              <p className="text-xs sm:text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
