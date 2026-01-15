import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
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
  return (
    <div className="ai-glasses-landing">
      {/* Section A: W Ai 4 (White/Minimalist) */}
      <section className="product-section section-white" id="w-ai-4">
        <div className="container">
          <ScrollReveal>
            <div className="section-content">
              <div className="text-block">
                <span className="badge-new">New Release</span>
                <h2>W Ai 4 AI Voice Glasses</h2>
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
                    href="/contact?subject=Inquiry for W Ai 4 Samples"
                    className="btn btn-primary"
                  >
                    Inquire for Samples
                  </Link>
                  <Link
                    href="/contact?subject=Request W Ai 4 Specs"
                    className="btn btn-outline"
                  >
                    Download OEM Specs
                  </Link>
                </div>
              </div>

              <div className="image-block">
                <div className="image-wrapper">
                  <Image
                    src="/images/glasses/glasses1.webp"
                    alt="W Ai 4 Lightweight AI Glasses"
                    width={600}
                    height={400}
                    className="product-image"
                    priority
                  />
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
                <h2>W AI 3 Camera Glasses</h2>
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
                    href="/contact?subject=Quote for W AI 3"
                    className="btn btn-primary-dark"
                  >
                    Get Quote
                  </Link>
                  <Link
                    href="/contact?subject=Demo Video W AI 3"
                    className="btn btn-outline-dark"
                  >
                    Watch Demo Video
                  </Link>
                </div>
              </div>

              <div className="image-block">
                <div className="image-wrapper">
                  <Image
                    src="/images/AI_PRO/Pro_3.webp"
                    alt="W AI 3 Camera Glasses"
                    width={600}
                    height={400}
                    className="product-image"
                  />
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
