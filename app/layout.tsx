import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { FloatingContact } from "@/components/FloatingContact";
import { ComparisonProvider } from "@/contexts/ComparisonContext";

export const metadata: Metadata = {
  title: "Microwear | Professional Smart Watch Manufacturer & OEM/ODM Expert",
  description:
    "Leading smart watch manufacturer Microwear offers premium OEM/ODM wearable solutions. High-quality sports watches, health trackers, and custom branding services for global B2B clients.",
  icons: {
    icon: "/images/logos/image.svg",
    shortcut: "/images/logos/image.svg",
    apple: "/images/logos/image.svg",
  },
  metadataBase: new URL("https://microwear.info"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Microwear - Professional Smart Watch Manufacturer",
    description:
      "Discover premium smartwatches and OEM solutions at Microwear.",
    url: "https://microwear.info/",
    type: "website",
    locale: "en_US",
    siteName: "Microwear",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Microwear",
    url: "https://microwear.info/",
    logo: "https://microwear.info/images/logos/image.png",
    description:
      "Professional Smart Watch Manufacturer and OEM Service Provider",
    sameAs: [
      "https://www.facebook.com/MicrowearOfficial",
      "https://www.youtube.com/@Microwear",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "Global",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* DNS Prefetch for faster external resource loading */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        {/* Preload hero image for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="/images/products/w11poverall.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <ComparisonProvider>
          <Navigation />
          {children}
          <FloatingContact />
        </ComparisonProvider>
      </body>
    </html>
  );
}
