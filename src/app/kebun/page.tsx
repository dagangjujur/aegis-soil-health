import type { Metadata } from "next";
import { kebun } from "@/content";
import KebunClient from "./client";

export const metadata: Metadata = {
  title: kebun.meta.title.id,
  description: kebun.meta.description.id,
  openGraph: {
    title: kebun.meta.title.id,
    description: kebun.meta.description.id,
    url: "https://aegissoilhealth.com/kebun",
  },
};

export default function KebunPage() {
  return <KebunClient />;
}
