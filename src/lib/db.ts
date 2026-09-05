/**
 * Database client hybrid:
 * - Pada Cloudflare Pages runtime (Edge/Worker): menggunakan Cloudflare D1 Database binding (`env.DB`).
 * - Pada Local development (Node.js / Bun): menggunakan Prisma SQLite (`prisma/db/custom.db`).
 * 
 * Abstraksi ini menyediakan antarmuka kompatibel untuk:
 * - db.post (findMany, findUnique, create, update, delete)
 * - db.partner (findMany, create, update, delete)
 * - db.admin (findFirst, update)
 */

import { getCloudflareContext } from '@opennextjs/cloudflare'

// Local Prisma instance
let localPrisma: any = null

async function getPrisma() {
  if (!localPrisma) {
    const { PrismaClient } = await import('@prisma/client')
    localPrisma = new PrismaClient()
  }
  return localPrisma
}

function getD1(): any | null {
  try {
    const cf = getCloudflareContext()
    if (cf && cf.env) {
      return (cf.env as any).DB || (cf.env as any).aegis_db || null
    }
  } catch {
    // Di luar cloudflare context (misal build time lokal / node script)
  }
  return null
}

function parseDate(val: any): Date {
  if (!val) return new Date()
  if (val instanceof Date) return val
  if (typeof val === 'number') return new Date(val)
  return new Date(val)
}

export const db = {
  post: {
    async findMany(args?: { where?: { published?: boolean }; orderBy?: { createdAt?: 'asc' | 'desc' }; select?: any }) {
      const d1 = getD1()
      if (d1) {
        let sql = 'SELECT * FROM "Post"'
        const params: any[] = []

        if (args?.where?.published !== undefined) {
          sql += ' WHERE "published" = ?'
          params.push(args.where.published ? 1 : 0)
        }

        const orderDirection = args?.orderBy?.createdAt?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'
        sql += ` ORDER BY "createdAt" ${orderDirection}`

        const stmt = d1.prepare(sql).bind(...params)
        const res = await stmt.all()
        const results = (res.results || []) as any[]

        return results.map((r) => ({
          ...r,
          published: Boolean(r.published),
          createdAt: parseDate(r.createdAt),
          updatedAt: parseDate(r.updatedAt),
        }))
      }

      const p = await getPrisma()
      return p.post.findMany(args)
    },

    async findUnique(args: { where: { slug?: string; id?: string } }) {
      const d1 = getD1()
      if (d1) {
        let sql = 'SELECT * FROM "Post" WHERE '
        const params: any[] = []

        if (args.where.slug) {
          sql += '"slug" = ?'
          params.push(args.where.slug)
        } else if (args.where.id) {
          sql += '"id" = ?'
          params.push(args.where.id)
        } else {
          return null
        }

        sql += ' LIMIT 1'
        const stmt = d1.prepare(sql).bind(...params)
        const row = (await stmt.first()) as any

        if (!row) return null
        return {
          ...row,
          published: Boolean(row.published),
          createdAt: parseDate(row.createdAt),
          updatedAt: parseDate(row.updatedAt),
        }
      }

      const p = await getPrisma()
      return p.post.findUnique(args)
    },

    async create(args: { data: { slug: string; title: string; summary?: string | null; content: string; category?: string; published?: boolean } }) {
      const d1 = getD1()
      if (d1) {
        const id = 'cm_' + Math.random().toString(36).substring(2, 12) + Date.now().toString(36)
        const now = Date.now()
        const { slug, title, summary = null, content, category = 'Umum', published = true } = args.data

        const sql = `
          INSERT INTO "Post" ("id", "slug", "title", "summary", "content", "category", "published", "createdAt", "updatedAt")
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `
        await d1.prepare(sql).bind(
          id,
          slug,
          title,
          summary,
          content,
          category,
          published ? 1 : 0,
          now,
          now
        ).run()

        return {
          id,
          slug,
          title,
          summary,
          content,
          category,
          published,
          createdAt: new Date(now),
          updatedAt: new Date(now),
        }
      }

      const p = await getPrisma()
      return p.post.create(args)
    },

    async update(args: { where: { id: string }; data: any }) {
      const d1 = getD1()
      if (d1) {
        const id = args.where.id
        const fields: string[] = []
        const params: any[] = []
        const now = Date.now()

        if (args.data.title !== undefined) {
          fields.push('"title" = ?')
          params.push(args.data.title)
        }
        if (args.data.slug !== undefined) {
          fields.push('"slug" = ?')
          params.push(args.data.slug)
        }
        if (args.data.summary !== undefined) {
          fields.push('"summary" = ?')
          params.push(args.data.summary)
        }
        if (args.data.content !== undefined) {
          fields.push('"content" = ?')
          params.push(args.data.content)
        }
        if (args.data.category !== undefined) {
          fields.push('"category" = ?')
          params.push(args.data.category)
        }
        if (args.data.published !== undefined) {
          fields.push('"published" = ?')
          params.push(args.data.published ? 1 : 0)
        }

        fields.push('"updatedAt" = ?')
        params.push(now)

        params.push(id)
        const sql = `UPDATE "Post" SET ${fields.join(', ')} WHERE "id" = ?`
        await d1.prepare(sql).bind(...params).run()

        const row = await d1.prepare('SELECT * FROM "Post" WHERE "id" = ?').bind(id).first()
        return {
          ...row,
          published: Boolean(row.published),
          createdAt: parseDate(row.createdAt),
          updatedAt: parseDate(row.updatedAt),
        }
      }

      const p = await getPrisma()
      return p.post.update(args)
    },

    async delete(args: { where: { id: string } }) {
      const d1 = getD1()
      if (d1) {
        await d1.prepare('DELETE FROM "Post" WHERE "id" = ?').bind(args.where.id).run()
        return { id: args.where.id }
      }

      const p = await getPrisma()
      return p.post.delete(args)
    },
  },

  partner: {
    async findMany(args?: { orderBy?: any }) {
      const d1 = getD1()
      if (d1) {
        const sql = 'SELECT * FROM "Partner" ORDER BY "order" ASC, "createdAt" DESC'
        const res = await d1.prepare(sql).all()
        const results = (res.results || []) as any[]
        return results.map((r) => ({
          ...r,
          createdAt: parseDate(r.createdAt),
          updatedAt: parseDate(r.updatedAt),
        }))
      }

      const p = await getPrisma()
      return p.partner.findMany(args)
    },

    async create(args: { data: { name: string; logoUrl: string; websiteUrl: string; order?: number } }) {
      const d1 = getD1()
      if (d1) {
        const id = 'cm_' + Math.random().toString(36).substring(2, 12) + Date.now().toString(36)
        const now = Date.now()
        const { name, logoUrl, websiteUrl, order = 0 } = args.data

        const sql = `
          INSERT INTO "Partner" ("id", "name", "logoUrl", "websiteUrl", "order", "createdAt", "updatedAt")
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `
        await d1.prepare(sql).bind(id, name, logoUrl, websiteUrl, order, now, now).run()

        return {
          id,
          name,
          logoUrl,
          websiteUrl,
          order,
          createdAt: new Date(now),
          updatedAt: new Date(now),
        }
      }

      const p = await getPrisma()
      return p.partner.create(args)
    },

    async update(args: { where: { id: string }; data: any }) {
      const d1 = getD1()
      if (d1) {
        const id = args.where.id
        const fields: string[] = []
        const params: any[] = []
        const now = Date.now()

        if (args.data.name !== undefined) {
          fields.push('"name" = ?')
          params.push(args.data.name)
        }
        if (args.data.logoUrl !== undefined) {
          fields.push('"logoUrl" = ?')
          params.push(args.data.logoUrl)
        }
        if (args.data.websiteUrl !== undefined) {
          fields.push('"websiteUrl" = ?')
          params.push(args.data.websiteUrl)
        }
        if (args.data.order !== undefined) {
          fields.push('"order" = ?')
          params.push(Number(args.data.order) || 0)
        }

        fields.push('"updatedAt" = ?')
        params.push(now)

        params.push(id)
        const sql = `UPDATE "Partner" SET ${fields.join(', ')} WHERE "id" = ?`
        await d1.prepare(sql).bind(...params).run()

        const row = await d1.prepare('SELECT * FROM "Partner" WHERE "id" = ?').bind(id).first()
        return {
          ...row,
          createdAt: parseDate(row.createdAt),
          updatedAt: parseDate(row.updatedAt),
        }
      }

      const p = await getPrisma()
      return p.partner.update(args)
    },

    async delete(args: { where: { id: string } }) {
      const d1 = getD1()
      if (d1) {
        await d1.prepare('DELETE FROM "Partner" WHERE "id" = ?').bind(args.where.id).run()
        return { id: args.where.id }
      }

      const p = await getPrisma()
      return p.partner.delete(args)
    },
  },

  admin: {
    async findFirst() {
      const d1 = getD1()
      if (d1) {
        const sql = 'SELECT * FROM "Admin" LIMIT 1'
        const row = (await d1.prepare(sql).first()) as any
        if (!row) return null
        return {
          ...row,
          createdAt: parseDate(row.createdAt),
          updatedAt: parseDate(row.updatedAt),
        }
      }

      const p = await getPrisma()
      return p.admin.findFirst()
    },

    async update(args: { where: { id: string }; data: { passwordHash: string } }) {
      const d1 = getD1()
      if (d1) {
        const now = Date.now()
        const sql = 'UPDATE "Admin" SET "passwordHash" = ?, "updatedAt" = ? WHERE "id" = ?'
        await d1.prepare(sql).bind(args.data.passwordHash, now, args.where.id).run()
        return {
          id: args.where.id,
          passwordHash: args.data.passwordHash,
          updatedAt: new Date(now),
        }
      }

      const p = await getPrisma()
      return p.admin.update(args)
    },
  },
}