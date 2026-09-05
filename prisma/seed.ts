import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'

const prisma = new PrismaClient()

function hashPassword(password: string): string {
  const salt = 'biotek_agro_nusantara_salt_key'
  return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
}

async function main() {
  console.log('Seeding database...')

  // 1. Admin Initial Password
  const initialPassword = '@Margaluyu32'
  const passwordHash = hashPassword(initialPassword)

  const existingAdmin = await prisma.admin.findFirst()
  if (!existingAdmin) {
    await prisma.admin.create({
      data: {
        passwordHash,
      },
    })
    console.log('Admin created with initial password.')
  } else {
    console.log('Admin already exists.')
  }

  // 2. Initial Partners
  const existingPartners = await prisma.partner.count()
  if (existingPartners === 0) {
    await prisma.partner.createMany({
      data: [
        {
          name: 'Gabungan Kelompok Tani (Gapoktan) Karawang',
          logoUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=160&auto=format&fit=crop&q=80',
          websiteUrl: 'https://pertanian.go.id',
          order: 1,
        },
        {
          name: 'Koperasi Produsen Pertanian Makmur Mandiri',
          logoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=160&auto=format&fit=crop&q=80',
          websiteUrl: 'https://kemenkopukm.go.id',
          order: 2,
        },
        {
          name: 'Asosiasi Agribisnis & Hortikultura Nusantara',
          logoUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=160&auto=format&fit=crop&q=80',
          websiteUrl: 'https://aegissoilhealth.com',
          order: 3,
        },
        {
          name: 'Pusat Riset Bioteknologi Tropika Indonesia',
          logoUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=160&auto=format&fit=crop&q=80',
          websiteUrl: 'https://brin.go.id',
          order: 4,
        },
      ],
    })
    console.log('Initial partners seeded.')
  }

  // 3. Initial Blog Posts (From 20 Marketing Plan Topics)
  const existingPosts = await prisma.post.count()
  if (existingPosts === 0) {
    await prisma.post.createMany({
      data: [
        {
          slug: 'cara-atasi-tanah-asam-pada-padi',
          title: 'Cara Mengatasi Tanah Asam pada Tanaman Padi',
          summary: 'Panduan teknis bioremediasi tanah masam akibat residu pupuk kimia jangka panjang menggunakan bioaktivator konsorsium mikroba.',
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
          category: 'Padi & Pertanian',
          published: true,
        },
        {
          slug: 'mengapa-urea-dilarang-setelah-30-hst',
          title: 'Mengapa Pemberian Urea Harus Dibatasi Setelah 30 HST?',
          summary: 'Penjelasan fisiologis metabolisme tanaman padi: risiko kelebihan nitrogen setelah 30 HST terhadap serangan sundep, blast, dan rebah batang.',
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
          category: 'Teknis Budidaya',
          published: true,
        },
        {
          slug: 'jarak-aman-bio7-dengan-herbisida',
          title: 'Aturan Penting: Jarak Aman Aplikasi BIO7 dengan Herbisida',
          summary: 'Aturan baku tank-mix dan jeda waktu penyemprotan agar populasi konsorsium mikroba hidup tidak rusak oleh bahan aktif herbisida kimia.',
          content: `## Menjaga Vitalitas Konsorsium Mikroba Hidup

BIO7 adalah konsorsium mikroba hidup ultra-padat (mencapai miliaran CFU/ml). Agar mikroba menguntungkan ini dapat berkoloni dan bekerja optimal di lahan Anda, penting untuk memahami aturan interaksi kimia dalam tangki semprot (*tank-mix*).

### Larangan Mutlak: Jangan Pernah Campur Herbisida dalam Satu Tangki
BIO7 kompatibel dicampur dengan insektisida dan fungisida tertentu, namun **DILARANG KERAS** dicampur langsung dengan herbisida kimia (seperti Paraquat, Glifosat, atau herbisida selektif padi). Bahan aktif herbisida bersifat biosida kuat yang dapat mematikan kultur bakteri hidup dalam waktu singkat.

### Panduan Interval Waktu yang Aman:
- **Jeda Sebelum Aplikasi BIO7**: Berikan jeda waktu minimal **7 hari** setelah lahan disemprot herbisida sebelum mengaplikasikan BIO7. Hal ini memastikan residu herbisida pada permukaan tanah telah terdegradasi sebagian.
- **Pembersihan Tangki Semprot**: Cuci bersih tangki semprot dari sisa residu herbisida dengan air mengalir dan sabun sebelum digunakan untuk menyemprotkan BIO7.
- **Waktu Penyemprotan Terbaik**: Semprotkan larutan BIO7 pada pagi hari (sebelum pukul 09.30) atau sore hari (setelah pukul 15.30) agar mikroba tidak terpapar radiasi sinar ultraviolet matahari secara berlebih.`,
          category: 'Panduan Aplikasi',
          published: true,
        },
      ],
    })
    console.log('Initial blog posts seeded.')
  }

  console.log('Seeding finished successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
