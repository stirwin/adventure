"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Yachts", href: "/yachts" },
    { name: "Villas", href: "/villas" },
    { name: "Tours", href: "/tours" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200">
              <Image 
                src="/images/logo.png" 
                alt="Adventure by Colombia team" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
              <span className="font-semibold text-gray-900">ADVENTURE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/573054384698"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/573054384698"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 my-2 px-4 py-2 text-center border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
