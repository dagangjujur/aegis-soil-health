"use client";

import { LanguageProvider } from "@/components/site/language-context";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { BlogView } from "@/components/site/views/blog-view";

export default function BlogClient() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header route="/blog" />
        <main id="main-content" className="grow">
          <BlogView />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
