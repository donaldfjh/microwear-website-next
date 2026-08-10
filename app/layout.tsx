import { Suspense } from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ComparisonProvider } from "@/contexts/ComparisonContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { SEO_CONFIG, FACTS } from "@/lib/seo-config";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const FloatingContact = dynamic(
  () =>
    import("@/components/FloatingContact").then((mod) => mod.FloatingContact),
  { ssr: false }
);
const FloatingComparisonBar = dynamic(
  () =>
    import("@/components/FloatingComparisonBar").then(
      (mod) => mod.FloatingComparisonBar
    ),
  { ssr: false }
);
const OpenClawChat = dynamic(
  () => import("@/components/OpenClawChat").then((mod) => mod.OpenClawChat),
  { ssr: false }
);

const baseUrl = SEO_CONFIG.site.url;

export const metadata: Metadata = {
  title: `Microwear | Smartwatch & AI Glasses OEM Manufacturer China (Since ${FACTS.founded})`,
  description: `Microwear (${FACTS.legalName}) is a Shenzhen smartwatch and AI glasses OEM/ODM factory founded in ${FACTS.founded}. MOQ ${FACTS.moqWatchShort}, ${FACTS.employees} staff, ${FACTS.smtLines} SMT lines, ${FACTS.capacity} units/year. ${FACTS.certsShort}. Serving ${FACTS.partners} B2B partners in ${FACTS.markets} countries. ${FACTS.quoteCta}.`,
  icons: {
    icon: "/images/logos/image.svg",
    shortcut: "/images/logos/image.svg",
    apple: "/images/logos/image.svg",
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Microwear | Smartwatch & AI Glasses OEM Manufacturer",
    description: `OEM/ODM factory in Shenzhen since ${FACTS.founded}. MOQ ${FACTS.moqWatchShort}. ${FACTS.quoteCta}.`,
    url: `${baseUrl}/`,
    type: "website",
    locale: "en_US",
    siteName: SEO_CONFIG.site.name,
  },
};

function buildGeoJsonLd() {
  const { company, contact, social, business } = SEO_CONFIG;
  const logoUrl = `${baseUrl}/images/logos/image.png`;

  // Direct-answer entity block AI systems can quote
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation"],
    "@id": `${baseUrl}/#organization`,
    name: company.name,
    legalName: company.legalName,
    alternateName: [company.legalName, "Microwear OEM Factory"],
    url: `${baseUrl}/`,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    image: logoUrl,
    description: company.description,
    foundingDate: company.foundingDate,
    slogan: company.slogan,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: Number.parseInt(company.employees, 10),
      unitText: "employees",
    },
    award: `${company.patents} patents`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.latitude,
      longitude: contact.geo.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.phone,
        email: contact.email,
        contactType: "sales",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Chinese"],
      },
    ],
    sameAs: [
      social.facebook,
      social.linkedin,
      social.youtube,
      social.twitter,
      social.instagram,
    ],
    knowsAbout: [
      "Smartwatch OEM manufacturing",
      "AI glasses OEM",
      "ODM wearables",
      "White-label smartwatches",
      "ISO9001 wearable production",
    ],
    brand: {
      "@type": "Brand",
      name: company.name,
      logo: logoUrl,
    },
    areaServed: {
      "@type": "Place",
      name: `${company.marketsCount} countries`,
    },
    makesOffer: {
      "@type": "Offer",
      name: "Smartwatch and AI glasses OEM/ODM",
      description: `Standard MOQ ${FACTS.moqWatchShort} for smartwatches and AI glasses. ${FACTS.certsShort}. ${FACTS.quoteCta}. Unit prices are not published online.`,
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/contact`,
    },
    hasCredential: business.certifications.map((name) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name,
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: company.name,
    url: `${baseUrl}/`,
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: "en",
    description: company.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // FAQPage is emitted per page where the Q&A is visible (homepage, /faq, /factory-faq),
  // so the sitewide layout only carries the entity + website nodes.
  return [organization, website];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdBlocks = buildGeoJsonLd();

  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/images/products/w11poverall.webp" />
        {jsonLdBlocks.map((block, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        ))}
      </head>
      <body className={outfit.className}>
        <ToastProvider>
          <ComparisonProvider>
            <Suspense fallback={null}>
              <Navigation />
            </Suspense>
            <main role="main" id="main-content">
              {children}
            </main>
            <FloatingContact />
            <FloatingComparisonBar />
            <OpenClawChat />
          </ComparisonProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
