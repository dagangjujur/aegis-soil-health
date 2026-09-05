"use client";

/**
 * HALAMAN TENTANG — korporat, misi, konsorsium, sertifikasi, produsen (§6.7).
 */

import { Target, Network, History, Factory, ShieldCheck, UserRound } from "lucide-react";
import { Section, SectionHeading } from "../section";
import { WhatsAppCTA } from "../whatsapp-cta";
import { CertBadgePair } from "../cert-badge";
import { tentang as tt, common, WA_MESSAGES, SITE } from "@/content";
import { useLanguage } from "../language-context";

export function TentangView() {
  const { lang, t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-primary text-primary-foreground">
        <div aria-hidden="true" className="microbe-dots absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_70%_80%_at_30%_0%,black,transparent)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/70">
            {tt.hero.eyebrow[lang]}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {tt.hero.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {tt.hero.lead[lang]}
          </p>
        </div>
      </section>

      {/* MISI */}
      <Section>
        {/* Banner Fasilitas Riset */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-border shadow-lg">
          <div className="relative h-64 sm:h-80 w-full">
            <img
              src="/hero-biotek.jpg"
              alt="Fasilitas Riset Kultur Mikroba Tanah PT Biotek Agro Nusantara Bandung"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
              <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Fasilitas Terpadu Bandung
              </span>
              <p className="mt-2 font-display text-xl sm:text-2xl font-bold">
                Dedikasi 20+ Tahun Kultur Mikroba & Formulasi Bioteknologi Tanah
              </p>
              <p className="text-xs sm:text-sm text-white/80">
                Pusat pengujian laboratorium in-house dan fasilitas manufaktur mandiri PT Biotek Agro Nusantara.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terra/10 text-terra" aria-hidden="true">
              <Target className="h-5.5 w-5.5" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">{tt.mission.title[lang]}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tt.mission.body[lang]}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
              <Network className="h-5.5 w-5.5" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">{tt.consortium.title[lang]}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tt.consortium.body[lang]}</p>
          </div>
        </div>
      </Section>

      {/* SERTIFIKASI */}
      <Section tone="paper">
        <SectionHeading title={tt.certs.title} />
        <CertBadgePair />
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{tt.certs.body[lang]}</p>
      </Section>

      {/* PRODUSEN & SEJARAH */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
              <History className="h-5 w-5" />
            </span>
            <h2 className="mt-3.5 font-display text-xl font-semibold tracking-tight">{tt.history.title[lang]}</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{tt.history.body[lang]}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terra/10 text-terra" aria-hidden="true">
              <Factory className="h-5 w-5" />
            </span>
            <h2 className="mt-3.5 font-display text-xl font-semibold tracking-tight">{tt.producer.title[lang]}</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{tt.producer.body[lang]}</p>
            <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {SITE.producer.name} · {t(SITE.producer.location)}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf" aria-hidden="true">
              <UserRound className="h-5 w-5" />
            </span>
            <h2 className="mt-3.5 font-display text-xl font-semibold tracking-tight">{tt.team.title[lang]}</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{tt.team.body[lang]}</p>
            <div className="mt-5">
              <WhatsAppCTA
                message={WA_MESSAGES[lang].general}
                label={common.cta.contactUs[lang]}
                size="sm"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* OEM */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-terra/30 bg-terra-soft/40 p-6 text-center sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight">{tt.oem.title[lang]}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-foreground/80">{tt.oem.body[lang]}</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message={WA_MESSAGES[lang].oem} label={tt.oem.cta[lang]} size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}
