"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Plane } from "lucide-react"
import { destinations, type Destination } from "@/data/destinations"

export default function DestinationsPage() {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState<string>("all")
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")
  const [sort, setSort] = useState<string>("featured")

  const regions = useMemo(() => ["all", ...Array.from(new Set(destinations.map(d => d.region ?? "Other")) )], [])

  const filtered = useMemo(() => {
    return destinations
      .filter((d) => {
        const q = search.trim().toLowerCase()
        const matchesSearch = !q || d.name.toLowerCase().includes(q) || d.shortDescription.toLowerCase().includes(q)
        const matchesRegion = region === "all" || (d.region ?? "Other") === region
        const matchesMin = !minPrice || (d.priceFrom ?? 0) >= Number(minPrice)
        const matchesMax = !maxPrice || (d.priceFrom ?? 0) <= Number(maxPrice)
        return matchesSearch && matchesRegion && matchesMin && matchesMax
      })
      .sort((a, b) => {
        if (sort === "price-asc") return (a.priceFrom ?? 0) - (b.priceFrom ?? 0)
        if (sort === "price-desc") return (b.priceFrom ?? 0) - (a.priceFrom ?? 0)
        return 0 // featured: keep original order
      })
  }, [search, region, minPrice, maxPrice, sort])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="relative h-64 md:h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative max-w-7xl mx-auto mb-2 h-full flex flex-col justify-center px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Discover Cartagena & Nearby Destinations</h1>
          <p className="text-lg text-blue-100 max-w-2xl mt-3">Hand-picked day trips, cultural escapes and coastal adventures — curated for a modern travel experience.</p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search destinations, activities..."
                className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex gap-3 items-center flex-wrap">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {regions.map((r) => (
                    <option key={r} value={r}>{r === "all" ? "All regions" : r}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input type="number" placeholder="Min" className="w-24 px-3 py-2 border border-gray-200 rounded-lg bg-white" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                <span className="text-gray-400">-</span>
                <input type="number" placeholder="Max" className="w-24 px-3 py-2 border border-gray-200 rounded-lg bg-white" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
              </div>

              <select value={sort} onChange={e => setSort(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg bg-white">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">{filtered.length} {filtered.length === 1 ? "destination" : "destinations"} available</h2>
            <div className="text-sm text-gray-600">Showing results</div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <p className="text-gray-700">No destinations found. Try adjusting filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((d: Destination) => (
                <article key={d.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="relative h-48">
                    <Image src={d.image} alt={d.name} fill className="object-cover" />
                    {d.tag && <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{d.tag}</div>}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{d.name}</h3>
                        <p className="text-sm text-gray-500">{d.region}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">{d.currency ?? "USD"} {d.priceFrom}</p>
                        <p className="text-sm text-gray-500">from</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{d.shortDescription}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                          <Plane className="w-4 h-4 text-gray-500" />
                          <span>{d.duration ?? "Varies"}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link href={`/destinations/${d.slug ?? d.id}`} className="inline-flex items-center px-3 py-2 border border-transparent rounded-md text-sm font-medium text-gray-800 bg-white hover:bg-gray-100">Details</Link>
                        <a href={`https://wa.me/573054384698?text=Hola%20necesito%20info%20de%20${encodeURIComponent(d.name)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700">Book</a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 mb-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold">Can't find the right trip?</h3>
          <p className="text-blue-100 mt-3 max-w-2xl mx-auto">Our team can build a custom itinerary for groups and special events — contact us and we'll make it happen.</p>
          <a href="https://wa.me/573054384698?text=Hola%2C%20necesito%20un%20itinerario%20personalizado" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100">Contact Us</a>
        </div>
      </div>
    </main>
  )
}
