"use client";

/**
 * Tabel protokol padi — scannable, responsif:
 * - Layar ≥ md: tabel bermakna kolom (Bahan | Dosis | Fungsi).
 * - Layar kecil: tiap bahan jadi kartu bertumpuk.
 */

import { Clock, Target, Droplets, ListOrdered, Sprout } from "lucide-react";
import type { Protocol, TankMixRow } from "@/content";
import { padi as pd } from "@/content";
import { useLanguage } from "./language-context";
import { cn } from "@/lib/utils";

function TankMixTable({ rows }: { rows: TankMixRow[] }) {
  const { lang } = useLanguage();
  const isBio7 = (v: string) => v === "BIO7";

  return (
    <>
      {/* Tabel untuk layar sedang ke atas */}
      <div className="hidden overflow-hidden rounded-xl border border-border md:block">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{pd.protocols.tankMix[lang]}</caption>
          <thead>
            <tr className="bg-paper-deep text-left">
              <th scope="col" className="px-4 py-3 font-semibold text-primary">{pd.protocols.input[lang]}</th>
              <th scope="col" className="px-4 py-3 font-semibold text-primary">{pd.protocols.dosage[lang]}</th>
              <th scope="col" className="px-4 py-3 font-semibold text-primary">{pd.protocols.func[lang]}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {rows.map((row) => (
              <tr key={row.input.id} className={cn(isBio7(row.input.en) && "bg-leaf-soft/40")}>
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">
                  {row.input[lang]}
                </th>
                <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-terra">
                  {row.dosage[lang]}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{row.func[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Kartu bertumpuk untuk layar kecil */}
      <ul className="space-y-2.5 md:hidden">
        {rows.map((row) => (
          <li
            key={row.input.id}
            className={cn(
              "rounded-xl border border-border bg-card p-3.5",
              isBio7(row.input.en) && "border-leaf/40 bg-leaf-soft/40"
            )}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <p className="text-sm font-bold text-foreground">{row.input[lang]}</p>
              <p className="rounded-full bg-terra/10 px-2.5 py-0.5 font-mono text-xs font-bold text-terra">
                {row.dosage[lang]}
              </p>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{row.func[lang]}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export function ProtocolBlock({ protocol, className }: { protocol: Protocol; className?: string }) {
  const { lang } = useLanguage();

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        className
      )}
      id={`protokol-${protocol.key}`}
    >
      {/* Kepala protokol */}
      <header className="border-b border-border bg-primary px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 font-display text-sm font-bold text-primary-foreground">
            {protocol.key}
          </span>
          <h3 className="font-display text-lg font-semibold text-primary-foreground sm:text-xl">
            {protocol.name[lang]}
          </h3>
        </div>
        <dl className="mt-3 grid gap-x-6 gap-y-2 text-xs text-primary-foreground/85 sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <div>
              <dt className="font-semibold text-primary-foreground">{pd.protocols.timing[lang]}</dt>
              <dd>{protocol.timing[lang]}</dd>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Target className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <div>
              <dt className="font-semibold text-primary-foreground">{pd.protocols.objective[lang]}</dt>
              <dd>{protocol.objective[lang]}</dd>
            </div>
          </div>
        </dl>
      </header>

      {/* Isi */}
      <div className="space-y-5 px-5 py-5 sm:px-6">
        <div>
          <h4 className="mb-2.5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
            <Sprout className="h-4 w-4" aria-hidden="true" />
            {pd.protocols.tankMix[lang]}
          </h4>
          <TankMixTable rows={protocol.tankMix} />
        </div>

        {protocol.basal.items.length > 0 && (
          <div className="rounded-xl bg-paper-deep/70 p-4">
            <h4 className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <ListOrdered className="h-4 w-4" aria-hidden="true" />
              {protocol.basal.title[lang]}
            </h4>
            <ul className="list-inside list-disc space-y-1.5 text-sm text-foreground/90">
              {protocol.basal.items.map((item, i) => (
                <li key={i}>{item[lang]}</li>
              ))}
            </ul>
          </div>
        )}

        {protocol.notes && protocol.notes.length > 0 && (
          <div>
            <h4 className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {pd.protocols.technique[lang]}
            </h4>
            <ul className="list-inside list-disc space-y-1.5 text-sm text-foreground/90">
              {protocol.notes.map((note, i) => (
                <li key={i}>{note[lang]}</li>
              ))}
            </ul>
          </div>
        )}

        {protocol.waterManagement && (
          <p className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground/90">
            <Droplets className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-primary">{pd.protocols.water[lang]}:</strong>{" "}
              {protocol.waterManagement[lang]}
            </span>
          </p>
        )}
      </div>
    </article>
  );
}
