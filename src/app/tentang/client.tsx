"use client";

import { LanguageProvider } from "@/components/site/language-context";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { TentangView } from "@/components/site/views/tentang-view";

export default function TentangClient() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header route="/tentang" />
        <main id="main-content" className="grow">
          <TentangView />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
