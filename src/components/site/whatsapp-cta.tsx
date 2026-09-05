"use client";

/** Tombol CTA WhatsApp dengan pesan terisi sesuai konteks halaman. */

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./logo";
import { waLink } from "@/content";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "soft";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-11 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-base sm:text-lg",
};

export function WhatsAppCTA({
  message,
  label,
  variant = "solid",
  size = "md",
  className,
  ariaLabel,
}: {
  message: string;
  label: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
}) {
  const variantClass =
    variant === "solid"
      ? "bg-wa text-white shadow-md shadow-wa/20 hover:bg-wa-dark"
      : variant === "outline"
        ? "border-2 border-wa text-wa bg-transparent hover:bg-wa/10"
        : "bg-leaf-soft text-primary hover:bg-leaf-soft/70";

  return (
    <Button asChild className={cn("gap-2.5 rounded-full font-semibold", sizes[size], variantClass, className)}>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel ?? label}
      >
        <WhatsAppIcon className={cn(size === "lg" ? "h-5 w-5" : "h-4.5 w-4.5")} />
        {label}
      </a>
    </Button>
  );
}
