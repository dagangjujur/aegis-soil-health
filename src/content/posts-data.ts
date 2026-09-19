export interface StaticPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export const ALL_POSTS: StaticPost[] = [
  {
    id: "post-bioremediasi-residu",
    slug: "bioremediasi-residu-pestisida-dan-kimia-di-lahan-sawah",
    title: "Bioremediasi Residu Pestisida & Kimia Anorganik di Lahan Sawah",
    summary: "Strategi pemulihan tanah sawah yang jenuh bahan kimia dan residu pestisida sintetis melalui inokulasi konsorsium mikroba pengurai hidrokarbon dan bioremediator.",
    category: "Biologi Tanah",
    createdAt: "2026-03-10T08:00:00.000Z",
    updatedAt: "2026-03-10T08:00:00.000Z",
    content: `## Krisis Residu Kimia di Sentra Padi Nasional

Penggunaan pestisida anorganik, insektisida sistemik, dan pupuk kimia sintetis berkepanjangan selama lebih dari tiga dasawarsa telah meninggalkan residu persisten pada lapisan tanah olah sawah. Akumulasi senyawa organoklorin, organofosfat, dan ion logam berat tidak hanya memadatkan pori-pori tanah, tetapi juga memusnahkan mikrobioma indigenus yang berfungsi mengurai bahan organik.

### Mekanisme Bioremediasi Alami Konsorsium BIO7
Bioremediasi adalah proses percepatan pembersihan tanah tercemar menggunakan aktivitas biologis mikroorganisme spesifik:
1. **Dekomposisi Enzimatik**: Spesies *Pseudomonas* dan *Bacillus* dalam konsorsium memproduksi enzim oksigenase dan hidrolase yang memutus rantai karbon kompleks molekul pestisida, mengubahnya menjadi senyawa yang tidak beracun (karbon dioksida, air, dan asam organik sederhana).
2. **Khelasi Ion Logam Berat**: Asam amino dan eksopolisakarida yang disekresikan bakteri mengikat kelebihan ion besi (Fe) dan aluminium (Al) bebas, mencegah keracunan asam pada akar tanaman padi.
3. **Restorasi Populasi Mikroba Aerob**: Mempercepat kembalinya cacing tanah dan mikroba dekomposer alami yang menciptakan struktur tanah gembur dan berpori.

### Protokol Aplikasi Bioremediasi Tanah Sawah:
- **Fase Olah Tanah I (Singkal/Bajak Kasar)**: Genangi sawah setinggi 3–5 cm, lalu siramkan/semprotkan larutan BIO7 dengan dosis 2–3 liter per hektar secara merata ke permukaan lumpur.
- **Masa Inkubasi (Pemeraman)**: Biarkan lahan tergenang macak-macak selama 5–7 hari agar mikroba aktif mendegradasi serasah jerami serta mengurai sisa residu pestisida musim tanam sebelumnya.
- **Pengolahan Akhir (Garu/Rataan)**: Lahan siap ditanami bibit padi dengan kondisi keasaman tanah ternetralkan (pH naik mendekati netral 6,2–6,8).

*Hasil uji laboratorium menunjukkan penurunan kadar residu pestisida aktif hingga 45–60% dalam 30 hari pasca inokulasi BIO7.*`,
  },
  {
    id: "post-silika-kitinolitik",
    slug: "peran-silika-bioaktif-dan-mikroba-kitinolitik-menekan-sundep-rebah",
    title: "Peran Silika Bioaktif dan Mikroba Kitinolitik Menekan Sundep & Rebah",
    summary: "Kombinasi mekanik dan biologis untuk mempertebal dinding sel batang padi, menghalangi gigitan larva penggerek batang (sundep), dan mencegah padi roboh.",
    category: "Perlindungan Tanaman",
    createdAt: "2026-03-09T08:00:00.000Z",
    updatedAt: "2026-03-09T08:00:00.000Z",
    content: `## Sinergi Pertahanan Dinding Sel & Enzim Kitinase

Serangan penggerek batang padi (*Scirpophaga incertulas*) atau yang populer dikenal sebagai hama sundep (pada fase vegetatif) dan beluk (pada fase generatif) merupakan momok paling merusak bagi petani padi. Penggunaan insektisida kimia sering kali gagal menembus bagian dalam batang tempat larva bersembunyi.

### Mekanisme Pertahanan Ganda:
1. **Biosilikatisasi Jaringan Batang**: Serapan silika bioaktif yang dioptimalkan oleh pelarutan mikroba rizosfer didepositkan pada epidermis daun dan dinding sel batang tanaman. Hal ini membentuk lapisan kristal fitolit silika yang sangat keras, sehingga membuat mandibel (rahang) larva sundep aus dan gagal mengebor batang padi.
2. **Aktivitas Kitinolitik *Streptomyces sp.***: Strain aktinomisetes unggul dalam BIO7 memproduksi enzim kitinase ekstraseluler. Enzim ini secara spesifik melarutkan lapisan kitin yang menyusun cangkang telur hama serangga dan dinding sel hifa jamur patogen seperti *Pyricularia oryzae* (blas).
3. **Ketahanan Batang Terhadap Angin Kencang (Anti-Rebah)**: Dinding sel yang diperkuat lignin dan silika menjadikan rumpun padi berdiri tegak dan kokoh, mampu menopang bobot malai lebat di musim hujan tanpa risiko roboh sebelum panen.

### Rekomendasi Waktu Aplikasi:
- **Aplikasi 14 HST & 21 HST**: Semprotkan BIO7 dengan dosis 1–2 tutup botol (20–30 ml) per tangki 16L. Pastikan nosel semprot diarahkan merata ke kanopi dan pangkal batang.
- **Hindari Kelebihan Urea**: Jangan menabur pupuk nitrogen murni (Urea) berlebihan karena akan membuat sel batang berair (sukulen) dan mudah ditembus hama.`,
  },
  {
    id: "post-tanah-masam-masif",
    slug: "manajemen-mikroba-rizosfer-pada-tanah-masam-masif",
    title: "Manajemen Mikroba Rizosfer pada Tanah Masam Masif",
    summary: "Teknik pemulihan tanah dengan tingkat keasaman ekstrem (pH < 4.5), fiksasi fosfat tinggi, dan mitigasi toksisitas aluminium pada sentra pertanian pasang surut.",
    category: "Biologi Tanah",
    createdAt: "2026-03-08T08:00:00.000Z",
    updatedAt: "2026-03-08T08:00:00.000Z",
    content: `## Tantangan Tanah Masam Masif di Lahan Marjinal

Di berbagai sentra pertanian luar Jawa seperti Sumatera, Kalimantan, dan sebagian Jawa Barat bagian selatan, lahan sawah dan ladang kerap didominasi oleh tanah Ultisol atau tanah gambut pasang surut dengan pH sangat rendah (antara 3,8 hingga 4,5). Kondisi ini menyebabkan tanaman keracunan ion Al³⁺ dan Fe²⁺, sementara pupuk fosfat yang ditebarkan 90% menjadi tidak berguna karena langsung terikat mati.

### Solusi Ekosistem Rizosfer Berbasis BIO7:
- **Bakteri Penambat Nitrogen Tahan Asam**: Menghasilkan senyawa metabolit penetral keasaman lokal di sekitar bulu-bulu akar (lingkungan mikro rizosfer), sehingga akar tetap dapat bernapas dan menyerap air.
- **Kelarutan Ortofosfat**: Mikroba merilis asam sitrat, malat, dan tartarat yang mengusir ion fosfat yang terperangkap oleh aluminium dan besi, sehingga pupuk P yang telah tertimbun bertahun-tahun di dalam tanah kembali cair dan dapat diserap tanaman.
- **Perangsangan Hormon Perakaran (Auksin Alami)**: Memicu pemanjangan akar menembus lapisan tanah keras tanpa mengalami nekrosis (ujung akar busuk).

### Langkah Implementasi Lapangan:
1. Taburkan dolomit atau kapur pertanian 1–2 minggu sebelum pengolahan tanah apabila pH di bawah 4,0.
2. Saat pematangan tanah, semprotkan BIO7 dosis 200 ml per tangki kocor ke tanah basah untuk mengaktifkan bakteri pereduksi keasaman.
3. Jaga kelembapan tanah tetap optimal; hindari pengeringan ekstrem yang dapat memicu oksidasi pirit (senyawa pemicu asam belerang).`,
  },
  {
    id: "post-serapan-npk-pelarut-fosfat",
    slug: "peningkatan-serapan-pupuk-npk-makro-lewat-konsorsium-pelarut-fosfat",
    title: "Peningkatan Serapan Pupuk NPK Makro Lewat Konsorsium Pelarut Fosfat",
    summary: "Efisiensi biaya pemupukan kimia hingga 30-40% dengan memanfaatkan mikroorganisme pelarut fosfat dan penambat nitrogen nonsimbiotik.",
    category: "Teknis Budidaya",
    createdAt: "2026-03-07T08:00:00.000Z",
    updatedAt: "2026-03-07T08:00:00.000Z",
    content: `## Dilema Kenaikan Harga Pupuk Kimia & Solusi Biologis

Kenaikan harga pupuk kimia NPK (Nitrogen, Fosfat, Kalium) menuntut strategi budidaya yang lebih efisien dan cerdas. Sebagian besar pupuk anorganik yang disebarkan petani ke sawah mengalami kerugian besar: Nitrogen hilang menguap menjadi amonia atau tercuci air, sedangkan Fosfat terfiksasi dalam tanah hingga tidak larut.

### Bagaimana Mikroba BIO7 Menghemat 30–40% Pupuk Kimia?
1. **Fiksasi Nitrogen Bebas dari Udara**: Bakteri penambat nitrogen nonsimbiotik (*Azotobacter* dan *Azospirillum*) mampu menangkap gas N₂ bebas dari atmosfer dan mengubahnya menjadi bentuk amonium (NH₄⁺) yang langsung tersedia bagi akar padi, setara dengan penghematan 25–50 kg Urea per hektar.
2. **Pelepasan Fosfat Terikat**: Kandungan mikroba pelarut fosfat memproduksi asam organik yang melarutkan senyawa kalsium-fosfat dan aluminium-fosfat di dalam tanah, meningkatkan ketersediaan P tersedia sebesar 35–50%.
3. **Penyaluran Kalium Aktif**: Membantu translokasi ion K⁺ untuk pematangan bulir gabah dan pembentukan pati buah yang berbobot penuh.

### Contoh Formulasi Pengurangan Pupuk di Lapangan:
- **Dosis Standar Kimia Penuh**: 300 kg NPK + 200 kg Urea per Ha.
- **Rekomendasi Protokol BIO7**: 180 kg NPK + 120 kg Urea per Ha dipadukan dengan 4–5 liter BIO7 per musim tanam.
- **Hasil Panen**: Hasil tonase gabah tetap meningkat +20% hingga +40%, sementara biaya input pupuk kimia terpangkas signifikan dan struktur kesuburan tanah tetap terjaga.`,
  },
  {
    id: "post-probiotik-peternakan-tanpa-agp",
    slug: "strategi-probiotik-peternakan-tanpa-ketergantungan-antibiotik-agp",
    title: "Strategi Probiotik Peternakan Tanpa Ketergantungan Antibiotik (AGP)",
    summary: "Aplikasi mikroba probiotik asam laktat dan kultur Bacillus untuk menekan FCR, meningkatkan bobot karkas, dan menjaga kesehatan saluran cerna ternak ruminansia serta unggas.",
    category: "Peternakan",
    createdAt: "2026-03-06T08:00:00.000Z",
    updatedAt: "2026-03-06T08:00:00.000Z",
    content: `## Menjawab Regulasi Bebas Antibiotik Pemacu Pertumbuhan

Sejak dilarangnya penggunaan Antibiotic Growth Promoters (AGP) oleh pemerintah melalui Permentan No. 14/2017, industri peternakan unggas dan ruminansia menghadapi tantangan mortalitas ternak serta penurunan efisiensi pakan. Solusi paling berkelanjutan adalah manipulasi mikrobioma saluran cerna ternak secara biologis.

### Peran Kritis Probiotik Alami BIO7:
- **Prinsip *Competitive Exclusion***: Bakteri probiotik menguntungkan (*Lactobacillus sp.* dan *Bacillus subtilis*) berkolonisasi pada dinding epitel usus ternak, menutup ruang penempelan bakteri patogen seperti *Salmonella enterica*, *E. coli*, dan *Clostridium perfringens*.
- **Peningkatan Enzim Pencernaan Endogen**: Menstimulasi produksi enzim protease, amilase, dan selulase di dalam rumen ternak ruminansia serta lambung unggas, sehingga zat gizi pakan tercerna maksimal menjadi daging dan telur.
- **Sanitasi Kotoran & Pengendalian Gas Beracun**: Menurunkan pembentukan gas amonia (NH₃) dan hidrogen sulfida pada feses, mencegah iritasi pernapasan pada ayam broiler serta menurunkan populasi lalat kandang.

### Panduan Dosis Ternak:
- **Campuran Air Minum**: 1–2 ml BIO7 per liter air minum (diberikan rutin setiap hari, hindari air berkaporit tinggi).
- **Fermentasi Ransum Konsentrat**: Larutkan 100 ml BIO7 + 50 g gula/molase ke dalam 10 liter air untuk membasahi 100 kg pakan konsentrat sebelum diperam selama 24–48 jam.`,
  },
  {
    id: "post-hortikultura-cabai-tomat",
    slug: "protokol-hortikultura-cabai-dan-tomat-berbasis-keseimbangan-biologis",
    title: "Protokol Hortikultura Cabai & Tomat Berbasis Keseimbangan Biologis",
    summary: "Panduan teknis pencegahan layu fusarium, busuk buah antraknosa, dan optimalisasi bobot panen hortikultura dengan proteksi mikroba tanah aktif.",
    category: "Hortikultura",
    createdAt: "2026-03-05T08:00:00.000Z",
    updatedAt: "2026-03-05T08:00:00.000Z",
    content: `## Menghadapi Cekaman Patogen Tanah pada Sayuran Hortikultura

Budidaya tanaman bernilai tinggi seperti cabai rawit, cabai keriting, dan tomat sering kali mengalami kerugian fatal akibat penyakit layu fusarium (*Fusarium oxysporum*), layu bakteri (*Ralstonia solanacearum*), dan antraknosa (patek). Penanganan menggunakan fungisida kimia sistemik dosis tinggi sering memicu resistensi patogen dan merusak perakaran tanaman.

### Konsep Imunitas Biologis Tanaman dengan BIO7:
1. **Proteksi Zona Perakaran (Rizobakteri Antagonis)**: Mikroba *Streptomyces* memproduksi metabolit biofungisida alami yang menciptakan zona steril di sekitar akar bibit, membentengi titik masuk jamur fusarium.
2. **Induksi Ketahanan Sistemik Tanaman (ISR)**: Kolonisasi mikroba merangsang tanaman memproduksi fitohormon ketahanan dan fitoaleksin, sehingga tanaman lebih tahan terhadap perubahan cuaca ekstrem dan serangan jamur daun.
3. **Kualitas Buah & Masa Simpan**: Peningkatan serapan kalsium (Ca) dan silika terlarut membuat kulit buah cabai dan tomat lebih tebal, tidak mudah busuk saat transportasi ke pasar.

### Jadwal Aplikasi Praktis pada Lahan Bedengan:
- **Pengocoran Lubang Tanam**: 3–5 hari sebelum pindah tanam (*transplanting*), kocor lubang tanam dengan larutan BIO7 dosis 1 tutup botol (15 ml) per 5 liter air.
- **Pemeliharaan Berkala**: Kocor pangkal batang setiap 10–14 hari sekali bersamaan dengan pupuk susulan NPK cair.
- **Penyemprotan Daun**: Semprot kabut pada daun dan cabang setiap 7 hari sekali saat pagi hari untuk mencegah kerontokan bunga dan mempercepat pembentukan calon buah.`,
  },
  {
    id: "post-cara-atasi-tanah-asam-pada-padi",
    slug: "cara-atasi-tanah-asam-pada-padi",
    title: "Cara Mengatasi Tanah Asam pada Tanaman Padi",
    summary: "Panduan teknis bioremediasi tanah masam akibat residu pupuk kimia jangka panjang menggunakan bioaktivator konsorsium mikroba.",
    category: "Padi & Pertanian",
    createdAt: "2026-03-04T08:00:00.000Z",
    updatedAt: "2026-03-04T08:00:00.000Z",
    content: `## Mengapa Tanah Sawah Menjadi Masam?

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

*Untuk konsultasi protokol tanah masam spesifik di wilayah Anda, hubungi tim agronomi PT Biotek Agro Nusantara via WhatsApp.*`,
  },
  {
    id: "post-ciri-ciri-tanah-sehat-vs-rusak",
    slug: "ciri-ciri-tanah-sehat-vs-tanah-rusak-kimia",
    title: "Ciri-Ciri Tanah Sehat vs Tanah Rusak Akibat Residu Kimia",
    summary: "Kenali indikator fisik, kimia, dan biologis tanah sawah Anda: membedakan tanah yang masih hidup dengan tanah yang telah mengalami pemadatan dan kejenuhan kimia.",
    category: "Biologi Tanah",
    createdAt: "2026-03-03T08:00:00.000Z",
    updatedAt: "2026-03-03T08:00:00.000Z",
    content: `## Mengapa Penting Memahami Kesehatan Tanah Anda?

Tanah bukan sekadar media tanam mati tempat berdirinya batang padi atau sayuran. Tanah adalah ekosistem hidup yang menampung miliaran mikroorganisme yang bertugas mengolah nutrisi tanaman. Bertahun-tahun pemupukan kimia tanpa asupan bahan organik membuat tanah pertanian di Indonesia mengalami degradasi parah.

### Ciri-Ciri Tanah Rusak (Mati Biologis):
1. **Fisik**: Tanah cepat mengeras dan merekah pecah-pecah saat kering, terasa liat dan kedap air saat basah, tidak berongga.
2. **Kimia**: pH tanah rendah (< 5.0), tanah asam, dosis pupuk kimia harus dinaikkan setiap musim agar panen tidak anjlok.
3. **Biologis**: Tidak ditemukan cacing tanah, belut, maupun mikroflora pengurai; jerami padi dari musim sebelumnya tidak kunjung membusuk.

### Ciri-Ciri Tanah Sehat (Hidup & Aktif):
1. **Fisik**: Struktur remah, gembur, mudah dibajak, aerasi dan sirkulasi air berjalan sangat baik.
2. **Kimia**: pH seimbang (6.0–6.8), ketersediaan unsur hara makro (N, P, K) dan mikro seimbang secara alami.
3. **Biologis**: Kaya akan cacing tanah dan mikrobioma bermanfaat; dekomposisi bahan organik berjalan cepat.

*BIO7 mengembalikan jutaan mikroba penambat N dan pelarut P untuk mengembalikan kehidupan tanah Anda.*`,
  },
  {
    id: "post-mengapa-urea-dilarang-30hst",
    slug: "mengapa-urea-dilarang-setelah-30-hst",
    title: "Mengapa Pemberian Urea Harus Dibatasi Setelah 30 HST?",
    summary: "Penjelasan fisiologis metabolisme tanaman padi: risiko kelebihan nitrogen setelah 30 HST terhadap serangan sundep, blast, dan rebah batang.",
    category: "Teknis Budidaya",
    createdAt: "2026-03-02T08:00:00.000Z",
    updatedAt: "2026-03-02T08:00:00.000Z",
    content: `## Batas Kritis Aplikasi Pupuk Nitrogen (Urea)

Salah satu kesalahan paling umum dalam budidaya padi adalah kebiasaan menaburkan pupuk Urea hingga umur 40 atau 50 HST dengan harapan daun tetap hijau pekat. Namun, secara fisiologis, pemberian nitrogen berlebih setelah masa anakan maksimum (melewati 30 HST) justru menimbulkan kerugian fatal.

### Dampak Buruk Kelebihan Urea Setelah 30 HST:
1. **Dinding Sel Menjadi Lunak dan Sukulen**: Tanaman menjadi empuk dan berair, menjadi sasaran empuk hama sundep (*Scirpophaga incertulas*) dan wereng batang cokelat.
2. **Ledakan Jamur dan Bakteri**: Penyakit blas daun/leher (*Pyricularia oryzae*) serta hawar daun bakteri berkembang pesat pada jaringan tanaman yang jenuh nitrogen.
3. **Padi Rebah Sebelum Panen**: Ruas batang memanjang terlalu cepat tanpa pembentukan lignin dan silika yang cukup, mengakibatkan padi roboh saat malai mulai berisi.

### Rekomendasi Pemupukan Berimbang BIO7
Pada fase setelah 30 HST, tanaman padi tidak lagi membutuhkan percepatan daun vegetatif, melainkan pematangan primordia dan pengisian malai:
- **Hentikan Urea**: Alihkan fokus nutrisi ke Kalium, Fosfat terlarut, dan mikronutrien pembobot bulir.
- **Kombinasi BIO7**: Mikroba *Streptomyces* dan *Bacillus* dalam BIO7 memproduksi enzim kitinase yang mempertebal dinding sel tanaman sekaligus merangsang translokasi pati ke bulir padi tanpa membuat tanaman rentan roboh.`,
  },
  {
    id: "post-sawit-panduan",
    slug: "pupuk-hayati-untuk-sawit-apa-yang-perlu-diketahui",
    title: "Aplikasi Pupuk Hayati untuk Kelapa Sawit: Panduan dan Manfaat",
    summary: "Bagaimana konsorsium mikroba tanah membantu perkebunan kelapa sawit meningkatkan efisiensi serapan pupuk kimia dan menekan serangan Ganoderma.",
    category: "Perkebunan",
    createdAt: "2026-03-01T08:00:00.000Z",
    updatedAt: "2026-03-01T08:00:00.000Z",
    content: `## Efisiensi Pupuk dan Kesehatan Tanah Perkebunan Sawit

Biaya pemupukan menyerap hingga 50–60% dari total biaya operasional perkebunan kelapa sawit. Namun, efisiensi penyerapan pupuk kimia di piringan sawit sering kali hanya mencapai 30–40% karena penguapan, pencucian (*leaching*), dan fiksasi oleh tanah masam mineral atau gambut.

### Peran Konsorsium Mikroba BIO7 pada Sawit:
1. **Memaksimalkan Penyerapan Pupuk di Piringan**: Bakteri pelarut fosfat dan penambat nitrogen mengaktifkan kembali zona perakaran di sekitar piringan kelapa sawit, sehingga dosis pupuk kimia sintetis dapat dihemat tanpa mengurangi bobot tandan buah segar (TBS).
2. **Penekanan Patogen Jamur Busuk Pangkal Batang (*Ganoderma*)**: Keberadaan mikroba antagonis alami seperti *Streptomyces sp.* dan *Bacillus sp.* membentuk koloni pelindung di sekitar akar kelapa sawit yang secara aktif mensekresikan antibiotik alami penghambat hifa jamur patogen.
3. **Aplikasi pada Bibitan (Nursery)**: Penyiraman BIO7 pada bibit main nursery mempercepat pembentukan pelepah kokoh dan sistem perakaran kompak sebelum dipindahkan ke lapangan (*planting*).

### Petunjuk Aplikasi Piringan Sawit:
- Larutkan 100 ml BIO7 per tangki semprot (atau konsentrasi 1:200).
- Siramkan/semprotkan merata di area piringan sawit (radius 1,5–2 meter dari pangkal batang) dengan kondisi tanah lembap.

*Konsultasikan kebutuhan volume dan jadwal aplikasi perkebunan sawit rakyat maupun korporasi bersama PT Biotek Agro Nusantara.*`,
  },
];
