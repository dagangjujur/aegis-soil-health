/** Tipe bahasa & helper — ID adalah default, EN opsional */
export type Lang = "id" | "en";

export const DEFAULT_LANG: Lang = "id";
export const LANG_STORAGE_KEY = "aegis-lang";

export type Locale = { id: string; en: string };

export function pick(l: Locale, lang: Lang): string {
  return l[lang];
}
