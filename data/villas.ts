

export interface Villa {
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

export const villas: Villa[] = [
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
            "/images/villas/santamarta/12.jpeg",
            "/images/villas/santamarta/13.jpeg"
        ],
        location: "Santa Marta - El Rodadero"
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
            "/images/villas/san_diego/15.jpeg"
        ],
        location: "San Diego - Centro Histórico"
    },
    {
        id: "casa-colonial-elegante",
        slug: "casa-colonial-elegante",
        name: "Casa Colonial Elegante",
        shortDescription: "Historic colonial mansion in the Old Town with private pool and character.",
        pricePerNight: 450,
        currency: "USD",
        capacity: 10,
        bedrooms: 5,
        bathrooms: 4,
        features: ["Pool", "WiFi", "Private patio"],
        tag: "Premium",
        image: "/images/colonial-mansion-cartagena.png",
    },
    {
        id: "villa-moderna-bocagrande",
        slug: "villa-moderna-bocagrande",
        name: "Villa Moderna Bocagrande",
        shortDescription: "Contemporary villa with ocean views and modern amenities.",
        pricePerNight: 320,
        currency: "USD",
        capacity: 8,
        bedrooms: 4,
        bathrooms: 3,
        features: ["Ocean view", "Full kitchen", "Rooftop"],
        tag: "Popular",
        image: "/images/modern-luxury-villa-cartagena.png"
    },
    {
    id: "casa-boutique-getsemani",
    slug: "casa-boutique-getsemani",
    name: "Casa Boutique Getsemaní",
    shortDescription: "Charming house steps from the vibrant nightlife of Getsemaní.",
    pricePerNight: 180,
    currency: "USD",
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    features: ["Rooftop terrace", "Design interiors"],
    tag: "Boutique",
    image: "/images/boutique-colonial-house-cartagena.png",
    },
    {
    id: "penthouse-castillogrande",
    slug: "penthouse-castillogrande",
    name: "Penthouse Castillogrande",
    shortDescription: "Exclusive penthouse with panoramic views over the bay.",
    pricePerNight: 650,
    currency: "USD",
    capacity: 12,
    bedrooms: 6,
    bathrooms: 5,
    features: ["Private chef (optional)", "Panoramic terrace"],
    tag: "Luxury",
    image: "/images/luxury-penthouse-cartagena.png",
    },
    
    ]