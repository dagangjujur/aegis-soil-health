"use client";

import { ArrowLeft, Calendar, Tag, ShieldCheck } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { LanguageProvider, useLanguage } from "@/components/site/language-context";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";

interface PostData {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  content: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

function BlogPostContent({ post }: { post: PostData }) {
  const { lang } = useLanguage();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary || post.title,
    author: {
      "@type": "Organization",
      name: "PT Biotek Agro Nusantara Agronomy Team",
      url: "https://aegissoilhealth.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PT Biotek Agro Nusantara",
      logo: "https://aegissoilhealth.com/favicon.ico",
    },
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aegissoilhealth.com/blog/${post.slug}`,
    },
  };

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <a
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        {lang === "id" ? "Kembali ke Semua Artikel" : "Back to All Articles"}
      </a>

      <header className="border-b border-border/70 pb-8">
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 font-semibold text-primary">
            <Tag className="h-3.5 w-3.5" />
            {post.category}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.createdAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span>•</span>
          <span>
            {Math.max(1, Math.ceil(post.content.split(/\s+/).length / 180))} {lang === "id" ? "menit baca" : "min read"}
          </span>
          <span>•</span>
          <span>PT Biotek Agro Nusantara</span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-tight">
          {post.title}
        </h1>

        {post.summary && (
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-medium">
            {post.summary}
          </p>
        )}

        <div className="mt-6 flex items-center gap-3">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`Baca artikel menarik: "${post.title}" - https://aegissoilhealth.com/blog/${post.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.102-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.395-10.416c-5.523 0-10 4.477-10 10 0 1.76.452 3.417 1.246 4.864l-1.323 4.832 4.966-1.302c1.397.762 2.996 1.206 4.697 1.206 5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
            </svg>
            {lang === "id" ? "Bagikan Artikel" : "Share Article"}
          </a>
        </div>
      </header>

      {/* Konten Artikel */}
      <div className="prose prose-stone dark:prose-invert mt-10 max-w-none leading-relaxed text-foreground/90 whitespace-pre-line sm:text-lg">
        {post.content}
      </div>

      {/* Box Konsultasi di Akhir Artikel */}
      <div className="mt-14 rounded-3xl border border-border bg-paper-deep/60 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terra">
              <ShieldCheck className="h-4 w-4" />
              Konsultasi Agronomi Resmi
            </span>
            <h3 className="mt-2 font-display text-xl font-bold text-foreground">
              Butuh Dosis & Protokol Spesifik untuk Lahan Anda?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground max-w-xl">
              Tim agronomi PT Biotek Agro Nusantara siap membantu analisis kondisi tanah dan penyesuaian aplikasi BIO7 tanpa dipungut biaya.
            </p>
          </div>
          <WhatsAppCTA
            message={`Halo tim PT Biotek Agro Nusantara, saya membaca artikel "${post.title}" di website. Saya ingin konsultasi aplikasi BIO7 untuk kondisi lahan saya.`}
            label="Konsultasi via WhatsApp"
            size="lg"
            className="w-full sm:w-auto shrink-0"
          />
        </div>
      </div>
    </article>
  );
}

export default function BlogPostClient({ post }: { post: PostData }) {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header route="/blog" />
        <main className="grow">
          <BlogPostContent post={post} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
