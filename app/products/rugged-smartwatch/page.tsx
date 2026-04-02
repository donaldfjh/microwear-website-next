import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rugged Smartwatch Manufacturer | Military Grade Watch OEM | Microwear",
  description: "Rugged smartwatch OEM manufacturer. IP68, MIL-STD-810H certified. Outdoor, industrial, tactical models. Custom firmware available. MOQ 100pcs. Factory direct.",
  keywords: [
    "rugged smartwatch manufacturer",
    "military smartwatch OEM",
    "outdoor watch factory",
    "tactical smartwatch",
    "IP68 smartwatch supplier",
    "MIL-STD-810H watch OEM",
    "industrial smartwatch factory",
    "waterproof smartwatch manufacturer",
    "shockproof watch OEM",
    "outdoor sports watch factory"
  ],
  alternates: {
    canonical: "https://microwear.info/products/rugged-smartwatch",
  },
  openGraph: {
    title: "Rugged Smartwatch Manufacturer | Military Grade Watch OEM | Microwear",
    description: "Rugged smartwatch OEM manufacturer. IP68, MIL-STD-810H certified. Outdoor, industrial, tactical models. Custom firmware available.",
    url: "https://microwear.info/products/rugged-smartwatch",
    type: "website",
  },
};

export default function RuggedSmartwatchPage() {
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
            Rugged & Military Grade Smartwatch OEM Manufacturer
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#94a3b8',
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px'
          }}>
            Professional rugged smartwatch factory specializing in IP68 waterproof, MIL-STD-810H certified 
            outdoor, industrial, and tactical smartwatches. Custom firmware, factory direct pricing.
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
            Military Grade Durability
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
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>💧</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                IP68 Waterproof
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Fully waterproof design, submersible up to 1.5m for 30 minutes. 
                Dust-proof, sweat-proof, rain-proof for extreme conditions.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🛡️</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                MIL-STD-810H
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Military standard certified for shock, vibration, temperature extremes. 
                Tested for harsh environments and tactical operations.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏔️</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                Outdoor Ready
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Built-in GPS, altimeter, barometer, compass. 
                Multi-sport modes for hiking, climbing, diving, skiing.
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
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>⚙️</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Custom Firmware
              </h3>
              <p style={{ color: '#94a3b8' }}>Tailored features & UI</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>✅</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Certifications
              </h3>
              <p style={{ color: '#94a3b8' }}>IP68, MIL-STD-810H, CE, FCC</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🏭</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Factory Direct
              </h3>
              <p style={{ color: '#94a3b8' }}>Competitive wholesale pricing</p>
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
            Build Your Rugged Watch Brand with Us
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Get a competitive quote within 24 hours. Custom specifications welcome.
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
