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
            10+ Years of OEM/ODM Expertise | ISO9001 Certified Factory | Global B2B Partner
          </p>
        </ScrollReveal>

        <div className="capacity-grid">
          {/* Production Capacity */}
          <ScrollReveal delay={0.1}>
            <div className="capacity-card">
              <div className="capacity-icon">🏭</div>
              <h3 className="capacity-card-title">Production Capacity</h3>
              <ul className="capacity-list">
                <li><strong>500+</strong> Manufacturing Team</li>
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
              <span className="metric-number">50+</span>
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
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
        }

        .manufacturing-capacity-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .manufacturing-capacity-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .manufacturing-capacity-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 50px;
        }

        .capacity-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 50px;
        }

        .capacity-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .capacity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .capacity-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }

        .capacity-card-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .capacity-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .capacity-list li {
          padding: 8px 0;
          color: #555;
          font-size: 0.95rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .capacity-list li:last-child {
          border-bottom: none;
        }

        .capacity-list strong {
          color: #2563eb;
          font-weight: 600;
        }

        .trust-metrics {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          padding: 40px 20px;
          background: white;
          border-radius: 12px;
          margin-bottom: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .metric-item {
          text-align: center;
        }

        .metric-number {
          display: block;
          font-size: 3rem;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 8px;
        }

        .metric-label {
          display: block;
          font-size: 0.95rem;
          color: #666;
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
          background: #2563eb;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .manufacturing-cta-button:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .manufacturing-cta-button.secondary {
          background: white;
          color: #2563eb;
          border: 2px solid #2563eb;
        }

        .manufacturing-cta-button.secondary:hover {
          background: #eff6ff;
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
