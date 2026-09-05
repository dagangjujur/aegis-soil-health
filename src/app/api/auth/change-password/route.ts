import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hashPassword, verifyAdminSession } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const isAuthenticated = await verifyAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Akses ditolak. Silakan login terlebih dahulu.' }, { status: 401 })
    }

    const body = await req.json()
    const { oldPassword, newPassword } = body

    if (!oldPassword || !newPassword) {
      return NextResponse.json({ error: 'Password lama dan baru wajib diisi' }, { status: 400 })
    }

    if (newPassword.length < 6) {
      return NextResponse.json({ error: 'Password baru minimal 6 karakter' }, { status: 400 })
    }

    const admin = await db.admin.findFirst()
    if (!admin) {
      return NextResponse.json({ error: 'Admin tidak ditemukan' }, { status: 500 })
    }

    const hashedOld = await hashPassword(oldPassword)
    if (hashedOld !== admin.passwordHash) {
      return NextResponse.json({ error: 'Password lama tidak sesuai' }, { status: 400 })
    }

    const hashedNew = await hashPassword(newPassword)
    await db.admin.update({
      where: { id: admin.id },
      data: { passwordHash: hashedNew },
    })

    return NextResponse.json({ success: true, message: 'Password berhasil diubah' })
  } catch (error) {
    console.error('Change password error:', error)
    return NextResponse.json({ error: 'Terjadi kesalahan sistem' }, { status: 500 })
  }
}
