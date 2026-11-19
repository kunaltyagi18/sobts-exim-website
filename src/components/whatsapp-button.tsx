import { MessageCircle, Phone } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function WhatsAppButton() {
  return <a className="whatsapp-float" href={whatsappHref("Hello Shree Om Balaji Trader and Supplier (SOBTS EXIM), I would like to make an enquiry.")} target="_blank" rel="noreferrer" aria-label="Send a WhatsApp enquiry"><span className="whatsapp-logo" aria-hidden="true"><MessageCircle size={45} /><Phone size={18} /></span><span className="whatsapp-tooltip">Contact us on WhatsApp</span></a>;
}
