import { locale } from "next/root-params";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  type Locale,
} from "./getDictionary";

// next/root-params' locale() resolves to whatever the [locale] segment
// literally matched — typed as a plain string, not narrowed to our Locale
// union, and not guaranteed valid (e.g. notFound() firing before the
// segment resolves). Centralizes the same fallback every Server Component
// needs instead of repeating isLocale/defaultLocale at each call site.
export async function getServerLocale(): Promise<Locale> {
  const raw = await locale();
  return isLocale(raw) ? raw : defaultLocale;
}

export async function getServerDictionary() {
  return getDictionary(await getServerLocale());
}
