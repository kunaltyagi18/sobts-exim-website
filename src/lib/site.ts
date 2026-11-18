export const site = {
  name: "SOBTS EXIM",
  legalName: "Shree Om Balaji Traders & Suppliers",
  phone: "+91 9999032818",
  phoneHref: "tel:+919999032818",
  email: "sobtsexim@gmail.com",
  emailHref: "mailto:sobtsexim@gmail.com",
  address: "Raj Nagar Extension, Ghaziabad - 201017, Uttar Pradesh, India",
  mapHref: "https://maps.google.com/?q=Raj+Nagar+Extension,+Ghaziabad",
  whatsappHref: "https://wa.me/919999032818",
};

export function whatsappHref(message = "Hello SOBTS EXIM, I would like to enquire about your products.") {
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
}
