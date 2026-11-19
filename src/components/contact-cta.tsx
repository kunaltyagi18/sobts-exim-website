import { ArrowUpRight, Phone, Zap } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="contact-cta"><div className="site-shell contact-cta-inner"><div className="contact-cta-copy"><span className="eyebrow"><Zap size={15} /> LET&apos;S FIND THE RIGHT FIT</span><h2>Looking for the right<br />seal or spare part?</h2><p>Send us the product details, part marking, dimensions or a photo and our team will help with the next step.</p></div><div className="contact-cta-actions"><a className="button button-dark" href={whatsappHref()} target="_blank" rel="noreferrer">WhatsApp Us <ArrowUpRight size={18} /></a><a className="button button-outline-dark" href={site.phoneHref}><Phone size={17} /> Call Now</a></div><span className="cta-mark" aria-hidden="true">01</span></div></section>
  );
}
