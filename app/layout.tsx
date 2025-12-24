import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { FloatingContact } from "@/components/FloatingContact";
import { FloatingComparisonBar } from "@/components/FloatingComparisonBar";
import { ComparisonProvider } from "@/contexts/ComparisonContext";
import { ToastProvider } from "@/contexts/ToastContext";

export const metadata: Metadata = {
  title: "Microwear | Top Smart Watch Manufacturer & OEM/ODM Factory in China",
  description:
    "Leading smart watch manufacturer Microwear offers premium OEM/ODM wearable solutions. ISO-certified factory, wholesale smartwatches, health trackers, and GPS sports watches for global brands.",
  icons: {
    icon: "/images/logos/image.svg",
    shortcut: "/images/logos/image.svg",
    apple: "/images/logos/image.svg",
  },
  metadataBase: new URL("https://microwear.info"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
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
    url: "https://microwear.info",
    logo: "https://microwear.info/images/logos/image.png",
    description: "Professional Smart Watch Manufacturer & OEM/ODM Solutions",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shenzhen",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+852 6733 7121",
      contactType: "sales",
      areaServed: "Global",
    },
    sameAs: [
      "https://www.facebook.com/MicrowearOfficial",
      "https://www.youtube.com/@Microwear",
      "https://www.linkedin.com/company/microwear",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
        <ToastProvider>
          <ComparisonProvider>
            <Suspense fallback={null}>
              <Navigation />
            </Suspense>
            {children}
            <FloatingContact />
            <FloatingComparisonBar />
          </ComparisonProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
