import { MetadataRoute } from "next";
import { db } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aegissoilhealth.com";

  // Rute-rute publik statis
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/padi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kebun`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ternak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Daftar slug artikel resmi PT Biotek Agro Nusantara
  const defaultBlogSlugs = [
    "ciri-ciri-tanah-sehat-vs-tanah-rusak-kimia",
    "cara-perbanyak-anakan-padi-secara-alami",
    "pupuk-hayati-untuk-sawit-apa-yang-perlu-diketahui",
    "gejala-klowor-pada-padi-dan-penanganannya",
    "probiotik-untuk-ayam-broiler-cara-kerja-dan-dosis",
    "cara-atasi-tanah-asam-pada-padi",
    "mengapa-tanah-rusak-akibat-pupuk-kimia",
    "peran-mikroba-pelarut-fosfat-untuk-tanaman",
  ];

  try {
    const posts = await db.post.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    if (Array.isArray(posts) && posts.length > 0) {
      const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: "weekly",
        priority: 0.85,
      }));
      return [...staticRoutes, ...dynamicRoutes];
    }
  } catch {
    // Graceful fallback ke daftar artikel default jika db belum aktif saat static prerender
  }

  const fallbackRoutes: MetadataRoute.Sitemap = defaultBlogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...fallbackRoutes];
}
