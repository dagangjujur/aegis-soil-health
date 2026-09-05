# Aegis Soil Health × BIO7 — Panduan Website

Panduan maintainer untuk **Aris Setiadi** (satu orang, non-teknis). Situs ini dibangun dengan Next.js + Tailwind + shadcn/ui, target deploy statis ke **Cloudflare Pages** di domain `aegissoilhealth.com`.

> Prinsip utama: **semua teks situs hidup di folder `src/content/`** — Anda TIDAK pernah menyentuh kode komponen untuk mengubah konten.

---

## Daftar Isi

1. [Struktur Proyek](#1-struktur-proyek)
2. [Menjalankan Secara Lokal](#2-menjalankan-secara-lokal)
3. [**Mengubah Konten Tanpa Menyentuh Kode** (paling penting)](#3-mengubah-konten-tanpa-menyentuh-kode-paling-penting)
4. [Mengubah Nomor WhatsApp, Email, Harga](#4-mengubah-nomor-whatsapp-email-harga)
5. [Menambah Artikel Blog](#5-menambah-artikel-blog)
6. [Menambah Bahasa Baru](#6-menambah-bahasa-baru)
7. [Deploy ke Cloudflare Pages](#7-deploy-ke-cloudflare-pages)
8. [Migrasi Produksi (hash route → rute nyata)](#8-migrasi-produksi-hash-route--rute-nyata)
9. [Pemecahan Masalah](#9-pemecahan-masalah)

---

## 1. Struktur Proyek

```
/
├── README.md                  ← file ini
├── PRD.md                     ← dokumen kebutuhan produk (rencana)
├── docs/
│   ├── 01-corporate-identity.md      ← Deliverable A: panduan identitas brand
│   ├── 02-website-spec.md            ← Deliverable B: spesifikasi situs as-built
│   ├── 03-marketing-strategy.md      ← Deliverable C: rencana pemasaran 90 hari
│   └── 04-content-bahasa-indonesia.md← bank teks siap-tempel semua halaman
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← judul & metadata SEO situs (JANGAN sering diubah)
│   │   ├── page.tsx           ← router halaman (JANGAN disentuh)
│   │   └── globals.css        ← warna brand (JANGAN disentuh)
│   ├── content/               ← ★ SUMBER KEBENARAN TUNGGAL — EDIT DI SINI ★
│   │   ├── site.ts            ← kontak, harga, sertifikasi, marketplace
│   │   ├── protocols.ts       ← tabel dosis protokol padi (A–D, darurat)
│   │   ├── lang.ts            ← pengaturan bahasa (jarang diubah)
│   │   └── dict/              ← teks naratif per halaman (ID + EN)
│   │       ├── common.ts      ← header, footer, label umum
│   │       ├── home.ts        ← beranda
│   │       ├── padi.ts        ← padi (narasi; tabel ada di protocols.ts)
│   │       ├── kebun.ts       ← perkebunan & hortikultura
│   │       ├── ternak.ts      ← peternakan & perikanan
│   │       ├── tentang.ts     ← tentang + kontak + blog
│   │       └── legal.ts       ← privacy / terms / disclaimer
│   └── components/
│       ├── site/              ← komponen situs (JANGAN disentuh)
│       └── ui/                ← komponen dasar shadcn/ui (JANGAN disentuh)
├── public/
│   ├── robots.txt             ← arahan mesin pencari
│   └── sitemap.xml            ← daftar halaman untuk Google
└── worklog.md                 ← catatan kerja tim pembangun
```

**Aturan keemasan:** jika file ada di `src/content/`, silakan edit. Jika di luar situ, jangan — kecuali mengikuti panduan di bawah.

---

## 2. Menjalankan Secara Lokal

Prasyarat sekali saja: instal [Bun](https://bun.sh) (`curl -fsSL https://bun.sh/install | bash`) lalu buka terminal di folder proyek.

```bash
bun install        # sekali saja — pasang dependensi
bun run dev        # jalankan situs → buka http://localhost:3000
```

Tekan `Ctrl + C` untuk berhenti. Setiap perubahan teks yang Anda simpan otomatis tampil di browser (hot reload).

---

## 3. Mengubah Konten Tanpa Menyentuh Kode (paling penting)

Semua teks situs tersimpan sebagai **string di dalam tanda kutip**, berformat `{ id: "…", en: "…" }` — `id` = Bahasa Indonesia, `en` = English. Ubah teks di antara tanda kutip, **jangan hapus tanda kutip, koma, atau kurung kurawal**.

### Contoh: mengubah pitch sektor padi di beranda

Buka `src/content/dict/home.ts`, cari bagian `sectors`, ubah teks:

```ts
title: { id: "Padi & Pertanian", en: "Rice & Agriculture" },
pitch: {
  id: "Protokol lengkap teruji lapangan — dari anakan super hingga penggemukan bulir. Kasus Karawang: 12,6 ton/ha.",
  en: "Field-tested full protocols — from super tillers to grain filling. Karawang case: 12.6 t/ha.",
},
```

→ ganti kalimat `id:` untuk Bahasa Indonesia, `en:` untuk English. Simpan file. Selesai.

### Peta file per halaman

| Ingin mengubah… | Buka file |
|---|---|
| Beranda (hero, pitch 3 sektor) | `src/content/dict/home.ts` |
| Narasi halaman padi (judul hero, FAQ) | `src/content/dict/padi.ts` |
| **Tabel dosis padi** (protokol A–D, darurat) | `src/content/protocols.ts` |
| Halaman kebun (narasi, komoditas) | `src/content/dict/kebun.ts` |
| Halaman ternak (narasi, dosis ternak) | `src/content/dict/ternak.ts` |
| Tentang / Kontak / Blog | `src/content/dict/tentang.ts` |
| Privacy / Terms / Disclaimer | `src/content/dict/legal.ts` |
| Header, footer, label tombol | `src/content/dict/common.ts` |

### Aturan penulisan (agar konsisten dengan identitas brand)

- Tanpa tanda seru pada teks teknis — penekanan hanya untuk CTA.
- Nama latin mikroba tetap italic (`*Streptomyces*` sp. — di teks situs cukup tulis *Streptomyces* sp.).
- Istilah petani dipertahankan: HST, kresek, klowor, sundep, ambles, walang sangit.
- Format angka Indonesia: `12,6 ton`, `Rp55.000`.
- Dua larangan kbrand jangan dilanggar: konten kebun/ternak wajib mempertahankan label *"petunjuk aplikasi — belum ada uji lapangan spesifik"*; dilarang menjanjikan hasil ("dijamin", "pasti").

### Checklist setelah mengedit

1. Simpan file → cek browser (jangan ada layar merah/error).
2. Jalankan `bun run lint` di terminal — harus "0 problems".
3. Buka halaman yang diubah, coba toggle ID ⇄ EN — kedua bahasa harus wajar.

---

## 4. Mengubah Nomor WhatsApp, Email, Harga

**Satu file saja: `src/content/site.ts`.** Contoh:

```ts
whatsapp: {
  number: "6285221212223",              // ← nomor WA (format internasional, tanpa +)
  display: "(+62) 852 2121 2223",       // ← tampilan di layar
  url: "https://wa.me/6285221212223",
},
pricing: {
  java: { nominal: 55000, display: "Rp55.000" },       // ← harga Pulau Jawa
  outsideJava: { nominal: 65000, display: "Rp65.000" }, // ← harga luar Jawa
},
```

Semua tombol WhatsApp di seluruh situs otomatis ikut berubah. **Pesan otomatis WhatsApp** (teks yang terisi saat pengunjung klik tombol) ada di bagian `WA_MESSAGES` pada file yang sama — ubah kalimatnya sesuai kebutuhan.

> HATI-HATI: HET ditetapkan produsen. Jika harga berubah, perbarui **kedua** nilai (`nominal` untuk data terstruktur/SEO dan `display` untuk tampilan) agar konsisten.

---

## 5. Menambah Artikel Blog

Situs belum memakai CMS — blog masih halaman kerangka (`#/blog`). Untuk artikel pertama:

1. Tambahkan topik ke daftar di `src/content/dict/tentang.ts` → bagian `blog.topics.items`.
2. Saat siap menulis artikel penuh, minta bantuan AI agent: *"Buat artikel blog sebagai komponen view baru mengikuti pola di `src/components/site/views/blog-view.tsx`, konten dari `src/content/dict/blog.ts`"* — atau deploy ke framework MDX (dokumen `docs/03-marketing-strategy.md` memuat 20 topik siap tulis).

---

## 6. Menambah Bahasa Baru

Saat ini: `id` (default) + `en`. Menambah bahasa ketiga (mis. `ms`):

1. `src/content/lang.ts` → tambah `"ms"` ke `type Lang` dan perbarui `DEFAULT_LANG` bila perlu.
2. Tambahkan teks `ms:` di setiap objek `{ id, en }` pada semua file `src/content/dict/` dan `site.ts`.
3. `src/components/site/language-toggle.tsx` → tambah opsi tombol baru di `OPTIONS`.

Karena TypeScript ketat, file yang belum diterjemahkan akan menampilkan error saat `bun run dev` — memandu Anda bagian mana yang belum selesai.

---

## 7. Deploy ke Cloudflare Pages

**Cara termudah (via dashboard, tanpa terminal):**

1. Push folder proyek ini ke repositori GitHub (minta bantuan AI agent bila belum pernah — `git init`, `git add .`, `git commit`, lalu hubungkan ke GitHub).
2. Buka [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** → pilih repositori.
3. Pengaturan build:
   - **Framework preset:** `Next.js` (Static)
   - **Build command:** `npx @cloudflare/next-on-pages@1`
   - **Build output directory:** `.vercel/output/static`
   - **Node version** (Environment variables): `NODE_VERSION = 20`
4. **Save and Deploy**. Domain `aegissoilhealth.com` sudah ada di akun Cloudflare Anda → Pages → **Custom domains** → hubungkan.
5. Setiap `git push` ke branch utama otomatis mem-publish versi baru. **Untuk mengubah konten: edit file di `src/content/`, commit, push — situs langsung diperbarui.**

**Pratinjau sebelum publish:** setiap pull request otomatis mendapat URL preview terpisah.

---

## 8. Migrasi Produksi (hash route → rute nyata)

Situs ini dikembangkan di lingkungan pratinjau yang hanya mengekspos satu route. Seluruh 10 halaman dipetakan via **hash router**:

| Pratinjau | Produksi (Cloudflare Pages) |
|---|---|
| `/#/` | `/` |
| `/#/padi` | `/padi` |
| `/#/kebun` | `/kebun` |
| `/#/ternak` | `/ternak` |
| `/#/tentang` | `/tentang` |
| `/#/kontak` | `/kontak` |
| `/#/blog` | `/blog` |
| `/#/privacy` `/terms` `/disclaimer` | `/privacy` `/terms` `/disclaimer` |

Migrasi (saat pindah ke deploy produksi): pindahkan tiap view dari `src/components/site/views/*-view.tsx` ke `src/app/<rute>/page.tsx` sebagai komponen klien, ganti tautan `#/padi` → `/padi`, hapus router di `src/app/page.tsx`. Semua komponen, konten, dan style dipakai ulang tanpa perubahan. `sitemap.xml` dan metadata sudah ditulis mengarah ke rute produksi.

---

## 9. Pemecahan Masalah

| Gejala | Sebab & solusi |
|---|---|
| Layar merah / error setelah edit | Tanda kutip/koma terhapus di file konten. Kembalikan (`git checkout -- src/content/nama-file.ts` di terminal) lalu ulangi lebih hati-hati. |
| `bun run lint` menampilkan error | Baca baris error — biasanya menunjuk file & baris. Perbaiki tanda kutip/kurung. |
| Teks berubah tapi tidak tampil | Hard-refresh browser (`Ctrl+Shift+R`) atau restart `bun run dev`. |
| Toggle bahasa "kembali ke ID" sendiri | Pilihan bahasa disimpan per-browser (`localStorage`). Hapus cache situs atau buka mode incognito. |
| Tombol WhatsApp membuka chat kosong | Pesan otomatis tidak terisi — pastikan `waLink()` dipakai (jangan mengganti href tombol dengan link manual tanpa `?text=`). |

---

## Rujukan Cepat

- **Identitas brand (warna, font, tone of voice):** `docs/01-corporate-identity.md`
- **Spesifikasi halaman & komponen:** `docs/02-website-spec.md`
- **Rencana pemasaran 90 hari:** `docs/03-marketing-strategy.md`
- **Bank teks siap-tempel (WA, marketplace, dst.):** `docs/04-content-bahasa-indonesia.md`
- **Rencana produk & keputusan arsitektur:** `PRD.md`
