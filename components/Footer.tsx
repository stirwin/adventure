"use client"

import { Plane, MessageCircle, Mail, Phone, Instagram } from "lucide-react"
import Link from "next/link"

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
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/adventurebycolombia?utm_source=qr&igsh=OGhrdGtxdmVoM24=" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://wa.me/573054384698" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  Vacation Rentals
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  Tours & Day Trips
                </Link>
              </li>
              <li>
                <Link href="/yachts" className="text-gray-300 hover:text-white transition-colors">
                  Boat Rentals
                </Link>
              </li>
              <li>
                <Link href="/yachts" className="text-gray-300 hover:text-white transition-colors">
                  Yacht Charters
                </Link>
              </li>
              <li>
                <Link href="/houses" className="text-gray-300 hover:text-white transition-colors">
                  Luxury Villas
                </Link>
              </li>
              <li>
                <Link href="/houses" className="text-gray-300 hover:text-white transition-colors">
                  Colonial Houses
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Things to do</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/places" className="text-gray-300 hover:text-white transition-colors">
                  Historic center
                </Link>
              </li>
              <li>
                <Link href="/places" className="text-gray-300 hover:text-white transition-colors">
                  Palacio de la Inquisición
                </Link>
              </li>
              <li>
                <Link href="/places" className="text-gray-300 hover:text-white transition-colors">
                  San Basilio de Palenque
                </Link>
              </li>
              <li>
                <Link href="/places" className="text-gray-300 hover:text-white transition-colors">
                  Museo del Oro de Cartagena                
                </Link>
              </li>
              <li>
                <Link href="/places" className="text-gray-300 hover:text-white transition-colors">
                  Convento de la Popa                
                </Link>
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
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a href="tel:+573054384698" className="text-gray-300 hover:text-white transition-colors">
                  +57 305 438 4698
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a href="mailto:adventurebycolombia@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  adventurebycolombia@gmail.com
                </a>
              </div>
              <a 
                href="https://wa.me/573054384698" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4 w-full transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Adventure by Colombia. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
          
            <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service and Privacy Policy
            </Link>
          
          </div>
        </div>
      </div>
    </footer>
  )
}
