export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string[];
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hydraulic Dock Leveler",
    category: "Dock Leveler",
    shortDescription:
      "Heavy-duty dock leveler for smooth and safe loading operations",
    description:
      "Our Hydraulic Dock Leveler is engineered for durability, reliability, and performance. Designed for seamless loading and unloading, it provides maximum safety and ensures minimal maintenance. Ideal for industrial and commercial facilities handling high-volume logistics operations.",
    image: [
      "/assets/dl1.jpg",
      "/assets/dl2.jpg",
      "/assets/dl3.jpg",
      "/assets/dl4.jpg",
      "/assets/dl5.jpg",
    ],
    features: [
      "Automatic hydraulic lifting mechanism",
      "Anti-slip deck surface for operator safety",
      "Heavy-duty structural steel frame",
      "Lip extension for trailer contact stability",
      "Weather-resistant design for long-term outdoor use",
      "Minimal maintenance with sealed hydraulic components",
    ],
    specifications: [
      { label: "Load Capacity", value: "25,000 – 50,000 lbs" },
      { label: "Platform Size", value: "6' x 8' (custom options available)" },
      { label: "Vertical Travel", value: "±12 inches" },
      { label: "Operating Pressure", value: "1800–2200 PSI" },
      { label: "Power Supply", value: "230V AC, 1 Phase" },
      { label: "Material", value: "High-tensile steel plate" },
      { label: "Finish", value: "Epoxy powder coating" },
    ],
  },
  {
    id: 2,
    name: "Armored Expansion Joint",
    category: "Armour Joint",
    shortDescription: "Durable armored joint for industrial-grade floors",
    description:
      "The Armored Expansion Joint ensures smooth load transfer across concrete slabs in heavy-traffic industrial areas. Built to absorb floor movement and vibration while maintaining structural strength and durability.",
    image: [
      "/assets/ar1.png",
      "/assets/ar2.png",
      "/assets/ar3.jpg",
      "/assets/ar4.jpg",
      "/assets/ar5.jpg",
      "/assets/ar6.jpg",
      "/assets/ar7.jpg",
    ],
    features: [
      "Withstands heavy forklift and vehicle traffic",
      "Protects concrete edges from chipping",
      "Allows for controlled thermal expansion and contraction",
      "Easy installation and alignment",
      "Corrosion-resistant galvanized steel finish",
      "Long service life with minimal maintenance",
    ],
    specifications: [
      { label: "Load Rating", value: "Class A - Heavy Duty" },
      { label: "Movement Range", value: "±25 mm" },
      { label: "Material", value: "Hot dip galvanized steel" },
      { label: "Joint Width", value: "100 mm – 200 mm" },
      { label: "Length", value: "2.5 meters per section" },
      { label: "Finish", value: "Anti-corrosive coating" },
    ],
  },
  {
    id: 3,
    name: "Diamond Dowel Plate",
    category: "Armour Joint",
    shortDescription:
      "Precision-engineered diamond dowel for load transfer and alignment",
    description:
      "The Diamond Dowel Right Angle provides superior load transfer across concrete joints while allowing controlled movement. Its unique geometry minimizes stress concentrations, improving floor durability and performance.",
    image: [
      "/assets/ddr1.jpg",
      "/assets/ddr2.jpg",
      "/assets/ddr3.jpg",
      "/assets/ddr4.jpg",
      "/assets/ddr5.png",
    ],
    features: [
      "Ensures even load distribution across slab joints",
      "Reduces cracking and spalling",
      "Easy alignment with dowel sleeves",
      "Corrosion-resistant zinc-plated finish",
      "Ideal for industrial and warehouse flooring",
      "Quick and cost-effective installation",
    ],
    specifications: [
      { label: "Material", value: "Carbon steel with zinc coating" },
      { label: "Thickness", value: "6 mm – 10 mm" },
      { label: "Size", value: "100 mm x 100 mm" },
      { label: "Load Transfer Efficiency", value: "≥ 80%" },
      { label: "Surface Finish", value: "Smooth for minimal friction" },
    ],
  },
  {
    id: 4,
    name: "Diamond Dowel Sleeve",
    category: "Armour Joint",
    shortDescription:
      "High-quality sleeve system for diamond dowel installation",
    description:
      "The Diamond Dowel Sleeve ensures precise alignment and movement control for diamond dowel systems. It allows slabs to expand and contract naturally, reducing joint failure and floor damage.",
    image: [
      "/assets/dds1.png",
      "/assets/dds2.png",
      "/assets/dds3.png",
      "/assets/dds4.png",
    ],
    features: [
      "Guarantees perfect dowel alignment during concrete pouring",
      "Allows free movement along one axis to prevent restraint cracking",
      "Made of durable, impact-resistant polymer",
      "Quick installation with secure dowel locking",
      "Compatible with all standard diamond dowels",
      "Corrosion and chemical resistant",
    ],
    specifications: [
      { label: "Material", value: "High-density polyethylene (HDPE)" },
      { label: "Compatibility", value: "6–10 mm diamond dowels" },
      { label: "Operating Temperature", value: "-20°C to 80°C" },
      { label: "Installation Method", value: "Clip-fit and lock-in" },
      { label: "Color", value: "Standard black" },
    ],
  },
  {
    id: 5,
    name: "PCC Bolt",
    category: "Armour Joint",
    shortDescription: "High-strength anchor bolt for concrete construction",
    description:
      "PCC Bolts (Precast Concrete Connection Bolts) are designed for secure anchoring in heavy-duty concrete applications. They provide superior grip and durability, ideal for joints, machinery foundations, and floor reinforcements.",
    image: ["/assets/pcc.png"],
    features: [
      "High tensile and shear strength",
      "Corrosion-resistant finish for outdoor applications",
      "Easy installation with standard tools",
      "Available in multiple diameters and lengths",
      "Ensures stable and vibration-resistant connections",
      "Ideal for precast and industrial flooring systems",
    ],
    specifications: [
      { label: "Material", value: "Grade 8.8 carbon steel" },
      { label: "Thread Type", value: "Metric (M12 – M24)" },
      { label: "Length", value: "100 mm – 300 mm" },
      { label: "Finish", value: "Zinc-plated or galvanized" },
      { label: "Tensile Strength", value: "≥ 800 MPa" },
      { label: "Standard", value: "ISO 898-1 compliant" },
    ],
  },
  {
    id: 6,
    name: "Fire Extinguisher",
    category: "Fire Safety Equipments",
    shortDescription:
      "Reliable and easy-to-use fire extinguisher for all environments",
    description:
      "A multi-purpose fire extinguisher designed to quickly suppress fires in industrial, commercial, and residential environments. Compact, efficient, and certified for multiple fire classes, ensuring safety and compliance.",
    image: ["/assets/product-4.jpg"],
    features: [
      "Suitable for Class A, B, and C fires",
      "Easy-to-use trigger and pressure gauge",
      "Corrosion-resistant cylinder body",
      "Refillable and reusable design",
      "Wall-mountable for easy access",
      "Certified for industrial and residential use",
    ],
    specifications: [
      { label: "Extinguishing Agent", value: "ABC Dry Powder" },
      { label: "Capacity", value: "4.5 kg" },
      { label: "Discharge Time", value: "12–15 seconds" },
      { label: "Discharge Range", value: "4–6 meters" },
      { label: "Operating Pressure", value: "15 bar" },
      { label: "Certification", value: "IS 15683:2018, CE Approved" },
    ],
  },
  // 🔥 New Fire Safety Equipments
  {
    id: 7,
    name: "Fire Detector",
    category: "Fire Safety Equipments",
    shortDescription: "Early warning fire detector with high sensitivity",
    description:
      "An intelligent fire detector designed to identify smoke or heat changes instantly. It provides early alerts to prevent fire spread in commercial and residential spaces.",
    image: ["/assets/detector.webp"],
    features: [
      "High-sensitivity smoke detection",
      "Low power consumption design",
      "LED indicator for alarm status",
      "Compatible with all fire panels",
      "Quick response for life safety",
    ],
    specifications: [
      { label: "Type", value: "Photoelectric Smoke Detector" },
      { label: "Voltage", value: "24V DC" },
      { label: "Alarm Sound", value: "≥85 dB @ 3m" },
      { label: "Operating Temperature", value: "-10°C to 55°C" },
      { label: "Mounting", value: "Ceiling mount" },
    ],
  },
  {
    id: 8,
    name: "Fire Alarm System",
    category: "Fire Safety Equipments",
    shortDescription: "Smart fire alarm system with centralized control",
    description:
      "Our Fire Alarm System provides real-time fire detection and alerting across large facilities. It connects detectors, manual call points, and sounders to ensure quick emergency response.",
    image: ["/assets/alarm.webp"],
    features: [
      "Centralized monitoring and control",
      "Supports multiple detection zones",
      "Automatic siren and strobe activation",
      "Expandable system for large sites",
      "Complies with IS and EN fire standards",
    ],
    specifications: [
      { label: "Power Supply", value: "230V AC / 24V DC" },
      { label: "Zones", value: "2 to 16 expandable" },
      { label: "Display", value: "LCD with status indicators" },
      { label: "Alarm Output", value: "Sounder + Relay" },
      { label: "Communication", value: "Wired / RS485" },
    ],
  },
  {
    id: 9,
    name: "Fire Sprinkler System",
    category: "Fire Safety Equipments",
    shortDescription: "Automatic water-based fire suppression system",
    description:
      "The Fire Sprinkler System automatically detects and suppresses fires using water spray. Ideal for offices, warehouses, and commercial buildings for continuous fire protection.",
    image: ["/assets/sprinkler.webp"],
    features: [
      "Automatic activation under high heat",
      "Uniform water distribution pattern",
      "Low maintenance and reliable operation",
      "Available in pendant, upright, and sidewall types",
      "Compatible with wet and dry systems",
    ],
    specifications: [
      { label: "Operating Pressure", value: "7–12 bar" },
      { label: "Temperature Rating", value: "68°C – 141°C" },
      { label: "Material", value: "Brass / Stainless Steel" },
      { label: "Thread Size", value: "½ inch BSPT" },
      { label: "Finish", value: "Chrome plated" },
    ],
  },
  {
    id: 10,
    name: "Fire Hose Reel",
    category: "Fire Safety Equipments",
    shortDescription:
      "Durable and efficient fire hose reel for emergency use",
    description:
      "Fire Hose Reels are designed for controlled delivery of water during firefighting operations. Easy to operate and suitable for indoor and outdoor installations.",
    image: ["/assets/reel.jpg"],
    features: [
      "Continuous water flow control",
      "Non-kink high-pressure hose",
      "Automatic nozzle for adjustable spray",
      "Wall-mounted for easy access",
      "Corrosion-resistant drum and fittings",
    ],
    specifications: [
      { label: "Hose Length", value: "30 meters" },
      { label: "Hose Diameter", value: "19 mm" },
      { label: "Working Pressure", value: "12 bar" },
      { label: "Material", value: "Rubber / Thermoplastic" },
      { label: "Standard", value: "IS 884 compliant" },
    ],
  },
  {
    id: 11,
    name: "Bulb Sprinkler",
    category: "Fire Safety Equipments",
    shortDescription: "Glass bulb sprinkler for automatic fire suppression",
    description:
      "The Bulb Sprinkler activates automatically when the surrounding temperature rises beyond a preset limit, releasing water to extinguish fires effectively.",
    image: ["/assets/bulb.webp"],
    features: [
      "Quick response with heat-sensitive bulb",
      "Available in different temperature ratings",
      "Uniform spray pattern for maximum coverage",
      "Nickel-chrome corrosion protection",
      "Tested for reliability and safety",
    ],
    specifications: [
      { label: "Temperature Rating", value: "68°C / 79°C / 93°C" },
      { label: "K-Factor", value: "80 / 115" },
      { label: "Material", value: "Brass" },
      { label: "Finish", value: "Chrome plated" },
      { label: "Thread Size", value: "½ inch BSPT" },
    ],
  },
  {
    id: 12,
    name: "Wet Riser System",
    category: "Fire Safety Equipments",
    shortDescription:
      "High-pressure wet riser system for multi-floor fire safety",
    description:
      "The Wet Riser System provides a pressurized water supply throughout a building to enable firefighters to quickly access water at every floor level.",
    image: ["/assets/wet.webp"],
    features: [
      "Constantly pressurized water supply",
      "Suitable for multi-storey buildings",
      "Easy hose connection with landing valves",
      "Stainless steel or mild steel piping",
      "IS-standard certified components",
    ],
    specifications: [
      { label: "Pressure", value: "7–10 bar" },
      { label: "Pipe Diameter", value: "100 mm – 150 mm" },
      { label: "Material", value: "MS / SS with red enamel coating" },
      { label: "Pump Capacity", value: "2850 LPM" },
      { label: "Standard", value: "IS 3844:2014 compliant" },
    ],
  },
  {
    id: 13,
    name: "CO₂ Flooding System",
    category: "Fire Safety Equipments",
    shortDescription:
      "Automatic CO₂-based fire suppression for enclosed areas",
    description:
      "The CO₂ Flooding System releases carbon dioxide gas to rapidly extinguish fires by displacing oxygen, ideal for electrical rooms, server areas, and machinery spaces.",
    image: ["/assets/co.webp"],
    features: [
      "Non-conductive and residue-free agent",
      "Quick suppression without damage",
      "Automatic or manual activation options",
      "Suitable for electrical and flammable liquid fires",
      "High discharge efficiency",
    ],
    specifications: [
      { label: "Agent", value: "Carbon Dioxide (CO₂)" },
      { label: "Storage Pressure", value: "50 bar" },
      { label: "Discharge Time", value: "< 60 seconds" },
      { label: "Activation", value: "Manual / Auto release" },
      { label: "Standard", value: "NFPA 12 compliant" },
    ],
  },
  {
    id: 14,
    name: "Manual Call Point",
    category: "Fire Safety Equipments",
    shortDescription:
      "Manual emergency fire alarm trigger for all safety systems",
    description:
      "Manual Call Points allow occupants to manually raise a fire alarm by breaking the glass and activating the system, ensuring immediate response and evacuation.",
    image: ["/assets/manual.webp"],
    features: [
      "Quick manual activation",
      "Break-glass mechanism for safety",
      "LED indicator for alarm confirmation",
      "Resettable design for reuse",
      "Compatible with all fire panels",
    ],
    specifications: [
      { label: "Operating Voltage", value: "24V DC" },
      { label: "Material", value: "ABS plastic body" },
      { label: "Mounting Type", value: "Surface / Flush mount" },
      { label: "Standard", value: "IS/EN 54 compliant" },
      { label: "Color", value: "Red" },
    ],
  },
];

export const categories = [
  "All",
  "Dock Leveler",
  "Armour Joint",
  "Fire Safety Equipments",
];
