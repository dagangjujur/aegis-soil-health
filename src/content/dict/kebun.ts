import type { Locale } from "../lang";

/**
 * Halaman KEBUN (Perkebunan & Hortikultura).
 * Aris: teks narasi halaman kebun ada di sini.
 * PENTING: konten diekstrapolasi — wajib menyimpan label jujur (guidance).
 */

export const kebun = {
  meta: {
    title: { id: "BIO7 untuk Perkebunan & Hortikultura | Aegis Soil Health", en: "BIO7 for Plantations & Horticulture | Aegis Soil Health" } as Locale,
    description: {
      id: "Petunjuk aplikasi BIO7 untuk sawit, kopi, kakao, durian, mangga, cabai, tomat, kol, dan bawang — pemulihan tanah dan pengurangan residu kimia.",
      en: "BIO7 application guidance for oil palm, coffee, cocoa, durian, mango, chili, tomato, cabbage, and onion — soil restoration and residue reduction.",
    } as Locale,
  },
  hero: {
    eyebrow: { id: "Sektor Perkebunan & Hortikultura", en: "Plantations & Horticulture Sector" } as Locale,
    title: {
      id: "Pulihkan Tanah Kebun dengan Konsorsium Mikroba yang Sama",
      en: "Restore Plantation Soil with the Same Microbial Consortium",
    } as Locale,
    lead: {
      id: "Dari sawit rakyat sampai bedengan cabai: BIO7 bekerja lewat mekanisme yang sama seperti di padi — mengurai residu, melarutkan hara, dan menekan patogen.",
      en: "From smallholder palm to chili beds: BIO7 works through the same mechanism as in rice — decomposing residues, solubilizing nutrients, and suppressing pathogens.",
    } as Locale,
    cta: { id: "Konsultasi kebun via WhatsApp", en: "Plantation consultation via WhatsApp" } as Locale,
  },
  honest: {
    title: { id: "Status konten halaman ini", en: "Status of this page's content" } as Locale,
    body: {
      id: "Konten di halaman ini adalah petunjuk aplikasi yang diekstrapolasi dari mekanisme mikroba terverifikasi dan protokol padi. Belum ada uji lapangan spesifik untuk komoditas perkebunan — karena itu konsultasi gratis tersedia untuk menyusun dosis yang disesuaikan.",
      en: "The content on this page is application guidance extrapolated from the verified microbial mechanism and rice protocols. There are no commodity-specific field trials yet — free consultation is available to design tailored dosages.",
    } as Locale,
  },
  benefits: {
    title: { id: "Apa yang BIO7 lakukan untuk kebun Anda", en: "What BIO7 does for your plantation" } as Locale,
    items: [
      {
        title: { id: "Fiksasi nitrogen hayati", en: "Biological nitrogen fixation" } as Locale,
        body: {
          id: "Konsorsium penambat N menyuplai nitrogen dari udara ke zona perakaran — mengurangi ketergantungan urea.",
          en: "The N-fixing consortium supplies nitrogen from the air into the root zone — reducing urea dependence.",
        } as Locale,
      },
      {
        title: { id: "Pelarutan fosfat terkunci", en: "Locked phosphate solubilization" } as Locale,
      body: {
          id: "Bakteri pelarut fosfat memobilisasi P yang terikat di tanah masam — hara lama jadi tersedia kembali.",
          en: "P-solubilizing bacteria mobilize P bound in acidic soils — legacy nutrients become available again.",
        } as Locale,
      },
      {
        title: { id: "Bioremediasi residu agrokimia", en: "Agrochemical residue bioremediation" } as Locale,
        body: {
          id: "Mikroba dekomposer mengurai sisa pestisida dan pupuk kimia yang menumpuk di zona akar.",
          en: "Decomposer microbes break down pesticide and chemical fertilizer residues accumulated in the root zone.",
        } as Locale,
      },
      {
        title: { id: "Penekanan patogen tular tanah", en: "Soil-borne pathogen suppression" } as Locale,
        body: {
          id: "Streptomyces dan Bacillus bersaing dengan patogen jamur akar (mis. Ganoderma, Fusarium) lewat kompetisi mikroba.",
          en: "Streptomyces and Bacillus compete with root fungal pathogens (e.g., Ganoderma, Fusarium) through microbial competition.",
        } as Locale,
      },
    ],
  },
  dosage: {
    title: { id: "Petunjuk aplikasi", en: "Application guidance" } as Locale,
    rows: [
      {
        input: { id: "Semprot daun (foliar)", en: "Foliar spray" } as Locale,
        dosage: { id: "7 tutup per tangki 16 liter", en: "7 caps per 16-liter tank" } as Locale,
        func: { id: "Setiap 7–10 hari", en: "Every 7–10 days" } as Locale,
      },
      {
        input: { id: "Kocor akar (root drench)", en: "Root drench" } as Locale,
        dosage: { id: "1 tutup per 10 liter air", en: "1 cap per 10 liters of water" } as Locale,
        func: { id: "1 gelas per tanaman, setiap 15–30 hari", en: "1 glass per plant, every 15–30 days" } as Locale,
      },
    ],
    herbicideNote: {
      id: "Aturan yang sama berlaku: jangan mencampur BIO7 dengan herbisida; jeda minimum 7 hari.",
      en: "The same rule applies: never mix BIO7 with herbicides; keep a minimum 7-day interval.",
    } as Locale,
  },
  crops: {
    title: { id: "Komoditas yang dicakup", en: "Crops covered" } as Locale,
    items: [
      { name: { id: "Sawit", en: "Oil palm" } as Locale, note: { id: "Zone akar piringan, program pengurangan pupuk bertahap", en: "Circle root zone, staged fertilizer-reduction program" } as Locale },
      { name: { id: "Kopi", en: "Coffee" } as Locale, note: { id: "Pemulihan tanah naungan, kualitas cherry", en: "Shaded-soil restoration, cherry quality" } as Locale },
      { name: { id: "Kakao", en: "Cocoa" } as Locale, note: { id: "Penekanan patogen VSD dan busuk buah lewat kesehatan tanah", en: "VSD and pod-rot suppression via soil health" } as Locale },
      { name: { id: "Durian", en: "Durian" } as Locale, note: { id: "Kocor akar muda, fase pra-produksi", en: "Young-root drench, pre-production phase" } as Locale },
      { name: { id: "Mangga", en: "Mango" } as Locale, note: { id: "Pemulihan tanah gundul, dukungan fase generatif", en: "Bare-soil restoration, generative-phase support" } as Locale },
      { name: { id: "Cabai", en: "Chili" } as Locale, note: { id: "Semprot rutin 7–10 hari, bedengan", en: "Routine 7–10-day spraying, raised beds" } as Locale },
      { name: { id: "Tomat", en: "Tomato" } as Locale, note: { id: "Semprot daun + kocor, fase pascatransplant", en: "Foliar + drench, post-transplant phase" } as Locale },
      { name: { id: "Kol", en: "Cabbage" } as Locale, note: { id: "Tanah dataran tinggi masam, program pH", en: "Acidic highland soil, pH program" } as Locale },
      { name: { id: "Bawang", en: "Onion" } as Locale, note: { id: "Semprot fase pembentukan umbi", en: "Bulb-formation-phase spraying" } as Locale },
    ],
  },
  cta: {
    title: { id: "Belum ada uji lapangan spesifik untuk perkebunan — konsultasi gratis untuk dosis yang disesuaikan", en: "No plantation-specific field trials yet — free consultation for tailored dosages" } as Locale,
    body: {
      id: "Ceritakan komoditas, luas, dan kondisi tanah Anda. Kami susun rekomendasi dosis awal dan jadwal evaluasi bersama.",
      en: "Tell us your crop, acreage, and soil condition. We will draft a starting dosage and an evaluation schedule together.",
    } as Locale,
    cta: { id: "Konsultasi gratis via WhatsApp", en: "Free consultation via WhatsApp" } as Locale,
  },
  pricing: {
    title: { id: "Harga BIO7", en: "BIO7 pricing" } as Locale,
  },
  faq: {
    title: { id: "Pertanyaan umum sektor kebun", en: "Plantation sector FAQ" } as Locale,
    items: [
      {
        q: { id: "Apakah BIO7 sudah diuji untuk sawit atau kopi?", en: "Has BIO7 been field-tested for palm or coffee?" } as Locale,
        a: {
          id: "Belum ada uji lapangan spesifik untuk komoditas perkebunan. Mekanisme mikroba dan uji lab terverifikasi, tapi dosis kebun adalah petunjuk aplikasi hasil ekstrapolasi — karena itu kami sediakan konsultasi gratis sebelum Anda membeli.",
          en: "Not yet for plantation commodities. The microbial mechanism and lab tests are verified, but plantation dosages are extrapolated application guidance — that is why we offer a free consultation before you buy.",
        } as Locale,
      },
      {
        q: { id: "Bisakah BIO7 dicampur pupuk daun kimia?", en: "Can BIO7 be mixed with chemical foliar fertilizers?" } as Locale,
        a: {
          id: "Bisa, seperti di padi. Hindari hanya herbisida — beri jeda 7 hari. Semprot pagi atau sore, bukan siang terik.",
          en: "Yes, as in rice. Only avoid herbicides — keep a 7-day interval. Spray in the morning or late afternoon, not the midday heat.",
        } as Locale,
      },
      {
        q: { id: "Untuk sawit dewasa, kocor atau semprot?", en: "For mature palms, drench or spray?" } as Locale,
        a: {
          id: "Fokus di piringan akar: kocor 1 tutup per 10 liter air, dosis per pokok disesuaikan umur. Konsultasi gratis membantu hitung kebutuhan per hektar.",
          en: "Focus on the root circle: drench at 1 cap per 10 liters of water, per-palm dosage adjusted to age. A free consultation helps calculate per-hectare needs.",
        } as Locale,
      },
    ],
  },
} as const;
