import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Download, MessageCircle, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/contact-cta";
import { ProductCard } from "@/components/product-card";
import { products, getProduct } from "@/data/products";
import { site, whatsappHref } from "@/lib/site";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  return product ? { title: product.name, description: product.description } : { title: "Product" };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const enquiry = whatsappHref(`Hello SOBTS EXIM, I would like to enquire about ${product.name}.`);
  return <main><section className="detail-hero"><div className="site-shell"><Link className="back-link" href="/products"><ArrowLeft size={16} /> Back to all products</Link><div className="detail-grid"><div className="detail-image"><Image src={product.image} alt={product.alt} fill priority sizes="(max-width: 800px) 100vw, 48vw" /><span>{product.categoryLabel}</span></div><div className="detail-copy"><span className="eyebrow"><span className="eyebrow-line" /> {product.categoryLabel.toUpperCase()}</span><h1>{product.name}</h1><p className="detail-lede">{product.description}</p><div className="detail-actions"><a className="button button-yellow" href={enquiry} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Enquire on WhatsApp</a><a className="button button-outline-dark" href={site.phoneHref}><Phone size={17} /> Call to discuss</a></div><div className="detail-note"><Check size={18} /> Product fit is confirmed from your application details.</div></div></div></div></section><section className="section detail-information"><div className="site-shell detail-information-grid"><div><span className="eyebrow"><span className="eyebrow-line" /> WHAT TO SHARE</span><h2>Help us understand the requirement.</h2><p>A clear photo, existing part marking, dimensions, machine model or drawing can make the product conversation much faster. You do not need every detail to begin.</p><ul className="check-list">{product.features.map((feature) => <li key={feature}><Check size={17} /> {feature}</li>)}</ul></div><div className="application-card"><span>COMMON APPLICATIONS</span><h3>Where this product may be used</h3><div>{product.applications.map((application) => <span key={application}>{application}</span>)}</div>{product.catalogueHref ? <a className="text-link" href={product.catalogueHref} download><Download size={16} /> {product.catalogueLabel}</a> : null}</div></div></section>{related.length ? <section className="section related-section section-cream"><div className="site-shell"><div className="section-intro-row"><div><span className="eyebrow"><span className="eyebrow-line" /> KEEP EXPLORING</span><h2>Related product references.</h2></div><Link className="text-link" href={`/products?category=${product.category}`}>View category <ArrowRight size={16} /></Link></div><div className="product-grid related-grid">{related.map((item, index) => <ProductCard key={item.slug} product={item} index={index} />)}</div></div></section> : null}<ContactCta /></main>;
}
