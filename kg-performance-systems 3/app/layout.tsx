import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kgperformancesystems.com"), // REPLACE domain
  title: {
    default: "KG Performance Systems | Evidence-Based 1-on-1 Coaching",
    template: "%s | KG Performance Systems",
  },
  description:
    "1-on-1 evidence-based coaching for fat loss, muscle gain, recomp, powerlifting, and contest prep. Coached by Keating Garriss. Apply for coaching today.",
  keywords: [
    "online fitness coach",
    "bodybuilding coach",
    "contest prep coach",
    "evidence-based coaching",
    "powerlifting coach",
    "body recomposition",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "KG Performance Systems",
    description:
      "Built by science. Proven on stage. Apply for 1-on-1 coaching.",
    type: "website",
    siteName: "KG Performance Systems",
    images: ["/og-image.jpg"], // REPLACE: add 1200x630 image to /public
  },
  twitter: {
    card: "summary_large_image",
    title: "KG Performance Systems",
    description: "Built by science. Proven on stage.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KG Performance Systems",
  founder: { "@type": "Person", name: "Keating Garriss" },
  description:
    "Evidence-based 1-on-1 coaching for bodybuilding, physique optimization, powerlifting, and contest prep.",
  url: "https://www.kgperformancesystems.com", // REPLACE domain
  priceRange: "$400+/month",
  areaServed: "Online",
  offers: {
    "@type": "Offer",
    name: "1-on-1 Coaching",
    price: "400",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "400",
      priceCurrency: "USD",
      unitText: "MONTH",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
