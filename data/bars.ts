// /data/bars.ts
// Source: https://hicartagena.com/bars-clubs-nightlife-cartagena/

export interface Bar {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description?: string; // long form content for bar detail page
  neighborhood?: string;
  type: "bar" | "club" | "pub" | "cocktail" | "salsa";
  music?: string[]; // e.g., ["salsa", "reggaeton", "electro"]
  priceRange?: "$" | "$$" | "$$$"; // rough indicator
  address?: string;
  image: string; // public path, e.g. /images/bars/<slug>/<slug>.jpg
  tags?: string[]; // extra facets like ["rooftop", "vip", "classic"]
  gallery?: string[]; // optional extra images for detail page under /images/bars/<slug>/
}

export const bars: Bar[] = [
  {
    id: "tu-candela",
    slug: "tu-candela",
    name: "Tu Candela",
   shortDescription:
  "A Cartagena nightlife classic: salsa, champeta, and great energy in the heart of Getsemaní.",
description:
  "A true icon of Cartagena’s nightlife, Tu Candela is the perfect spot to dance salsa and champeta until sunrise. With an authentic atmosphere and live music, it attracts both locals and travelers looking to experience the real Cartagena party scene. Don’t miss the nights with live bands and their refreshing cocktails." ,
 neighborhood: 'Getsemaní',
    type: 'salsa',
    music: ['salsa', 'champeta', 'reggaeton'],
    priceRange: '$$',
    image: "/images/bars/tu-candela/tu-candela.webp",
    tags: ["classic", "late-night"],
    gallery: [
      "/images/bars/tu-candela/1.webp",
      "/images/bars/tu-candela/2.webp",
      "/images/bars/tu-candela/3.webp",
  
    ],
  },
  {
    id: "cafe-havana",
    slug: "cafe-havana",
    name: "Café Havana",
   shortDescription:
  "A slice of Cuba in Cartagena, with live salsa and mojitos that transport you straight to Havana.",
description:
  "This legendary nightclub recreates the magic of 1950s Cuba with vintage décor and live salsa bands. Thursdays are especially popular when the orchestra turns the place into a full dance celebration. The music is contagious and the mojitos are legendary. Perfect for lovers of salsa and Cuban culture.",
 neighborhood: 'Getsemaní',
    type: 'salsa',
    music: ['salsa', 'son cubano'],
    priceRange: '$$',
    image: "/images/bars/cafe-havana/cafe-havana.webp",
    tags: ["live-music", "dance"],
    gallery: [
      "/images/bars/cafe-havana/1.jpg",
      "/images/bars/cafe-havana/2.jpg",
      "/images/bars/cafe-havana/3.jpg",
      "/images/bars/cafe-havana/4.jpg",
      "/images/bars/cafe-havana/5.jpg",
      "/images/bars/cafe-havana/6.png",
    ],
  },
  {
    id: "donde-fidel",
    slug: "donde-fidel",
    name: "Donde Fidel",
    shortDescription:
  "A small but iconic bar, famous for its cocktails and bohemian vibe right in the Historic Center.",
description:
  "With just a few tables and a small bar, Donde Fidel is a true institution in Cartagena. It’s the perfect place for handcrafted cocktails in a cozy and intimate atmosphere. Try their famous “Cosa Loca” or let the bartender surprise you with a special creation. Ideal to start the night with style.",
 neighborhood: 'Centro Histórico',
    type: 'cocktail',
    music: ['salsa'],
    priceRange: '$$',
    image: "/images/bars/donde-fidel/donde-fidel.webp",
    tags: ["classic", "casual"],
    gallery: [
      "/images/bars/donde-fidel/1.jpg",
      "/images/bars/donde-fidel/2.jpg",
      "/images/bars/donde-fidel/3.jpg",
      "/images/bars/donde-fidel/4.jpg",
      "/images/bars/donde-fidel/5.jpg",

    ],
  },
  {
    id: "alquimico",
    slug: "alquimico",
    name: "Alquímico",
   shortDescription:
  "One of the top cocktail bars in Latin America, featuring a stunning rooftop and signature mixology.",
description:
  "Located inside a restored three-story mansion, Alquímico is much more than a bar. The main floor serves innovative cocktails with local ingredients. The second level offers a dining experience, while the rooftop terrace boasts stunning city views. Don’t miss their signature cocktail, “El Dorado,” crafted with rum, pineapple, honey and exotic spices.",
neighborhood: 'Centro Histórico',
    type: 'cocktail',
    music: ['electro', 'house', 'ambient'],
    priceRange: '$$$',
    image: "/images/bars/alquimico/alquimico.webp",
    tags: ["mixology", "rooftop", "award-winning"],
    gallery: [
      "/images/bars/alquimico/1.jpg",
      "/images/bars/alquimico/2.jpeg",
      "/images/bars/alquimico/3.jpg",
      "/images/bars/alquimico/4.jpg",
      "/images/bars/alquimico/5.jpg",
      "/images/bars/alquimico/6.jpg",
    ],
  },
  {
    id: "the-clock-pub",
    slug: "the-clock-pub",
    name: "The Clock Pub",
    shortDescription:
  "A casual sports-friendly pub to relax, drink beer, and enjoy international music.",
description:
  "The go-to sports bar in Cartagena’s Historic Center. Big screens for game nights, a full menu of comfort pub food, and a great selection of beers. Ideal for groups seeking a laid-back start before continuing the nightlife adventure, or simply a spot to hang out and enjoy the match.",
neighborhood: 'Centro Histórico',
    type: 'pub',
    music: ['rock', 'pop'],
    priceRange: '$',
    image: "/images/bars/the-clock-pub/the-clock-pub.webp",
    tags: ["sports", "casual"],
    gallery: [
      "/images/bars/the-clock-pub/1.jpg",
      "/images/bars/the-clock-pub/2.jpg",
      "/images/bars/the-clock-pub/3.jpg",
      "/images/bars/the-clock-pub/4.jpg",
      "/images/bars/the-clock-pub/5.jpg",
      "/images/bars/the-clock-pub/6.jpg",
    ],
  },
  {
    id: "la-movida",
    slug: "la-movida",
    name: "La Movida",
   shortDescription:
  "One of the most exclusive clubs in the city, with international DJs and themed parties.",
description:
  "If you’re seeking a luxury clubbing experience, La Movida is the place to be. With bold, modern décor and a state-of-the-art sound system, it attracts top DJs and a stylish crowd. Cocktails are crafted like artworks and service is premium. Dress code is elegant and reservations are highly recommended on weekends.",
neighborhood: 'Bocagrande',
    type: 'club',
    music: ['house', 'reggaeton', 'hits'],
    priceRange: '$$$',
    image: "/images/bars/la-movida/la-movida.webp",
    tags: ["vip", "dressy"],
    gallery: [
      "/images/bars/la-movida/1.jpg",
      "/images/bars/la-movida/2.jpg",
      "/images/bars/la-movida/3.jpg",
      "/images/bars/la-movida/4.jpg",
      "/images/bars/la-movida/5.jpg",
      "/images/bars/la-movida/6.jpg",
    ],
  },
  {
    id: "el-baron",
    slug: "el-baron",
    name: "El Barón Café & Liquor Bar",
  shortDescription:
  "A refined cocktail bar in Plaza San Pedro, perfect for a sophisticated evening out.",
description:
  "Located in the charming Plaza San Pedro, El Barón is the perfect place for artisanal cocktails in an elegant atmosphere. By day, it serves specialty coffee; by night, it transforms into an exclusive mixology haven. Try the “Cartagena Mule” or the local twist on the classic “Aguardiente Sour.” The outdoor tables offer some of the best sunset views inside the walled city.",
neighborhood: 'Centro Histórico',
    type: 'cocktail',
    music: ['jazz', 'ambient'],
    priceRange: '$$$',
    image: "/images/bars/el-baron/el-baron.webp",
    tags: ["specialty-coffee", "mixology"],
    gallery: [
      "/images/bars/el-baron/1.jpg",
      "/images/bars/el-baron/2.jpg",
      "/images/bars/el-baron/3.jpg",
      "/images/bars/el-baron/4.jpg",

    ],
  },
  {
    id: "la-jugada",
    slug: "la-jugada",
    name: "La Jugada Club House",
  shortDescription:
  "Rooftop pool, DJs, and a festive atmosphere inside a boutique hotel in Cartagena’s Historic Center.",
description:
  "This exclusive rooftop club at the Capellán Boutique Hotel blends pool vibes with electric nightlife. During the day, it’s a relaxing pool club—but at night, it becomes one of the liveliest parties in the city. Poolside beds can be booked with bottle service, and the lineup of local DJs keeps the energy high all night long.",
neighborhood: 'Centro Histórico',
    type: 'club',
    music: ['house', 'electro', 'hits'],
    priceRange: '$$$',
    image: "/images/bars/la-jugada/la-jugada.jpg",
    tags: ["rooftop", "design"],
    gallery: [
      "/images/bars/la-jugada/1.jpg",
      "/images/bars/la-jugada/3.jpg",
      "/images/bars/la-jugada/4.jpg",
      "/images/bars/la-jugada/5.jpg",

    ],
  },
  {
    id: "el-arsenal-rum-box",
    slug: "el-arsenal-rum-box",
    name: "El Arsenal: The Rum Box",
   shortDescription:
  "A rum-focused bar with tastings, creative cocktails, and a warm, intimate atmosphere.",
description:
  "Rum lovers will find their paradise at El Arsenal, with a selection of over 100 rums from around the world. It’s a cozy and charming space, perfect for a romantic dinner or a sophisticated night out. The staff are true rum experts and can guide you through a tasting or help you find the perfect cocktail. Don’t miss their “Cartagena Old Fashioned” with aged rum and local chocolate.",
neighborhood: 'Getsemaní',
    type: 'bar',
    music: ['latin', 'pop', 'mix'],
    priceRange: '$$',
    image: "/images/bars/el-arsenal-rum-box/el-arsenal-rum-box.jpg",
    tags: ["rum", "friendly"],
    gallery: [
      "/images/bars/el-arsenal-rum-box/1.jpg",
      "/images/bars/el-arsenal-rum-box/2.jpg",
      "/images/bars/el-arsenal-rum-box/3.jpg",
      "/images/bars/el-arsenal-rum-box/4.jpg",
      "/images/bars/el-arsenal-rum-box/5.jpg",
      "/images/bars/el-arsenal-rum-box/6.jpg",
    ],
  },
];