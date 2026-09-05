export async function onRequestGet(context) {
  const { request } = context;
  const cookieHeader = request.headers.get("Cookie") || "";
  const isAuthenticated = cookieHeader.includes("aegis_admin_session=biotek_agro_admin_authenticated_session_token_2026");

  return new Response(JSON.stringify({ authenticated: isAuthenticated }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
