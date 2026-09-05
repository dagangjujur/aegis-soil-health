"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Handshake } from "lucide-react";
import { useLanguage } from "./language-context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PartnerItem {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  order: number;
}

export function PartnerShowcase() {
  const { lang } = useLanguage();
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/partners")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data)) {
          setPartners(data);
        }
      })
      .catch((err) => console.error("Error loading partners:", err))
      .finally(() => setLoading(false));
  }, []);

  if (!loading && partners.length === 0) {
    return null;
  }

  // Jika partner sedikit (1, 2, atau 3), tampilkan statis dan selalu terpusat di tengah layar
  const isFew = partners.length <= 3;

  return (
    <section className="border-t border-border/70 bg-paper-deep/30 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-terra">
            <Handshake className="h-4 w-4" aria-hidden="true" />
            {lang === "id" ? "Kemitraan Strategis" : "Strategic Partnerships"}
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
            {lang === "id"
              ? "Partner Resmi PT Biotek Agro Nusantara"
              : "Official Partners of PT Biotek Agro Nusantara"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            {lang === "id"
              ? "Bekerja sama dengan gabungan kelompok tani, koperasi agribisnis, asosiasi komoditas, dan lembaga riset untuk ketahanan tanah nusantara."
              : "Collaborating with farmer groups, agricultural cooperatives, commodity associations, and research institutes for sustainable soil health."}
          </p>
        </div>

        {loading ? (
          <div className="mt-10 flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : isFew ? (
          /* JIKA 1, 2, atau 3 PARTNER: Tampil statis terpusat di tengah */
          <div className="mt-10 flex flex-wrap items-stretch justify-center gap-6">
            {partners.map((partner) => (
              <a
                key={partner.id}
                href={partner.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`${partner.name} - Buka website resmi`}
                className="group flex w-64 sm:w-72 flex-col items-center justify-between rounded-2xl border border-border bg-card p-6 text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="relative flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-background/80 p-2">
                  {partner.logoUrl ? (
                    <img
                      src={partner.logoUrl}
                      alt={`Logo ${partner.name}`}
                      className="max-h-16 max-w-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <Handshake className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>

                <div className="mt-4 flex w-full flex-col items-center">
                  <span className="line-clamp-2 text-xs font-semibold leading-snug text-foreground/90 group-hover:text-primary">
                    {partner.name}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground group-hover:text-terra">
                    <span>{lang === "id" ? "Kunjungi web" : "Visit website"}</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          /* JIKA LEBIH DARI 3 PARTNER: Carousel interaktif responsif */
          <div className="mt-10 px-8 sm:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {partners.map((partner) => (
                  <CarouselItem
                    key={partner.id}
                    className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <a
                      href={partner.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${partner.name} - Buka website resmi`}
                      className="group flex h-full min-h-[220px] flex-col items-center justify-between rounded-2xl border border-border bg-card p-5 text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                    >
                      <div className="relative flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-background/80 p-2">
                        {partner.logoUrl ? (
                          <img
                            src={partner.logoUrl}
                            alt={`Logo ${partner.name}`}
                            className="max-h-16 max-w-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <Handshake className="h-8 w-8 text-muted-foreground" />
                        )}
                      </div>

                      <div className="mt-4 flex w-full flex-col items-center">
                        <span className="line-clamp-2 text-xs font-semibold leading-snug text-foreground/90 group-hover:text-primary">
                          {partner.name}
                        </span>
                        <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground group-hover:text-terra">
                          <span>{lang === "id" ? "Kunjungi web" : "Visit website"}</span>
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </span>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-6 sm:-left-8 border-border bg-card/90 hover:bg-card text-foreground" />
              <CarouselNext className="-right-6 sm:-right-8 border-border bg-card/90 hover:bg-card text-foreground" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
