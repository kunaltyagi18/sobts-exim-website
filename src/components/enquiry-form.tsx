"use client";

import { Check, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { whatsappHref } from "@/lib/site";
import { useTranslation } from "@/components/language-provider";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const { t } = useTranslation();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Shree Om Balaji Trader and Supplier (SOBTS EXIM), I would like to send a customer enquiry.",
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
      `Country: ${form.get("country")}`,
      `Product requirement: ${form.get("productRequirement")}`,
      `Message: ${form.get("message")}`,
    ].join("\n");

    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="site-shell enquiry-shell">
        <div className="enquiry-intro">
          <span className="eyebrow"><span className="eyebrow-line" /> {t("CUSTOMER ENQUIRY")}</span>
          <h2>{t("Let's understand your requirement.")}</h2>
          <p>{t("Share the basics and we'll open a WhatsApp conversation with your enquiry already prepared.")}</p>
          <div className="enquiry-note"><MessageCircle size={18} /><span>{t("WhatsApp is available on the existing Indian contact number.")}</span></div>
        </div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>{t("Name")}<input name="name" type="text" placeholder={t("Your full name")} required /></label>
            <label>{t("Email")}<input name="email" type="email" placeholder="you@company.com" required /></label>
            <label>{t("Phone")}<input name="phone" type="tel" placeholder={t("Your phone number")} required /></label>
            <label>{t("Country")}<input name="country" type="text" placeholder={t("Country")} required /></label>
            <label className="form-field-wide">{t("Product Requirement")}<input name="productRequirement" type="text" placeholder={t("Oil seals, tractor parts, hoses...")} required /></label>
            <label className="form-field-wide">{t("Message")}<textarea name="message" rows={4} placeholder={t("Tell us about the part, machine, dimensions or quantity")} required /></label>
          </div>
          <div className="enquiry-submit-row">
            <button className="button button-yellow" type="submit"><Send size={17} /> {t("Send Enquiry on WhatsApp")}</button>
            {sent ? <span className="form-success" role="status"><Check size={16} /> {t("Enquiry prepared in WhatsApp")}</span> : <small>{t("Your message will be prefilled for review before sending.")}</small>}
          </div>
        </form>
      </div>
    </section>
  );
}
