import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { verifyAdminSession } from '@/lib/auth'

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

// GET: Ambil daftar blog (publik hanya published: true kecuali admin)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug')
    const all = searchParams.get('all') // Admin request

    if (slug) {
      const post = await db.post.findUnique({
        where: { slug },
      })
      if (!post) {
        return NextResponse.json({ error: 'Artikel tidak ditemukan' }, { status: 404 })
      }
      return NextResponse.json(post)
    }

    const isAuthenticated = await verifyAdminSession()
    const whereClause = all === 'true' && isAuthenticated ? {} : { published: true }

    const posts = await db.post.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Fetch posts error:', error)
    return NextResponse.json({ error: 'Gagal memuat artikel' }, { status: 500 })
  }
}

// POST: Buat artikel baru (Khusus Admin)
export async function POST(req: Request) {
  try {
    const isAuthenticated = await verifyAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Akses ditolak' }, { status: 401 })
    }

    const body = await req.json()
    const { title, summary, content, category, published } = body

    if (!title || !content) {
      return NextResponse.json({ error: 'Judul dan konten artikel wajib diisi' }, { status: 400 })
    }

    let slug = slugify(title)
    // Cek keunikan slug
    const existing = await db.post.findUnique({ where: { slug } })
    if (existing) {
      slug = `${slug}-${Date.now().toString().slice(-4)}`
    }

    const post = await db.post.create({
      data: {
        title: title.trim(),
        slug,
        summary: summary?.trim() || '',
        content,
        category: category?.trim() || 'Umum',
        published: published !== undefined ? Boolean(published) : true,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Create post error:', error)
    return NextResponse.json({ error: 'Gagal membuat artikel' }, { status: 500 })
  }
}

// PUT: Edit artikel (Khusus Admin)
export async function PUT(req: Request) {
  try {
    const isAuthenticated = await verifyAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Akses ditolak' }, { status: 401 })
    }

    const body = await req.json()
    const { id, title, summary, content, category, published } = body

    if (!id || !title || !content) {
      return NextResponse.json({ error: 'Data artikel tidak lengkap' }, { status: 400 })
    }

    const updated = await db.post.update({
      where: { id },
      data: {
        title: title.trim(),
        summary: summary?.trim() || '',
        content,
        category: category?.trim() || 'Umum',
        published: Boolean(published),
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Update post error:', error)
    return NextResponse.json({ error: 'Gagal memperbarui artikel' }, { status: 500 })
  }
}

// DELETE: Hapus artikel (Khusus Admin)
export async function DELETE(req: Request) {
  try {
    const isAuthenticated = await verifyAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Akses ditolak' }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID artikel diperlukan' }, { status: 400 })
    }

    await db.post.delete({
      where: { id },
    })

    return NextResponse.json({ success: true, message: 'Artikel berhasil dihapus' })
  } catch (error) {
    console.error('Delete post error:', error)
    return NextResponse.json({ error: 'Gagal menghapus artikel' }, { status: 500 })
  }
}
