import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/data/industries";

export const metadata = { title: "Industries", description: "Explore the construction, agricultural, industrial and hydraulic applications supported by SOBTS EXIM." };

export default function IndustriesPage() {
  return <main><section className="page-hero page-hero-industries"><div className="site-shell page-hero-inner"><span className="eyebrow"><span className="eyebrow-line" /> APPLICATIONS</span><h1>Products for the<br /><em>work behind the work.</em></h1><p>From construction equipment to agricultural machinery and industrial systems, we help you make a more useful product enquiry.</p></div></section><section className="section industries-page"><div className="site-shell"><SectionHeading eyebrow="WHERE WE WORK" title="A range built around working equipment." description="Use the application context below as a starting point, then tell us the machine, part or seal you are working with." /><div className="industry-detail-list">{industries.map((industry, index) => <article className="industry-detail" id={industry.slug} key={industry.slug}><div className="industry-detail-image"><Image src={industry.image} alt={industry.alt} fill sizes="(max-width: 800px) 100vw, 42vw" /><span>0{index + 1}</span></div><div className="industry-detail-copy"><span className="eyebrow"><span className="eyebrow-line" /> {String(index + 1).padStart(2, "0")} / APPLICATION</span><h2>{industry.name}</h2><p>{industry.description}</p><ul>{industry.products.map((product) => <li key={product}><Check size={16} /> {product}</li>)}</ul><Link className="text-link" href="/contact">Discuss an application <ArrowRight size={16} /></Link></div></article>)}</div></div></section><ContactCta /></main>;
}
