"use client";

/**
 * BLOG — Daftar artikel edukasi biologi tanah dan agronomi terverifikasi
 * Data bersumber dinamis dari database SQLite melalui API /api/posts
 */

import { useEffect, useState } from "react";
import { BookOpenText, Newspaper, Calendar, ArrowRight, Tag } from "lucide-react";
import { Section, SectionHeading } from "../section";
import { blog as bg } from "@/content";
import { useLanguage } from "../language-context";

interface PostItem {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  category: string;
  createdAt: string;
}

export function BlogView() {
  const { lang } = useLanguage();
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-paper-deep/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            <Newspaper className="h-4 w-4" aria-hidden="true" />
            {bg.hero.eyebrow[lang]}
          </p>
          <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
            {bg.hero.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {bg.hero.lead[lang]}
          </p>
        </div>
      </section>

      <Section>
        {/* Banner Ilustrasi Tanah Subur & Mikrobioma */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-border shadow-lg">
          <div className="relative h-60 sm:h-72 w-full">
            <img
              src="/tanah-subur.jpg"
              alt="Dekomposisi Bahan Organik dan Mikrobioma Tanah Sehat"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
              <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Basis Sains Biologi Tanah
              </span>
              <p className="mt-2 font-display text-xl sm:text-2xl font-bold">
                Edukasi Agronomi Berbasis Riset & Bukti Lapangan
              </p>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl">
                Temukan panduan praktis pengembalian bahan organik, rekayasa pH rizosfer, serta teknik aplikasi pupuk hayati cair konsorsium BIO7.
              </p>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="py-12 flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : posts.length > 0 ? (
          <div>
            <SectionHeading
              title={{
                id: "Artikel Terbaru & Panduan Agronomi",
                en: "Latest Articles & Agronomic Guides",
              }}
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.createdAt).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="mt-3 font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                      <a href={`/blog/${post.slug}`} className="focus:outline-hidden">
                        {post.title}
                      </a>
                    </h2>

                    {post.summary && (
                      <p className="mt-2.5 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/50">
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-terra group-hover:underline"
                    >
                      <span>{lang === "id" ? "Baca selengkapnya" : "Read full article"}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          /* Daftar topik cadangan jika belum ada post */
          <div className="rounded-2xl border-2 border-dashed border-border bg-card/50 p-10 text-center">
            <p className="text-sm text-muted-foreground">{bg.hero.empty[lang]}</p>
          </div>
        )}

        {/* Topik mendatang dari rencana marketing */}
        <div className="mt-14 border-t border-border/60 pt-10">
          <SectionHeading title={bg.topics.title} />
          <ul className="grid gap-3 sm:grid-cols-2">
            {bg.topics.items.map((topic) => (
              <li
                key={topic}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90 shadow-xs"
              >
                <BookOpenText className="h-4 w-4 shrink-0 text-terra" aria-hidden="true" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
