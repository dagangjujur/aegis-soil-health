"use client";

import { LanguageProvider } from "@/components/site/language-context";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PadiView } from "@/components/site/views/padi-view";

export default function PadiClient() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header route="/padi" />
        <main id="main-content" className="grow">
          <PadiView />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
