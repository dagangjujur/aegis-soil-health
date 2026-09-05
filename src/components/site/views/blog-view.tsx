"use client";

/**
 * BLOG (§6.9) — placeholder: daftar artikel (kosong) + struktur SEO masa depan.
 */

import { BookOpenText, Newspaper, Hourglass } from "lucide-react";
import { Section, SectionHeading } from "../section";
import { blog as bg } from "@/content";
import { useLanguage } from "../language-context";

export function BlogView() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-paper-deep/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            <Newspaper className="h-4 w-4" aria-hidden="true" />
            {bg.hero.eyebrow[lang]}
          </p>
          <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {bg.hero.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{bg.hero.lead[lang]}</p>
        </div>
      </section>

      <Section>
        {/* Daftar artikel — kosong untuk sekarang */}
        <div className="rounded-2xl border-2 border-dashed border-border bg-card/50 p-10 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary" aria-hidden="true">
            <Hourglass className="h-6 w-6" />
          </span>
          <p className="mt-4 text-sm text-muted-foreground">{bg.hero.empty[lang]}</p>
        </div>

        {/* Topik mendatang */}
        <div className="mt-10">
          <SectionHeading title={bg.topics.title} />
          <ul className="grid gap-3 sm:grid-cols-2">
            {bg.topics.items.map((topic) => (
              <li
                key={topic}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90 shadow-sm"
              >
                <BookOpenText className="h-4 w-4 shrink-0 text-terra" aria-hidden="true" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
