"use client";

/** Catatan label jujur untuk konten ekstrapolasi (§6.5/§6.6, acceptance criteria). */

import { Info } from "lucide-react";
import { common } from "@/content";
import { useLanguage } from "./language-context";
import { cn } from "@/lib/utils";

export function GuidanceNote({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { lang } = useLanguage();

  return (
    <aside
      className={cn(
        "rounded-xl border border-terra/30 bg-terra-soft/60 px-4 py-3.5",
        className
      )}
      role="note"
    >
      <p className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
        <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-terra" aria-hidden="true" />
        <span>
          <strong className="font-semibold text-terra">{common.labels.guidance[lang]}</strong>
          {children ? <span className="block text-foreground/80">{children}</span> : null}
        </span>
      </p>
    </aside>
  );
}
