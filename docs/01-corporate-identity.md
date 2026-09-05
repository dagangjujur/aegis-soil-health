# 01 — Panduan Identitas Korporat
## PT Aegis Soil Health × BIO7

**Deliverable A** (Master Prompt §5). Ditulis agar bisa dieksekusi sendiri oleh Aris Setiadi — satu orang, non-desainer, tanpa agensi. Prinsip: setiap aturan di dokumen ini harus bisa dipatuhi hanya dengan "salin nilai dari tabel, jangan berimprovisasi".

Dokumen pendamping: `02-website-spec.md` (spesifikasi situs as-built), `03-marketing-strategy.md` (rencana 90 hari), `04-content-bahasa-indonesia.md` (bank teks siap-tempel).

---

## Daftar Isi
1. Arsitektur Merek
2. Sistem Logo
3. Palet Warna
4. Tipografi
5. Tone of Voice
6. Fotografi & Gaya Visual
7. Checklist Aplikasi (website, WhatsApp Business, marketplace, media sosial, email, cetak)

---

## 1. Arsitektur Merek

```
PT AEGIS SOIL HEALTH              ← merek korporat (endoser)
        │
        ├── BIO7                   ← merek produk unggulan (masterbrand produk)
        │     "Bioaktivator Mikroba Multiguna"
        └── [produk masa depan]    ← belum dirancang — jangan didesain sekarang
```

| Tingkat | Nama | Peran | Kapan dipakai |
|---|---|---|---|
| Korporat | PT Aegis Soil Health | Perusahaan, legalitas, kredibilitas | Dokumen resmi, footer, konten tentang, penawaran B2B/OEM |
| Produk | BIO7 | Produk yang dibeli petani/peternak | Semua materi jualan, marketplace, lapangan |
| Masa depan | — | Kosong dengan sengaja | Produk baru menyusul pola endorser: nama produk sendiri + endosemen "PT Aegis Soil Health" |

**Aturan main:**
- **Selalu tulis "BIO7"** — satu kata, huruf kapital semua. Bukan "Bio7", bukan "BIO 7" (ada spasi), dan **jangan pernah lagi "Bio7 Padi"** — nama lama itu membatasi produk ke sektor padi dan bertentangan dengan strategi multi-sektor (Master Prompt §1.2).
- Endorsemen mengikuti pola: **PT Aegis Soil Health mempersembahkan BIO7** (formal) atau **BIO7 — dari PT Aegis Soil Health** (ringkas).
- Perusahaan dan produsen adalah dua badan berbeda: PT Aegis Soil Health = pemasar eksklusif; **produsen = PT Biotek Agro Nusantara, Bandung** (20+ tahun beredar di pasar). Jangan tertukar dalam teks legal maupun percakapan.
- Nama domain, email, dan kanal tunggal: `aegissoilhealth.com`, email catch-all `@aegissoilhealth.com`, WhatsApp **(+62) 852 2121 2223**.

---

## 2. Sistem Logo

### 2.1 Konsep — "AegisMark" (perisai-biji)

Logo yang diimplementasikan di situs (`src/components/site/logo.tsx`, murni vektor/SVG, tanpa aset raster):

- **Perisai** = *aegis* (bahasa Yunani: perisai pelindung) → perlindungan: tanah dilindungi dari residu kimia dan patogen. Ini akar kata nama perusahaan, jadi simbolnya menjelaskan namanya sendiri.
- **Tunas di dalam perisai** = pertumbuhan — perlindungan yang menumbuhkan, bukan sekadar mengamankan. Daun kiri berwarna hijau daun (leaf), daun kanan terakota (terra) — dua warna ini adalah dua pillar brand: botani dan tanah.
- **3 titik mikroba** berbentuk lengkung di bawah tunas = konsorsium mikroba multi-galur (inti produk: 6 kelompok mikroba dilambangkan 3 titik agar tetap terbaca pada ukuran kecil). Titik berada **di bawah garis tanah** — mikrobiologi bekerja di bawah permukaan.
- **Wordmark BIO7**: huruf "BIO" hijau botani dalam; angka **"7" terakota** dengan **goresan akar/miselium menurun** di bawahnya — menghubungkan nama produk dengan biologi bawah tanah. "7 yang berakar".
- **"AEGIS SOIL HEALTH"** dalam kapital dengan *tracking* lebar (±0,22em) di bawah wordmark — register formal, seperti kop jurnal.

**Mengapa arah ini dipilih (dan bukan yang lain):**
- Sains kredibel + kehangatan lokal Indonesia, **bukan** korporat generik (geometri dingin, biru-abu, tanpa cerita) dan **bukan** "hijau organik generik" (daun + lingkaran + hijau terang yang identik dengan ribuan label "eco"). Perisai-biji bersifat *semantik* — tiap elemen menjelaskan klaim produk, bukan dekorasi.
- Perisai juga adalah simbol registrasi & kepatuhan (Kementan, CoA) — cocok untuk brand yang posisinya "terdaftar, teruji, terdokumentasi".

### 2.2 Varian

| Varian | Komposisi | Latar | Pemakaian |
|---|---|---|---|
| **Lockup utama** | AegisMark + "Aegis Soil Health" (Fraunces semibold) di atas baris "BIO7 · BIOAKTIVATOR MIKROBA" (10–12px kapital, tracking 0,22em, terakota) | Kertas hangat / putih | Header situs, kop proposal, brosur |
| **Wordmark hero** | "BIO7" besar dengan 7 berakar | Kertas hangat | Hero halaman, sampul video, banner |
| **Simbol saja (AegisMark)** | Perisai-biji tanpa teks | Bebas | Favicon, foto profil WhatsApp Business & media sosial, watermark marketplace, ikon aplikasi |
| **Inversi** | Lockup/simbol dengan garis & isian warna kertas (paper) di atas hijau primer | Hijau primer #1F3D2B | Footer situs, akhir video, kemasan gelap |
| **Monokrom** | Simbol/lockup satu warna (hijau primer ATAU tinta hitam) | Kertas | Faksimile, cap, cetak 1 warna, dokumen B/W |

Varian inversi **hanya** di atas hijau primer; varian standar **tidak boleh** diletakkan di atas hijau primer (kontras daun/terakota hilang).

### 2.3 Ruang kosong (clear space)

- Ruang kosong minimum = **tinggi AegisMark (H) di keempat sisi**, dengan H = tinggi perisai. Tidak ada elemen lain (teks, tepi halaman, foto, logo lain) yang masuk zona ini.
- Antar logo dan teks pendamping di lockup: jarak setara 0,4H (implementasi: gap 2,5 pada mark 36px).
- Di marketplace/medsos, jangan biarkan UI platform memotong ruang kosong — beri padding saat mengekspor PNG.

### 2.4 Ukuran minimum

| Media | Simbol saja | Lockup penuh |
|---|---|---|
| Digital | **24 × 24 px** (32 px disarankan; di bawah itu 3 titik mikroba menyatu) | **96 px lebar** (140 px disarankan — baris "BIOAKTIVATOR MIKROBA" mulai terbaca) |
| Cetak | 8 mm | 25 mm |

### 2.5 Larangan (don'ts)

1. **Jangan meregangkan/memipihkan** logo — rasio aspek terkunci. Ubah ukuran secara proporsional saja.
2. **Jangan mewarnai ulang** di luar palet §3 — terutama dilarang gradien, warna neon, atau versi "perak/emas" (menggeser brand ke klaim mewah yang tidak didukung data).
3. **Jangan memberi bayangan jatuh (drop shadow), emboss, outline, atau glow.** Brand ini tenang dan berbasis bukti.
4. **Jangan menaruh logo di atas foto ramai tanpa pelat/scrim** — jika di atas foto lapangan, sediakan pelat warna kertas/hijau primer solid (opasitas ≥ 85%) sebagai dasar logo.
5. **Jangan memutar/miringkan** logo atau wordmark.
6. **Jangan memakai nama lama "Bio7 Padi"** dalam bentuk apa pun — termasuk caption foto, judul video, dan nama akun.
7. **Jangan memisahkan "7" dari "BIO"** (menulis "BIO 7") dan jangan menghilangkan goresan akar pada 7 versi wordmark.
8. **Jangan menumpuk lockup dalam bingkai/lingkaran/shape tambahan** — logo sudah lengkap bentuknya.
9. **Jangan memakai varian inversi di latar terang, atau varian standar di latar hijau primer.**

---

## 3. Palet Warna

Sumber kebenaran teknis: `src/app/globals.css` (token CSS, nilai oklch). Nilai hex bertanda ≈ adalah konversi pendekatan untuk kerja non-web; **oklch/hex eksak yang tercantum tanpa ≈ adalah acuan final.**

### 3.1 Token utama

| Token | Hex | Oklch | Peran semantik |
|---|---|---|---|
| `--primary` (hijani botani dalam) | **#1F3D2B** | oklch(0.306 0.045 152) | Warna tanda tangan. Heading, latar header/footer, tombol primer, isian perisai |
| `--terra` (terakota laterit) | **#C2410C** | oklch(0.555 0.175 42) | Aksen. Angka dosis, eyebrow/label kecil, angka "7", highlight penting, CTA non-WhatsApp |
| `--wa` (hijau WhatsApp) | **#1DA851** | — (#1DA851) | **Khusus tombol WhatsApp** — pengenalan platform, jangan dipakai untuk tujuan lain |
| `--wa-dark` | #168A41 | — | Hover state tombol WA |
| `--leaf` (daun muda) | ≈ #1F7A3E | oklch(0.52 0.13 150) | Data positif (angka hasil, "Terverifikasi"), daun kiri AegisMark, baris BIO7 di tabel |
| `--leaf-soft` | ≈ #DCEFE2 | oklch(0.94 0.04 150) | Latar sorot baris tabel BIO7, chip sukses |
| `--soil` (tanah gelap) | ≈ #453B2E | oklch(0.26 0.03 60) | Netral gelap alternatif (grafik, blok dalam) — bukan untuk teks panjang |
| `--background` (kertas hangat) | **#FAF7F0** | oklch(0.982 0.009 92) | Latar halaman — bukan putih murni; kesan buku catatan lapangan |
| `--paper-deep` | ≈ #F0EBE0 | oklch(0.955 0.015 95) | Kepala tabel, blok inset, footer kartu harga |
| `--foreground` (teks isi) | ≈ #292421 | oklch(0.235 0.015 75) | Teks isi — hitam kehangatan, bukan #000 |
| `--muted-foreground` | ≈ #6E685F | oklch(0.505 0.025 85) | Teks sekunder, keterangan |
| `--terra-soft` | ≈ #F4E5D6 | oklch(0.945 0.03 55) | Latar GuidanceNote (label kejujuran) |
| `--card` | #FFFFFF | oklch(1 0 0) | Kartu, badan tabel — kontras membaca maksimal |

### 3.2 Aturan semantik pemakaian

- **Hijau primer = otoritas.** Dipakai untuk elemen struktural (header, footer, judul, tombol utama). Jangan dipakai sebagai warna teks isi panjang di latar gelap selain teks putih/kertas.
- **Terakota = penekanan data & aksi sekunder.** Angka dosis di tabel **selalu** terakota + monospace — petani memindai angka lebih cepat daripada membaca kalimat. Jangan dipakai untuk teks panjang (maksimal beberapa kata).
- **Hijau WhatsApp hanya untuk WhatsApp.** Menghijaukan elemen non-WA dengan #1DA851 merusak asosiasi "hijau ini = chat Aris". CTA non-WA memakai hijau primer atau terakota.
- **Kertas hangat untuk latar, putih untuk kartu.** Jangan dibalik — latar putih penuh membuat situs tampak "SaaS korporat", kartu kertas membuat tabel susah dibaca.
- **Leaf = kabar baik** (hasil panen, badge "Terverifikasi"); **terra-soft = kehati-hatian** (GuidanceNote "belum ada uji lapangan spesifik"). Dua asosiasi ini konsisten di seluruh situs dan materi pemasaran.

### 3.3 Catatan aksesibilitas (WCAG 2.1)

Kombinasi dihitung pendekatan dari nilai hex:

| Kombinasi | Rasio kontras | Status | Catatan |
|---|---|---|---|
| #1F3D2B di atas #FAF7F0 | ≈ 10,9 : 1 | **AAA** | Kombinasi utama teks judul/isi |
| ≈ #292421 (foreground) di atas #FAF7F0 | ≈ 14,5 : 1 | **AAA** | Teks isi |
| ≈ #6E685F (muted) di atas #FAF7F0 | ≈ 4,9 : 1 | AA | Teks sekunder ≥ 13px — jangan lebih kecil |
| #C2410C di atas #FAF7F0 | ≈ 4,9 : 1 | **AA** | Lolos teks normal; gunakan tebal ≥ 14px untuk kenyamanan baca |
| #C2410C di atas #FFFFFF (kartu) | ≈ 5,2 : 1 | AA | Angka dosis di tabel — selalu semibold |
| #FAF7F0 di atas #1F3D2B | ≈ 10,9 : 1 | AAA | Footer, tombol primer |
| Putih di atas #1DA851 (tombol WA) | ≈ 2,4 : 1 | **Tidak lolos AA untuk teks** | Diterima **hanya** sebagai tombol grafis besar: teks tebal ≥ 16px + ikon WhatsApp + label teks berdampingan (pengenalan bentuk menggantikan kontras). Jangan pernah memakai #1DA851 sebagai warna teks di latar terang, dan jangan memakai hijau WA untuk teks isi. |

Aturan praktis untuk materi non-web (marketplace, video, cetak): **teks panjang selalu foreground di atas kertas/putih; aksen terakota hanya untuk angka/label tebal; jangan taruh teks putih di atas terakota muda atau leaf-soft.**

---

## 4. Tipografi

### 4.1 Pilihan huruf

| Peran | Typeface | Sumber | Mengapa |
|---|---|---|---|
| **Display/judul** | **Fraunces** | Google Fonts, dimuat via `next/font` (self-hosted, `display: swap`) | Serif display hangat dengan sumbu optik "old-style" — membaca seperti jurnal ilmiah dan buku agronomi, bukan seperti startup. Kredibilitas sains **dengan** kehangatan |
| **Teks isi** | **Plus Jakarta Sans** | Google Fonts (typeface buatan foundry **Tokotype, Bandung**) | Sans modern yang jernih untuk membaca dosis & protokol; sejarah foundry-nya (huruf pertama buatan Indonesia yang masuk Google Fonts) memberi kehangatan lokal yang **autentik** — bukan klaim, tapi fakta keberadaan |
| **Angka tabel/monospace** | Geist Mono | via `next/font` | Angka dosis, nomor sertifikat, CFU — kolom rapi sejajar, mudah dipindai |

Kombinasi ini disengaja menghindari dua kutub: Inter/Roboto ("korporat generik mana pun") dan Playfair Display ("butik organik premium"). Fraunces + Plus Jakarta Sans = **jurnal + catatan lapangan**.

### 4.2 Skala & aturan

| Elemen | Font | Ukuran | Line-height | Letter-spacing | Ketebalan |
|---|---|---|---|---|---|
| H1 (hero) | Fraunces | 36–56 px | 1,15 | −1% (−0.01em) | 600–700 |
| H2 (judul seksi) | Fraunces | 24–30 px | 1,25 | −1% | 600 |
| H3 | Fraunces | 18–20 px | 1,35 | normal | 600 |
| Body | Plus Jakarta Sans | 16–18 px | 1,65 | normal | 400 |
| Teks kecil/keterangan | Plus Jakarta Sans | 13–14 px | 1,5 | normal | 400–600 |
| Label kapital (eyebrow, kicker) | Plus Jakarta Sans | 10–12 px | 1,2 | **+18–22%** (0.18–0.22em) | 700 |
| Angka dosis/nomor seri | Geist Mono | 12–14 px | 1,4 | normal | 600 |

Aturan tambahan:
- **Judul jangan pernah ALL CAPS panjang** — kapital lebar hanya untuk label pendek (≤ 4 kata).
- Nama ilmiah selalu *italic Latin*: *Azospirillum* sp., *Pyricularia oryzae*.
- Angka pakai format Indonesia: "12,6 ton", "Rp55.000", "35–50 batang" (tanda minus/en-dash untuk rentang).
- Maksimal lebar teks isi ± 70 karakter per baris (± 65ch) agar protokol dosis tidak melelahkan mata.

---

## 5. Tone of Voice — edukatif-praktis

**Ini elemen CI terpenting.** Logo bisa salah sedikit; suara tidak boleh salah sama sekali.

Suara BIO7 = **agronom senior menjelaskan ke seorang petani di pinggir petakan**: kredibel, berbasis data, manusiawi, langsung ke inti. Petani membeli dari orang yang bisa mereka ajak bicara — bukan dari korporat, bukan dari salesman.

### 5.1 Contoh DO (tiru pola ini)

| # | Kalimat contoh | Pola yang dipakai |
|---|---|---|
| 1 | "Semprot pagi antara 06.00–09.00 — UV siang membunuh bakteri menguntungkan." | Instruksi spesifik + alasan mekanis singkat |
| 2 | "Setelah 30 HST hentikan Urea padat. Ganti dengan Protokol B–D supaya dinding sel tetap tebal dan bulir terisi penuh." | Larangan + solusi pengganti + sebab-akibat |
| 3 | "Kasus Karawang 2023 mencatat 12,6 ton/ha pada lahan 1 hektar. Hasil Anda bisa berbeda tergantung varietas dan cuaca — konsultasi gratis membantu menyusun target realistis." | Data terverifikasi + kejujuran batas data + ajakan |
| 4 | "BIO7 boleh dicampur insektisida dan fungisida kimia. Satu-satunya larangan: herbisida — beri jeda minimum 7 hari." | Boleh/tidak boleh dinyatakan tegas tanpa drama |
| 5 | "Mulai dari 1 tutup per liter air minum, amati kondisi litter dan FCR selama satu siklus, lalu sesuaikan." | Mulai kecil, observasi, baru naikkan — cara peternak sungguhan bekerja |

### 5.2 Contoh DON'T (dan mengapa gagal)

| # | Kalimat anti-contoh | Mengapa gagal |
|---|---|---|
| 1 | "BIO7 adalah solusi terbaik untuk semua kebutuhan pertanian Anda." | Superlatif kosong — sama persis dengan iklan pupuk kimia mana pun; tidak ada satu pun klaim yang bisa diverifikasi; frasa terlarang |
| 2 | "Hasil 12,6 ton/ha terjamin untuk lahan Anda." | Mengubah satu kasus terdokumentasi menjadi **garansi hasil** — frasa terlarang, memicu sengketa saat hasil berbeda, dan merusak data jujur yang justru menjadi kekuatan |
| 3 | "100% aman, tanpa efek samping apa pun." | Klaim absolut yang tidak didukung data — uji keamanan yang dimiliki hanya menegaskan non-patogenik dan E. coli/Salmonella negatif (untuk tanah/tanaman); "100%" mengundang masalah regulasi |
| 4 | "Cukup semprot BIO7, panen Anda akan ajaib melipatgandakan." | Magis tanpa mekanisme, tanpa dosis, tanpa jadwal — bertolak belakang dengan "edukatif-praktis"; kata "ajaib" terlarang |
| 5 | "Konsorsium mikroba revolusioner nomor 1 di Indonesia." | Ranking tanpa sumber + kata terlarang — petani berpengalaman langsung mencap ini sebagai iklan, bukan saran |

### 5.3 Aturan dwibahasa

- **Bahasa Indonesia = default.** Inggris hanya untuk pembaca internasional (toggle EN / materi OEM-ekspor).
- **Suara sama di kedua bahasa** — agronom senior, bukan penerjemahan harfiah. Kalimat Inggris ditulis ulang agar enak dibaca Inggris, bukan diterjemahkan kata per kata.
- **Istilah lapangan Indonesia dipertahankan as-is + gloss ringkas saat perlu**: HST (hari setelah tanam / days after transplanting), kresek (bacterial leaf blight), klowor, ambles (damping-off), sundep, walang sangit (rice stink bug), macak-macak. Di kalimat Inggris: "kresek (bacterial leaf blight)".
- Register: profesional-santun. **Hindari** dua kutub: kaku korporat ("sebagai wujud komitmen kami…") dan terlalu kasar ("gue/lo", singkatan gaul).
- Tanpa seru pada teks teknis. Penekanan hanya pada CTA (dan tetap tidak perlu tanda seru — cukup kata kerja).

### 5.4 Daftar frasa terlarang (tidak boleh muncul di kanal mana pun)

1. "solusi terbaik"
2. "one-stop solution"
3. "terdepan"
4. "nomor 1"
5. "revolusioner"
6. "ajaib"
7. "100% aman"
8. "tanpa efek samping"
9. "garansi hasil"
10. "supreme" / "ultimate" (termasuk "produk supreme", "formula ultimate")

Alasan umum: semuanya klaim yang tidak bisa dibuktikan dengan data yang BIO7 miliki. Kredibilitas brand ini justru dibangun dari kejujuran soal batas data ("belum ada uji lapangan spesifik untuk sektor ini"). Klaim kosong menghapus diferensiasi satu-satunya yang dimiliki.

**Dilarang tambahan (non-goal §10 master prompt): tidak ada klaim konsumsi manusia (oral/topik) dalam bentuk apa pun.** BIO7 hanya untuk tanah, tanaman, dan lingkungan kandang.

---

## 6. Fotografi & Gaya Visual

### 6.1 Hierarki aset visual

| Prioritas | Jenis | Status | Pemakaian |
|---|---|---|---|
| 1 | **Foto lapangan asli** — petakan Karawang (kasus Haji Karma 2023) | Aset jangkar | Hero /padi, materi pemasaran, profil bisnis |
| 2 | **Foto produk bersih** — botol BIO7 1L di latar netral (kertas hangat/putih) | Bisa dibuat sendiri dengan HP + kertas + cahaya jendela | Marketplace, kartu harga |
| 3 | **Placeholder sistem** — gradien CSS hijau-kertas + ikon sektor + label teks | Diimplementasikan di situs untuk sektor tanpa foto | /kebun, /ternak hingga foto asli tersedia |

**Aturan placeholder: TIDAK PERNAH memakai foto palsu.** Selama belum ada foto kebun/ternak asli, tampilkan blok gradien + ikon + label (seperti di situs sekarang). Foto stok "petani tersenyum" dan foto orang hasil AI **dilarang** — satu foto palsu yang ketahuan menghancurkan posisi "terdokumentasi".

### 6.2 Grading & komposisi

- Tone warna: **hijau redup, cokelat tanah, cahaya alami** — bukan hijau jenuh HDR, bukan filter "cinematic".
- Foto lapangan: cahaya pagi/sore (konsisten dengan aturan semprot 06.00–09.00 / 15.30–17.30 — detail kecil yang justru memperkuat kredibilitas).
- Subjek utama: **tanaman dan tanah dulu, botol belakangan.** Botol masuk frame sebagai alat kerja (di tangan, di tepi petakan), bukan model.
- Orang boleh muncul (Aris sendiri, petani mitra yang memberi izin) — asli, tanpa pose iklan.
- Rasio: 16:9/4:3 untuk video, 1:1/4:5 untuk marketplace & medsos; teks overlay hanya warna palet §3.

### 6.3 Daftar bidikan yang perlu dikumpulkan (untuk Aris)

1. Petakan padi lebar dengan cahaya pagi (Karawang bila memungkinkan).
2. Close-up rumpun saat fase anakan (tunjukkan jumlah anakan).
3. Tangan menyemprot ke arah pangkal rumpun.
4. Malai saat melengkung / saat menguning.
5. Panen: gabah terangkai atau timbangan hasil.
6. Botol BIO7 di latar netral: frontal label, label belakang, botol di context lapangan.
7. Haji Karma (atau petani sampling) bersama lahan — izin nama tertulis bila dipublikasikan.

---

## 7. Checklist Aplikasi

Periksa konsistensi CI di semua permukaan berikut. Tandai selesai satu per satu.

### 7.1 Situs web — ✅ sudah diterapkan
Semua token warna, tipografi, dan logo sudah hidup di `src/app/globals.css` + `src/components/site/logo.tsx`. Perubahan selanjutnya lewat content layer (lihat `02-website-spec.md` §5) — jangan mengedit styling untuk mengubah teks.

### 7.2 WhatsApp Business (kanal utama — kerjakan minggu pertama)

Langkah konkret untuk Aris:
1. Install aplikasi **WhatsApp Business** (Play Store / App Store). Jika nomor (+62) 852 2121 2223 masih di WhatsApp reguler, pindahkan ke WA Business (riwayat chat ikut termigrasi) — satu nomor hanya bisa aktif di satu aplikasi.
2. Profil bisnis:
   - Foto profil: **AegisMark (simbol saja)**, 640×640 px PNG, latar kertas hangat.
   - Nama bisnis: `Aegis Soil Health`
   - Kategori: `Pertanian` / `Agricultural products`
   - Deskripsi (≤ 139 karakter): `Mikroba untuk Tanah yang Lebih Hidup. BIO7 bioaktivator multi-mikroba, terdaftar KEMENTAN RI. Senin–Sabtu 07.30–17.30 WIB.`
   - Jam: Senin–Sabtu 07.30–17.30 · Situs: `aegissoilhealth.com` · Email: `email@aegissoilhealth.com`
3. Katalog: tambahkan produk BIO7 (foto §6.3 #6, harga HET Rp55.000/Rp65.000, deskripsi tempel dari `04-content-bahasa-indonesia.md`).
4. Pesan otomatis (greeting / away / quick replies) — teks lengkap siap-tempel ada di `03-marketing-strategy.md` §2a.
5. Gunakan tautan pendek `https://wa.me/6285221212223` di semua materi (kartu nama, bio medsos, stiker kemasan) — bukan nomor telanjang.

### 7.3 Marketplace (Shopee / Tokopedia / Lazada)

**Spesifikasi foto** (verifikasi ulang di halaman bantuan masing-masing platform — bisa berubah):

| Platform | Rasio | Ukuran minimum | Disarankan | Jumlah foto |
|---|---|---|---|---|
| Shopee | 1:1 | 1024×1024 | 1024×1024+ | hingga 9 |
| Tokopedia | 1:1 | 500×500 | 1024×1024+ | hingga 5 |
| Lazada | 1:1 | 750×750 | 1042×1042+ | hingga 8 |

Urutan foto (formula konsisten): (1) botol frontal latar netral; (2) label belakang/dosis terbaca; (3) infografis dosis per tangki 16 L; (4) foto lapangan asli; (5) badge KEMENTAN + UNPAD; (6) testimoni petani (jika sudah ada). Overlay teks maksimal ±20% frame; latar netral putih/kertas — bukan merah/gradasi platform.

**Judul listing — formula:** `[Merek] [Jenis produk] [Komoditas] – [Klaim legal]`
Contoh (≤ 70 karakter, aman untuk semua platform):
- `BIO7 Bioaktivator Mikroba Padi – Pupuk Hayati Terdaftar Kementan`
- `BIO7 Bioaktivator Mikroba Kebun Sawit Kopi – Pupuk Hayati Kementan`
- `BIO7 Probiotik Ternak Ayam Sapi – Bioaktivator Kementan`

Larangan di judul: ALL CAPS, kata "TERBAIK/NOMOR 1", emoji, klaim hasil ("panen 2x lipat"). Detail deskripsi & strategi 4 minggu: `03-marketing-strategy.md` §2b.

### 7.4 Media sosial (bila dibuka)
- Foto profil: AegisMark simbol · Cover: foto lapangan + lockup inversi.
- Handle konsisten: `@aegissoilhealth` (satu nama di semua platform).
- Bio singkat (contoh): `Mikroba untuk Tanah yang Lebih Hidup. BIO7 — terdaftar KEMENTAN RI 03.02.2026.156. Konsultasi gratis ↓` + tautan wa.me.

### 7.5 Tanda tangan email

**Versi HTML (tempel ke pengaturan signature Gmail/Outlook):**
```html
<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;color:#292421;">
  <tr>
    <td style="padding-right:14px;border-right:2px solid #1F3D2B;">
      <img src="https://aegissoilhealth.com/logo.svg" width="56" height="56"
           alt="Aegis Soil Health" style="display:block;">
    </td>
    <td style="padding-left:14px;line-height:1.5;">
      <strong style="font-size:14px;color:#1F3D2B;">Aris Setiadi</strong><br>
      <span style="font-size:12px;color:#C2410C;font-weight:bold;">
        Pemasar Eksklusif BIO7 — PT Aegis Soil Health
      </span><br>
      <span style="font-size:12px;">
        WhatsApp: (+62) 852 2121 2223 · <a href="https://aegissoilhealth.com" style="color:#1F3D2B;">aegissoilhealth.com</a>
      </span><br>
      <span style="font-size:11px;color:#6E685F;">
        Senin–Sabtu 07.30–17.30 WIB · KEMENTAN RI 03.02.2026.156
      </span>
    </td>
  </tr>
</table>
```

**Versi teks polos:**
```
Aris Setiadi
Pemasar Eksklusif BIO7 — PT Aegis Soil Health
WhatsApp: (+62) 852 2121 2223
https://aegissoilhealth.com
Senin–Sabtu 07.30–17.30 WIB
```

### 7.6 Cetak masa depan (label, brosur, kartu nama)

- **Cetak warna (CMYK)** — konversi pendekatan (selalu minta proof/cetak uji dulu, percetakan yang finalkan dengan profil ICC):
  - #1F3D2B ≈ CMYK 85 / 55 / 70 / 45 (≈ Pantone 3435 C)
  - #C2410C ≈ CMYK 20 / 85 / 100 / 10 (≈ Pantone 718 C)
  - #FAF7F0 — **jangan dicetak sebagai tinta penuh**; pilih kertas natural/krem mendekati warna itu (art paper krem ≥ 150 gsm untuk brosur).
- Label kemasan wajib menunggu keputusan produsen (kemasan adalah ranah PT Biotek Agro Nusantara) — kirim dokumen ini sebagai rujukan visual.
- Kartu nama: 9×5,5 cm; sisi depan lockup + nama; sisi belakang QR ke `wa.me/6285221212223`.
- Brosur: ikuti skala tipografi §4.2; sertakan badge KEMENTAN + UNPAD di halaman depan; catatan kejujuran untuk sektor kebun/ternak wajib ada (sama seperti situs).

---

*Dokumen ini adalah Deliverable A dari master prompt. Perubahan CI hanya lewat pembaruan dokumen ini — jangan berimprovisasi per-kanal.*
