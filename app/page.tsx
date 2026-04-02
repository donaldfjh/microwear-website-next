import { HeroSection } from "@/components/HeroSection";
import { SEOTextBlock } from "@/components/SEOTextBlock";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { QA } from "@/components/QA";
import { CertificationBar } from "@/components/CertificationBar";
import { CoreSpecs } from "@/components/CoreSpecs";
import { ManufacturingCapacity } from "@/components/ManufacturingCapacity";
import { IndustryInsights } from "@/components/IndustryInsights";
import { FooterBanner } from "@/components/FooterBanner";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { LocalBusinessSchema } from "@/components/SEO/LocalBusinessSchema";
import { getProducts } from "@/lib/products";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title:
    "Microwear Official | Smartwatch OEM Manufacturer & AI Glasses Factory",
  description:
    "Microwear official website - Professional smartwatch OEM/ODM manufacturer with 15+ years experience. CE, FCC, RoHS certified factory. Wholesale pricing, MOQ 100pcs. 500+ B2B partners worldwide. Get free quote for microwear smartwatch bulk orders.",
  keywords: [
    // Core brand keywords (Priority for ranking improvement)
    "microwear",
    "microwear smartwatch",
    "microwear smart watch",
    "microwear manufacturer",
    "microwear factory",
    "microwear official website",
    "microwear ai glasses",
    
    // Core business keywords
    "smartwatch manufacturer",
    "smartwatch OEM factory",
    "smart watch manufacturer China",
    "OEM smartwatch supplier",
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
      "Microwear Official | Smartwatch OEM Manufacturer & AI Glasses Factory",
    description:
      "Microwear official website - Professional smartwatch OEM/ODM manufacturer with 15+ years experience. CE, FCC, RoHS certified factory. Wholesale pricing, MOQ 100pcs. 500+ B2B partners worldwide.",
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
    "alternateName": ["Microwear Official", "Microwear Smartwatch", "Microwear Factory"],
    "url": "https://microwear.info",
    "logo": "https://microwear.info/logo.png",
    "description": "Microwear official - Professional AI glasses and smartwatch OEM/ODM manufacturer with 15+ years experience. CE, FCC, RoHS certified factory serving 500+ B2B partners worldwide.",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shenzhen",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+852 6733 7121",
      "contactType": "sales",
      "areaServed": "Global",
      "availableLanguage": ["English", "Chinese", "German"]
    },
    "sameAs": [
      "https://www.facebook.com/Microwear",
      "https://www.linkedin.com/company/microwear"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI Smart Glasses & Smartwatch",
    "alternateName": ["AI Glasses OEM", "Smart Glasses Manufacturer", "Smartwatch OEM", "Wearable Device Factory"],
    "brand": {
      "@type": "Brand",
      "name": "Microwear"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Microwear",
      "url": "https://microwear.info",
      "description": "Professional AI glasses and smartwatch OEM/ODM manufacturer with 15+ years experience, CE/FCC/RoHS certified factory serving 500+ B2B partners worldwide."
    },
    "description": "Professional AI glasses and smartwatch OEM/ODM manufacturer. Micro-LED display, Android XR, health sensors, GPS. MOQ 100pcs, CE/FCC/RoHS certified. Free samples, 7-day prototype, 15-25 day production.",
    "category": "Wearable Technology",
    "keywords": "AI glasses OEM, smart glasses manufacturer, smartwatch OEM, wearable technology, B2B electronics, custom smartwatch, OEM manufacturer China",
    "offers": {
      "@type": "Offer",
      "url": "https://microwear.info/products",
      "price": "15.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2027-03-27",
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
        "name": "German Tech Distributor"
      },
      "reviewBody": "Excellent OEM partner. Their AI glasses are now our best-selling product in Germany. CE certification made EU import seamless."
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Battery Life",
        "value": "3-7 Days (smartwatch), 4-6 Hours (AI glasses)"
      },
      {
        "@type": "PropertyValue",
        "name": "Water Resistance",
        "value": "IP68, 5ATM"
      },
      {
        "@type": "PropertyValue",
        "name": "Certification",
        "value": "CE, FCC, RoHS, ISO 9001"
      },
      {
        "@type": "PropertyValue",
        "name": "MOQ",
        "value": "100 pcs (negotiable for B2B)"
      },
      {
        "@type": "PropertyValue",
        "name": "Lead Time",
        "value": "7 days for samples, 15-25 days for bulk orders"
      },
      {
        "@type": "PropertyValue",
        "name": "Customization",
        "value": "OEM/ODM, custom logo, packaging, software, hardware"
      }
    ]
  };

  // WebSite schema to reinforce official website status
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Microwear Official",
    "alternateName": ["Microwear Smartwatch Official Website", "Microwear Factory Direct"],
    "url": "https://microwear.info",
    "publisher": {
      "@type": "Organization",
      "name": "Microwear"
    },
    "description": "Official Microwear website - Smartwatch OEM manufacturer and AI glasses factory direct. B2B wholesale, custom logo, free samples."
  };

  // FAQ schema for rich snippets - targeting "microwear" and B2B keywords
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Microwear?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microwear is a professional smartwatch OEM/ODM manufacturer with 15+ years experience. We specialize in smartwatches and AI glasses for global B2B brands, offering factory direct pricing, CE/FCC/RoHS certification, and MOQ from 100pcs."
        }
      },
      {
        "@type": "Question",
        "name": "Is Microwear a manufacturer or trading company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microwear is a certified manufacturer (not a trading company) with our own factory in Shenzhen. We control the entire production process from R&D to assembly, ensuring quality and competitive wholesale pricing for microwear smartwatch bulk orders."
        }
      },
      {
        "@type": "Question",
        "name": "What is the MOQ for Microwear smartwatch OEM orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard MOQ is 100 pieces per model for OEM/ODM orders. For microwear official products with custom logo, we can negotiate lower quantities for trial orders. Contact our sales team for bulk pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Does Microwear offer free samples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Microwear provides free samples for qualified B2B partners. We offer 7-day prototype service for custom projects. Shipping costs may apply depending on your location and order volume."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications do Microwear products have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Microwear smartwatches and AI glasses are CE, FCC, and RoHS certified. Our factory is ISO9001 certified. We also support additional certifications for specific markets (UKCA, BQB, etc.)."
        }
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [webSiteSchema, organizationSchema, productSchema, faqSchema]
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
        title="Microwear Official - Smartwatch OEM & AI Glasses Manufacturer"
        subtitle="15+ Years Experience | CE, FCC, RoHS Certified | MOQ 100pcs | 500+ Global B2B Partners | Free Samples | 7-Day Prototype"
        ctaText="Get Free Quote"
        ctaLink="/contact"
        secondaryCtaText="Download Catalog"
        secondaryCtaLink="/products"
      />

      <CertificationBar />

      {/* Microwear Brand Section - SEO Optimization for core keywords */}
      <ScrollReveal>
        <section className="microwear-brand-section" style={{
          padding: '80px 24px',
          backgroundColor: '#f8f9fa',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: '700',
              marginBottom: '24px',
              color: '#1a1a1a'
            }}>
              Why Choose Microwear Smartwatch?
            </h2>
            <p style={{ 
              fontSize: '18px', 
              lineHeight: '1.8',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto 40px'
            }}>
              As a leading <strong>microwear smartwatch manufacturer</strong>, we deliver premium quality 
              wearable technology with 15+ years of OEM/ODM expertise. Our factory serves 500+ B2B partners 
              globally, offering competitive pricing, fast delivery, and comprehensive customization services.
            </p>
            
            {/* Brand Story - Additional SEO content for "microwear" keyword */}
            <div style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '16px',
              marginTop: '48px',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#1a1a1a'
              }}>
                About Microwear Official
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#444',
                marginBottom: '16px'
              }}>
                <strong>Microwear</strong> is a professional smartwatch OEM/ODM manufacturer headquartered in Shenzhen, China. 
                Since 2010, Microwear has been dedicated to designing and manufacturing high-quality wearable devices for global brands. 
                The <strong>Microwear official</strong> product line includes smartwatches, fitness trackers, and AI glasses with advanced features 
                like health monitoring, GPS tracking, and voice assistant integration.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#444'
              }}>
                Every <strong>microwear smartwatch</strong> undergoes rigorous quality testing to meet international standards. 
                With CE, FCC, and RoHS certifications, Microwear products are trusted by distributors and retailers in Europe, 
                North America, and 50+ countries worldwide. Partner with Microwear for reliable OEM manufacturing and factory direct pricing.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '32px',
              marginTop: '48px'
            }}>
              <div style={{ padding: '24px', background: 'white', borderRadius: '12px' }}>
                <div style={{ fontSize: '42px', marginBottom: '16px' }}>🏭</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                  Factory Direct
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  ISO9001 certified microwear smartwatch factory with 450+ employees and 300+ patents
                </p>
              </div>
              
              <div style={{ padding: '24px', background: 'white', borderRadius: '12px' }}>
                <div style={{ fontSize: '42px', marginBottom: '16px' }}>💰</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                  Competitive Pricing
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Wholesale $15-50 per unit, MOQ 200pcs. Best value for microwear smart watch bulk orders
                </p>
              </div>
              
              <div style={{ padding: '24px', background: 'white', borderRadius: '12px' }}>
                <div style={{ fontSize: '42px', marginBottom: '16px' }}>🚀</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                  Fast Delivery
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  7-day sampling, 15-25 day production. Express shipping to global markets
                </p>
              </div>
              
              <div style={{ padding: '24px', background: 'white', borderRadius: '12px' }}>
                <div style={{ fontSize: '42px', marginBottom: '16px' }}>🛡️</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                  Quality Assurance
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  CE, FCC, RoHS certified. 100% quality inspection before shipment
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <CoreSpecs />
      </ScrollReveal>

      <ManufacturingCapacity />

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

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
