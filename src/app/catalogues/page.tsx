import { BookOpen, MessageCircle } from "lucide-react";
import { CatalogueCard } from "@/components/catalogue-card";
import { ContactCta } from "@/components/contact-cta";
import { SectionHeading } from "@/components/section-heading";
import { catalogues } from "@/data/catalogues";
import { whatsappHref } from "@/lib/site";

export const metadata = { title: "Catalogues", description: "Download SOBTS EXIM catalogues for seals, PU U-seals, hydraulic hoses and JCB and tractor spare parts." };

export default function CataloguesPage() {
  return <main><section className="page-hero page-hero-catalogues"><div className="site-shell page-hero-inner"><span className="eyebrow"><span className="eyebrow-line" /> PRODUCT RESOURCES</span><h1>Reference material<br /><em>for the next step.</em></h1><p>Download the supplied product catalogues to browse the range, then send us the details of the item you need help with.</p></div></section><section className="section catalogues-page"><div className="site-shell"><div className="catalogue-page-intro"><SectionHeading eyebrow="DOWNLOAD CATALOGUES" title="Start with the reference that matches your requirement." description="These catalogues are provided as product references. Availability, fit and final selection are confirmed during your enquiry." /><a className="button button-outline-dark" href={whatsappHref("Hello SOBTS EXIM, please help me with a product catalogue.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Ask about a catalogue</a></div><div className="catalogues-grid">{catalogues.map((catalogue, index) => <CatalogueCard catalogue={catalogue} index={index} key={catalogue.href} />)}</div><div className="catalogue-help"><BookOpen size={22} /><div><strong>Need help finding a product?</strong><p>Share a screenshot or catalogue page number on WhatsApp and we can continue the conversation around it.</p></div><a className="text-link" href={whatsappHref("Hello SOBTS EXIM, I need help finding a product in a catalogue.")} target="_blank" rel="noreferrer">Get help <MessageCircle size={16} /></a></div></div></section><ContactCta /></main>;
}
