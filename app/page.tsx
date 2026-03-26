import { HeroSection } from "@/components/HeroSection";
import { SEOTextBlock } from "@/components/SEOTextBlock";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { QA } from "@/components/QA";
import { CertificationBar } from "@/components/CertificationBar";
import { CoreSpecs } from "@/components/CoreSpecs";
import { ManufacturingCapacity } from "@/components/ManufacturingCapacity";
import { IndustryInsights } from "@/components/IndustryInsights";
import { FooterBanner } from "@/components/FooterBanner";
import { LocalBusinessSchema } from "@/components/SEO/LocalBusinessSchema";
import { getProducts } from "@/lib/products";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title:
    "Smartwatch OEM Factory | AI Glasses Manufacturer Microwear | Wholesale $15-50 | B2B Bulk Orders",
  description:
    "Leading smartwatch & AI glasses OEM manufacturer Microwear. ISO9001 certified factory, 10+ years experience. MOQ 200pcs, wholesale $15-50. Free samples, 7-15 day delivery. Custom logo, SDK support. 500+ global B2B partners. ChatGPT & Sony camera smart glasses available.",
  keywords: [
    // Brand keywords
    "microwear smartwatch",
    "microwear ai glasses",
    "microwear manufacturer",
    
    // Core business keywords
    "smartwatch manufacturer",
    "smartwatch OEM factory",
    "AI glasses manufacturer",
    "smart glasses OEM",
    
    // Product type keywords
    "health smartwatch OEM",
    "fitness tracker factory",
    "GPS smartwatch wholesale",
    "AMOLED smartwatch manufacturer",
    "ECG smartwatch factory",
    
    // Business attribute keywords
    "smartwatch wholesale China",
    "OEM smartwatch B2B",
    "smartwatch MOQ 200",
    "bulk smartwatch orders",
    "white label smartwatch supplier",
    
    // Long-tail keywords
    "best smartwatch manufacturer for startups",
    "affordable smartwatch OEM factory",
    "custom smartwatch with logo",
    "smartwatch factory direct pricing",
    "ISO9001 smartwatch manufacturer",
    "AI glasses with ChatGPT OEM",
    "smart glasses with camera factory",
    
    // Comparison/alternative keywords
    "Ray-Ban Meta alternative manufacturer",
    "smartwatch manufacturer like Fitbit OEM"
  ],
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
    "description": "Professional Microwear Smartwatch Manufacturer & OEM/ODM Factory Direct Solutions with 10+ years experience. ISO9001 certified smartwatch microwear supplier for B2B wholesale bulk orders worldwide.",
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
    "alternateName": ["Microwear Smart Watch", "microwear smartwatch", "Microwear OEM Smartwatch", "microwear smart watch manufacturer", "smartwatch microwear", "microwear smartwatches bulk", "microwear smartwatch factory"],
    "brand": {
      "@type": "Brand",
      "name": "Microwear"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Microwear",
      "url": "https://microwear.info",
      "description": "Professional microwear smartwatch OEM/ODM manufacturer with 10+ years experience, ISO9001 certified factory specializing in microwear smartwatch bulk orders, wholesale B2B partnerships, and smartwatch microwear factory direct pricing"
    },
    "description": "Microwear Smartwatch - ISO9001 OEM/ODM manufacturer since 2015. MOQ 200pcs, $15-50 wholesale pricing. Free samples, 7-15 day lead time. Custom logo & SDK support. 500+ global B2B partners. Bulk smartwatch orders welcome. Every microwear smartwatch features advanced health tracking, GPS, and long battery life. Smartwatch microwear factory direct. Professional microwear smartwatch supplier for OEM ODM partnerships.",
    "category": "Smart Watch",
    "keywords": "microwear smartwatch, microwear smartwatches, OEM smartwatch, ODM smartwatch, wholesale smartwatch, bulk smartwatch orders, B2B smartwatch manufacturer, smartwatch factory China, microwear smart watch OEM, microwear wearable technology, smartwatch microwear, microwear smartwatch supplier, OEM ODM smartwatch manufacturer",
    "offers": {
      "@type": "Offer",
      "url": "https://microwear.info/products",
      "price": "15.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2027-03-21",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Microwear"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "15.00",
        "minPrice": "15.00",
        "maxPrice": "50.00",
        "priceCurrency": "USD"
      },
      "businessFunction": "wholesale"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "B2B Partner"
      },
      "reviewBody": "Excellent OEM partner with reliable quality and timely delivery. ISO9001 certified manufacturing ensures consistent quality across all batches."
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
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <LocalBusinessSchema />
      
      <HeroSection
        title="Microwear Smartwatch Manufacturer - OEM/ODM Factory Direct | B2B Wholesale Bulk Orders"
        subtitle="10+ Years Experience | ISO9001 Certified Factory | 500+ Global B2B Partners | Wholesale Pricing $15-50 | Free Samples | MOQ 200pcs"
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
