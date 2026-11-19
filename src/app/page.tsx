import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, FileText, Globe2, Headphones, PackageCheck, ShieldCheck, Truck, Wrench } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { EnquiryForm } from "@/components/enquiry-form";
import { SectionHeading } from "@/components/section-heading";
import { catalogues } from "@/data/catalogues";
import { industries } from "@/data/industries";
import { productCategories } from "@/data/products";
import { whatsappHref } from "@/lib/site";

const benefits = [
  { icon: PackageCheck, title: "Wide product range", text: "Seals, hoses and spare parts together." },
  { icon: Headphones, title: "Application support", text: "A clear conversation around your part." },
  { icon: Wrench, title: "Custom requirements", text: "Share a drawing, sample or size." },
  { icon: ShieldCheck, title: "Reliable supply", text: "Focused on quality and fit." },
];

const homeCategoryDetails = {
  "oil-seals": "Radial, shaft & custom seals",
  "hydraulic-seals": "Rod, piston, wipers & seal kits",
  "pneumatic-seals": "UHS, DHS, PU seals & profiles",
  "hydraulic-hoses": "Hoses, crimp fittings & assemblies",
  "tractor-parts": "Axle, clutch, gearbox & engine parts",
} as const;

export default function HomePage() {
  return <main>
    <section className="reference-hero" id="home"><div className="reference-hero-wedge" /><div className="site-shell reference-hero-inner"><div className="reference-hero-copy"><span className="eyebrow"><span className="eyebrow-line" /> SHREE OM BALAJI TRADER AND SUPPLIER</span><h1>Oil Seals &amp;<br />Industrial Sealing<br /><em>Solutions</em></h1><p>Oil seals first, supported by hydraulic and pneumatic seals, hoses and fittings, plus Tractor Spare Parts for agricultural requirements.</p><div className="reference-hero-highlights"><span><ShieldCheck /><b>Genuine<br />Quality</b></span><i /><span><PackageCheck /><b>Wide<br />Product Range</b></span><i /><span><Wrench /><b>Custom<br />Requirements</b></span></div><div className="reference-hero-actions"><Link className="button button-yellow" href="/products">Explore Products <ArrowRight size={18} /></Link><Link className="button button-outline-dark" href="/catalogues"><FileText size={17} /> Download Catalogue</Link></div></div><div className="reference-hero-art"><Image className="reference-art-reference" src="/images/home-hero-hd.png" alt="Premium oil seals, tractor parts, hoses and fittings" fill priority sizes="(max-width: 900px) 100vw, 60vw" /></div></div></section>

    <section className="reference-products" id="products"><div className="site-shell"><div className="reference-products-heading"><div><span className="eyebrow"><span className="eyebrow-line" /> OUR PRODUCT RANGE</span><h2>Our Product Range</h2></div><p>Oil seals remain the primary focus, supported by sealing products, hydraulic solutions and Tractor Spare Parts for working equipment.</p></div><div className="reference-product-grid">{productCategories.map((item, index) => <Link className={`reference-product-card ${item.priority ? "reference-product-card-featured" : ""}`} href={`/products?category=${item.slug}`} key={item.slug}><div className="reference-product-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 16vw" /><span>{String(index + 1).padStart(2, "0")}</span></div><div className="reference-product-body"><div><h3>{item.name}</h3><p>{homeCategoryDetails[item.slug]}</p></div><span className="reference-product-arrow"><ArrowRight size={17} /></span></div></Link>)}</div></div></section>

    <section className="reference-trust-band"><div className="site-shell reference-trust-inner"><div><Truck /><span><strong>Trading &amp; Distribution</strong><small>Wide range of genuine products</small></span></div><div><Wrench /><span><strong>Custom Manufacturing</strong><small>As per drawings &amp; requirements</small></span></div><div><Headphones /><span><strong>Application Support</strong><small>Right product for your operation</small></span></div><div><ShieldCheck /><span><strong>Reliable Supply</strong><small>Quality &amp; on-time delivery</small></span></div></div></section>

    <section className="oil-feature section" id="about"><div className="site-shell oil-feature-inner"><div className="oil-feature-media"><div className="oil-feature-image"><Image src="/images/oil-seals-feature-hd.png" alt="Assortment of radial shaft oil seals in different profiles" fill sizes="(max-width: 900px) 100vw, 48vw" /><span className="image-label">01 / OIL SEALS</span></div><div className="oil-feature-badge"><strong>01</strong><span>Oil seals<br />primary focus</span></div></div><div className="oil-feature-copy"><span className="eyebrow"><span className="eyebrow-line" /> OUR SPECIALITY</span><h2>Precision oil seals.<br /><em>Made for the work.</em></h2><p>Oil seals are at the heart of what Shree Om Balaji Trader and Supplier does. Start with a product reference, an existing seal, dimensions or a photo and we will help you make the enquiry more specific.</p><ul><li><Check size={17} /> Radial shaft and rotary oil seal enquiries</li><li><Check size={17} /> Support for standard and custom requirements</li><li><Check size={17} /> A clear route from identification to enquiry</li></ul><a className="button button-yellow" href={whatsappHref("Hello Shree Om Balaji Trader and Supplier (SOBTS EXIM), I would like to enquire about oil seals.")} target="_blank" rel="noreferrer">Enquire About Oil Seals <ArrowRight size={18} /></a></div></div></section>

    <section className="section approach-section"><div className="site-shell"><div className="section-intro-row"><SectionHeading eyebrow="THE SOBTS APPROACH" title="A practical partner for your parts." description="Straightforward product discovery for maintenance teams, workshops and equipment owners." /></div><div className="benefit-grid">{benefits.map(({ icon: Icon, title, text }, index) => <article className="benefit-card" key={title}><div className="benefit-card-top"><span className="benefit-icon"><Icon size={22} /></span><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="section industries-preview" id="industries"><div className="site-shell"><div className="section-intro-row"><SectionHeading eyebrow="WHERE WE WORK" title="Built for real-world applications." description="From construction sites to agricultural fields and industrial workshops, we help you start with the right product conversation." /><Link className="text-link" href="/industries">Explore industries <ArrowRight size={16} /></Link></div><div className="industry-grid">{industries.map((industry, index) => <Link className="industry-card" href={`/industries#${industry.slug}`} key={industry.slug}><Image src={industry.image} alt={industry.alt} fill sizes="(max-width: 760px) 100vw, 25vw" /><span className="industry-overlay" /><span className="industry-number">0{index + 1}</span><span className="industry-title">{industry.name}<ArrowUpRight size={18} /></span></Link>)}</div></div></section>

    <section className="section international-section"><div className="site-shell international-shell"><div><span className="eyebrow"><Globe2 size={16} /> INTERNATIONAL DIRECTION</span><h2>Built to reach beyond India.</h2><p>Our international focus is aimed at future customer conversations in Africa and Europe. These are target markets for outreach; no specific offices or local operations are being claimed.</p></div><div className="international-markets"><article><span>01</span><strong>Africa</strong><small>Target international market</small></article><article><span>02</span><strong>Europe</strong><small>Target international market</small></article></div></div></section>
    <section className="section catalogue-preview" id="catalogues"><div className="site-shell catalogue-preview-inner"><div className="catalogue-preview-intro"><span className="eyebrow"><span className="eyebrow-line" /> PRODUCT RESOURCES</span><h2>Find the right<br /><em>reference.</em></h2><p>Download the catalogues supplied by Shree Om Balaji Trader and Supplier or get in touch if you need help narrowing down a product requirement.</p><Link className="text-link" href="/catalogues">View all catalogues <ArrowRight size={16} /></Link></div><div className="catalogue-list">{catalogues.slice(0, 3).map((catalogue, index) => <a className="catalogue-row" key={catalogue.href} href={catalogue.href} download><span className="catalogue-row-index">0{index + 1}</span><span className="catalogue-row-icon"><FileText size={19} /></span><span><strong>{catalogue.title}</strong><small>{catalogue.tag}</small></span><ArrowUpRight size={18} /></a>)}</div></div></section>

    <ContactCta />
    <EnquiryForm />
  </main>;
}
