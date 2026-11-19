"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, FileText, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/catalogues", label: "Catalogues" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="topbar">
        <div className="site-shell topbar-inner">
          <a href={site.mapHref} target="_blank" rel="noreferrer" className="topbar-link"><MapPin size={15} /> {site.address}</a>
          <div className="topbar-actions">
            <a href={site.phoneHref}><Phone size={15} /> {site.phone}</a>
            <a href={site.emailHref}><Mail size={15} /> {site.email}</a>
            <a href={site.secondaryEmailHref}><Mail size={15} /> {site.secondaryEmail}</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="site-shell nav-inner">
          <Link href="/" className="brand" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
            <span className="brand-placeholder" aria-hidden="true">LOGO</span>
            <span className="brand-text"><strong>Shree Om Balaji</strong><em>Trader and Supplier</em><small>Trading name: SOBTS EXIM</small></span>
          </Link>

          <nav id="main-navigation" className={`nav-links ${open ? "nav-links-open" : ""}`} aria-label="Main navigation">
            {navItems.map((item) => <Link className={pathname === item.href ? "nav-active" : ""} key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}{item.label === "Products" ? <ChevronDown className="nav-caret" size={15} aria-hidden="true" /> : null}</Link>)}
            <Link className="button button-yellow nav-quote" href="/contact" onClick={() => setOpen(false)}><FileText size={17} /> Get a Quote</Link>
          </nav>

          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
