import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Health Smartwatch OEM | ECG SpO2 Watch Manufacturer | Microwear",
  description: "Health smartwatch OEM with ECG, SpO2, blood pressure monitoring. FDA-cleared devices available. Medical-grade sensors. CE, FCC certified. MOQ 100pcs.",
  keywords: [
    "health smartwatch OEM",
    "ECG watch manufacturer",
    "medical smartwatch factory",
    "health tracker OEM",
    "SpO2 monitor watch supplier",
    "blood pressure watch OEM",
    "FDA cleared smartwatch",
    "medical grade wearable factory",
    "health monitoring watch manufacturer",
    "cardiac smartwatch OEM"
  ],
  alternates: {
    canonical: "https://microwear.info/products/health-smartwatch",
  },
  openGraph: {
    title: "Health Smartwatch OEM | ECG SpO2 Watch Manufacturer | Microwear",
    description: "Health smartwatch OEM with ECG, SpO2, blood pressure monitoring. FDA-cleared devices available. Medical-grade sensors. CE, FCC certified.",
    url: "https://microwear.info/products/health-smartwatch",
    type: "website",
  },
};

export default function HealthSmartwatchPage() {
  return (
    <div className="product-b2b-page">
      {/* Hero Section - B2B Positioning */}
      <section className="hero-b2b" style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '24px'
          }}>
            Health & Medical Smartwatch OEM Manufacturer
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#94a3b8',
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px'
          }}>
            Professional health smartwatch factory with advanced ECG, SpO2, blood pressure monitoring. 
            FDA-cleared devices available, medical-grade sensors, CE/FCC certified for global markets.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/contact" style={{
              display: 'inline-block',
              padding: '16px 32px',
              background: '#0ea5e9',
              color: 'white',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '18px'
            }}>
              Get Quote
            </Link>
            <Link href="/products" style={{
              display: 'inline-block',
              padding: '16px 32px',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '18px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="features" style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '60px',
            color: '#1e293b'
          }}>
            Advanced Health Monitoring
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }}>
            <div style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>❤️</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                ECG Monitoring
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Medical-grade ECG sensors for heart rhythm analysis. 
                Atrial fibrillation detection, irregular heartbeat alerts.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🩸</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                SpO2 & Blood Pressure
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Continuous blood oxygen monitoring, non-invasive BP tracking. 
                Real-time health data with trend analysis.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏥</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                FDA-Cleared Options
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                FDA-cleared devices available for medical applications. 
                Full regulatory support for global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Advantages */}
      <section className="b2b-advantages" style={{
        padding: '80px 0',
        background: '#1e293b',
        color: 'white'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '60px'
          }}>
            B2B Partnership Benefits
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>📦</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Low MOQ
              </h3>
              <p style={{ color: '#94a3b8' }}>Starting from 100pcs</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🔬</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Medical-Grade
              </h3>
              <p style={{ color: '#94a3b8' }}>Precision sensors & accuracy</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>✅</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Certifications
              </h3>
              <p style={{ color: '#94a3b8' }}>CE, FCC, FDA options</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>📊</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Health App
              </h3>
              <p style={{ color: '#94a3b8' }}>iOS & Android companion apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '36px',
            marginBottom: '20px'
          }}>
            Launch Your Health Watch Brand Today
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Get a competitive quote within 24 hours. Medical certifications supported.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            padding: '16px 40px',
            background: 'white',
            color: '#0ea5e9',
            borderRadius: '8px',
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '18px'
          }}>
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
