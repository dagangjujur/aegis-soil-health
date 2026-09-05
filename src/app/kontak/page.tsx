import type { Metadata } from "next";
import { kontak } from "@/content";
import KontakClient from "./client";

export const metadata: Metadata = {
  title: kontak.meta.title.id,
  description: kontak.meta.description.id,
  openGraph: {
    title: kontak.meta.title.id,
    description: kontak.meta.description.id,
    url: "https://aegissoilhealth.com/kontak",
  },
};

export default function KontakPage() {
  return <KontakClient />;
}
