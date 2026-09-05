export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json().catch(() => ({}));
    const { password } = body;

    if (!password) {
      return new Response(JSON.stringify({ error: "Password wajib diisi" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    let valid = (password === "@Margaluyu32");

    if (!valid && env.DB) {
      try {
        const admin = await env.DB.prepare('SELECT "passwordHash" FROM "Admin" LIMIT 1').first();
        if (admin && admin.passwordHash) {
          const enc = new TextEncoder();
          const keyMaterial = await crypto.subtle.importKey(
            "raw",
            enc.encode(password),
            { name: "PBKDF2" },
            false,
            ["deriveBits"]
          );
          const derivedBits = await crypto.subtle.deriveBits(
            {
              name: "PBKDF2",
              salt: enc.encode("biotek_agro_nusantara_salt_key"),
              iterations: 1000,
              hash: "SHA-512",
            },
            keyMaterial,
            512
          );
          const hashedInput = Array.from(new Uint8Array(derivedBits))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
          if (hashedInput === admin.passwordHash) {
            valid = true;
          }
        }
      } catch (dbErr) {
        console.error("D1 check error:", dbErr);
      }
    }

    if (!valid) {
      return new Response(JSON.stringify({ error: "Password salah" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    const headers = new Headers({
      "Content-Type": "application/json",
      "Set-Cookie": "aegis_admin_session=biotek_agro_admin_authenticated_session_token_2026; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800"
    });

    return new Response(JSON.stringify({ success: true, message: "Login berhasil" }), {
      status: 200,
      headers
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Terjadi kesalahan sistem: " + (err?.message || err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
