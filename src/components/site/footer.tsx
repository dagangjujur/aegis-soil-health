"use client";

/** 
 * Footer resmi PT Biotek Agro Nusantara:
 * Profil produsen in-house, navigasi lengkap, kontak & fasilitas pabrik Bandung, marketplace resmi, dan akses admin portal.
 */

import {
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Lock,
  ChevronRight,
} from "lucide-react";
import { AegisMark, WhatsAppIcon } from "./logo";
import { CertStrip } from "./cert-badge";
import { common, SITE, ROUTES, WA_MESSAGES, waLink } from "@/content";
import { useLanguage } from "./language-context";

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Kolom 1: Profil Brand & Sertifikasi (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <AegisMark inverted className="h-10 w-10 shrink-0" />
              <div className="leading-tight">
                <p className="font-display text-lg font-bold text-white tracking-wide">
                  PT Biotek Agro Nusantara
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
                  BIO7 · {common.brand.tagline[lang]}
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-primary-foreground/80 text-justify">
              {lang === "id"
                ? "Produsen dan formulator mandiri bioaktivator konsorsium multi-mikroba. Berpengalaman lebih dari 20 tahun dalam kultur mikroba terpadu untuk merehabilitasi biologi dan kesuburan tanah Indonesia."
                : "Independent manufacturer and formulator of multi-microbial consortium bioactivator. Over 20 years of expertise in integrated microbial culture restoring Indonesian soil biology."}
            </p>

            {/* Sertifikasi */}
            <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3.5">
              <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/70">
                <ShieldCheck className="h-3.5 w-3.5 text-terra" aria-hidden="true" />
                {common.labels.certification[lang]}
              </p>
              <div className="text-xs text-primary-foreground/85 [&_*]:!text-primary-foreground/85">
                <CertStrip />
              </div>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat Halaman (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              {lang === "id" ? "Navigasi" : "Navigation"}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={ROUTES.home}
                  className="inline-flex items-center gap-1.5 text-primary-foreground/85 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 text-terra" />
                  {common.nav.home[lang]}
                </a>
              </li>
              <li>
                <a
                  href={ROUTES.padi}
                  className="inline-flex items-center gap-1.5 text-primary-foreground/85 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 text-terra" />
                  {common.footer.rice[lang]}
                </a>
              </li>
              <li>
                <a
                  href={ROUTES.kebun}
                  className="inline-flex items-center gap-1.5 text-primary-foreground/85 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 text-terra" />
                  {common.footer.plantation[lang]}
                </a>
              </li>
              <li>
                <a
                  href={ROUTES.ternak}
                  className="inline-flex items-center gap-1.5 text-primary-foreground/85 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 text-terra" />
                  {common.footer.livestock[lang]}
                </a>
              </li>
              <li>
                <a
                  href={ROUTES.tentang}
                  className="inline-flex items-center gap-1.5 text-primary-foreground/85 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 text-terra" />
                  {lang === "id" ? "Tentang Perusahaan" : "About Us"}
                </a>
              </li>
              <li>
                <a
                  href={ROUTES.blog}
                  className="inline-flex items-center gap-1.5 text-primary-foreground/85 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 text-terra" />
                  {lang === "id" ? "Blog & Agronomi" : "Blog & Agronomy"}
                </a>
              </li>
              <li>
                <a
                  href={ROUTES.kontak}
                  className="inline-flex items-center gap-1.5 text-primary-foreground/85 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 text-terra" />
                  {common.cta.contactUs[lang]}
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Fasilitas Produksi (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              {common.footer.contact[lang]}
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5 text-primary-foreground/85">
                <MapPin className="h-4 w-4 shrink-0 text-terra mt-0.5" aria-hidden="true" />
                <span>
                  <strong>{lang === "id" ? "Fasilitas Produksi:" : "Production Facility:"}</strong>
                  <br />
                  PT Biotek Agro Nusantara
                  <br />
                  Bandung, Jawa Barat, Indonesia
                </span>
              </li>
              <li>
                <a
                  href={waLink(WA_MESSAGES[lang].general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-primary-foreground/90 transition-colors hover:text-white font-medium"
                >
                  <WhatsAppIcon className="h-4 w-4 text-wa" />
                  {SITE.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 text-primary-foreground/90 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-terra" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-primary-foreground/75">
                <Clock className="h-4 w-4 text-leaf" aria-hidden="true" />
                {SITE.hours[lang]}
              </li>
            </ul>
          </div>

          {/* Kolom 4: Marketplace & Kerja Sama (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              {common.labels.marketplace[lang]}
            </h3>
            <p className="text-xs text-primary-foreground/75">
              {lang === "id"
                ? "Dapatkan produk original BIO7 melalui kanal marketplace resmi:"
                : "Purchase genuine BIO7 through our official marketplace channels:"}
            </p>
            <ul className="space-y-2 text-xs">
              {SITE.marketplaces.map((m) => (
                <li key={m.name}>
                  <a
                    href={`${m.url}/search?q=${encodeURIComponent(m.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 hover:text-white"
                  >
                    <ExternalLink className="h-3 w-3 text-terra" aria-hidden="true" />
                    <span>Toko Resmi {m.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href={ROUTES.tentang}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-terra underline-offset-4 hover:underline"
              >
                <span>{lang === "id" ? "Kerja Sama B2B / OEM / Ekspor" : "B2B / OEM / Export Partnership"}</span>
                <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Copyright, Legal, dan Akses Admin */}
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.company}. {common.footer.rights[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={ROUTES.disclaimer}
                className="underline-offset-4 hover:text-primary-foreground hover:underline"
              >
                {common.footer.disclaimerLink[lang]}
              </a>
              <a
                href={ROUTES.privacy}
                className="underline-offset-4 hover:text-primary-foreground hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href={ROUTES.terms}
                className="underline-offset-4 hover:text-primary-foreground hover:underline"
              >
                Terms of Service
              </a>
            </nav>

            {/* Link Akses Admin Portal */}
            <span className="hidden sm:inline text-primary-foreground/30">•</span>
            <a
              href="/admin/login"
              className="inline-flex items-center gap-1 text-[11px] text-primary-foreground/50 hover:text-white transition-colors"
              title="Akses Pengelola Admin"
            >
              <Lock className="h-3 w-3" />
              <span>Admin Portal</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
