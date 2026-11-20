import { cookies } from "next/headers";
import { isLocale, type Locale } from "@/lib/i18n";

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get("sobts-locale")?.value;
  return isLocale(value) ? value : "en";
}
