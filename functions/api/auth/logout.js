export async function onRequestPost(context) {
  const headers = new Headers({
    "Content-Type": "application/json",
    "Set-Cookie": "aegis_admin_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers
  });
}
