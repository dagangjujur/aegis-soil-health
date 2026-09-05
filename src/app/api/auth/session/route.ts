import { NextResponse } from 'next/server'
import { clearAdminSession, verifyAdminSession } from '@/lib/auth'

export async function POST() {
  await clearAdminSession()
  return NextResponse.json({ success: true, message: 'Logout berhasil' })
}

export async function GET() {
  const isAuthenticated = await verifyAdminSession()
  return NextResponse.json({ authenticated: isAuthenticated })
}
