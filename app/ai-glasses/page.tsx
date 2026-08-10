import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { QA } from "@/components/QA";
import { BreadcrumbSchema } from "@/components/SEO/BreadcrumbSchema";
import type { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title:
    "OEM Smart Glasses Manufacturer | AI/AR/Camera/Telephone Eyewear Factory",
  description:
    "Professional OEM manufacturer for smart glasses, AR glasses, camera glasses, and telephone glasses. Custom design, firmware, branding. MOQ 200pcs. CE/FCC certified. Get factory direct quote today.",
  keywords: [
    "smart glasses manufacturer",
    "AR glasses factory",
    "camera glasses OEM",
    "telephone glasses supplier",
    "AI glasses manufacturer",
    "smart glasses OEM",
    "ChatGPT glasses factory",
    "AI smart glasses wholesale",
    "OEM AI eyewear China",
    "smart glasses with camera",
    "voice assistant glasses",
    "wearable AI device factory",
    "B2B AI glasses supplier",
    "microwear AI glasses",
    "smart glasses bulk orders",
    "AI glasses MOQ 200",
    "custom smart glasses manufacturer",
    "augmented reality eyewear factory",
    "smart audio glasses OEM"
  ],
  alternates: {
    canonical: "https://microwear.info/ai-glasses",
  },
  openGraph: {
    title: "OEM Smart Glasses Manufacturer | AI/AR/Camera/Telephone Eyewear Factory",
    description:
      "Professional OEM manufacturer for smart glasses, AR glasses, camera glasses, and telephone glasses. Custom design, firmware, branding. MOQ 200pcs. CE/FCC certified.",
    type: "website",
    images: [
      "https://microwear.info/images/glasses/glasses1.webp"
    ]
  },
};

export default function AIGlassesPage() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Microwear W Ai 4 Smart Glasses",
    image: [
      "https://microwear.info/images/AI_4/01.webp",
      "https://microwear.info/images/AI_4/02.webp",
    ],
    description:
      "Ultra-lightweight 38g AI smart glasses with ChatGPT integration and 11-hour battery life. Featuring medical-grade ergonomic design.",
    brand: {
      "@type": "Brand",
      name: "Microwear",
    },
    manufacturer: {
      "@type": "Organization",
      name: "NJY Technology Co., Ltd",
      foundingDate: "2008",
    },
    offers: {
      "@type": "Offer",
      url: "https://microwear.info/products/chatgpt-compatible-smart-glasses-anti-leakage-ai4",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "NJY Technology",
      },
      description: "Contact for factory quote. MOQ 200 pcs.",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Weight",
        value: "38g",
      },
      {
        "@type": "PropertyValue",
        name: "AI Model",
        value: "ChatGPT & Tongyi",
      },
      {
        "@type": "PropertyValue",
        name: "Chipset",
        value: "JL7012A6 (160MHz)",
      },
      {
        "@type": "PropertyValue",
        name: "Battery Life",
        value: "11 Hours Music Playback",
      },
    ],
  };

  const aiFaqItems = [
    {
      id: 1,
      question: "What is the lightest AI smart glass for OEM?",
      answer:
        'The Microwear W Ai 4 is currently one of the market leaders, weighing only 38g. It uses nano-injection molding to achieve an "air-like" wearing experience suitable for 8+ hours of use.',
    },
    {
      id: 2,
      question: "Can Microwear W AI 3 record first-person video?",
      answer:
        "Yes. The W AI 3 features a Sony IMX219 (8MP) sensor with EIS neural-network stabilization. It supports 1200p video recording at 30fps, ideal for content creation.",
    },
    {
      id: 3,
      question: "Is NJY Technology a factory or trading company?",
      answer:
        "NJY Technology is a manufacturer established in 2008 with 200+ employees and over 300 core patents. We provide OEM services for global brands.",
    },
  ];

  const glassesCategories = [
    {
      id: "telephone",
      name: "Telephone Glasses",
      keyword: "telephone glasses OEM",
      description: "Smart audio glasses with Bluetooth calling, open-ear speakers, and voice assistant integration. Perfect for hands-free communication.",
      features: ["Bluetooth Calling", "Open-Ear Audio", "Voice Assistant", "12h+ Battery"],
      link: "/contact?subject=Telephone Glasses OEM",
    },
    {
      id: "camera",
      name: "Camera Glasses",
      keyword: "camera glasses OEM",
      description: "First-person video recording glasses with Sony sensors. Capture life from your perspective. Live streaming capable.",
      features: ["Sony 8MP Sensor", "1080P/4K Recording", "EIS Stabilization", "Live Streaming"],
      link: "/contact?subject=Camera Glasses OEM",
    },
    {
      id: "ar",
      name: "AR Glasses",
      keyword: "ar glasses OEM",
      description: "Augmented reality glasses with MicroLED displays and waveguide optics. Enterprise and consumer models available.",
      features: ["MicroLED Display", "Waveguide Optics", "Android/Linux OS", "6DoF Tracking"],
      link: "/contact?subject=AR Glasses OEM",
    },
    {
      id: "smart",
      name: "Smart Glasses",
      keyword: "smart glasses OEM",
      description: "All-in-one intelligent eyewear with AI integration. ChatGPT, translation, navigation, and more.",
      features: ["AI Integration", "Real-time Translation", "Navigation", "Touch Controls"],
      link: "/contact?subject=Smart Glasses OEM",
    },
  ];

  return (
    <div className="ai-glasses-landing">
      {/* SEO: Structured Data */}
      <BreadcrumbSchema items={[{ name: "AI Glasses", url: "/ai-glasses" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Section A: W Ai 4 (White/Minimalist) */}
      <section className="product-section section-white" id="w-ai-4">
        <div className="container">
          <ScrollReveal>
            <div className="section-content">
              <div className="text-block">
                <span className="badge-new">New Release</span>
                <Link
                  href="/products/chatgpt-compatible-smart-glasses-anti-leakage-ai4"
                  className="product-title-link"
                >
                  <h2>W Ai 4 AI Voice Glasses</h2>
                </Link>
                <p className="subtitle">The Invisible Assistant. Only 38g.</p>

                <div className="usp-grid">
                  <div className="usp-item">
                    <h3>38g Lightweight</h3>
                    <p>
                      &quot;Air-Like&quot; wearing experience with medical-grade
                      materials.
                    </p>
                  </div>
                  <div className="usp-item">
                    <h3>ChatGPT Integrated</h3>
                    <p>
                      Voice wake-up &quot;Xiao Jie&quot; for instant AI
                      assistance.
                    </p>
                  </div>
                  <div className="usp-item">
                    <h3>11h Battery</h3>
                    <p>Continuous music playback with JL7012A6 chipset.</p>
                  </div>
                </div>

                <div className="cta-group">
                  <Link
                    href="/products/chatgpt-compatible-smart-glasses-anti-leakage-ai4"
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/contact?subject=Inquiry for W Ai 4 Samples"
                    className="btn btn-outline"
                  >
                    Inquire for Samples
                  </Link>
                </div>
              </div>

              <div className="image-block">
                <div className="image-wrapper">
                  <Link href="/products/chatgpt-compatible-smart-glasses-anti-leakage-ai4">
                    <Image
                      src="/images/glasses/glasses1.webp"
                      alt="Microwear W Ai 4 AI Smart Glasses - 38g Lightweight Voice Assistant with ChatGPT Integration"
                      width={600}
                      height={400}
                      className="product-image"
                      priority
                    />
                  </Link>
                </div>
                <div className="tech-specs-mini">
                  <span>
                    <i className="icon-chip"></i> JL7012A6 (160MHz)
                  </span>
                  <span>
                    <i className="icon-mic"></i> 95% Noise Reduction
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section B: W AI 3 (Dark/Tech) */}
      <section className="product-section section-dark" id="w-ai-3">
        <div className="container">
          <ScrollReveal>
            <div className="section-content reverse">
              <div className="text-block">
                <span className="badge-pro">Professional Series</span>
                <Link
                  href="/products/ray-ban-meta-alternative-manufacturer-ai3-pro"
                  className="product-title-link"
                >
                  <h2>W AI 3 Camera Glasses</h2>
                </Link>
                <p className="subtitle">Visual Creator. Sony IMX219 Sensor.</p>

                <div className="usp-grid">
                  <div className="usp-item">
                    <h3>Sony IMX219</h3>
                    <p>
                      8MP Sensor (13MP Interpolated) with EIS Stabilization.
                    </p>
                  </div>
                  <div className="usp-item">
                    <h3>First-Person View</h3>
                    <p>Record life in 1200p @ 30fps hands-free.</p>
                  </div>
                  <div className="usp-item">
                    <h3>Live Translation</h3>
                    <p>
                      Real-time simultaneous interpretation & meeting assistant.
                    </p>
                  </div>
                </div>

                <div className="cta-group">
                  <Link
                    href="/products/ray-ban-meta-alternative-manufacturer-ai3-pro"
                    className="btn btn-primary-dark"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/contact?subject=Quote for W AI 3"
                    className="btn btn-outline-dark"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>

              <div className="image-block">
                <div className="image-wrapper">
                  <Link href="/products/ray-ban-meta-alternative-manufacturer-ai3-pro">
                    <Image
                      src="/images/AI_PRO/Pro_3.webp"
                      alt="Microwear W AI 3 Camera Glasses - Sony IMX219 8MP Sensor with First-Person Video Recording"
                      width={600}
                      height={400}
                      className="product-image"
                    />
                  </Link>
                </div>
                <div className="tech-specs-mini">
                  <span>3 Interchangeable Lenses</span>
                  <span>WiFi 6+</span>
                  <span>BT 5.4</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Model Comparison</h2>
            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>W Ai 4 (Voice)</th>
                    <th>W AI 3 (Camera)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Core Focus</td>
                    <td>Voice Assistant & Audio</td>
                    <td>Video Recording & Vision</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>
                      <strong>38g</strong> (Ultra-light)
                    </td>
                    <td>44g (Tech-packed)</td>
                  </tr>
                  <tr>
                    <td>Camera</td>
                    <td>-</td>
                    <td>
                      <strong>Sony IMX219 (8MP)</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>AI Model</td>
                    <td>ChatGPT / Tongyi</td>
                    <td>Meeting Assistant / Translator</td>
                  </tr>
                  <tr>
                    <td>Chipset</td>
                    <td>JL7012A6</td>
                    <td>Allwinner V821</td>
                  </tr>
                  <tr>
                    <td>Battery</td>
                    <td>220mAh (11h Music)</td>
                    <td>300mAh (Magnetic Charge)</td>
                  </tr>
                  <tr>
                    <td>Lenses</td>
                    <td>Anti-Blue Light</td>
                    <td>3 Lenses (Clear/Purple/Gray)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Product Parameters Table */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: 'transparent'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              Product Specifications
            </h2>
            <p style={{
              fontSize: '16px',
              textAlign: 'center',
              color: '#64748b',
              marginBottom: '48px'
            }}>
              Technical parameters for OEM customization reference
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
              marginBottom: '48px'
            }}>
              {/* W Ai 4 Specs Card */}
              <div style={{
                padding: '32px',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: 'var(--mw-shadow-soft)',
                borderRadius: '16px',
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#0ea5e9'
                }}>
                  W Ai 4 - Voice Assistant Model
                </h3>
                <table style={{
                  width: '100%',
                  fontSize: '14px',
                  color: '#475569'
                }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Weight</td>
                      <td style={{ padding: '12px 0' }}>38g (Ultra-lightweight)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Camera</td>
                      <td style={{ padding: '12px 0' }}>N/A (Voice-focused)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Battery Capacity</td>
                      <td style={{ padding: '12px 0' }}>220mAh</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Battery Life</td>
                      <td style={{ padding: '12px 0' }}>11 hours music playback</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>AI Integration</td>
                      <td style={{ padding: '12px 0' }}>ChatGPT Ready / Tongyi Qianwen</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Chipset</td>
                      <td style={{ padding: '12px 0' }}>JL7012A6 (160MHz)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Voice Wake-up</td>
                      <td style={{ padding: '12px 0' }}>&quot;Xiao Jie&quot; voice assistant</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Lenses</td>
                      <td style={{ padding: '12px 0' }}>Anti-blue light (optional)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Water Resistance</td>
                      <td style={{ padding: '12px 0' }}>IPX4</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* W AI 3 Specs Card */}
              <div style={{
                padding: '32px',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: 'var(--mw-shadow-soft)',
                borderRadius: '16px',
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#0ea5e9'
                }}>
                  W AI 3 - Camera Model
                </h3>
                <table style={{
                  width: '100%',
                  fontSize: '14px',
                  color: '#475569'
                }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Weight</td>
                      <td style={{ padding: '12px 0' }}>44g (Camera-equipped)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Camera</td>
                      <td style={{ padding: '12px 0' }}>Sony IMX219 8MP (13MP interpolated)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Video Recording</td>
                      <td style={{ padding: '12px 0' }}>1200p @ 30fps with EIS stabilization</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Battery Capacity</td>
                      <td style={{ padding: '12px 0' }}>300mAh (Magnetic charging)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>AI Integration</td>
                      <td style={{ padding: '12px 0' }}>Meeting Assistant / Live Translation</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Chipset</td>
                      <td style={{ padding: '12px 0' }}>Allwinner V821</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Wireless</td>
                      <td style={{ padding: '12px 0' }}>WiFi 4 + Bluetooth 5.4</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Lenses</td>
                      <td style={{ padding: '12px 0' }}>3 interchangeable (Clear/Purple/Gray)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px 0', fontWeight: '600' }}>Live Streaming</td>
                      <td style={{ padding: '12px 0' }}>Supported</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Glasses vs Smartwatch Comparison */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#0f172a'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '16px',
              color: 'white'
            }}>
              Why Choose AI Glasses Over Smartwatch?
            </h2>
            <p style={{
              fontSize: '16px',
              textAlign: 'center',
              color: '#94a3b8',
              marginBottom: '64px'
            }}>
              Unique advantages that smartwatches cannot deliver
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px'
            }}>
              <div style={{
                padding: '32px',
                background: 'rgba(14, 165, 233, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎥</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: 'white'
                }}>
                  First-Person Video
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
                  POV recording from your perspective, not from a wrist-mounted angle
                </p>
              </div>

              <div style={{
                padding: '32px',
                background: 'rgba(168, 85, 247, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>👁️</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: 'white'
                }}>
                  Hands-Free Vision
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
                  No need to lift your wrist. Information overlays directly in your eyewear
                </p>
              </div>

              <div style={{
                padding: '32px',
                background: 'rgba(34, 197, 94, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤖</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: 'white'
                }}>
                  ChatGPT Ready
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
                  Voice-activated AI assistant. Just speak and get instant answers
                </p>
              </div>

              <div style={{
                padding: '32px',
                background: 'rgba(245, 158, 11, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚡</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: 'white'
                }}>
                  38g Ultra-Light
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
                  Lighter than most smartwatches. All-day comfort without wrist fatigue
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{
              marginTop: '48px',
              padding: '32px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'white'
              }}>
                Perfect Complement to Your Smartwatch Line
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#94a3b8',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                Expand your wearable portfolio. AI glasses target content creators, business professionals,
                and outdoor enthusiasts who need hands-free AI assistance and POV recording. Offer both
                smartwatches and AI glasses to capture different market segments.
              </p>
              <Link href="/products" style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: '#0ea5e9',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                View Full Smartwatch Collection →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Application Scenarios Section */}
      <section className="scenarios-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Application Scenarios</h2>
            <p className="section-subtitle">
              AI smart glasses designed for real-world use across industries and lifestyles
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="scenarios-grid">
              <div className="scenario-card">
                <div className="scenario-icon">💼</div>
                <h3>Business & Meetings</h3>
                <p>AI-powered meeting assistant with real-time transcription, translation, and summary generation. Perfect for international business communications.</p>
                <ul className="scenario-features">
                  <li>Real-time translation 40+ languages</li>
                  <li>Meeting notes & summaries</li>
                  <li>Voice commands for presentations</li>
                </ul>
              </div>
              <div className="scenario-card">
                <div className="scenario-icon">🏃</div>
                <h3>Outdoor & Sports</h3>
                <p>First-person video recording for cycling, hiking, and adventure sports. GPS tracking and voice navigation for hands-free operation.</p>
                <ul className="scenario-features">
                  <li>1080P POV video recording</li>
                  <li>IP68 waterproof models</li>
                  <li>GPS navigation assistance</li>
                </ul>
              </div>
              <div className="scenario-card">
                <div className="scenario-icon">🎬</div>
                <h3>Content Creation</h3>
                <p>Create engaging first-person content for social media, vlogs, and streaming. Professional-grade Sony sensors for crisp video quality.</p>
                <ul className="scenario-features">
                  <li>Sony IMX219 sensor</li>
                  <li>EIS stabilization</li>
                  <li>Live streaming support</li>
                </ul>
              </div>
              <div className="scenario-card">
                <div className="scenario-icon">❤️</div>
                <h3>Health & Wellness</h3>
                <p>AI health assistant with voice queries for medication reminders, fitness tracking, and wellness tips. Stay connected to your health data.</p>
                <ul className="scenario-features">
                  <li>Voice health queries</li>
                  <li>Medication reminders</li>
                  <li>Fitness goal tracking</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OEM Options Section */}
      <section className="oem-options-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">OEM Options</h2>
            <p className="section-subtitle">
              Full customization services to build your unique smart glasses brand
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="oem-grid">
              <div className="oem-item">
                <h3>🎨 Custom Design</h3>
                <p>Frame shape, colors, materials, and branding. Create eyewear that matches your brand identity.</p>
              </div>
              <div className="oem-item">
                <h3>⚡ Firmware Custom</h3>
                <p>AI model selection, voice assistant branding, app integration. Tailored software experience.</p>
              </div>
              <div className="oem-item">
                <h3>📦 Packaging & Logo</h3>
                <p>Custom packaging design, user manuals, logo placement. Complete brand packaging solution.</p>
              </div>
              <div className="oem-item">
                <h3>🔧 SDK Support</h3>
                <p>Full SDK documentation for app integration. API access for custom features and data.</p>
              </div>
              <div className="oem-item">
                <h3>🌍 Certification</h3>
                <p>CE, FCC, RoHS certification support for your market. Regulatory compliance assistance.</p>
              </div>
              <div className="oem-item">
                <h3>🚚 Fast Delivery</h3>
                <p>7-day sample delivery, 15-25 day bulk production. MOQ starts from 200pcs for select models.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/contact?subject=Smart Glasses OEM Project" className="btn btn-primary-dark" style={{
                display: 'inline-block',
                padding: '16px 40px',
                background: 'linear-gradient(90deg, #00f2ea, #00c2ff)',
                color: '#000',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none'
              }}>
                Start Your OEM Project →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Categories Section - OEM Smart Glasses Collection */}
      <section className="glasses-categories-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">OEM Smart Glasses Categories</h2>
            <p className="section-subtitle">
              Professional OEM manufacturer for smart eyewear. Custom branding, firmware, and packaging on base models.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="categories-grid">
              {glassesCategories.map((category) => (
                <div key={category.id} className="category-card">
                  <div className="category-header">
                    <h3>{category.name}</h3>
                    <span className="category-keyword">{category.keyword}</span>
                  </div>
                  <p className="category-description">{category.description}</p>
                  <ul className="category-features">
                    {category.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Link href={category.link} className="btn btn-category">
                    Inquire for {category.name}
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="categories-cta">
              <h3>Need Custom Smart Glasses?</h3>
              <p>We provide OEM services for all glasses categories. MOQ 200pcs, 15-25 day production.</p>
              <Link href="/contact?subject=Custom Smart Glasses Project" className="btn btn-primary">
                Start Your OEM Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section (GEO Optimized) */}
      <QA
        items={aiFaqItems}
        title="Common Questions (B2B)"
        subtitle="Frequently asked questions about our AI Smart Glasses OEM services"
        schemaId="https://microwear.info/ai-glasses#faq"
      />

      {/* Trust & Factory Info */}
      <section className="trust-section">
        <div className="container">
          <ScrollReveal>
            <div className="trust-grid">
              <div className="trust-item">
                <h4>Manufacturer</h4>
                <p>NJY Technology Co., Ltd (Est. 2008)</p>
              </div>
              <div className="trust-item">
                <h4>Scale</h4>
                <p>200+ Employees, 300+ Core Patents</p>
              </div>
              <div className="trust-item">
                <h4>Certifications</h4>
                <p>ISO9001, CE, RoHS, FCC, CCC</p>
              </div>
              <div className="trust-item">
                <h4>Global Markets</h4>
                <p>Europe, Americas, Asia, Middle East</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
