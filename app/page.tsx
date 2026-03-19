import { HeroSection } from "@/components/HeroSection";
import { SEOTextBlock } from "@/components/SEOTextBlock";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { QA } from "@/components/QA";
import { CertificationBar } from "@/components/CertificationBar";
import { CoreSpecs } from "@/components/CoreSpecs";
import { ManufacturingCapacity } from "@/components/ManufacturingCapacity";
import { IndustryInsights } from "@/components/IndustryInsights";
import { FooterBanner } from "@/components/FooterBanner";
import { getProducts } from "@/lib/products";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title:
    "Microwear Smartwatch | OEM/ODM Manufacturer & Factory Direct | Wholesale B2B 2026",
  description:
    "Microwear smartwatch - ISO9001 OEM/ODM manufacturer since 2015. MOQ 200pcs, $15-50 wholesale pricing. Free samples, 7-15 day lead time. Custom logo & SDK. 500+ global B2B partners. Get quote now!",
  keywords: ["microwear smartwatch", "microwear smartwatches", "microwear smart watch", "smartwatch microwear", "smartwatch manufacturer", "OEM smart watch", "ODM smartwatch", "wholesale smartwatch", "bulk smartwatch orders", "AI glasses factory", "wearable tech supplier", "China smartwatch factory", "B2B smartwatch", "smartwatch OEM factory", "custom smartwatch", "microwear watch manufacturer", "microwear bulk orders"],
  alternates: {
    canonical: "https://microwear.info/",
  },
  openGraph: {
    title:
      "Microwear Smartwatch | OEM/ODM Manufacturer & Factory | AI Glasses 2026",
    description:
      "Microwear smartwatch - ISO9001 certified OEM/ODM manufacturer. 10+ years experience, wholesale bulk orders, free samples for B2B partners. 24h prototyping.",
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
    "name": "Microwear Smartwatch",
    "alternateName": ["Microwear Smart Watch", "microwear smartwatch", "Microwear OEM Smartwatch", "microwear smart watch manufacturer"],
    "brand": {
      "@type": "Brand",
      "name": "Microwear"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Microwear",
      "url": "https://microwear.info",
      "description": "Professional microwear smartwatch OEM/ODM manufacturer with 10+ years experience, ISO9001 certified factory specializing in microwear smartwatch bulk orders and wholesale B2B partnerships"
    },
    "description": "Microwear Smartwatch - ISO9001 OEM/ODM manufacturer since 2015. MOQ 200pcs, $15-50 wholesale pricing. Free samples, 7-15 day lead time. Custom logo & SDK support. 500+ global B2B partners. Bulk smartwatch orders welcome. Every microwear smartwatch features advanced health tracking, GPS, and long battery life.",
    "category": "Smart Watch",
    "keywords": "microwear smartwatch, microwear smartwatches, OEM smartwatch, ODM smartwatch, wholesale smartwatch, bulk smartwatch orders, B2B smartwatch manufacturer, smartwatch factory China, microwear smart watch OEM, microwear wearable technology",
    "offers": {
      "@type": "Offer",
      "url": "https://microwear.info/products",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Microwear"
      },
      "eligibleTransactionVolume": {
        "@type": "PriceSpecification",
        "minPrice": "15.00",
        "maxPrice": "50.00",
        "priceCurrency": "USD"
      },
      "businessFunction": "wholesale"
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
        "value": "200-500 pcs (negotiable for B2B)"
      },
      {
        "@type": "PropertyValue",
        "name": "Lead Time",
        "value": "7-15 days for samples, 20-30 days for bulk orders"
      },
      {
        "@type": "PropertyValue",
        "name": "Customization",
        "value": "OEM/ODM, custom logo, packaging, SDK"
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
        title="Microwear Smartwatch - OEM/ODM Manufacturer & Factory Direct | B2B Wholesale"
        subtitle="10 Years Experience | ISO9001 Certified | 500+ Global B2B Partners | Wholesale Bulk Orders | Free Samples"
        ctaText="Get Free Quote"
        ctaLink="/contact"
        secondaryCtaText="Download Catalog"
        secondaryCtaLink="/products"
      />

      <CertificationBar />

      <ScrollReveal delay={0.2}>
        <CoreSpecs />
      </ScrollReveal>

      <ManufacturingCapacity />

      <ScrollReveal>
        <SEOTextBlock />
      </ScrollReveal>

      {/* Microwear Smartwatch Collection Section - SEO Optimization */}
      <section className="microwear-smartwatch-section">
        <div className="microwear-smartwatch-container">
          <ScrollReveal>
            <h2 className="microwear-smartwatch-title">
              Explore Our Microwear Smartwatch Collection - OEM/ODM Factory Direct
            </h2>
            <p className="microwear-smartwatch-description">
              Discover the complete range of <strong>microwear smartwatch</strong> models designed for B2B partners.
              From fitness trackers to premium wearables, every microwear smartwatch delivers exceptional quality
              and performance. As a leading microwear smart watch manufacturer, we offer wholesale bulk orders,
              custom logo, SDK support, and free samples. Browse our full catalog of microwear smartwatches and
              request your free sample today - MOQ 200pcs, 7-15 day lead time.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="microwear-smartwatch-cta">
              <Link href="/products" className="microwear-smartwatch-link">
                View All Microwear Smartwatch Models →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
