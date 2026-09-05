"use client";

/** Kartu harga HET — dipakai ulang di semua halaman sektor. */

import { MapPin, Package, Factory } from "lucide-react";
import { SITE, common } from "@/content";
import { useLanguage } from "./language-context";
import { WhatsAppCTA } from "./whatsapp-cta";
import { WA_MESSAGES } from "@/content";
import { cn } from "@/lib/utils";

export function PricingCard({
  waContext = "general",
  className,
}: {
  waContext?: keyof typeof WA_MESSAGES.id;
  className?: string;
}) {
  const { lang, t } = useLanguage();

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        className
      )}
    >
      <div className="border-b border-border bg-primary px-5 py-4 sm:px-6">
        <h3 className="font-display text-lg font-semibold text-primary-foreground">
          {lang === "id" ? "Harga BIO7" : "BIO7 Pricing"}
        </h3>
        <p className="mt-0.5 text-xs text-primary-foreground/75">
          {SITE.product} · {t(SITE.pricing.unit)} · HET
        </p>
      </div>

      <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {(
          [
            { key: "java", price: SITE.pricing.java, icon: MapPin },
            { key: "outsideJava", price: SITE.pricing.outsideJava, icon: Package },
          ] as const
        ).map(({ key, price, icon: Icon }) => (
          <div key={key} className="px-5 py-5 sm:px-6">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              {common.labels[key][lang]}
            </p>
            <p className="mt-2 font-display text-3xl font-bold tracking-tight text-primary">{price.display}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t(SITE.pricing.unit)}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3 border-t border-border bg-paper-deep/60 px-5 py-4 sm:px-6">
        <p className="text-xs leading-relaxed text-muted-foreground">{common.labels.hetNote[lang]}</p>
        <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
          <Factory className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          {lang === "id"
            ? "Model dropship: produk dikirim langsung dari produsen (PT Biotek Agro Nusantara, Bandung) per pesanan."
            : "Dropship model: products ship directly from the manufacturer (PT Biotek Agro Nusantara, Bandung) per order."}
        </p>
        <WhatsAppCTA
          message={WA_MESSAGES[lang][waContext]}
          label={lang === "id" ? "Pesan & konsultasi via WhatsApp" : "Order & consult via WhatsApp"}
          size="sm"
          className="w-full"
        />
      </div>
    </div>
  );
}
