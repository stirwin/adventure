"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Search, Filter, MessageCircle, Info } from "lucide-react";
import { destinations, type Destination } from "@/data/destinations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [sort, setSort] = useState<string>("featured");

  /**
   * Convierte un string de precio (ej. "COP $150.000", "$460.000", "150000")
   * a un número entero. Si no puede parsear devuelve 0.
   */
  function parsePriceToNumber(priceStr?: string): number {
    if (!priceStr) return 0;
    // quitar moneda y espacios, conservar dígitos
    const cleaned = String(priceStr)
      .replace(/\./g, "") // quita separadores de miles como 150.000 -> 150000
      .replace(/,/g, "") // quita comas si las hubiera
      .replace(/[^\d]/g, ""); // deja solo dígitos
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : 0;
  }

  const filtered = useMemo(() => {
    // guardamos el array original para no mutarlo
    const list = Array.isArray(destinations) ? destinations : [];

    const q = search.trim().toLowerCase();

    const result = list.filter((d) => {
      // búsqueda (title o description)
      const matchesSearch =
        !q ||
        d.title.toLowerCase().includes(q) ||
        (d.description && d.description.toLowerCase().includes(q));

      // obtener valor númerico del precio adulto (si existe)
      const priceNumber = parsePriceToNumber(d.price?.adults);

      const matchesMin = !minPrice || priceNumber >= Number(minPrice);
      const matchesMax = !maxPrice || priceNumber <= Number(maxPrice);

      return matchesSearch && matchesMin && matchesMax;
    });

    // ordenamiento
    result.sort((a, b) => {
      const pa = parsePriceToNumber(a.price?.adults);
      const pb = parsePriceToNumber(b.price?.adults);

      if (sort === "price-asc") return pa - pb;
      if (sort === "price-desc") return pb - pa;
      // featured: mantener orden original del array (no hacer nada)
      return 0;
    });

    return result;
  }, [search, minPrice, maxPrice, sort]);
  return (
    <main className="min-h-screen bg-gray-50">
      {/* CATALOG HEADER */}
     
    <div className="relative h-[60vh] min-h-[360px] flex items-center justify-center overflow-hidden border-b border-gray-100">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/pasadias/principal.jpg"
      alt="Hero Background"
      fill
      className="object-cover"
      priority
    />
    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
    <div className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
      <span className="text-sm font-semibold text-green-700 tracking-wide">
        EXPLORA NUESTRAS OPCIONES
      </span>
    </div>

    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
      Nuestro <span className="text-green-400">Exclusivo</span> Catálogo
    </h1>

    <div className="w-20 h-1 bg-green-400 mx-auto mb-8" />

    <p className="text-lg text-gray-100 font-light mx-auto max-w-2xl drop-shadow-md">
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
              </div>

              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  placeholder="Mín"
                  className="w-20 text-sm px-3 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className="text-gray-400 text-sm">-</span>
                <input
                  type="number"
                  placeholder="Máx"
                  className="w-20 text-sm px-3 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
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
      {/* RESULTS */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p: Destination) => {
            const price =
              p.price?.adults ??
              Object.values(p.serviceOptions ?? {})[0]?.price ??
              "Consultar";

            return (
              <article
                key={p.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-56">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                      {p.tag}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {p.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-right">
                      <span className="text-sm text-gray-500">Desde</span>
                      <p className="text-lg font-bold text-gray-900">{price}</p>
                    </div>

                    {/* Aquí mantenemos el Dialog con p */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                          <Info className="w-4 h-4" />
                          Ver detalles
                        </button>
                      </DialogTrigger>

                      <DialogContent
                        className="
    p-0 
    max-w-3xl w-[95vw] 
    max-h-[90vh] 
    overflow-hidden 
    rounded-2xl 
    bg-white
    flex 
    flex-col
  "
                      >
                        <DialogHeader className="">
                          <DialogTitle>{p.title}</DialogTitle>
                        </DialogHeader>
                        {/* Imagen */}
                        <div className="relative w-full h-48 sm:h-64">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Contenido scrollable */}
                        <div
                          className="
      flex-1 overflow-y-auto
      px-6 py-5 
      space-y-6
      scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300
    "
                        >
                          {/* Título */}
                          <h2 className="text-xl font-bold text-gray-800 text-center">
                            {p.title}
                          </h2>

                          {/* Secciones Dinámicas */}
                          {p.description && (
                            <div>
                              <h3 className="font-semibold mb-1">
                                Descripción
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {p.description}
                              </p>
                            </div>
                          )}

                          {p.includes && (
                            <div>
                              <h3 className="font-semibold mb-1">Incluye</h3>
                              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                {p.includes.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {p.services && (
                            <div>
                              <h3 className="font-semibold mb-1">Servicios</h3>
                              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                {p.services.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Información adicional opcional */}
                          {p.notes?.length ? (
                            <div>
                              <h3 className="font-semibold mb-1">Notas</h3>
                              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                {p.notes.map((n, i) => (
                                  <li key={i}>{n}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </div>

                        {/* CTA sticky abajo */}
                        <div
                          className="
      border-t p-4 
      flex justify-center 
      sticky bottom-0 
      bg-white 
      shadow-lg
    "
                        >
                          <a
                            href={`https://wa.me/573054384698?text=Hola!%20Quiero%20información%20del%20pasadía:%20${encodeURIComponent(
                              p.title
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
        inline-flex items-center gap-2
        px-6 py-3 
        bg-green-600 hover:bg-green-700
        text-white font-semibold rounded-lg
        transition-all
      "
                          >
                            <MessageCircle className="w-5 h-5" />
                            Reservar
                          </a>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 mb-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold">Can&apos;t find the right trip?</h3>
        <p className="text-blue-100 mt-3 max-w-2xl mx-auto">
          Our team can build a custom itinerary for groups and special events —
          contact us and we&apos;ll make it happen.
        </p>
        <a
          href="https://wa.me/573054384698?text=Hola%2C%20necesito%20un%20itinerario%20personalizado"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}