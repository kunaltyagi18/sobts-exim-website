import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sobtsexim.com"),
  title: { default: "SOBTS EXIM | Oil Seals & Industrial Sealing Solutions", template: "%s | SOBTS EXIM" },
  description: "Oil seals, hydraulic and pneumatic seals, hydraulic hoses, fittings and JCB and tractor spare parts from Shree Om Balaji Traders & Suppliers, Ghaziabad.",
  keywords: ["oil seals", "hydraulic seals", "pneumatic seals", "hydraulic hoses", "JCB spare parts", "tractor spare parts", "Ghaziabad"],
  authors: [{ name: "Shree Om Balaji Traders & Suppliers" }],
  openGraph: { title: "SOBTS EXIM | Industrial Sealing Solutions", description: "Seals, hoses and spare parts for industrial, construction and agricultural applications.", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "SOBTS EXIM | Industrial Sealing Solutions", description: "Oil seals, hydraulic solutions and industrial spare parts." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
