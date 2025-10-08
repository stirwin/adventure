import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Waves,
  Anchor,
  Sailboat,
  Utensils,
  Martini,
  MapPin,
  Compass,
  Map,
  Music,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
export default function IslandsPage() {
  // Activity icons mapping
  const activityIcons = {
    Snorkeling: <Waves className="w-4 h-4 text-blue-500" />,
    "Scuba Diving": <Waves className="w-4 h-4 text-blue-600" />,
    "Beach Relaxation": <Sun className="w-4 h-4 text-yellow-500" />,
    "Island Hopping": <Sailboat className="w-4 h-4 text-blue-400" />,
    "Water Sports": <Waves className="w-4 h-4 text-blue-300" />,
    "Seafood Dining": <Utensils className="w-4 h-4 text-orange-400" />,
    Sunbathing: <Sun className="w-4 h-4 text-yellow-400" />,
    "Boat Parties": <Martini className="w-4 h-4 text-pink-500" />,
    Socializing: <Utensils className="w-4 h-4 text-purple-400" />,
    Dancing: <Music className="w-4 h-4 text-pink-400" />,
    "Resort Stays": <MapPin className="w-4 h-4 text-blue-400" />,
    Kayaking: <Compass className="w-4 h-4 text-blue-300" />,
    "Beach Lounging": <Sun className="w-4 h-4 text-yellow-400" />,
    Relaxation: <Sun className="w-4 h-4 text-yellow-400" />,
    "Beach Walks": <Map className="w-4 h-4 text-blue-400" />,
    "Local Cuisine": <Utensils className="w-4 h-4 text-orange-400" />,
  };
  // Update the islands array to include icons
  const islands = [
    {
      name: "Rosario Islands",
      description:
        "A stunning archipelago located about 45 minutes from Cartagena, known for its crystal-clear waters and vibrant coral reefs. The Rosario Islands National Natural Park protects the coral reef and marine life, making it a perfect spot for snorkeling and diving enthusiasts.",
      image: "/images/islands/rosario-islands.webp",
      activities: [
        "Snorkeling",
        "Scuba Diving",
        "Beach Relaxation",
        "Island Hopping",
      ],
      distance: "45 min by boat",
      highlight: "Coral Reef National Park",
      icon: <Waves className="w-5 h-5 text-blue-500" />,
    },
    {
      name: "Barú Island",
      description:
        "Famous for its breathtaking Playa Blanca, Barú Island offers powdery white sand beaches and turquoise waters. This island is more accessible than the Rosario Islands, connected to the mainland by a bridge, making it a popular day-trip destination.",
      image: "/images/islands/baru-island.webp",
      activities: [
        "Beach Relaxation",
        "Water Sports",
        "Seafood Dining",
        "Sunbathing",
      ],
      distance: "1 hour by car or boat",
      highlight: "Playa Blanca",
      icon: <Sun className="w-5 h-5 text-yellow-500" />,
    },

    {
      name: "Isla Grande",
      description:
        "The largest island in the Rosario archipelago, Isla Grande offers a mix of luxury resorts and pristine beaches. It's an excellent choice for those looking to combine relaxation with water activities in a more exclusive setting.",
      image: "/images/islands/isla-grande.webp",
      activities: ["Resort Stays", "Kayaking", "Snorkeling", "Beach Lounging"],
      distance: "1 hour by boat",
      highlight: "Luxury Resorts",
      icon: <Sailboat className="w-5 h-5 text-blue-500" />,
    },
    {
      name: "Isla Fuerte de Bocachica.",
      description:
        "Isla Fuerte, in the Colombian Caribbean, has a rich history dating back to the indigenous Zenúes who inhabited the island before the arrival of the colonizers. During the colonial era, the island was key to the defense of Cartagena against pirate attacks. Today, it has retained its historical and natural essence, offering a quiet and authentic refuge for travelers seeking to escape the hustle and bustle of the city.",
      image: "/images/islands/isla-fuerte.webp",
      activities: ["Relaxation", "Snorkeling", "Beach Walks", "Local Cuisine"],
      distance: "2 hours by boat",
      highlight: "Serene Beaches",
      icon: <Anchor className="w-5 h-5 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/islands/general.jpg"
            alt="Cartagena Islands"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full px-8 text-white max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Discover Cartagena&apos;s Island Paradise
          </h1>
          <p className="text-xl max-w-2xl">
            Explore the breathtaking islands surrounding Cartagena, where
            crystal-clear waters meet pristine white-sand beaches in the heart
            of the Caribbean.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tropical Island Escapes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Just minutes from the historic city of Cartagena, discover a
            paradise of idyllic islands, each offering its own unique charm.
            From vibrant coral reefs to secluded beaches, our islands provide
            the perfect escape from the ordinary.
          </p>
        </section>

        {/* Island Cards */}
        {/* Island Cards - New Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {islands.map((island) => (
            <div
              key={island.name}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={island.image}
                  alt={island.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      {island.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {island.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-white/90">
                        <MapPin className="w-4 h-4" />
                        <span>{island.distance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">{island.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {island.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {island.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    HIGHLIGHT
                  </h4>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm">
                    {island.icon}
                    {island.highlight}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    ACTIVITIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {island.activities.slice(0, 3).map((activity) => (
                      <span
                        key={activity}
                        className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 text-xs px-3 py-1.5 rounded-full border border-gray-100"
                      >
                        {activityIcons[activity as keyof typeof activityIcons]}
                        {activity}
                      </span>
                    ))}
                    {island.activities.length > 3 && (
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-500 text-xs rounded-full">
                        +{island.activities.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <Button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
                  <a
                    href={`https://wa.me/573054384698?text=¡Hola! Estoy interesado en reservar: ${encodeURIComponent(
                      island.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Island Adventure?
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Let us help you plan the perfect island-hopping experience in
            Cartagena. Our expert guides will ensure you make the most of your
            tropical getaway.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us Today
          </Link>
        </section>
      </main>
    </div>
  );
}
