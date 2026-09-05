import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { LanguageProvider } from "@/components/site/language-context";

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
  authors: [{ name: "PT Biotek Agro Nusantara" }],
  creator: "PT Biotek Agro Nusantara",
  publisher: "PT Biotek Agro Nusantara",
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
    images: [
      {
        url: "/bio7-product.jpg",
        width: 1200,
        height: 630,
        alt: "Kemasan Resmi BIO7 Bioaktivator Mikroba 1L - PT Biotek Agro Nusantara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis Soil Health — BIO7",
    description:
      "Bioaktivator & bioremediasi tanah multi-mikroba. Terdaftar KEMENTAN RI, diuji UNPAD, 20+ tahun di pasar.",
    images: ["/bio7-product.jpg"],
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Biotek Agro Nusantara",
    alternateName: "Aegis Soil Health",
    url: "https://aegissoilhealth.com",
    logo: "https://aegissoilhealth.com/favicon.ico",
    description:
      "Formulator dan produsen mandiri bioaktivator konsorsium mikroba tanah BIO7. Terdaftar Kementerian Pertanian RI dan diuji laboratorium UNPAD.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-852-2121-2223",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${jakarta.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
