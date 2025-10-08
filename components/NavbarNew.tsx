"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
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
              href={item === 'BOAT RENTALS' ? '/yachts' : item === 'HOUSE' ? '/house' : '#'}
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
                        if (val === "places")
                          router.push("/places");
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
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
                        if (val === "concierge") router.push("/services/concierge");
                        if (val === "production") router.push("/services/production");
                        if (val === "transportation") router.push("/services/transportation");
                        if (val === "chef") router.push("/services/chef");
                      }}
                    >
                      <DropdownMenuRadioItem value="concierge">Concierge Services</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="production">Producción</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="transportation">Transportation</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="chef">Chef Privado</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) :  (
                <motion.a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm flex items-center gap-1"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item} <ChevronDown className="w-3 h-3" />
                </motion.a>
              ) 
              }
          
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
            <Button
              className={`relative z-10 ${
                pathname === "/bars"
                  ? "bg-yellow-300 text-black"
                  : "bg-green-300 text-white"
              } px-4 sm:px-6 py-1.5 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              CONTACT US
            </Button>
          </div>
        </motion.div>
      </motion.header>

      {/* Breadcrumbs */}
      {pathname !== '/' && (
        <div className="absolute top-[56px] inset-x-0 z-40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm text-gray-700 rounded-full">
              <Link href="/" className="inline-flex items-center gap-1 hover:text-gray-900">
                <ChevronLeft className="w-4 h-4" />
                <span>Home /</span>
              </Link>
              
              {pathname.split('/').filter(Boolean).map((seg, idx, arr) => (
                <React.Fragment key={idx}>
                  <span className="text-gray-400">/</span>
                  <Link 
                    href={`/${arr.slice(0, idx + 1).join('/')}`}
                    className={`hover:text-gray-900 transition-colors ${
                      idx === arr.length - 1 ? 'font-medium text-gray-900' : ''
                    }`}
                  >
                    {seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
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
