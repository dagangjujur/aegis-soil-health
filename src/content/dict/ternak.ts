import type { Locale } from "../lang";

/**
 * Halaman TERNAK (Peternakan & Perikanan).
 * Aris: teks narasi halaman ternak ada di sini.
 * PENTING: konten diekstrapolasi — wajib menyimpan label jujur (guidance).
 */

export const ternak = {
  meta: {
    title: { id: "BIO7 untuk Peternakan & Perikanan | Aegis Soil Health", en: "BIO7 for Livestock & Aquaculture | Aegis Soil Health" } as Locale,
    description: {
      id: "Petunjuk aplikasi BIO7 untuk ternak: air minum probiotik, fermentasi pakan, dan sanitasi kandang untuk ayam, sapi, kambing, ikan, dan udang.",
      en: "BIO7 application guidance for livestock: probiotic drinking water, feed fermentation, and barn sanitation for poultry, cattle, goats, fish, and shrimp.",
    } as Locale,
  },
  hero: {
    eyebrow: { id: "Sektor Peternakan & Perikanan", en: "Livestock & Aquaculture Sector" } as Locale,
    title: {
      id: "Satu Konsorsium Mikroba untuk Kandang yang Lebih Sehat",
      en: "One Microbial Consortium for a Healthier Barn",
    } as Locale,
    lead: {
      id: "Air minum probiotik, fermentasi pakan, dan sanitasi kandang — tiga pintu masuk konsorsium mikroba BIO7 yang sama dengan yang menghidupkan tanah.",
      en: "Probiotic drinking water, feed fermentation, and barn sanitation — three entry points for the same BIO7 consortium that revitalizes soil.",
    } as Locale,
    cta: { id: "Konsultasi ternak via WhatsApp", en: "Livestock consultation via WhatsApp" } as Locale,
  },
  honest: {
    title: { id: "Status konten halaman ini", en: "Status of this page's content" } as Locale,
    body: {
      id: "Konten di halaman ini adalah petunjuk aplikasi yang diekstrapolasi dari mekanisme probiotik terverifikasi. Formulasi khusus peternakan belum divalidasi lapangan — konsultasi gratis tersedia untuk dosis yang disesuaikan. BIO7 tidak dipasarkan untuk konsumsi manusia.",
      en: "The content on this page is application guidance extrapolated from the verified probiotic mechanism. A livestock-specific formulation has not been field-validated yet — free consultation is available for tailored dosing. BIO7 is not marketed for human consumption.",
    } as Locale,
  },
  applications: {
    title: { id: "Tiga aplikasi di kandang", en: "Three applications in the barn" } as Locale,
    items: [
      {
        title: { id: "Air minum probiotik", en: "Probiotic drinking water" } as Locale,
        body: {
          id: "Konsorsium mikroba menyeimbangkan flora saluran cerna ternak dan meningkatkan penyerapan nutrisi pakan.",
          en: "The microbial consortium balances gut flora in livestock and improves nutrient absorption from feed.",
        } as Locale,
      },
      {
        title: { id: "Fermentasi pakan", en: "Feed fermentation" } as Locale,
        body: {
          id: "Pakan terprobiotik lebih mudah dicerna — nilai gizi per kilogram pakan naik tanpa tambahan biaya besar.",
          en: "Probiotic-treated feed is easier to digest — nutritional value per kilogram rises without major added cost.",
        } as Locale,
      },
      {
        title: { id: "Sanitasi kandang", en: "Barn sanitation" } as Locale,
        body: {
          id: "Kompetisi mikroba mengurangi beban patogen di lantai dan permukaan kandang — lingkungan lebih bersih tanpa disinfektan keras.",
          en: "Microbial competition reduces pathogen load on floors and barn surfaces — a cleaner environment without harsh disinfectants.",
        } as Locale,
      },
    ],
  },
  dosage: {
    title: { id: "Petunjuk dosis per jenis ternak", en: "Dosage guidance per livestock type" } as Locale,
    rows: [
      {
        type: { id: "Broiler / layer (ayam)", en: "Broiler / layer (poultry)" } as Locale,
        dosage: { id: "1–2 tutup per liter air minum", en: "1–2 caps per liter of drinking water" } as Locale,
        schedule: { id: "3–5 hari per bulan", en: "3–5 days per month" } as Locale,
      },
      {
        type: { id: "Ruminan (sapi / kambing)", en: "Ruminants (cattle / goats)" } as Locale,
        dosage: { id: "5–10 tutup per ekor per hari", en: "5–10 caps per head per day" } as Locale,
        schedule: { id: "Dicampur pakan atau air minum", en: "Mixed into feed or drinking water" } as Locale,
      },
      {
        type: { id: "Akuakultur (ikan / udang)", en: "Aquaculture (fish / shrimp)" } as Locale,
        dosage: { id: "1 tutup per 100 m³ air", en: "1 cap per 100 m³ of water" } as Locale,
        schedule: { id: "Aplikasi mingguan", en: "Weekly application" } as Locale,
      },
    ],
    note: {
      id: "Dosis peternak berbeda dari dosis tanaman — jangan memakai dosis kebun di kandang. Mulai dari batas bawah, amati 1 siklus, lalu sesuaikan.",
      en: "Livestock dosing differs from crop dosing — never apply garden rates in the barn. Start at the lower bound, observe one cycle, then adjust.",
    } as Locale,
  },
  cta: {
    title: { id: "Konsultasi gratis untuk kandang Anda", en: "Free consultation for your barn" } as Locale,
    body: {
      id: "Ceritakan jenis ternak, populasi, dan sistem kandang Anda. Kami bantu susun program BIO7 yang sesuai.",
      en: "Tell us your livestock type, population, and barn system. We will help design a suitable BIO7 program.",
    } as Locale,
    cta: { id: "Konsultasi gratis via WhatsApp", en: "Free consultation via WhatsApp" } as Locale,
  },
  pricing: {
    title: { id: "Harga BIO7", en: "BIO7 pricing" } as Locale,
    dosageNote: {
      id: "Catatan: dosis untuk peternakan berbeda dari dosis tanaman — kaji kebutuhan per siklus ternak Anda sebelum memesan.",
      en: "Note: livestock dosing differs from crop dosing — assess your livestock cycle's needs before ordering.",
    } as Locale,
  },
  faq: {
    title: { id: "Pertanyaan umum sektor ternak", en: "Livestock sector FAQ" } as Locale,
    items: [
      {
        q: { id: "Apakah BIO7 aman untuk ternak?", en: "Is BIO7 safe for livestock?" } as Locale,
        a: {
          id: "Uji laboratorium menunjukkan BIO7 non-patogenik dengan E. coli dan Salmonella negatif (0 CFU/ml). Namun program peternakan belum divalidasi lapangan — mulailah lewat konsultasi gratis dan uji skala kecil dulu.",
          en: "Laboratory tests show BIO7 is non-pathogenic with negative E. coli and Salmonella results (0 CFU/ml). However, livestock programs are not yet field-validated — start with a free consultation and a small-scale trial.",
        } as Locale,
      },
      {
        q: { id: "Berapa dosis untuk ayam broiler?", en: "What is the dosage for broiler chickens?" } as Locale,
        a: {
          id: "1–2 tutup per liter air minum, diberikan 3–5 hari per bulan. Mulai dari 1 tutup, amati kondisi litter dan FCR, lalu sesuaikan.",
          en: "1–2 caps per liter of drinking water, given 3–5 days per month. Start at 1 cap, observe litter condition and FCR, then adjust.",
        } as Locale,
      },
      {
        q: { id: "Apakah BIO7 menggantikan vaksin atau obat?", en: "Does BIO7 replace vaccines or medication?" } as Locale,
        a: {
          id: "Tidak. BIO7 mendukung kesehatan lingkungan dan pencernaan — bukan pengganti program kesehatan hewan yang diarahkan dokter hewan.",
          en: "No. BIO7 supports environmental and digestive health — it does not replace an animal health program directed by a veterinarian.",
        } as Locale,
      },
    ],
  },
} as const;
