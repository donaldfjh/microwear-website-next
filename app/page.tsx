import { HeroSection } from "@/components/HeroSection";
import { SEOTextBlock } from "@/components/SEOTextBlock";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { QA } from "@/components/QA";
import { CertificationBar } from "@/components/CertificationBar";
import { CoreSpecs } from "@/components/CoreSpecs";
import { IndustryInsights } from "@/components/IndustryInsights";
import { FooterBanner } from "@/components/FooterBanner";
import { getProducts } from "@/lib/products";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title:
    "Microwear Smartwatch Manufacturer | OEM/ODM Factory | AI Glasses 2026",
  description:
    "Microwear is a leading smartwatch manufacturer with 10+ years experience. ISO9001 certified OEM/ODM factory for AI glasses & wearable tech. Free samples, 24h prototyping. Global shipping.",
  keywords: ["microwear smartwatch", "smartwatch manufacturer", "OEM smart watch", "AI glasses factory", "wearable tech supplier", "China smartwatch factory"],
  alternates: {
    canonical: "https://microwear.info/",
  },
  openGraph: {
    title:
      "Microwear Smartwatch Manufacturer | OEM/ODM Factory | AI Glasses 2026",
    description:
      "Microwear is a leading smartwatch manufacturer with 10+ years experience. ISO9001 certified OEM/ODM factory for AI glasses & wearable tech. Free samples, 24h prototyping.",
    url: "https://microwear.info/",
    type: "website",
  },
};

export default async function HomePage() {
  // Fetch products at build time
  const products = await getProducts();

  // Get featured products (first 6 products for the homepage)
  const featuredProducts = products
    .filter((p) => p.category !== "AI Glasses")
    .slice(0, 6);

  // Get AI Glasses for homepage display
  const featuredAIGlasses = products
    .filter((p) => p.category === "AI Glasses")
    .slice(0, 3);

  // JSON-LD Structured Data for GEO Optimization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Microwear",
    "url": "https://microwear.info",
    "logo": "https://microwear.info/logo.png",
    "description": "Professional Smart Watch Manufacturer & OEM/ODM Solutions with 10+ years experience",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shenzhen",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+852 6733 7121",
      "contactType": "sales",
      "areaServed": "Global"
    },
    "sameAs": [
      "https://www.facebook.com/Microwear",
      "https://www.linkedin.com/company/microwear"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Microwear Smart Watch",
    "brand": {
      "@type": "Brand",
      "name": "Microwear"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Microwear",
      "url": "https://microwear.info"
    },
    "description": "ISO9001 certified smartwatch with 3-5 days battery life, IP68 waterproof, GPS tracking. OEM/ODM services available.",
    "category": "Smart Watch",
    "offers": {
      "@type": "Offer",
      "url": "https://microwear.info/products",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Microwear"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Battery Life",
        "value": "3-5 Days"
      },
      {
        "@type": "PropertyValue",
        "name": "Water Resistance",
        "value": "IP68"
      },
      {
        "@type": "PropertyValue",
        "name": "Certification",
        "value": "ISO9001, CE, FCC, RoHS"
      },
      {
        "@type": "PropertyValue",
        "name": "MOQ",
        "value": "500 pcs"
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, productSchema]
  };

  return (
    <div className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <HeroSection
        title="Professional Smart Watch Manufacturer & OEM/ODM Solutions"
        subtitle="10 Years Experience | ISO9001 Certified | 500+ Global Partners"
        ctaText="Get Free Quote"
        ctaLink="/contact"
        secondaryCtaText="Download Catalog"
        secondaryCtaLink="/products"
      />

      <CertificationBar />

      <ScrollReveal delay={0.2}>
        <CoreSpecs />
      </ScrollReveal>

      <ScrollReveal>
        <SEOTextBlock />
      </ScrollReveal>

      <section className="featured-products-section">
        <div className="featured-products-container">
          <ScrollReveal>
            <h2 className="featured-products-title">
              Premium OEM Smart Watch Collections
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <HomeProductGrid products={featuredProducts} />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="view-all-container">
              <Link href="/products" className="view-all-link">
                View All Smart Watches
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Glasses Section */}
      {featuredAIGlasses.length > 0 && (
        <section className="featured-products-section ai-glasses-home-section">
          <div className="featured-products-container">
            <ScrollReveal>
              <h2 className="featured-products-title">
                Next-Gen AI Smart Glasses
              </h2>
              <p className="section-subtitle">
                Merge digital and physical worlds with our advanced AR wearables
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <HomeProductGrid products={featuredAIGlasses} />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="view-all-container">
                <Link href="/ai-glasses" className="view-all-link">
                  View All AI Glasses
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <QA />

      <ScrollReveal>
        <IndustryInsights />
      </ScrollReveal>

      <FooterBanner />
    </div>
  );
}
