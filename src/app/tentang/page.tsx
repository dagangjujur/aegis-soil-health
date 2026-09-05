import type { Metadata } from "next";
import { tentang } from "@/content";
import TentangClient from "./client";

export const metadata: Metadata = {
  title: tentang.meta.title.id,
  description: tentang.meta.description.id,
  openGraph: {
    title: tentang.meta.title.id,
    description: tentang.meta.description.id,
    url: "https://aegissoilhealth.com/tentang",
  },
};

export default function TentangPage() {
  return <TentangClient />;
}
