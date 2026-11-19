export const site = {
  name: "Shree Om Balaji Trader and Supplier",
  legalName: "Shree Om Balaji Trader and Supplier",
  tradingName: "SOBTS EXIM",
  phone: "+91 9999032818",
  phoneHref: "tel:+919999032818",
  email: "info@sobts-exim.com",
  emailHref: "mailto:info@sobts-exim.com",
  secondaryEmail: "nischal@sobts-exim.com",
  secondaryEmailHref: "mailto:nischal@sobts-exim.com",
  germanContact: "[number to be provided]",
  germanContactNote: "*Only WhatsApp Calls*",
  address: "Raj Nagar Extension, Ghaziabad - 201017, Uttar Pradesh, India",
  mapHref: "https://maps.google.com/?q=Raj+Nagar+Extension,+Ghaziabad",
  whatsappHref: "https://wa.me/919999032818",
};

export function whatsappHref(message = "Hello Shree Om Balaji Trader and Supplier (SOBTS EXIM), I would like to enquire about your products.") {
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
}
