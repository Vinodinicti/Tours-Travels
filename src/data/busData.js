export const CLIENT_BUS_INFO = {
  name: "Sri Saranya Travels",
  tagline: "Luxury Bus Tour Packages Across South India",
  slogan: "YOUR COMFORTABLE JOURNEY ACROSS TAMIL NADU & BEYOND",
  phones: ["+91 99769 88885", "+91 90035 05050", "+91 90039 99991"],
  rawPhones: ["9976988885", "9003505050", "9003999991"],
  email: "srisaranyatours@gmail.com",
  locations: [
    "Coimbatore",
    "Chennai",
    "Bangalore",
    "Thiruchendur",
    "Velankanni",
    "Pondicherry",
    "Kumbakonam",
    "Chidambaram",
    "Karaikal",
    "Nagerkovil",
    "Trivandrum",
    "Karaikudi",
    "Devakottai",
    "Ernakulam",
    "Hyderabad"
  ]
};

export const FEATURED_DESTINATIONS_PER_DAY = [
  {
    id: "dest-1",
    name: "Kumbakonam & Chidambaram Navagraha Circuit",
    from: "Coimbatore",
    to: "Kumbakonam",
    location: "Kaveri Delta",
    perDayPrice: 2600,
    formattedPrice: "₹2,600 / Day",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=70",
    short: "Complete Navagraha 9 temples spiritual tour circuit combined with Chidambaram Natarajar temple darshan.",
    highlights: ["Navagraha 9 Temples VIP Darshan", "Chidambaram Natarajar Temple", "Golden Volvo AC Coach", "Karaikal Beach Stop"]
  },
  {
    id: "dest-2",
    name: "Velankanni & Pondicherry Coastal Express",
    from: "Coimbatore",
    to: "Velankanni",
    location: "East Coast Highway",
    perDayPrice: 2800,
    formattedPrice: "₹2,800 / Day",
    image: "/velankanni.webp",
    short: "Sacred Basilica of Velankanni prayer mass combined with French quarter strolls and promenade beach in Pondicherry.",
    highlights: ["Velankanni Shrine Prayer Mass", "Pondicherry French Quarter", "ECR Coastal Drive", "3-Star Hotel Stay"]
  },
  {
    id: "dest-3",
    name: "Thiruchendur & Nagerkovil Pilgrimage Special",
    from: "Chennai",
    to: "Thiruchendur",
    location: "Southern Coast",
    perDayPrice: 2700,
    formattedPrice: "₹2,700 / Day",
    image: "/nagerkovil.webp",
    short: "Sea-shore Murugan Temple darshan in Thiruchendur with Nagerkovil & Trivandrum Padmanabhaswamy visit.",
    highlights: ["Thiruchendur Sea-shore Temple", "Padmanabhaswamy Temple", "Nagerkovil Scenic Route", "Deluxe Sleeper Coach"]
  },
  {
    id: "dest-4",
    name: "Karaikudi & Devakottai Chettinad Heritage",
    from: "Coimbatore",
    to: "Karaikudi",
    location: "Sivagangai District",
    perDayPrice: 2500,
    formattedPrice: "₹2,500 / Day",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=70",
    short: "Grand Chettinad heritage mansions, antique markets, and famous Chettinad cuisine tour.",
    highlights: ["Chettinad Palace Tour", "Devakottai Mansions", "Traditional Cuisine", "AC Sleeper Comfort"]
  },
  {
    id: "dest-5",
    name: "Coimbatore, Chennai & Bangalore Express",
    from: "Coimbatore",
    to: "Bangalore",
    location: "Metropolitan Circuit",
    perDayPrice: 2400,
    formattedPrice: "₹2,400 / Day",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=70",
    short: "Daily luxury interstate sleeper bus connecting Coimbatore, Chennai, and Bangalore with punctual timing.",
    highlights: ["24/7 Daily Departures", "Volvo Multi-Axle Sleeper", "GPS Live Tracking", "Recliner Berths"]
  },
  {
    id: "dest-6",
    name: "Trivandrum & Ernakulam Kerala Express",
    from: "Coimbatore",
    to: "Trivandrum",
    location: "Kerala Coast",
    perDayPrice: 2900,
    formattedPrice: "₹2,900 / Day",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=70",
    short: "Interstate coastal bus tour covering Trivandrum backwaters, Kovalam beach, and Ernakulam port city.",
    highlights: ["Kovalam Beach Sunset", "Ernakulam Harbour Tour", "Air-Suspended Coach", "Sanitized Berths"]
  },
  {
    id: "dest-7",
    name: "Hyderabad & Karaikal Interstate Tour",
    from: "Chennai",
    to: "Hyderabad",
    location: "Interstate Highway",
    perDayPrice: 3100,
    formattedPrice: "₹3,100 / Day",
    image: "/hyderabad.webp",
    short: "Long-distance interstate tour connecting Hyderabad Charminar circuit and Karaikal coastal beach.",
    highlights: ["Charminar & Ramoji Tour", "Karaikal Port Visit", "Executive Sleeper", "Onboard Charging"]
  }
];

export const BUS_FLEET_3D = [
  {
    id: "volvo-sleeper",
    name: "Volvo B11R Multi-Axle AC Sleeper",
    badge: "2+1 Luxury Sleeper",
    modelCode: "Volvo 9600 B11R Multi-Axle",
    enginePower: "410 HP D11 Euro-6",
    suspension: "Electronically Controlled Air Suspension (ECAS)",
    suspensionShort: "Air Suspension ECAS",
    safety: "ABS, EBS & Retarder",
    berthSpec: "6.5ft Memory Berths",
    charging: "USB & 220V Outlets",
    availability: "Available Daily",
    availableSeats: "8 Berths Left",
    totalSeats: "36 Berths",
    seatType: "2+1 Sleeper",
    acType: "Dual Zone Climate AC",
    startingFare: "₹1,450",
    perDayRate: 3500,
    perDayFare: "₹3,500 / Day",
    image: "/bus-1.webp",
    frontSpecs: "Ultra-quiet air suspension, dual AC climate control, LED ambient lighting, individual berth curtains.",
    amenities: ["Free High-Speed Wi-Fi", "USB & 220V Charging", "Fresh Sanitized Blankets", "Live GPS Telematics", "Personal Reading Lamp", "Free Mineral Water Bottle"],
    seatLayout: "2+1 Upper & Lower Sleeper Berths",
    popularRoute: "Coimbatore ⇄ Chennai ⇄ Bangalore"
  },
  {
    id: "scania-semi-sleeper",
    name: "Golden Volvo Luxury Tour Coach",
    badge: "Pushback Seater",
    modelCode: "Scania Metrolink HD Executive",
    enginePower: "380 HP Turbo Coach",
    suspension: "Full Pneumatic Soft Air Suspension",
    suspensionShort: "Pneumatic Air Suspension",
    safety: "ABS & Emergency Hatches",
    berthSpec: "140° Calf-Rest Seats",
    charging: "Twin Fast USB Chargers",
    availability: "Available Daily",
    availableSeats: "14 Seats Left",
    totalSeats: "40 Seats",
    seatType: "2+2 Pushback",
    acType: "Twin Blower Roof AC",
    startingFare: "₹1,150",
    perDayRate: 3000,
    perDayFare: "₹3,000 / Day",
    image: "/bus-2.webp",
    frontSpecs: "Reclining ergonomic leather seats, calf support leg rest, movie entertainment screen, smooth highway suspension.",
    amenities: ["Deep Recline Seats", "Calf & Leg Rest", "Dual USB Ports", "Emergency Exit Systems", "First Aid Onboard", "Large Luggage Boot"],
    seatLayout: "2+2 Executive Reclining Seats",
    popularRoute: "Thiruchendur ⇄ Velankanni ⇄ Pondicherry"
  },
  {
    id: "neeta-ac-sleeper",
    name: "Neeta Premium AC Sleeper Bus",
    badge: "Executive Sleeper",
    modelCode: "BharatBenz / Neeta 12M Intercity",
    enginePower: "330 HP Common Rail",
    suspension: "Multi-Bellow Highway Air Suspension",
    suspensionShort: "Multi-Air Bellows",
    safety: "ABS & Speed Governors",
    berthSpec: "Ventilated AC Berths",
    charging: "Bedside USB Outlets",
    availability: "Available Daily",
    availableSeats: "10 Berths Left",
    totalSeats: "32 Berths",
    seatType: "2+1 Sleeper",
    acType: "Full Chill AC Sleeper",
    startingFare: "₹950",
    perDayRate: 2800,
    perDayFare: "₹2,800 / Day",
    image: "/bus-3.webp",
    frontSpecs: "Spacious ventilated berths, soft foam mattresses, individual window curtains, daily outstation tours.",
    amenities: ["Super Chill Climate AC", "Bedside Charging Outlets", "Roomy Sleeper Berths", "24/7 Fleet Driver Support", "Vetted Night Highway Captains"],
    seatLayout: "2+1 AC Sleeper Berths",
    popularRoute: "Kumbakonam ⇄ Chidambaram ⇄ Karaikudi"
  }
];

export const BUS_TOUR_PACKAGES = [
  {
    id: "bus-pkg-1",
    name: "Tamil Nadu Navagraha & Temple Bus Tour",
    defaultDays: 3,
    duration: "3 Days / 2 Nights",
    startingFare: "₹2,600",
    perDayPrice: 2600,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=70",
    placesCovered: ["Kumbakonam", "Chidambaram", "Thanjavur", "Sirkazhi", "Karaikal"],
    busDetail: "Golden Volvo AC Luxury Coach",
    highlights: [
      "9 Navagraha Temples Special VIP Entry",
      "Chidambaram Natarajar & Thanjavur Big Temple Darshan",
      "Hotel Accommodation Included with Tour Leader Assistance",
      "Daily Boarding from Coimbatore, Chennai & Bangalore"
    ]
  },
  {
    id: "bus-pkg-2",
    name: "Velankanni & East Coast Highway Bus Package",
    defaultDays: 3,
    duration: "3 Days / 2 Nights",
    startingFare: "₹2,800",
    perDayPrice: 2800,
    image: "/velankanni.webp",
    placesCovered: ["Velankanni Shrine", "Pondicherry", "Karaikal Beach", "Thiruchendur"],
    busDetail: "Volvo Multi-Axle AC Sleeper",
    highlights: [
      "Velankanni Basilica Holy Mass Prayer",
      "Pondicherry French Quarter & Promenade Beach Walk",
      "Thiruchendur Sea-shore Temple Visit",
      "3-Star Hotel Stay with AC Bus Transport"
    ]
  },
  {
    id: "bus-pkg-3",
    name: "Chettinad Heritage & Trivandrum Coastal Express",
    defaultDays: 4,
    duration: "4 Days / 3 Nights",
    startingFare: "₹3,000",
    perDayPrice: 3000,
    image: "/nagerkovil.webp",
    placesCovered: ["Karaikudi", "Devakottai", "Nagerkovil", "Trivandrum"],
    busDetail: "Air-Suspended Luxury AC Coach",
    highlights: [
      "Chettinad Palace & Heritage Mansion Tour in Karaikudi & Devakottai",
      "Padmanabhaswamy Temple & Kovalam Beach Sunset",
      "Traditional South Indian Cuisine & Hotel Accommodation",
      "Comfortable Air-Suspended Volvo Sleeper Bus"
    ]
  },
  {
    id: "bus-pkg-4",
    name: "Ooty & Kodaikanal Hill Station Bus Special",
    defaultDays: 3,
    duration: "3 Days / 2 Nights",
    startingFare: "₹3,200",
    perDayPrice: 3200,
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=70",
    placesCovered: ["Ooty Lake", "Doddabetta Peak", "Kodaikanal Lake", "Botanical Gardens"],
    busDetail: "Volvo AC Mountain Sleeper Coach",
    highlights: [
      "Ooty Botanical Gardens & Doddabetta Peak Viewpoint",
      "Kodaikanal Lake Boating & Coaker's Walk Sunset",
      "Scenic Mountain Highway Drive with Experienced Hill Drivers",
      "Luxury Resort & Hotel Accommodation Included"
    ]
  }
];
