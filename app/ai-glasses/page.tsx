import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { QA } from "@/components/QA";
import type { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title:
    "AI Smart Glasses Manufacturer | ChatGPT Voice & Sony 8MP Camera Wearables | NJY Tech",
  description:
    "Premier OEM factory for AI eyewear. Featuring W Ai 4 (38g Lightweight with ChatGPT) and W AI 3 (Sony IMX219 Video Recording). ISO9001 Certified, 300+ Patents.",
  alternates: {
    canonical: "https://microwear.info/ai-glasses",
  },
  openGraph: {
    title: "AI Smart Glasses Manufacturer | NJY Tech",
    description:
      "Premier OEM factory for AI eyewear. Featuring W Ai 4 and W AI 3 models.",
    type: "website",
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
      priceCurrency: "USD",
      price: "0.00",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "NJY Technology",
      },
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

  return (
    <div className="ai-glasses-landing">
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
                      alt="W Ai 4 Lightweight AI Glasses"
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
                      alt="W AI 3 Camera Glasses"
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
