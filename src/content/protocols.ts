/**
 * ============================================================
 * PROTOKOL PADI — DATA LENGKAP (SUMBER: MASTER PROMPT §3)
 * ============================================================
 * Aris: file ini berisi semua tabel dosis. Ganti angka HANYA jika
 * protokol resmi diperbarui. Struktur jangan diubah.
 *
 * Semua takaran "tutup" = tutup botol BIO7 1 liter (±10 ml).
 */

export type Locale = { id: string; en: string };

export interface TankMixRow {
  input: Locale;
  dosage: Locale;
  func: Locale;
}

export interface Protocol {
  key: "A" | "B" | "C" | "D";
  name: Locale;
  timing: Locale;
  objective: Locale;
  tankMix: TankMixRow[];
  basal: { title: Locale; items: Locale[] };
  notes?: Locale[];
  waterManagement?: Locale;
}

/* ------------------------------------------------------------------ */
/* ATURAN UMUM — berlaku untuk semua aplikasi padi (Master Prompt §3.1) */
/* ------------------------------------------------------------------ */

export const GENERAL_RULES: { icon: "soak" | "nursery" | "mix" | "herbicide" | "urea" | "shelf"; title: Locale; body: Locale; critical?: boolean }[] = [
  {
    icon: "soak",
    title: { id: "Rendam benih", en: "Seed soaking" },
    body: { id: "1 tutup per 3 liter air, rendam benih 24 jam.", en: "1 cap per 3 liters of water, soak seeds for 24 hours." },
  },
  {
    icon: "nursery",
    title: { id: "Semprot persemaian", en: "Nursery spray" },
    body: { id: "7 tutup per tangki 16 liter, semprot setiap 5 hari.", en: "7 caps per 16-liter tank, spray every 5 days." },
  },
  {
    icon: "mix",
    title: { id: "Kompatibilitas campuran", en: "Tank-mix compatibility" },
    body: {
      id: "BIO7 boleh dicampur dengan insektisida dan fungisida kimia.",
      en: "BIO7 can be mixed with chemical insecticides and fungicides.",
    },
  },
  {
    icon: "herbicide",
    critical: true,
    title: { id: "Larangan herbisida — jeda 7 hari", en: "Herbicide ban — 7-day interval" },
    body: {
      id: "JANGAN mencampur BIO7 dengan herbisida apa pun. Beri jeda minimum 7 hari antara BIO7 dan herbisida kimia (mis. Paraquat, Glifosat).",
      en: "Do NOT mix BIO7 with any herbicide. Maintain a minimum 7-day interval between BIO7 and chemical herbicides (e.g., Paraquat, Glyphosate).",
    },
  },
  {
    icon: "urea",
    critical: true,
    title: { id: "Urea padat dilarang setelah 30 HST", en: "Solid Urea forbidden after 30 DAT" },
    body: {
      id: "Mulai 30 HST, Urea padat dilarang keras. Pemupukan Urea (tebar/semprot) setelah 30 HST menipiskan dinding sel epidermis tanaman — memicu busuk seludang, busuk leher (Pyricularia oryzae), dan rebah.",
      en: "From 30 DAT (days after transplanting) onwards, solid Urea is strictly forbidden. Broadcast or sprayed Urea after 30 DAT thins the plant's epidermal cell walls — triggering sheath blight, neck blast (Pyricularia oryzae), and lodging.",
    },
  },
  {
    icon: "shelf",
    title: { id: "Masa simpan", en: "Shelf life" },
    body: { id: "Dijamin viabel sampai Juli 2032.", en: "Guaranteed viable through July 2032." },
  },
];

/* ------------------------------------------------------------------ */
/* PROTOKOL A — GENERASI ANAKAN SUPER (Master Prompt §3.2)              */
/* ------------------------------------------------------------------ */

export const PROTOCOL_A: Protocol = {
  key: "A",
  name: { id: "Protokol A — Generasi Anakan Super", en: "Protocol A — Super Tiller Generation" },
  timing: { id: "15, 22, dan 30 HST", en: "15, 22, and 30 days after transplanting (DAT)" },
  objective: {
    id: "Memicu produksi anakan produktif yang masif (target 35–50 batang per rumpun) serta mencegah klorosis bibit dan stagnasi akar.",
    en: "Trigger explosive production of productive tillers (target 35–50 stems per hill), prevent seedling chlorosis and root stagnation.",
  },
  tankMix: [
    {
      input: { id: "BIO7", en: "BIO7" },
      dosage: { id: "5–7 tutup (50–70 ml)", en: "5–7 caps (50–70 ml)" },
      func: { id: "Kolonisasi akar oleh mikroba, mobilisasi N/P hayati", en: "Microbial root colonization, biological N/P mobilization" },
    },
    {
      input: { id: "Ultradap (Mono-Ammonium Phosphate)", en: "Ultradap (Mono-Ammonium Phosphate)" },
      dosage: { id: "3–4 sendok makan (45–60 g)", en: "3–4 tablespoons (45–60 g)" },
      func: { id: "P siap tersedia untuk energi akar dalam, inisiasi anakan aktif", en: "Readily available P for deep root energy, active tiller initiation" },
    },
    {
      input: { id: "CALNIT (Calcium Nitrat, 15,5% N, 26% CaO)", en: "CALNIT (Calcium Nitrate, 15.5% N, 26% CaO)" },
      dosage: { id: "2–3 sendok makan (30–45 g)", en: "2–3 tablespoons (30–45 g)" },
      func: { id: "Nitrat-N + Ca larut menebalkan dinding sel, mencegah rebah", en: "Nitrate-N + soluble Ca thickens cell walls, prevents lodging" },
    },
    {
      input: { id: "MgSO4 (Magnesium Sulfat)", en: "MgSO4 (Magnesium Sulfate)" },
      dosage: { id: "1–2 sendok makan (15–30 g)", en: "1–2 tablespoons (15–30 g)" },
      func: { id: "Aktivator klorofil, fotosintesis saat langit mendung", en: "Chlorophyll activator, photosynthesis under cloudy skies" },
    },
    {
      input: { id: "Fitoflex (kompleks mikronutrien kelat)", en: "Fitoflex (chelated micronutrient complex)" },
      dosage: { id: "1 sachet (2,5 g)", en: "1 sachet (2.5 g)" },
      func: { id: "Unsur mikro (Zn, Cu, Fe, Mn, B, Mo) — mencegah kelaparan mikro tersembunyi di tanah masam", en: "Trace elements (Zn, Cu, Fe, Mn, B, Mo) — prevents hidden micro-hunger in acidic soils" },
    },
  ],
  basal: {
    title: { id: "Pupuk dasar (per hektar)", en: "Basal fertilizer (per hectare)" },
    items: [
      { id: "5 HST: Urea 25 kg + Phonska 25 kg", en: "5 DAT: Urea 25 kg + Phonska 25 kg" },
      { id: "10–15 HST: Urea 100 kg + Phonska 100 kg", en: "10–15 DAT: Urea 100 kg + Phonska 100 kg" },
      {
        id: "30 HST (opsional): Phonska 200 kg + Fertiphos 50 kg untuk target 8 t/ha; atau Phonska PLUS 200 kg + Fertiphos 50 kg untuk target 10 t/ha",
        en: "30 DAT (optional): Phonska 200 kg + Fertiphos 50 kg for an 8 t/ha target; or Phonska PLUS 200 kg + Fertiphos 50 kg for a 10 t/ha target",
      },
    ],
  },
  notes: [
    { id: "Arahkan kabut semprot ke pangkal rumpun dan zona akar.", en: "Direct the spray mist toward the base of the plant hills and the root zone." },
    { id: "Waktu semprot: pagi hari (06.00–09.00) atau sore (15.30–17.30).", en: "Timing: early morning (06:00–09:00) or late afternoon (15:30–17:30)." },
    { id: "Kondisi tanah: lembap / macak-macak, bukan kering gersang.", en: "Soil condition: moist/muddy (macak-macak), not parched." },
    { id: "Jangan menyemprot saat terik siang (10.00–14.00) — UV membunuh bakteri menguntungkan.", en: "Never spray under the scorching midday sun (10:00–14:00) — UV kills the beneficial bacteria." },
    { id: "Bila hujan turun dalam 2 jam setelah aplikasi, ulangi setengah dosis saat cuaca kembali cerah.", en: "If rain falls within 2 hours of application, re-apply at half dosage once the weather clears." },
  ],
};

/* ------------------------------------------------------------------ */
/* PROTOKOL B — PERPANJANG MALAI & PERISAI PENYAKIT (§3.3)             */
/* ------------------------------------------------------------------ */

export const PROTOCOL_B: Protocol = {
  key: "B",
  name: { id: "Protokol B — Perpanjang Malai & Perisai Penyakit", en: "Protocol B — Panicle Extension & Disease Shield" },
  timing: { id: "40, 47 HST, dan saat bunga seragam di seluruh petakan", en: "40, 47 DAT, and when flowers are uniform across the field" },
  objective: {
    id: "99% anakan menghasilkan malai; menekan busuk leher (neck blast) dan kresek; menonaktifkan walang sangit.",
    en: "99% of tillers produce panicles; suppress neck blast and kresek (bacterial leaf blight); deactivate walang sangit (rice stink bugs).",
  },
  tankMix: [
    {
      input: { id: "BIO7", en: "BIO7" },
      dosage: { id: "7–10 tutup", en: "7–10 caps" },
      func: { id: "Bikonversi hayati, mendukung pengisian bulir", en: "Bioconversion, supports grain filling" },
    },
    {
      input: { id: "Meroke MKP (52% P₂O₅, 34% K₂O)", en: "Meroke MKP (52% P₂O₅, 34% K₂O)" },
      dosage: { id: "5 sendok makan (±25 g)", en: "5 tablespoons (±25 g)" },
      func: { id: "Fosfor-kalium, energi malai", en: "Phosphorus-potassium, panicle energy" },
    },
    {
      input: { id: "CALNIT", en: "CALNIT" },
      dosage: { id: "2 sendok makan (±20 g)", en: "2 tablespoons (±20 g)" },
      func: { id: "Nitrogen + kalsium, malai kokoh", en: "Nitrogen + calcium, firm panicles" },
    },
    {
      input: { id: "MgSO4", en: "MgSO4" },
      dosage: { id: "1 sendok makan", en: "1 tablespoon" },
      func: { id: "Dukungan fotosintesis", en: "Photosynthesis support" },
    },
    {
      input: { id: "Fitoflex", en: "Fitoflex" },
      dosage: { id: "1 sachet (2,5 g)", en: "1 sachet (2.5 g)" },
      func: { id: "Mikronutrien lengkap", en: "Complete micronutrients" },
    },
    {
      input: { id: "Auksin Murni (hormon murni, PT Natural Agrisains Indonesia)", en: "Pure Auxin (PT Natural Agrisains Indonesia)" },
      dosage: { id: "1 sachet (5 g)", en: "1 sachet (5 g)" },
      func: { id: "Hormon perangsang akar, memperkuat serapan hara", en: "Root-stimulating hormone, strengthens nutrient uptake" },
    },
  ],
  basal: {
    title: { id: "Pupuk dasar (per hektar, 40–45 HST)", en: "Basal fertilizer (per hectare, 40–45 DAT)" },
    items: [
      { id: "KCl 100 kg + Fertiphos 100 kg. Target: 12 ton GKP/ha.", en: "KCl 100 kg + Fertiphos 100 kg. Target: 12 tonnes of unmilled rice per hectare." },
    ],
  },
  waterManagement: {
    id: "Genangi petakan setinggi 5 cm sejak awal fase ini hingga ujung malai mulai menguning. Pertahankan secara kontinu.",
    en: "Flood the field to 5 cm depth from the start of this phase until the panicle tips begin to yellow. Maintain continuously.",
  },
};

/* ------------------------------------------------------------------ */
/* PROTOKOL C — PEMBESARAN BULIR (§3.4)                                */
/* ------------------------------------------------------------------ */

export const PROTOCOL_C: Protocol = {
  key: "C",
  name: { id: "Protokol C — Perbesar Bulir", en: "Protocol C — Grain Enlargement" },
  timing: { id: "Saat malai mulai melengkung (1–2 semprotan, jeda 7 hari)", en: "When panicles begin to bend/curve (1–2 sprays, 7-day interval)" },
  objective: {
    id: "Memaksimalkan pengisian dan ukuran bulir.",
    en: "Maximize grain filling and grain size.",
  },
  tankMix: [
    {
      input: { id: "BIO7", en: "BIO7" },
      dosage: { id: "7 tutup", en: "7 caps" },
      func: { id: "Hayati (biologis)", en: "Biological" },
    },
    {
      input: { id: "KNO3 putih (Pupuk Crystal, kemasan 2 kg)", en: "White KNO3 (Pupuk Crystal, 2 kg pack)" },
      dosage: { id: "5 sendok makan", en: "5 tablespoons" },
      func: { id: "Nitrogen-kalium untuk penggemukan bulir", en: "Nitrogen-potassium for grain bulking" },
    },
    {
      input: { id: "MgSO4", en: "MgSO4" },
      dosage: { id: "2 sendok makan", en: "2 tablespoons" },
      func: { id: "Magnesium + sulfur", en: "Magnesium + sulfur" },
    },
    {
      input: { id: "TaniSIL (silika murni)", en: "TaniSIL (pure silica)" },
      dosage: { id: "1 sendok makan", en: "1 tablespoon" },
      func: { id: "Memperkuat batang dan bulir", en: "Strengthens stalk and grain" },
    },
    {
      input: { id: "Giberelin Murni (hormon perangsang bunga & buah)", en: "Pure Gibberellin (flower & fruit stimulation hormone)" },
      dosage: { id: "1 sachet (5 g)", en: "1 sachet (5 g)" },
      func: { id: "Hormon perangsang bunga & buah", en: "Flower/fruit stimulation hormone" },
    },
  ],
  basal: { title: { id: "Pupuk dasar", en: "Basal fertilizer" }, items: [] },
  waterManagement: {
    id: "Lanjutkan genangan 5 cm.",
    en: "Continue flooding to 5 cm depth.",
  },
};

/* ------------------------------------------------------------------ */
/* PROTOKOL D — PERGEMUK & MATANG BULIR (§3.5)                         */
/* ------------------------------------------------------------------ */

export const PROTOCOL_D: Protocol = {
  key: "D",
  name: { id: "Protokol D — Pergemuk & Matang Bulir", en: "Protocol D — Grain Filling & Maturation" },
  timing: { id: "Saat ujung malai mulai menguning (1–2 semprotan, jeda 5 hari)", en: "When panicle tips start yellowing (1–2 sprays, 5-day interval)" },
  objective: {
    id: "Menggemukkan bulir dan mempercepat pematangan seragam.",
    en: "Bulk the grains and accelerate uniform maturation.",
  },
  tankMix: [
    {
      input: { id: "BIO7", en: "BIO7" },
      dosage: { id: "10 tutup", en: "10 caps" },
      func: { id: "Hayati (biologis)", en: "Biological" },
    },
    {
      input: { id: "MerokeSOP (52% K₂O, 18% S, kemasan 1 kg)", en: "MerokeSOP (52% K₂O, 18% S, 1 kg pack)" },
      dosage: { id: "7 sendok makan", en: "7 tablespoons" },
      func: { id: "Kalium + sulfur untuk pengisian bulir", en: "Potassium + sulfur for grain filling" },
    },
    {
      input: { id: "MgSO4", en: "MgSO4" },
      dosage: { id: "3 sendok makan", en: "3 tablespoons" },
      func: { id: "Magnesium + sulfur, fotosintesis, kualitas bulir", en: "Magnesium + sulfur, photosynthesis, grain quality" },
    },
  ],
  basal: { title: { id: "Pupuk dasar", en: "Basal fertilizer" }, items: [] },
  waterManagement: {
    id: "Keringkan petakan hingga panen — mempercepat pematangan dan mempermudah panen.",
    en: "Drain the field dry until harvest — accelerates maturation and eases harvesting.",
  },
};

export const PROTOCOLS: Protocol[] = [PROTOCOL_A, PROTOCOL_B, PROTOCOL_C, PROTOCOL_D];

/* ------------------------------------------------------------------ */
/* PROTOKOL DARURAT — TANAH ASAM / JATUHNYA pH (§3.6)                  */
/* ------------------------------------------------------------------ */

export const EMERGENCY = {
  name: { id: "Protokol Darurat — Pemulihan Tanah Asam / Jatuhnya pH", en: "Emergency Protocol — Acid Soil / pH Drop Recovery" },
  symptoms: {
    title: { id: "Gejala yang ditangani", en: "Symptoms addressed" },
    body: {
      id: "Padi kerdil, klowor, ambles (rebah bibit), daun merah/kuning, sundep, akar coklat, virus tungro.",
      en: "Stunted rice (kerdil), klowor, damping-off (ambles), red/yellow leaves, sundep (empty panicles), brown roots, tungro virus.",
    },
  },
  procedure: {
    title: { id: "Prosedur", en: "Procedure" },
    steps: [
      { id: "Hentikan pemupukan Urea tebar untuk seluruh sisa musim tanam.", en: "Stop broadcasting Urea for the entire season." },
      { id: "Keringkan petakan sampai sat/asat (tidak perlu kering sampai retak rambut).", en: "Drain the field until saturated/dry (does not need to be hairline-cracked dry)." },
      { id: "Semprot 3 kali dengan jeda 1 hari (contoh: Senin – Rabu – Jumat).", en: "Spray 3 times at 1-day intervals (e.g., Monday – Wednesday – Friday)." },
    ] as Locale[],
  },
  formulaName: { id: 'Formula "Sapu Jagat" (per tangki 16 liter)', en: '"Sapu Jagat" formula (per 16-liter tank)' },
  tankMix: [
    {
      input: { id: "BIO7", en: "BIO7" },
      dosage: { id: "13 tutup", en: "13 caps" },
      func: { id: "Hayati (biologis)", en: "Biological" },
    },
    {
      input: { id: "Meroke MKP", en: "Meroke MKP" },
      dosage: { id: "7 sendok makan", en: "7 tablespoons" },
      func: { id: "Fosfor-kalium", en: "Phosphorus-potassium" },
    },
    {
      input: { id: "Dimehipo (bahan aktif)", en: "Dimehipo (active ingredient)" },
      dosage: { id: "75 ml", en: "75 ml" },
      func: { id: "Insektisida", en: "Insecticide" },
    },
    {
      input: { id: "Zinc Sulphate (atau Antracol 2 sendok makan)", en: "Zinc Sulphate (or Antracol 2 tablespoons)" },
      dosage: { id: "3 sendok makan", en: "3 tablespoons" },
      func: { id: "Mikronutrien / fungisida", en: "Micronutrient / fungicide" },
    },
  ] as TankMixRow[],
  basal: {
    title: { id: "Pupuk dasar (per hektar)", en: "Basal fertilizer (per hectare)" },
    items: [
      { id: "Phonska 100 kg + Fertiphos 100 kg.", en: "Phonska 100 kg + Fertiphos 100 kg." },
    ] as Locale[],
  },
  preventive: {
    id: "Pencegahan: semprot formula Sapu Jagat yang sama 1 dan 3 hari sebelum tanam.",
    en: "Preventive use: spray the same Sapu Jagat formula 1 and 3 days before planting.",
  },
};

/* ------------------------------------------------------------------ */
/* HORTIKULTURA & TANAMAN SEKUNDER (§3.7)                              */
/* ------------------------------------------------------------------ */

export const HORTICULTURE = {
  title: { id: "Hortikultura & Tanaman Sekunder", en: "Horticulture & Secondary Crops" },
  rows: [
    {
      input: { id: "Semprot daun (foliar)", en: "Foliar spray" },
      dosage: { id: "7 tutup per tangki 16 liter", en: "7 caps per 16-liter tank" },
      func: { id: "Setiap 7–10 hari", en: "Every 7–10 days" },
    },
    {
      input: { id: "Kocor akar (root drench)", en: "Root drench" },
      dosage: { id: "1 tutup per 10 liter air", en: "1 cap per 10 liters of water" },
      func: { id: "1 gelas per tanaman, setiap 15–30 hari", en: "1 glass per plant, every 15–30 days" },
    },
  ] as TankMixRow[],
};
