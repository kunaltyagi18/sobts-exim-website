"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, FileText, Globe2, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { isLocale, localeLabels, locales } from "@/lib/i18n";
import { useTranslation } from "@/components/language-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/catalogues", label: "Catalogues" },
  { href: "/contact", label: "Contact Us" },
];

function LanguageMenu({ locale, onChange, mobile = false }: { locale: string; onChange: (value: string) => void; mobile?: boolean }) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeLanguageMenu(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", closeLanguageMenu);
    return () => document.removeEventListener("mousedown", closeLanguageMenu);
  }, []);

  return (
    <div className={mobile ? "language-menu mobile-language-menu" : "language-menu"} ref={languageMenuRef}>
      <button
        className="language-switcher"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={languageOpen}
        aria-label="Choose language"
        onClick={() => setLanguageOpen((value) => !value)}
      >
        <Globe2 size={17} aria-hidden="true" />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown className={languageOpen ? "language-chevron language-chevron-open" : "language-chevron"} size={15} aria-hidden="true" />
      </button>
      {languageOpen ? (
        <div className="language-options" role="listbox" aria-label="Languages">
          {locales.map((item) => (
            <button
              className={item === locale ? "language-option language-option-selected" : "language-option"}
              type="button"
              role="option"
              aria-selected={item === locale}
              key={item}
              onClick={() => onChange(item)}
            >
              <span>{localeLabels[item]}</span>
              {item === locale ? <Check size={17} aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { locale, t } = useTranslation();

  function changeLanguage(value: string) {
    if (!isLocale(value)) return;
    document.cookie = `sobts-locale=${value}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
  }

  return (
    <>
      <div className="topbar">
        <div className="topbar-marquee" aria-label="Company contact information">
          <div className="topbar-track">
            {[0, 1].map((copy) => (
              <div className="topbar-line" aria-hidden={copy === 1} key={copy}>
                <a href={site.mapHref} target="_blank" rel="noreferrer"><MapPin size={15} /> {site.address}</a>
                <a href={site.phoneHref}><Phone size={15} /> {site.phone}</a>
                <a href={site.emailHref}><Mail size={15} /> {site.email}</a>
                <a href={site.secondaryEmailHref}><Mail size={15} /> {site.secondaryEmail}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="site-shell nav-inner">
          <Link href="/" className="brand" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
            <Image className="brand-logo" src="/images/sobts-logo.png" alt="Give Us A Try" width={58} height={58} priority />
            <span className="brand-text"><strong>Shree Om Balaji</strong><em>{t("Trader and Supplier")}</em><small>{t("Trading name:")} SOBTS EXIM</small></span>
          </Link>

          <nav id="main-navigation" className={`nav-links ${open ? "nav-links-open" : ""}`} aria-label={t("Main navigation")}>
            {navItems.map((item) => <Link className={pathname === item.href ? "nav-active" : ""} key={item.href} href={item.href} onClick={() => setOpen(false)}>{t(item.label)}{item.label === "Products" ? <ChevronDown className="nav-caret" size={15} aria-hidden="true" /> : null}</Link>)}
            <Link className="button button-yellow nav-quote" href="/contact" onClick={() => setOpen(false)}><FileText size={17} /> {t("Get a Quote")}</Link>
            <LanguageMenu locale={locale} onChange={changeLanguage} />
          </nav>

          <LanguageMenu locale={locale} onChange={changeLanguage} mobile />
          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? t("Close navigation") : t("Open navigation")}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
