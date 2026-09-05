"use client";

import { LanguageProvider } from "@/components/site/language-context";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { TernakView } from "@/components/site/views/ternak-view";

export default function TernakClient() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header route="/ternak" />
        <main id="main-content" className="grow">
          <TernakView />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
