// /data/transport.ts
export type VehicleCategory = "classic" | "sports" | "suv" | "van" | "other"

export interface Vehicle {
  id: string
  slug?: string
  name: string
  categories: VehicleCategory[]
  shortDescription: string
  pricePerHour?: number
  pricePerDay?: number
  currency?: string
  capacity?: number
  features?: string[]
  tag?: string
  image: string
}

export const vehicles: Vehicle[] = [
  {
    id: "haban-classic",
    slug: "haban-classic",
    name: "Haban Classic",
    categories: ["classic", "van"],
    shortDescription: "Vintage Haban — perfect for city tours and photoshoots around the Walled City.",
    pricePerHour: 45,
    pricePerDay: 250,
    currency: "USD",
    capacity: 4,
    features: ["Vintage style", "Photo-friendly", "Local driver"],
    tag: "Vintage",
    image: "/images/transport/mercedez.jpg"
  },    
  {
    id: "lambo-sport",
    slug: "lambo-sport",
    name: "Lambo Sport",
    categories: ["sports"],
    shortDescription: "High-performance sports car for those who want to arrive in style.",
    pricePerHour: 120,
    pricePerDay: 720,
    currency: "USD",
    capacity: 2,
    features: ["High performance", "Luxury interior", "Chauffeur available"],
    tag: "Luxury",
    image: "/images/transport/Limonsina.png"
  }
]
