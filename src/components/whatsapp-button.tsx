"use client";

import { MessageCircle, Phone } from "lucide-react";
import { whatsappHref } from "@/lib/site";
import { useTranslation } from "@/components/language-provider";

export function WhatsAppButton() {
  const { t } = useTranslation();
  return <a className="whatsapp-float" href={whatsappHref("Hello Shree Om Balaji Trader and Supplier (SOBTS EXIM), I would like to make an enquiry.")} target="_blank" rel="noreferrer" aria-label={t("Send a WhatsApp enquiry")}><span className="whatsapp-logo" aria-hidden="true"><MessageCircle size={45} /><Phone size={18} /></span><span className="whatsapp-tooltip">{t("Contact us on WhatsApp")}</span></a>;
}
