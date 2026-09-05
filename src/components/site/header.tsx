"use client";

/** Header: logo kiri · toggle bahasa + tombol WhatsApp kanan. TANPA menu sektor (§6.11). */

import { BrandLockup, WhatsAppIcon } from "./logo";
import { LanguageToggle } from "./language-toggle";
import { SITE, WA_MESSAGES, common, waLink } from "@/content";
import { useLanguage } from "./language-context";
import { Button } from "@/components/ui/button";

export function Header({ route }: { route: string }) {
  const { lang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#/"
          aria-label={common.nav.home[lang]}
          className="min-w-0 shrink transition-opacity hover:opacity-80"
        >
          <BrandLockup compact={route !== "/"} />
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <Button
            asChild
            size="sm"
            className="h-11 gap-2 rounded-full bg-wa px-4 font-semibold text-white shadow-sm transition-colors hover:bg-wa-dark sm:px-5"
          >
            <a
              href={waLink(WA_MESSAGES[lang].general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${common.nav.waButton[lang]} ${SITE.whatsapp.display}`}
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              <span className="hidden sm:inline">{common.nav.waButton[lang]}</span>
              <span className="sr-only sm:hidden">{common.nav.waButton[lang]}</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
