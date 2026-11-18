import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    name: "Construction Equipment",
    slug: "construction-equipment",
    description: "Seals, hoses and service parts for equipment that works under demanding site conditions.",
    image: "/images/construction.jpg",
    alt: "Yellow construction equipment working outdoors",
    products: ["Oil seals", "Hydraulic seals", "Hydraulic hoses & fittings", "JCB spare parts"],
  },
  {
    name: "Agricultural Machinery",
    slug: "agricultural-machinery",
    description: "Practical replacement product support for tractors and agricultural machinery maintenance.",
    image: "/images/agriculture.jpg",
    alt: "Blue tractor in a green agricultural field",
    products: ["Oil seals", "Hydraulic seals", "Hydraulic hoses & fittings", "Tractor spare parts"],
  },
  {
    name: "Industrial Machinery",
    slug: "industrial-machinery",
    description: "Sealing products and components for the machines that keep industrial operations moving.",
    image: "/images/industrial.jpg",
    alt: "Industrial machinery in a workshop",
    products: ["Oil seals", "Hydraulic seals", "Pneumatic & PU seals", "Hydraulic hoses & fittings"],
  },
  {
    name: "Hydraulic Systems",
    slug: "hydraulic-systems",
    description: "Application-led product conversations for cylinders, hoses, fittings and hydraulic assemblies.",
    image: "/images/hydraulic-systems.jpg",
    alt: "Hydraulic hoses and steel fittings in a workshop",
    products: ["Hydraulic seals", "Hydraulic hoses & fittings", "Oil seals", "JCB spare parts"],
  },
];
