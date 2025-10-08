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
      'El clásico de la rumba cartagenera: salsa, champeta y buena energía en el corazón de Getsemaní.',
    description:
      'Un ícono de la vida nocturna de Cartagena, Tu Candela es el lugar perfecto para bailar salsa y champeta hasta el amanecer. Con un ambiente auténtico y música en vivo, este lugar atrae tanto a locales como a turistas que buscan experimentar la verdadera fiesta cartagenera. No te pierdas sus noches de orquesta en vivo y sus cócteles refrescantes.',
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
      'Un pedacito de Cuba en Cartagena, con salsa en vivo y mojitos que te transportan a La Habana.',
    description:
      'Este legendario club nocturno recrea la magia de los años 50 cubanos con su decoración vintage y su música en vivo. Los jueves son especialmente populares, cuando la orquesta en vivo hace bailar a todo el mundo. El ambiente es caliente, la música es contagiosa y los mojitos son legendarios. Ideal para los amantes de la salsa y la cultura cubana.',
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
      'El bar más pequeño de Cartagena, famoso por sus cócteles y ambiente bohemio en el corazón del Centro Histórico.',
    description:
      'Con apenas unas cuantas mesas y una barra pequeña, Donde Fidel es una institución en Cartagena. El lugar perfecto para cócteles artesanales en un ambiente íntimo y acogedor. Prueba su famosa "Cosa Loca" o deja que el barman te sorprenda con una creación especial. Ideal para empezar la noche con estilo.',
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
      'Uno de los mejores bares de cócteles de Latinoamérica, con una terraza espectacular y mixología de autor.',
    description:
      'Ubicado en una mansión restaurada de tres pisos, Alquímico es mucho más que un bar. En la planta baja, la barra principal sirve cócteles innovadores con ingredientes locales. El segundo piso alberga un restaurante, mientras que la terraza del tercer piso ofrece vistas espectaculares de la ciudad. No te pierdas su cóctel insignia, el "El Dorado", una creación exclusiva que combina ron, jugo de piña, miel de abejas y especias.',
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
      'Pub para relajarse, ver deportes y tomar cervezas; música internacional, ambiente casual.',
    description:
      'El punto "sports bar" por excelencia en el Centro. Pantallas con partidos, menú de pub food y buena rotación de cervezas. Ideal para grupos que buscan un plan relajado antes de seguir la ruta nocturna o como base para ver el juego y quedarse de charlas.',
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
      'Uno de los clubs más exclusivos de la ciudad, con DJs internacionales y fiestas temáticas.',
    description:
      'Si buscas una experiencia de club de lujo, La Movida es el lugar. Con una decoración vanguardista y un sistema de sonido de última generación, este club atrae a los mejores DJs internacionales. Los cócteles son una obra de arte y el servicio es impecable. El dress code es estricto (elegante) y las reservas son recomendables, especialmente los fines de semana.',
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
      'Elegante bar de cócteles en la Plaza San Pedro, ideal para un afterwork sofisticado.',
    description:
      'Ubicado en la encantadora Plaza San Pedro, El Barón es el lugar perfecto para cócteles artesanales en un ambiente refinado. Durante el día funciona como una cafetería de especialidad, y por la noche se transforma en un exclusivo bar de cócteles. Prueba su "Cartagena Mule" o el clásico "Aguardiente Sour" con un toque local. La terraza es uno de los mejores lugares para ver la puesta de sol en la ciudad amurallada.',
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
      'Terraza con piscina, DJs y ambiente festivo en un hotel boutique del Centro Histórico.',
    description:
      'Este exclusivo club en la azotea del Hotel Capellán Boutique combina piscina, lounge y fiesta. Durante el día es un relajado club de piscina, y por la noche se transforma en una de las fiestas más animadas de la ciudad. Las camas junto a la piscina se pueden reservar con botella, y la música electrónica de los DJs locales mantiene la energía alta hasta altas horas de la madrugada.',
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
      'Especializado en rones de todo el mundo, con degustaciones y cócteles creativos en un ambiente acogedor.',
    description:
      'Los amantes del ron encontrarán en El Arsenal su paraíso personal. Con una selección de más de 100 rones de todo el mundo, este pequeño y acogedor bar es ideal para una cena íntima o una noche de cócteles sofisticados. El personal es muy conocedor y puede guiarte a través de una degustación o recomendarte el cóctel perfecto según tus gustos. Prueba su "Cartagena Old Fashioned" con ron añejo y chocolate local.',
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