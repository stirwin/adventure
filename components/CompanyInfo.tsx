"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

interface CompanyInfoProps {
  isVisible: boolean
}

export default function CompanyInfo({ isVisible }: CompanyInfoProps) {
  return (
    <section
      className={`py-16 px-6 bg-white transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Company Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-green-500">ADVENTURE BY COLOMBIA</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">More than 1000+</p>
                  <p className="text-sm text-gray-500">Happy Travelers</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="text-green-500 text-4xl font-bold">&quot;aaa</div>
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      We are passionate about showcasing the beauty and culture of Colombia. Our expert team creates
                      unforgettable adventures that connect you with the authentic spirit of Cartagena and beyond.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Carlos Rodriguez</p>
                        <p className="text-sm text-gray-500">Founder & CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat with us
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Company Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/colombian-guide-cartagena.png"
                alt="Adventure by Colombia team"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-2xl shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
