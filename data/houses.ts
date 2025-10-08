

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
        pricePerNight: 720,
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
        pricePerNight: 850,
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
        pricePerNight: 650,
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
        pricePerNight: 950,
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
    }
    ]