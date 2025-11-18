// /data/pasadias.ts
export interface Destination {
  id: number
  title: string
  description: string
  includes: string[]
  notIncluded?: string[]
  menu?: string[] // Para menús de comida (Capri, etc.)
  activities?: string[] // Actividades adicionales
  extras?: string[] // Open bar, extras especiales
  notes?: string[] // Observaciones generales (para evitar confusión con price.notes)
  links?: Record<string, string> // Enlaces externos (políticas, menús, etc.)
  price: {
    adults: string
    children?: string[] // Se mantiene como arreglo para evitar conflicto
    notes?: string // Notas sobre condiciones o detalles de precios
  }
  schedule?: {
    location?: string
    meetingPoint?: string
    arrival?: string
    departure?: string
    return?: string
    availability?: string
    duration?: string
    reservationLimit?: string
  }
  services?: string[] // Servicios comunes en formato de lista
  serviceOptions?: Record<string, { price: string; details: string[] }> // Para servicios diferenciados como “tradicional / barra libre”
  tag?: string
  image: string
  images?: string[]
}


export const destinations: Destination[] = [
  {
    id: 1,
    title: "Pasadía Carey Beach",
    description:
      "Un destino paradisíaco de arena blanca y mar turquesa donde podrás disfrutar de un ambiente natural, almuerzo típico caribeño y relajarte bajo el sol. Ideal para desconectarte del estrés y reconectarte con la naturaleza.",
    includes: [
      "Transporte Cartagena - Carey Beach - Cartagena en vehículos climatizados.",
      "Recorrido terrestre de 1 hora y 15 minutos y recorrido marítimo de 10 minutos en lancha.",
      "Bebida de bienvenida.",
      "Playa de arena blanca.",
      "Uso de las instalaciones y comedores.",
      "Almuerzo a elección: Arroz de mariscos, Típico con pescado o pollo, Cazuela de mariscos o Plato vegetariano.",
      "Bebida no alcohólica con el almuerzo.",
      "Postre típico.",
      "Café colombiano.",
      "Impuestos incluidos."
    ],
    notIncluded: ["Gastos no especificados."],
    price: {
      adults: "COP $365.000",
      children: ["COP $335.000 (niños)"],
      notes: "Reserva mínima de dos personas."
    },
    schedule: {
      meetingPoint: "Punto de encuentro (Cartagena)",
      departure: "8:15 AM",
      return: "3:15 PM",
      availability: "Salidas diarias.",
      duration: "Pasadía completo."
    },
    services: [
      "Playa de arena blanca.",
      "Sillas y camas asoleadoras.",
      "Bar con bebidas y snacks.",
      "Restaurante y comedor.",
      "Zona de descanso."
    ],
    tag: "Naturaleza",
    image: "/images/pasadias/carey-beach-1.png",
    images: [
      "/images/pasadias/carey-beach-1.png",
      "/images/pasadias/carey-beach-2.png",
      "/images/pasadias/carey-beach-3.png"
    ]
  },
  {
    id: 2,
    title: "Pasadía Eteka Hotel",
    description:
      "Descubre Eteka, un exclusivo paraíso eco-luxury frente al mar con dos modalidades de pasadía: Light y VIP. Ideal para disfrutar de un día de descanso, buena comida y naturaleza a solo minutos de Cartagena.",
    includes: [
      "Transporte en lancha (ida y regreso).",
      "Coctel de bienvenida.",
      "Bebida no alcohólica para acompañar el almuerzo.",
      "Acceso a 2 playas y piscina.",
      "Toalla por persona por día."
    ],
    notIncluded: [
      "Impuesto de muelle.",
      "Gastos no especificados.",
      "Servicios no mencionados."
    ],
    price: {
      adults: "Desde COP $280.000 (Light) / COP $350.000 (VIP)",
      notes:
        "Pasadía Light: Almuerzo de 2 tiempos (plato fuerte y postre). Pasadía VIP: Almuerzo de 3 tiempos (entrada, plato fuerte y postre)."
    },
    schedule: {
      location: "Eteka Hotel, Isla de Tierra Bomba, Cartagena",
      availability: "Horarios de ida: 10:00 AM, 11:00 AM, 1:00 PM / Regreso: 4:00 PM, 5:00 PM, 6:00 PM",
      duration: "Pasadía de 1 día."
    },
    services: [
      "Acceso a dos playas y piscina.",
      "Ambientes musicales (Chillout y Crossover).",
      "Zonas VIP con deck y mirador (solo VIP)."
    ],
    tag: "Relax",
    image: "/images/pasadias/eteka-1.jpg",
    images: [
      "/images/pasadias/eteka-1.jpg",
      "/images/pasadias/eteka-2.jpg",
      "/images/pasadias/eteka-3.jpg"
    ]
  },
  {
    id: 3,
    title: "Pasadía Náutico Hostal Secreto",
    description:
      "Vive una experiencia única en el Hostal Secreto con ambiente caribeño, cócteles, kayak, piscina y playa privada. Perfecto para quienes buscan desconectarse y disfrutar de un día de sol, mar y buena música.",
    includes: [
      "Transporte en lancha rápida ida y regreso.",
      "Tres cócteles de la casa con alcohol.",
      "Kayak (30 minutos por la laguna).",
      "Almuerzo típico caribeño a elección (pescado, pollo, cerdo o vegetariano).",
      "Acceso a asoleadoras, piscina de agua dulce, playa privada, baños y duchas.",
      "Impuesto de zarpe incluido.",
      "Ambiente musical caribeño."
    ],
    notIncluded: [
      "Gastos no especificados.",
      "Ingreso de alimentos o bebidas externas.",
      "Uso de parlantes personales."
    ],
    price: {
      adults: "COP $330.000 (mayores de 16 años)",
      notes: "Disponible de jueves a domingo."
    },
    schedule: {
      meetingPoint: "Muelle La Bodeguita – Puerta #1",
      departure: "8:30 AM (llegar 7:30 AM)",
      return: "3:00 PM (sujeto a clima)",
      duration: "9:00 AM – 3:00 PM"
    },
    services: [
      "Piscina de agua dulce.",
      "Playa privada.",
      "Zonas comunes y asoleadoras.",
      "Kayak y actividades náuticas."
    ],
    tag: "Aventura",
    image: "/images/pasadias/hostal-secreto-1.jpg",
    images: [
      "/images/pasadias/hostal-secreto-1.jpg",
      "/images/pasadias/hostal-secreto-2.jpg",
      "/images/pasadias/hostal-secreto-3.jpg"
    ]
  },
  {
    id: 4,
    title: "Pasadía Amalife Beach",
    description:
      "Vive un día de relax y diversión en Amalife Beach, un paraíso tranquilo ubicado en la Isla de Tierra Bomba. Disfruta de su playa, piscina y deliciosa gastronomía con vista al mar Caribe.",
    includes: [
      "Transporte en lancha ida y regreso desde Cartagena.",
      "Bebida de bienvenida.",
      "Almuerzo a la carta con bebida no alcohólica.",
      "Uso de las instalaciones: playa, piscina, zona de hamacas y cancha de voleibol.",
      "Seguro contra accidentes."
    ],
    notIncluded: [
      "Gastos no especificados.",
      "Actividades o servicios no mencionados en el plan."
    ],
    price: {
      adults: "COP $150.000",
      children: [
        "2 a 4 años: Solo consumo.",
        "5 a 10 años: COP $100.000.",
        "11 años en adelante: COP $150.000."
      ],
      notes: "Niños de 5 años en adelante reciben jugo de bienvenida. Se aceptan todos los medios de pago."
    },
    schedule: {
      location: "Isla de Tierra Bomba, Cartagena, Colombia",
      availability: "Disponible todos los días.",
      duration: "Pasadía de 1 día."
    },
    services: [
      "Playa y piscina.",
      "Zona de hamacas.",
      "Cancha de voleibol.",
      "Restaurante a la carta.",
      "Transporte marítimo ida y regreso."
    ],
    tag: "Familiar",
    image: "/images/pasadias/amalife-beach-1.jpg",
    images: [
      "/images/pasadias/amalife-beach-1.jpg",
      "/images/pasadias/amalife-beach-2.jpg",
      "/images/pasadias/amalife-beach-3.jpg"
    ]
  },
   {
    id: 5,
    title: "Pasadía Ancestral Lounge – Playa Linda",
    description:
      "Disfruta de un día inolvidable en Ancestral Lounge, ubicado en Playa Linda, Isla de Tierra Bomba. Un ambiente exclusivo frente al mar abierto con coctel de bienvenida, música crossover y deliciosa comida típica caribeña.",
    includes: [
      "Transporte en lancha ida y regreso desde el Hospital de Bocagrande.",
      "Uso completo de las instalaciones (parasol para parejas, asoleadoras, camas, zona de playa).",
      "Coctel de bienvenida.",
      "Uso gratuito de tabla de paddle board.",
      "Almuerzo típico caribeño con opciones de pescado, pollo, arroz ancestral, chuleta en salsa de maracuyá o BBQ, y opción vegetariana.",
      "Consomé de pescado (para platos con pescado).",
      "Música crossover y DJ en vivo los fines de semana y festivos."
    ],
    notIncluded: [
      "Bebidas adicionales.",
      "Actividades no especificadas.",
      "Ingreso de licores o bebidas externas (se aplica descorche adicional)."
    ],
    price: {
      adults: "Consultar tarifa actual con la agencia.",
      notes: "Servicio disponible de jueves a martes. Miércoles cerrado por mantenimiento."
    },
    schedule: {
      meetingPoint: "Hospital de Bocagrande.",
      departure: "8:20 AM a 12:00 PM (Sábados, domingos y festivos) / 9:00 AM a 12:00 PM (Lunes, martes, jueves y viernes).",
      return: "2:30 PM a 5:00 PM según horario (consultar horarios disponibles).",
      duration: "Pasadía de 1 día.",
      availability: "De jueves a martes."
    },
    services: [
      "Playa con mar abierto.",
      "Parasol y camas para parejas.",
      "Asoleadoras y zonas de descanso.",
      "Música crossover con DJ en vivo.",
      "Restaurante típico caribeño.",
      "Paddle board gratuito."
    ],
    tag: "Cultural",
    image: "/images/pasadias/ancestral-lounge-1.jpg",
    images: [
      "/images/pasadias/ancestral-lounge-1.jpg",
      "/images/pasadias/ancestral-lounge-2.jpg",
      "/images/pasadias/ancestral-lounge-3.jpg"
    ]
  },
  {
  "id": 6,
  "title": "Pasadía Cool Beach – Playa Linda",
  "description": "Vive una experiencia tropical en Cool Beach, un sector paradisíaco de Playa Linda, Isla de Tierra Bomba. Disfruta de la brisa marina, deliciosa gastronomía típica, música crossover y un ambiente relajante frente al mar abierto.",
  "includes": [
    "Transporte en lancha ida y regreso desde el Hospital de Bocagrande.",
    "Uso de asoleadoras y camas (por orden de llegada).",
    "Parasol para parejas o grupos de 4 personas, acompañado de sillas y mesa.",
    "Almuerzo típico caribeño con opciones: Pescado (mojarra negra), Pollo (pechuga a la plancha), Carne asada o Vegetariano (arroz de vegetales).",
    "Acompañamientos: Arroz de coco o tradicional, patacones y ensalada (cebolla, zanahoria, repollo, lechuga y pepino).",
    "Consomé de pescado incluido en comidas con pescado.",
    "Música crossover durante toda la jornada."
  ],
  "notIncluded": [
    "Bebidas.",
    "Actividades no especificadas.",
    "Ingreso de licores o bebidas externas (se aplica descorche adicional)."
  ],
  "price": {
    "adults": "110.000 COP",
    "notes": "Disponible todos los días. No se permite ingreso de bebidas o alimentos externos."
  },
  "schedule": {
    "meetingPoint": "Hospital de Bocagrande.",
    "departure": "8:20 AM – 12:00 PM (embarques cada hora).",
    "return": "3:00 PM – 4:00 PM (retornos por hora).",
    "duration": "Pasadía de 1 día.",
    "availability": "Consultar horarios disponibles."
  },
  "services": [
    "Playa frente al mar abierto.",
    "Asoleadoras y camas por orden de llegada.",
    "Parasol para parejas o grupos.",
    "Restaurante típico caribeño.",
    "Música crossover ambiental."
  ],
  "tag": "Playa",
  "image": "/images/pasadias/cool-beach-1.jpg",
  "images": [
    "/images/pasadias/cool-beach-1.jpg",
    "/images/pasadias/cool-beach-2.jpg",
    "/images/pasadias/cool-beach-3.jpg"
  ]
},
{
  "id": 7,
  "title": "Pasadía Isla Real",
  "description": "Disfruta de una experiencia exclusiva en Isla Real, un destino paradisíaco con vista panorámica al Fuerte San Fernando de Bocachica. Relájate en un ambiente sofisticado con piscina, cóctel de bienvenida, música en vivo y deliciosa gastronomía caribeña.",
  "includes": [
    "Transporte náutico ida y regreso en bote deportivo.",
    "Vista panorámica del Fuerte San Fernando de Bocachica.",
    "Cóctel de bienvenida.",
    "Almuerzo con tres opciones de proteína: pescado, pechuga o cerdo.",
    "Acompañado de gaseosa o agua.",
    "Servicio de toalla.",
    "DJ en vivo.",
    "Uso y disfrute de las instalaciones."
  ],
  "notIncluded": [
    "Bebidas alcohólicas.",
    "Comidas adicionales.",
    "Mascotas.",
    "Armas."
  ],
  "price": {
    "adults": "$250.000",
    "children": ["Niños de 5 a 10 años $220.000"],
    "notes": "No está permitido el ingreso de bebidas, comidas, mascotas ni armas."
  },
  "schedule": {
    "departure": "10:00 AM",
    "return": "4:30 PM",
    "duration": "Pasadía de 1 día.",
    "meetingPoint": "Muelle designado por la agencia (consultar al reservar)."
  },
  "services": [
    "Piscina y áreas sociales.",
    "Restaurante y bar.",
    "DJ en vivo.",
    "Cóctel de bienvenida.",
    "Vista al mar y al Fuerte San Fernando."
  ],
  "tag": "Isla",
  "image": "/images/pasadias/isla-real-1.png",
  "images": [
    "/images/pasadias/isla-real-1.png",
    "/images/pasadias/isla-real-2.png",
    "/images/pasadias/isla-real-3.png"
  ]
},
{
  "id": 8,
  "title": "Pasadía Capri Beach Club",
  "description": "Vive una experiencia exclusiva en Capri Beach Club, un paraíso frente al mar con tour panorámico por el archipiélago, open bar, cóctel de bienvenida y actividades acuáticas como paddle board y snorkel. Disfruta de música, gastronomía caribeña y servicio de primera.",
  "includes": [
    "Transporte ida y vuelta en bote deportivo.",
    "Host bilingüe (español e inglés).",
    "Cóctel de bienvenida sin alcohol.",
    "Tour panorámico del archipiélago (45 minutos).",
    "Uso de áreas comunes: comedores, baños, playa y zona bar.",
    "Uso de asoleadoras.",
    "Servicio de toallas y agua dulce.",
    "Almuerzo con bebida no alcohólica (agua, gaseosa o limonada natural)."
  ],
  "menu": [
    "Bandeja típica caribeña (pesca del día) con arroz y patacones.",
    "Pasta Capri con vegetales salteados.",
    "Arroz de mariscos.",
    "Pechuga grill con arroz y patacones.",
    "Nuggets de pollo con papas a la francesa."
  ],
  "activities": [
    "Paddle board.",
    "Máscara de snorkel.",
    "DJ en vivo los fines de semana (sábados y domingos)."
  ],
  "extras": [
    "Open Bar de 11:00 AM a 1:00 PM (no aplica durante el tour panorámico).",
    "Incluye Margarita, Cóctel de la Casa y Cerveza Nacional."
  ],
  "price": {
    "adults": "$460.000",
    "children": ["Niños desde $220.000"],
    "notes": "No se aceptan mujeres embarazadas. La experiencia está sujeta a condiciones climáticas."
  },
  "schedule": {
    "meetingPoint": "Muelle La Bodeguita - Puerta N°3 (Recepción segundo piso - Terraza).",
    "arrival": "7:30 AM",
    "departure": "8:15 AM",
    "return": "3:30 PM (sujeto a condiciones climáticas)",
    "reservationLimit": "Reservas garantizadas hasta las 8:00 AM."
  },
  "links": {
    "menu": "https://capri-restaurant-beach-club.ola.click/products",
    "safetyRules": "https://t.ly/-8HJw",
    "cancellationPolicy": "https://t.ly/N-8EB"
  },
  "tag": "Isla",
  "image": "/images/pasadias/capri-beach-club-1.jpg",
  "images": [
    "/images/pasadias/capri-beach-club-1.jpg",
    "/images/pasadias/capri-beach-club-2.jpg",
    "/images/pasadias/capri-beach-club-3.jpg"
  ]
},
{
  id: 9,
  title: "Tour en Yate Carrousel – Bahía de Cartagena",
  description: "Disfruta del mejor atardecer caribeño a bordo del Carrousel Yacht Extraordinaire...",
  includes: [
    "2 horas de navegación por la bahía de las Ánimas (interna y externa).",
    "Música crossover durante todo el recorrido.",
    "Servicio a la mesa.",
    "Salones de lujo con aire acondicionado.",
    "Vista panorámica desde el rooftop."
  ],
  price: {
    adults: "Desde $110.000",
    notes: "Consultar opciones de barra libre o tradicional."
  },
  serviceOptions: {
    tradicional: {
      price: "$110.000",
      details: [
        "Barra libre en bebidas no alcohólicas (gaseosa, limonada, agua).",
        "2 bebidas alcohólicas (cerveza, cuba libre o mojito)."
      ]
    },
    barraLibre: {
      price: "$130.000",
      details: [
        "Cerveza, vino, cuba libre, gaseosa, limonada y agua."
      ]
    }
  },
  notes: ["No incluye tasa portuaria."],
  tag: "Yate",
  image: "/images/pasadias/carrousel-yacht-1.jpg",
  images: [
    "/images/pasadias/carrousel-yacht-1.jpg",
    "/images/pasadias/carrousel-yacht-2.jpg",
    "/images/pasadias/carrousel-yacht-3.jpg"
  ]
}





]