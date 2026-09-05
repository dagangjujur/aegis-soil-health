"use client";

/**
 * HALAMAN KEBUN — Perkebunan & Hortikultura (§6.5).
 * Konten diekstrapolasi — GuidanceNote WAJIB tampil (acceptance criteria).
 */

import { TreePalm, Ban, Droplets, ShowerHead, CupSoda, Sprout, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "../section";
import { WhatsAppCTA } from "../whatsapp-cta";
import { CertBadgePair } from "../cert-badge";
import { PricingCard } from "../pricing-card";
import { FAQAccordion } from "../faq-accordion";
import { GuidanceNote } from "../guidance-note";
import { kebun as kb, common, WA_MESSAGES, SITE } from "@/content";
import { useLanguage } from "../language-context";
import { cn } from "@/lib/utils";

export function KebunView() {
  const { lang } = useLanguage();

  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-paper-deep/40">
        <div aria-hidden="true" className="microbe-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_80%_0%,black,transparent)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-terra/30 bg-terra/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-terra">
            <TreePalm className="h-4 w-4" aria-hidden="true" />
            {kb.hero.eyebrow[lang]}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {kb.hero.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {kb.hero.lead[lang]}
          </p>
          <div className="mt-7">
            <WhatsAppCTA message={WA_MESSAGES[lang].kebun} label={kb.hero.cta[lang]} size="lg" />
          </div>
        </div>
      </section>

      {/* 2. STATUS KONTEN (jujur) & FOTO LAPANGAN */}
      <Section>
        {/* Banner Dokumentasi Kebun Hortikultura */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-border shadow-lg">
          <div className="relative h-64 sm:h-80 w-full">
            <img
              src="/kebun-hortikultura.jpg"
              alt="Perkebunan dan Lahan Hortikultura Jawa Barat dengan Aplikasi BIO7"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
              <span className="inline-block rounded-md bg-terra px-2.5 py-1 text-xs font-bold uppercase tracking-wider">
                Aplikasi Hortikultura & Perkebunan
              </span>
              <p className="mt-2 font-display text-xl sm:text-2xl font-bold">
                Akselerasi Kesuburan Tanah & Daya Serap Hara Tanaman
              </p>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl">
                Formulasi konsorsium 7 strain mikroba aktif PT Biotek Agro Nusantara bekerja menggemburkan tanah padat dan mempercepat dekomposisi bahan organik.
              </p>
            </div>
          </div>
        </div>

        <GuidanceNote>{kb.honest.body[lang]}</GuidanceNote>
        <div className="mt-6">
          <CertBadgePair />
        </div>
      </Section>

      {/* 3. MEKANISME */}
      <Section tone="paper">
        <SectionHeading title={kb.benefits.title} subtitle={{ id: common.mechanism.id, en: common.mechanism.en }} />
        <div className="grid gap-4 sm:grid-cols-2">
          {kb.benefits.items.map((item) => (
            <div key={item.title.en} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="flex items-center gap-2.5 text-sm font-bold text-foreground">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-terra/10 text-terra" aria-hidden="true">
                  <Sprout className="h-4.5 w-4.5" />
                </span>
                {item.title[lang]}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body[lang]}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. DOSIS */}
      <Section>
        <SectionHeading title={kb.dosage.title} />
        <div className="grid gap-4 md:grid-cols-2">
          {kb.dosage.rows.map((row) => (
            <div key={row.input.en} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                {row.input.en === "Foliar spray" ? (
                  <ShowerHead className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
                ) : (
                  <CupSoda className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
                )}
                {row.input[lang]}
              </p>
              <p className="mt-2.5 font-mono text-xl font-bold text-terra">{row.dosage[lang]}</p>
              <p className="mt-1 text-sm text-muted-foreground">{row.func[lang]}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground/90">
          <Ban className="mt-0.5 h-4.5 w-4.5 shrink-0 text-destructive" aria-hidden="true" />
          {kb.dosage.herbicideNote[lang]}
        </p>
      </Section>

      {/* 5. KOMODITAS */}
      <Section tone="paper">
        <SectionHeading title={kb.crops.title} />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {kb.crops.items.map((crop, i) => (
            <li
              key={crop.name.en}
              className={cn(
                "flex items-start gap-3 rounded-xl border border-border bg-card p-4",
                i === 0 && "border-primary/30"
              )}
            >
              <TreePalm className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-foreground">{crop.name[lang]}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{crop.note[lang]}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. CTA + HARGA */}
      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-leaf/40 bg-leaf-soft/40 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {kb.cta.title[lang]}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{kb.cta.body[lang]}</p>
            <div className="mt-6">
              <WhatsAppCTA message={WA_MESSAGES[lang].kebun} label={kb.cta.cta[lang]} size="lg" />
            </div>
            <ul className="mt-6 space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-leaf" aria-hidden="true" />
                {common.labels.verified[lang]}: {common.labels.composition[lang]}
              </li>
              <li className="flex items-center gap-2">
                <Droplets className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {SITE.hours[lang]}
              </li>
            </ul>
          </div>
          <div>
            <SectionHeading title={kb.pricing.title} />
            <PricingCard waContext="kebun" />
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <Section tone="paper">
        <SectionHeading title={kb.faq.title} id="faq-kebun" />
        <div className="rounded-2xl border border-border bg-card px-5 py-2 shadow-sm">
          <FAQAccordion items={kb.faq.items} />
        </div>
      </Section>
    </>
  );
}
