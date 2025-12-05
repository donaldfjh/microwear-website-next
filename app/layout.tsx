import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ComparisonProvider } from "@/contexts/ComparisonContext";

export const metadata: Metadata = {
  title:
    "Smart Watch Manufacturer & Wearable Tech Expert | OEM/ODM Services | Microwear",
  description:
    "Explore Microwear's latest smartwatches. Leading smart watch manufacturer offering premium OEM/ODM services for global businesses. High-quality wearable technology & health monitoring solutions.",
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
      "Leading smart watch manufacturer offering premium OEM/ODM services for global businesses",
    sameAs: [
      "https://www.facebook.com/MicrowearOfficial",
      "https://www.instagram.com/microwear_official/",
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
        </ComparisonProvider>
      </body>
    </html>
  );
}
