"use client";

/** Toggle bahasa ID ⇄ EN — segmented control kecil. */

import { useLanguage } from "./language-context";
import type { Lang } from "@/content";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Lang; label: string; ariaLabel: string }[] = [
  { value: "id", label: "ID", ariaLabel: "Bahasa Indonesia" },
  { value: "en", label: "EN", ariaLabel: "English" },
];

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Bahasa / Language"
      className={cn(
        "inline-flex h-11 items-center rounded-full border border-border bg-card p-1",
        className
      )}
    >
      {OPTIONS.map((opt) => {
        const active = lang === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            aria-label={opt.ariaLabel}
            className={cn(
              "flex h-9 min-w-11 items-center justify-center rounded-full px-3 text-xs font-bold tracking-wide transition-colors",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
