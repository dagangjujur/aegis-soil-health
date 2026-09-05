"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Handshake,
  BookOpen,
  KeyRound,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  order: number;
}

interface Post {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  content: string;
  category: string;
  published: boolean;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authChecking, setAuthChecking] = useState(true);

  // Data states
  const [partners, setPartners] = useState<Partner[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  // Partner Form State
  const [partnerForm, setPartnerForm] = useState({
    id: "",
    name: "",
    logoUrl: "",
    websiteUrl: "",
    order: 0,
  });
  const [isEditingPartner, setIsEditingPartner] = useState(false);

  // Post Form State
  const [postForm, setPostForm] = useState({
    id: "",
    title: "",
    summary: "",
    content: "",
    category: "Umum",
    published: true,
  });
  const [isEditingPost, setIsEditingPost] = useState(false);

  // Password Form State
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // UI Feedback
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const loadPartners = async () => {
    try {
      const res = await fetch("/api/partners");
      const data = await res.json();
      if (Array.isArray(data)) setPartners(data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadPosts = async () => {
    try {
      const res = await fetch("/api/posts?all=true");
      const data = await res.json();
      if (Array.isArray(data)) setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      if (!data.authenticated) {
        router.push("/admin/login");
      } else {
        setAuthChecking(false);
        await loadPartners();
        await loadPosts();
      }
    } catch {
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    let ignore = false;
    const run = async () => {
      if (!ignore) {
        await checkAuth();
      }
    };
    run();
    return () => {
      ignore = true;
    };
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/session", { method: "POST" });
    router.push("/admin/login");
  };

  // Partner Handlers
  const handleSavePartner = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    const method = isEditingPartner ? "PUT" : "POST";
    try {
      const res = await fetch("/api/partners", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partnerForm),
      });
      const data = await res.json();

      if (!res.ok) {
        setMsg({ type: "error", text: data.error || "Gagal menyimpan partner" });
      } else {
        setMsg({
          type: "success",
          text: isEditingPartner ? "Partner berhasil diperbarui!" : "Partner berhasil ditambahkan!",
        });
        setPartnerForm({ id: "", name: "", logoUrl: "", websiteUrl: "", order: 0 });
        setIsEditingPartner(false);
        loadPartners();
      }
    } catch {
      setMsg({ type: "error", text: "Terjadi kesalahan jaringan" });
    }
  };

  const handleDeletePartner = async (id: string) => {
    if (!confirm("Yakin ingin menghapus partner ini?")) return;
    try {
      const res = await fetch(`/api/partners?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setMsg({ type: "success", text: "Partner berhasil dihapus" });
        loadPartners();
      }
    } catch {
      setMsg({ type: "error", text: "Gagal menghapus partner" });
    }
  };

  const handleEditPartner = (p: Partner) => {
    setPartnerForm({
      id: p.id,
      name: p.name,
      logoUrl: p.logoUrl,
      websiteUrl: p.websiteUrl,
      order: p.order,
    });
    setIsEditingPartner(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Post Handlers
  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    const method = isEditingPost ? "PUT" : "POST";
    try {
      const res = await fetch("/api/posts", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postForm),
      });
      const data = await res.json();

      if (!res.ok) {
        setMsg({ type: "error", text: data.error || "Gagal menyimpan artikel" });
      } else {
        setMsg({
          type: "success",
          text: isEditingPost ? "Artikel berhasil diperbarui!" : "Artikel berhasil diterbitkan!",
        });
        setPostForm({ id: "", title: "", summary: "", content: "", category: "Umum", published: true });
        setIsEditingPost(false);
        loadPosts();
      }
    } catch {
      setMsg({ type: "error", text: "Terjadi kesalahan jaringan" });
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Yakin ingin menghapus artikel ini?")) return;
    try {
      const res = await fetch(`/api/posts?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setMsg({ type: "success", text: "Artikel berhasil dihapus" });
        loadPosts();
      }
    } catch {
      setMsg({ type: "error", text: "Gagal menghapus artikel" });
    }
  };

  const handleEditPost = (p: Post) => {
    setPostForm({
      id: p.id,
      title: p.title,
      summary: p.summary || "",
      content: p.content,
      category: p.category,
      published: p.published,
    });
    setIsEditingPost(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Password Handlers
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setMsg({ type: "error", text: "Konfirmasi password baru tidak cocok" });
      return;
    }

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldPassword: passwordForm.oldPassword,
          newPassword: passwordForm.newPassword,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMsg({ type: "error", text: data.error || "Gagal mengubah password" });
      } else {
        setMsg({ type: "success", text: "Password admin berhasil diganti!" });
        setPasswordForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
      }
    } catch {
      setMsg({ type: "error", text: "Terjadi kesalahan sistem" });
    }
  };

  if (authChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Admin */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              B
            </span>
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">
                Dashboard PT Biotek Agro Nusantara
              </h1>
              <p className="text-xs text-muted-foreground">Admin Portal & Manajemen Konten</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Lihat Situs
              </a>
            </Button>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="mr-1.5 h-3.5 w-3.5" />
              Keluar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {msg && (
          <div
            className={`mb-6 flex items-center gap-2.5 rounded-xl border p-4 text-sm font-medium ${
              msg.type === "success"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600"
                : "border-destructive/30 bg-destructive/10 text-destructive"
            }`}
          >
            {msg.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 shrink-0" />
            )}
            <span>{msg.text}</span>
          </div>
        )}

        <Tabs defaultValue="partners" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="partners" className="flex items-center gap-2">
              <Handshake className="h-4 w-4" />
              <span>Partner Resmi</span>
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Artikel Blog</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <KeyRound className="h-4 w-4" />
              <span>Ganti Password</span>
            </TabsTrigger>
          </TabsList>

          {/* TAB PARTNERS */}
          <TabsContent value="partners" className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Form Tambah/Edit */}
              <div className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-xs">
                <h2 className="font-display text-lg font-bold">
                  {isEditingPartner ? "Edit Partner Resmi" : "Tambah Partner Resmi"}
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Logo dan nama partner akan ditampilkan di homepage beserta tautan langsung.
                </p>

                <form onSubmit={handleSavePartner} className="mt-5 space-y-4">
                  <div>
                    <Label htmlFor="p-name">Nama Perusahaan / Organisasi</Label>
                    <Input
                      id="p-name"
                      placeholder="Contoh: Gabungan Kelompok Tani Mandiri"
                      value={partnerForm.name}
                      onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="p-logo">URL Logo</Label>
                    <Input
                      id="p-logo"
                      placeholder="https://example.com/logo.png"
                      value={partnerForm.logoUrl}
                      onChange={(e) => setPartnerForm({ ...partnerForm, logoUrl: e.target.value })}
                      required
                    />
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Bisa menggunakan tautan gambar online (PNG / JPG / WebP / SVG).
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="p-web">URL Website Perusahaan</Label>
                    <Input
                      id="p-web"
                      placeholder="https://perusahaan-partner.com"
                      value={partnerForm.websiteUrl}
                      onChange={(e) => setPartnerForm({ ...partnerForm, websiteUrl: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="p-order">Urutan Tampilan</Label>
                    <Input
                      id="p-order"
                      type="number"
                      value={partnerForm.order}
                      onChange={(e) => setPartnerForm({ ...partnerForm, order: Number(e.target.value) })}
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button type="submit" className="flex-1 bg-primary text-primary-foreground font-semibold">
                      {isEditingPartner ? "Perbarui Partner" : "Simpan Partner"}
                    </Button>
                    {isEditingPartner && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsEditingPartner(false);
                          setPartnerForm({ id: "", name: "", logoUrl: "", websiteUrl: "", order: 0 });
                        }}
                      >
                        Batal
                      </Button>
                    )}
                  </div>
                </form>
              </div>

              {/* Daftar Partners */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-lg font-bold">
                    Daftar Partner Aktif ({partners.length})
                  </h2>
                </div>

                {partners.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                    Belum ada partner resmi yang ditambahkan.
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {partners.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-lg bg-paper-deep/50 p-1 border border-border/50">
                            <img
                              src={p.logoUrl}
                              alt={p.name}
                              className="max-h-10 max-w-full object-contain"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-sm text-foreground truncate">{p.name}</h3>
                            <a
                              href={p.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-0.5"
                            >
                              <span>{p.websiteUrl}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <Button size="sm" variant="ghost" onClick={() => handleEditPartner(p)}>
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-destructive hover:bg-destructive/10"
                            onClick={() => handleDeletePartner(p.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* TAB BLOG */}
          <TabsContent value="blog" className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Form Tambah/Edit Artikel */}
              <div className="lg:col-span-6 rounded-2xl border border-border bg-card p-6 shadow-xs">
                <h2 className="font-display text-lg font-bold">
                  {isEditingPost ? "Edit Artikel Blog" : "Tulis Artikel Baru"}
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Mendukung format Markdown untuk subjudul, poin daftar, dan penekanan teks.
                </p>

                <form onSubmit={handleSavePost} className="mt-5 space-y-4">
                  <div>
                    <Label htmlFor="post-title">Judul Artikel</Label>
                    <Input
                      id="post-title"
                      placeholder="Contoh: Cara Atasi Tanah Asam pada Padi"
                      value={postForm.title}
                      onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="post-cat">Kategori</Label>
                      <Input
                        id="post-cat"
                        placeholder="Padi / Kebun / Ternak"
                        value={postForm.category}
                        onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
                      />
                    </div>
                    <div className="flex items-center pt-6 gap-2">
                      <input
                        type="checkbox"
                        id="post-pub"
                        checked={postForm.published}
                        onChange={(e) => setPostForm({ ...postForm, published: e.target.checked })}
                        className="h-4 w-4 rounded border-border"
                      />
                      <Label htmlFor="post-pub" className="cursor-pointer text-xs font-semibold">
                        Publikasikan langsung
                      </Label>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="post-summary">Ringkasan Singkat (Lead)</Label>
                    <Textarea
                      id="post-summary"
                      placeholder="Ringkasan 1-2 kalimat untuk preview..."
                      rows={2}
                      value={postForm.summary}
                      onChange={(e) => setPostForm({ ...postForm, summary: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="post-content">Konten Lengkap (Markdown)</Label>
                    <Textarea
                      id="post-content"
                      placeholder="Tulis konten artikel di sini..."
                      rows={10}
                      value={postForm.content}
                      onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button type="submit" className="flex-1 bg-primary text-primary-foreground font-semibold">
                      {isEditingPost ? "Perbarui Artikel" : "Terbitkan Artikel"}
                    </Button>
                    {isEditingPost && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsEditingPost(false);
                          setPostForm({ id: "", title: "", summary: "", content: "", category: "Umum", published: true });
                        }}
                      >
                        Batal
                      </Button>
                    )}
                  </div>
                </form>
              </div>

              {/* Daftar Artikel */}
              <div className="lg:col-span-6 space-y-4">
                <h2 className="font-display text-lg font-bold">
                  Daftar Artikel ({posts.length})
                </h2>

                {posts.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                    Belum ada artikel yang ditulis.
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {posts.map((p) => (
                      <div
                        key={p.id}
                        className="rounded-xl border border-border bg-card p-4 shadow-xs space-y-2"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                              {p.category}
                            </span>
                            <h3 className="font-semibold text-sm text-foreground mt-1">{p.title}</h3>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <Button size="sm" variant="ghost" onClick={() => handleEditPost(p)}>
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-destructive hover:bg-destructive/10"
                              onClick={() => handleDeletePost(p.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <p className="text-xs text-muted-foreground line-clamp-2">{p.summary}</p>

                        <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/50">
                          <span>Slug: /{p.slug}</span>
                          <span
                            className={p.published ? "text-emerald-600 font-semibold" : "text-amber-600 font-semibold"}
                          >
                            {p.published ? "Published" : "Draft"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* TAB GANTI PASSWORD */}
          <TabsContent value="settings">
            <div className="max-w-md rounded-2xl border border-border bg-card p-6 shadow-xs">
              <h2 className="font-display text-lg font-bold">Ganti Password Admin</h2>
              <p className="text-xs text-muted-foreground mt-1">
                Ubah password login admin dari initial (@Margaluyu32) ke password baru pilihan Anda.
              </p>

              <form onSubmit={handleChangePassword} className="mt-5 space-y-4">
                <div>
                  <Label htmlFor="old-pass">Password Saat Ini</Label>
                  <Input
                    id="old-pass"
                    type="password"
                    placeholder="Masukkan password lama"
                    value={passwordForm.oldPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, oldPassword: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="new-pass">Password Baru</Label>
                  <Input
                    id="new-pass"
                    type="password"
                    placeholder="Minimal 6 karakter"
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirm-pass">Konfirmasi Password Baru</Label>
                  <Input
                    id="confirm-pass"
                    type="password"
                    placeholder="Ulangi password baru"
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground font-semibold">
                  Perbarui Password
                </Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
