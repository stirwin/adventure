// /data/yachts.ts
export interface Yacht {
    id: string
    name: string
    slug?: string
    category: "yacht" | "boat" | "catamaran" | "fishing" | "party"
    description: string
    pricePerDay: number
    currency?: string
    capacity: number
    bedrooms?: number
    bathrooms?: number
    features?: string[] // etiquetas cortas
    tag?: string // "Premium", "Popular", etc.
    image: string
  }
  
  export const yachts: Yacht[] = [
    {
      id: "sea-princess",
      name: "Sea Princess",
      slug: "sea-princess",
      category: "yacht",
      description: "Luxury yacht with full amenities and a professional crew. Perfect for private events and exclusive getaways.",
      pricePerDay: 850,
      currency: "USD",
      capacity: 12,
      bedrooms: 3,
      bathrooms: 2,
      features: ["WiFi", "Chef opcional", "A/C", "Deck amplio"],
      tag: "Premium",
      image: "/images/placeholder-0mmqi.png"
    },
    {
      id: "ocean-runner",
      name: "Ocean Runner",
      slug: "ocean-runner",
      category: "boat",
      description: "Fast speed boat ideal for island hopping and short excursions. Snorkel gear included.",
      pricePerDay: 420,
      currency: "USD",
      capacity: 8,
      bathrooms: 1,
      features: ["Snorkel gear", "Nevera", "Bimini top"],
      tag: "Popular",
      image: "/images/placeholder-kq2vh.png"
    },
    {
      id: "caribbean-wind",
      name: "Caribbean Wind",
      slug: "caribbean-wind",
      category: "catamaran",
      description: "Spacious catamaran for groups and families. Stable ride, ideal for day trips and parties.",
      pricePerDay: 650,
      currency: "USD",
      capacity: 15,
      bedrooms: 2,
      bathrooms: 2,
      features: ["Cocina", "Equipo de música", "Sombrilla"],
      tag: "Family",
      image: "/images/caribbean-catamaran.png"
    },
    {
      id: "fishers-dream",
      name: "Fisher's Dream",
      slug: "fishers-dream",
      category: "fishing",
      description: "Fishing boat equipped for expeditions — ideal para pesca deportiva y excursiones de día.",
      pricePerDay: 320,
      currency: "USD",
      capacity: 6,
      bathrooms: 1,
      features: ["Equipo de pesca", "Nevera grande"],
      tag: "Adventure",
      image: "/images/cartagena-fishing-boat.png"
    },
    {
      id: "fiesta-marina",
      name: "Fiesta Marina",
      slug: "fiesta-marina",
      category: "party",
      description: "Ultimate party boat experience with sound system, bar service and plenty of deck space.",
      pricePerDay: 750,
      currency: "USD",
      capacity: 20,
      bathrooms: 2,
      features: ["Sound system", "Bar", "Iluminación"],
      tag: "Party",
      image: "/images/cartagena-party-boat.png"
    }
  ]
  