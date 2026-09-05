import type { Metadata } from "next";
import { padi } from "@/content";
import PadiClient from "./client";

export const metadata: Metadata = {
  title: padi.meta.title.id,
  description: padi.meta.description.id,
  openGraph: {
    title: padi.meta.title.id,
    description: padi.meta.description.id,
    url: "https://aegissoilhealth.com/padi",
  },
};

export default function PadiPage() {
  return <PadiClient />;
}
