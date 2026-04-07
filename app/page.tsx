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

      {/* B2B Solutions - 4 categories */}
      <section className="b2b-solutions" style={{
        padding: '100px 0',
        background: '#0f172a'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(14, 165, 233, 0.3)',
              borderRadius: '100px',
              color: '#0ea5e9',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '20px',
              letterSpacing: '0.5px'
            }}>
              INDUSTRY SOLUTIONS
            </span>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
              Custom Solutions for Every Segment
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: '18px',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              From fitness tracking to kids safety, we deliver specialized OEM/ODM solutions tailored to your target market.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {/* Fitness Tracker */}
            <Link href="/products/fitness-tracker" style={{
              position: 'relative',
              padding: '40px 28px',
              background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.06)',
              textAlign: 'left',
              textDecoration: 'none',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(30%, -30%)'
              }} />
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '12px',
                color: 'white'
              }}>
                Fitness Tracker
              </h3>
              <p style={{
                color: '#94a3b8',
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Heart rate, SpO2, GPS tracking, 100+ sport modes
              </p>
              <span style={{
                color: '#0ea5e9',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Kids Smartwatch */}
            <Link href="/products/kids-smartwatch" style={{
              position: 'relative',
              padding: '40px 28px',
              background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.06)',
              textAlign: 'left',
              textDecoration: 'none',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(30%, -30%)'
              }} />
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '12px',
                color: 'white'
              }}>
                Kids Smartwatch
              </h3>
              <p style={{
                color: '#94a3b8',
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                GPS tracking, SOS button, parental controls
              </p>
              <span style={{
                color: '#a855f7',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Rugged Smartwatch */}
            <Link href="/products/rugged-smartwatch" style={{
              position: 'relative',
              padding: '40px 28px',
              background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.06)',
              textAlign: 'left',
              textDecoration: 'none',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(30%, -30%)'
              }} />
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '12px',
                color: 'white'
              }}>
                Rugged Smartwatch
              </h3>
              <p style={{
                color: '#94a3b8',
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                IP68 waterproof, MIL-STD-810H certified
              </p>
              <span style={{
                color: '#f59e0b',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Health Smartwatch */}
            <Link href="/products/health-smartwatch" style={{
              position: 'relative',
              padding: '40px 28px',
              background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.06)',
              textAlign: 'left',
              textDecoration: 'none',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(30%, -30%)'
              }} />
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '12px',
                color: 'white'
              }}>
                Health Smartwatch
              </h3>
              <p style={{
                color: '#94a3b8',
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                ECG, SpO2, blood pressure monitoring
              </p>
              <span style={{
                color: '#22c55e',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="trusted-partners" style={{
        padding: '60px 0',
        background: '#1e293b'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '100px',
              color: '#22c55e',
              fontSize: '13px',
              fontWeight: '500',
              marginBottom: '16px'
            }}>
              TRUSTED BY GLOBAL BRANDS
            </span>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '8px'
            }}>
              500+ B2B Partners Worldwide
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: '16px'
            }}>
              From startups to enterprise brands, we power wearable solutions across 30+ countries
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              padding: '20px 32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#22c55e' }}>🇪🇺 Europe</div>
              <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>150+ Partners</div>
            </div>
            <div style={{
              padding: '20px 32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#0ea5e9' }}>🇺🇸 Americas</div>
              <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>120+ Partners</div>
            </div>
            <div style={{
              padding: '20px 32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#f59e0b' }}>🇮🇩 Asia Pacific</div>
              <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>180+ Partners</div>
            </div>
            <div style={{
              padding: '20px 32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#a855f7' }}>🇸🇦 Middle East</div>
              <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>50+ Partners</div>
            </div>
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
