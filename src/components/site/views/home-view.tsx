"use client";

/**
 * BERANDA — router hero (§6.3).
 * HANYA: brand, value prop 1 kalimat, 3 tombol sektor, 1 CTA sekunder WA.
 * Tidak ada spesifikasi produk, protokol, testimonial, atau FAQ di sini.
 */

import { ShieldCheck, FlaskConical, Clock3 } from "lucide-react";
import { Bio7Wordmark } from "../logo";
import { SectorCard } from "../sector-card";
import { WhatsAppCTA } from "../whatsapp-cta";
import { PartnerShowcase } from "../partner-showcase";
import { home, WA_MESSAGES, SITE } from "@/content";
import { useLanguage } from "../language-context";

export function HomeView() {
  const { lang } = useLanguage();

  return (
    <>
      {/* HERO ROUTER */}
      <section className="relative overflow-hidden">
        {/* Latar: kertas lab dengan titik mikroba */}
        <div aria-hidden="true" className="microbe-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
        <div
          aria-hidden="true"
          className="soil-stripes absolute inset-x-0 bottom-0 h-24 opacity-60 [mask-image:linear-gradient(to_top,black,transparent)]"
        />

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-16 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-terra">
            {home.hero.eyebrow[lang]}
          </p>

          <div className="mt-5 flex flex-col items-center">
            <Bio7Wordmark className="text-6xl sm:text-8xl" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80 sm:text-base">
              {home.hero.subtitle[lang]}
            </p>
          </div>

          <h1 className="mt-7 max-w-2xl text-balance text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl">
            {home.hero.valueProp[lang]}
          </h1>

          {/* Visual Botol BIO7 & Fasilitas Riset */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-3xl w-full">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 shrink-0 overflow-hidden rounded-3xl border-2 border-primary/20 shadow-xl">
              <img
                src="/bio7-product.jpg"
                alt="Botol 1 Liter BIO7 Bioaktivator Mikroba Tanah"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute bottom-3 inset-x-3 rounded-xl bg-background/90 backdrop-blur-xs py-1.5 px-3 text-center text-[11px] font-bold text-primary shadow-xs">
                Kemasan 1 Liter Resmi KEMENTAN RI
              </span>
            </div>

            <div className="relative h-64 sm:h-72 w-full grow overflow-hidden rounded-3xl border-2 border-primary/20 shadow-xl hidden sm:block">
              <img
                src="/hero-biotek.jpg"
                alt="Laboratorium Kultur Mikroba PT Biotek Agro Nusantara & Sawah Subur"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute bottom-3 inset-x-3 rounded-xl bg-background/90 backdrop-blur-xs py-1.5 px-3 text-center text-[11px] font-bold text-foreground shadow-xs">
                Fasilitas Riset Kultur & Manufaktur Terpadu Bandung
              </span>
            </div>
          </div>

          <p className="mt-8 text-sm font-semibold text-primary">
            {home.hero.question[lang]}
          </p>

          {/* Tiga tombol sektor */}
          <nav
            aria-label={home.hero.question[lang]}
            className="mt-4 grid w-full gap-4 text-left sm:grid-cols-3"
          >
            {home.sectors.map((sector) => (
              <SectorCard key={sector.key} sector={sector} />
            ))}
          </nav>

          {/* CTA sekunder */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <WhatsAppCTA
              message={WA_MESSAGES[lang].consult}
              label={home.consult.cta[lang]}
              variant="outline"
              size="lg"
              className="w-full max-w-md sm:w-auto"
            />
          </div>

          {/* Strip kepercayaan */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              {SITE.certs.kementan.label}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <FlaskConical className="h-4 w-4 text-terra" aria-hidden="true" />
              {SITE.certs.unpad.label}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4 text-leaf" aria-hidden="true" />
              20+ {lang === "id" ? "tahun di pasar" : "years in market"}
            </li>
          </ul>
        </div>
      </section>

      {/* Showcase Partner Resmi */}
      <PartnerShowcase />
    </>
  );
}
