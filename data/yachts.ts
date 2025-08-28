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
    images?: string[] // added new property
  }
  
  export const yachts: Yacht[] = [
    {
      id: "azimut-48",
      name: "48' Azimut",
      slug: "azimut-48",
      category: "yacht",
      description: "Luxury 48-foot Azimut yacht featuring 3 cabins and 2 bathrooms, fully air-conditioned for maximum comfort. Perfect for day charters and private events.",
      pricePerDay: 1200,
      currency: "USD",
      capacity: 12,
      bedrooms: 3,
      bathrooms: 2,
      features: [
        "3 cabins",
        "2 bathrooms",
        "Air conditioning",
        "Spacious deck",
        "Luxury interiors",
        "Professional crew"
      ],
      tag: "Luxury",
      image: "/images/yachts/azimut-48/1.jpeg",
      images: [
        "/images/yachts/azimut-48/1.jpeg",
        "/images/yachts/azimut-48/2.jpeg",
        "/images/yachts/azimut-48/3.jpeg",
        "/images/yachts/azimut-48/4.jpeg",
        "/images/yachts/azimut-48/5.jpeg",
        "/images/yachts/azimut-48/6.jpeg",
        "/images/yachts/azimut-48/7.jpeg",
        "/images/yachts/azimut-48/8.jpeg",
        "/images/yachts/azimut-48/9.jpeg",
        "/images/yachts/azimut-48/10.jpeg",
        "/images/yachts/azimut-48/11.jpeg",
        "/images/yachts/azimut-48/12.jpeg",
        "/images/yachts/azimut-48/13.jpeg",
        "/images/yachts/azimut-48/14.jpeg",
        "/images/yachts/azimut-48/15.jpeg",
        "/images/yachts/azimut-48/16.jpeg",
        
      ]
    },
    {
      id: "barakat",
      name: "Barakat",
      slug: "barakat",
      category: "yacht",
      description: "Luxury 38-foot yacht with spacious deck and comfortable seating for up to 14 passengers. Perfect for group outings and special events.",
      pricePerDay: 780,
      currency: "USD",
      capacity: 14,
      features: [
        "Spacious deck area",
        "Comfortable seating",
        "Sound system",
        "Shaded areas",
        "Capacity for 14 passengers"
      ],
      tag: "Premium",
      image: "/images/yachts/barakat/1.jpeg",
      images: [
        "/images/yachts/barakat/1.jpeg",
        "/images/yachts/barakat/2.jpeg",
        "/images/yachts/barakat/3.jpeg",
        "/images/yachts/barakat/4.jpeg",
        "/images/yachts/barakat/5.jpeg",
        "/images/yachts/barakat/6.jpeg",
        "/images/yachts/barakat/7.jpeg",
        "/images/yachts/barakat/8.jpeg",
        "/images/yachts/barakat/9.jpeg",
        "/images/yachts/barakat/10.jpeg"
      ]
    },
    {
      id: "sthepanie-1",
      name: "Sthepanie 1",
      slug: "sthepanie-1",
      category: "boat",
      description: "33-foot boat with complete sound system, bow sunbeds, sun lounger seat and toilet. Equipped with two powerful 200 horsepower engines.",
      pricePerDay: 680,
      currency: "USD",
      capacity: 12,
      features: [
        "Complete sound system",
        "Front sunbeds",
        "Sun lounging seat",
        "Toilet on board",
        "2 engines of 200HP",
        "Capacity for 12 people"
      ],
      tag: "Popular",
      image: "/images/yachts/sthepanie-1/1.jpeg",
      images: [
        "/images/yachts/sthepanie-1/1.jpeg",
        "/images/yachts/sthepanie-1/2.jpeg",
        "/images/yachts/sthepanie-1/3.jpeg",
        "/images/yachts/sthepanie-1/4.jpeg",
        "/images/yachts/sthepanie-1/5.jpeg",
        "/images/yachts/sthepanie-1/6.jpeg",
        "/images/yachts/sthepanie-1/7.jpeg",
        "/images/yachts/sthepanie-1/8.jpeg",
        "/images/yachts/sthepanie-1/9.jpeg",
        "/images/yachts/sthepanie-1/10.jpeg",
        "/images/yachts/sthepanie-1/11.jpeg"
      ]
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
  