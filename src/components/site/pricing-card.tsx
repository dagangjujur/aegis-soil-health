"use client";

/** Kartu harga HET resmi — responsif, rapi tanpa overflow, dengan pemesanan spesifik per zona */

import { useState } from "react";
import { MapPin, Package, Globe2, Factory, CheckCircle2, ChevronRight } from "lucide-react";
import { SITE, common, waLink } from "@/content";
import { useLanguage } from "./language-context";
import { WhatsAppIcon } from "./logo";
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
  const [selectedZone, setSelectedZone] = useState<"java" | "outsideJava" | "international">("java");

  const pricingTiers = [
    {
      key: "java" as const,
      price: SITE.pricing.java,
      icon: MapPin,
      badge: "Regional",
      title: lang === "id" ? "Pulau Jawa" : "Java Island",
      desc: lang === "id" ? "HET standar pengiriman Jawa" : "Standard Java regional rate",
      waText: lang === "id"
        ? "Halo PT Biotek Agro Nusantara, saya ingin memesan BIO7 untuk pengiriman wilayah Pulau Jawa (HET Rp55.000/botol). Mohon info prosedur pemesanan & estimasi pengiriman."
        : "Hello PT Biotek Agro Nusantara, I would like to order BIO7 for Java Island delivery (IDR 55,000/bottle). Please advise ordering steps & delivery estimate.",
    },
    {
      key: "outsideJava" as const,
      price: SITE.pricing.outsideJava,
      icon: Package,
      badge: "Nusantara",
      title: lang === "id" ? "Luar Jawa" : "Outside Java",
      desc: lang === "id" ? "Pengiriman antar-pulau Indonesia" : "Inter-island Indonesian delivery",
      waText: lang === "id"
        ? "Halo PT Biotek Agro Nusantara, saya ingin memesan BIO7 untuk pengiriman Luar Pulau Jawa (HET Rp65.000/botol). Mohon info prosedur pemesanan & ekspedisi ke lokasi saya."
        : "Hello PT Biotek Agro Nusantara, I would like to order BIO7 for Outside Java delivery (IDR 65,000/bottle). Please advise ordering steps & shipping options to my area.",
    },
    {
      key: "international" as const,
      price: SITE.pricing.international,
      icon: Globe2,
      badge: "Ekspor",
      title: lang === "id" ? "Luar Indonesia" : "International",
      desc: lang === "id" ? "Standar resmi pengadaan ekspor" : "Official export procurement rate",
      waText: lang === "id"
        ? "Halo PT Biotek Agro Nusantara, saya tertarik pemesanan/pengadaan BIO7 untuk Luar Indonesia / Ekspor (HET Rp75.000/botol). Mohon info persyaratan dokumen & pengiriman internasional."
        : "Hello PT Biotek Agro Nusantara, I am interested in BIO7 procurement for Outside Indonesia / Export (IDR 75,000/bottle). Please advise documentation & international shipping requirements.",
    },
  ];

  const currentZone = pricingTiers.find((z) => z.key === selectedZone) || pricingTiers[0];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-border bg-card shadow-md",
        className
      )}
    >
      {/* Header Kartu */}
      <div className="border-b border-border bg-primary px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold text-primary-foreground">
              {lang === "id" ? "Daftar Harga Resmi BIO7" : "BIO7 Official Price List"}
            </h3>
            <p className="mt-0.5 text-xs text-primary-foreground/80">
              {SITE.product} · {t(SITE.pricing.unit)} · HET Terstandarisasi Pabrik
            </p>
          </div>
          <span className="hidden xs:inline-flex items-center gap-1 rounded-full bg-primary-foreground/15 px-2.5 py-1 text-[11px] font-bold text-white">
            <CheckCircle2 className="h-3.5 w-3.5 text-leaf" />
            3 Zona Resmi
          </span>
        </div>
      </div>

      {/* Grid Zona Harga Bersih & Bebas Overflow */}
      <div className="p-4 sm:p-5 space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground px-1">
          {lang === "id" ? "Pilih Wilayah Pengiriman Anda:" : "Select Your Delivery Region:"}
        </p>

        <div className="grid gap-3">
          {pricingTiers.map(({ key, price, icon: Icon, badge, title, desc }) => {
            const isSelected = selectedZone === key;
            return (
              <div
                key={key}
                onClick={() => setSelectedZone(key)}
                className={cn(
                  "cursor-pointer relative flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 rounded-2xl border p-4 transition-all duration-200",
                  isSelected
                    ? "border-primary bg-primary/5 shadow-xs ring-2 ring-primary/20"
                    : "border-border/80 bg-paper-deep/40 hover:border-primary/40 hover:bg-paper-deep/70"
                )}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                      isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-display text-base font-bold text-foreground truncate">
                        {title}
                      </p>
                      <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-primary shrink-0">
                        {badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{desc}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between xs:justify-end gap-3 w-full xs:w-auto pt-2 xs:pt-0 border-t xs:border-t-0 border-border/60">
                  <div className="text-left xs:text-right">
                    <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-primary">
                      {price.display}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{t(SITE.pricing.unit)}</p>
                  </div>
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors",
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-transparent"
                    )}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Catatan & Tombol Pesan Langsung Sesuai Zona Terpilih */}
      <div className="space-y-3.5 border-t border-border bg-paper-deep/60 px-5 py-4 sm:px-6">
        <p className="text-xs leading-relaxed text-muted-foreground">{common.labels.hetNote[lang]}</p>
        <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
          <Factory className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          {lang === "id"
            ? "Produk original dikirim langsung dari fasilitas kultur & manufaktur terpadu PT Biotek Agro Nusantara, Bandung."
            : "Original products ship directly from PT Biotek Agro Nusantara's integrated culture & manufacturing facility, Bandung."}
        </p>
        
        {/* Tombol Pemesanan Otomatis Sesuai Zona yang Diklik */}
        <a
          href={waLink(currentZone.waText)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-semibold text-white shadow-md shadow-wa/20 transition-all hover:bg-wa-dark hover:shadow-lg"
        >
          <WhatsAppIcon className="h-4.5 w-4.5 shrink-0 text-white" />
          <span>
            {lang === "id"
              ? `Pesan untuk ${currentZone.title} (${currentZone.price.display}) via WhatsApp`
              : `Order for ${currentZone.title} (${currentZone.price.display}) via WhatsApp`}
          </span>
          <ChevronRight className="h-4 w-4 ml-0.5 shrink-0" />
        </a>
      </div>
    </div>
  );
}

