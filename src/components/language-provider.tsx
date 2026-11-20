"use client";

import { createContext, useContext, useMemo } from "react";
import { createTranslator, type Locale } from "@/lib/i18n";

const LanguageContext = createContext<{ locale: Locale; t: (key: string) => string } | null>(null);

export function LanguageProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const value = useMemo(() => ({ locale, t: createTranslator(locale) }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used inside LanguageProvider");
  return context;
}
