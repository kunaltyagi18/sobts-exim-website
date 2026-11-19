import { ProductsBrowser } from "@/components/products-browser";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/data/products";

export const metadata = { title: "Products", description: "Browse oil seals, hydraulic seals, pneumatic and PU seals, hydraulic hoses and Tractor Spare Parts." };

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const category = (await searchParams).category;
  const validCategories = ["oil-seals", "hydraulic-seals", "pneumatic-seals", "hydraulic-hoses", "tractor-parts"] as const;
  const validCategory = validCategories.includes(category as (typeof validCategories)[number]) ? category as (typeof validCategories)[number] : "all";
  return <main><section className="page-hero page-hero-products"><div className="site-shell page-hero-inner"><span className="eyebrow"><span className="eyebrow-line" /> PRODUCT RANGE</span><h1>Find the part<br /><em>that fits the work.</em></h1><p>Search the product references below, filter by category and open a detail page to start an enquiry.</p></div></section><section className="section products-page-section"><div className="site-shell"><SectionHeading eyebrow="BROWSE THE RANGE" title="A focused range of sealing and spare part products." description="Oil seals are the primary focus, supported by hydraulic, pneumatic, hose and Tractor Spare Parts enquiries." /><ProductsBrowser products={products} initialCategory={validCategory} /></div></section></main>;
}
