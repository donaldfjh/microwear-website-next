import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kids Smartwatch OEM | GPS Watch for Children Factory | Microwear",
  description: "Kids smartwatch OEM manufacturer with GPS tracking, SOS button, parental controls. CE/FCC/RoHS certified. MOQ 100pcs. Custom design available. Trusted by 50+ kids brands.",
  keywords: [
    "kids smartwatch OEM",
    "children GPS watch factory",
    "kids smartwatch manufacturer",
    "wholesale kids watch",
    "GPS tracker watch for kids",
    "children smartwatch supplier",
    "kids safety watch OEM",
    "parental control watch factory",
    "SOS button smartwatch",
    "kids wearable device manufacturer"
  ],
  alternates: {
    canonical: "https://microwear.info/products/kids-smartwatch",
  },
  openGraph: {
    title: "Kids Smartwatch OEM | GPS Watch for Children Factory | Microwear",
    description: "Kids smartwatch OEM manufacturer with GPS tracking, SOS button, parental controls. CE/FCC/RoHS certified. MOQ 100pcs.",
    url: "https://microwear.info/products/kids-smartwatch",
    type: "website",
  },
};

export default function KidsSmartwatchPage() {
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
            Kids Smartwatch & GPS Watch OEM Manufacturer
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#94a3b8',
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px'
          }}>
            Professional children&apos;s smartwatch factory with advanced GPS tracking, SOS emergency button, 
            and comprehensive parental controls. CE/FCC/RoHS certified, trusted by 50+ kids brands worldwide.
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
            Key Safety Features
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
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>📍</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                GPS Tracking
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Real-time location tracking with GPS, LBS, and Wi-Fi positioning. 
                Geo-fencing alerts, historical route playback.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🆘</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                SOS Emergency
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                One-touch SOS button sends alerts to parents. 
                Auto-dial emergency contacts, loud alarm function.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>👨‍👩‍👧</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                Parental Controls
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Remote monitoring, voice chat, class mode. 
                Manage contacts, set safe zones, screen time limits.
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
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🎨</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Custom Design
              </h3>
              <p style={{ color: '#94a3b8' }}>Colors, straps, UI themes</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>✅</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Certifications
              </h3>
              <p style={{ color: '#94a3b8' }}>CE, FCC, RoHS certified</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🏆</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Trusted Partner
              </h3>
              <p style={{ color: '#94a3b8' }}>50+ kids brands worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-products" style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '40px',
            color: '#1e293b'
          }}>
            Related Products
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <Link href="/products/mw-kids-fun" style={{
              textDecoration: 'none',
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}>
              <div style={{
                height: '200px',
                background: '#f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/images/products/su02Overall.jpg" 
                  alt="Watch Su02"
                  style={{ maxHeight: '180px', maxWidth: '90%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                  Watch Su02
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b' }}>
                  Safe and fun smartwatch designed specifically for children.
                </p>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/products" style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: '#0ea5e9',
              color: 'white',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none'
            }}>
              View All Products →
            </Link>
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
            Partner with Leading Kids Watch Manufacturer
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Get a competitive quote within 24 hours. Custom branding available.
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
