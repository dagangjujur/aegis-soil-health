"use client";

import { LanguageProvider } from "@/components/site/language-context";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { KontakView } from "@/components/site/views/kontak-view";

export default function KontakClient() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header route="/kontak" />
        <main id="main-content" className="grow">
          <KontakView />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
