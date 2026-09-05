/**
 * ============================================================
 * PUSAT KONTEN — semua teks situs dikumpulkan di sini
 * ============================================================
 * Struktur file konten:
 *   site.ts      → kontak, harga, sertifikasi, marketplace (data)
 *   protocols.ts → tabel dosis protokol padi (data)
 *   dict/*.ts    → teks naratif per halaman (ID + EN)
 *
 * Aris: cari halaman yang mau diedit di folder dict/, ganti teks
 * di dalam tanda kutip, simpan. Selesai.
 */

export { SITE, waLink, WA_MESSAGES, ROUTES } from "./site";
export type { Site } from "./site";

export { DEFAULT_LANG, LANG_STORAGE_KEY, pick } from "./lang";
export type { Lang, Locale } from "./lang";

export {
  GENERAL_RULES,
  PROTOCOLS,
  PROTOCOL_A,
  PROTOCOL_B,
  PROTOCOL_C,
  PROTOCOL_D,
  EMERGENCY,
  HORTICULTURE,
} from "./protocols";
export type { Protocol, TankMixRow } from "./protocols";

export { common } from "./dict/common";
export { home } from "./dict/home";
export { padi } from "./dict/padi";
export { kebun } from "./dict/kebun";
export { ternak } from "./dict/ternak";
export { tentang, kontak, blog } from "./dict/tentang";
export { legal } from "./dict/legal";
