import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import BlogPostClient from "./client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await db.post.findUnique({
    where: { slug },
  });

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan | PT Biotek Agro Nusantara",
    };
  }

  const title = `${post.title} | PT Biotek Agro Nusantara`;
  const description = post.summary || post.title;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      url: `https://aegissoilhealth.com/blog/${post.slug}`,
      authors: ["PT Biotek Agro Nusantara Agronomy Team"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await db.post.findUnique({
    where: { slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <BlogPostClient
      post={{
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
      }}
    />
  );
}
