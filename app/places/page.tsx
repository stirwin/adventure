"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const places = [
  {
    title: "Castillo de San Felipe de Barajas",
    description:
      "Immerse yourself in the history of Cartagena with a visit to the Castillo de San Felipe de Barajas, the largest fortress in Latin America. This impressive monument, built to protect the city from pirates, will take you through secret tunnels and walls that guard centuries of history; enjoy spectacular views of the sea and the city as you walk through a place full of magic and mystery!",
    image: "/images/places/castillo-san-felipe.webp",
  },
  {
    title: "Centro Histórico de Cartagena",
    description:
      "Discover the soul of Cartagena in its historic centre, a place where time seems to have stood still. Stroll through its cobbled streets, surrounded by colourful colonial houses, charming plazas and architecture that tells the story of centuries past. Visiting this World Heritage Site is a unique experience that will take you back to the colonial Cartagena of yesteryear.",
    image: "/images/places/centro-historico.webp",
  },
  {
    title: "Murallas de Cartagena",
    description:
      "The Walls of Cartagena are an impressive testimony to the struggle to defend the city. Walk along these ancient walls, built to protect the city from invasion, and enjoy incomparable panoramic views of the Caribbean Sea. Every step you take will connect you to history as you marvel at the majesty of one of the largest fortifications in the Americas.",
    image: "/images/places/murallas.webp",
  },
  {
    title: "Torre del Reloj",
    description:
      "You can't leave Cartagena without seeing its emblematic clock tower. This historic monument welcomes you to the historic centre, where every corner is steeped in history. With its imposing clock marking the passage of time, it is the perfect place to make unforgettable memories and enjoy the vibrant local life.",
    image: "/images/places/torre-reloj.webp",
  },
  {
    title: "Palacio de la Inquisición",
    description:
      "Enter the Palace of the Inquisition, an impressive colonial building that takes you back to a dark time in history. Today it is a fascinating museum where you can learn about the history of the Inquisition in Cartagena and admire its colonial architecture. This is the perfect place for history and culture lovers who are looking for a different and in-depth account of the city.",
    image: "/images/places/palacio-inquisicion.webp",
  },
  {
    title: "Monumento a los Zapatos Viejos",
    description:
      "Experience local folklore at the Monumento a los Zapatos Viejos, a unique sculpture that celebrates the popular song that has left its mark on Cartagena. This modern monument on Bocagrande Beach is the perfect place to take photos and learn more about the music and traditions of the region – stop by and take a piece of Cartagena with you!",
    image: "/images/places/zapatos-viejos.webp",
  },
  {
    title: "Convento de la Popa",
    description:
      "Climb to the top of the city and discover the Convento de la Popa, a place full of spirituality and history. From its highest point, you will enjoy spectacular views of Cartagena and the Caribbean Sea. A place of peace, ideal to disconnect, admire the city and immerse yourself in a unique atmosphere of tranquility and historical beauty.",
    image: "/images/places/convento-popa.webp",
  },
  {
    title: "Museo del Oro de Cartagena",
    description:
      "Embark on a journey into the pre-Hispanic past at Cartagena's Gold Museum. Here you will discover an impressive collection of art and jewelry from Colombia's ancient indigenous cultures. Each piece of gold tells a fascinating story about the civilizations that inhabited the region. If you are a lover of history and art, this museum is a must on your itinerary.",
    image: "/images/places/museo-oro.webp",
  },
];

export default function PlacesPage() {
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
                Must-Visit Places in Cartagena
              </motion.h2>
              <motion.div
                variants={item}
                className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300"
              />

              <motion.p
                variants={item}
                className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed max-w-prose"
              >
                Cartagena is a city full of history, culture, and breathtaking
                landscapes. From its charming walled city to its stunning
                beaches, there are plenty of places to explore. Walk through the
                colorful streets of the historic center, visit the San Felipe de
                Barajas Castle, or relax on the beautiful Rosario Islands.
                Whether you&apos;re looking for history, adventure, or relaxation,
                Cartagena has something for everyone.
              </motion.p>
            </div>

            <motion.div
              variants={item}
              className="md:col-span-2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/places/general.webp"
                alt="Cartagena Historic Center"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Places Grid */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {places.map((place) => (
              <motion.article
                key={place.title}
                variants={item}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      {place.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {place.description}
                  </p>

                  <Button
                    asChild
                    className="group/button mt-2 bg-amber-500 hover:bg-amber-600 text-white transition-colors"
                  >
                    <a
                      href={`https://wa.me/573054384698?text=¡Hola! Estoy interesado en reservar: ${encodeURIComponent(
                        place.title
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
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
