"use client";

import { LanguageProvider } from "@/components/site/language-context";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { KebunView } from "@/components/site/views/kebun-view";

export default function KebunClient() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header route="/kebun" />
        <main id="main-content" className="grow">
          <KebunView />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
