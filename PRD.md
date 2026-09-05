# PRD — Aegis Soil Health & BIO7 Corporate Website

**Product**: Corporate website for PT Aegis Soil Health and its flagship product **BIO7** (multi-microbial bioactivator)
**Source of truth**: `upload/AEGIS_BIO7_MASTER_PROMPT.md` (verbatim product data in PRD Appendix A)
**Owner / Sole maintainer**: Aris Setiadi (founder-marketer, non-technical, Bahasa Indonesia)
**This implementation**: Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui, single-route deployment

---

## 1. Problem & Opportunity

BIO7 has been on the market 20+ years (producer: PT Biotek Agro Nusantara, Bandung) with **no professional marketing**. Aris is the appointed exclusive marketer with 12 h/day, zero budget, zero distribution network, and a direct-sales-only model. The website must:

1. Establish scientific credibility (lab-verified consortium, KEMENTAN registration, UNPAD CoA).
2. Rebrand BIO7 from "Bio7 Padi" (rice-only) to a **multi-purpose bioactivator** (agriculture / plantation / livestock) while keeping rice as the deepest entry market.
3. Convert every visitor toward **one funnel: WhatsApp chat with Aris** (no cart, no login, no payment gateway).
4. Be maintainable by a non-technical person through a single source-of-truth content file.

## 2. Goals & Success Criteria

| # | Goal | Acceptance criterion |
|---|------|----------------------|
| G1 | Router-style home | Home shows brand mark, 1-sentence value prop, 3 sector CTAs, 1 secondary WA CTA, minimal footer — nothing else |
| G2 | Deep rice page | All §3 protocols (A–D + emergency + horticulture) rendered as scannable tables in Bahasa Indonesia |
| G3 | Multi-sector pages | /kebun & /ternak with honest "petunjuk aplikasi — belum ada uji lapangan spesifik" labeling |
| G4 | Bilingual | ID (default) ⇄ EN toggle on every view, persisted, no broken navigation |
| G5 | WhatsApp funnel | Context-specific pre-filled WA messages per page (padi/kebun/ternak/general) |
| G6 | Trust surfaces | KEMENTAN + UNPAD badges on every sub-page; pricing (Java / outside Java) on every sector page |
| G7 | Responsive & accessible | Works at 360/414/768/1280 px, WCAG 2.1 AA contrast, ≥44px tap targets, semantic HTML |
| G8 | Solo-maintainable | All copy + prices + contact in one typed content layer (`src/content/`) — no code edits needed for text changes |

Non-goals (explicit): no human-consumption claims, no reseller flows, no payment gateway, no accounts, no e-commerce cart, no live chat widget, no languages beyond ID+EN, no print raster assets, no paid ads setup.

## 3. Users

| Persona | Need | Primary path |
|---------|------|--------------|
| Rice farmer (Java, 40+) | Raise yield, fix acid soil, know exact dosage | Home → /padi → WhatsApp |
| Plantation manager (sawit, kopi, kakao) | Reduce chemical residue, honest guidance | Home → /kebun → WhatsApp |
| Livestock breeder (ayam, sapi, ikan) | Probiotic water / feed fermentation | Home → /ternak → WhatsApp |
| B2B / cooperative lead (Gapoktan, kiosk) | Bulk/OEM options, credibility proof | Home → /tentang → WhatsApp |
| International buyer | English content, OEM availability | EN toggle → /tentang |

All personas converge on one channel: **WhatsApp (+62) 852 2121 2223**.

## 4. Information Architecture

Production target (Cloudflare Pages, one domain `aegissoilhealth.com`):

```
/          Home hero router (ID default)
/padi      Rice sector (deepest content)
/kebun     Plantation & horticulture
/ternak    Livestock
/tentang   About / corporate / certifications
/kontak    Contact (form → pre-filled WhatsApp)
/blog      Placeholder article list
/privacy   Privacy policy
/terms     Terms of service
/disclaimer Agricultural claims disclaimer
```

**Sandbox adaptation (this environment)**: the preview sandbox exposes a single Next.js route (`/`). All views above are implemented as a **client-side hash router** inside `src/app/page.tsx` — `#/`, `#/padi`, `#/kebun`, `#/ternak`, `#/tentang`, `#/kontak`, `#/blog`, `#/privacy`, `#/terms`, `#/disclaimer`. The view map is 1:1 with the production routes; migrating to real routes is a file-move (documented in README). Hash routing also preserves back/forward navigation and deep links.

Header (all views): logo left · language toggle right · persistent WhatsApp button right. **No sector menu in header** (per §6.11 — visitors must feel "this is the page for me"). Footer (all views): cert badges, marketplace links, WA + email, subtle cross-sector links, copyright + disclaimer link.

## 5. Page Requirements

### 5.1 Home (`#/`)
Brand lockup (Aegis Soil Health × BIO7) · one-sentence ID value proposition · **three large sector buttons** (icon + 1-line pitch → padi/kebun/ternak) · secondary CTA "Belum yakin? Konsultasi gratis via WhatsApp" · minimal footer. No specs, no protocols, no testimonials, no FAQ on home.

### 5.2 `/padi` (deepest — content order per §6.4)
1. Hero (sector value prop + WA CTA)
2. Quick pitch — 3 bullets max
3. Verified credentials (KEMENTAN 03.02.2026.156 + UNPAD B-0529/12/2025)
4. General rules (urea ban after 30 HST, herbicide 7-day rule, tank-mix compatibility, seed soak, nursery spray)
5. Protocol A — Super Tiller (15/22/30 HST) table
6. Protocol B — Panicle Extension & Disease Shield (40/47 HST) table
7. Protocol C — Grain Enlargement table
8. Protocol D — Grain Filling & Maturation table
9. Emergency protocol — acid soil / pH drop ("Sapu Jagat")
10. Horticulture & secondary crops dosage
11. Field proof: Karawang 2023 (12,6 ton/ha vs 7,8 baseline, +61,5%, 1 ha, −40% NPK)
12. Pricing card (Java Rp55.000 / luar Jawa Rp65.000, HET non-negotiable note)
13. FAQ accordion + WA CTA

### 5.3 `/kebun` (per §6.5)
Hero · mechanism bullets (N-fixing, P-solubilizing, residue bioremediation, antifungal) **labeled as extrapolated application guidance** · dosage guidance (foliar 7 caps/16 L per 7–10 days; drench 1 cap/10 L per 15–30 days) · crops list (sawit, kopi, kakao, durian, mangga, cabai, tomat, kol, bawang) with short notes · honest WA CTA · pricing · FAQ.

### 5.4 `/ternak` (per §6.6)
Hero · 3 applications (probiotic drinking water, feed fermentation, barn sanitation) **labeled as extrapolated guidance** · dosage per livestock (broiler/layer 1–2 caps/L water 3–5 days/month; ruminants 5–10 caps/head/day; aquaculture 1 cap/100 m³ weekly) · WA CTA · pricing with dosage-different callout · FAQ.

### 5.5 `/tentang`
Mission (liberating soils from chemical toxicity) · consortium advantage vs single-strain · certifications · producer PT Biotek Agro Nusantara Bandung · 20+ year history.

### 5.6 `/kontak`
WA primary CTA · email · marketplace links (Shopee/Tokopedia/Lazada) · operating hours Senin–Sabtu 07.30–17.30 WIB · form (Nama, WhatsApp, Lokasi, Sektor, Pesan) → **opens pre-filled WhatsApp message** (no backend).

### 5.7 `/blog`
Placeholder list layout for future SEO articles (20 topics listed in marketing doc).

### 5.8 `/privacy`, `/terms`, `/disclaimer`
Clear 1-paragraph topic descriptions per §6.10; Aris finalizes with counsel. Disclaimer covers agricultural-claims scope.

## 6. Content Rules (binding)

- Bahasa Indonesia default; professional, edukatif-praktis register (no stiff corporate, no "gue/lo").
- Latin italics for scientific names (*Azospirillum* sp. etc.); farm terms as-is (HST, kresek, klowor, ambles, sundep, walang sangit).
- Indonesian number format ("12,6 ton", "Rp55.000"). No exclamation marks in technical copy — emphasis only in CTAs.
- Same mechanism explanation across all sector pages; only application differs.
- /kebun + /ternak extrapolated content must carry the honesty label.
- Forbidden generic phrases: "solusi terbaik", "one-stop solution", "terdepan", "nomor 1", "revolusioner", "ajaib", "100% aman", "tanpa efek samping", "garansi hasil".

## 7. Brand & Design Direction (detail in `docs/01-corporate-identity.md`)

- **Positioning**: scientific credibility + Indonesian-local warmth; NOT generic corporate, NOT generic "organic green".
- **Palette**: deep botanical green (primary #1F3D2B), laterite terracotta (accent #C2410C), warm paper background (#FAF7F0), soil-neutral text. WhatsApp CTAs use WhatsApp green (#1DA851) for platform recognition.
- **Typography**: Fraunces (display — warm scientific serif) + Plus Jakarta Sans (body — Indonesian-foundry sans, Tokotype). Type scale H1 36–56px, H2 24–30px, body 16–18px, small 13–14px.
- **Logo**: semantic wordmark system — "BIO7" with the "7" styled as a root/mycelium stroke; "AEGIS SOIL HEALTH" caps with generous tracking; shield-seed symbol variant. Described in CI doc; rendered in-app as CSS/SVG wordmark.
- **Photography policy**: real field photos anchor (Karawang plot); muted greens, earth tones; placeholder system (CSS gradient + icon + label) where photos don't exist yet (kebun/ternak). No stock people, no AI people.

## 8. Technical Design

```
src/
├── app/
│   ├── layout.tsx        SEO metadata (OG, twitter, canonical), fonts, lang=ID
│   ├── page.tsx          'use client' — hash router + view switch + LanguageProvider
│   └── globals.css       Tailwind 4 theme tokens (brand palette, radii, fonts)
├── content/              ← SINGLE SOURCE OF TRUTH (Aris edits here)
│   ├── site.ts           contact, prices, certs, marketplaces, nav routes
│   ├── i18n.ts           ID/EN dictionary for every view
│   └── protocols.ts      rice protocols (A–D, emergency, horticulture) data
├── components/
│   ├── ui/*              shadcn/ui (existing)
│   └── site/             Header, Footer, WhatsAppCTA, PricingCard, CertBadge,
│                         ProtocolTable, SectorCard, LanguageToggle, FAQ, GuidanceNote
public/
├── robots.txt, sitemap.xml (production domain URLs)
docs/                     CI, website spec, marketing strategy, content-ID copy
README.md                 maintainer guide (Aris)
```

- **State**: Language context (React context + localStorage, `aegis-lang`, default `id`); current view from `window.location.hash` with `hashchange` listener.
- **No backend, no database** in this deliverable (all data is static content; form submits client-side to WhatsApp deep link). Prisma remains available for future blog CMS but is intentionally unused (static-first, per master prompt §6.1).
- **Performance**: static rendering, next/font self-hosted fonts, zero render-blocking JS for above-fold (hash router is inline), lazy images, no heavy client libs beyond React.
- **SEO**: layout-level metadata (title, description, OG, twitter, canonical `https://aegissoilhealth.com`), robots.txt, sitemap.xml, schema.org Product JSON-LD injected on /padi view.
- **A11y**: semantic landmarks (header/main/footer/nav), aria-labels, focus-visible rings, 44px targets, contrast-checked palette (WCAG AA).

## 9. Milestones

1. **PRD (this doc)** → 2. **Content layer** → 3. **Theme + shared components** → 4. **Views + router** → 5. **Docs bundle (CI / spec / marketing / content-ID)** → 6. **README** → 7. **End-to-end browser verification** (360px + 1280px, bilingual toggle, all CTAs, all protocols) → 8. Worklog + handoff.

## 10. Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Hash routing limits per-page SEO in sandbox | Metadata set for production routes; sitemap.xml ships production URLs; README documents 1:1 route migration |
| Content drift between ID/EN | Both languages live in one typed dictionary; missing key = TypeScript error |
| Non-technical edits breaking build | Content files are plain string constants with comments; README has step-by-step edit workflow |
| Overclaiming on kebun/ternak | GuidanceNote component renders the honesty label wherever extrapolated content appears |

---

## Appendix A — Verified data (embedded verbatim, do not alter)

- **Microbial composition (CFU/ml)**: *Azospirillum* sp. 3,10 × 10⁷ · *Pseudomonas* sp. 4,00 × 10⁸ · *Bacillus* sp. 1,30 × 10⁸ · *Streptomyces* sp. 1,83 × 10⁹ · N-fixing consortium 3,10 × 10¹⁰ · P-solubilizing consortium 9,27 × 10⁷
- **Phytohormones**: IAA auxin, GA3 gibberellin complex, zeatin/kinetin cytokinins, fulvic & humic polyelectrolytes
- **Safety**: non-pathogenic, *E. coli* 0 CFU/ml, *Salmonella* sp. 0 CFU/ml
- **Certs**: KEMENTAN RI 03.02.2026.156 · UNPAD CoA No. B-0529/12/2025 (15 Jan 2026) · shelf life through July 2032
- **Pricing (HET)**: Java Rp55.000/L · outside Java Rp65.000/L · cost basis Rp40.000 · OEM/export exempt
- **Contact**: https://wa.me/6285221212223 · @aegissoilhealth.com · aegissoilhealth.com
- **Case**: Karawang 2023, Haji Karma, Jayakerta — 12,6 t/ha vs 7,8 t/ha baseline (+61,5%), −40% synthetic NPK, 1 ha
- **Producer**: PT Biotek Agro Nusantara, Bandung — 20+ years in market

*Full protocol tables (§3 of master prompt) are implemented in `src/content/protocols.ts` and rendered by `ProtocolTable`.*
