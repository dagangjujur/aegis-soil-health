import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { ALL_POSTS } from "@/content/posts-data";
import BlogPostClient from "./client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  try {
    const post = await db.post.findUnique({
      where: { slug },
    });
    if (post) {
      return {
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
      };
    }
  } catch (error) {
    console.error("DB post lookup error:", error);
  }

  // Fallback to static articles
  const staticPost = ALL_POSTS.find((p) => p.slug === slug);
  if (staticPost) {
    return {
      ...staticPost,
    };
  }

  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

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
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
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
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogPostClient
      post={post}
    />
  );
}
