import { SanityLive } from "@/lib/sanity/live";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sekolah Alam Gaharu",
    template: "%s | Sekolah Alam Gaharu",
  },
  description:
    "Pendidikan alam untuk generasi pemimpin yang peduli lingkungan. Kurikulum experiential learning, pendidikan lingkungan, dan pembentukan karakter.",
  keywords: [
    "Sekolah Alam",
    "pendidikan lingkungan",
    "Sekolah Alam Gaharu",
    "experiential learning",
    "pendidikan karakter",
    "sekolah dasar alam",
    "ekskul alam",
  ],
  authors: [{ name: "Sekolah Alam Gaharu", url: "https://sah-gaharu.example" }],
  creator: "Sekolah Alam Gaharu",
  openGraph: {
    title: "Sekolah Alam Gaharu",
    description:
      "Pendidikan alam untuk generasi pemimpin yang peduli lingkungan. Kurikulum experiential learning dan pembentukan karakter.",
    url: "https://sah-gaharu.example",
    siteName: "Sekolah Alam Gaharu",
    images: [
      {
        url: "https://sah-gaharu.example/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sekolah Alam Gaharu - Pendidikan Alam",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sekolah Alam Gaharu",
    description:
      "Pendidikan alam untuk generasi pemimpin yang peduli lingkungan.",
    creator: "@SekolahGaharu",
    images: ["https://sah-gaharu.example/og-image.jpg"],
  },
  other: {
    viewport: "width=device-width, initial-scale=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <SpeedInsights />
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
