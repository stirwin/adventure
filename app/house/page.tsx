"use client";

import React, { useState } from "react";
import { houses } from "@/data/houses";
import { Search, MapPin, Users, Bed, Bath, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HouseCard = ({ house }: { house: typeof houses[0] }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={house.image}
          alt={house.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {house.tag && (
          <div className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
            {house.tag}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">{house.name}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
            <span className="ml-1 text-sm font-medium text-gray-700">5.0</span>
          </div>
        </div>
        
        <div className="mb-3 flex items-center text-sm text-gray-600">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{house.location}</span>
        </div>
        
        <p className="mb-4 text-gray-600">{house.shortDescription}</p>
        
        <div className="mb-4 flex items-center space-x-4 border-b border-t border-gray-100 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="mr-1 h-4 w-4" />
            <span>{house.capacity} guests</span>
          </div>
          {house.bedrooms && (
            <div className="flex items-center text-sm text-gray-600">
              <Bed className="mr-1 h-4 w-4" />
              <span>{house.bedrooms} beds</span>
            </div>
          )}
          {house.bathrooms && (
            <div className="flex items-center text-sm text-gray-600">
              <Bath className="mr-1 h-4 w-4" />
              <span>{house.bathrooms} baths</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          
          <Link 
            href={`/house/${house.slug || house.id}`}
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function HousesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  
  // Get unique locations for filter
  const locations = Array.from(new Set(houses.map(house => house.location)));
  
  // Filter houses based on search term and location
  const filteredHouses = houses.filter(house => {
    const matchesSearch = house.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        house.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        house?.location?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !selectedLocation || house.location === selectedLocation;
    
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pasadia2.jpeg"
            alt="Luxury Villas and houses"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Luxury Villas & houses
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Discover your perfect retreat in the most exclusive locations. Experience comfort, privacy, and exceptional service.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-3xl rounded-lg bg-white p-1 shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-l-lg border-0 bg-gray-50 py-4 pl-10 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-amber-500 sm:text-sm"
                  placeholder="Search by name, location, or feature..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="rounded-r-lg border-0 bg-gray-100 py-4 pl-3 pr-10 text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 md:max-w-xs"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Results Count */}
        <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredHouses.length} {filteredHouses.length === 1 ? 'Property' : 'Properties'} Found
          </h2>
          <div className="mt-4 flex items-center space-x-2 sm:mt-0">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* houses Grid */}
        {filteredHouses.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHouses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Search className="mb-4 h-12 w-12 text-gray-400" />
            <h3 className="text-xl font-medium text-gray-900">No properties found</h3>
            <p className="mt-2 text-gray-600">
              Try adjusting your search or filter to find what you are looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedLocation("");
              }}
              className="mt-4 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}