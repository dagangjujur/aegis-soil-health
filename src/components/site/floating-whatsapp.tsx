"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "./logo";
import { SITE, WA_MESSAGES, waLink } from "@/content";
import { useLanguage } from "./language-context";

export function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Tombol Back to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-md backdrop-blur-xs transition-all hover:bg-card hover:scale-105 active:scale-95"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={waLink(WA_MESSAGES[lang].general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi WhatsApp Langsung"
        className="pointer-events-auto group relative flex h-14 items-center gap-2.5 rounded-full bg-wa pl-4 pr-5 text-white shadow-xl transition-all duration-300 hover:bg-wa-dark hover:scale-105 hover:shadow-2xl hover:shadow-wa/30 active:scale-95"
      >
        <span className="relative flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <WhatsAppIcon className="relative h-4 w-4" />
        </span>
        <span className="text-sm font-bold tracking-wide">
          {lang === "id" ? "Konsultasi Cepat" : "Quick Chat"}
        </span>
      </a>
    </div>
  );
}
