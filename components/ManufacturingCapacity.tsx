"use client";

import { ScrollReveal } from "./ScrollReveal";

export function ManufacturingCapacity() {
  return (
    <section className="manufacturing-capacity-section">
      <div className="manufacturing-capacity-container">
        <ScrollReveal>
          <h2 className="manufacturing-capacity-title">
            Manufacturing Excellence & R&D Capability
          </h2>
          <p className="manufacturing-capacity-subtitle">
            10+ Years of OEM Expertise | ISO9001 Certified Factory | Global B2B Partner
          </p>
        </ScrollReveal>

        <div className="capacity-grid">
          {/* Production Capacity */}
          <ScrollReveal delay={0.1}>
            <div className="capacity-card">
              <div className="capacity-icon">🏭</div>
              <h3 className="capacity-card-title">Production Capacity</h3>
              <ul className="capacity-list">
                <li><strong>200+</strong> Manufacturing Team</li>
                <li><strong>8</strong> Automated Production Lines</li>
                <li><strong>800,000+</strong> Monthly Output</li>
                <li><strong>10M+</strong> Annual Production Capacity</li>
                <li>JIT Manufacturing Management</li>
                <li>10,000-level Dust-free Workshop</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* R&D Centers */}
          <ScrollReveal delay={0.2}>
            <div className="capacity-card">
              <div className="capacity-icon">🔬</div>
              <h3 className="capacity-card-title">R&D Centers</h3>
              <ul className="capacity-list">
                <li><strong>3</strong> R&D Hubs (Shenzhen, Guangzhou, Shanghai)</li>
                <li><strong>50+</strong> Engineers & Designers</li>
                <li><strong>20+</strong> Patents & Certifications</li>
                <li><strong>7-day</strong> Prototype Development</li>
                <li>Custom SDK & Software Support</li>
                <li>In-house Mold Development</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Quality Control */}
          <ScrollReveal delay={0.3}>
            <div className="capacity-card">
              <div className="capacity-icon">✅</div>
              <h3 className="capacity-card-title">Quality Control</h3>
              <ul className="capacity-list">
                <li><strong>ISO9001</strong> Certified Factory</li>
                <li><strong>CE, FCC, RoHS</strong> Compliant</li>
                <li>100% Pre-delivery Inspection</li>
                <li>Automated Testing Equipment</li>
                <li>Supplier Assessment System</li>
                <li>Environmental Protection Standards</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Supply Chain */}
          <ScrollReveal delay={0.4}>
            <div className="capacity-card">
              <div className="capacity-icon">🚚</div>
              <h3 className="capacity-card-title">Supply Chain</h3>
              <ul className="capacity-list">
                <li><strong>7-15 Days</strong> Sample Lead Time</li>
                <li><strong>20-30 Days</strong> Bulk Production</li>
                <li>Global Shipping Network</li>
                <li>Material Supply Guarantee</li>
                <li>Real-time Order Tracking</li>
                <li>Flexible MOQ (200pcs+)</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Trust Metrics */}
        <ScrollReveal delay={0.5}>
          <div className="trust-metrics">
            <div className="metric-item">
              <span className="metric-number">10+</span>
              <span className="metric-label">Years Experience</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">500+</span>
              <span className="metric-label">Global B2B Partners</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">30+</span>
              <span className="metric-label">Countries Served</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">24h</span>
              <span className="metric-label">Response Time</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="manufacturing-cta">
            <a href="/contact" className="manufacturing-cta-button">
              Request Factory Tour & Quote
            </a>
            <a href="/products" className="manufacturing-cta-button secondary">
              View Product Catalog
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .manufacturing-capacity-section {
          padding: 80px 20px;
          background: radial-gradient(ellipse 60% 50% at 70% 20%, rgba(94,234,212,0.1), transparent 55%), linear-gradient(165deg, #0a1220, #060912);
        }

        .manufacturing-capacity-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .manufacturing-capacity-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--mw-text);
          margin-bottom: 12px;
        }

        .manufacturing-capacity-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: var(--mw-muted);
          margin-bottom: 50px;
        }

        .capacity-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 50px;
        }

        .capacity-card {
          background: linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035));
          border-radius: 12px;
          padding: 30px;
          box-shadow: var(--mw-shadow-soft); border: 1px solid rgba(255,255,255,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .capacity-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--mw-shadow-float);
        }

        .capacity-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }

        .capacity-card-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--mw-text);
          margin-bottom: 20px;
        }

        .capacity-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .capacity-list li {
          padding: 8px 0;
          color: var(--mw-muted);
          font-size: 0.95rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .capacity-list li:last-child {
          border-bottom: none;
        }

        .capacity-list strong {
          color: #5eead4;
          font-weight: 600;
        }

        .trust-metrics {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          padding: 40px 20px;
          background: linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035));
          border-radius: 12px;
          margin-bottom: 40px;
          box-shadow: var(--mw-shadow-soft); border: 1px solid rgba(255,255,255,0.1);
        }

        .metric-item {
          text-align: center;
        }

        .metric-number {
          display: block;
          font-size: 3rem;
          font-weight: 700;
          color: #5eead4;
          margin-bottom: 8px;
        }

        .metric-label {
          display: block;
          font-size: 0.95rem;
          color: var(--mw-muted);
          font-weight: 500;
        }

        .manufacturing-cta {
          text-align: center;
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .manufacturing-cta-button {
          display: inline-block;
          padding: 16px 32px;
          background: linear-gradient(180deg, #7ef0dc 0%, #5eead4 48%, #2dd4bf 100%);
          color: #04201c;
          text-decoration: none;
          border-radius: 999px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .manufacturing-cta-button:hover {
          background: #2dd4bf;
          transform: translateY(-2px);
        }

        .manufacturing-cta-button.secondary {
          background: linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035));
          color: #5eead4;
          border: 2px solid #5eead4;
        }

        .manufacturing-cta-button.secondary:hover {
          background: rgba(94,234,212,0.12);
        }

        @media (max-width: 768px) {
          .manufacturing-capacity-title {
            font-size: 1.8rem;
          }

          .manufacturing-capacity-subtitle {
            font-size: 1rem;
          }

          .capacity-grid {
            grid-template-columns: 1fr;
          }

          .trust-metrics {
            gap: 20px;
          }

          .metric-number {
            font-size: 2.2rem;
          }

          .manufacturing-cta {
            flex-direction: column;
            align-items: center;
          }

          .manufacturing-cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}
