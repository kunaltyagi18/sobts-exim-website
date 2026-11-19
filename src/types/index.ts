export type ProductCategory =
  | "oil-seals"
  | "hydraulic-seals"
  | "pneumatic-seals"
  | "hydraulic-hoses"
  | "tractor-parts";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  applications: string[];
  catalogueHref?: string;
  catalogueLabel?: string;
};

export type Industry = {
  name: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
  products: string[];
};
