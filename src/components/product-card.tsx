"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types";
import { useTranslation } from "@/components/language-provider";

export function ProductCard({ product, index }: { product: Product; index?: number }) {
  const { t } = useTranslation();
  return (
    <Link className={`product-card ${product.category === "oil-seals" ? "product-card-featured" : ""}`} href={`/products/${product.slug}`}>
      <div className="product-card-image">
        <Image src={product.image} alt={product.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw" />
        <span className="product-card-number">{String((index ?? 0) + 1).padStart(2, "0")}</span>
      </div>
      <div className="product-card-body"><div><span className="card-category">{t(product.categoryLabel)}</span><h3>{t(product.name)}</h3><p>{t(product.shortDescription)}</p></div><span className="round-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span></div>
    </Link>
  );
}
