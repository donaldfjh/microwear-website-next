import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./AboutPage.css";

export const metadata: Metadata = {
  title: "About Microwear | Smart Watch OEM Manufacturer Since 2008 | ISO9001 Factory",
  description:
    "Microwear is a leading smartwatch manufacturer with 15+ years experience. ISO9001 certified OEM factory with 300+ employees, 1000+ patents. Free samples, custom logo, SDK support. Partner with us for your wearable brand.",
  keywords: ["smartwatch manufacturer", "OEM factory China", "wearable tech", "Microwear factory", "ISO9001 certified", "custom smartwatch"],
  alternates: {
    canonical: "https://microwear.info/about",
  },
  openGraph: {
    title: "About Microwear | Smart Watch OEM Manufacturer Since 2008 | ISO9001 Factory",
    description:
      "Microwear is a leading smartwatch manufacturer with 15+ years experience. ISO9001 certified OEM factory with 300+ employees, 1000+ patents.",
  },
};

export default function AboutPage() {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Microwear",
    "alternateName": "Shenzhen NJY Technology Co., Ltd",
    "url": "https://microwear.info",
    "logo": "https://microwear.info/logo.png",
    "description": "Leading smartwatch manufacturer with 15+ years experience, ISO9001 certified OEM factory",
    "foundingDate": "2008",
    "founders": [
      {
        "@type": "Person",
        "name": "Microwear Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "JiaDa R&D Building, North Hi-Tech Park, Nanshan District",
      "addressLocality": "Shenzhen",
      "postalCode": "518057",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+852 6733 7121",
      "email": "donaldfang@njytech.com.cn",
      "contactType": "sales",
      "areaServed": "Global",
      "availableLanguage": ["English", "Chinese"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61578917438987",
      "https://www.linkedin.com/in/donald-microwear/",
      "https://twitter.com/microwear",
      "https://instagram.com/microwear"
    ],
    "numberOfEmployees": 300,
    "knowsAbout": ["Smart Watch", "Wearable Technology", "OEM Manufacturing"],
    "award": "1000+ Patents",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Smart Watch Product Line",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "OEM Smart Watch Manufacturing",
            "description": "Custom smartwatch manufacturing with MOQ 100pcs"
          }
        }
      ]
    }
  };

  return (
    <div className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="about-container">
        <ScrollReveal>
          <div className="about-header">
            <div className="header-badge">15+ Years of Excellence</div>
            <h1>About Microwear</h1>
            <p className="about-tagline">
              Your Trusted Smart Watch & AI Glasses OEM Partner Since 2008
            </p>
            <div className="header-stats">
              <div className="stat-card">
                <div className="stat-value">300+</div>
                <div className="stat-label">Employees</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">8</div>
                <div className="stat-label">SMT Production Lines</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">2M+</div>
                <div className="stat-label">Units/Year Capacity</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">500+</div>
                <div className="stat-label">Global Partners</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <section className="about-section brand-story">
            <div className="story-hero">
              <div className="story-image-container">
                <Image
                  src="/images/products/fac2.png"
                  alt="MicroWear Headquarters - Shenzhen"
                  className="factory-image"
                  width={800}
                  height={500}
                  priority
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Our Headquarters</h3>
                    <p>Shenzhen, China</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-content">
              <div className="story-header">
                <h2>Our Story</h2>
                <div className="story-subtitle">
                  Building the Future of Wearable Technology Since 2008
                </div>
              </div>
              <div className="story-text">
                <p>
                  <strong>Shenzhen NJY Technology Co., Ltd.</strong>{" "}
                  (Abbreviation: Najingyun) is a modern high-tech enterprise
                  focusing on the smart wearable industry, integrating design,
                  R&D, production, sales, branding, and service.
                </p>
                <div className="story-stats">
                  <div className="stat-item">
                    <div className="stat-icon">👥</div>
                    <div className="stat-number">300+</div>
                    <div className="stat-label">Skilled Employees</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">🏭</div>
                    <div className="stat-number">8</div>
                    <div className="stat-label">SMT Production Lines</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">⚡</div>
                    <div className="stat-number">2M+</div>
                    <div className="stat-label">Annual Capacity</div>
                  </div>
                </div>
                <p>
                  With state-of-the-art facilities and a dedicated team of
                  engineers, we ensure every product meets the highest standards
                  of quality and innovation. Our commitment to excellence drives
                  us to continuously push the boundaries of wearable technology,
                  delivering products that enhance lives around the world.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <section className="about-section mission">
            <h2>Our Mission</h2>
            <p>
              To empower individuals to live healthier, more connected lives
              through innovative wearable technology that seamlessly integrates
              into their daily routines. We believe technology should adapt to
              you, not the other way around.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <section className="about-section timeline">
            <div className="section-header">
              <h2>Our Journey</h2>
              <p className="section-intro">From a small startup to a global smartwatch manufacturer, our growth story reflects commitment to innovation and quality.</p>
            </div>
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-badge">🚀</div>
                <div className="timeline-year">2008</div>
                <div className="timeline-content">
                  <h3>Company Founded</h3>
                  <p>Established in Shenzhen, focusing on smart wearable technology R&D and manufacturing</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge">🏭</div>
                <div className="timeline-year">2012</div>
                <div className="timeline-content">
                  <h3>First Production Line</h3>
                  <p>Launched first SMT production line, marking the beginning of in-house manufacturing</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge">✅</div>
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h3>ISO9001 Certified</h3>
                  <p>Achieved ISO9001 quality management certification, ensuring international standards</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge">🌍</div>
                <div className="timeline-year">2018</div>
                <div className="timeline-content">
                  <h3>Global Expansion</h3>
                  <p>Expanded to 30+ countries, serving 500+ B2B partners worldwide</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge">⚡</div>
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h3>8 SMT Lines</h3>
                  <p>Reached 2M+ units/year production capacity with 8 advanced SMT lines</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge">👓</div>
                <div className="timeline-year">2023</div>
                <div className="timeline-content">
                  <h3>AI Glasses Launch</h3>
                  <p>Launched AI Glasses product line, expanding into next-gen wearable technology</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge">🏆</div>
                <div className="timeline-year">2026</div>
                <div className="timeline-content">
                  <h3>Industry Leadership</h3>
                  <p>Continuing to innovate with 15+ years of experience in smart wearable manufacturing</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <section className="about-section values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>
                  We constantly push boundaries to deliver features that matter,
                  staying ahead of trends while maintaining simplicity.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Quality</h3>
                <p>
                  Every product undergoes rigorous testing to ensure durability,
                  accuracy, and reliability you can count on.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>User-Centric</h3>
                <p>
                  Our users are at the heart of everything we do. We listen,
                  learn, and evolve based on real feedback.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>Sustainability</h3>
                <p>
                  We&apos;re committed to reducing our environmental impact
                  through responsible sourcing and eco-friendly packaging.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <section className="about-section philosophy">
            <h2>Our Philosophy</h2>
            <p>
              We believe that great technology disappears into the background,
              working quietly to enhance your life. A smartwatch shouldn&apos;t
              demand your attention—it should give you more time to focus on
              what truly matters.
            </p>
            <p>
              This philosophy guides every decision we make, from the features
              we include to the ones we deliberately leave out. The result is a
              product line that feels natural, intuitive, and genuinely helpful.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.55}>
          <section className="about-section certifications">
            <h2>Quality Certifications</h2>
            <p>
              Our manufacturing facility meets international quality and safety standards, ensuring reliable products for global markets.
            </p>
            <div className="certifications-grid">
              <div className="cert-card">
                <div className="cert-icon">🏆</div>
                <h3>ISO 9001:2015</h3>
                <p>Quality Management System Certified</p>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🇪🇺</div>
                <h3>CE Marking</h3>
                <p>European Conformity Certification</p>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🇺🇸</div>
                <h3>FCC Approved</h3>
                <p>Federal Communications Commission</p>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🌱</div>
                <h3>RoHS Compliant</h3>
                <p>Restriction of Hazardous Substances</p>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🇨🇳</div>
                <h3>CCC Certified</h3>
                <p>China Compulsory Product Certification</p>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🔬</div>
                <h3>1000+ Patents</h3>
                <p>Core Technology Patents Owned</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.56}>
          <section className="about-section production">
            <h2>Production Capacity</h2>
            <p>
              State-of-the-art manufacturing facility with advanced SMT lines and rigorous quality control processes.
            </p>
            <div className="production-stats">
              <div className="prod-stat">
                <div className="prod-number">8</div>
                <div className="prod-label">SMT Lines</div>
                <div className="prod-desc">High-speed automated assembly</div>
              </div>
              <div className="prod-stat">
                <div className="prod-number">2M+</div>
                <div className="prod-label">Units/Year</div>
                <div className="prod-desc">Annual production capacity</div>
              </div>
              <div className="prod-stat">
                <div className="prod-number">300+</div>
                <div className="prod-label">Employees</div>
                <div className="prod-desc">Skilled workforce</div>
              </div>
              <div className="prod-stat">
                <div className="prod-number">15-25</div>
                <div className="prod-label">Days Delivery</div>
                <div className="prod-desc">Fast turnaround time</div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.57}>
          <section className="about-section faq-cta">
            <h2>Have Questions About Microwear?</h2>
            <p>
              Find instant answers to common questions about our factory, certifications, 
              MOQ, pricing, OEM services, and ordering process.
            </p>
            <a href="/factory-faq" className="faq-cta-button">
              View Factory FAQ
            </a>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <section className="about-section connect">
            <h2>Connect With Us</h2>
            <p>
              Join our community and stay updated on the latest products,
              features, and health tips.
            </p>
            <div className="social-links">
              <a
                href="https://twitter.com/microwear"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Twitter</span>
              </a>
              <a
                href="https://facebook.com/microwear"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://instagram.com/microwear"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://linkedin.com/company/microwear"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
