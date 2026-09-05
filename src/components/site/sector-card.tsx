"use client";

/** Kartu sektor besar untuk router hero di beranda. */

import { Wheat, TreePalm, Bird, ArrowRight } from "lucide-react";
import { home, ROUTES, type Locale } from "@/content";
import { useLanguage } from "./language-context";
import { cn } from "@/lib/utils";

const SECTOR_ICONS = {
  padi: Wheat,
  kebun: TreePalm,
  ternak: Bird,
} as const;

const SECTOR_ROUTES = {
  padi: ROUTES.padi,
  kebun: ROUTES.kebun,
  ternak: ROUTES.ternak,
} as const;

type SectorKey = keyof typeof SECTOR_ICONS;

export function SectorCard({
  sector,
  className,
}: {
  sector: (typeof home.sectors)[number];
  className?: string;
}) {
  const { lang } = useLanguage();
  const key = sector.key as SectorKey;
  const Icon = SECTOR_ICONS[key];
  const title = (sector.title as Locale)[lang];
  const pitch = (sector.pitch as Locale)[lang];
  const cta = (sector.cta as Locale)[lang];

  return (
    <a
      href={`#${SECTOR_ROUTES[key]}`}
      className={cn(
        "group relative flex min-h-44 w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-all duration-200",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        className
      )}
    >
      {/* Latar dekoratif */}
      <span
        aria-hidden="true"
        className="microbe-dots pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom_right,black,transparent_65%)]"
      />

      <span className="relative flex items-start justify-between gap-3">
        <span
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
            key === "padi" && "bg-primary/10 text-primary",
            key === "kebun" && "bg-terra/10 text-terra",
            key === "ternak" && "bg-leaf/10 text-leaf"
          )}
          aria-hidden="true"
        >
          <Icon className="h-7 w-7" strokeWidth={1.7} />
        </span>
        <ArrowRight
          className="h-5 w-5 shrink-0 text-muted-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-terra"
          aria-hidden="true"
        />
      </span>

      <span className="relative mt-5 block">
        <span className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </span>
        <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{pitch}</span>
        <span className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-bold text-terra">
          {cta}
        </span>
      </span>
    </a>
  );
}
