"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, Anchor, Users, Bed, Bath } from 'lucide-react'
import { yachts, type Yacht } from '@/data/yachts'

export default function YachtsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  type Category = Yacht['category'] | 'all'
  
  const [filters, setFilters] = useState<{
    category: Category
    minPrice: string
    maxPrice: string
    capacity: string
  }>({
    category: 'all',
    minPrice: '',
    maxPrice: '',
    capacity: ''
  })

  const filteredYachts = yachts.filter((yacht: Yacht) => {
    const matchesSearch = yacht.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      yacht.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = filters.category === 'all' || yacht.category === filters.category
    const matchesPrice = (!filters.minPrice || yacht.pricePerDay >= Number(filters.minPrice)) &&
      (!filters.maxPrice || yacht.pricePerDay <= Number(filters.maxPrice))
    const matchesCapacity = !filters.capacity || yacht.capacity >= Number(filters.capacity)

    return matchesSearch && matchesCategory && matchesPrice && matchesCapacity
  })

  const categories: Category[] = ['all', ...new Set<Yacht['category']>(yachts.map(yacht => yacht.category))]
  const capacities = [...new Set(yachts.map(yacht => yacht.capacity).sort((a: number, b: number) => a - b))]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/30">
          <Image
            src="/images/baru.jpg"
            alt="Luxury yachts in Cartagena"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Luxury Yacht Fleet</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Discover the perfect yacht for your next adventure in the beautiful waters of Cartagena
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search yachts..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4 flex-wrap">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value as Category})}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min price"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max price"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                />
              </div>

              <select
                className="px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filters.capacity}
                onChange={(e) => setFilters({...filters, capacity: e.target.value})}
              >
                <option value="">Any capacity</option>
                {capacities.map((capacity) => (
                  <option key={capacity} value={capacity}>
                    {capacity}+ people
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Yachts Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredYachts.length} {filteredYachts.length === 1 ? 'Yacht' : 'Yachts'} Available
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="text-sm border-0 focus:ring-2 focus:ring-blue-500 rounded-lg">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Capacity</option>
              </select>
            </div>
          </div>

          {filteredYachts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No yachts found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredYachts.map((yacht: Yacht) => (
                <div key={yacht.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="relative h-64">
                    <Image
                      src={yacht.image}
                      alt={yacht.name}
                      fill
                      className="object-cover"
                    />
                    {yacht.tag && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {yacht.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{yacht.name}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {yacht.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{yacht.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>Up to {yacht.capacity} people</span>
                      </div>
                      {yacht.bedrooms !== undefined && (
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-gray-500" />
                          <span>{yacht.bedrooms} cabins</span>
                        </div>
                      )}
                      {yacht.bathrooms !== undefined && (
                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4 text-gray-500" />
                          <span>{yacht.bathrooms} bathrooms</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Anchor className="w-4 h-4 text-gray-500" />
                        <span className="truncate">{yacht.features?.[0]}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            ${yacht.pricePerDay.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500">per day</p>
                        </div>
                        <Link 
                          href={`https://wa.me/573054384698?text=Hola%2C%20estoy%20interesado%20en%20rentar%20el%20yate%20${encodeURIComponent(yacht.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact our yacht specialists to help you find the perfect vessel for your needs.
          </p>
          <a
            href="https://wa.me/573054384698?text=Hola%2C%20necesito%20ayuda%20para%20encontrar%20el%20yate%20perfecto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  )
}