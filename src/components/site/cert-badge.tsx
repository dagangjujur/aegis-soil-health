"use client";

/** Badge sertifikasi: KEMENTAN RI & UNPAD — muncul di setiap sub-halaman. */

import { ShieldCheck, FlaskConical } from "lucide-react";
import { SITE } from "@/content";
import { useLanguage } from "./language-context";
import { cn } from "@/lib/utils";

export function CertBadge({
  kind,
  className,
}: {
  kind: "kementan" | "unpad";
  className?: string;
}) {
  const { lang, t } = useLanguage();
  const cert = kind === "kementan" ? SITE.certs.kementan : SITE.certs.unpad;
  const Icon = kind === "kementan" ? ShieldCheck : FlaskConical;

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3",
        className
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
          kind === "kementan" ? "bg-primary/10 text-primary" : "bg-terra/10 text-terra"
        )}
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 leading-tight">
        <p className="text-sm font-bold text-foreground">
          {cert.label} <span className="font-mono text-xs font-semibold text-muted-foreground">{cert.number}</span>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{t(cert.detail)}</p>
      </div>
    </div>
  );
}

export function CertBadgePair({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      <CertBadge kind="kementan" />
      <CertBadge kind="unpad" />
    </div>
  );
}

/** Strip kecil untuk footer */
export function CertStrip({ className }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground", className)}>
      <span className="inline-flex items-center gap-1.5">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
        {SITE.certs.kementan.label} {SITE.certs.kementan.number}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <FlaskConical className="h-3.5 w-3.5 text-terra" aria-hidden="true" />
        {SITE.certs.unpad.label} {SITE.certs.unpad.number}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span aria-hidden="true">·</span> {t(SITE.certs.shelfLife)}
      </span>
    </div>
  );
}
