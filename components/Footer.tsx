"use client"

import { Button } from "@/components/ui/button"
import { Plane, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Plane className="w-6 h-6 text-green-400" />
              <span className="text-xl font-bold">ADVENTURE BY COLOMBIA</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the magic of Cartagena with our premium travel services. From luxury accommodations to
              unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
                <span className="text-xs font-bold">ig</span>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
                <span className="text-xs font-bold">tw</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Vacation Rentals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Tours & Day Trips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Boat Rentals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Yacht Charters
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Luxury Villas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Colonial Houses
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Popular Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Islas del Rosario
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Parque Tayrona
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  San Basilio de Palenque
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Mompox
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Santa Marta
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-0.5 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300">Cartagena de Indias, Colombia</p>
                  <p className="text-gray-300">Centro Histórico</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                <p className="text-gray-300">+57 300 123 4567</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                <p className="text-gray-300">info@adventurebycolombia.com</p>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4 w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Adventure by Colombia. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
