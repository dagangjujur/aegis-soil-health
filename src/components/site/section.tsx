"use client";

/** Kepala seksi yang konsisten: eyebrow + judul + subjudul. */

import { cn } from "@/lib/utils";
import type { Locale } from "@/content";
import { useLanguage } from "./language-context";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  id,
}: {
  eyebrow?: Locale;
  title: Locale;
  subtitle?: Locale;
  align?: "left" | "center";
  className?: string;
  id?: string;
}) {
  const { lang, t } = useLanguage();

  return (
    <div
      className={cn(
        "mb-6 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-terra">{t(eyebrow)}</p>
      )}
      <h2
        id={id}
        className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {t(title)}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t(subtitle)}
        </p>
      )}
    </div>
  );
}

/** Bungkus seksi halaman dengan padding & lebar konsisten. */
export function Section({
  children,
  className,
  tone = "default",
  id,
  ariaLabelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "paper" | "deep";
  id?: string;
  ariaLabelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        tone === "paper" && "border-y border-border/60 bg-paper-deep/50",
        tone === "deep" && "border-y border-border/60 bg-paper-deep",
        "py-12 sm:py-16",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
