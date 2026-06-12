import { SanityLive } from "@/lib/sanity/live";
import { Analytics } from "@vercel/analytics/next";
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
  authors: [
    { name: "Sekolah Alam Gaharu", url: "https://www.sekolahalamgaharu.com" },
  ],
  creator: "Sekolah Alam Gaharu",
  openGraph: {
    title: "Sekolah Alam Gaharu",
    description: "Membangun Peradaban dari Sekolah.",
    url: "https://www.sekolahalamgaharu.com",
    siteName: "Sekolah Alam Gaharu",
    images: [
      {
        url: "/Logo Sekolah Alam Gaharu.png",
        width: 600,
        height: 600,
        alt: "Sekolah Alam Gaharu - Membangun Peradaban dari Sekolah",
      },
    ],
    locale: "id_ID",
    type: "website",
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
      <Analytics />
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
