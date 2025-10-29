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
    tag?: string 
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
      id: "botecito-hannia-29ft",
      name: "Botecito - eslora 29ft",
      slug: "botecito-hannia-29ft",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/Botecito - eslora 29ft (Hannia )/1.jpg",
      images: []
    },
    {
      id: "cahua",
      name: "CAHUA",
      slug: "cahua",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/cahua/1.jpg",
      images: []
    },
    {
      id: "chicote",
      name: "CHICOTE",
      slug: "chicote",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/CHICOTE/1.jpg",
      images: []
    },
    {
      id: "fotos-charlie-41-2024",
      name: "Fotos charlie 41 - 2024",
      slug: "fotos-charlie-41-2024",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/Fotos charlie 41 - 2024/1.jpg",
      images: []
    },
    {
      id: "hope",
      name: "HOPE",
      slug: "hope",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/HOPE/1.jpg",
      images: []
    },
    {
      id: "la-maxx-bichota-42ft",
      name: "LA MAXX BICHOTA 42ft speedboat",
      slug: "la-maxx-bichota-42ft",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/LA-MAXX-BICHOTA-42ft speedboat/1.jpeg",
      images: []
    },
    {
      id: "merengue-41ft-hannia",
      name: "Merengue 41ft",
      slug: "merengue-41ft-hannia",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/merengue 41ft-(Hannia)/1.jpg",
      images: []
    },
    {
      id: "summit-29ft-hannia",
      name: "Summit 29ft ",
      slug: "summit-29ft-hannia",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/Summit- 29ft-(Hannia)/1.jpg",
      images: []
    },
    {
      id: "valhala",
      name: "VALHALA",
      slug: "valhala",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/VALHALA/1.jpg",
      images: []
    },
    {
      id: "xem-3",
      name: "XEM-3",
      slug: "xem-3",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/XEM-3/1.jpg",
      images: []
    },
    {
      id: "myriam-esther-azimut-48ft",
      name: "Yate Myriam Esther Azimut 48ft",
      slug: "myriam-esther-azimut-48ft",
      category: "boat",
      description: "Nulo",
      pricePerDay: 0,
      currency: "USD",
      capacity: 0,
      features: [],
      image: "/images/yachts/yate Myriam esther azimut 48ft/1.jpeg",
      images: []
    }

  ]
  