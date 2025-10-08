"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { houses } from "@/data/houses";
import { MapPin, Users, Bed, Bath, Star, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function HouseDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [mainImage, setMainImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [house, setHouse] = useState<(typeof houses)[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Add these state variables at the top of your component with other useState hooks
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    // Get the slug from the URL
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    if (!slug) {
      setIsLoading(false);
      return;
    }

    // Find the house with the matching slug
    const foundHouse = houses.find((h) => h.slug === slug);
    setHouse(foundHouse || null);
    setIsLoading(false);

    // Log for debugging
    console.log("Slug:", slug);
    console.log("Found house:", foundHouse);
    console.log(
      "All houses:",
      houses.map((h) => h.slug)
    );
  }, [params]);

  // Add this function before the return statement
  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    const message = `Hello! I'm interested in booking ${
      house?.name
    } from ${checkIn} to ${checkOut} for ${guests} ${
      guests === 1 ? "guest" : "guests"
    }. Could you please confirm availability?`;

    // Replace with your WhatsApp number (include country code, remove any spaces or special characters)
    const phoneNumber = "573054384698";

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!house) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          House not found
        </h1>
        <button
          onClick={() => router.back()}
          className="flex items-center text-amber-600 hover:text-amber-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to properties
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Property title and rating */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {house.name}
              </h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{house.location}</span>
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex items-center bg-amber-50 px-3 py-1 rounded-full">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="ml-1 font-medium">5.0</span>
                <span className="ml-1 text-gray-500">(24 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-3 rounded-xl overflow-hidden">
            <div className="relative h-96 w-full">
              <Image
                src={house?.images?.[mainImage] || house?.image}
                alt={house.name}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 h-96 overflow-y-auto">
            {house?.images?.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(index)}
                className={`relative h-44 rounded-lg overflow-hidden transition-opacity ${
                  mainImage === index
                    ? "ring-2 ring-amber-500"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${house.name} - ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Property highlights */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <Users className="w-6 h-6 text-amber-500 mb-1" />
                  <span className="text-sm text-gray-500">Guests</span>
                  <span className="font-medium">{house.capacity}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bed className="w-6 h-6 text-amber-500 mb-1" />
                  <span className="text-sm text-gray-500">Bedrooms</span>
                  <span className="font-medium">{house.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bath className="w-6 h-6 text-amber-500 mb-1" />
                  <span className="text-sm text-gray-500">Bathrooms</span>
                  <span className="font-medium">{house.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">🏠</span>
                  <span className="text-sm text-gray-500">Size</span>
                  <span className="font-medium">-</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "description"
                        ? "border-amber-500 text-amber-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab("amenities")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "amenities"
                        ? "border-amber-500 text-amber-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Amenities
                  </button>
                </nav>
              </div>

              {/* Tab content */}
              <div className="py-6">
                {activeTab === "description" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      About this property
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {house.shortDescription}
                    </p>
                    <div className="space-y-4">
                      {house?.features?.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "amenities" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">
                      What this place offers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          General Amenities
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <span className="text-lg mr-2">❄️</span>
                            <span>Air Conditioning</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-lg mr-2">📶</span>
                            <span>WiFi</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-lg mr-2">📺</span>
                            <span>TV</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-lg mr-2">🍳</span>
                            <span>Kitchen</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          Outdoor
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <span className="text-lg mr-2">🏊</span>
                            <span>Pool</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-lg mr-2">🚗</span>
                            <span>Parking</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-lg mr-2">🌳</span>
                            <span>Garden</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    ${house.pricePerNight.toLocaleString()}
                  </p>
                  <p className="text-gray-500">per night</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="ml-1">5.0</span>
                  <span className="text-gray-500 ml-1">(24)</span>
                </div>
              </div>
              <form className="space-y-4" onSubmit={handleCheckAvailability}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="check-in"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Check-in
                    </label>
                    <input
                      type="date"
                      id="check-in"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      min={new Date().toISOString().split("T")[0]} // Prevent selecting past dates
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="check-out"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Check-out
                    </label>
                    <input
                      type="date"
                      id="check-out"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      min={checkIn || new Date().toISOString().split("T")[0]} // Can't be before check-in
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Guests
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    >
                      {[...Array(house.capacity || 1)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Check availability
                </button>
              </form>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Need help with your booking?</p>
              <Link href="/contact" className="text-amber-600 hover:underline">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed bottom CTA on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-amber-600 font-bold">
              ${house.pricePerNight.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">per night</p>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
