"use client";

import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import CompanyInfo from "@/components/CompanyInfo";
import YachtRentals from "@/components/YachtRentals";
import LuxuryVillas from "@/components/LuxuryVillas";
import Transportation from "@/components/Transportation";
import MerryMe from "@/components/Merry";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <HeroSection />
      </div>

      <section
        id="popular-destinations"
        ref={setSectionRef("popular-destinations")}
      >
        <PopularDestinations
          isVisible={visibleSections.has("popular-destinations")}
        />
      </section>

      <section id="company-info" ref={setSectionRef("company-info")}>
        <CompanyInfo isVisible={visibleSections.has("company-info")} />
      </section>

   

      <section id="yacht-rentals" ref={setSectionRef("yacht-rentals")}>
        <YachtRentals isVisible={visibleSections.has("yacht-rentals")} />
      </section>

      <section id="luxury-villas" ref={setSectionRef("luxury-villas")}>
        <LuxuryVillas isVisible={visibleSections.has("luxury-villas")} />
      </section>

      <section id="transportation" ref={setSectionRef("transportation")}>
        <Transportation isVisible={visibleSections.has("transportation")} />
      </section>

      <section id="merry-me" ref={setSectionRef("merry-me")}>
        <MerryMe   isVisible={visibleSections.has("merry-me")} />
      </section>      
    </div>
  );
}
