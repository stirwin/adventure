"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { bars as barsData } from "@/data/bars";

export default function BarsPage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 14 } },
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
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
                Cartagena Nightlife: Where the City Comes Alive
              </motion.h2>
              <motion.div
                variants={item}
                className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300"
              />

              <motion.p
                variants={item}
                className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed max-w-prose"
              >
                Cartagena’s nightlife is electric, diverse, and unforgettable. Whether you’re into sultry salsa, hip-hop, electronic beats, or reggaeton, the city’s bars and clubs keep the energy high every night of the week. Prefer a more laid-back vibe? There are plenty of stylish lounges and live music venues where you can sip cocktails and enjoy the atmosphere. Dancing is at the heart of Cartagena’s nightlife, so if you know a few salsa moves, you’ll fit right in. But don’t worry if you’re not a pro—just watching the city’s talented dancers light up the floor is an experience in itself.
              </motion.p>
              <motion.p
                variants={item}
                className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed max-w-prose"
              >
                The historic center is the epicenter of Cartagena’s nightlife, with an array of trendy clubs and lively bars. The Getsemaní neighborhood, especially along Calle del Arsenal, is packed with exciting nightspots, while the area near the Clock Tower in the walled city is another hotspot for partygoers. Most clubs charge a cover of around $15 USD, which often includes a couple of drinks.
              </motion.p>

              {/* Highlights */}
              <motion.ul variants={item} className="mt-5 flex flex-wrap gap-2">
                <li className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">Salsa & Live Music</li>
                <li className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">Signature Cocktails</li>
                <li className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">VIP Nightlife</li>
              </motion.ul>
            </div>

            {/* Decorative image card */}
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/images/bars/bars.jpeg" alt="Cartagena nightlife" fill className="object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-600">Cartagena by Night</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={container} initial="hidden" animate="show" className="mt-12">
          <motion.div variants={item} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Featured Bars</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-2">Discover Cartagena’s most exclusive and vibrant nightlife hotspots.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {barsData.map((bar, index) => (
              <motion.div
                key={bar.slug}
                variants={item}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image src={bar.image} alt={bar.name} fill className="object-cover" priority={index < 3} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {bar.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 border border-white/60 shadow-sm"
                      >
                        {tag.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{bar.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{bar.shortDescription}</p>
                  <Link href={`/bars/${bar.slug}`} className="block">
                    <Button
                      variant="outline"
                      className="w-full group hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 bg-transparent"
                    >
                      Ver más
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  );
}