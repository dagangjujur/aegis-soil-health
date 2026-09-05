import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aegissoilhealth.com"),
  title: {
    default: "Aegis Soil Health — BIO7 Bioaktivator Mikroba Multiguna",
    template: "%s | Aegis Soil Health",
  },
  description:
    "BIO7 mengurai sisa agrokimia beracun, menetralkan keasaman tanah, dan mengaktifkan kembali biologi bawah tanah dengan konsorsium mikroba hidup ultra-padat. Terdaftar KEMENTAN RI, diuji UNPAD.",
  keywords: [
    "BIO7",
    "Aegis Soil Health",
    "bioaktivator",
    "pupuk hayati",
    "mikroba tanah",
    "bioremediasi tanah",
    "pupuk padi",
    "tanah asam",
    "probiotik ternak",
    "pupuk sawit",
  ],
  authors: [{ name: "PT Aegis Soil Health" }],
  creator: "PT Aegis Soil Health",
  publisher: "PT Aegis Soil Health",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/?lang=en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: "https://aegissoilhealth.com",
    siteName: "Aegis Soil Health",
    title: "Aegis Soil Health — BIO7 Bioaktivator Mikroba Multiguna",
    description:
      "Mikroba untuk Tanah yang Lebih Hidup. Konsorsium mikroba hidup ultra-padat: mengurai residu agrokimia, menetralkan tanah asam, mengaktifkan biologi tanah.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis Soil Health — BIO7",
    description:
      "Bioaktivator & bioremediasi tanah multi-mikroba. Terdaftar KEMENTAN RI, diuji UNPAD, 20+ tahun di pasar.",
  },
  category: "agriculture",
};

export const viewport: Viewport = {
  themeColor: "#1F3D2B",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${jakarta.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
