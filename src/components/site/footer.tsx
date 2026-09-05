"use client";

/** Footer semua halaman: badge sertifikasi, marketplace, kontak, tautan sektor lain, legal. */

import { Mail, Clock, ExternalLink, ShieldCheck } from "lucide-react";
import { AegisMark, WhatsAppIcon } from "./logo";
import { CertStrip } from "./cert-badge";
import { common, SITE, ROUTES, WA_MESSAGES, waLink } from "@/content";
import { useLanguage } from "./language-context";

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <AegisMark inverted className="h-10 w-10" />
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold">Aegis Soil Health</p>
                <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                  BIO7 · {common.brand.tagline[lang]}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {common.mechanism[lang].slice(0, 160)}…
            </p>
            {/* Sertifikasi */}
            <div className="mt-5 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3.5">
              <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {common.labels.certification[lang]}
              </p>
              <div className="text-xs text-primary-foreground/80 [&_*]:!text-primary-foreground/80">
                <CertStrip />
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              {common.footer.contact[lang]}
            </h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href={waLink(WA_MESSAGES[lang].general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-primary-foreground/90 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {SITE.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 text-primary-foreground/90 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-primary-foreground/75">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {SITE.hours[lang]}
              </li>
            </ul>
          </div>

          {/* Marketplace + sektor lain */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              {common.labels.marketplace[lang]}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {SITE.marketplaces.map((m) => (
                <li key={m.name}>
                  <a
                    href={`${m.url}/search?q=${encodeURIComponent(m.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-foreground/90 transition-colors hover:text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    {m.name}
                    <span className="text-xs text-primary-foreground/50">
                      ({common.labels.searchQuery[lang]} “{m.query}”)
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/60">
              {common.footer.otherSectors[lang]}
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/90">
              <a href={`#${ROUTES.padi}`} className="underline-offset-4 hover:underline">{common.footer.rice[lang]}</a>
              <span className="mx-2 text-primary-foreground/40" aria-hidden="true">·</span>
              <a href={`#${ROUTES.kebun}`} className="underline-offset-4 hover:underline">{common.footer.plantation[lang]}</a>
              <span className="mx-2 text-primary-foreground/40" aria-hidden="true">·</span>
              <a href={`#${ROUTES.ternak}`} className="underline-offset-4 hover:underline">{common.footer.livestock[lang]}</a>
            </p>
          </div>
        </div>

        {/* Legal bawah */}
        <div className="mt-10 flex flex-col gap-3 border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.company}. {common.footer.rights[lang]}
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href={`#${ROUTES.disclaimer}`} className="underline-offset-4 hover:text-primary-foreground hover:underline">
              {common.footer.disclaimerLink[lang]}
            </a>
            <a href={`#${ROUTES.privacy}`} className="underline-offset-4 hover:text-primary-foreground hover:underline">Privacy</a>
            <a href={`#${ROUTES.terms}`} className="underline-offset-4 hover:text-primary-foreground hover:underline">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
