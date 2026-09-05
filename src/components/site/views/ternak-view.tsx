"use client";

/**
 * HALAMAN TERNAK — Peternakan & Perikanan (§6.6).
 * Konten diekstrapolasi — GuidanceNote WAJIB tampil (acceptance criteria).
 */

import { Bird, GlassWater, Wheat, Brush, AlertCircle } from "lucide-react";
import { Section, SectionHeading } from "../section";
import { WhatsAppCTA } from "../whatsapp-cta";
import { CertBadgePair } from "../cert-badge";
import { PricingCard } from "../pricing-card";
import { FAQAccordion } from "../faq-accordion";
import { GuidanceNote } from "../guidance-note";
import { ternak as tn, WA_MESSAGES } from "@/content";
import { useLanguage } from "../language-context";

const APP_ICONS = [GlassWater, Wheat, Brush];

export function TernakView() {
  const { lang } = useLanguage();

  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-paper-deep/40">
        <div aria-hidden="true" className="microbe-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-leaf/40 bg-leaf/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-leaf">
            <Bird className="h-4 w-4" aria-hidden="true" />
            {tn.hero.eyebrow[lang]}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {tn.hero.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {tn.hero.lead[lang]}
          </p>
          <div className="mt-7">
            <WhatsAppCTA message={WA_MESSAGES[lang].ternak} label={tn.hero.cta[lang]} size="lg" />
          </div>
        </div>
      </section>

      {/* 2. STATUS KONTEN (jujur) & FOTO LAPANGAN */}
      <Section>
        {/* Banner Dokumentasi Peternakan & Probiotik */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-border shadow-lg">
          <div className="relative h-64 sm:h-80 w-full">
            <img
              src="/ternak-unggas.jpg"
              alt="Aplikasi Probiotik Ternak & Perikanan BIO7 PT Biotek Agro Nusantara"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
              <span className="inline-block rounded-md bg-leaf px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Probiotik Hayati Pakan & Sanitasi
              </span>
              <p className="mt-2 font-display text-xl sm:text-2xl font-bold">
                Meningkatkan FCR & Menekan Amonia Kandang
              </p>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl">
                Bakteri asam laktat dan probiotik alami BIO7 mendukung mikrobioma pencernaan ternak serta dekomposisi feses kandang tanpa bau menyengat.
              </p>
            </div>
          </div>
        </div>

        <GuidanceNote>{tn.honest.body[lang]}</GuidanceNote>
        <div className="mt-6">
          <CertBadgePair />
        </div>
      </Section>

      {/* 3. TIGA APLIKASI */}
      <Section tone="paper">
        <SectionHeading title={tn.applications.title} />
        <div className="grid gap-4 md:grid-cols-3">
          {tn.applications.items.map((item, i) => {
            const Icon = APP_ICONS[i] ?? Bird;
            return (
              <div key={item.title.en} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf/10 text-leaf" aria-hidden="true">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-3.5 text-base font-bold text-foreground">{item.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body[lang]}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 4. DOSIS PER JENIS TERNAK */}
      <Section>
        <SectionHeading title={tn.dosage.title} />
        <div className="grid gap-4 lg:grid-cols-3">
          {tn.dosage.rows.map((row) => (
            <div key={row.type.en} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="border-b border-border bg-primary px-4 py-3">
                <p className="text-sm font-bold text-primary-foreground">{row.type[lang]}</p>
              </div>
              <div className="p-4">
                <p className="font-mono text-lg font-bold text-terra">{row.dosage[lang]}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{row.schedule[lang]}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-start gap-2.5 rounded-xl border border-terra/30 bg-terra-soft/60 p-4 text-sm text-foreground/90">
          <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-terra" aria-hidden="true" />
          {tn.dosage.note[lang]}
        </p>
      </Section>

      {/* 5. CTA + HARGA */}
      <Section tone="paper">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-leaf/40 bg-leaf-soft/40 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {tn.cta.title[lang]}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{tn.cta.body[lang]}</p>
            <div className="mt-6">
              <WhatsAppCTA message={WA_MESSAGES[lang].ternak} label={tn.cta.cta[lang]} size="lg" />
            </div>
          </div>
          <div>
            <SectionHeading title={tn.pricing.title} />
            <PricingCard waContext="ternak" />
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{tn.pricing.dosageNote[lang]}</p>
          </div>
        </div>
      </Section>

      {/* 6. FAQ */}
      <Section>
        <SectionHeading title={tn.faq.title} id="faq-ternak" />
        <div className="rounded-2xl border border-border bg-card px-5 py-2 shadow-sm">
          <FAQAccordion items={tn.faq.items} />
        </div>
      </Section>
    </>
  );
}
