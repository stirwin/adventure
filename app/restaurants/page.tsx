"use client";

import { useState, useEffect } from "react";
import { restaurants } from "@/data/restaurants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Extraer todas las categorías de cocina únicas
const allCuisines = [
  "All",
  "Italian",
  "Gastro Labs",
  "Classic Caribbean",
  "Colombian Fusion",
  "International Cuisine",
  "Ceviche Bars",
  "Sushi Spots",
  "Brunch"
];

// Añadir "All" como primera opción
const cuisines = allCuisines;

export default function RestaurantsPage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  // Filtrar restaurantes cuando cambia la categoría seleccionada
  useEffect(() => {
    console.log("Filtrando por:", selectedCuisine);

    if (selectedCuisine === "All") {
      console.log("Mostrando todos los restaurantes");
      setFilteredRestaurants(restaurants);
      return;
    }

    const filtered = restaurants.filter((restaurant) =>
      restaurant.cuisine.some(
        (cuisine) => cuisine.toLowerCase() === selectedCuisine.toLowerCase()
      )
    );

    console.log("Restaurantes filtrados:", filtered);
    setFilteredRestaurants(filtered);
  }, [selectedCuisine]);

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="pt-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            <div className="md:col-span-3">
              <motion.h2
                variants={item}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-amber-500"
              >
                2025 Guide to the Best Restaurants in Cartagena
              </motion.h2>
              <motion.div
                variants={item}
                className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300"
              />

              <motion.p
                variants={item}
                className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed max-w-prose"
              >
                Read on for the highlights of Cartagena&apos;s best restaurants, food, and drinks.
              </motion.p>

              <motion.p
                variants={item}
                className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed max-w-prose"
              >
                Discover the ultimate guide to the best restaurants in Cartagena, Colombia. Whether you&apos;re in the mood for fresh Peruvian ceviche, authentic Italian pasta, gourmet brunch, classic American comfort food, or bold Caribbean flavors, we&apos;ve curated the top dining spots just for you.
              </motion.p>

              <motion.p
                variants={item}
                className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed max-w-prose"
              >
                Explore Cartagena&apos;s diverse culinary scene with handpicked recommendations across every category, including Italian, gastro labs, classic Caribbean, Colombian fusion, international cuisine, ceviche bars, sushi spots, and must-visit brunch destinations.
              </motion.p>

              <motion.p
                variants={item}
                className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed max-w-prose"
              >
                Indulge in unforgettable flavors and elevate your Cartagena dining experience with our expert selections.
              </motion.p>

              {/* Highlights */}
              <motion.ul variants={item} className="mt-5 flex flex-wrap gap-2">
                <li className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                  Fine Dining
                </li>
                <li className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                  Local Cuisine
                </li>
                <li className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                  Waterfront Views
                </li>
                <li className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                  Rooftop Dining
                </li>
                <li className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                  Chef&apos;s Specials
                </li>
              </motion.ul>
            </div>

            {/* Decorative image card */}
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/bars/bars.jpeg"
                    alt="Cartagena nightlife"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-600">Cartagena by Night</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <div id="restaurants-grid" className="scroll-mt-24 ">
          <div className="flex flex-col space-y-8">
            {/* Pestañas de filtrado */}
            <hr className="border-gray-200 my-8" />
            <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-md ${
                    selectedCuisine === cuisine
                      ? 'bg-amber-600 text-white shadow-sm hover:bg-amber-700'
                      : 'text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>

            {/* Contador de resultados */}
            <p className="text-gray-600 text-sm">
              Mostrando {filteredRestaurants.length}{" "}
              {filteredRestaurants.length === 1
                ? "restaurante"
                : "restaurantes"}
              {selectedCuisine !== "All" &&
                ` en la categoría "${selectedCuisine}"`}
            </p>

            {/* Grid de restaurantes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRestaurants.length > 0 ? (
                filteredRestaurants.map((restaurant) => (
                  <motion.article
                    key={restaurant.id}
                    variants={item}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <Link href={`/restaurants/${restaurant.slug}`} className="block h-full">
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={restaurant.image}
                          alt={restaurant.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = `/restaurants/${restaurant.slug}`;
                            }}
                            className="w-full bg-white/90 hover:bg-white text-gray-800 font-medium py-2.5 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-sm border border-gray-200"
                          >
                            <span>View Details</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200 mb-2">
                            {restaurant.name}
                          </h3>
                          <span className="inline-flex items-center bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {restaurant.priceRange}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {restaurant.shortDescription}
                        </p>
                        <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center">
                            <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full">
                              {restaurant.neighborhood}
                            </span>
                          </div>
                          <div className="flex -space-x-1">
                            {restaurant.cuisine.slice(0, 2).map((cuisine, i) => (
                              <span 
                                key={i}
                                className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-2.5 py-1 rounded-full"
                              >
                                {cuisine}
                              </span>
                            ))}
                            {restaurant.cuisine.length > 2 && (
                              <span className="text-xs font-medium text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded-full">
                                +{restaurant.cuisine.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-3 text-center py-16 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-700">No se encontraron restaurantes</h3>
                  <p className="text-gray-500 mt-2">Intenta con otra categoría o vuelve más tarde.</p>
                  <button
                    onClick={() => setSelectedCuisine('All')}
                    className="mt-6 inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2.5 px-6 rounded-md transition-colors duration-200 shadow-sm"
                  >
                    View All Restaurants
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
