"use client";

import { LanguageProvider } from "@/components/site/language-context";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { LegalView } from "@/components/site/views/legal-view";

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header route="/privacy" />
        <main id="main-content" className="grow">
          <LegalView kind="privacy" />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
