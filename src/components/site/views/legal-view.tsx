"use client";

/**
 * HALAMAN LEGAL — privacy / terms / disclaimer (§6.10).
 * Kerangka topik untuk difinalisasi konsultan hukum.
 */

import { Scale, ShieldCheck, FileWarning, ArrowLeft } from "lucide-react";
import { Section } from "../section";
import { legal, ROUTES } from "@/content";
import { useLanguage } from "../language-context";
import { cn } from "@/lib/utils";

type LegalKey = "privacy" | "terms" | "disclaimer";

const META: Record<LegalKey, { icon: typeof Scale; title: string }> = {
  privacy: { icon: ShieldCheck, title: "Privacy" },
  terms: { icon: Scale, title: "Terms" },
  disclaimer: { icon: FileWarning, title: "Disclaimer" },
};

export function LegalView({ kind }: { kind: LegalKey }) {
  const { lang } = useLanguage();
  const content = legal[kind];
  const Icon = META[kind].icon;

  return (
    <Section className="min-h-[60vh]">
      <a
        href={ROUTES.home}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {lang === "id" ? "Kembali ke beranda" : "Back to home"}
      </a>

      <div className="mt-6 max-w-3xl">
        <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", "bg-primary/10 text-primary")} aria-hidden="true">
          <Icon className="h-6 w-6" />
        </span>
        <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {content.title[lang]}
        </h1>

        <div className="mt-6 rounded-2xl border border-border bg-card p-6 text-base leading-relaxed text-foreground/90 shadow-sm sm:p-8">
          <p className="text-justify [hyphens:auto]">{content.body[lang]}</p>
        </div>

        <p className="mt-4 rounded-xl border border-terra/30 bg-terra-soft/50 p-4 text-xs leading-relaxed text-muted-foreground">
          {legal.note[lang]}
        </p>

        <nav aria-label="Legal" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-primary">
          {kind !== "privacy" && (
            <a href={ROUTES.privacy} className="underline-offset-4 hover:underline">
              {legal.privacy.title[lang]}
            </a>
          )}
          {kind !== "terms" && (
            <a href={ROUTES.terms} className="underline-offset-4 hover:underline">
              {legal.terms.title[lang]}
            </a>
          )}
          {kind !== "disclaimer" && (
            <a href={ROUTES.disclaimer} className="underline-offset-4 hover:underline">
              {legal.disclaimer.title[lang]}
            </a>
          )}
        </nav>
      </div>
    </Section>
  );
}
