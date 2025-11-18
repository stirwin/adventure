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
      id: "botecito-29ft",
      name: "Botecito - Eslora 29ft",
      slug: "botecito-29ft",
      category: "boat",
      description: "Versatile 29-foot vessel with capacity for 8-9 people. Equipped with two powerful 115 HP Mercury engines, it offers excellent performance on the water. Includes professional crew (captain and co-pilot) to ensure a safe and pleasant experience.",
      pricePerDay: 0,
      currency: "USD",
      capacity: 9,
      features: [
        "Length: 29 feet",
        "Maximum capacity: 8-9 people",
        "2 Mercury 115 HP engines",
        "Crew: Captain and co-pilot",
        "Bluetooth sound system",
        "Table for food and drinks",
        "Cooler",
        "Insurance included",
        "15 kg of ice included"
      ],
      image: "/images/yachts/Botecito - eslora 29ft (Hannia )/1.jpg",
      images: []
    },
    {
      id: "cahua",
      name: "Cahua - Leopard 43",
      slug: "cahua-leopard-43",
      category: "yacht",
      description: "Luxury Powercat Leopard 43 yacht with capacity for 15 passengers. Ideal for group outings with all the comforts.",
      pricePerDay: 0,
      currency: "USD",
      capacity: 15,
      bedrooms: 3,
      bathrooms: 2,
      features: ["Air conditioning", "3 cabins", "2 bathrooms", "Full kitchen", "Resting area"],
      image: "/images/yachts/cahua/1.jpg",
      images: []
    },
    {
      id: "chicote",
      name: "Chicote - Lagoon 440",
      slug: "chicote-lagoon-440",
      category: "catamaran",
      description: "Elegant Lagoon 440 catamaran with capacity for 15 passengers. It features 4 cabins and 4 bathrooms, ideal for large groups seeking comfort and luxury at sea.",
      pricePerDay: 0,
      currency: "USD",
      capacity: 15,
      bedrooms: 4,
      bathrooms: 4,
      features: ["Air conditioning", "4 cabins", "4 bathrooms", "Spacious areas", "Roomy deck", "Enhanced stability"],
      image: "/images/yachts/CHICOTE/1.jpg",
      images: []
    },
    {
      id: "charlie-bravo-41",
      name: "Charlie - Speedboat Bravo 41",
      slug: "charlie-speedboat-bravo-41",
      category: "boat",
      description: "Fast and powerful Bravo 41 speedboat, completely renovated in 2024. Equipped with two powerful 250 HP Yamaha engines, this boat offers exceptional performance on the water. Includes amenities such as a bathroom and Bluetooth sound system, plus ample sunbathing areas to enjoy the sun and sea.",
      pricePerDay: 0,
      currency: "USD",
      capacity: 12,
      features: [
        "Model: Speedboat Bravo 41",
        "Renovated in 2024",
        "2 Yamaha 250 HP engines",
        "Onboard bathroom",
        "Bluetooth sound system",
        "Sunbathing areas",
        "Aerodynamic design",
        "High performance"
      ],
      image: "/images/yachts/Fotos charlie 41 - 2024/1.jpg",
      images: []
    },
    {
      id: "hope",
      name: "Hope - Powercat",
      slug: "hope-powercat",
      category: "yacht",
      description: "Elegant Powercat yacht with capacity for 15 passengers. It features 4 cabins and 4 bathrooms, offering comfort and luxury on every trip. Equipped with air conditioning for passenger comfort.",
      pricePerDay: 0,
      currency: "USD",
      capacity: 15,
      bedrooms: 4,
      bathrooms: 4,
      features: [
        "Air conditioning",
        "4 cabins",
        "4 bathrooms",
        "Capacity for 15 passengers",
        "Powercat design",
        "Spacious areas",
      ],
      image: "/images/yachts/HOPE/1.jpg",
      images: []
    },
    {
      id: "la-maxx-bichota-42ft",
      name: "LA MAXX BICHOTA 42ft speedboat",
      slug: "la-maxx-bichota-42ft",
      category: "boat",
      description: "Impressive 41-foot vessel with capacity for 18 passengers. Equipped with two powerful 300 HP Yamaha engines, this boat offers a powerful and safe journey through Caribbean waters. Includes experienced captain and co-pilot, as well as all the necessary amenities for an unforgettable day at sea.",
      pricePerDay: 0,
      currency: "USD",
      capacity: 18,
      features: [
        "Maximum capacity: 18 passengers",
        "2 Yamaha 300 HP engines",
        "Crew: Captain and co-pilot",
        "Insurance included",
        "Bluetooth sound system",
        "Sunbathing areas",
        "Central bathroom",
        "Table for food and drinks",
        "Cooler",
        "15 kg of ice included",
        "Length: 41 feet"
      ],
      image: "/images/yachts/merengue 41ft-(Hannia)/1.jpg",
      images: []
    },
    {
      id: "summit-29ft-hannia",
      name: "Summit 29ft",
      slug: "summit-29ft-hannia",
      category: "boat",
      description: "Agile and versatile 29-foot vessel with capacity for 10 passengers. Equipped with two powerful 150 HP Yamaha engines, it offers the perfect balance between performance and efficiency. Includes professional crew to ensure a safe and pleasant experience at sea.",
      pricePerDay: 0,
      currency: "USD",
      capacity: 10,
      features: [
        "Maximum capacity: 10 passengers",
        "2 Yamaha 150 HP engines",
        "Crew: Captain and co-pilot",
        "Insurance included",
        "Bluetooth sound system",
        "Table for food and drinks",
        "Cooler",
        "15 kg of ice included",
        "Length: 29 feet"
      ],
      image: "/images/yachts/Summit- 29ft-(Hannia)/1.jpg",
      images: []
    },
    {
      id: "valhala",
      name: "Valhalla - Leopard 51",
      slug: "valhalla-leopard-51",
      category: "yacht",
      description: "Impressive Powercat Leopard 51 yacht with capacity for 15 passengers. This luxurious yacht offers the perfect balance of space, comfort, and performance, ideal for unforgettable days at sea.",
      pricePerDay: 0,
      currency: "USD",
      capacity: 15,
      bedrooms: 3,
      bathrooms: 3,
      features: [
        "Type: Powercat Yacht",
        "Capacity: 15 passengers",
        "3 cabins",
        "3 bathrooms",
        "Air conditioning",
        "Spacious areas",
        "Modern and elegant design",
        "Enhanced stability"
      ],
      image: "/images/yachts/VALHALA/1.jpg",
      images: []
    },
    {
      id: "xem-3",
      name: "Xem 3",
      slug: "xem-3-catamaran",
      category: "catamaran",
      description: "Elegant catamaran with capacity for 15 passengers. This spacious and luxurious catamaran features 4 cabins and 4 bathrooms, offering maximum comfort during navigation. Equipped with air conditioning to ensure a pleasant experience in any weather.",
      pricePerDay: 0,
      currency: "USD",
      capacity: 15,
      bedrooms: 4,
      bathrooms: 4,
      features: [
        "Type: Catamaran",
        "Capacity: 15 passengers",
        "4 cabins",
        "4 bathrooms",
        "Air conditioning",
        "Spacious areas",
        "Enhanced stability",
        "Modern design"
      ],
      image: "/images/yachts/XEM-3/1.jpg",
      images: []
    },
  

  ]
  