# 04 — Bank Teks Situs (Bahasa Indonesia)
## Siap-tempel: aegissoilhealth.com × BIO7

Dokumen induk semua teks Bahasa Indonesia yang hidup di situs. Fungsi: (1) tempat Aris menyalin teks untuk auto-reply WhatsApp, deskripsi marketplace, caption, dan materi lain; (2) acuan ketika mengedit situs — teks di sini identik dengan yang tampil di web.

**Aturan pakai:** setiap blok diberi label file sumber (path di `src/content/`). Bila teks di situs diubah, ubah juga di file sumber **dan** di dokumen ini agar tidak terjadi perbedaan versi. Perubahan harga/nomor kontak hanya lewat `src/content/site.ts`.

Konvensi: format angka Indonesia (12,6 ton · Rp55.000 · 35–50 batang). Nama ilmiah italic. Tanpa tanda seru pada teks teknis.

---

## Daftar Isi
1. Global — UI semua halaman (`dict/common.ts`)
2. Beranda (`dict/home.ts`)
3. Padi — narasi (`dict/padi.ts`)
4. Padi — protokol & dosis (`protocols.ts`)
5. Kebun (`dict/kebun.ts`)
6. Ternak (`dict/ternak.ts`)
7. Tentang (`dict/tentang.ts`)
8. Kontak (`dict/tentang.ts` — objek `kontak`)
9. Blog (`dict/tentang.ts` — objek `blog`)
10. Legal (`dict/legal.ts`)
11. Data situs: kontak, harga, sertifikasi, kasus (`site.ts`)
12. Pesan WhatsApp per konteks (`site.ts`)

---

## 1. Global — UI semua halaman
*Sumber: `src/content/dict/common.ts`*

| Elemen | Teks (ID) |
|---|---|
| Tagline brand | Mikroba untuk Tanah yang Lebih Hidup |
| Nama perusahaan / produk | Aegis Soil Health · BIO7 |
| Tombol WA header | Chat WhatsApp |
| Label bahasa | Bahasa |
| Nav beranda | Beranda |
| CTA konsultasi | Belum yakin? Konsultasi gratis via WhatsApp |
| CTA pesan | Pesan via WhatsApp |
| CTA kontak | Hubungi Kami |
| Label terverifikasi | Terverifikasi |
| Label petunjuk (kejujuran) | Petunjuk aplikasi — belum ada uji lapangan spesifik untuk sektor ini |
| Catatan HET | HET (Harga Eceran Tertinggi) ditetapkan produsen — tidak dapat dinegosiasi untuk kanal standar. |
| Label wilayah harga | Pulau Jawa · Luar Pulau Jawa |
| Jam operasional | Jam operasional |
| Produsen / Sertifikasi | Produsen · Sertifikasi |
| Marketplace | Beli di marketplace · cari: BIO7 Aegis Soil Health |
| Kembali ke beranda | Kembali ke beranda |
| FAQ | Pertanyaan Umum |
| Mekanisme / Komposisi | Cara kerja BIO7 · Komposisi mikroba terverifikasi |
| Satuan CFU | CFU/ml |
| Footer sektor lain | Aplikasi BIO7 untuk sektor lain: Perkebunan · Peternakan · Padi |
| Footer hak cipta / disclaim | Hak cipta dilindungi. · Disclaim klaim pertanian · Kontak: |

**Mekanisme BIO7 (teks blok, dipakai lintas sektor — wajib sama di semua halaman):**
> BIO7 menghidupkan kembali biologi tanah melalui konsorsium mikroba hidup ultra-padat: bakteri penambat nitrogen menyediakan N hayati, bakteri pelarut fosfat memobilisasi P yang terkunci di tanah, dan Streptomyces menekan patogen tular tanah. Sisa agrokimia terurai, keasaman tanah dinetralkan, dan akar menyerap hara lebih dalam. Hasilnya: tanah yang benar-benar hidup, bukan sekadar dipupuk.

---

## 2. Beranda
*Sumber: `src/content/dict/home.ts`*

**Meta (title/description):**
> **Title:** Aegis Soil Health — BIO7 Bioaktivator Mikroba Multiguna
> **Description:** Mengurai sisa agrokimia beracun, menetralkan keasaman tanah, dan mengaktifkan kembali biologi bawah tanah dengan konsorsium mikroba hidup ultra-padat.

**Hero:**
- Eyebrow: PT Aegis Soil Health mempersembahkan
- Judul: BIO7
- Subjudul: Bioaktivator & Bioremediasi Tanah Multi-Mikroba
- Value prop: Mikroba untuk Tanah yang Lebih Hidup. Mengurai sisa agrokimia beracun, menetralkan tanah asam, dan mengaktifkan kembali biologi bawah tanah dengan konsorsium mikroba hidup ultra-padat.
- Pertanyaan router: Untuk lahan atau usaha apa Anda ingin memulai?

**Tiga kartu sektor (judul · pitch · CTA):**

| Sektor | Judul | Pitch | CTA |
|---|---|---|---|
| Padi | Padi & Pertanian | Protokol lengkap teruji lapangan — dari anakan super hingga penggemukan bulir. Kasus Karawang: 12,6 ton/ha. | Lihat protokol padi |
| Kebun | Perkebunan & Hortikultura | Sawit, kopi, kakao, buah, dan sayuran — pemulihan tanah dan pengurangan residu kimia. | Lihat panduan kebun |
| Ternak | Peternakan & Perikanan | Air minum probiotik, fermentasi pakan, dan sanitasi kandang dengan konsorsium mikroba yang sama. | Lihat panduan ternak |

**Strip trust:** Terdaftar KEMENTAN RI · Diuji UNPAD · 20+ tahun di pasar

**CTA konsultasi:**
- Judul: Belum yakin BIO7 cocok untuk Anda?
- Isi: Konsultasi gratis via WhatsApp — ceritakan kondisi lahan atau kandang Anda, kami bantu susun dosis yang sesuai.
- Tombol: Konsultasi gratis via WhatsApp

---

## 3. Padi — narasi
*Sumber: `src/content/dict/padi.ts` (tabel dosis ada di §4, `protocols.ts`)*

**Meta:**
> **Title:** BIO7 untuk Padi — Protokol Lengkap Hingga Panen | Aegis Soil Health
> **Description:** Protokol BIO7 untuk padi: anakan super 35–50 batang/rumpun, perisai penyakit, penggemukan bulir, dan pemulihan tanah asam. Kasus Karawang 2023: 12,6 ton/ha.

**Hero:**
- Eyebrow: Sektor Pertanian — Padi
- Judul: Protokol Padi BIO7 — Teruji Lapangan di Lumbung Padi Nasional
- Lead: Dari rendam benih hingga pematangan bulir: empat protokol bertahap, satu protokol darurat tanah asam, dan satu kasus lapangan terverifikasi 12,6 ton/ha.
- CTA: Konsultasi padi via WhatsApp

**Quick pitch — "Apa yang BIO7 lakukan untuk padi Anda" (3 bullet):**
1. Anakan produktif 35–50 batang per rumpun lewat kolonisasi akar dan mobilisasi N/P hayati.
2. Tanah yang sehat: sisa agrokimia terurai, keasaman dinetralkan, patogen tular tanah ditekan.
3. Kurangi 40% pupuk NPK sintetis — kasus Karawang 2023 menghasilkan 12,6 ton/ha.

**Kredensial:**
- Judul seksi: Kredensial terverifikasi
- Baris keamanan: Uji keamanan: non-patogenik · E. coli negatif · Salmonella negatif. Aman untuk tanah dan tanaman.

**Aturan umum:**
- Judul: Aturan umum — berlaku untuk semua aplikasi padi
- Subjudul: Patuhi dua larangan keras (herbisida & Urea 30 HST) agar mikroba bekerja optimal.

**Label tabel protokol:** Campuran tangki (per 16 liter) · Bahan · Dosis · Fungsi · Waktu aplikasi · Tujuan · Teknik aplikasi · Pengelolaan air · "Empat protokol bertahap" · "Semua takaran per tangki semprot 16 liter (knapsack). Ikuti urutan waktu HST."

**Protokol darurat (judul seksi):** Protokol darurat — "Untuk lahan bermasalah: tanah asam, pH jatuh, atau tanaman sudah menunjukkan gejala."

**Hortikultura (judul seksi):** Hortikultura & tanaman sekunder — "Dosis BIO7 untuk sayuran dan palawaja di luar padi."

**Bukti lapangan — "Model Karawang 2023":**
- Lead: Lahan Haji Karma, Kecamatan Jayakerta, Kabupaten Karawang — lumbung padi nasional.
- Label data: Hasil terverifikasi · Rata-rata lokal · Keunggulan · Efisiensi input · Luas petakan
- Nilai data (dari `site.ts`): 12.600 kg/ha (12,6 ton/ha) · 7.800 kg/ha (rata-rata lokal tanpa BIO7) · +61,5% · −40% pemakaian pupuk NPK sintetis · 1 hektar
- Catatan: Hasil aktual bergantung pada varietas, cuaca, dan pengelolaan lahan. Konsultasikan protokol untuk kondisi Anda.

**Harga (judul + catatan):**
- Judul: Harga BIO7
- Dropship: Pengiriman dari produsen per pesanan (dropship) — pemesanan & konsultasi via WhatsApp.
- OEM: OEM / white-label & skala ekspor: hubungi kami untuk penawaran khusus.

**FAQ "Pertanyaan umum sektor padi" (5 item):**

| Pertanyaan | Jawaban |
|---|---|
| Apakah BIO7 bisa dicampur dengan pupuk atau pestisida kimia? | Bisa. BIO7 kompatibel dengan insektisida dan fungisida kimia dalam satu tangki. Satu-satunya larangan: jangan dicampur herbisida, dan beri jeda minimum 7 hari dari aplikasi herbisida (mis. Paraquat, Glifosat). |
| Mengapa Urea dilarang setelah 30 HST? | Urea padat setelah 30 HST menipiskan dinding sel epidermis tanaman. Akibatnya rentan busuk seludang, busuk leher (Pyricularia oryzae), dan rebah. Setelah 30 HST gunakan protokol hayati + pupuk daun sesuai Protokol B–D. |
| Apakah hasil 12,6 ton/ha dijamin? | Tidak. Angka Karawang 2023 adalah hasil terverifikasi dari lahan 1 hektar dengan protokol lengkap. Hasil aktual bergantung varietas, cuaca, dan pengelolaan — konsultasi gratis membantu menyusun target realistis untuk lahan Anda. |
| Bagaimana cara pakai BIO7 saat benih masih di persemaian? | Rendam benih: 1 tutup per 3 liter air selama 24 jam. Semprot persemaian: 7 tutup per tangki 16 liter, setiap 5 hari. |
| Apakah BIO7 aman untuk tanah dan lingkungan? | Ya — teruji non-patogenik dengan hasil negatif untuk E. coli dan Salmonella (0 CFU/ml). Terdaftar di KEMENTAN RI dengan nomor 03.02.2026.156 dan dianalisis oleh Fakultas Pertanian UNPAD. |

---

## 4. Padi — protokol & dosis
*Sumber: `src/content/protocols.ts` (Master Prompt §3). Semua takaran "tutup" = tutup botol BIO7 1 liter (±10 ml).*

### 4.1 Aturan umum (berlaku untuk semua aplikasi padi)

| Aturan | Isi |
|---|---|
| Rendam benih | 1 tutup per 3 liter air, rendam benih 24 jam. |
| Semprot persemaian | 7 tutup per tangki 16 liter, semprot setiap 5 hari. |
| Kompatibilitas campuran | BIO7 boleh dicampur dengan insektisida dan fungisida kimia. |
| **Larangan herbisida — jeda 7 hari** | JANGAN mencampur BIO7 dengan herbisida apa pun. Beri jeda minimum 7 hari antara BIO7 dan herbisida kimia (mis. Paraquat, Glifosat). |
| **Urea padat dilarang setelah 30 HST** | Mulai 30 HST, Urea padat dilarang keras. Pemupukan Urea (tebar/semprot) setelah 30 HST menipiskan dinding sel epidermis tanaman — memicu busuk seludang, busuk leher (Pyricularia oryzae), dan rebah. |
| Masa simpan | Dijamin viabel sampai Juli 2032. |

### 4.2 Protokol A — Generasi Anakan Super

- **Waktu:** 15, 22, dan 30 HST
- **Tujuan:** Memicu produksi anakan produktif yang masif (target 35–50 batang per rumpun) serta mencegah klorosis bibit dan stagnasi akar.

**Campuran tangki (per tangki 16 liter):**

| Bahan | Dosis | Fungsi |
|---|---|---|
| BIO7 | 5–7 tutup (50–70 ml) | Kolonisasi akar oleh mikroba, mobilisasi N/P hayati |
| Ultradap (Mono-Ammonium Phosphate) | 3–4 sendok makan (45–60 g) | P siap tersedia untuk energi akar dalam, inisiasi anakan aktif |
| CALNIT (Calcium Nitrat, 15,5% N, 26% CaO) | 2–3 sendok makan (30–45 g) | Nitrat-N + Ca larut menebalkan dinding sel, mencegah rebah |
| MgSO4 (Magnesium Sulfat) | 1–2 sendok makan (15–30 g) | Aktivator klorofil, fotosintesis saat langit mendung |
| Fitoflex (kompleks mikronutrien kelat) | 1 sachet (2,5 g) | Unsur mikro (Zn, Cu, Fe, Mn, B, Mo) — mencegah kelaparan mikro tersembunyi di tanah masam |

**Pupuk dasar (per hektar):**
- 5 HST: Urea 25 kg + Phonska 25 kg
- 10–15 HST: Urea 100 kg + Phonska 100 kg
- 30 HST (opsional): Phonska 200 kg + Fertiphos 50 kg untuk target 8 t/ha; atau Phonska PLUS 200 kg + Fertiphos 50 kg untuk target 10 t/ha

**Teknik aplikasi:**
- Arahkan kabut semprot ke pangkal rumpun dan zona akar.
- Waktu semprot: pagi hari (06.00–09.00) atau sore (15.30–17.30).
- Kondisi tanah: lembap / macak-macak, bukan kering gersang.
- Jangan menyemprot saat terik siang (10.00–14.00) — UV membunuh bakteri menguntungkan.
- Bila hujan turun dalam 2 jam setelah aplikasi, ulangi setengah dosis saat cuaca kembali cerah.

### 4.3 Protokol B — Perpanjang Malai & Perisai Penyakit

- **Waktu:** 40, 47 HST, dan saat bunga seragam di seluruh petakan
- **Tujuan:** 99% anakan menghasilkan malai; menekan busuk leher (neck blast) dan kresek; menonaktifkan walang sangit.

**Campuran tangki (per tangki 16 liter):**

| Bahan | Dosis | Fungsi |
|---|---|---|
| BIO7 | 7–10 tutup | Bikonversi hayati, mendukung pengisian bulir |
| Meroke MKP (52% P₂O₅, 34% K₂O) | 5 sendok makan (±25 g) | Fosfor-kalium, energi malai |
| CALNIT | 2 sendok makan (±20 g) | Nitrogen + kalsium, malai kokoh |
| MgSO4 | 1 sendok makan | Dukungan fotosintesis |
| Fitoflex | 1 sachet (2,5 g) | Mikronutrien lengkap |
| Auksin Murni (hormon murni, PT Natural Agrisains Indonesia) | 1 sachet (5 g) | Hormon perangsang akar, memperkuat serapan hara |

**Pupuk dasar (per hektar, 40–45 HST):** KCl 100 kg + Fertiphos 100 kg. Target: 12 ton GKP/ha.

**Pengelolaan air:** Genangi petakan setinggi 5 cm sejak awal fase ini hingga ujung malai mulai menguning. Pertahankan secara kontinu.

### 4.4 Protokol C — Perbesar Bulir

- **Waktu:** Saat malai mulai melengkung (1–2 semprotan, jeda 7 hari)
- **Tujuan:** Memaksimalkan pengisian dan ukuran bulir.

**Campuran tangki (per tangki 16 liter):**

| Bahan | Dosis | Fungsi |
|---|---|---|
| BIO7 | 7 tutup | Hayati (biologis) |
| KNO3 putih (Pupuk Crystal, kemasan 2 kg) | 5 sendok makan | Nitrogen-kalium untuk penggemukan bulir |
| MgSO4 | 2 sendok makan | Magnesium + sulfur |
| TaniSIL (silika murni) | 1 sendok makan | Memperkuat batang dan bulir |
| Giberelin Murni (hormon perangsang bunga & buah) | 1 sachet (5 g) | Hormon perangsang bunga & buah |

**Pengelolaan air:** Lanjutkan genangan 5 cm.

### 4.5 Protokol D — Pergemuk & Matang Bulir

- **Waktu:** Saat ujung malai mulai menguning (1–2 semprotan, jeda 5 hari)
- **Tujuan:** Menggemukkan bulir dan mempercepat pematangan seragam.

**Campuran tangki (per tangki 16 liter):**

| Bahan | Dosis | Fungsi |
|---|---|---|
| BIO7 | 10 tutup | Hayati (biologis) |
| MerokeSOP (52% K₂O, 18% S, kemasan 1 kg) | 7 sendok makan | Kalium + sulfur untuk pengisian bulir |
| MgSO4 | 3 sendok makan | Magnesium + sulfur, fotosintesis, kualitas bulir |

**Pengelolaan air:** Keringkan petakan hingga panen — mempercepat pematangan dan mempermudah panen.

### 4.6 Protokol Darurat — Pemulihan Tanah Asam / Jatuhnya pH

- **Gejala yang ditangani:** Padi kerdil, klowor, ambles (rebah bibit), daun merah/kuning, sundep, akar coklat, virus tungro.
- **Prosedur:**
  1. Hentikan pemupukan Urea tebar untuk seluruh sisa musim tanam.
  2. Keringkan petakan sampai sat/asat (tidak perlu kering sampai retak rambut).
  3. Semprot 3 kali dengan jeda 1 hari (contoh: Senin – Rabu – Jumat).

**Formula "Sapu Jagat" (per tangki 16 liter):**

| Bahan | Dosis | Fungsi |
|---|---|---|
| BIO7 | 13 tutup | Hayati (biologis) |
| Meroke MKP | 7 sendok makan | Fosfor-kalium |
| Dimehipo (bahan aktif) | 75 ml | Insektisida |
| Zinc Sulphate (atau Antracol 2 sendok makan) | 3 sendok makan | Mikronutrien / fungisida |

**Pupuk dasar (per hektar):** Phonska 100 kg + Fertiphos 100 kg.
**Pencegahan:** semprot formula Sapu Jagat yang sama 1 dan 3 hari sebelum tanam.

### 4.7 Hortikultura & Tanaman Sekunder

| Aplikasi | Dosis | Frekuensi |
|---|---|---|
| Semprot daun (foliar) | 7 tutup per tangki 16 liter | Setiap 7–10 hari |
| Kocor akar (root drench) | 1 tutup per 10 liter air | 1 gelas per tanaman, setiap 15–30 hari |

---

## 5. Kebun (Perkebunan & Hortikultura)
*Sumber: `src/content/dict/kebun.ts` — konten diekstrapolasi, label kejujuran wajib.*

**Meta:**
> **Title:** BIO7 untuk Perkebunan & Hortikultura | Aegis Soil Health
> **Description:** Petunjuk aplikasi BIO7 untuk sawit, kopi, kakao, durian, mangga, cabai, tomat, kol, dan bawang — pemulihan tanah dan pengurangan residu kimia.

**Hero:**
- Eyebrow: Sektor Perkebunan & Hortikultura
- Judul: Pulihkan Tanah Kebun dengan Konsorsium Mikroba yang Sama
- Lead: Dari sawit rakyat sampai bedengan cabai: BIO7 bekerja lewat mekanisme yang sama seperti di padi — mengurai residu, melarutkan hara, dan menekan patogen.
- CTA: Konsultasi kebun via WhatsApp

**Status konten (label kejujuran — GuidanceNote):**
- Judul: Status konten halaman ini
- Isi: Konten di halaman ini adalah petunjuk aplikasi yang diekstrapolasi dari mekanisme mikroba terverifikasi dan protokol padi. Belum ada uji lapangan spesifik untuk komoditas perkebunan — karena itu konsultasi gratis tersedia untuk menyusun dosis yang disesuaikan.

**"Apa yang BIO7 lakukan untuk kebun Anda" (4 manfaat):**

| Manfaat | Isi |
|---|---|
| Fiksasi nitrogen hayati | Konsorsium penambat N menyuplai nitrogen dari udara ke zona perakaran — mengurangi ketergantungan urea. |
| Pelarutan fosfat terkunci | Bakteri pelarut fosfat memobilisasi P yang terikat di tanah masam — hara lama jadi tersedia kembali. |
| Bioremediasi residu agrokimia | Mikroba dekomposer mengurai sisa pestisida dan pupuk kimia yang menumpuk di zona akar. |
| Penekanan patogen tular tanah | Streptomyces dan Bacillus bersaing dengan patogen jamur akar (mis. Ganoderma, Fusarium) lewat kompetisi mikroba. |

**Petunjuk aplikasi:**

| Aplikasi | Dosis | Frekuensi |
|---|---|---|
| Semprot daun (foliar) | 7 tutup per tangki 16 liter | Setiap 7–10 hari |
| Kocor akar (root drench) | 1 tutup per 10 liter air | 1 gelas per tanaman, setiap 15–30 hari |

Catatan herbisida: Aturan yang sama berlaku: jangan mencampur BIO7 dengan herbisida; jeda minimum 7 hari.

**Komoditas yang dicakup (9, dengan catatan):**

| Komoditas | Catatan |
|---|---|
| Sawit | Zone akar piringan, program pengurangan pupuk bertahap |
| Kopi | Pemulihan tanah naungan, kualitas cherry |
| Kakao | Penekanan patogen VSD dan busuk buah lewat kesehatan tanah |
| Durian | Kocor akar muda, fase pra-produksi |
| Mangga | Pemulihan tanah gundul, dukungan fase generatif |
| Cabai | Semprot rutin 7–10 hari, bedengan |
| Tomat | Semprot daun + kocor, fase pascatransplant |
| Kol | Tanah dataran tinggi masam, program pH |
| Bawang | Semprot fase pembentukan umbi |

**CTA jujur:**
- Judul: Belum ada uji lapangan spesifik untuk perkebunan — konsultasi gratis untuk dosis yang disesuaikan
- Isi: Ceritakan komoditas, luas, dan kondisi tanah Anda. Kami susun rekomendasi dosis awal dan jadwal evaluasi bersama.
- Tombol: Konsultasi gratis via WhatsApp

**Harga:** Judul: Harga BIO7 (kartu harga sama dengan §3).

**FAQ "Pertanyaan umum sektor kebun" (3 item):**

| Pertanyaan | Jawaban |
|---|---|
| Apakah BIO7 sudah diuji untuk sawit atau kopi? | Belum ada uji lapangan spesifik untuk komoditas perkebunan. Mekanisme mikroba dan uji lab terverifikasi, tapi dosis kebun adalah petunjuk aplikasi hasil ekstrapolasi — karena itu kami sediakan konsultasi gratis sebelum Anda membeli. |
| Bisakah BIO7 dicampur pupuk daun kimia? | Bisa, seperti di padi. Hindari hanya herbisida — beri jeda 7 hari. Semprot pagi atau sore, bukan siang terik. |
| Untuk sawit dewasa, kocor atau semprot? | Fokus di piringan akar: kocor 1 tutup per 10 liter air, dosis per pokok disesuaikan umur. Konsultasi gratis membantu hitung kebutuhan per hektar. |

---

## 6. Ternak (Peternakan & Perikanan)
*Sumber: `src/content/dict/ternak.ts` — konten diekstrapolasi, label kejujuran wajib.*

**Meta:**
> **Title:** BIO7 untuk Peternakan & Perikanan | Aegis Soil Health
> **Description:** Petunjuk aplikasi BIO7 untuk ternak: air minum probiotik, fermentasi pakan, dan sanitasi kandang untuk ayam, sapi, kambing, ikan, dan udang.

**Hero:**
- Eyebrow: Sektor Peternakan & Perikanan
- Judul: Satu Konsorsium Mikroba untuk Kandang yang Lebih Sehat
- Lead: Air minum probiotik, fermentasi pakan, dan sanitasi kandang — tiga pintu masuk konsorsium mikroba BIO7 yang sama dengan yang menghidupkan tanah.
- CTA: Konsultasi ternak via WhatsApp

**Status konten (label kejujuran — GuidanceNote):**
- Judul: Status konten halaman ini
- Isi: Konten di halaman ini adalah petunjuk aplikasi yang diekstrapolasi dari mekanisme probiotik terverifikasi. Formulasi khusus peternakan belum divalidasi lapangan — konsultasi gratis tersedia untuk dosis yang disesuaikan. BIO7 tidak dipasarkan untuk konsumsi manusia.

**"Tiga aplikasi di kandang":**

| Aplikasi | Isi |
|---|---|
| Air minum probiotik | Konsorsium mikroba menyeimbangkan flora saluran cerna ternak dan meningkatkan penyerapan nutrisi pakan. |
| Fermentasi pakan | Pakan terprobiotik lebih mudah dicerna — nilai gizi per kilogram pakan naik tanpa tambahan biaya besar. |
| Sanitasi kandang | Kompetisi mikroba mengurangi beban patogen di lantai dan permukaan kandang — lingkungan lebih bersih tanpa disinfektan keras. |

**Petunjuk dosis per jenis ternak:**

| Jenis ternak | Dosis | Jadwal |
|---|---|---|
| Broiler / layer (ayam) | 1–2 tutup per liter air minum | 3–5 hari per bulan |
| Ruminan (sapi / kambing) | 5–10 tutup per ekor per hari | Dicampur pakan atau air minum |
| Akuakultur (ikan / udang) | 1 tutup per 100 m³ air | Aplikasi mingguan |

Catatan: Dosis peternak berbeda dari dosis tanaman — jangan memakai dosis kebun di kandang. Mulai dari batas bawah, amati 1 siklus, lalu sesuaikan.

**CTA:**
- Judul: Konsultasi gratis untuk kandang Anda
- Isi: Ceritakan jenis ternak, populasi, dan sistem kandang Anda. Kami bantu susun program BIO7 yang sesuai.
- Tombol: Konsultasi gratis via WhatsApp

**Harga + catatan:** Judul: Harga BIO7 · Catatan: dosis untuk peternakan berbeda dari dosis tanaman — kaji kebutuhan per siklus ternak Anda sebelum memesan.

**FAQ "Pertanyaan umum sektor ternak" (3 item):**

| Pertanyaan | Jawaban |
|---|---|
| Apakah BIO7 aman untuk ternak? | Uji laboratorium menunjukkan BIO7 non-patogenik dengan E. coli dan Salmonella negatif (0 CFU/ml). Namun program peternakan belum divalidasi lapangan — mulailah lewat konsultasi gratis dan uji skala kecil dulu. |
| Berapa dosis untuk ayam broiler? | 1–2 tutup per liter air minum, diberikan 3–5 hari per bulan. Mulai dari 1 tutup, amati kondisi litter dan FCR, lalu sesuaikan. |
| Apakah BIO7 menggantikan vaksin atau obat? | Tidak. BIO7 mendukung kesehatan lingkungan dan pencernaan — bukan pengganti program kesehatan hewan yang diarahkan dokter hewan. |

---

## 7. Tentang (korporat)
*Sumber: `src/content/dict/tentang.ts` — objek `tentang`*

**Meta:**
> **Title:** Tentang PT Aegis Soil Health | BIO7
> **Description:** Misi kami: membebaskan tanah pertanian dari toksisitas kimia. Konsorsium multi-mikroba, terdaftar KEMENTAN RI, dianalisis UNPAD, diproduksi PT Biotek Agro Nusantara Bandung.

**Hero:**
- Eyebrow: Tentang Kami
- Judul: Membebaskan Tanah Pertanian dari Toksisitas Kimia
- Lead: PT Aegis Soil Health memasarkan BIO7 — bioaktivator multi-mikroba dari PT Biotek Agro Nusantara, Bandung — dengan satu misi: mengembalikan tanah Indonesia ke kondisi biologi yang hidup.

**Misi:**
> Dekade pemupukan dan penyemprotan kimia meninggalkan residu di tanah pertanian Indonesia: keasaman naik, mikroba asli mati, dan hasil stagnan. Misi kami sederhana — mengurai residu beracun, menetralkan keasaman, dan mengaktifkan kembali mikroba bawah tanah. Bukan sekadar memupuk, tapi memulihkan.

**Keunggulan konsorsium vs. inokulan galur tunggal:**
> Sebagian besar produk hayati di pasar memakai satu atau dua galur mikroba — satu fungsi, satu titik kegagalan. BIO7 membawa enam kelompok mikroba sekaligus: penambat nitrogen, pelarut fosfat, dekomposer, dan penekan patogen yang saling menguatkan. Jika satu kelompok tertahan kondisi lapangan, kelompok lain tetap bekerja. Ditambah fitohormon alami (auksin, giberelin, sitokinin) dan poli-elektrolit humat-fulvat yang dihasilkan selama proses produksi.

**Sejarah — "20+ tahun di pasar, baru dipasarkan profesional":**
> BIO7 diproduksi PT Biotek Agro Nusantara di Bandung dan telah beredar lebih dari 20 tahun — bertahan lewat mulut-ke-mulut petani, tanpa pemasaran profesional. PT Aegis Soil Health kini membawa standar pemasaran modern: data lab terbuka, protokol dosis yang jelas, dan satu kanal konsultasi langsung.

**Produsen:**
> PT Biotek Agro Nusantara, Bandung — produsen BIO7 dengan pengalaman kultur mikroba lebih dari dua dekade.

**Sertifikasi & legalitas:**
> Terdaftar Kementerian Pertanian RI (No. 03.02.2026.156) · Certificate of Analysis dari Fakultas Pertanian Universitas Padjadjaran (No. B-0529/12/2025, 15 Januari 2026) · diuji non-patogenik, E. coli & Salmonella negatif · masa simpan dijamin sampai Juli 2032.

**Satu orang, satu kanal:**
> Aris Setiadi adalah pemasar eksklusif BIO7 — satu-satunya titik kontak untuk semua pembeli, dari petani sampai pembeli B2B dan OEM. Semua transaksi dan konsultasi lewat satu kanal WhatsApp.

**Kerja sama OEM / white-label & ekspor:**
> Untuk skala ekspor dan penjualan kembali dengan merek Anda sendiri, tersedia skema khusus dengan fleksibilitas harga di atas HET. Hubungi kami untuk diskusi.
> CTA: Diskusi OEM via WhatsApp

---

## 8. Kontak
*Sumber: `src/content/dict/tentang.ts` — objek `kontak` (data kanal dari `site.ts`, lihat §11)*

**Meta:**
> **Title:** Kontak — Aegis Soil Health
> **Description:** Hubungi PT Aegis Soil Health: WhatsApp (+62) 852 2121 2223, email, marketplace Shopee/Tokopedia/Lazada. Senin–Sabtu 07.30–17.30 WIB.

**Hero:**
- Eyebrow: Kontak
- Judul: Bicara Langsung dengan Kami
- Lead: Satu kanal untuk semua kebutuhan — konsultasi dosis, pemesanan, hingga kerja sama OEM. Aris menjawab di jam kerja.

**Label kanal:**
- WhatsApp (utama) — Respon tercepat — konsultasi & pemesanan
- Email — Untuk dokumen & penawaran formal
- Marketplace — Untuk pembelian e-commerce langsung
- Jam operasional

**Formulir "Kirim pesan cepat":**
- Lead: Isi formulir singkat ini — pesan Anda akan terbuka di WhatsApp dalam format siap kirim.
- Label field: Nama · Nomor WhatsApp · Lokasi · Sektor · Pesan
- Placeholder: "Nama Anda" · "cth. 0812xxxxxxx" · "cth. Karawang, Jawa Barat" · "Ceritakan kebutuhan Anda — kondisi lahan, jenis ternak, atau pertanyaan produk…"
- Opsi sektor: Padi / Pertanian · Perkebunan / Hortikultura · Peternakan / Perikanan · Lainnya / OEM / B2B
- Tombol: Kirim via WhatsApp
- Validasi: Nama wajib diisi. · Nomor WhatsApp wajib diisi. · Pesan wajib diisi.
- Pratinjau: "Pesan yang akan terkirim:"

---

## 9. Blog (placeholder)
*Sumber: `src/content/dict/tentang.ts` — objek `blog`*

**Meta:**
> **Title:** Blog & Edukasi — Aegis Soil Health
> **Description:** Artikel edukasi seputar tanah, mikroba, dan protokol BIO7 — akan segera hadir.

**Hero:**
- Eyebrow: Blog & Edukasi
- Judul: Belajar dari Lapangan & Lab
- Lead: Artikel mendalam soal tanah, mikroba, dan dosis — sedang disiapkan. Daftar topik pertama:
- Status: Belum ada artikel yang terbit. Artikel pertama menyusul — fokus awal: sektor padi.

**Topik yang akan hadir (7 awal):**
1. Cara atasi tanah asam pada padi
2. Mengapa urea dilarang setelah 30 HST
3. Jarak aman BIO7 dengan herbisida
4. Ciri-ciri tanah sehat vs tanah rusak kimia
5. Cara perbanyak anakan padi secara alami
6. Pupuk hayati untuk sawit: apa yang perlu diketahui
7. Probiotik untuk ayam broiler: cara kerja dan dosis

(Rencana penuh 20 topik + kata kunci ada di `03-marketing-strategy.md` §4.)

---

## 10. Legal (privacy · terms · disclaimer)
*Sumber: `src/content/dict/legal.ts` — kerangka topik, finalisasi bersama konsultan hukum.*

**Meta masing-masing:**
> **Privacy:** Kebijakan Privasi — Aegis Soil Health · "Kebijakan privasi aegissoilhealth.com: data apa yang kami kumpulkan dan bagaimana penggunaannya."
> **Terms:** Syarat & Ketentuan — Aegis Soil Health · "Syarat penggunaan situs dan ketentuan transaksi BIO7 melalui kanal resmi Aegis Soil Health."
> **Disclaimer:** Disclaim Klaim Pertanian — Aegis Soil Health · "Disclaim klaim hasil pertanian, status verifikasi, dan batas penggunaan produk BIO7."

**Kebijakan Privasi (isi):**
> Halaman ini akan menjelaskan bagaimana aegissoilhealth.com menangani data pribadi pengunjung: data apa saja yang dikumpulkan (mis. data yang Anda isi pada formulir kontak dan percakapan WhatsApp), bagaimana data tersebut digunakan (menjawab pertanyaan, memproses pesanan, komunikasi layanan pelanggan), kepada siapa data dapat dibagikan (produsen untuk pemenuhan pesanan dropship dan platform logistik), berapa lama data disimpan, serta bagaimana Anda dapat meminta penghapusan atau koreksi data. Situs ini tidak memasang iklan pihak ketiga dan tidak menjual data pribadi. Teks final akan difinalisasi bersama konsultan hukum sebelum publikasi.

**Syarat & Ketentuan (isi):**
> Halaman ini akan mengatur: syarat penggunaan situs aegissoilhealth.com; ketentuan pemesanan dan pengiriman BIO7 melalui WhatsApp (termasuk model dropship per pesanan); kebijakan harga mengikuti HET produsen (Rp55.000 Pulau Jawa / Rp65.000 luar Jawa per botol 1 liter) yang tidak dapat dinegosiasi untuk kanal standar; ketentuan khusus OEM/white-label dan ekspor; kebijakan pengembalian dan penggantian produk rusak saat pengiriman; serta pembatasan tanggung jawab. Transaksi diproses manual melalui WhatsApp dan marketplace resmi — situs ini tidak menyediakan pembayaran online. Teks final akan difinalisasi bersama konsultan hukum sebelum publikasi.

**Disclaim Klaim Pertanian (isi):**
> Disclaim ini akan menjelaskan: (1) Hasil pertanian dipengaruhi banyak faktor — varietas, cuaca, hama, dan pengelolaan lahan — sehingga angka hasil seperti kasus Karawang 2023 (12,6 ton/ha) adalah dokumentasi lapangan spesifik, bukan jaminan hasil untuk setiap lahan. (2) Konten sektor perkebunan dan peternakan adalah petunjuk aplikasi hasil ekstrapolasi yang belum divalidasi uji lapangan spesifik. (3) BIO7 bukan pestisida kimia dan tidak menggantikan rekomendasi dokter hewan atau program kesehatan tanaman resmi. (4) BIO7 tidak dipasarkan untuk konsumsi manusia. (5) Ikuti aturan label dan protokol dosis; penyalahgunaan penggunaan di luar petunjuk berada di luar tanggung jawab produsen dan pemasar. Teks final akan difinalisasi bersama konsultan hukum sebelum publikasi.

**Catatan global halaman legal:**
> Catatan: teks di atas adalah kerangka topik untuk difinalisasi bersama konsultan hukum Anda — bukan nasihat hukum.

---

## 11. Data situs — kontak, harga, sertifikasi, kasus, komposisi
*Sumber: `src/content/site.ts` (sumber kebenaran tunggal — ubah harga/nomor hanya di file ini)*

| Data | Nilai |
|---|---|
| Perusahaan / Produk | PT Aegis Soil Health · BIO7 |
| Domain | https://aegissoilhealth.com |
| WhatsApp | 6285221212223 · tampilan (+62) 852 2121 2223 · https://wa.me/6285221212223 |
| Email | email@aegissoilhealth.com |
| Jam operasional | Senin–Sabtu, 07.30–17.30 WIB |
| HET Jawa | Rp55.000 per botol 1 liter |
| HET Luar Jawa | Rp65.000 per botol 1 liter |
| Dasar biaya (internal) | Rp40.000 per botol |
| KEMENTAN RI | 03.02.2026.156 — Terdaftar Kementerian Pertanian RI |
| UNPAD | No. B-0529/12/2025 — Sertifikat of Analysis, Fakultas Pertanian, Universitas Padjadjaran, terbit 15 Januari 2026 |
| Masa simpan | Masa simpan dijamin sampai Juli 2032 |
| Produsen | PT Biotek Agro Nusantara — Bandung, Jawa Barat · "Lebih dari 20 tahun beredar di pasar tanpa pemasaran profesional" |
| Marketplace | Shopee · Tokopedia · Lazada — cari "BIO7 Aegis Soil Health" |
| Kasus Karawang 2023 | Haji Karma · Kec. Jayakerta, Kab. Karawang, Jawa Barat · 1 hektar · 12.600 kg/ha (12,6 ton/ha) · baseline 7.800 kg/ha (rata-rata lokal tanpa BIO7) · +61,5% · −40% pemakaian pupuk NPK sintetis |

**Komposisi mikroba terverifikasi (CFU/ml) — data lab, jangan diubah:**

| Mikroba | CFU/ml |
|---|---|
| *Azospirillum* sp. | 3,10 × 10⁷ |
| *Pseudomonas* sp. | 4,00 × 10⁸ |
| *Bacillus* sp. | 1,30 × 10⁸ |
| *Streptomyces* sp. | 1,83 × 10⁹ |
| Konsorsium penambat nitrogen | 3,10 × 10¹⁰ |
| Konsorsium pelarut fosfat | 9,27 × 10⁷ |

**Fitohormon & kompleks bioaktif:**
- Auksin (Indole-3-Acetic Acid / IAA)
- Giberelin (kompleks GA3)
- Sitokinin (turunan Zeatin & Kinetin)
- Poli-elektrolit fulvat & humat bioaktif

**Hasil uji keamanan:**
- Patogenisitas: negatif
- *E. coli*: negatif (0 CFU/ml)
- *Salmonella* sp.: negatif (0 CFU/ml)

---

## 12. Pesan WhatsApp per konteks (pre-filled)
*Sumber: `src/content/site.ts` — `WA_MESSAGES.id` (versi EN tersedia di `WA_MESSAGES.en`)*

| Konteks | Pesan (tempel apa adanya) |
|---|---|
| padi | Halo Aris, saya ingin konsultasi penggunaan BIO7 untuk padi. Bisa dibantu protokol dosis untuk lahan saya? |
| kebun | Halo Aris, saya ingin konsultasi BIO7 untuk kebun/perkebunan. Bisa dibantu petunjuk dosis yang disesuaikan? |
| ternak | Halo Aris, saya ingin konsultasi BIO7 untuk peternakan (air minum probiotik / fermentasi pakan / sanitasi kandang). Bantu saya tentukan dosis? |
| general | Halo Aris, saya ingin tahu lebih banyak tentang BIO7 — bisa info produk & harga? |
| oem | Halo Aris, saya tertarik kerja sama OEM/white-label atau skala ekspor BIO7. Bisa dijadwalkan diskusi? |
| consult | Halo Aris, saya belum yakin BIO7 cocok untuk kebutuhan saya. Boleh konsultasi gratis dulu? |

Susun tautan pre-filled manual: `https://wa.me/6285221212223?text=` + teks di atas dengan URL-encoding (spasi → `%20`).

---

*Dokumen ini adalah salinan teks situs per hari penulisan (pasca-build Task 3). Setelah mengedit `src/content/`, sinkronkan blok terkait di sini.*
