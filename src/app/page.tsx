"use client";

/**
 * ============================================================
 * AEGIS SOIL HEALTH × BIO7 — SINGLE-ROUTE APP
 * ============================================================
 * Lingkungan pratinjau hanya mengekspos rute Next.js "/".
 * Seluruh arsitektur produksi (10 halaman, §6.2) dipetakan 1:1
 * ke hash router di bawah ini:
 *
 *   Produksi        Pratinjau
 *   /            →  #/
 *   /padi        →  #/padi
 *   /kebun       →  #/kebun
 *   /ternak      →  #/ternak
 *   /tentang     →  #/tentang
 *   /kontak      →  #/kontak
 *   /blog        →  #/blog
 *   /privacy     →  #/privacy
 *   /terms       →  #/terms
 *   /disclaimer  →  #/disclaimer
 *
 * Migrasi ke rute nyata: pindahkan tiap view ke src/app/<rute>/page.tsx
 * (lihat README.md bagian "Migrasi Produksi").
 */

import { useEffect, useState, type ReactNode } from "react";
import { LanguageProvider, useLanguage } from "@/components/site/language-context";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { HomeView } from "@/components/site/views/home-view";
import { PadiView } from "@/components/site/views/padi-view";
import { KebunView } from "@/components/site/views/kebun-view";
import { TernakView } from "@/components/site/views/ternak-view";
import { TentangView } from "@/components/site/views/tentang-view";
import { KontakView } from "@/components/site/views/kontak-view";
import { BlogView } from "@/components/site/views/blog-view";
import { LegalView } from "@/components/site/views/legal-view";
import { ROUTES, home, padi, kebun, ternak, tentang, kontak, blog, legal, common } from "@/content";
import { ArrowLeft, Compass } from "lucide-react";

/* ---------------- Router ---------------- */

const ROUTE_VIEWS: Record<string, () => ReactNode> = {
  [ROUTES.home]: () => <HomeView />,
  [ROUTES.padi]: () => <PadiView />,
  [ROUTES.kebun]: () => <KebunView />,
  [ROUTES.ternak]: () => <TernakView />,
  [ROUTES.tentang]: () => <TentangView />,
  [ROUTES.kontak]: () => <KontakView />,
  [ROUTES.blog]: () => <BlogView />,
  [ROUTES.privacy]: () => <LegalView kind="privacy" />,
  [ROUTES.terms]: () => <LegalView kind="terms" />,
  [ROUTES.disclaimer]: () => <LegalView kind="disclaimer" />,
};

const TITLES: Record<string, { id: string; en: string }> = {
  [ROUTES.home]: home.meta.title,
  [ROUTES.padi]: padi.meta.title,
  [ROUTES.kebun]: kebun.meta.title,
  [ROUTES.ternak]: ternak.meta.title,
  [ROUTES.tentang]: tentang.meta.title,
  [ROUTES.kontak]: kontak.meta.title,
  [ROUTES.blog]: blog.meta.title,
  [ROUTES.privacy]: legal.privacy.meta.title,
  [ROUTES.terms]: legal.terms.meta.title,
  [ROUTES.disclaimer]: legal.disclaimer.meta.title,
};

const NOT_FOUND = "/*404*/";

function NotFoundView() {
  const { lang } = useLanguage();
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terra/10 text-terra" aria-hidden="true">
        <Compass className="h-7 w-7" />
      </span>
      <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight">
        {lang === "id" ? "Halaman tidak ditemukan" : "Page not found"}
      </h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {lang === "id"
          ? "Tautan yang Anda buka tidak tersedia. Kembali ke beranda untuk memilih sektor Anda."
          : "The link you opened is unavailable. Return home to choose your sector."}
      </p>
      <a
        href={`#${ROUTES.home}`}
        className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {common.labels.backHome[lang]}
      </a>
    </section>
  );
}

/* ---------------- Judul dokumen dinamis per view ---------------- */

function useDocumentTitle(route: string) {
  const { lang } = useLanguage();
  useEffect(() => {
    const t = TITLES[route];
    document.title = t ? t[lang] : TITLES[ROUTES.home][lang];
  }, [route, lang]);
}

/* ---------------- Aplikasi ---------------- */

function App() {
  const [route, setRoute] = useState<string>(ROUTES.home);
  useDocumentTitle(route);

  useEffect(() => {
    const handleHash = () => {
      const raw = window.location.hash.replace(/^#/, "");

      // Hash diawali "/" → navigasi rute (produksi: URL path)
      if (!raw || raw.startsWith("/")) {
        const next = raw || ROUTES.home;
        if (next in ROUTE_VIEWS) {
          if (next !== route) {
            setRoute(next);
            window.requestAnimationFrame(() =>
              window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
            );
          }
        } else {
          setRoute(NOT_FOUND); // rute tak dikenal → 404
        }
        return;
      }

      // Tanpa "/" → jangkar dalam halaman (mis. #protokol-A)
      const el = document.getElementById(raw);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [route]);

  const View = ROUTE_VIEWS[route] ?? NotFoundView;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        {common.labels.backHome.id ? "Lewati ke konten utama" : "Skip to content"}
      </a>

      <Header route={route} />

      <main id="main-content" className="flex-1" key={route}>
        <View />
      </main>

      <Footer />
    </div>
  );
}

export default function Page() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}
