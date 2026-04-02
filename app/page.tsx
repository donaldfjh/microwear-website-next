import { HeroSection } from "@/components/HeroSection";
import { CertificationBar } from "@/components/CertificationBar";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { LocalBusinessSchema } from "@/components/SEO/LocalBusinessSchema";
import { getProducts } from "@/lib/products";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title:
    "Microwear | OEM/ODM Smartwatch Manufacturer | Factory Direct Bulk Orders",
  description:
    "Microwear - Leading smartwatch OEM/ODM manufacturer with 15+ years B2B experience. Factory direct pricing, MOQ 100pcs, CE/FCC/RoHS/ISO certified. Custom logo, firmware, packaging. 7-day samples, 15-25 day delivery. 500+ global partners. Get free quote for bulk orders.",
  keywords: [
    // B2B 核心词（高优先级）
    "smartwatch manufacturer China",
    "smartwatch OEM supplier Shenzhen",
    "smartwatch ODM factory",
    "wearable device manufacturer",
    
    // 产品类型 + B2B
    "fitness tracker manufacturer",
    "rugged smartwatch OEM",
    "kids smartwatch factory",
    "health smartwatch manufacturer",
    "GPS watch OEM supplier",
    "AI glasses manufacturer",
    "smart glasses ODM",
    
    // 采购意图词
    "smartwatch wholesale bulk",
    "custom smartwatch OEM",
    "white label smartwatch",
    "smartwatch MOQ 100",
    
    // 品牌词（保留少量）
    "Microwear smartwatch factory",
    "Microwear OEM manufacturer"
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
  const products = await getProducts();
  
  // 精选 6 款产品（手表 + AI 眼镜混合）
  const featuredProducts = products.slice(0, 6);

  // JSON-LD Structured Data - 简化版
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Microwear",
    "url": "https://microwear.info",
    "logo": "https://microwear.info/logo.png",
    "description": "Professional smartwatch OEM/ODM manufacturer with 15+ years experience. CE, FCC, RoHS certified factory serving 500+ B2B partners worldwide.",
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
    }
  };

  return (
    <div className="home-page">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <LocalBusinessSchema />
      
      {/* Hero Section - B2B focused */}
      <HeroSection
        title="OEM/ODM Smartwatch Manufacturer | Factory Direct"
        subtitle="15+ Years B2B Experience | 500+ Partners | MOQ 100pcs"
        ctaText="Get Free Quote"
        ctaLink="/contact"
        secondaryCtaText="View Products"
        secondaryCtaLink="/products"
      />

      {/* Certifications Bar */}
      <CertificationBar />

      {/* B2B Core Advantages - 4 points */}
      <section className="b2b-advantages" style={{
        padding: '80px 0',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '60px',
            color: 'white'
          }}>
            Why Partner With Microwear
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            <div style={{
              padding: '32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '42px', marginBottom: '16px' }}>🏭</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                Production Capacity
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                8 SMT lines, 2M+ units/year
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '42px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                Quality Assurance
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                ISO9001, CE, FCC certified
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '42px', marginBottom: '16px' }}>🔧</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                Custom Solutions
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                Logo, firmware, packaging
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '42px', marginBottom: '16px' }}>🚚</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                Fast Delivery
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                7-day samples, 15-25 day bulk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - 6 items */}
      <section className="featured-products">
        <div className="container">
          <ScrollReveal>
            <h2 style={{
              textAlign: 'center',
              fontSize: '36px',
              marginBottom: '48px'
            }}>
              Featured Products
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <HomeProductGrid products={featuredProducts} />
          </ScrollReveal>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/products" className="view-all-btn">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{
        padding: '80px 0',
        background: '#0ea5e9',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            color: 'white',
            fontSize: '32px',
            marginBottom: '20px'
          }}>
            Ready to Start Your OEM Project?
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '30px'
          }}>
            Get a free quote within 24 hours. MOQ starts from 100pcs.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            padding: '16px 40px',
            background: 'white',
            color: '#0ea5e9',
            borderRadius: '8px',
            fontWeight: '600',
            textDecoration: 'none'
          }}>
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
