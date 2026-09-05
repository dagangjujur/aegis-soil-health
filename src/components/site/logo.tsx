/**
 * Logo Aegis Soil Health / BIO7.
 * Simbol: perisai-biji (aegis = perisai) dengan tunas + titik mikroba —
 * "perlindungan yang menumbuhkan". Semua vektor, tanpa aset raster.
 */

import { cn } from "@/lib/utils";

export function AegisMark({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-9", inverted && "text-primary-foreground", className)}
    >
      {/* Perisai */}
      <path
        d="M24 4 6 10v14c0 11 7.6 18.4 18 22 10.4-3.6 18-11 18-22V10L24 4Z"
        className={inverted ? "fill-primary-foreground/12 stroke-primary-foreground" : "fill-primary"}
        strokeWidth={inverted ? 1.5 : 0}
      />
      {/* Tunas — batang */}
      <path d="M24 34V22" stroke="currentColor" className={inverted ? "text-primary-foreground" : "text-primary-foreground"} strokeWidth="2.4" strokeLinecap="round" />
      {/* Daun kiri */}
      <path
        d="M24 26c-5.5 0-8.5-3.2-9-8 5.2-.2 9 2.6 9 8Z"
        className={inverted ? "fill-primary-foreground/70" : "fill-leaf"}
        stroke="none"
      />
      {/* Daun kanan */}
      <path
        d="M24 22c5.5 0 8.5-3.2 9-8-5.2-.2-9 2.6-9 8Z"
        className={inverted ? "fill-primary-foreground/70" : "fill-terra"}
        stroke="none"
      />
      {/* Titik mikroba di dalam perisai bawah */}
      <circle cx="16" cy="31" r="1.8" className={inverted ? "fill-primary-foreground" : "fill-leaf"} />
      <circle cx="24" cy="37" r="1.8" className={inverted ? "fill-primary-foreground" : "fill-terra"} />
      <circle cx="32" cy="31" r="1.8" className={inverted ? "fill-primary-foreground" : "fill-leaf"} />
    </svg>
  );
}

export function BrandLockup({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <AegisMark className={compact ? "h-8 w-8" : "h-9 w-9"} />
      <span className="hidden sm:flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-primary">
          Aegis Soil Health
        </span>
        <span className="mt-1 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-terra">
          <span aria-hidden="true">BIO7</span>
          <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-terra/60" />
          <span className="text-muted-foreground/80">PT Biotek Agro</span>
        </span>
      </span>
    </span>
  );
}

/** Wordmark besar BIO7 untuk hero — angka 7 bergaya akar */
export function Bio7Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display font-semibold leading-none tracking-tight", className)}>
      <span className="text-primary">BIO</span>
      <span className="relative inline-block text-terra">
        7
        <svg
          viewBox="0 0 24 14"
          aria-hidden="true"
          className="absolute -bottom-2 left-0 h-3 w-full"
          preserveAspectRatio="none"
        >
          {/* garis akar di bawah angka 7 */}
          <path d="M1 2c6 0 10 8 22 8" stroke="currentColor" strokeWidth="1.6" fill="none" className="text-terra/50" strokeLinecap="round" />
          <path d="M7 3c-1 2-3 3-5 3.5" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-terra/40" strokeLinecap="round" />
          <path d="M16 7c1.5-2 3.5-3 5.5-3" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-terra/40" strokeLinecap="round" />
        </svg>
      </span>
    </span>
  );
}

/** Ikon WhatsApp (glyph resmi) — lucide tidak punya ikon brand */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-4 w-4", className)}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
