import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { productCategories } from "@/data/products";
import { site, whatsappHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div className="footer-brand-column">
          <Link href="/" className="brand footer-brand">
            <span className="brand-placeholder" aria-hidden="true">LOGO</span>
            <span className="brand-text"><strong>Shree Om Balaji</strong><em>Trader and Supplier</em><small>Trading name: SOBTS EXIM</small></span>
          </Link>
          <p>Sealing products, hydraulic solutions and spare parts for industrial, construction and agricultural applications.</p>
          <a className="footer-location" href={site.mapHref} target="_blank" rel="noreferrer"><MapPin size={16} /> {site.address}</a>
        </div>
        <div className="footer-column"><h3>Products</h3>{productCategories.map((item) => <Link key={item.slug} href={`/products?category=${item.slug}`}>{item.name}</Link>)}</div>
        <div className="footer-column"><h3>Explore</h3><Link href="/about">About Us</Link><Link href="/industries">Industries</Link><Link href="/catalogues">Catalogues</Link><Link href="/contact">Contact Us</Link></div>
        <div className="footer-column footer-contact-column"><h3>Get in touch</h3><a href={site.phoneHref}><Phone size={15} /> {site.phone}</a><a href={site.emailHref}><Mail size={15} /> {site.email}</a><a href={site.secondaryEmailHref}><Mail size={15} /> {site.secondaryEmail}</a><span className="footer-german-contact">German contact: {site.germanContact}<em>{site.germanContactNote}</em></span><a href={whatsappHref()} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> Send an enquiry</a></div>
      </div>
      <div className="site-shell footer-bottom"><span>&copy; {new Date().getFullYear()} {site.legalName}</span><span>Trading name: {site.tradingName} <b>&middot;</b> GHAZIABAD, INDIA</span><Link href="/">Back to top <ArrowUpRight size={14} /></Link></div>
    </footer>
  );
}
