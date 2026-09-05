"use client";

/**
 * HALAMAN KONTAK (§6.8).
 * Formulir → pesan WhatsApp terisi otomatis (tanpa backend).
 */

import { useState } from "react";
import { Mail, Clock, ExternalLink, Send, MapPin, MessageSquareText } from "lucide-react";
import { Section, SectionHeading } from "../section";
import { WhatsAppCTA } from "../whatsapp-cta";
import { WhatsAppIcon } from "../logo";
import { kontak as kk, common, WA_MESSAGES, SITE, waLink } from "@/content";
import { useLanguage } from "../language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function KontakView() {
  const { lang } = useLanguage();
  const [form, setForm] = useState({ name: "", wa: "", location: "", sector: "padi", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const sectorLabel = (value: string) => {
    const item = kk.form.sectors.find((s) => s.value === value);
    return item ? item.label[lang] : value;
  };

  function composeMessage(): string {
    const lines =
      lang === "id"
        ? [
            "Halo Aris, saya menghubungi dari formulir situs web:",
            "",
            `Nama: ${form.name}`,
            `WhatsApp: ${form.wa}`,
            `Lokasi: ${form.location || "-"}`,
            `Sektor: ${sectorLabel(form.sector)}`,
            "",
            "Pesan:",
            form.message,
          ]
        : [
            "Hello Aris, I am contacting you from the website form:",
            "",
            `Name: ${form.name}`,
            `WhatsApp: ${form.wa}`,
            `Location: ${form.location || "-"}`,
            `Sector: ${sectorLabel(form.sector)}`,
            "",
            "Message:",
            form.message,
          ];
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, boolean> = {};
    if (!form.name.trim()) next.name = true;
    if (!form.wa.trim()) next.wa = true;
    if (!form.message.trim()) next.message = true;
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    window.open(waLink(composeMessage()), "_blank", "noopener,noreferrer");
  }

  const inputClass = (bad?: boolean) =>
    cn("h-12 rounded-xl border-border bg-card text-base", bad && "border-destructive focus-visible:outline-destructive");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-paper-deep/40">
        <div aria-hidden="true" className="microbe-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_20%_0%,black,transparent)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-terra">{kk.hero.eyebrow[lang]}</p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {kk.hero.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{kk.hero.lead[lang]}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          {/* KANAL KONTAK */}
          <div className="space-y-4 lg:col-span-2">
            {/* Foto Fasilitas Bandung */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative h-44 w-full">
                <img
                  src="/hero-biotek.jpg"
                  alt="Pusat Formulasi dan Laboratorium PT Biotek Agro Nusantara Bandung"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/90">
                    Fasilitas Terpadu
                  </p>
                  <p className="font-display text-sm font-bold text-white">
                    PT Biotek Agro Nusantara — Bandung
                  </p>
                </div>
              </div>
            </div>

            <a
              href={waLink(WA_MESSAGES[lang].general)}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border-2 border-wa/50 bg-wa/5 p-5 transition-colors hover:border-wa hover:bg-wa/10"
            >
              <p className="flex items-center gap-2.5 text-sm font-bold text-foreground">
                <WhatsAppIcon className="h-5 w-5 text-wa" />
                {kk.channels.wa[lang]}
              </p>
              <p className="mt-2 font-mono text-lg font-bold text-foreground">{SITE.whatsapp.display}</p>
              <p className="mt-1 text-xs text-muted-foreground">{kk.channels.waNote[lang]}</p>
            </a>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="flex items-center gap-2.5 text-sm font-bold text-foreground">
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                {kk.channels.email[lang]}
              </p>
              <a href={`mailto:${SITE.email}`} className="mt-2 block text-sm font-semibold text-primary underline-offset-4 hover:underline">
                {SITE.email}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">{kk.channels.emailNote[lang]}</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="flex items-center gap-2.5 text-sm font-bold text-foreground">
                <MapPin className="h-5 w-5 text-terra" aria-hidden="true" />
                {kk.channels.marketplace[lang]}
              </p>
              <ul className="mt-3 space-y-2">
                {SITE.marketplaces.map((m) => (
                  <li key={m.name}>
                    <a
                      href={`${m.url}/search?q=${encodeURIComponent(m.query)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      {m.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">{kk.channels.marketplaceNote[lang]}</p>
            </div>

            <div className="rounded-2xl border border-border bg-paper-deep/60 p-5">
              <p className="flex items-center gap-2.5 text-sm font-bold text-foreground">
                <Clock className="h-5 w-5 text-leaf" aria-hidden="true" />
                {kk.channels.hours[lang]}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{SITE.hours[lang]}</p>
            </div>
          </div>

          {/* FORMULIR */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <SectionHeading title={kk.form.title} subtitle={kk.form.lead} className="mb-8" />

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="f-name">{kk.form.name[lang]}</Label>
                    <Input
                      id="f-name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={kk.form.namePh[lang]}
                      className={inputClass(errors.name)}
                      aria-invalid={!!errors.name}
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-xs text-destructive">{kk.form.validation.name[lang]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="f-wa">{kk.form.wa[lang]}</Label>
                    <Input
                      id="f-wa"
                      value={form.wa}
                      onChange={(e) => setForm({ ...form, wa: e.target.value })}
                      placeholder={kk.form.waPh[lang]}
                      className={inputClass(errors.wa)}
                      aria-invalid={!!errors.wa}
                      inputMode="tel"
                      autoComplete="tel"
                    />
                    {errors.wa && <p className="text-xs text-destructive">{kk.form.validation.wa[lang]}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="f-loc">{kk.form.location[lang]}</Label>
                    <Input
                      id="f-loc"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder={kk.form.locationPh[lang]}
                      className={inputClass()}
                      autoComplete="address-level2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="f-sector">{kk.form.sector[lang]}</Label>
                    <Select value={form.sector} onValueChange={(v) => setForm({ ...form, sector: v })}>
                      <SelectTrigger id="f-sector" className="h-12 rounded-xl border-border bg-card text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {kk.form.sectors.map((s) => (
                          <SelectItem key={s.value} value={s.value} className="text-base">
                            {s.label[lang]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="f-msg">{kk.form.message[lang]}</Label>
                  <Textarea
                    id="f-msg"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={kk.form.messagePh[lang]}
                    rows={5}
                    className={cn("rounded-xl border-border bg-card text-base", errors.message && "border-destructive")}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-xs text-destructive">{kk.form.validation.message[lang]}</p>}
                </div>

                <Button
                  type="submit"
                  className="h-13 w-full gap-2.5 rounded-full bg-wa px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-wa/20 transition-colors hover:bg-wa-dark sm:w-auto"
                >
                  <Send className="h-4.5 w-4.5" aria-hidden="true" />
                  {kk.form.submit[lang]}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA BAWAH */}
      <Section tone="paper">
        <div className="flex flex-col items-center gap-4 text-center">
          <MessageSquareText className="h-8 w-8 text-wa" aria-hidden="true" />
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{common.mechanism[lang]}</p>
          <WhatsAppCTA message={WA_MESSAGES[lang].general} label={common.cta.consult[lang]} size="lg" />
        </div>
      </Section>
    </>
  );
}
