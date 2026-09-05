import type { Locale } from "../lang";

/**
 * Teks UI yang dipakai di semua halaman (header, footer, komponen umum).
 * Aris: ganti teks di sini bila ingin mengubah label tombol/menu global.
 */

export const common = {
  brand: {
    company: "Aegis Soil Health",
    product: "BIO7",
    tagline: { id: "Mikroba untuk Tanah yang Lebih Hidup", en: "Microbes for Living Soil" } as Locale,
  },
  nav: {
    waButton: { id: "Chat WhatsApp", en: "WhatsApp Chat" } as Locale,
    language: { id: "Bahasa", en: "Language" } as Locale,
    home: { id: "Beranda", en: "Home" } as Locale,
  },
  cta: {
    consult: { id: "Belum yakin? Konsultasi gratis via WhatsApp", en: "Not sure yet? Free consultation via WhatsApp" } as Locale,
    order: { id: "Pesan via WhatsApp", en: "Order via WhatsApp" } as Locale,
    contactUs: { id: "Hubungi Kami", en: "Contact Us" } as Locale,
  },
  labels: {
    verified: { id: "Terverifikasi", en: "Verified" } as Locale,
    guidance: {
      id: "Petunjuk aplikasi — belum ada uji lapangan spesifik untuk sektor ini",
      en: "Application guidance — no field-specific trials for this sector yet",
    } as Locale,
    hetNote: {
      id: "HET (Harga Eceran Tertinggi) ditetapkan produsen — tidak dapat dinegosiasi untuk kanal standar.",
      en: "HET (maximum retail price) is set by the manufacturer — non-negotiable for the standard channel.",
    } as Locale,
    java: { id: "Pulau Jawa", en: "Java Island" } as Locale,
    outsideJava: { id: "Luar Pulau Jawa", en: "Outside Java" } as Locale,
    hours: { id: "Jam operasional", en: "Operating hours" } as Locale,
    producer: { id: "Produsen", en: "Producer" } as Locale,
    certification: { id: "Sertifikasi", en: "Certification" } as Locale,
    marketplace: { id: "Beli di marketplace", en: "Buy on marketplaces" } as Locale,
    searchQuery: { id: "cari:", en: "search for:" } as Locale,
    backHome: { id: "Kembali ke beranda", en: "Back to home" } as Locale,
    faq: { id: "Pertanyaan Umum", en: "Frequently Asked Questions" } as Locale,
    mechanism: { id: "Cara kerja BIO7", en: "How BIO7 works" } as Locale,
    composition: { id: "Komposisi mikroba terverifikasi", en: "Verified microbial composition" } as Locale,
    cfuUnit: "CFU/ml",
  },
  mechanism: {
    id: "BIO7 menghidupkan kembali biologi tanah melalui konsorsium mikroba hidup ultra-padat: bakteri penambat nitrogen menyediakan N hayati, bakteri pelarut fosfat memobilisasi P yang terkunci di tanah, dan Streptomyces menekan patogen tular tanah. Sisa agrokimia terurai, keasaman tanah dinetralkan, dan akar menyerap hara lebih dalam. Hasilnya: tanah yang benar-benar hidup, bukan sekadar dipupuk.",
    en: "BIO7 reactivates soil biology through an ultra-dense living microbial consortium: nitrogen-fixing bacteria supply biological N, phosphorus-solubilizing bacteria mobilize P locked in the soil, and Streptomyces suppresses soil-borne pathogens. Agrochemical residues decompose, soil acidity is neutralized, and roots absorb nutrients more deeply. The result: soil that is truly alive — not merely fertilized.",
  } as Locale,
  footer: {
    otherSectors: { id: "Aplikasi BIO7 untuk sektor lain:", en: "BIO7 for other sectors:" } as Locale,
    plantation: { id: "Perkebunan", en: "Plantations" } as Locale,
    livestock: { id: "Peternakan", en: "Livestock" } as Locale,
    rice: { id: "Padi", en: "Rice" } as Locale,
    rights: { id: "Hak cipta dilindungi.", en: "All rights reserved." } as Locale,
    disclaimerLink: { id: "Disclaim klaim pertanian", en: "Agricultural claims disclaimer" } as Locale,
    contact: { id: "Kontak:", en: "Contact:" } as Locale,
  },
} as const;
