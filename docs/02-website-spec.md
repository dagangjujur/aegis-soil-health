# 02 — Spesifikasi Situs (As-Built)
## aegissoilhealth.com — Aegis Soil Health × BIO7

**Deliverable B** (Master Prompt §6), ditulis sebagai dokumentasi *as-built*: apa yang sudah diimplementasikan dan diverifikasi, bukan sekadar rencana. Struktur mengikuti spesifikasi master prompt; setiap bagian menunjukkan status implementasi.

- **Stack**: Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui; target produksi **Cloudflare Pages (statis)**, satu domain `aegissoilhealth.com`.
- **Status build**: `bun run lint` → 0 error 0 warning; E2E terverifikasi via agent-browser (semua rute, toggle bahasa, form → WhatsApp, sticky footer, 360px & 1280px, nol error konsol). Screenshot di `.qa/`.

---

## 1. Batasan Strategis (§6.1) → Realisasi

| Batasan master prompt | Realisasi |
|---|---|
| Satu domain, tanpa subdomain | `aegissoilhealth.com` tunggal; `metadataBase` + canonical + sitemap memakai domain ini |
| Entri multi-sektor lewat **sub-halaman**, bukan scroll-section di home | Home = hero router murni (§3.1); konten per sektor di view masing-masing |
| Dwibahasa: ID default + toggle EN | `LanguageProvider` (`useSyncExternalStore` + `localStorage` key `aegis-lang`, default `id`), hydration-safe; toggle di header semua halaman |
| Mobile-first, LCP < 2 s (3G) | Statis murni, font self-hosted `next/font` (`display: swap`), tanpa JS render-blocking di atas lipatan; tanpa pustaka klien berat selain React |
| SEO-friendly | Metadata layout (OG/Twitter/canonical), `robots.txt`, `sitemap.xml`, JSON-LD Product di /padi (§6) |
| Dipelihara non-developer | Seluruh teks/harga/kontak di `src/content/` (file teks bertipe, bercomment) — lihat §5 |
| Tanpa server backend | 100% statis; form kontak mengomposisi deep-link WhatsApp di sisi klien; tidak ada DB/Prisma yang dipakai (statis-first sesuai §6.1) |

Non-goal yang dijaga (§10 master prompt): tanpa klaim konsumsi manusia, tanpa alur reseller/distributor, tanpa payment gateway, tanpa akun/login, tanpa keranjang e-commerce, tanpa widget live-chat (cuma tautan WhatsApp), tanpa bahasa selain ID+EN, tanpa aset raster.

## 2. Arsitektur Informasi (§6.2) → Realisasi

```
Produksi          Pratinjau (sandbox)      Konten
/            →   #/                Home — hero router
/padi        →   #/padi            Sektor pertanian/padi (terdalam)
/kebun       →   #/kebun           Perkebunan & hortikultura
/ternak      →   #/ternak          Peternakan & perikanan
/tentang     →   #/tentang         Tentang / korporat / sertifikasi
/kontak      →   #/kontak          Kontak (form → WhatsApp)
/blog        →   #/blog            Placeholder artikel
/privacy     →   #/privacy         Kebijakan privasi
/terms       →   #/terms           Syarat & ketentuan
/disclaimer  →   #/disclaimer      Disclaim klaim pertanian
```

- **Lingkungan sandbox hanya mengekspos rute Next.js `/`** → seluruh 10 halaman diimplementasikan sebagai **hash router** di `src/app/page.tsx` (`ROUTE_VIEWS` 1:1 dengan rute produksi; `hashchange` listener menjaga back/forward & deep-link; jangkar dalam halaman `#protokol-A` ditangani; view tak dikenal → NotFoundView + kembali ke beranda).
- **Migrasi produksi** = pindahkan tiap view ke `src/app/<rute>/page.tsx` (file-move, terdokumentasi di README Task 5). `sitemap.xml` & metadata sudah memakai URL produksi, jadi SEO tidak berubah saat migrasi.
- `document.title` dinamis per view + bahasa (`TITLES` map dari `meta.title` tiap halaman).

## 3. Spesifikasi Konten Per Halaman (as-built)

### 3.1 `/` Home — hero router (§6.3)

**Prinsip "router, bukan brosur"**: home hanya mengarahkan pengunjung ke sektor mereka. Tidak ada spesifikasi produk, protokol, testimoni, atau FAQ di home — semuanya di sub-halaman.

Elemen terpasang (berurutan): brand lockup & wordmark BIO7 (hero) · eyebrow "PT Aegis Soil Health mempersembahkan" · tagline "Mikroba untuk Tanah yang Lebih Hidup." + value prop 1 kalimat · pertanyaan router "Untuk lahan atau usaha apa Anda ingin memulai?" · **3 kartu sektor besar** (Padi & Pertanian / Perkebunan & Hortikultura / Peternakan & Perikanan — ikon + pitch 1 baris + CTA) · CTA sekunder "Belum yakin? Konsultasi gratis via WhatsApp" · strip trust ("Terdaftar KEMENTAN RI · Diuji UNPAD · 20+ tahun di pasar") · footer minimal.

### 3.2 `/padi` — halaman terdalam (§6.4, 10 seksi)

| # | Seksi (urutan §6.4) | Implementasi |
|---|---|---|
| 1 | Hero: value prop sektor + 1 CTA WhatsApp | `padi.hero` + `WhatsAppCTA` konteks `padi` |
| 2 | Quick pitch — 3 bullet | `padi.quickPitch` |
| 3 | Kredensial terverifikasi | `CertBadgePair` (KEMENTAN 03.02.2026.156 + UNPAD B-0529/12/2025) + baris keamanan (non-patogenik, E. coli/Salmonella negatif) |
| 4 | Aturan umum (rendam benih, semprot persemaian, kompatibilitas, larangan herbisida 7 hari, larangan Urea 30 HST, masa simpan) | `GENERAL_RULES` (6 kartu; 2 larangan keras ditandai `critical`) |
| 5 | Empat protokol standar sebagai tabel — A (15/22/30 HST), B (40/47 HST), C (malai melengkung), D (ujung malai menguning) | `PROTOCOLS` + `ProtocolTable`: tabel Bahan/Dosis/Fungsi di ≥md, kartu bertumpuk di ponsel; + pupuk dasar, teknik aplikasi, pengelolaan air |
| 6 | Protokol darurat tanah asam / pH jatuh — formula "Sapu Jagat" | `EMERGENCY` (gejala, prosedur 3 langkah, tabel tangki, pupuk dasar, pencegahan pra-tanam) |
| 7 | Hortikultura & tanaman sekunder | `HORTICULTURE` (foliar 7 tutup/16 L per 7–10 hari; kocor 1 tutup/10 L per 15–30 hari) |
| 8 | Bukti lapangan — Karawang 2023 | `SITE.fieldCase`: 12,6 t/ha vs 7,8 baseline (+61,5%), −40% NPK, 1 ha, Haji Karma, Jayakerta + catatan "hasil aktual bergantung…" |
| 9 | Kartu harga | `PricingCard` (Jawa Rp55.000 / luar Jawa Rp65.000 per botol 1 L; catatan HET non-negotiable; model dropship; jalur OEM) |
| 10 | CTA WhatsApp kontekstual + FAQ | `WhatsAppCTA` + `FAQAccordion` 5 item (campur pestisida, urea 30 HST, jaminan hasil?, persemaian, keamanan) |

JSON-LD Product di-render di view ini (§6).

### 3.3 `/kebun` (§6.5, 6 seksi)

Hero · **GuidanceNote** (label kejujuran: konten = petunjuk aplikasi hasil ekstrapolasi, belum ada uji lapangan spesifik) · 4 mekanisme (fiksasi N hayati, pelarutan fosfat, bioremediasi residu, penekanan patogen — *Streptomyces*/*Bacillus* vs *Ganoderma*/*Fusarium*) · petunjuk aplikasi (foliar 7 tutup/16 L per 7–10 hari; kocor 1 tutup/10 L, 1 gelas/tanaman per 15–30 hari + aturan herbisida) · 9 komoditas dengan catatan singkat (sawit, kopi, kakao, durian, mangga, cabai, tomat, kol, bawang) · CTA jujur ("Belum ada uji lapangan spesifik untuk perkebunan — konsultasi gratis untuk dosis yang disesuaikan") · `PricingCard` · FAQ 3 item.

### 3.4 `/ternak` (§6.6, 5 seksi)

Hero · **GuidanceNote** (ekstrapolasi; + penegasan "BIO7 tidak dipasarkan untuk konsumsi manusia") · 3 aplikasi (air minum probiotik, fermentasi pakan, sanitasi kandang) · dosis per jenis ternak (broiler/layer 1–2 tutup/L air minum 3–5 hari/bulan; ruminan 5–10 tutup/ekor/hari; akuakultur 1 tutup/100 m³ per minggu) + catatan dosis ternak ≠ dosis tanaman · CTA konsultasi · `PricingCard` dengan callout perbedaan dosis · FAQ 3 item (termasuk "tidak menggantikan vaksin/obat — arahan dokter hewan").

### 3.5 `/tentang` (§6.7)

Misi (membebaskan tanah dari toksisitas kimia) · keunggulan konsorsium vs galur tunggal · sertifikasi & legalitas (KEMENTAN + UNPAD + non-patogenik + masa simpan Juli 2032) · sejarah 20+ tahun (produsen PT Biotek Agro Nusantara, Bandung) · blok "satu orang, satu kanal" (Aris) · seksi OEM/white-label + CTA.

### 3.6 `/kontak` (§6.8)

Kanal: WhatsApp (utama, tombol wa.me) · email `email@aegissoilhealth.com` · marketplace (Shopee/Tokopedia/Lazada, cari "BIO7 Aegis Soil Health") · jam operasional Senin–Sabtu 07.30–17.30 WIB · **formulir (Nama, Nomor WhatsApp, Lokasi, Sektor, Pesan)** → mengomposisi pesan terformat dan membuka **deep-link WhatsApp terisi** (`window.open` ke `wa.me/6285221212223?text=…`) — 100% sisi klien, tanpa backend; validasi 3 field wajib + pratinjau pesan.

### 3.7 `/blog` (§6.9)

Placeholder: hero + daftar topik yang akan hadir (7 topik awal) + status "belum ada artikel terbit" — struktur siap untuk artikel SEO (rencana 20 topik di `03-marketing-strategy.md` §4).

### 3.8 `/privacy`, `/terms`, `/disclaimer` (§6.10)

Satu `LegalView` dengan `kind` privacy/terms/disclaimer; masing-masing 1 paragraf kerangka topik (privasi: data form & chat WA, pembagian ke produsen-dropship & logistik, retensi, hak hapus; terms: HET non-negotiable, dropship per pesanan, jalur khusus OEM/ekspor, retur barang rusak kirim; disclaimer: Karawang = dokumentasi spesifik bukan jaminan, kebun/ternak = ekstrapolasi, bukan pestisida/pengganti dokter hewan, bukan konsumsi manusia) + catatan "finalisasi bersama konsultan hukum".

### 3.9 Header & Footer (§6.11, §6.12)

- **Header**: logo kiri · toggle bahasa ID/EN kanan · tombol WhatsApp persisten kanan (teks disembunyikan < 640px, tetap ada `sr-only` + `aria-label` dengan nomor). **Tidak ada menu sektor** — sesuai §6.11: pengunjung harus merasa "ini halaman untuk saya", bukan "ini situs multi-sektor". Navigasi lintas sektor hanya lewat footer (halus).
- **Footer**: strip sertifikasi (KEMENTAN + UNPAD + masa simpan) · kontak (WA/email/jam) · marketplace · tautan lintas sektor halus ("Aplikasi BIO7 untuk sektor lain: Perkebunan · Peternakan") · hak cipta + tautan disclaim. Inversi logo (AegisMark putih di atas hijau primer).

## 4. Inventaris Komponen (as-built)

Semua di `src/components/site/` (shadcn/ui dasar di `src/components/ui/`).

| Komponen | File | Peran / props penting |
|---|---|---|
| `LanguageProvider` / `useLanguage` | `language-context.tsx` | State bahasa via `useSyncExternalStore` + `localStorage("aegis-lang")`; aman hydration (tanpa setState-in-effect) |
| `LanguageToggle` | `language-toggle.tsx` | Saklar ID/EN di header, tersimpan antar-kunjungan |
| `Header` | `header.tsx` | Sticky, blur latar; logo → beranda; **tanpa menu sektor (§6.11)**; tombol WA persisten |
| `Footer` | `footer.tsx` | Strip sertifikasi, marketplace, kontak, lintas sektor halus, legal |
| `AegisMark` / `BrandLockup` / `Bio7Wordmark` / `WhatsAppIcon` | `logo.tsx` | Logo vektor (perisai-biji, 7 berakar); varian `inverted` untuk footer |
| `WhatsAppCTA` | `whatsapp-cta.tsx` | Tombol wa.me dengan **pesan terisi per konteks**; varian `solid/outline/soft`, ukuran `sm/md/lg`, target ≥44px (`h-11`–`h-14`), `aria-label` |
| `PricingCard` | `pricing-card.tsx` | HET Jawa/luar Jawa + catatan non-negotiable + dropship; prop `waContext` menentukan pesan WA |
| `CertBadge` / `CertBadgePair` / `CertStrip` | `cert-badge.tsx` | Pasangan KEMENTAN + UNPAD di tiap sub-halaman; strip ringkas untuk footer |
| `ProtocolTable` | `protocol-table.tsx` | Tabel responsif: `≥md` tabel `<table>` semantik (caption sr-only, th scope); `<md` kartu bertumpuk; baris BIO7 disorot `leaf-soft`; kolom dosis monospace terakota |
| `SectorCard` | `sector-card.tsx` | Kartu router home (ikon Wheat/TreePalm/Bird + pitch + CTA) |
| `FAQAccordion` | `faq-accordion.tsx` | Akordeon shadcn per sub-halaman |
| `GuidanceNote` | `guidance-note.tsx` | Label kejujuran untuk konten ekstrapolasi (`role="note"`, latar terra-soft) — memenuhi kriteria penerimaan §12 |
| `Section` / `SectionHeading` | `section.tsx` | Ritme & heading seksi konsisten |
| Views | `views/*.tsx` | `HomeView`, `PadiView`, `KebunView`, `TernakView`, `TentangView`, `KontakView`, `BlogView`, `LegalView` |

**Tabel pesan WhatsApp per konteks** (sumber: `src/content/site.ts` → `WA_MESSAGES.id`):

| Konteks | Pesan terisi (ID, verbatim) | Dipakai di |
|---|---|---|
| `padi` | Halo Aris, saya ingin konsultasi penggunaan BIO7 untuk padi. Bisa dibantu protokol dosis untuk lahan saya? | Hero & CTA /padi, PricingCard padi |
| `kebun` | Halo Aris, saya ingin konsultasi BIO7 untuk kebun/perkebunan. Bisa dibantu petunjuk dosis yang disesuaikan? | /kebun |
| `ternak` | Halo Aris, saya ingin konsultasi BIO7 untuk peternakan (air minum probiotik / fermentasi pakan / sanitasi kandang). Bantu saya tentukan dosis? | /ternak |
| `general` | Halo Aris, saya ingin tahu lebih banyak tentang BIO7 — bisa info produk & harga? | Header (semua halaman), footer, /kontak |
| `consult` | Halo Aris, saya belum yakin BIO7 cocok untuk kebutuhan saya. Boleh konsultasi gratis dulu? | CTA "belum yakin" home & sub-halaman |
| `oem` | Halo Aris, saya tertarik kerja sama OEM/white-label atau skala ekspor BIO7. Bisa dijadwalkan diskusi? | /tentang seksi OEM |

(Versi EN tersedia untuk tiap konteks pada `WA_MESSAGES.en`.)

## 5. Arsitektur Lapisan Konten — cara Aris mengedit

```
src/content/
├── site.ts          ← KONTAK, HARGA, SERTIFIKASI, MARKETPLACE, KASUS KARAWANG,
│                      KOMPOSISI MIKROBA, PESAN WA, RUTE (sumber kebenaran tunggal)
├── protocols.ts     ← SEMUA TABEL DOSIS (aturan umum, Protokol A–D, darurat,
│                      hortikultura) — dwibahasa per sel
├── lang.ts          ← tipe Lang ("id"|"en"), key localStorage, helper pick()
├── index.ts         ← hub ekspor
└── dict/            ← teks naratif per halaman (ID + EN)
    ├── common.ts    (UI global: tagline, nav, label, mekanisme, footer)
    ├── home.ts      (beranda)
    ├── padi.ts      (narasi padi + FAQ)
    ├── kebun.ts     (narasi kebun + FAQ)
    ├── ternak.ts    (narasi ternak + FAQ)
    ├── tentang.ts   (tentang + kontak + blog)
    └── legal.ts     (privacy/terms/disclaimer)
```

- **Alur edit Aris**: buka file → ubah teks di dalam tanda kutip (field `id:` untuk Indonesia, `en:` untuk Inggris) → simpan → deploy. Angka & data di `site.ts`/`protocols.ts` hanya diubah bila data resmi diperbarui. Instruksi langkah demi langkah di README (Task 5).
- **Anti-drift**: setiap teks bertipe `Locale {id, en}` — satu bahasa kurang = error TypeScript; tidak ada teks yang bisa "lupa diterjemahkan".
- Tidak ada CMS eksternal, tidak ada DB — konten = kode bertipe, tapi hanya berupa konstanta string yang bisa diedit tanpa menyentuh logika.

## 6. SEO (as-built)

- **Metadata layout** (`src/app/layout.tsx`): `metadataBase https://aegissoilhealth.com`; title template `%s | Aegis Soil Health`; description ID default; keywords (bioaktivator, pupuk hayati, mikroba tanah, tanah asam, probiotik ternak, pupuk sawit…); `alternates.canonical` + `languages` (`id-ID` `/`, `en-US` `/?lang=en`); robots index/follow + googleBot directives; OG (locale `id_ID`, alternate `en_US`) + Twitter card; `themeColor #1F3D2B`; `<html lang="id">`.
- **Title dinamis per view + bahasa** via `TITLES` map pada hash router (metadata produksi per-rute aktif setelah migrasi file-move).
- **`public/sitemap.xml`**: 10 URL produksi dengan prioritas (/1.0, /padi 0.9, /kebun & /ternak 0.8, /kontak 0.7, /tentang 0.6, /blog 0.5, /disclaimer 0.3, legal 0.2).
- **`public/robots.txt`**: allow all + sitemap `https://aegissoilhealth.com/sitemap.xml`.
- **ID diindeks default**; EN via toggle render (pilihan disengaja — paling sederhana sesuai §6.14; alternates memetakan `en-US` ke `/?lang=en`).
- **schema.org Product di /padi** (render aktual di `PadiView`):
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "BIO7 — Bioaktivator Mikroba Multiguna",
  "description": "Bioaktivator & bioremediasi tanah multi-mikroba. Konsorsium mikroba hidup ultra-padat: penambat nitrogen, pelarut fosfat, Streptomyces. Terdaftar KEMENTAN RI 03.02.2026.156.",
  "brand": { "@type": "Brand", "name": "Aegis Soil Health" },
  "manufacturer": { "@type": "Organization", "name": "PT Biotek Agro Nusantara" },
  "category": "Agricultural Product > Soil Bioactivator",
  "offers": [
    {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "55000",
      "availability": "https://schema.org/InStock",
      "url": "https://aegissoilhealth.com/padi",
      "eligibleRegion": "ID-JK"
    },
    {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "65000",
      "availability": "https://schema.org/InStock",
      "url": "https://aegissoilhealth.com/padi",
      "eligibleRegion": "ID"
    }
  ]
}
```

## 7. Aksesibilitas (as-built)

- Kontras palet dicek terhadap WCAG 2.1 AA (detail rasio di `01-corporate-identity.md` §3.3; tombol WA: teks tebal ≥16px + ikon + label — lihat catatan di CI).
- HTML semantik: `<header>`/`<main>`/`<footer>`/`<nav>`/`<table>` dengan `<caption>` sr-only dan `scope` pada th; `role="note"` untuk GuidanceNote.
- **Skip link** ke konten utama (`#main-content`, muncul saat fokus keyboard) di `page.tsx`.
- Ring focus-visible kustom (globals.css) untuk navigasi keyboard; accordion/button dari shadcn/ui sudah keyboard-navigable.
- Target ketuk ≥44px: tombol WA `h-11`–`h-14`; toggle bahasa & CTA memenuhi.
- `aria-label` pada tautan ikon (logo ke beranda, tombol WA + nomor, ikon dekoratif `aria-hidden`).

## 8. Performa (as-built)

- Rendering statis (tanpa data runtime); font self-hosted lewat `next/font` (Fraunces, Plus Jakarta Sans, Geist Mono — `display: swap`, subset latin).
- Tidak ada JS render-blocking di atas lipatan: router hash inline ringan; tanpa pustaka animasi/berat; Toaster shadcn dimuat hanya komponen UI.
- Gambar minim (placeholder CSS gradient + ikon, bukan foto raster) → LCP dipegang teks/Hero; foto lapangan mendatang memakai lazy-load.
- Target < 2 s LCP pada 3G dimungkinkan oleh profil ini; Lighthouse ≥90 diverifikasi **setelah deploy produksi** (aksi lanjut Task 5 — build statis tidak bisa diukur akurat dari sandbox dev).

## 9. Matriks Uji & Pemetaan Kriteria Penerimaan (§12)

| Kriteria §12 | Status | Cara dipenuhi / diverifikasi |
|---|---|---|
| Render benar di 360/414/768/1280 px | ✅ | E2E agent-browser pada 360 & 1280 + layout fluid (breakpoint sm/md) menutup 414/768; VLM QA visual "no significant defects" |
| Toggle dwibahasa di semua halaman tanpa merusak navigasi | ✅ | `LanguageProvider` + `localStorage`; E2E: toggle, ganti rute, persist (`aegis-lang`) |
| CTA WhatsApp di semua halaman, pesan terisi sesuai konteks | ✅ | `WhatsAppCTA` + tabel konteks §4; E2E intersep `window.open` memverifikasi URL wa.me + teks |
| Badge KEMENTAN + UNPAD di semua sub-halaman | ✅ | `CertBadgePair`/`CertStrip` di tiap view + footer |
| Harga (Jawa/luar Jawa) di semua halaman sektor | ✅ | `PricingCard` di /padi, /kebun, /ternak |
| 4 protokol padi sebagai tabel yang mudah dipindai | ✅ | `ProtocolTable` (md: tabel; mobile: kartu) — E2E: 4 protokol + darurat render |
| Seluruh konten §3 master prompt setia dalam Bahasa Indonesia | ✅ | `protocols.ts` dwibahasa (aturan umum 6, A–D lengkap termasuk pupuk dasar/teknik/air, darurat Sapu Jagat, hortikultura) |
| /kebun & /ternak menandai konten ekstrapolasi ("petunjuk aplikasi — belum ada uji lapangan spesifik") | ✅ | `GuidanceNote` + seksi `honest` di kedua view — E2E diverifikasi |
| Deploy Cloudflare Pages dengan satu perintah | ⏳ Task 5 | Statis; README (Task 5) memuat perintah deploy & migrasi rute |
| Aris bisa mengedit semua teks lewat alur konten terdokumentasi | ✅ | Lapisan `src/content/` (§5) + langkah README |
| LCP < 2 s pada 3G mobile | ⏳ pasca-deploy | Profil §8 (statis, font swap, tanpa JS blocking) |
| Lighthouse mobile ≥90 (4 kategori) | ⏳ pasca-deploy | Diverifikasi setelah deploy produksi |

**Pengujian manual yang dijalankan (log)**: lint 0/0; navigasi hash ke 10 rute; jangkar `#protokol-A`; toggle EN + persist; form kontak → pesan WhatsApp terformat benar; sticky footer pada halaman panjang; 360px & 1280px; nol error konsol/halaman; QA visual VLM (home mobile, padi desktop 9/10).

---

*Dokumen ini adalah Deliverable B dari master prompt, versi as-built. Perubahan konten tidak mengubah dokumen ini — hanya `src/content/`.*
