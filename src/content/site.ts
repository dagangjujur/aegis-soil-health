/**
 * ============================================================
 * PENGATURAN SITUS — SUMBER KEBENARAN TUNGGAL (single source of truth)
 * ============================================================
 * Aris: file ini satu-satunya tempat untuk mengganti nomor WhatsApp,
 * email, harga, dan data sertifikasi. Edit angka/teks di sini, simpan,
 * selesai — tidak perlu menyentuh kode lain.
 */

export const SITE = {
  company: "PT Biotek Agro Nusantara",
  product: "BIO7",
  domain: "https://aegissoilhealth.com",

  /** Nomor WhatsApp pusat (format internasional tanpa tanda +) */
  whatsapp: {
    number: "6285221212223",
    display: "(+62) 852 2121 2223",
    url: "https://wa.me/6285221212223",
  },

  /** Email catch-all di domain perusahaan */
  email: "email@aegissoilhealth.com",

  /** Jam operasional layanan pelanggan */
  hours: {
    id: "Senin–Sabtu, 07.30–17.30 WIB",
    en: "Monday–Saturday, 07:30–17:30 WIB (UTC+7)",
  },

  /** Harga Eceran Tertinggi (HET) — standar resmi langsung dari PT Biotek Agro Nusantara */
  pricing: {
    java: { nominal: 55000, display: "Rp55.000" },
    outsideJava: { nominal: 65000, display: "Rp65.000" },
    unit: { id: "per botol 1 liter", en: "per 1-liter bottle" },
    costBasis: 40000,
  },

  /** Sertifikasi & legalitas */
  certs: {
    kementan: {
      label: "KEMENTAN RI",
      number: "03.02.2026.156",
      detail: { id: "Terdaftar Kementerian Pertanian RI", en: "Registered with the Ministry of Agriculture, Republic of Indonesia" },
    },
    unpad: {
      label: "UNPAD",
      number: "No. B-0529/12/2025",
      detail: {
        id: "Sertifikat of Analysis — Fakultas Pertanian, Universitas Padjadjaran, terbit 15 Januari 2026",
        en: "Certificate of Analysis — Faculty of Agriculture, Universitas Padjadjaran, issued 15 January 2026",
      },
    },
    shelfLife: { id: "Masa simpan dijamin sampai Juli 2032", en: "Shelf life guaranteed through July 2032" },
  },

  /** Fasilitas Produksi & Formulasi Mandiri */
  producer: {
    name: "PT Biotek Agro Nusantara",
    location: { id: "Bandung, Jawa Barat", en: "Bandung, West Java" },
    history: {
      id: "Lebih dari 20 tahun riset kultur mikroba dan formulasi bioteknologi in-house terpadu",
      en: "Over 20 years of in-house microbial culture research and integrated biotechnology formulation",
    },
  },

  /** Marketplace resmi */
  marketplaces: [
    { name: "Shopee", url: "https://shopee.co.id", query: "BIO7 Aegis Soil Health" },
    { name: "Tokopedia", url: "https://www.tokopedia.com", query: "BIO7 Aegis Soil Health" },
    { name: "Lazada", url: "https://www.lazada.co.id", query: "BIO7 Aegis Soil Health" },
  ],

  /** Kasus lapangan terverifikasi — Karawang 2023 */
  fieldCase: {
    farmer: "Haji Karma",
    location: { id: "Kec. Jayakerta, Kab. Karawang, Jawa Barat", en: "Jayakerta District, Karawang Regency, West Java" },
    year: "2023",
    plotSize: { id: "1 hektar", en: "1 hectare" },
    yield: { id: "12.600 kg/ha", en: "12,600 kg/ha" },
    yieldTons: { id: "12,6 ton/ha", en: "12.6 t/ha" },
    baseline: { id: "7.800 kg/ha (rata-rata lokal tanpa BIO7)", en: "7,800 kg/ha (local average without BIO7)" },
    uplift: "+61,5%",
    npkReduction: { id: "−40% pemakaian pupuk NPK sintetis", en: "−40% synthetic NPK fertilizer usage" },
  },

  /** Komposisi mikroba terverifikasi (CFU/ml) — data lab, JANGAN diubah */
  microbial: [
    { name: { id: "Azospirillum sp.", en: "Azospirillum sp." }, cfu: "3,10 × 10⁷" },
    { name: { id: "Pseudomonas sp.", en: "Pseudomonas sp." }, cfu: "4,00 × 10⁸" },
    { name: { id: "Bacillus sp.", en: "Bacillus sp." }, cfu: "1,30 × 10⁸" },
    { name: { id: "Streptomyces sp.", en: "Streptomyces sp." }, cfu: "1,83 × 10⁹" },
    { name: { id: "Konsorsium penambat nitrogen", en: "Nitrogen-fixing consortium" }, cfu: "3,10 × 10¹⁰" },
    { name: { id: "Konsorsium pelarut fosfat", en: "Phosphorus-solubilizing consortium" }, cfu: "9,27 × 10⁷" },
  ],

  /** Fitohormon & kompleks bioaktif */
  bioactives: [
    { id: "Auksin (Indole-3-Acetic Acid / IAA)", en: "Auxin (Indole-3-Acetic Acid / IAA)" },
    { id: "Giberelin (kompleks GA3)", en: "Gibberellin (GA3 complex)" },
    { id: "Sitokinin (turunan Zeatin & Kinetin)", en: "Cytokinin (Zeatin & Kinetin-derived)" },
    { id: "Poli-elektrolit fulvat & humat bioaktif", en: "Bioactive fulvic & humic polyelectrolytes" },
  ],

  /** Hasil uji keamanan */
  safety: [
    { id: "Patogenisitas: negatif", en: "Pathogenicity: negative" },
    { id: "E. coli: negatif (0 CFU/ml)", en: "E. coli: negative (0 CFU/ml)" },
    { id: "Salmonella sp.: negatif (0 CFU/ml)", en: "Salmonella sp.: negative (0 CFU/ml)" },
  ],
} as const;

/** Susun tautan WhatsApp dengan pesan terisi otomatis (pre-filled) */
export function waLink(message: string): string {
  return `${SITE.whatsapp.url}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  id: {
    padi: "Halo Aris, saya ingin konsultasi penggunaan BIO7 untuk padi. Bisa dibantu protokol dosis untuk lahan saya?",
    kebun: "Halo Aris, saya ingin konsultasi BIO7 untuk kebun/perkebunan. Bisa dibantu petunjuk dosis yang disesuaikan?",
    ternak: "Halo Aris, saya ingin konsultasi BIO7 untuk peternakan (air minum probiotik / fermentasi pakan / sanitasi kandang). Bantu saya tentukan dosis?",
    general: "Halo Aris, saya ingin tahu lebih banyak tentang BIO7 — bisa info produk & harga?",
    oem: "Halo Aris, saya tertarik kerja sama OEM/white-label atau skala ekspor BIO7. Bisa dijadwalkan diskusi?",
    consult: "Halo Aris, saya belum yakin BIO7 cocok untuk kebutuhan saya. Boleh konsultasi gratis dulu?",
  },
  en: {
    padi: "Hello Aris, I would like to consult on using BIO7 for rice. Can you help me with a dosage protocol for my field?",
    kebun: "Hello Aris, I would like to consult on BIO7 for plantations/horticulture. Can you help me with tailored dosage guidance?",
    ternak: "Hello Aris, I would like to consult on BIO7 for livestock (probiotic drinking water / feed fermentation / barn sanitation). Can you help me with dosing?",
    general: "Hello Aris, I would like to know more about BIO7 — could you share product info and pricing?",
    oem: "Hello Aris, I am interested in an OEM/white-label or export-scale arrangement for BIO7. Could we schedule a discussion?",
    consult: "Hello Aris, I am not yet sure BIO7 fits my needs. May I have a free consultation first?",
  },
} as const;

/** Rute produksi (untuk tautan & sitemap) — dipetakan 1:1 ke hash router */
export const ROUTES = {
  home: "/",
  padi: "/padi",
  kebun: "/kebun",
  ternak: "/ternak",
  tentang: "/tentang",
  kontak: "/kontak",
  blog: "/blog",
  privacy: "/privacy",
  terms: "/terms",
  disclaimer: "/disclaimer",
} as const;
