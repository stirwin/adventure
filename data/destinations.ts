// /data/destinations.ts
export interface Destination {
    id: string
    slug?: string
    name: string
    region?: string
    shortDescription: string
    priceFrom?: number
    currency?: string
    duration?: string
    tag?: string
    image: string
  }
  
  export const destinations: Destination[] = [
    {
      id: "rosario-islands",
      slug: "rosario-islands",
      name: "Islas del Rosario",
      region: "Archipiélago",
      shortDescription: "Archipiélago de aguas cristalinas ideal para snorkel y day trips desde Cartagena.",
      priceFrom: 120,
      currency: "USD",
      duration: "Full day",
      tag: "Top",
      image: "/images/rosario-islands-paradise.png"
    },
    {
      id: "tayrona-park",
      slug: "tayrona-park",
      name: "Parque Tayrona",
      region: "Magdalena",
      shortDescription: "Playas vírgenes y selva caribeña — perfecto para ecoturismo y trekking.",
      priceFrom: 180,
      currency: "USD",
      duration: "1-2 days",
      tag: "Adventure",
      image: "/images/tayrona-beach-jungle.png"
    },
    {
      id: "san-basilio-palenque",
      slug: "san-basilio-de-palenque",
      name: "San Basilio de Palenque",
      region: "Bolívar",
      shortDescription: "Pueblo declarado patrimonio cultural — música, tradición y raíces africanas vivas.",
      priceFrom: 95,
      currency: "USD",
      duration: "Half day",
      tag: "Cultural",
      image: "/images/san-basilio-de-palenque.png"
    },
    {
      id: "mompox",
      slug: "mompox",
      name: "Mompox",
      region: "Bolívar",
      shortDescription: "Ciudad colonial a orillas del río con atmósfera histórica y arquitectura única.",
      priceFrom: 150,
      currency: "USD",
      duration: "1-2 days",
      tag: "Heritage",
      image: "/images/mompox-colonial-river.png"
    },
    {
      id: "santa-marta",
      slug: "santa-marta",
      name: "Santa Marta & Tayrona Coast",
      region: "Magdalena",
      shortDescription: "Base ideal para explorar la Sierra Nevada y playas cercanas como Taganga.",
      priceFrom: 140,
      currency: "USD",
      duration: "Full day",
      tag: "Coast",
      image: "/images/santa-marta-colonial-coast.png"
    },
    {
      id: "playa-blanca",
      slug: "playa-blanca",
      name: "Playa Blanca (Barú)",
      region: "Barú",
      shortDescription: "Arena blanca y aguas turquesa — excursión clásica desde Cartagena.",
      priceFrom: 60,
      currency: "USD",
      duration: "Full day",
      tag: "Classic",
      image: "/images/baru.jpg"
    }
  ]
  