export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;

  // Fallback posts if D1 not yet populated or offline
  const fallbackPosts = [
    {
      id: "post-1",
      slug: "cara-mengatasi-tanah-asam-dan-mengembalikan-kesuburan-alami",
      title: "Cara Mengatasi Tanah Asam dan Mengembalikan Kesuburan Alami Lahan Pertanian",
      summary: "Panduan lengkap perbaikan pH tanah dengan konsorsium mikroba pengurai residu dan mineralisasi hara.",
      content: "Tanah asam sering kali menjadi hambatan utama petani di Indonesia...",
      category: "Agronomi & Tanah",
      published: true,
      createdAt: "2026-03-01T08:00:00.000Z"
    },
    {
      id: "post-2",
      slug: "panduan-lengkap-aplikasi-bioaktivator-untuk-budidaya-padi-sawah",
      title: "Panduan Lengkap Aplikasi Bioaktivator untuk Budidaya Padi Sawah Hemat Kimia",
      summary: "Protokol tahap pengolahan tanah hingga fase bunting untuk anakan produktif dan bulir bernas.",
      content: "BIO7 memberikan solusi biologis tanah bagi petani padi modern...",
      category: "Padi",
      published: true,
      createdAt: "2026-03-02T08:00:00.000Z"
    }
  ];

  if (method === "GET") {
    const slug = url.searchParams.get("slug");
    if (env.DB) {
      try {
        if (slug) {
          const post = await env.DB.prepare('SELECT * FROM "Post" WHERE "slug" = ?').bind(slug).first();
          if (post) {
            return new Response(JSON.stringify(post), { headers: { "Content-Type": "application/json" } });
          }
        } else {
          const { results } = await env.DB.prepare('SELECT * FROM "Post" ORDER BY "createdAt" DESC').all();
          if (results && results.length > 0) {
            return new Response(JSON.stringify(results), { headers: { "Content-Type": "application/json" } });
          }
        }
      } catch (err) {
        console.error("D1 posts GET error:", err);
      }
    }

    // fallback
    if (slug) {
      const p = fallbackPosts.find(x => x.slug === slug);
      if (p) return new Response(JSON.stringify(p), { headers: { "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ error: "Artikel tidak ditemukan" }), { status: 404, headers: { "Content-Type": "application/json" } });
    }
    return new Response(JSON.stringify(fallbackPosts), { headers: { "Content-Type": "application/json" } });
  }

  // Admin mutation check
  const cookieHeader = request.headers.get("Cookie") || "";
  const isAuthenticated = cookieHeader.includes("aegis_admin_session=biotek_agro_admin_authenticated_session_token_2026");
  if (!isAuthenticated) {
    return new Response(JSON.stringify({ error: "Akses ditolak" }), { status: 401, headers: { "Content-Type": "application/json" } });
  }

  if (method === "POST" && env.DB) {
    const body = await request.json().catch(() => ({}));
    const { title, summary, content, category, published } = body;
    const id = "post-" + Date.now();
    const slug = title.toLowerCase().replace(/[^\w-]+/g, "-");
    await env.DB.prepare(
      'INSERT INTO "Post" ("id", "slug", "title", "summary", "content", "category", "published", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, ?, ?, datetime("now"), datetime("now"))'
    ).bind(id, slug, title, summary || "", content, category || "Umum", published ? 1 : 0).run();
    return new Response(JSON.stringify({ success: true, id, slug }), { headers: { "Content-Type": "application/json" } });
  }

  if (method === "DELETE" && env.DB) {
    const body = await request.json().catch(() => ({}));
    if (body.id) {
      await env.DB.prepare('DELETE FROM "Post" WHERE "id" = ?').bind(body.id).run();
      return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
    }
  }

  return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
}
