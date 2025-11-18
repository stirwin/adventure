"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search,  Anchor, Users, Bed, Bath } from "lucide-react";
import { yachts } from "@/data/yachts";

//type Category 
type Category = string | "all";

interface Yacht {
  id: string | number;
  name: string;
  description: string;
  category: string;
  pricePerDay: number;
  capacity: number;
  bedrooms?: number;
  bathrooms?: number;
  tag?: string;
  image: string;
  features?: string[];
}

export default function YachtsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<{
    category: Category;
    minPrice: string;
    maxPrice: string;
    capacity: string;
  }>({
    category: "all",
    minPrice: "",
    maxPrice: "",
    capacity: "",
  });

  const filteredYachts = yachts.filter((yacht: Yacht) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      yacht.name.toLowerCase().includes(searchLower) ||
      yacht.description.toLowerCase().includes(searchLower) ||
      yacht.features?.some((feature) =>
        feature.toLowerCase().includes(searchLower)
      );

    const matchesCategory =
      filters.category === "all" || yacht.category === filters.category;
    const matchesPrice =
      (!filters.minPrice || yacht.pricePerDay >= Number(filters.minPrice)) &&
      (!filters.maxPrice || yacht.pricePerDay <= Number(filters.maxPrice));
    const matchesCapacity =
      !filters.capacity || yacht.capacity >= Number(filters.capacity);

    return matchesSearch && matchesCategory && matchesPrice && matchesCapacity;
  });

  const categories = ["all", ...new Set(yachts.map((y) => y.category))];
  
  const [sortBy, setSortBy] = useState("Featured");
  const sortedYachts = [...filteredYachts];

  if (sortBy === "Price: Low to High") {
    sortedYachts.sort((a, b) => a.pricePerDay - b.pricePerDay);
  } else if (sortBy === "Price: High to Low") {
    sortedYachts.sort((a, b) => b.pricePerDay - a.pricePerDay);
  } else if (sortBy === "Capacity") {
    sortedYachts.sort((a, b) => b.capacity - a.capacity);
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/baru.jpg"
            alt="Luxury Yachts in Cartagena"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Luxury Yachts
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Discover your perfect yacht for an unforgettable experience in the
            beautiful waters of Cartagena.
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
                  className="block w-full rounded-l-lg border-0 bg-gray-50 py-4 pl-10 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  placeholder="Search by name, description, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="rounded-r-lg border-0 bg-gray-100 py-4 pl-3 pr-10 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 md:max-w-xs"
                value={filters.category}
                onChange={(e) =>
                  setFilters({ ...filters, category: e.target.value })
                }
              >
                <option value="all">All Categories</option>
                {categories
                  .filter((cat) => cat !== "all")
                  .map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Yachts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredYachts.length}{" "}
            {filteredYachts.length === 1 ? "Yacht" : "Yachts"} Available
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="text-sm border-0 focus:ring-2 focus:ring-blue-500 rounded-lg"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}>
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Capacity</option>
            </select>
          </div>
        </div>

        {filteredYachts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No yachts found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedYachts.map((yacht) => (
              <div
                key={yacht.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
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
                    <h3 className="text-xl font-bold text-gray-900">
                      {yacht.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {yacht.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {yacht.description}
                  </p>

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
                      
                      <Link
                        href={`https://wa.me/573054384698?text=Hola%2C%20estoy%20interesado%20en%20rentar%20el%20yate%20${encodeURIComponent(
                          yacht.name
                        )}`}
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
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-center text-white mx-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Can&apos;t find what you&apos;re looking for?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Contact our yacht specialists to help you find the perfect vessel for
          your needs.
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
  );
}
