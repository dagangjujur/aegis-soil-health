import type { Metadata } from "next";
import { blog } from "@/content";
import BlogClient from "./client";

export const metadata: Metadata = {
  title: blog.meta.title.id,
  description: blog.meta.description.id,
  openGraph: {
    title: blog.meta.title.id,
    description: blog.meta.description.id,
    url: "https://aegissoilhealth.com/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
