"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { productCategories } from "@/data/products";
import { site, whatsappHref } from "@/lib/site";
import { useTranslation } from "@/components/language-provider";

export function SiteFooter({ currentYear }: { currentYear: number }) {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div className="footer-brand-column">
          <Link href="/" className="brand footer-brand">
            <Image className="brand-logo" src="/images/sobts-logo.png" alt="Give Us A Try" width={58} height={58} />
            <span className="brand-text"><strong>Shree Om Balaji</strong><em>{t("Trader and Supplier")}</em><small>{t("Trading name:")} SOBTS EXIM</small></span>
          </Link>
          <p>{t("Sealing products, hydraulic solutions and spare parts for industrial, construction and agricultural applications.")}</p>
          <a className="footer-location" href={site.mapHref} target="_blank" rel="noreferrer"><MapPin size={16} /> {site.address}</a>
        </div>
        <div className="footer-column"><h3>{t("Products")}</h3>{productCategories.map((item) => <Link key={item.slug} href={`/products?category=${item.slug}`}>{t(item.name)}</Link>)}</div>
        <div className="footer-column"><h3>{t("Explore")}</h3><Link href="/about">{t("About Us")}</Link><Link href="/industries">{t("Industries")}</Link><Link href="/catalogues">{t("Catalogues")}</Link><Link href="/contact">{t("Contact Us")}</Link></div>
        <div className="footer-column footer-contact-column"><h3>{t("Get in touch")}</h3><a href={site.phoneHref}><Phone size={15} /> {site.phone}</a><a href={site.emailHref}><Mail size={15} /> {site.email}</a><a href={site.secondaryEmailHref}><Mail size={15} /> {site.secondaryEmail}</a><a className="footer-german-contact" href={site.germanWhatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={15} /> <span>{t("German contact")}: {site.germanContact}<em>{site.germanContactNote}</em></span></a><a href={whatsappHref()} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> {t("Send an enquiry")}</a></div>
      </div>
      <div className="site-shell footer-bottom"><span>&copy; {currentYear} {site.legalName}</span><span>{t("Trading name:")} {site.tradingName} <b>&middot;</b> GHAZIABAD, INDIA</span><Link href="/">{t("Back to top")} <ArrowUpRight size={14} /></Link></div>
    </footer>
  );
}
