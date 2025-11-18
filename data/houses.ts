

export interface House {
    id: string
    slug?: string
    name: string
    shortDescription: string
    pricePerNight: number
    currency?: string
    capacity: number
    bedrooms?: number
    bathrooms?: number
    features?: string[]
    tag?: string
    image: string
    images?: string[]
    location?: string
}

export const houses: House[] = [

    {
        id: "casa-santamarta-exclusive",
        slug: "casa-santamarta-exclusive",
        name: "Casa Santa Marta Exclusive",
        shortDescription: "Spacious villa with pool and sound terrace in a prime location.",
        pricePerNight: 0,
        currency: "USD",
        capacity: 15,
        bedrooms: 7,
        bathrooms: 6,
        features: [
            "7 Bedrooms (1 King, 1 Queen, 5 Double, 1 Single)",
            "6 Bathrooms",
            "Private pool",
            "Fully equipped kitchen",
            "Air-conditioned living room",
            "Sound system on terrace"
        ],
        tag: "Exclusive",
        image: "/images/villas/santamarta/1.jpeg",
        images: [
            "/images/villas/santamarta/1.jpeg",
            "/images/villas/santamarta/2.jpeg",
            "/images/villas/santamarta/3.jpeg",
            "/images/villas/santamarta/4.jpeg",
            "/images/villas/santamarta/5.jpeg",
            "/images/villas/santamarta/6.jpeg",
            "/images/villas/santamarta/7.jpeg",
            "/images/villas/santamarta/8.jpeg",
            "/images/villas/santamarta/9.jpeg",
            "/images/villas/santamarta/10.jpeg",
            "/images/villas/santamarta/11.jpeg",
           
        ],
        location: "Cartagena - Centro Histórico"
    },
    {
        id: "san-diego-mansion",
        slug: "san-diego-mansion",
        name: "San Diego Mansion",
        shortDescription: "Luxurious colonial mansion in the heart of San Diego, Cartagena's historic center.",
        pricePerNight: 0,
        currency: "USD",
        capacity: 14,
        bedrooms: 7,
        bathrooms: 7,
        features: [
            "7 Bedrooms (3 King, 4 Queen, 1 Double)",
            "7 Bathrooms",
            "Air-conditioned living room",
            "Night security",
            "Panoramic view terrace",
            "Private pool",
            "Fully equipped kitchen"
        ],
        tag: "Luxury",
        image: "/images/villas/san_diego/13.jpeg",
        images: [
            "/images/villas/san_diego/1.jpeg",
            "/images/villas/san_diego/2.jpeg",
            "/images/villas/san_diego/3.jpeg",
            "/images/villas/san_diego/4.jpeg",
            "/images/villas/san_diego/5.jpeg",
            "/images/villas/san_diego/6.jpeg",
            "/images/villas/san_diego/7.jpeg",
            "/images/villas/san_diego/8.jpeg",
            "/images/villas/san_diego/9.jpeg",
            "/images/villas/san_diego/10.jpeg",
            "/images/villas/san_diego/11.jpeg",
            "/images/villas/san_diego/12.jpeg",
            "/images/villas/san_diego/13.jpeg",
            "/images/villas/san_diego/14.jpeg",
        ],
        location: "San Diego - Centro Histórico"
    },
    {
        id: "casa-pirre",
        slug: "casa-pirre",
        name: "Casa Pirre",
        shortDescription: "Elegant colonial house with modern amenities in the heart of Getsemaní.",
        pricePerNight: 0,
        currency: "USD",
        capacity: 10,
        bedrooms: 5,
        bathrooms: 4,
        features: [
            "5 Rooms (2 King, 2 Queen, 1 Double)",
            "4 Modern Bathrooms",
            "Private rooftop terrace with jacuzzi",
            "Colonial architecture with high ceilings",
            "Fully equipped gourmet kitchen",
            "Air conditioning in all rooms",
            "High-speed WiFi"
        ],
        tag: "Trending",
        image: "/images/villas/casa_pirre/3.jpg",
        images: [
            "/images/villas/casa_pirre/1.jpg",
            "/images/villas/casa_pirre/2.jpg",
            "/images/villas/casa_pirre/3.jpg",
            "/images/villas/casa_pirre/4.jpg",
            "/images/houses/casa_pirre/5.jpg"
        ],
        location: "Getsemaní - Centro Histórico"
    },
    {
        id: "casa-upper",
        slug: "casa-upper",
        name: "Casa Upper",
        shortDescription: "Modern luxury villa with panoramic ocean views in Bocagrande.",
        pricePerNight: 0,
        currency: "USD",
        capacity: 12,
        bedrooms: 6,
        bathrooms: 5,
        features: [
            "6 Rooms (3 King, 3 Queen)",
            "5 Luxury Bathrooms with rain showers",
            "Infinity pool with ocean view",
            "Rooftop terrace with BBQ area",
            "Smart home system",
            "Private chef available upon request",
            "24/7 security and concierge service"
        ],
        tag: "Luxury",
        image: "/images/villas/casa_upper/1.jpg",
        images: [
            "/images/villas/casa_upper/1.jpeg",
            "/images/villas/casa_upper/2.jpg",
            "/images/villas/casa_upper/3.jpg",
            "/images/villas/casa_upper/4.jpg",
            "/images/villas/casa_upper/5.jpg"
        ],
        location: "Bocagrande - Cartagena"
    },
        {
        id: "apto-1108",
        slug: "apto-1108",
        name: "APTO 1108 - Nuevo Conquistador",
        shortDescription: "Cozy 1-bedroom apartment with lake and partial sea view in Nuevo Conquistador building.",
        pricePerNight: 0,
        currency: "USD",
        capacity: 4,
        bedrooms: 1,
        bathrooms: 1,
        features: [
            "1 Bedroom with semi-double bed, single bed, and pull-out bed",
            "1 Bathroom",
            "Air conditioning",
            "TV",
            "Fully equipped kitchen for quick meals",
            "Balcony with lake and partial sea view",
            "Additional single bed in the living area"
        ],
        tag: "Apartment",
        location: "Nuevo Conquistador Building",
        image: "/images/villas/1108/1.png",
        images: [
            "/images/villas/1108/1.png",
            "/images/villas/1108/2.png",
            "/images/villas/1108/3.png",

        ]
    },
    {
        id: "apto-812",
        slug: "apto-812",
        name: "APTO 812 - Nuevo Conquistador",
        shortDescription: "Spacious 2-bedroom apartment in Nuevo Conquistador building with lake view.",
        pricePerNight: 0,
        currency: "USD",
        capacity: 6,
        bedrooms: 2,
        bathrooms: 2,
        features: [
            "2 Bedrooms (2 semi-double beds + 1 double bed)",
            "2 Bathrooms (1 social, 1 private)",
            "Air conditioning in both bedrooms",
            "TV in bedroom and living room",
            "Gas kitchen",
            "Large sofa bed",
            "Balcony with lake view"
        ],
        tag: "Apartment",
        location: "Nuevo Conquistador Building",
        image: "/images/villas/812/1.png",
        images: [
            "/images/villas/812/1.png",
            "/images/villas/812/2.png",
        ]
    },
    {
        id: "estudio-1209",
        slug: "estudio-1209",
        name: "ESTUDIO 1209 - Nuevo Conquistador",
        shortDescription: "Modern studio apartment in Nuevo Conquistador building, perfect for small groups.",
        pricePerNight: 0,
        currency: "USD",
        capacity: 4,
        bedrooms: 1,
        bathrooms: 1,
        features: [
            "Studio apartment (35m²)",
            "2 Double beds + 1 single sofa bed",
            "1 Bathroom",
            "Air conditioning",
            "Cable TV",
            "Fully equipped kitchenette",
            "Refrigerator",
            "Electronic door entry"
        ],
        tag: "Studio",
        location: "Nuevo Conquistador Building, Av. Almirante Brion",
        image: "/images/villas/1209/1.png",
        images: [
            "/images/villas/1209/1.png",
            "/images/villas/1209/2.png",
            "/images/villas/1209/3.png",
        ]
    },
    {
        id: "apto-1919",
        slug: "apto-1919",
        name: "APTO 1919 - Nuevo Conquistador",
        shortDescription: "Beautiful 1-bedroom apartment with stunning views of the lake, sea, and Tierra Bomba Island.",
        pricePerNight: 0,
        currency: "USD",
        capacity: 6,
        bedrooms: 1,
        bathrooms: 1,
        features: [
            "1 Bedroom with semi-double bed and single bed",
            "Additional single pull-out bed and semi-double bed in living area",
            "1 Bathroom",
            "Air conditioning in bedroom and living room",
            "TV",
            "Fully equipped gas kitchen for quick meals",
            "Balcony with panoramic views of lake, sea, Tierra Bomba Island, and Hilton"
        ],
        tag: "Apartment",
        location: "Nuevo Conquistador Building",
        image: "/images/villas/1919/1.jpeg",
        images: [
            "/images/villas/1919/1.jpeg",
            "/images/villas/1919/2.jpeg",
           
        ]
    },
    ]