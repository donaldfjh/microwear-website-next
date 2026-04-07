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
    "ODM Smart Glasses Manufacturer | AI/AR/Camera/Telephone Eyewear Factory",
  description:
    "Professional ODM manufacturer for smart glasses, AR glasses, camera glasses, and telephone glasses. Custom design, firmware, branding. MOQ 500pcs. CE/FCC certified. Get factory direct quote today.",
  keywords: [
    "odm smart glasses",
    "odm ar glasses",
    "odm camera glasses",
    "odm telephone glasses",
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
    title: "ODM Smart Glasses Manufacturer | AI/AR/Camera/Telephone Eyewear Factory",
    description:
      "Professional ODM manufacturer for smart glasses, AR glasses, camera glasses, and telephone glasses. Custom design, firmware, branding. MOQ 500pcs. CE/FCC certified.",
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
      price: "25.00",
      priceCurrency: "USD",
      priceValidUntil: "2027-03-21",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "NJY Technology",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "25.00",
        minPrice: "25.00",
        maxPrice: "60.00",
        priceCurrency: "USD"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "89",
      bestRating: "5",
      worstRating: "1"
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Organization",
        name: "Tech Distributor"
      },
      reviewBody: "Outstanding AI glasses with excellent ChatGPT integration. The 38g weight makes them perfect for all-day wear. Great OEM partner for wearable tech."
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
        "NJY Technology is a manufacturer established in 2008 with 450+ employees and over 300 core patents. We provide OEM/ODM services for global brands.",
    },
  ];

  const glassesCategories = [
    {
      id: "telephone",
      name: "Telephone Glasses",
      keyword: "odm telephone glasses",
      description: "Smart audio glasses with Bluetooth calling, open-ear speakers, and voice assistant integration. Perfect for hands-free communication.",
      features: ["Bluetooth Calling", "Open-Ear Audio", "Voice Assistant", "12h+ Battery"],
      link: "/contact?subject=Telephone Glasses OEM",
    },
    {
      id: "camera",
      name: "Camera Glasses",
      keyword: "odm camera glasses",
      description: "First-person video recording glasses with Sony sensors. Capture life from your perspective. Live streaming capable.",
      features: ["Sony 8MP Sensor", "1080P/4K Recording", "EIS Stabilization", "Live Streaming"],
      link: "/contact?subject=Camera Glasses OEM",
    },
    {
      id: "ar",
      name: "AR Glasses",
      keyword: "odm ar glasses",
      description: "Augmented reality glasses with MicroLED displays and waveguide optics. Enterprise and consumer models available.",
      features: ["MicroLED Display", "Waveguide Optics", "Android/Linux OS", "6DoF Tracking"],
      link: "/contact?subject=AR Glasses OEM",
    },
    {
      id: "smart",
      name: "Smart Glasses",
      keyword: "odm smart glasses",
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
                  <span>
                    <i className="icon-lens"></i> 3 Interchangeable Lenses
                  </span>
                  <span>
                    <i className="icon-wifi"></i> WiFi 4 + BT 5.4
                  </span>
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
            <h2 className="section-title">OEM/ODM Options</h2>
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

      {/* Product Categories Section - ODM Smart Glasses Collection */}
      <section className="glasses-categories-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">ODM Smart Glasses Categories</h2>
            <p className="section-subtitle">
              Professional ODM manufacturer for all types of smart eyewear. Custom design, firmware, and branding available.
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
              <p>We provide full ODM/OEM services for all glasses categories. MOQ 500pcs, 15-25 day production.</p>
              <Link href="/contact?subject=Custom Smart Glasses Project" className="btn btn-primary">
                Start Your ODM Project
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
                <p>450+ Employees, 300+ Core Patents</p>
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
