export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method;

  const fallbackPartners = [
    {
      id: "partner-1",
      name: "Gapoktan Sri Makmur Karawang",
      logoUrl: "/tanah-subur.jpg",
      websiteUrl: "https://aegissoilhealth.com",
      order: 1
    }
  ];

  if (method === "GET") {
    if (env.DB) {
      try {
        const { results } = await env.DB.prepare('SELECT * FROM "Partner" ORDER BY "order" ASC').all();
        if (results && results.length > 0) {
          return new Response(JSON.stringify(results), { headers: { "Content-Type": "application/json" } });
        }
      } catch (err) {
        console.error("D1 partners GET error:", err);
      }
    }
    return new Response(JSON.stringify(fallbackPartners), { headers: { "Content-Type": "application/json" } });
  }

  const cookieHeader = request.headers.get("Cookie") || "";
  const isAuthenticated = cookieHeader.includes("aegis_admin_session=biotek_agro_admin_authenticated_session_token_2026");
  if (!isAuthenticated) {
    return new Response(JSON.stringify({ error: "Akses ditolak" }), { status: 401, headers: { "Content-Type": "application/json" } });
  }

  if (method === "POST" && env.DB) {
    const body = await request.json().catch(() => ({}));
    const id = "partner-" + Date.now();
    await env.DB.prepare(
      'INSERT INTO "Partner" ("id", "name", "logoUrl", "websiteUrl", "order", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, datetime("now"), datetime("now"))'
    ).bind(id, body.name, body.logoUrl || "", body.websiteUrl || "", body.order || 0).run();
    return new Response(JSON.stringify({ success: true, id }), { headers: { "Content-Type": "application/json" } });
  }

  if (method === "DELETE" && env.DB) {
    const body = await request.json().catch(() => ({}));
    if (body.id) {
      await env.DB.prepare('DELETE FROM "Partner" WHERE "id" = ?').bind(body.id).run();
      return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
    }
  }

  return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
}
