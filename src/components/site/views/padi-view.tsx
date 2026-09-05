"use client";

/**
 * HALAMAN PADI — halaman terdalam (§6.4).
 * Urutan: hero → quick pitch → kredensial → aturan umum → 4 protokol →
 * darurat → hortikultura → bukti lapangan → harga → FAQ → CTA.
 */

import {
  Wheat,
  AlertTriangle,
  Ban,
  CheckCircle2,
  TrendingUp,
  Scale,
  MapPin,
  Droplets,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeading } from "../section";
import { WhatsAppCTA } from "../whatsapp-cta";
import { CertBadgePair } from "../cert-badge";
import { PricingCard } from "../pricing-card";
import { ProtocolBlock } from "../protocol-table";
import { FAQAccordion } from "../faq-accordion";
import { Bio7Wordmark } from "../logo";
import {
  padi as pd,
  common,
  SITE,
  WA_MESSAGES,
  GENERAL_RULES,
  PROTOCOLS,
  EMERGENCY,
  HORTICULTURE,
  type Locale,
} from "@/content";
import { useLanguage } from "../language-context";
import { cn } from "@/lib/utils";

const RULE_ICONS = {
  soak: Droplets,
  nursery: Sparkles,
  mix: CheckCircle2,
  herbicide: Ban,
  urea: AlertTriangle,
  shelf: CheckCircle2,
} as const;

/** JSON-LD schema.org Product (SEO §6.14) */
function ProductJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BIO7 — Bioaktivator Mikroba Multiguna",
    description:
      "Bioaktivator & bioremediasi tanah multi-mikroba. Konsorsium mikroba hidup ultra-padat: penambat nitrogen, pelarut fosfat, Streptomyces. Terdaftar KEMENTAN RI 03.02.2026.156.",
    brand: { "@type": "Brand", name: "Aegis Soil Health" },
    manufacturer: { "@type": "Organization", name: "PT Biotek Agro Nusantara" },
    category: "Agricultural Product > Soil Bioactivator",
    offers: [
      {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "55000",
        availability: "https://schema.org/InStock",
        url: "https://aegissoilhealth.com/padi",
        eligibleRegion: "ID-JK",
      },
      {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "65000",
        availability: "https://schema.org/InStock",
        url: "https://aegissoilhealth.com/padi",
        eligibleRegion: "ID",
      },
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pd.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q.id,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.id,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}

export function PadiView() {
  const { lang, t } = useLanguage();

  return (
    <>
      <ProductJsonLd />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-paper-deep/40">
        <div aria-hidden="true" className="microbe-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_20%_0%,black,transparent)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            <Wheat className="h-4 w-4" aria-hidden="true" />
            {pd.hero.eyebrow[lang]}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {pd.hero.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {pd.hero.lead[lang]}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <WhatsAppCTA
              message={WA_MESSAGES[lang].padi}
              label={pd.hero.cta[lang]}
              size="lg"
            />
            <a
              href="#protokol-A"
              className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-border px-6 text-base font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {pd.protocols.title[lang]}
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK PITCH */}
      <Section tone="default">
        <SectionHeading title={pd.quickPitch.title} />
        <ul className="grid gap-4 md:grid-cols-3">
          {pd.quickPitch.bullets.map((bullet: Locale, i: number) => (
            <li key={i} className="flex gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-foreground/90">{bullet[lang]}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. KREDENSIAL */}
      <Section tone="paper">
        <SectionHeading title={pd.credentials.title} />
        <CertBadgePair className="max-w-3xl" />
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
              {common.labels.composition[lang]}
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {SITE.microbial.map((m) => (
                <li key={m.name.en} className="flex items-baseline justify-between gap-3 rounded-lg bg-paper-deep/60 px-3 py-2 text-xs">
                  <span className="italic text-foreground/90">{m.name[lang]}</span>
                  <span className="font-mono font-semibold text-primary">{m.cfu}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2.5 text-[10px] uppercase tracking-wider text-muted-foreground">
              {common.labels.cfuUnit}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-start gap-2.5 rounded-xl border border-leaf/30 bg-leaf-soft/50 p-4 text-sm text-foreground/90">
              <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-leaf" aria-hidden="true" />
              {pd.credentials.safety[lang]}
            </p>
            <ul className="rounded-xl border border-border bg-card p-4 text-sm">
              {SITE.safety.map((s) => (
                <li key={s.en} className="flex items-center gap-2 py-0.5 text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-leaf" aria-hidden="true" />
                  {s[lang]}
                </li>
              ))}
              {SITE.bioactives.map((b) => (
                <li key={b.en} className="flex items-center gap-2 py-0.5 text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-terra" aria-hidden="true" />
                  {b[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 4. ATURAN UMUM */}
      <Section>
        <SectionHeading title={pd.rules.title} subtitle={pd.rules.subtitle} id="aturan-umum" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {GENERAL_RULES.map((rule) => {
            const Icon = RULE_ICONS[rule.icon];
            return (
              <div
                key={rule.icon}
                className={cn(
                  "rounded-xl border p-5",
                  rule.critical
                    ? "border-destructive/40 bg-destructive/5"
                    : "border-border bg-card shadow-sm"
                )}
              >
                <p className="flex items-center gap-2.5 text-sm font-bold">
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                      rule.critical ? "bg-destructive/15 text-destructive" : "bg-primary/10 text-primary"
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className={rule.critical ? "text-destructive" : "text-foreground"}>
                    {rule.title[lang]}
                  </span>
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{rule.body[lang]}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 5. EMPAT PROTOKOL */}
      <Section tone="paper">
        <SectionHeading title={pd.protocols.title} subtitle={pd.protocols.subtitle} id="protokol" />
        <div className="grid gap-6 lg:grid-cols-2">
          {PROTOCOLS.map((protocol) => (
            <ProtocolBlock key={protocol.key} protocol={protocol} />
          ))}
        </div>
      </Section>

      {/* 6. PROTOKOL DARURAT */}
      <Section>
        <SectionHeading title={pd.emergency.title} subtitle={pd.emergency.subtitle} id="darurat" />
        <article className="overflow-hidden rounded-2xl border-2 border-destructive/40 bg-card shadow-sm">
          <header className="border-b border-destructive/30 bg-destructive/10 px-5 py-4 sm:px-6">
            <h3 className="font-display text-lg font-semibold text-destructive sm:text-xl">
              {EMERGENCY.name[lang]}
            </h3>
            <p className="mt-2 text-sm text-foreground/85">
              <strong className="font-semibold">{EMERGENCY.symptoms.title[lang]}:</strong>{" "}
              {EMERGENCY.symptoms.body[lang]}
            </p>
          </header>
          <div className="space-y-5 px-5 py-5 sm:px-6">
            <div className="rounded-xl bg-paper-deep/70 p-4">
              <h4 className="mb-2.5 text-sm font-bold uppercase tracking-wider text-primary">
                {EMERGENCY.procedure.title[lang]}
              </h4>
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground/90">
                {EMERGENCY.procedure.steps.map((step, i) => (
                  <li key={i}>{step[lang]}</li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="mb-2.5 text-sm font-bold uppercase tracking-wider text-primary">
                {EMERGENCY.formulaName[lang]}
              </h4>
              <div className="hidden overflow-hidden rounded-xl border border-border md:block">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-paper-deep text-left">
                      <th scope="col" className="px-4 py-3 font-semibold text-primary">{pd.protocols.input[lang]}</th>
                      <th scope="col" className="px-4 py-3 font-semibold text-primary">{pd.protocols.dosage[lang]}</th>
                      <th scope="col" className="px-4 py-3 font-semibold text-primary">{pd.protocols.func[lang]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {EMERGENCY.tankMix.map((row) => (
                      <tr key={row.input.en} className={row.input.en === "BIO7" ? "bg-leaf-soft/40" : ""}>
                        <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{row.input[lang]}</th>
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-terra">{row.dosage[lang]}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.func[lang]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="space-y-2.5 md:hidden">
                {EMERGENCY.tankMix.map((row) => (
                  <li key={row.input.en} className={cn("rounded-xl border border-border bg-card p-3.5", row.input.en === "BIO7" && "border-leaf/40 bg-leaf-soft/40")}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="text-sm font-bold text-foreground">{row.input[lang]}</p>
                      <p className="rounded-full bg-terra/10 px-2.5 py-0.5 font-mono text-xs font-bold text-terra">{row.dosage[lang]}</p>
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground">{row.func[lang]}</p>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="list-inside list-disc space-y-1.5 text-sm text-foreground/90">
              {EMERGENCY.basal.items.map((item, i) => (
                <li key={i}>
                  <strong className="font-semibold">{EMERGENCY.basal.title[lang]}:</strong> {item[lang]}
                </li>
              ))}
            </ul>

            <p className="rounded-xl border border-primary/25 bg-primary/5 p-4 text-sm text-foreground/90">
              {EMERGENCY.preventive[lang]}
            </p>
          </div>
        </article>
      </Section>

      {/* 7. HORTIKULTURA */}
      <Section tone="paper">
        <SectionHeading title={pd.horticulture.title} subtitle={pd.horticulture.subtitle} id="hortikultura" />
        <div className="grid gap-4 md:grid-cols-2">
          {HORTICULTURE.rows.map((row) => (
            <div key={row.input.en} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-bold text-foreground">{row.input[lang]}</p>
              <p className="mt-2 font-mono text-lg font-bold text-terra">{row.dosage[lang]}</p>
              <p className="mt-1 text-sm text-muted-foreground">{row.func[lang]}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. BUKTI LAPANGAN */}
      <Section>
        <SectionHeading title={pd.fieldProof.title} id="bukti" />
        
        {/* Banner Dokumentasi Panen Karawang */}
        <div className="mb-6 overflow-hidden rounded-3xl border border-border shadow-lg">
          <div className="relative h-64 sm:h-80 w-full">
            <img
              src="/panen-karawang.jpg"
              alt="Dokumentasi Panen Padi Karawang 12,6 Ton per Hektar BIO7"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
              <span className="inline-block rounded-md bg-terra px-2.5 py-1 text-xs font-bold uppercase tracking-wider">
                Kasus Lapangan Terverifikasi
              </span>
              <p className="mt-2 font-display text-xl sm:text-2xl font-bold">
                12,6 Ton Gabah Kering Panen per Hektar di Karawang
              </p>
              <p className="text-xs sm:text-sm text-white/80">
                Peningkatan hasil +61,5% dengan pengurangan pupuk kimia NPK sintetis sebesar 40%.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-3 lg:p-8">
          <div className="sm:col-span-2 lg:col-span-3">
            <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-terra" aria-hidden="true" />
              {t(SITE.fieldCase.location)} · {SITE.fieldCase.farmer} · {SITE.fieldCase.year} · {t(SITE.fieldCase.plotSize)}
            </p>
          </div>
          {(
            [
              { icon: Wheat, label: pd.fieldProof.labels.yield, value: t(SITE.fieldCase.yieldTons), accent: "text-primary" },
              { icon: Scale, label: pd.fieldProof.labels.baseline, value: t(SITE.fieldCase.baseline), accent: "text-muted-foreground" },
            ] as const
          ).map(({ icon: Icon, label, value, accent }) => (
            <div key={label.en} className="rounded-xl bg-paper-deep/60 p-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label[lang]}
              </p>
              <p className={cn("mt-2 font-display text-2xl font-bold tracking-tight", accent)}>{value}</p>
            </div>
          ))}
          <div className="rounded-xl border-2 border-leaf/40 bg-leaf-soft/50 p-4">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-leaf">
              <TrendingUp className="h-4 w-4" aria-hidden="true" />
              {pd.fieldProof.labels.uplift[lang]}
            </p>
            <p className="mt-2 font-display text-3xl font-bold tracking-tight text-leaf">{SITE.fieldCase.uplift}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t(SITE.fieldCase.npkReduction)}</p>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground sm:col-span-2 lg:col-span-3">
            {pd.fieldProof.note[lang]}
          </p>
        </div>
      </Section>

      {/* 9. HARGA */}
      <Section tone="paper">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title={pd.pricing.title} />
            <p className="text-sm leading-relaxed text-muted-foreground">{pd.pricing.directShipment[lang]}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pd.pricing.oem[lang]}</p>
            <div className="mt-6">
              <WhatsAppCTA message={WA_MESSAGES[lang].padi} label={common.cta.order[lang]} size="lg" />
            </div>
          </div>
          <PricingCard waContext="padi" />
        </div>
      </Section>

      {/* 10. FAQ */}
      <Section>
        <SectionHeading title={pd.faq.title} id="faq-padi" />
        <div className="rounded-2xl border border-border bg-card px-5 py-2 shadow-sm">
          <FAQAccordion items={pd.faq.items} />
        </div>
        <div className="mt-8 flex flex-col items-center text-center">
          <Bio7Wordmark className="text-4xl opacity-80" />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{common.mechanism[lang]}</p>
          <div className="mt-6">
            <WhatsAppCTA message={WA_MESSAGES[lang].padi} label={pd.hero.cta[lang]} size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}
