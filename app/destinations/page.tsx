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
      {/* CATALOG HEADER */}
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-1.5 bg-green-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-green-600 tracking-wider">EXPLORA NUESTRAS OPCIONES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Nuestro <span className="text-green-600">Exclusivo</span> Catálogo
          </h1>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Descubre nuestra selección premium de alojamientos en la costa Caribe colombiana
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar destinos..."
                className="w-full text-sm pl-9 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>

            <div className="flex gap-2 items-center flex-wrap">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="text-sm appearance-none pl-9 pr-8 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                >
                  {regions.map((r) => (
                    <option key={r} value={r}>{r === "all" ? "Todas las regiones" : r}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <input 
                  type="number" 
                  placeholder="Mín" 
                  className="w-20 text-sm px-3 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" 
                  value={minPrice} 
                  onChange={e => setMinPrice(e.target.value)} 
                />
                <span className="text-gray-400 text-sm">-</span>
                <input 
                  type="number" 
                  placeholder="Máx" 
                  className="w-20 text-sm px-3 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" 
                  value={maxPrice} 
                  onChange={e => setMaxPrice(e.target.value)} 
                />
              </div>

              <select 
                value={sort} 
                onChange={e => setSort(e.target.value)} 
                className="text-sm px-3 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Precio: Menor a mayor</option>
                <option value="price-desc">Precio: Mayor a menor</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="ax-w-7xl mx-auto px-34 mt-8">
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
        <h3 className="text-2xl font-bold">Can&apos;t find the right trip?</h3>
        <p className="text-blue-100 mt-3 max-w-2xl mx-auto">Our team can build a custom itinerary for groups and special events — contact us and we&apos;ll make it happen.</p>
        <a href="https://wa.me/573054384698?text=Hola%2C%20necesito%20un%20itinerario%20personalizado" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100">Contact Us</a>
      </div>
    </main>
  )
}
