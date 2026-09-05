CREATE TABLE "Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "passwordHash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "Admin" VALUES('cmto21qji00009yl1my2jwsr6','d89d10e54414809738d4d323bfa975e2c449228e79fdb55711c25b293ab4e162873ba71120c0637c1cd9f5e00920b86f4988e59dd9dd459cef41c155b4725de7',1788592926366,1788592926366);
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "websiteUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "Partner" VALUES('cmto301vn00009y8xbu7rdrp1','SIMAHIR - Simplified Asset Historian','https://ahis.online/api/media/logos/1787222601643-SIMAHIR.jpg.webp','https://ahis.online',1,1788594527364,1788594527364);
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Umum',
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "Post" VALUES('cmto21qkf00059yl17col0hkc','cara-atasi-tanah-asam-pada-padi','Cara Mengatasi Tanah Asam pada Tanaman Padi','Panduan teknis bioremediasi tanah masam akibat residu pupuk kimia jangka panjang menggunakan bioaktivator konsorsium mikroba.','## Mengapa Tanah Sawah Menjadi Masam?

Dekade pemupukan kimia sintetis tak terkontrol dan penggunaan pestisida secara terus menerus memicu penurunan drastis pH tanah sawah di berbagai sentra padi Indonesia. Pada pH di bawah 5,5, unsur hara esensial seperti Fosfor (P), Kalium (K), dan Kalsium (Ca) terikat kuat oleh senyawa Alumunium dan Besi, sehingga tidak dapat diserap oleh akar padi.

### Gejala Tanah Masam pada Tanaman Padi:
1. Perkembangan perakaran terhambat, akar tampak kecokelatan atau menghitam.
2. Daun padi menguning kecokelatan mulai dari ujung (gejala keracunan besi/asam).
3. Jumlah anakan produktif sangat sedikit (di bawah 15 batang per rumpun).
4. Tanaman kerdil dan rentan terserang penyakit kresek (*Bacterial Leaf Blight*).

### Solusi Protokol Pemulihan dengan BIO7
PT Biotek Agro Nusantara merumuskan konsorsium mikroba aktif yang dirancang khusus untuk merehabilitasi biologi tanah:

- **Aplikasi Pra-Tanam / Pengolahan Tanah**: Semprotkan BIO7 dengan dosis 2 liter per hektar saat pembajakan tanah basah (macak-macak) 5–7 hari sebelum tanam. Bakteri pelarut fosfat dan penambat nitrogen segera mengurai residu kimia dan menetralkan keasaman larutan tanah.
- **Pengkondisian pH**: Konsorsium mikroba memproduksi asam humat dan fulvat alami yang mengikat senyawa logam beracun serta menstabilkan struktur tanah.
- **Fase Vegetatif**: Lanjutkan penyemprotan rutin pada 10 HST dan 20 HST untuk merangsang perakaran baru yang putih dan aktif menyerap nutrisi.

*Untuk konsultasi protokol tanah masam spesifik di wilayah Anda, hubungi tim agronomi PT Biotek Agro Nusantara via WhatsApp.*','Padi & Pertanian',1,1788592926399,1788592926399);
INSERT INTO "Post" VALUES('cmto21qkf00069yl1ngb08opo','mengapa-urea-dilarang-setelah-30-hst','Mengapa Pemberian Urea Harus Dibatasi Setelah 30 HST?','Penjelasan fisiologis metabolisme tanaman padi: risiko kelebihan nitrogen setelah 30 HST terhadap serangan sundep, blast, dan rebah batang.','## Batas Kritis Aplikasi Pupuk Nitrogen (Urea)

Salah satu kesalahan paling umum dalam budidaya padi adalah kebiasaan menaburkan pupuk Urea hingga umur 40 atau 50 HST dengan harapan daun tetap hijau pekat. Namun, secara fisiologis, pemberian nitrogen berlebih setelah masa anakan maksimum (melewati 30 HST) justru menimbulkan kerugian fatal.

### Dampak Buruk Kelebihan Urea Setelah 30 HST:
1. **Dinding Sel Menjadi Lunak dan Sukulen**: Tanaman menjadi empuk dan berair, menjadi sasaran empuk hama sundep (*Scirpophaga incertulas*) dan wereng batang cokelat.
2. **Ledakan Jamur dan Bakteri**: Penyakit blas daun/leher (*Pyricularia oryzae*) serta hawar daun bakteri berkembang pesat pada jaringan tanaman yang jenuh nitrogen.
3. **Padi Rebah Sebelum Panen**: Ruas batang memanjang terlalu cepat tanpa pembentukan lignin dan silika yang cukup, mengakibatkan padi roboh saat malai mulai berisi.

### Rekomendasi Pemupukan Berimbang BIO7
Pada fase setelah 30 HST, tanaman padi tidak lagi membutuhkan percepatan daun vegetatif, melainkan pematangan primordia dan pengisian malai:
- **Hentikan Urea**: Alihkan fokus nutrisi ke Kalium, Fosfat terlarut, dan mikronutrien pembobot bulir.
- **Kombinasi BIO7**: Mikroba *Streptomyces* dan *Bacillus* dalam BIO7 memproduksi enzim kitinase yang mempertebal dinding sel tanaman sekaligus merangsang translokasi pati ke bulir padi tanpa membuat tanaman rentan roboh.','Teknis Budidaya',1,1788592926399,1788592926399);
INSERT INTO "Post" VALUES('cmto21qkf00079yl15dgu886x','jarak-aman-bio7-dengan-herbisida','Aturan Penting: Jarak Aman Aplikasi BIO7 dengan Herbisida','Aturan baku tank-mix dan jeda waktu penyemprotan agar populasi konsorsium mikroba hidup tidak rusak oleh bahan aktif herbisida kimia.','## Menjaga Vitalitas Konsorsium Mikroba Hidup

BIO7 adalah konsorsium mikroba hidup ultra-padat (mencapai miliaran CFU/ml). Agar mikroba menguntungkan ini dapat berkoloni dan bekerja optimal di lahan Anda, penting untuk memahami aturan interaksi kimia dalam tangki semprot (*tank-mix*).

### Larangan Mutlak: Jangan Pernah Campur Herbisida dalam Satu Tangki
BIO7 kompatibel dicampur dengan insektisida dan fungisida tertentu, namun **DILARANG KERAS** dicampur langsung dengan herbisida kimia (seperti Paraquat, Glifosat, atau herbisida selektif padi). Bahan aktif herbisida bersifat biosida kuat yang dapat mematikan kultur bakteri hidup dalam waktu singkat.

### Panduan Interval Waktu yang Aman:
- **Jeda Sebelum Aplikasi BIO7**: Berikan jeda waktu minimal **7 hari** setelah lahan disemprot herbisida sebelum mengaplikasikan BIO7. Hal ini memastikan residu herbisida pada permukaan tanah telah terdegradasi sebagian.
- **Pembersihan Tangki Semprot**: Cuci bersih tangki semprot dari sisa residu herbisida dengan air mengalir dan sabun sebelum digunakan untuk menyemprotkan BIO7.
- **Waktu Penyemprotan Terbaik**: Semprotkan larutan BIO7 pada pagi hari (sebelum pukul 09.30) atau sore hari (setelah pukul 15.30) agar mikroba tidak terpapar radiasi sinar ultraviolet matahari secara berlebih.','Panduan Aplikasi',1,1788592926399,1788592926399);
INSERT INTO "Post" VALUES('cmto366cv00009y0fcmt8omk0','ciri-ciri-tanah-sehat-vs-tanah-rusak-kimia','Ciri-Ciri Tanah Sehat vs Tanah Rusak Akibat Residu Kimia','Kenali indikator fisik, kimia, dan biologis tanah sawah Anda: membedakan tanah yang masih hidup dengan tanah yang telah mengalami pemadatan dan kejenuhan kimia.','## Mengapa Kita Perlu Menilai Kesehatan Tanah?

Banyak petani mengeluhkan hasil panen yang stagnan atau bahkan menurun meskipun dosis pupuk NPK terus ditingkatkan setiap musim. Fenomena ini dikenal sebagai *soil fatigue* atau kejenuhan tanah, di mana tanah telah kehilangan kemampuan biologis alaminya akibat akumulasi residu kimia.

### 1. Indikator Fisik Tanah
- **Tanah Sehat**: Struktur remah (*crumb*), gembur saat disentuh, porositas baik sehingga perakaran tanaman bebas menembus lapisan dalam, dan memiliki daya ikat air yang optimal (tanah macak-macak tidak cepat pecah-pecah saat kering).
- **Tanah Rusak Kimia**: Struktur padat, liat, membentuk lapisan piring (*hardpan*) kedap air di bawah permukaan. Saat musim kemarau tanah cepat retak keras, sedangkan saat hujan air sulit meresap ke dalam zona perakaran.

### 2. Indikator Biologis
- **Tanah Sehat**: Ditemukan aktivitas organisme tanah seperti cacing, larva serangga tanah yang menguntungkan, dan bau khas tanah humus segar (*geosmin* yang dihasilkan bakteri baik seperti *Streptomyces*).
- **Tanah Rusak Kimia**: Organisme tanah makro dan mikro menghilang. Tanah berbau asam, anyir, atau tanpa aroma biologis sama sekali.

### 3. Solusi Bioremediasi dengan BIO7
Konsorsium 6 kelompok mikroba hidup dalam BIO7 mengurai ikatan garam-garam anorganik yang mengendap di partikel tanah, melarutkan fosfat yang terkunci, dan membentuk senyawa humat yang merekatkan kembali agregat tanah menjadi gembur.

*Lakukan pengamatan sederhana di petak sawah Anda. Jika tanah mulai keras dan liat, hubungi tim agronomi PT Biotek Agro Nusantara untuk panduan rehabilitasi.*','Biologi Tanah',1,1788594813104,1788594813104);
INSERT INTO "Post" VALUES('cmto366d700019y0f3oej3iaw','cara-perbanyak-anakan-padi-secara-alami','Cara Efektif Memperbanyak Anakan Padi Produktif Secara Alami','Strategi pemupukan dini, manajemen air macak-macak, dan stimulasi fitohormon alami untuk memaksimalkan jumlah anakan produktif per rumpun.','## Kunci Produktivitas: Anakan Produktif vs Anakan Semu

Jumlah malai per hektar merupakan penentu terbesar tonase panen padi. Seringkali petani memacu pertumbuhan vegetatif dengan pupuk berlebih di usia tua, yang akhirnya hanya menghasilkan anakan semu (tidak menghasilkan bulir gabah). Pembentukan anakan produktif sebenarnya ditentukan pada fase vegetatif awal (7–25 HST).

### 3 Pilar Pembentukan Anakan Super:
1. **Perakaran Putih dan Dalam (Akar Rambut Aktif)**: Tanpa akar yang sehat, serapan hara terbatas. BIO7 merangsang pembentukan akar lateral baru berkat kandungan auksin alami (IAA) yang diproduksi bakteri penambat nitrogen.
2. **Pengaturan Air Macak-Macak**: Pada fase pembentukan anakan (10–25 HST), jangan menggenangi sawah terlalu dalam (cukup macak-macak 1–2 cm). Genangan air yang terlalu tinggi menghalangi sinar matahari dan udara mencapai titik tumbuh anakan baru di dasar batang.
3. **Ketersediaan Fosfor & Fitohormon**: Bakteri pelarut fosfat dalam BIO7 memobilisasi unsur P yang esensial untuk pembelahan sel dan pembentukan ruas anakan baru.

### Jadwal Semprot Protokol A:
- **7 HST**: Penyemprotan pertama BIO7 (dosis 1–2 tutup botol per tangki 16L).
- **14 HST**: Penyemprotan kedua untuk mendorong percepatan anakan sekunder.
- **21 HST**: Penyemprotan ketiga untuk mengunci anakan menjadi anakan produktif yang kokoh dan seragam.

*Dengan protokol ini, kasus di Karawang mencatat peningkatan anakan aktif dari rata-rata 18 batang menjadi 32–40 batang per rumpun.*','Padi & Pertanian',1,1788594813115,1788594813115);
INSERT INTO "Post" VALUES('cmto366df00029y0f6r9k5mnd','pupuk-hayati-untuk-sawit-apa-yang-perlu-diketahui','Aplikasi Pupuk Hayati untuk Kelapa Sawit: Panduan dan Manfaat','Bagaimana konsorsium mikroba tanah membantu perkebunan kelapa sawit meningkatkan efisiensi serapan pupuk kimia dan menekan serangan Ganoderma.','## Efisiensi Pupuk dan Kesehatan Tanah Perkebunan Sawit

Biaya pemupukan menyerap hingga 50–60% dari total biaya operasional perkebunan kelapa sawit. Namun, efisiensi penyerapan pupuk kimia di piringan sawit sering kali hanya mencapai 30–40% karena penguapan, pencucian (*leaching*), dan fiksasi oleh tanah masam mineral atau gambut.

### Peran Konsorsium Mikroba BIO7 pada Sawit:
1. **Memaksimalkan Penyerapan Pupuk di Piringan**: Bakteri pelarut fosfat dan penambat nitrogen mengaktifkan kembali zona perakaran di sekitar piringan kelapa sawit, sehingga dosis pupuk kimia sintetis dapat dihemat tanpa mengurangi bobot tandan buah segar (TBS).
2. **Penekanan Patogen Jamur Busuk Pangkal Batang (*Ganoderma*)**: Keberadaan mikroba antagonis alami seperti *Streptomyces sp.* dan *Bacillus sp.* membentuk koloni pelindung di sekitar akar kelapa sawit yang secara aktif mensekresikan antibiotik alami penghambat hifa jamur patogen.
3. **Aplikasi pada Bibitan (Nursery)**: Penyiraman BIO7 pada bibit main nursery mempercepat pembentukan pelepah kokoh dan sistem perakaran kompak sebelum dipindahkan ke lapangan (*planting*).

### Petunjuk Aplikasi Piringan Sawit:
- Larutkan 100 ml BIO7 per tangki semprot (atau konsentrasi 1:200).
- Siramkan/semprotkan merata di area piringan sawit (radius 1,5–2 meter dari pangkal batang) dengan kondisi tanah lembap.

*Konsultasikan kebutuhan volume dan jadwal aplikasi perkebunan sawit rakyat maupun korporasi bersama PT Biotek Agro Nusantara.*','Perkebunan',1,1788594813124,1788594813124);
INSERT INTO "Post" VALUES('cmto366do00039y0fixbbk0s0','probiotik-untuk-ayam-broiler-cara-kerja-dan-dosis','Aplikasi Probiotik Mikroba pada Ayam Broiler: Dosis dan Efisiensi Pakan','Optimalisasi FCR (Feed Conversion Ratio), penurunan mortalitas, dan kontrol bau amonia kandang melalui aplikasi probiotik mikroba terpadu.','## Menjaga Kesehatan Saluran Cerna Tanpa AGP (Antibiotic Growth Promoters)

Sejak dilarangnya penggunaan antibiotik pemacu pertumbuhan dalam pakan ternak, peternak ayam broiler dituntut mencari alternatif biologis yang aman untuk mempertahankan performa indeks prestasi (IP) dan efisiensi konversi pakan (FCR).

### 3 Manfaat Utama BIO7 di Peternakan Broiler:
1. **Air Minum Probiotik**: Bakteri menguntungkan seperti *Lactobacillus* dan *Bacillus* menyeimbangkan mikroflora usus ayam, meningkatkan penyerapan protein pakan, dan memperkuat vili-vili usus dari serangan *Salmonella* dan *E. coli*.
2. **Fermentasi Pakan**: Meningkatkan kecernaan bahan pakan lokal, memecah serat kasar menjadi asam amino yang mudah diserap tubuh ternak.
3. **Semprot Sanitasi Kandang (Penekan Amonia)**: Penyemprotan larutan mikroba pada sekam/litter kandang mengurai gas amonia (NH3) dan hidrogen sulfida, menciptakan sirkulasi udara bersih yang mencegah penyakit pernapasan (CRD/ngorok).

### Dosis yang Dianjurkan:
- **Air Minum**: 1–2 ml BIO7 per 10 liter air minum (diberikan pada pagi atau sore hari, pastikan air bebas kaporit).
- **Semprot Kandang**: 100 ml BIO7 per tangki 16L, disemprotkan tipis pada sekam kandang 2–3 hari sekali untuk mengendalikan lalat dan bau amonia.

*Didukung hasil uji bebas Salmonella & E. coli terverifikasi laboratorium.*','Peternakan',1,1788594813133,1788594813133);
INSERT INTO "Post" VALUES('cmto366dy00049y0fcf9l6rn1','gejala-klowor-pada-padi-dan-penanganannya','Mengenal Gejala Klowor pada Padi dan Protokol Tanggap Darurat','Identifikasi busuk leher, pembusukan pelepah, dan cara penanganan darurat di lahan sawah dengan kombinasi bioaktivator konsorsium.','## Ancaman Klowor di Musim Penghujan

Istilah lokal "Klowor" merujuk pada kondisi pembusukan batang dan pelepah bagian bawah tanaman padi yang disertai aroma tidak sedap, sering kali disebabkan oleh infeksi bakteri *Xanthomonas oryzae* dan jamur *Rhizoctonia solani* yang merebak saat kelembapan udara sangat tinggi dan drainase sawah buruk.

### Ciri Khas Serangan Klowor:
- Pelepah daun terbawah tampak membusuk basah dan mudah terlepas dari ruas batang.
- Daun atas layu lunglai (*lodging*) meskipun air sawah melimpah.
- Ruas batang bawah berlendir dan jika dipotong melintang mengeluarkan lendir bakteri (*bacterial ooze*).

### Protokol Tanggap Darurat Sapu Jagat BIO7:
1. **Keringkan Lahan Segera**: Buang air genangan di sawah hingga kondisi tanah macak-macak atau kering angin. Genangan air hangat adalah media penyebaran bakteri tercepat dari satu rumpun ke rumpun lain.
2. **Aplikasi Dosis Sapu Jagat**: Semprotkan BIO7 dengan konsentrasi tinggi (3–4 tutup botol per tangki 16L) langsung diarahkan ke pangkal batang dan permukaan tanah di bawah tajuk.
3. **Peran Bakteri Antagonis**: Konsorsium *Streptomyces* memproduksi metabolit antimikroba alami yang mematikan koloni patogen klowor tanpa meninggalkan residu racun kimia berbahaya bagi tanah.

*Jangan biarkan klowor menyebar ke seluruh petak sawah. Konsultasikan foto kondisi gejala di lapangan langsung ke nomor WhatsApp resmi kami.*','Padi & Pertanian',1,1788594813142,1788594813142);
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");