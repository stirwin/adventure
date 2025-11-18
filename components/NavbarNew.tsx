"use client";

import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Instagram } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import React from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [position, setPosition] = React.useState("bars");

  return (
    <div className="relative ">
      {/* Header */}
      <motion.header
        className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 bg-transparent"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
      >
        {/* Logo */}
        <motion.a
          className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border rounded-full px-3 sm:px-4 py-1.5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/"
        >
          <Image
            src="/images/logo.png"
            alt="Adventure by Colombia team"
            width={20}
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span className="font-semibold text-gray-900 text-sm sm:text-base">
            ADVENTURE
          </span>
        </motion.a>

        {/* Navigation - Hidden on mobile */}
        <motion.nav
          className="hidden md:flex items-center gap-4 lg:gap-6 bg-white/90 backdrop-blur-sm border rounded-full px-4 lg:px-6 py-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["HOUSE", "BOAT RENTALS", "TOURS"].map((item) => (
            <motion.a
              key={item}
              href={
                item === "BOAT RENTALS"
                  ? "/yachts"
                  : item === "HOUSE"
                  ? "/house"
                  : item === "TOURS"
                  ? "/destinations"
                  : "#"
              }
              className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {item}
            </motion.a>
          ))}
          {["SERVICES", "THING TO DO"].map((item) => (
            <div key={item} className="relative group">
              {item === "THING TO DO" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm flex items-center gap-1"
                      whileHover={{ y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {item} <ChevronDown className="w-3 h-3" />
                    </motion.a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-auto">
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={(val) => {
                        setPosition(val);
                        if (val === "bars") router.push("/bars");
                        if (val === "restaurants") router.push("/restaurants");
                        if (val === "islands") router.push("/islands");
                        if (val === "places") router.push("/places");
                      }}
                    >
                      <DropdownMenuRadioItem value="bars">
                        Bars
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="restaurants">
                        Restaurantes
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="islands">
                        Islas
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="places">
                        Lugares en Cartagena
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item === "SERVICES" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm flex items-center gap-1"
                      whileHover={{ y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {item} <ChevronDown className="w-3 h-3" />
                    </motion.a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-auto">
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={(val) => {
                        setPosition(val);
                        // Add your routes for services here
                        if (val === "concierge")
                          router.push("/services/concierge");
                        if (val === "production")
                          router.push("/services/production");
                        if (val === "transportation")
                          router.push("/services/transportation");
                        if (val === "chef") router.push("/services/chef");
                      }}
                    >
                      <DropdownMenuRadioItem value="concierge">
                        Concierge Services
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="production">
                        Producción
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="transportation">
                        Transportation
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="chef">
                        Chef Privado
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <motion.a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm flex items-center gap-1"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item} <ChevronDown className="w-3 h-3" />
                </motion.a>
              )}
            </div>
          ))}
        </motion.nav>

        {/* Contact Button */}
        <motion.div
          className="flex items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative overflow-hidden rounded-md">
            <motion.div
              className="absolute inset-0 bg-black/10"
              whileHover={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/573054384698"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="currentColor"
              role="img"
            >
              <title>WhatsApp</title>
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </Link>
          
          {/* Instagram Button */}
          <Link
            href="https://www.instagram.com/adventurebycolombia?utm_source=qr&igsh=OGhrdGtxdmVoM24="
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.header>

      {/* Breadcrumbs */}
      {pathname !== "/" && (
        <div className="absolute top-[56px] inset-x-0 z-40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm text-gray-700 rounded-full">
              <Link
                href="/"
                className="inline-flex items-center gap-1 hover:text-gray-900"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Home /</span>
              </Link>

              {pathname
                .split("/")
                .filter(Boolean)
                .map((seg, idx, arr) => (
                  <React.Fragment key={idx}>
                    <span className="text-gray-400">/</span>
                    <Link
                      href={`/${arr.slice(0, idx + 1).join("/")}`}
                      className={`hover:text-gray-900 transition-colors ${
                        idx === arr.length - 1
                          ? "font-medium text-gray-900"
                          : ""
                      }`}
                    >
                      {seg
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  </React.Fragment>
                ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
