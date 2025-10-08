// /data/restaurants.ts
// Source: https://hicartagena.com/best-restaurants-in-cartagena/

export interface Restaurant {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  neighborhood: string;
  type: string[];
  cuisine: string[];
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  image: string;
  tags: string[];
  gallery?: string[];
  address?: string;
  phone?: string;
  hours?: string;
  website?: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "salon-tropical",
    slug: "salon-tropical",
    name: "Salon Tropical",
    shortDescription: "A culinary journey in Cartagena with a boho chic Colombian vibe.",
    description: "Your culinary journey in Cartagena couldn't be complete if you don't stop by Salón tropical's patio. This restaurant is the epitome of boho chic Colombian ambiance, offering a unique dining experience that combines local flavors with a relaxed, tropical atmosphere.",
    neighborhood: "Getsemaní",
    type: ["restaurant", "bar"],
    cuisine: ["Classic Caribbean", "Colombian Fusion"],
    priceRange: "$$",
    image: "/images/restaurants/salon-tropical.jpg",
    tags: ["boho", "patio", "lively"],
    gallery: [
      "/images/restaurants/salon-tropical/1.webp"
    ]
  },
  {
    id: "cafe-de-la-manana",
    slug: "cafe-de-la-manana",
    name: "Café de la Mañana",
    shortDescription: "Cozy café offering some of the best breakfasts in Cartagena's historic center.",
    description: "This cozy café was created by a young couple - Naty from Bogotá and Jan from Germany. It offers some of the best breakfasts in Cartagena's historic center, with a menu that combines local flavors with European influences in a charming setting.",
    neighborhood: "Centro Histórico",
    type: ["cafe", "breakfast"],
    cuisine: ["Brunch", "International Cuisine"],
    priceRange: "$$",
    image: "/images/restaurants/cafe-de-la-manana.jpg",
    tags: ["breakfast", "coffee", "casual"]
  },
  {
    id: "al-alma-cafe",
    slug: "al-alma-cafe",
    name: "Al Alma Café",
    shortDescription: "Stunning setting for breakfast or brunch in the Walled City.",
    description: "Alma Café has one of the most stunning settings for a breakfast or brunch in the Walled City. Situated on the second floor of a colonial building, it offers a beautiful view of the historic streets below. The menu features a mix of local and international breakfast favorites, all made with fresh, high-quality ingredients.",
    neighborhood: "Centro Histórico",
    type: ["cafe", "restaurant"],
    cuisine: ["Brunch", "International Cuisine"],
    priceRange: "$$",
    image: "/images/restaurants/al-alma-cafe.webp",
    tags: ["brunch", "scenic", "coffee"]
  },
  {
    id: "de-indias-comedor-copas",
    slug: "de-indias-comedor-copas",
    name: "De Indias Comedor & Copas",
    shortDescription: "A culinary lab inspired by the diversity of Colombian cuisine roots.",
    description: "The new sensation in town! This recently opened restaurant is a culinary lab where chef Jose Barbosa creates innovative dishes inspired by the diversity of Colombian cuisine roots. The menu changes seasonally to highlight the best local ingredients and traditional cooking techniques with a modern twist.",
    neighborhood: "Centro Histórico",
    type: ["restaurant", "bar"],
    cuisine: ["Gastro Labs", "Colombian Fusion"],
    priceRange: "$$$",
    image: "/images/restaurants/de-indias.avif",
    tags: ["fine-dining", "innovative", "trendy"]
  },
  {
    id: "lobo-de-mar",
    slug: "lobo-de-mar",
    name: "Lobo de Mar",
    shortDescription: "Seafood restaurant with a focus on fresh ocean ingredients.",
    description: "As the old sea lions, we know some of the secrets of the ocean to mix its fruits with the best ingredients of the land. Lobo de Mar offers a unique seafood dining experience with a focus on fresh, locally-sourced ingredients and traditional Colombian coastal recipes.",
    neighborhood: "Bocagrande",
    type: ["restaurant", "seafood"],
    cuisine: ["Classic Caribbean", "Colombian Fusion"],
    priceRange: "$$$",
    image: "/images/restaurants/lobo-de-mar.jpg",
    tags: ["seafood", "ocean-view", "lively"]
  },
  {
    id: "mistura",
    slug: "mistura",
    name: "Mistura",
    shortDescription: "Perfect for events and personalized group dining experiences.",
    description: "If you are planning an event or a personalized experience for groups, we are prepared to accompany you in your event. Mistura offers a unique dining experience with a focus on Peruvian-Japanese fusion cuisine, featuring fresh ingredients and innovative flavor combinations.",
    neighborhood: "Centro Histórico",
    type: ["restaurant", "event-space"],
    cuisine: ["Ceviche Bars", "Gastro Labs"],
    priceRange: "$$$",
    image: "/images/restaurants/mistura.avif",
    tags: ["events", "groups", "fusion"]
  },
  {
    id: "da-pietro",
    slug: "da-pietro",
    name: "Da Pietro",
    shortDescription: "Authentic Italian restaurant recreating the atmosphere of an Italian trattoria.",
    description: "In 1992 was born Restaurante Da Pietro in Cartagena de Indias. We are an Italian restaurant aiming to recreate the environment of an Italian trattoria, offering authentic Italian cuisine with the freshest ingredients and traditional recipes passed down through generations.",
    neighborhood: "Centro Histórico",
    type: ["restaurant", "italian"],
    cuisine: ["Italian"],
    priceRange: "$$$",
    image: "/images/restaurants/da-pietro.jpg",
    tags: ["authentic", "pasta", "wine"]
  },
  {
    id: "baruco-by-cuzco",
    slug: "baruco-by-cuzco",
    name: "Baruco by Cuzco",
    shortDescription: "Bar-restaurant inspired by nights with friends, drinks, and food.",
    description: "Baruco by Cuzco is a bar-restaurant inspired by nights with friends, drinks, and food. A place where you can have the best drinks in Cartagena, paired with delicious Peruvian-inspired dishes in a vibrant and social atmosphere.",
    neighborhood: "Getsemaní",
    type: ["bar", "restaurant"],
    cuisine: ["Ceviche Bars", "International Cuisine"],
    priceRange: "$$",
    image: "/images/restaurants/baruco.jpg",
    tags: ["cocktails", "nightlife", "social"]
  },
  {
    id: "cande",
    slug: "cande",
    name: "Candé",
    shortDescription: "The place to celebrate special occasions with an elegant dining experience.",
    description: "Whether you're celebrating a special occasion or looking for an excuse to get dressed up for a nice dinner, Candé is the place to go. This elegant restaurant offers a sophisticated dining experience that combines local ingredients with international techniques. The romantic atmosphere and impeccable service make it perfect for memorable evenings.",
    neighborhood: "Centro Histórico",
    type: ["restaurant"],
    cuisine: ["Colombian Fusion", "International Cuisine"],
    priceRange: "$$$$",
    image: "/images/restaurants/cande.webp",
    tags: ["romantic", "elegant", "special-occasion"]
  },
  {
    id: "pezetarian",
    slug: "pezetarian",
    name: "Pezetarian",
    shortDescription: "Fresh food full of flavor, colors and textures based on the pescetarian diet.",
    description: "'Fresh food, full of flavor, colors and textures' is the slogan of Pezetarian. A novel proposal based on the pescetarian diet, which offers unique and creative seafood dishes in a modern, health-conscious setting.",
    neighborhood: "Centro Histórico",
    type: ["restaurant", "seafood"],
    cuisine: ["Ceviche Bars", "Gastro Labs"],
    priceRange: "$$$",
    image: "/images/restaurants/pezetarian.jpg",
    tags: ["healthy", "seafood", "modern"]
  },
  {
    id: "andres-carne-de-res",
    slug: "andres-carne-de-res",
    name: "Andrés Carne de Res",
    shortDescription: "A vibrant dining experience with live music and Colombian cuisine.",
    description: "We let ourselves be infected by the charm and Caribbean flavor. A house that emerges from walled land and embarks on the conquest of the most demanding palates. Andrés Carne de Res brings its unique blend of restaurant, bar, and entertainment venue to Cartagena. Known for its lively atmosphere, extensive menu of Colombian specialties, and late-night party vibe, it's an experience that goes beyond just dining.",
    neighborhood: "Bocagrande",
    type: ["restaurant", "bar", "nightclub"],
    cuisine: ["Colombian Fusion", "Classic Caribbean"],
    priceRange: "$$$",
    image: "/images/restaurants/andres-carne-de-res.jpeg",
    tags: ["lively", "entertainment", "meat-lovers"]
  },
  {
    id: "la-cocina-de-pepina",
    slug: "la-cocina-de-pepina",
    name: "La Cocina de Pepina",
    shortDescription: "Authentic Colombian cuisine in a charming setting in the historic center.",
    description: "La Cocina de Pepina offers a true taste of Colombian home cooking in the heart of Cartagena's historic center. The restaurant is known for its traditional recipes passed down through generations.",
    neighborhood: "Centro Histórico",
    type: ["restaurant"],
    cuisine: ["Colombian Fusion"],
    priceRange: "$$",
    image: "/images/restaurants/la-cocina-de-pepina.jpg",
    tags: ["traditional", "local", "authentic"]
  },
  {
    id: "la-cevicheria",
    slug: "la-cevicheria",
    name: "La Cevicheria",
    shortDescription: "Iconic ceviche spot featured in Anthony Bourdain's 'No Reservations'.",
    description: "Made famous by Anthony Bourdain, La Cevicheria is a must-visit for seafood lovers. Their ceviche is prepared with the freshest ingredients and served in a vibrant, casual setting.",
    neighborhood: "Centro Histórico",
    type: ["restaurant", "seafood"],
    cuisine: ["Ceviche Bars", "Classic Caribbean"],
    priceRange: "$$$",
    image: "/images/restaurants/la-cevicheria.webp",
    tags: ["ceviche", "seafood", "famous"]
  },
  {
    id: "erre-by-ramon-frexia",
    slug: "erre-by-ramon-frexia",
    name: "Erre by Ramon Frexia",
    shortDescription: "Michelin-starred Spanish cuisine in a stunning colonial mansion.",
    description: "Experience the culinary excellence of Michelin-starred chef Ramón Freixa in this elegant restaurant set in a beautifully restored colonial mansion. The menu showcases innovative Spanish cuisine with local Colombian influences.",
    neighborhood: "Centro Histórico",
    type: ["restaurant", "fine-dining"],
    cuisine: ["Gastro Labs", "International Cuisine"],
    priceRange: "$$$$",
    image: "/images/restaurants/erre.jpg",
    tags: ["fine-dining", "luxury", "gourmet"]
  },
  {
    id: "don-juan",
    slug: "don-juan",
    name: "Don Juan",
    shortDescription: "Modern Colombian cuisine with a creative twist in a sophisticated setting.",
    description: "Don Juan offers a contemporary take on traditional Colombian dishes, using innovative techniques and presentation. The restaurant's elegant ambiance makes it perfect for special occasions.",
    neighborhood: "Centro Histórico",
    type: ["restaurant"],
    cuisine: ["Colombian Fusion", "Gastro Labs"],
    priceRange: "$$$",
    image: "/images/restaurants/don-juan.jpg",
    tags: ["modern", "romantic", "trendy"]
  },
  {
    id: "el-santismo",
    slug: "el-santismo",
    name: "El Santismo",
    shortDescription: "Elegant restaurant offering a fusion of international and Caribbean flavors.",
    description: "El Santismo combines international culinary techniques with Caribbean ingredients to create unique and flavorful dishes. The restaurant's sophisticated atmosphere is complemented by its creative cocktail menu.",
    neighborhood: "Centro Histórico",
    type: ["restaurant", "bar"],
    cuisine: ["International Cuisine", "Classic Caribbean"],
    priceRange: "$$$",
    image: "/images/restaurants/el-santismo.jpg",
    tags: ["fusion", "elegant", "cocktails"]
  },
  {
    id: "lunatico",
    slug: "lunatico",
    name: "Lunatico",
    shortDescription: "Trendy café and restaurant known for its specialty coffee and creative dishes.",
    description: "Lunatico is a favorite among locals and visitors alike, offering excellent coffee, delicious food, and a relaxed atmosphere. Their menu features creative dishes made with local ingredients.",
    neighborhood: "San Diego",
    type: ["cafe", "restaurant"],
    cuisine: ["Brunch", "International Cuisine"],
    priceRange: "$$",
    image: "/images/restaurants/lunatico.jpg",
    tags: ["coffee", "brunch", "casual"]
  },
  {
    id: "santa-guadalupe",
    slug: "santa-guadalupe",
    name: "Santa Guadalupe",
    shortDescription: "Rooftop bar and restaurant with stunning views of the city.",
    description: "Perched atop a colonial building, Santa Guadalupe offers breathtaking views of Cartagena's skyline. The menu features creative cocktails and a selection of international dishes with a local twist.",
    neighborhood: "Centro Histórico",
    type: ["bar", "restaurant", "rooftop"],
    cuisine: ["International Cuisine", "Classic Caribbean"],
    priceRange: "$$$",
    image: "/images/restaurants/santa-guadalupe.jpg",
    tags: ["rooftop", "views", "cocktails"]
  },
  {
    id: "la-girolata",
    slug: "la-girolata",
    name: "La Girolata",
    shortDescription: "Elegant Italian restaurant with authentic flavors and romantic ambiance.",
    description: "La Girolata brings the authentic taste of Italy to Cartagena with its carefully crafted pasta dishes, fresh seafood, and extensive wine list. The restaurant's charming courtyard provides a romantic setting for dinner.",
    neighborhood: "Centro Histórico",
    type: ["restaurant"],
    cuisine: ["Italian"],
    priceRange: "$$$",
    image: "/images/restaurants/la-girolata.jpg",
    tags: ["italian", "romantic", "pasta"]
  },
  {
    id: "la-vitrola",
    slug: "la-vitrola",
    name: "La Vitrola",
    shortDescription: "Iconic restaurant with live music and classic Cuban-Caribbean cuisine.",
    description: "A Cartagena institution, La Vitrola has been serving Cuban-Caribbean cuisine in a lively atmosphere with live music for decades. The restaurant's old-world charm and excellent mojitos make it a must-visit.",
    neighborhood: "Centro Histórico",
    type: ["restaurant", "bar"],
    cuisine: ["Classic Caribbean", "International Cuisine"],
    priceRange: "$$$",
    image: "/images/restaurants/la-vitrola.jpg",
    tags: ["live-music", "historic", "cocktails"]
  },
  {
    id: "marea-by-rausch",
    slug: "marea-by-rausch",
    name: "Marea by Rausch",
    shortDescription: "Upscale seafood restaurant by the Rausch brothers, Colombia's most famous chefs.",
    description: "Marea by Rausch brings the culinary excellence of the Rausch brothers to Cartagena's dining scene. The restaurant specializes in creative seafood dishes that highlight the best of Colombian coastal cuisine.",
    neighborhood: "Bocagrande",
    type: ["restaurant", "fine-dining"],
    cuisine: ["Classic Caribbean", "Colombian Fusion"],
    priceRange: "$$$$",
    image: "/images/restaurants/marea.jpg",
    tags: ["fine-dining", "seafood", "luxury"]
  }
];