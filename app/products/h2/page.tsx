import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { QA } from "@/components/QA";
import { BreadcrumbSchema } from "@/components/SEO/BreadcrumbSchema";
import type { Metadata } from "next";
import "./H2Page.css";

export const metadata: Metadata = {
  title: "Microwear H2 Smartwatch | Industrial Grade Wearable Device Manufacturer",
  description: "Microwear H2 rugged smartwatch for enterprise. ODM/OEM available. Bulk orders, custom firmware, global shipping. Get factory quote today.",
  keywords: [
    "microwear h2",
    "microwear h2 smartwatch",
    "industrial grade smartwatch",
    "rugged smartwatch",
    "enterprise smartwatch OEM",
    "military grade smartwatch manufacturer",
    "rugged wearable device factory",
    "IP68 smartwatch wholesale",
    "outdoor smartwatch OEM",
    "tactical smartwatch manufacturer",
    "H2 smartwatch bulk orders",
    "rugged smartwatch ODM China"
  ],
  alternates: {
    canonical: "https://microwear.info/products/h2",
  },
  openGraph: {
    title: "Microwear H2 Smartwatch | Industrial Grade Wearable Device Manufacturer",
    description: "Microwear H2 rugged smartwatch for enterprise. ODM/OEM available. Bulk orders, custom firmware, global shipping. Get factory quote today.",
    type: "website",
    images: [
      "https://microwear.info/images/products/h2-main.webp"
    ]
  },
};

export default function H2ProductPage() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Microwear H2 Rugged Smartwatch",
    image: [
      "https://microwear.info/images/products/h2-main.webp",
      "https://microwear.info/images/products/h2-side.webp",
    ],
    description: "Industrial grade rugged smartwatch designed for enterprise and outdoor use. IP68 waterproof, military-grade durability, extended battery life. ODM/OEM services available.",
    brand: {
      "@type": "Brand",
      name: "Microwear",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Microwear",
      url: "https://microwear.info",
    },
    offers: {
      "@type": "Offer",
      url: "https://microwear.info/products/h2",
      price: "35.00",
      priceCurrency: "USD",
      priceValidUntil: "2027-04-01",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Microwear",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "35.00",
        minPrice: "35.00",
        maxPrice: "55.00",
        priceCurrency: "USD"
      },
      businessFunction: "wholesale"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "156",
      bestRating: "5",
      worstRating: "1"
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Display",
        value: "1.96\" AMOLED, 410x502 pixels",
      },
      {
        "@type": "PropertyValue",
        name: "Battery Life",
        value: "10-14 Days typical use",
      },
      {
        "@type": "PropertyValue",
        name: "Water Resistance",
        value: "IP68 + 5ATM (50 meters)",
      },
      {
        "@type": "PropertyValue",
        name: "Durability",
        value: "MIL-STD-810H certified",
      },
      {
        "@type": "PropertyValue",
        name: "Connectivity",
        value: "Bluetooth 5.3, GPS, GLONASS",
      },
      {
        "@type": "PropertyValue",
        name: "Sensors",
        value: "Heart Rate, SpO2, ECG, Accelerometer, Gyroscope, Barometer",
      },
      {
        "@type": "PropertyValue",
        name: "MOQ",
        value: "200 pcs (OEM/ODM)",
      },
      {
        "@type": "PropertyValue",
        name: "Lead Time",
        value: "7 days sample, 15-25 days bulk",
      },
    ],
  };

  const h2FaqItems = [
    {
      id: 1,
      question: "What makes the H2 suitable for industrial use?",
      answer: "The H2 features MIL-STD-810H certification, IP68+5ATM water resistance, and reinforced casing. It withstands extreme temperatures (-20°C to 60°C), drops, vibrations, and dust exposure.",
    },
    {
      id: 2,
      question: "Can I customize the H2 firmware for my industry?",
      answer: "Yes. We provide full SDK support and custom firmware development. Common customizations include industry-specific sensors, data logging, and enterprise app integration.",
    },
    {
      id: 3,
      question: "What is the battery life in field conditions?",
      answer: "Typical use: 10-14 days. Heavy GPS use: 3-5 days. Power saving mode: up to 30 days. Optional wireless charging available for OEM orders.",
    },
    {
      id: 4,
      question: "Is the H2 compatible with enterprise MDM systems?",
      answer: "Yes. The H2 supports MDM (Mobile Device Management) integration for enterprise deployment. Custom management APIs available for bulk device management.",
    },
  ];

  return (
    <div className="h2-product-page">
      <BreadcrumbSchema 
        items={[
          { name: "Products", url: "/products" },
          { name: "H2 Rugged Smartwatch", url: "/products/h2" }
        ]} 
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <section className="h2-hero">
        <div className="container">
          <ScrollReveal>
            <div className="hero-content">
              <div className="hero-text">
                <span className="badge-industrial">Industrial Grade</span>
                <h1>Microwear H2 Rugged Smartwatch</h1>
                <p className="hero-subtitle">
                  Built for Enterprise. Engineered for Extremes.
                </p>
                <p className="hero-description">
                  The H2 is an industrial grade wearable device designed for demanding environments. 
                  MIL-STD-810H certified, IP68+5ATM waterproof, with 14-day battery life. 
                  Perfect for construction, logistics, outdoor sports, and tactical operations.
                </p>
                <div className="hero-cta">
                  <Link href="/contact?subject=H2 Smartwatch Quote" className="btn btn-primary">
                    Get Factory Quote
                  </Link>
                  <Link href="/contact?subject=H2 Sample Request" className="btn btn-outline">
                    Request Sample
                  </Link>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-placeholder">
                  <Image
                    src="/images/products/h2-hero.webp"
                    alt="Microwear H2 Rugged Smartwatch - Industrial Grade Wearable Device"
                    width={600}
                    height={500}
                    className="product-hero-image"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Features */}
      <section className="h2-features">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Why Choose Microwear H2?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Military Grade Durability</h3>
                <p>MIL-STD-810H certified. Withstands drops, shocks, vibrations, and extreme temperatures from -20°C to 60°C.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💧</div>
                <h3>IP68 + 5ATM Waterproof</h3>
                <p>Fully submersible up to 50 meters. Dust-proof, water-proof, ready for any environment.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔋</div>
                <h3>14-Day Battery Life</h3>
                <p>Extended battery for continuous operation. Power saving mode extends to 30 days.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📡</div>
                <h3>Dual-Band GPS</h3>
                <p>GPS + GLONASS + Galileo + BeiDou. Accurate positioning for outdoor and industrial tracking.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">❤️</div>
                <h3>Advanced Health Monitoring</h3>
                <p>24/7 Heart Rate, SpO2, ECG, stress monitoring. Keep your workforce healthy and safe.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Full OEM/ODM Support</h3>
                <p>Custom firmware, logo, packaging, and hardware modifications. MOQ 200pcs.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="h2-specs">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Display</span>
                <span className="spec-value">1.96" AMOLED, 410x502 pixels, Always-On</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Processor</span>
                <span className="spec-value">Dual-core 300MHz</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Battery</span>
                <span className="spec-value">450mAh, 10-14 days typical, wireless charging optional</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Water Resistance</span>
                <span className="spec-value">IP68 + 5ATM (50 meters)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Durability</span>
                <span className="spec-value">MIL-STD-810H, Reinforced polymer case</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Connectivity</span>
                <span className="spec-value">Bluetooth 5.3, GPS/GLONASS/Galileo/BeiDou</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Sensors</span>
                <span className="spec-value">Heart Rate, SpO2, ECG, Accelerometer, Gyroscope, Barometer, Compass</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Compatibility</span>
                <span className="spec-value">iOS 12+, Android 6.0+</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Dimensions</span>
                <span className="spec-value">48 x 48 x 14.5 mm</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Weight</span>
                <span className="spec-value">65g (with strap)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications</span>
                <span className="spec-value">CE, FCC, RoHS, MIL-STD-810H, ISO9001</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">MOQ</span>
                <span className="spec-value">200 pcs (OEM/ODM negotiable)</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OEM/ODM Services */}
      <section className="h2-oem">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">OEM/ODM Customization Options</h2>
            <div className="oem-grid">
              <div className="oem-card">
                <h3>🎨 Custom Branding</h3>
                <p>Laser engraving, silk printing, embossed logo on watch face, case back, boot screen, and packaging.</p>
              </div>
              <div className="oem-card">
                <h3>⚙️ Hardware Mods</h3>
                <p>Custom sensors, battery capacity, display type, strap materials, button colors, and casing finishes.</p>
              </div>
              <div className="oem-card">
                <h3>💻 Firmware Custom</h3>
                <p>Custom UI, pre-installed apps, industry-specific features, MDM integration, data logging.</p>
              </div>
              <div className="oem-card">
                <h3>📦 Packaging Design</h3>
                <p>Custom retail boxes, user manuals, accessories, QR codes, and multi-language support.</p>
              </div>
            </div>
            <div className="oem-cta">
              <Link href="/contact?subject=H2 OEM/ODM Project" className="btn btn-primary">
                Start Your H2 Customization Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <QA
        items={h2FaqItems}
        title="H2 Smartwatch - Common Questions"
        subtitle="Frequently asked questions about the Microwear H2 rugged smartwatch"
      />

      {/* Trust & Factory Info */}
      <section className="trust-section">
        <div className="container">
          <ScrollReveal>
            <div className="trust-grid">
              <div className="trust-item">
                <h4>Manufacturer</h4>
                <p>Microwear - 15+ Years Experience</p>
              </div>
              <div className="trust-item">
                <h4>Certifications</h4>
                <p>ISO9001, CE, FCC, RoHS, MIL-STD-810H</p>
              </div>
              <div className="trust-item">
                <h4>Production Capacity</h4>
                <p>500K+ units/month</p>
              </div>
              <div className="trust-item">
                <h4>Global Markets</h4>
                <p>Europe, Americas, Asia, Middle East, 50+ countries</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="h2-final-cta">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Deploy H2 for Your Business?</h2>
            <p>Get factory direct pricing, free samples, and expert support for your rugged smartwatch project.</p>
            <div className="cta-buttons">
              <Link href="/contact?subject=H2 Bulk Order Quote" className="btn btn-primary btn-large">
                Request Bulk Quote
              </Link>
              <Link href="/contact?subject=H2 Sample Request" className="btn btn-outline btn-large">
                Order Sample ($35)
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
