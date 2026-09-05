import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { verifyAdminSession } from '@/lib/auth'

// GET: Publik (diambil oleh Homepage dan Admin)
export async function GET() {
  try {
    const partners = await db.partner.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    })
    return NextResponse.json(partners)
  } catch (error) {
    console.error('Fetch partners error:', error)
    return NextResponse.json({ error: 'Gagal memuat partner' }, { status: 500 })
  }
}

// POST: Tambah partner baru (Khusus Admin)
export async function POST(req: Request) {
  try {
    const isAuthenticated = await verifyAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Akses ditolak' }, { status: 401 })
    }

    const body = await req.json()
    const { name, logoUrl, websiteUrl, order } = body

    if (!name || !logoUrl || !websiteUrl) {
      return NextResponse.json(
        { error: 'Nama perusahaan, URL logo, dan tautan website wajib diisi' },
        { status: 400 }
      )
    }

    const partner = await db.partner.create({
      data: {
        name: name.trim(),
        logoUrl: logoUrl.trim(),
        websiteUrl: websiteUrl.trim(),
        order: Number(order) || 0,
      },
    })

    return NextResponse.json(partner)
  } catch (error) {
    console.error('Create partner error:', error)
    return NextResponse.json({ error: 'Gagal membuat partner' }, { status: 500 })
  }
}

// PUT: Edit partner (Khusus Admin)
export async function PUT(req: Request) {
  try {
    const isAuthenticated = await verifyAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Akses ditolak' }, { status: 401 })
    }

    const body = await req.json()
    const { id, name, logoUrl, websiteUrl, order } = body

    if (!id || !name || !logoUrl || !websiteUrl) {
      return NextResponse.json(
        { error: 'Data tidak lengkap' },
        { status: 400 }
      )
    }

    const updated = await db.partner.update({
      where: { id },
      data: {
        name: name.trim(),
        logoUrl: logoUrl.trim(),
        websiteUrl: websiteUrl.trim(),
        order: Number(order) || 0,
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Update partner error:', error)
    return NextResponse.json({ error: 'Gagal memperbarui partner' }, { status: 500 })
  }
}

// DELETE: Hapus partner (Khusus Admin)
export async function DELETE(req: Request) {
  try {
    const isAuthenticated = await verifyAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Akses ditolak' }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID partner diperlukan' }, { status: 400 })
    }

    await db.partner.delete({
      where: { id },
    })

    return NextResponse.json({ success: true, message: 'Partner berhasil dihapus' })
  } catch (error) {
    console.error('Delete partner error:', error)
    return NextResponse.json({ error: 'Gagal menghapus partner' }, { status: 500 })
  }
}
