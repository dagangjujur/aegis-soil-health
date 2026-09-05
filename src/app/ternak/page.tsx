import type { Metadata } from "next";
import { ternak } from "@/content";
import TernakClient from "./client";

export const metadata: Metadata = {
  title: ternak.meta.title.id,
  description: ternak.meta.description.id,
  openGraph: {
    title: ternak.meta.title.id,
    description: ternak.meta.description.id,
    url: "https://aegissoilhealth.com/ternak",
  },
};

export default function TernakPage() {
  return <TernakClient />;
}
