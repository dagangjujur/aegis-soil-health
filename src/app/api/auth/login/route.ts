import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hashPassword, setAdminSession } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { password } = body

    if (!password) {
      return NextResponse.json({ error: 'Password wajib diisi' }, { status: 400 })
    }

    const admin = await db.admin.findFirst()
    if (!admin) {
      return NextResponse.json({ error: 'Data admin belum diinisialisasi' }, { status: 500 })
    }

    const hashedInput = await hashPassword(password)

    if (hashedInput !== admin.passwordHash) {
      return NextResponse.json({ error: 'Password salah' }, { status: 401 })
    }

    await setAdminSession()

    return NextResponse.json({ success: true, message: 'Login berhasil' })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Terjadi kesalahan sistem' }, { status: 500 })
  }
}
