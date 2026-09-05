"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { BrandLockup, AegisMark, WhatsAppIcon } from "./logo";
import { LanguageToggle } from "./language-toggle";
import { SITE, WA_MESSAGES, common, ROUTES, waLink } from "@/content";
import { useLanguage } from "./language-context";
import { Button } from "@/components/ui/button";

export function Header({ route }: { route: string }) {
  const { lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: ROUTES.home, label: common.nav.home[lang] },
    { href: ROUTES.padi, label: common.footer.rice[lang] },
    { href: ROUTES.kebun, label: common.footer.plantation[lang] },
    { href: ROUTES.ternak, label: common.footer.livestock[lang] },
    { href: ROUTES.tentang, label: lang === "id" ? "Tentang" : "About" },
    { href: ROUTES.blog, label: "Blog" },
    { href: ROUTES.kontak, label: common.cta.contactUs[lang] },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="/"
          aria-label={common.nav.home[lang]}
          className="min-w-0 shrink transition-opacity hover:opacity-80"
        >
          <BrandLockup compact={route !== "/"} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = route === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <Button
            asChild
            size="sm"
            className="h-10 gap-2 rounded-full bg-wa px-3.5 sm:px-4 font-semibold text-white shadow-xs transition-colors hover:bg-wa-dark"
          >
            <a
              href={waLink(WA_MESSAGES[lang].general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${common.nav.waButton[lang]} ${SITE.whatsapp.display}`}
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden lg:inline">{common.nav.waButton[lang]}</span>
              <span className="sr-only lg:hidden">{common.nav.waButton[lang]}</span>
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka navigasi menu"
            className="flex h-10 w-10 md:hidden items-center justify-center rounded-xl border border-border bg-card text-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-card/98 px-4 py-5 shadow-xl animate-in slide-in-from-top-2">
          {/* Header Identitas Resmi di dalam Menu Mobile */}
          <div className="mb-4 pb-3 border-b border-border/70 flex items-center gap-3 px-2">
            <AegisMark className="h-8 w-8 shrink-0" />
            <div className="leading-tight">
              <p className="font-display text-sm font-bold text-primary">Aegis Soil Health</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                BIO7 · PT Biotek Agro Nusantara
              </p>
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = route === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/90 hover:bg-paper-deep/60"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
