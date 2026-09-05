import type { Locale } from "../lang";

/**
 * Halaman BERANDA (router hero).
 * Aris: ubah judul/pitch sektor di sini.
 */

export const home = {
  meta: {
    title: { id: "Aegis Soil Health — BIO7 Bioaktivator Mikroba Multiguna", en: "Aegis Soil Health — BIO7 Multi-Purpose Microbial Bioactivator" } as Locale,
    description: {
      id: "Mengurai sisa agrokimia beracun, menetralkan keasaman tanah, dan mengaktifkan kembali biologi bawah tanah dengan konsorsium mikroba hidup ultra-padat.",
      en: "Decomposes toxic agrochemical residues, neutralizes soil acidity, and reactivates native subterranean biology with an ultra-dense living microbial consortium.",
    } as Locale,
  },
  hero: {
    eyebrow: { id: "PT Aegis Soil Health mempersembahkan", en: "PT Aegis Soil Health presents" } as Locale,
    title: { id: "BIO7", en: "BIO7" } as Locale,
    subtitle: {
      id: "Bioaktivator & Bioremediasi Tanah Multi-Mikroba",
      en: "Multi-Microbial Bioactivator & Soil Bioremediation Agent",
    } as Locale,
    valueProp: {
      id: "Mikroba untuk Tanah yang Lebih Hidup. Mengurai sisa agrokimia beracun, menetralkan tanah asam, dan mengaktifkan kembali biologi bawah tanah dengan konsorsium mikroba hidup ultra-padat.",
      en: "Microbes for Living Soil. Decomposing toxic agrochemical residues, neutralizing soil acidity, and reactivating native subterranean biology with an ultra-dense living microbial consortium.",
    } as Locale,
    question: { id: "Untuk lahan atau usaha apa Anda ingin memulai?", en: "What would you like to start with?" } as Locale,
  },
  sectors: [
    {
      key: "padi" as const,
      title: { id: "Padi & Pertanian", en: "Rice & Agriculture" } as Locale,
      pitch: {
        id: "Protokol lengkap teruji lapangan — dari anakan super hingga penggemukan bulir. Kasus Karawang: 12,6 ton/ha.",
        en: "Field-tested full protocols — from super tillers to grain filling. Karawang case: 12.6 t/ha.",
      } as Locale,
      cta: { id: "Lihat protokol padi", en: "See rice protocols" } as Locale,
    },
    {
      key: "kebun" as const,
      title: { id: "Perkebunan & Hortikultura", en: "Plantations & Horticulture" } as Locale,
      pitch: {
        id: "Sawit, kopi, kakao, buah, dan sayuran — pemulihan tanah dan pengurangan residu kimia.",
        en: "Palm, coffee, cocoa, fruit trees, and vegetables — soil restoration and chemical residue reduction.",
      } as Locale,
      cta: { id: "Lihat panduan kebun", en: "See plantation guidance" } as Locale,
    },
    {
      key: "ternak" as const,
      title: { id: "Peternakan & Perikanan", en: "Livestock & Aquaculture" } as Locale,
      pitch: {
        id: "Air minum probiotik, fermentasi pakan, dan sanitasi kandang dengan konsorsium mikroba yang sama.",
        en: "Probiotic drinking water, feed fermentation, and barn sanitation with the same microbial consortium.",
      } as Locale,
      cta: { id: "Lihat panduan ternak", en: "See livestock guidance" } as Locale,
    },
  ],
  trust: {
    badges: { id: "Terdaftar KEMENTAN RI · Diuji UNPAD · 20+ tahun di pasar", en: "KEMENTAN RI registered · UNPAD tested · 20+ years in market" } as Locale,
  },
  consult: {
    title: { id: "Belum yakin BIO7 cocok untuk Anda?", en: "Not sure BIO7 is right for you?" } as Locale,
    body: {
      id: "Konsultasi gratis via WhatsApp — ceritakan kondisi lahan atau kandang Anda, kami bantu susun dosis yang sesuai.",
      en: "Free consultation via WhatsApp — tell us about your field or barn, and we will help design a suitable dosage.",
    } as Locale,
    cta: { id: "Konsultasi gratis via WhatsApp", en: "Free consultation via WhatsApp" } as Locale,
  },
} as const;
