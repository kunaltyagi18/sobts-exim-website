import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sobtsexim.com";
  const pages = ["", "/about", "/products", "/industries", "/catalogues", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
  return [...pages, ...products.map((product) => ({ url: `${base}/products/${product.slug}`, lastModified: new Date() }))];
}
