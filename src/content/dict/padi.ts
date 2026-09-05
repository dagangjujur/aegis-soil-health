import type { Locale } from "../lang";

/**
 * Halaman PADI — halaman terdalam.
 * Aris: teks narasi halaman padi ada di sini. Tabel dosis ada di
 * src/content/protocols.ts.
 */

export const padi = {
  meta: {
    title: { id: "BIO7 untuk Padi — Protokol Lengkap Hingga Panen | Aegis Soil Health", en: "BIO7 for Rice — Complete Protocols to Harvest | Aegis Soil Health" } as Locale,
    description: {
      id: "Protokol BIO7 untuk padi: anakan super 35–50 batang/rumpun, perisai penyakit, penggemukan bulir, dan pemulihan tanah asam. Kasus Karawang 2023: 12,6 ton/ha.",
      en: "BIO7 protocols for rice: super tillering at 35–50 stems/hill, disease shield, grain filling, and acid soil recovery. Karawang 2023 case: 12.6 t/ha.",
    } as Locale,
  },
  hero: {
    eyebrow: { id: "Sektor Pertanian — Padi", en: "Agriculture Sector — Rice" } as Locale,
    title: {
      id: "Protokol Padi BIO7 — Teruji Lapangan di Lumbung Padi Nasional",
      en: "BIO7 Rice Protocols — Field-Tested in a National Rice Granary",
    } as Locale,
    lead: {
      id: "Dari rendam benih hingga pematangan bulir: empat protokol bertahap, satu protokol darurat tanah asam, dan satu kasus lapangan terverifikasi 12,6 ton/ha.",
      en: "From seed soaking to grain maturation: four staged protocols, one emergency acid-soil protocol, and one verified field case at 12.6 t/ha.",
    } as Locale,
    cta: { id: "Konsultasi padi via WhatsApp", en: "Rice consultation via WhatsApp" } as Locale,
  },
  quickPitch: {
    title: { id: "Apa yang BIO7 lakukan untuk padi Anda", en: "What BIO7 does for your rice" } as Locale,
    bullets: [
      {
        id: "Anakan produktif 35–50 batang per rumpun lewat kolonisasi akar dan mobilisasi N/P hayati.",
        en: "35–50 productive tillers per hill via root colonization and biological N/P mobilization.",
      } as Locale,
      {
        id: "Tanah yang sehat: sisa agrokimia terurai, keasaman dinetralkan, patogen tular tanah ditekan.",
        en: "Healthy soil: agrochemical residues decompose, acidity is neutralized, soil-borne pathogens are suppressed.",
      } as Locale,
      {
        id: "Kurangi 40% pupuk NPK sintetis — kasus Karawang 2023 menghasilkan 12,6 ton/ha.",
        en: "Cut 40% of synthetic NPK — the Karawang 2023 case yielded 12.6 t/ha.",
      } as Locale,
    ],
  },
  credentials: {
    title: { id: "Kredensial terverifikasi", en: "Verified credentials" } as Locale,
    safety: {
      id: "Uji keamanan: non-patogenik · E. coli negatif · Salmonella negatif. Aman untuk tanah dan tanaman.",
      en: "Safety tested: non-pathogenic · E. coli negative · Salmonella negative. Safe for soil and crops.",
    } as Locale,
  },
  rules: {
    title: { id: "Aturan umum — berlaku untuk semua aplikasi padi", en: "General rules — apply to all rice applications" } as Locale,
    subtitle: {
      id: "Patuhi dua larangan keras (herbisida & Urea 30 HST) agar mikroba bekerja optimal.",
      en: "Follow the two strict prohibitions (herbicides & Urea after 30 DAT) so the microbes work optimally.",
    } as Locale,
  },
  protocols: {
    title: { id: "Empat protokol bertahap", en: "The four staged protocols" } as Locale,
    subtitle: {
      id: "Semua takaran per tangki semprot 16 liter (knapsack). Ikuti urutan waktu HST.",
      en: "All dosages per 16-liter knapsack tank. Follow the DAT schedule in order.",
    } as Locale,
    tankMix: { id: "Campuran tangki (per 16 liter)", en: "Tank-mix (per 16 L)" } as Locale,
    input: { id: "Bahan", en: "Input" } as Locale,
    dosage: { id: "Dosis", en: "Dosage" } as Locale,
    func: { id: "Fungsi", en: "Function" } as Locale,
    timing: { id: "Waktu aplikasi", en: "Timing" } as Locale,
    objective: { id: "Tujuan", en: "Objective" } as Locale,
    technique: { id: "Teknik aplikasi", en: "Application technique" } as Locale,
    water: { id: "Pengelolaan air", en: "Water management" } as Locale,
  },
  emergency: {
    title: { id: "Protokol darurat", en: "Emergency protocol" } as Locale,
    subtitle: {
      id: "Untuk lahan bermasalah: tanah asam, pH jatuh, atau tanaman sudah menunjukkan gejala.",
      en: "For problem fields: acid soil, pH drop, or plants already showing symptoms.",
    } as Locale,
  },
  horticulture: {
    title: { id: "Hortikultura & tanaman sekunder", en: "Horticulture & secondary crops" } as Locale,
    subtitle: {
      id: "Dosis BIO7 untuk sayuran dan palawaja di luar padi.",
      en: "BIO7 dosage for vegetables and secondary crops beyond rice.",
    } as Locale,
  },
  fieldProof: {
    title: { id: "Bukti lapangan — Model Karawang 2023", en: "Field proof — Karawang Model 2023" } as Locale,
    lead: {
      id: "Lahan Haji Karma, Kecamatan Jayakerta, Kabupaten Karawang — lumbung padi nasional.",
      en: "Haji Karma's plot, Jayakerta District, Karawang Regency — a national rice granary.",
    } as Locale,
    labels: {
      yield: { id: "Hasil terverifikasi", en: "Verified yield" } as Locale,
      baseline: { id: "Rata-rata lokal", en: "Regional baseline" } as Locale,
      uplift: { id: "Keunggulan", en: "Advantage" } as Locale,
      npk: { id: "Efisiensi input", en: "Input efficiency" } as Locale,
      plot: { id: "Luas petakan", en: "Plot size" } as Locale,
    },
    note: {
      id: "Hasil aktual bergantung pada varietas, cuaca, dan pengelolaan lahan. Konsultasikan protokol untuk kondisi Anda.",
      en: "Actual results depend on variety, weather, and field management. Consult on the protocol for your conditions.",
    } as Locale,
  },
  pricing: {
    title: { id: "Harga BIO7", en: "BIO7 pricing" } as Locale,
    dropship: {
      id: "Pengiriman dari produsen per pesanan (dropship) — pemesanan & konsultasi via WhatsApp.",
      en: "Sourced per-order from the manufacturer (dropship) — ordering & consultation via WhatsApp.",
    } as Locale,
    oem: {
      id: "OEM / white-label & skala ekspor: hubungi kami untuk penawaran khusus.",
      en: "OEM / white-label & export scale: contact us for a special arrangement.",
    } as Locale,
  },
  faq: {
    title: { id: "Pertanyaan umum sektor padi", en: "Rice sector FAQ" } as Locale,
    items: [
      {
        q: { id: "Apakah BIO7 bisa dicampur dengan pupuk atau pestisida kimia?", en: "Can BIO7 be mixed with chemical fertilizers or pesticides?" } as Locale,
        a: {
          id: "Bisa. BIO7 kompatibel dengan insektisida dan fungisida kimia dalam satu tangki. Satu-satunya larangan: jangan dicampur herbisida, dan beri jeda minimum 7 hari dari aplikasi herbisida (mis. Paraquat, Glifosat).",
          en: "Yes. BIO7 is compatible with chemical insecticides and fungicides in the same tank. The only prohibition: never mix with herbicides, and keep a minimum 7-day interval from any herbicide application (e.g., Paraquat, Glyphosate).",
        } as Locale,
      },
      {
        q: { id: "Mengapa Urea dilarang setelah 30 HST?", en: "Why is Urea forbidden after 30 DAT?" } as Locale,
        a: {
          id: "Urea padat setelah 30 HST menipiskan dinding sel epidermis tanaman. Akibatnya rentan busuk seludang, busuk leher (Pyricularia oryzae), dan rebah. Setelah 30 HST gunakan protokol hayati + pupuk daun sesuai Protokol B–D.",
          en: "Solid Urea after 30 DAT thins the plant's epidermal cell walls, inviting sheath blight, neck blast (Pyricularia oryzae), and lodging. After 30 DAT, use the biological protocols + foliar feeding per Protocols B–D.",
        } as Locale,
      },
      {
        q: { id: "Apakah hasil 12,6 ton/ha dijamin?", en: "Is the 12.6 t/ha yield guaranteed?" } as Locale,
        a: {
          id: "Tidak. Angka Karawang 2023 adalah hasil terverifikasi dari lahan 1 hektar dengan protokol lengkap. Hasil aktual bergantung varietas, cuaca, dan pengelolaan — konsultasi gratis membantu menyusun target realistis untuk lahan Anda.",
          en: "No. The Karawang 2023 figure is a verified result from a 1-hectare plot under the full protocol. Actual results depend on variety, weather, and management — a free consultation helps set a realistic target for your field.",
        } as Locale,
      },
      {
        q: { id: "Bagaimana cara pakai BIO7 saat benih masih di persemaian?", en: "How do I use BIO7 at the nursery stage?" } as Locale,
        a: {
          id: "Rendam benih: 1 tutup per 3 liter air selama 24 jam. Semprot persemaian: 7 tutup per tangki 16 liter, setiap 5 hari.",
          en: "Seed soaking: 1 cap per 3 liters of water for 24 hours. Nursery spray: 7 caps per 16-liter tank, every 5 days.",
        } as Locale,
      },
      {
        q: { id: "Apakah BIO7 aman untuk tanah dan lingkungan?", en: "Is BIO7 safe for soil and the environment?" } as Locale,
        a: {
          id: "Ya — teruji non-patogenik dengan hasil negatif untuk E. coli dan Salmonella (0 CFU/ml). Terdaftar di KEMENTAN RI dengan nomor 03.02.2026.156 dan dianalisis oleh Fakultas Pertanian UNPAD.",
          en: "Yes — tested non-pathogenic with negative results for E. coli and Salmonella (0 CFU/ml). Registered with KEMENTAN RI (No. 03.02.2026.156) and analyzed by the UNPAD Faculty of Agriculture.",
        } as Locale,
      },
    ],
  },
} as const;
