import type { Product, ProductCategory } from "@/types";

export const productCategories: Array<{
  slug: ProductCategory;
  name: string;
  shortName: string;
  description: string;
  image: string;
  alt: string;
  priority?: boolean;
}> = [
  {
    slug: "oil-seals",
    name: "Oil Seals",
    shortName: "Oil seals",
    description: "Radial shaft, rotary and application-led oil seal enquiries.",
    image: "/images/oil-seals.jpg",
    alt: "Brown and black radial shaft oil seals",
    priority: true,
  },
  {
    slug: "hydraulic-seals",
    name: "Hydraulic Seals",
    shortName: "Hydraulic seals",
    description: "Rod, piston, wiper and seal kit requirements for hydraulic equipment.",
    image: "/images/hydraulic-seals.jpg",
    alt: "Blue hydraulic seals arranged on white",
  },
  {
    slug: "pneumatic-seals",
    name: "Pneumatic & PU Seals",
    shortName: "Pneumatic & PU",
    description: "Pneumatic seal profiles, U-seals and PU seal enquiries.",
    image: "/images/pneumatic-seals.jpg",
    alt: "Green pneumatic and polyurethane seal profiles",
  },
  {
    slug: "hydraulic-hoses",
    name: "Hydraulic Hoses & Fittings",
    shortName: "Hoses & fittings",
    description: "Hydraulic hoses, fittings and assembly requirements for working systems.",
    image: "/images/hydraulic-hoses.jpg",
    alt: "Black hydraulic hoses with silver fittings",
  },
  {
    slug: "jcb-parts",
    name: "JCB Spare Parts",
    shortName: "JCB spares",
    description: "Replacement parts and service requirements for JCB equipment.",
    image: "/images/jcb-parts.jpg",
    alt: "Yellow and black JCB replacement filters and parts",
  },
  {
    slug: "tractor-parts",
    name: "Tractor Spare Parts",
    shortName: "Tractor spares",
    description: "Tractor parts enquiries covering drivetrain and maintenance requirements.",
    image: "/images/tractor-parts.jpg",
    alt: "Machined tractor gears and spare parts",
  },
];

const category = (slug: ProductCategory) => productCategories.find((item) => item.slug === slug)!;

export const products: Product[] = [
  {
    slug: "radial-shaft-oil-seals",
    name: "Radial Shaft Oil Seals",
    category: "oil-seals",
    categoryLabel: category("oil-seals").name,
    shortDescription: "A practical starting point for rotary shaft sealing requirements.",
    description: "Enquire for radial shaft oil seals selected around your shaft, housing and application details. Share the existing seal marking, dimensions or a clear photo so the team can help narrow the requirement.",
    image: "/images/oil-seals.jpg",
    alt: "Assortment of radial shaft oil seals",
    features: ["Radial shaft and rotary seal enquiries", "Support based on sample, marking or dimensions", "Suitable for industrial and mobile equipment requirements"],
    applications: ["Industrial machinery", "Construction equipment", "Agricultural machinery"],
    catalogueHref: "/catalogues/sobts-exim-seals-catalogue.pdf",
    catalogueLabel: "Download seals catalogue",
  },
  {
    slug: "oil-seal-profiles",
    name: "Oil Seal Profiles & Requirements",
    category: "oil-seals",
    categoryLabel: category("oil-seals").name,
    shortDescription: "Discuss standard or application-specific profiles with our team.",
    description: "When a standard replacement is not enough, share your drawing, sample or operating context. SOBTS EXIM can help you discuss the right profile for your sealing requirement without guessing at an unverified specification.",
    image: "/images/oil-seals.jpg",
    alt: "Different coloured oil seals for industrial use",
    features: ["Application-based product discussion", "Custom requirement enquiries", "Clear, photo-led identification support"],
    applications: ["Gearboxes and rotating assemblies", "Pumps and motors", "Replacement maintenance"],
    catalogueHref: "/catalogues/sobts-exim-seals-catalogue.pdf",
    catalogueLabel: "Download seals catalogue",
  },
  {
    slug: "rod-piston-wiper-seals",
    name: "Rod, Piston & Wiper Seals",
    category: "hydraulic-seals",
    categoryLabel: category("hydraulic-seals").name,
    shortDescription: "Hydraulic seal enquiries for rods, pistons and wiper positions.",
    description: "Share the cylinder type, existing seal details or dimensions for help identifying a rod, piston or wiper seal requirement. The range is intended for hydraulic equipment where clean, reliable sealing matters.",
    image: "/images/hydraulic-seals.jpg",
    alt: "Blue hydraulic rod and piston seals",
    features: ["Rod, piston and wiper seal enquiries", "Support for seal replacement identification", "Suitable for construction and industrial hydraulics"],
    applications: ["Hydraulic cylinders", "Earthmoving equipment", "Industrial power units"],
    catalogueHref: "/catalogues/sobts-exim-seals-catalogue.pdf",
    catalogueLabel: "Download seals catalogue",
  },
  {
    slug: "seal-kits",
    name: "Hydraulic Seal Kits",
    category: "hydraulic-seals",
    categoryLabel: category("hydraulic-seals").name,
    shortDescription: "Replacement seal kit enquiries for service and maintenance work.",
    description: "For a seal kit enquiry, send the machine or cylinder details, existing kit reference or photos of the parts being replaced. This helps the team discuss a practical replacement path for your maintenance schedule.",
    image: "/images/hydraulic-seals.jpg",
    alt: "Blue hydraulic seal rings",
    features: ["Service and maintenance enquiries", "Identify by kit reference, sample or photo", "Product discussion for hydraulic equipment"],
    applications: ["Cylinders and actuators", "Workshop maintenance", "Mobile hydraulics"],
    catalogueHref: "/catalogues/sobts-exim-seals-catalogue.pdf",
    catalogueLabel: "Download seals catalogue",
  },
  {
    slug: "pneumatic-u-seals",
    name: "Pneumatic U-Seals & PU Profiles",
    category: "pneumatic-seals",
    categoryLabel: category("pneumatic-seals").name,
    shortDescription: "Pneumatic and PU profile enquiries for air-powered equipment.",
    description: "Enquire about pneumatic U-seals and PU profiles with the cylinder, existing seal or dimensions available. The supplied PU catalogue is a useful reference for starting a product conversation.",
    image: "/images/pneumatic-seals.jpg",
    alt: "Green polyurethane pneumatic seals",
    features: ["Pneumatic U-seal enquiries", "PU profile and replacement discussions", "Identification support from samples or dimensions"],
    applications: ["Pneumatic cylinders", "Automation equipment", "Air preparation systems"],
    catalogueHref: "/catalogues/pu-u-seal.pdf",
    catalogueLabel: "Download PU U-seal catalogue",
  },
  {
    slug: "hydraulic-hose-assemblies",
    name: "Hydraulic Hose Assemblies",
    category: "hydraulic-hoses",
    categoryLabel: category("hydraulic-hoses").name,
    shortDescription: "Hose and fitting enquiries for working hydraulic systems.",
    description: "Share hose size, end connection details, length or a clear photo to start an assembly enquiry. The focus is on helping you identify the right conversation for replacement hoses and fittings.",
    image: "/images/hydraulic-hoses.jpg",
    alt: "Black hydraulic hose assemblies with steel fittings",
    features: ["Hose and fitting enquiries", "Replacement assembly identification support", "Useful for mobile and industrial hydraulic systems"],
    applications: ["Construction machinery", "Agricultural equipment", "Industrial systems"],
    catalogueHref: "/catalogues/hydraulic-hose-and-fittings.pdf",
    catalogueLabel: "Download hose catalogue",
  },
  {
    slug: "jcb-replacement-parts",
    name: "JCB Replacement Parts",
    category: "jcb-parts",
    categoryLabel: category("jcb-parts").name,
    shortDescription: "JCB parts enquiries for service, repair and replacement work.",
    description: "Send the machine model, part marking or a photo for help with a JCB spare part enquiry. Product matching is handled around the information available for your machine and the part required.",
    image: "/images/jcb-parts.jpg",
    alt: "JCB filters and spare parts",
    features: ["Service and replacement part enquiries", "Identification from model, marking or photo", "Reference catalogue available to download"],
    applications: ["Backhoe loaders", "Construction machinery", "Workshop servicing"],
    catalogueHref: "/catalogues/jcb-tractor-spare-parts.pdf",
    catalogueLabel: "Download spares catalogue",
  },
  {
    slug: "tractor-spare-parts",
    name: "Tractor Spare Parts",
    category: "tractor-parts",
    categoryLabel: category("tractor-parts").name,
    shortDescription: "Tractor part enquiries for agricultural maintenance requirements.",
    description: "Start a tractor spare part enquiry with the tractor model, part reference or an image of the existing component. This gives the team the context needed to guide the next step.",
    image: "/images/tractor-parts.jpg",
    alt: "Steel gears and tractor spare parts",
    features: ["Agricultural spare part enquiries", "Identification support from model or photo", "Reference catalogue available to download"],
    applications: ["Farm tractors", "Agricultural implements", "Maintenance workshops"],
    catalogueHref: "/catalogues/jcb-tractor-spare-parts.pdf",
    catalogueLabel: "Download spares catalogue",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: ProductCategory) {
  return category(slug);
}
