import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fitness Tracker Manufacturer | Fitness Band OEM Factory | Microwear",
  description: "Leading fitness tracker and fitness band OEM manufacturer. Heart rate, SpO2, GPS tracking. MOQ 100pcs, CE/FCC certified. Custom design, 7-day samples. Bulk orders welcome.",
  keywords: [
    "fitness tracker manufacturer",
    "fitness band OEM",
    "fitness tracker factory",
    "wholesale fitness tracker",
    "custom fitness band",
    "heart rate monitor OEM",
    "SpO2 tracker manufacturer",
    "GPS fitness band factory",
    "wearable fitness device OEM",
    "bulk fitness tracker supplier"
  ],
  alternates: {
    canonical: "https://microwear.info/products/fitness-tracker",
  },
  openGraph: {
    title: "Fitness Tracker Manufacturer | Fitness Band OEM Factory | Microwear",
    description: "Leading fitness tracker and fitness band OEM manufacturer. Heart rate, SpO2, GPS tracking. MOQ 100pcs, CE/FCC certified.",
    url: "https://microwear.info/products/fitness-tracker",
    type: "website",
  },
};

export default function FitnessTrackerPage() {
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
            Fitness Tracker & Fitness Band OEM Manufacturer
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#94a3b8',
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px'
          }}>
            Professional fitness tracker factory with advanced health monitoring, sports tracking, and long battery life. 
            CE/FCC certified, MOQ 100pcs, custom design available.
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
            Key Features
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
                Health Monitoring
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                24/7 heart rate tracking, SpO2 monitoring, sleep analysis, stress management. 
                Advanced sensors for accurate health data.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏃</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                Sports Tracking
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Multi-sport modes including running, cycling, swimming, yoga. 
                GPS tracking, calorie burn, distance measurement.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔋</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                Long Battery Life
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                7-14 days typical usage, 30+ days standby. 
                Fast charging, magnetic charging dock available.
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
                Custom Options
              </h3>
              <p style={{ color: '#94a3b8' }}>Logo, color, packaging</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>✅</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Certifications
              </h3>
              <p style={{ color: '#94a3b8' }}>CE, FCC, RoHS certified</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Fast Samples
              </h3>
              <p style={{ color: '#94a3b8' }}>7-day sample delivery</p>
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
            <Link href="/products/W11pro" style={{
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
                  src="/images/products/w11poverall.webp" 
                  alt="Microwear W11 Pro"
                  style={{ maxHeight: '180px', maxWidth: '90%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                  Microwear W11 Pro
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b' }}>
                  Premium smartwatch with advanced health tracking and stunning AMOLED display.
                </p>
              </div>
            </Link>
            <Link href="/products/mw-fit-lite" style={{
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
                  src="/images/products/S11OverAll.png" 
                  alt="Microwear Watch S11"
                  style={{ maxHeight: '180px', maxWidth: '90%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                  Microwear Watch S11
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b' }}>
                  Affordable fitness tracker with essential health features.
                </p>
              </div>
            </Link>
            <Link href="/products/mw-sport-ultra" style={{
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
                  src="/images/products/Ultra5Overall.jpg" 
                  alt="Watch Ultra 5"
                  style={{ maxHeight: '180px', maxWidth: '90%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                  Watch Ultra 5
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b' }}>
                  Rugged sports watch designed for extreme athletes.
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
            Ready to Start Your Fitness Tracker Project?
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Get a competitive quote within 24 hours. Bulk orders welcome.
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
