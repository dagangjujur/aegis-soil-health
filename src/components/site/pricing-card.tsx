"use client";

/** Kartu harga HET — dipakai ulang di semua halaman sektor. */

import { MapPin, Package, Globe2, Factory } from "lucide-react";
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

  const pricingTiers = [
    { key: "java", price: SITE.pricing.java, icon: MapPin, badge: "Regional" },
    { key: "outsideJava", price: SITE.pricing.outsideJava, icon: Package, badge: "Nusantara" },
    { key: "international", price: SITE.pricing.international, icon: Globe2, badge: "Ekspor" },
  ] as const;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        className
      )}
    >
      <div className="border-b border-border bg-primary px-5 py-4 sm:px-6">
        <h3 className="font-display text-lg font-semibold text-primary-foreground">
          {lang === "id" ? "Harga Resmi BIO7" : "BIO7 Official Pricing"}
        </h3>
        <p className="mt-0.5 text-xs text-primary-foreground/75">
          {SITE.product} · {t(SITE.pricing.unit)} · HET Terstandarisasi Pabrik
        </p>
      </div>

      <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {pricingTiers.map(({ key, price, icon: Icon, badge }) => (
          <div key={key} className="px-4 py-5 sm:px-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1.5">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <span className="truncate">{common.labels[key][lang]}</span>
                </p>
                <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-primary shrink-0">
                  {badge}
                </span>
              </div>
              <p className="mt-2.5 font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {price.display}
              </p>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">{t(SITE.pricing.unit)}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3 border-t border-border bg-paper-deep/60 px-5 py-4 sm:px-6">
        <p className="text-xs leading-relaxed text-muted-foreground">{common.labels.hetNote[lang]}</p>
        <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
          <Factory className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          {lang === "id"
            ? "Produk original dikirim langsung dari fasilitas kultur & manufaktur terpadu PT Biotek Agro Nusantara, Bandung."
            : "Original products ship directly from PT Biotek Agro Nusantara's integrated culture & manufacturing facility, Bandung."}
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
