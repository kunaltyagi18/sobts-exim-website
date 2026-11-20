"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { productCategories } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import type { ProductCategory } from "@/types";
import type { Product } from "@/types";
import { useTranslation } from "@/components/language-provider";

export function ProductsBrowser({ products, initialCategory = "all" }: { products: Product[]; initialCategory?: "all" | ProductCategory }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>(initialCategory);
  const { t } = useTranslation();
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = activeCategory === "all" || product.category === activeCategory;
      const searchText = [product.name, product.categoryLabel, product.shortDescription, ...product.applications].map((value) => `${value} ${t(value)}`).join(" ").toLowerCase();
      const searchMatch = !query || searchText.includes(query);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, products, search, t]);

  return (
    <div className="products-browser">
      <div className="product-toolbar">
        <div className="search-field"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={t("Search products or applications")} aria-label={t("Search products or applications")} />{search ? <button type="button" onClick={() => setSearch("")} aria-label={t("Clear search")}><X size={16} /></button> : null}</div>
        <div className="filter-label"><SlidersHorizontal size={16} /> {t("Filter by category")}</div>
      </div>
      <div className="category-filters" role="group" aria-label={t("Filter by category")}>
        <button type="button" className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>{t("All products")}</button>
        {productCategories.map((category) => <button type="button" className={activeCategory === category.slug ? "active" : ""} key={category.slug} onClick={() => setActiveCategory(category.slug)}>{t(category.shortName)}</button>)}
      </div>
      {filteredProducts.length ? <div className="product-grid product-grid-full">{filteredProducts.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div> : <div className="empty-state"><h3>{t("No matching products yet")}</h3><p>{t("Try a broader search or reset the category filter.")}</p><button type="button" className="button button-yellow" onClick={() => { setSearch(""); setActiveCategory("all"); }}>{t("Show all products")}</button></div>}
      <p className="results-note">{t("Showing")} {filteredProducts.length} {t("of")} {products.length} {t("product references. Product matching is confirmed from the details you share with us.")}</p>
    </div>
  );
}
