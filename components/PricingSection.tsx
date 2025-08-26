"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

interface PricingSectionProps {
  isVisible: boolean
}

export default function PricingSection({ isVisible }: PricingSectionProps) {
  return (
    <section
      className={`py-16 px-6 bg-gray-50 transition-all duration-1000 delay-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-green-500">Adventure</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover Colombia with our carefully crafted packages designed for every type of traveler
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Explorer</h3>
              <p className="text-gray-500 mb-4">Perfect for first-time visitors</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-sm text-gray-600 mb-2">Group Size: 2-6 people</div>
                <div className="text-sm text-gray-600 mb-2">Duration: 3 days / 2 nights</div>
                <div className="text-2xl font-bold text-gray-900">$299</div>
                <div className="text-sm text-gray-500">per person</div>
                <div className="text-lg font-semibold text-green-600 mt-2">Total: $598 - $1,794</div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">City walking tour</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Rosario Islands day trip</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Traditional lunch included</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Professional guide</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Transportation included</span>
              </li>
            </ul>

            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-semibold rounded-lg">
              Choose Explorer
            </Button>
          </div>

          {/* Premium Package - Featured */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-500 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4" />
                Most Popular
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Adventurer</h3>
              <p className="text-gray-500 mb-4">Complete Colombian experience</p>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <div className="text-sm text-gray-600 mb-2">Group Size: 2-8 people</div>
                <div className="text-sm text-gray-600 mb-2">Duration: 7 days / 6 nights</div>
                <div className="text-2xl font-bold text-green-500">$599</div>
                <div className="text-sm text-gray-500">per person</div>
                <div className="text-lg font-semibold text-green-600 mt-2">Total: $1,198 - $4,792</div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Everything in Explorer</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Tayrona National Park</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Palenque cultural tour</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Boat rental (half day)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Accommodation included</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">24/7 support</span>
              </li>
            </ul>

            <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 font-semibold rounded-lg">
              Choose Adventurer
            </Button>
          </div>

          {/* Luxury Package */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Luxury</h3>
              <p className="text-gray-500 mb-4">Premium all-inclusive experience</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-sm text-gray-600 mb-2">Group Size: 2-4 people</div>
                <div className="text-sm text-gray-600 mb-2">Duration: 10 days / 9 nights</div>
                <div className="text-2xl font-bold text-gray-900">$1,299</div>
                <div className="text-sm text-gray-500">per person</div>
                <div className="text-lg font-semibold text-green-600 mt-2">Total: $2,598 - $5,196</div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Everything in Adventurer</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Private yacht experience</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Luxury hotel stays</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Private chef experiences</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">VIP airport transfers</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Personal concierge</span>
              </li>
            </ul>

            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-semibold rounded-lg">
              Choose Luxury
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
