import { HeroSection } from "@/components/HeroSection";
import { CertificationBar } from "@/components/CertificationBar";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { LocalBusinessSchema } from "@/components/SEO/LocalBusinessSchema";
import { getProducts } from "@/lib/products";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title:
    "Microwear — Official Site | Smartwatch & AI Glasses OEM Manufacturer China",
  description:
    "Microwear — official smartwatch & AI glasses manufacturer. Explore our Microwear smartwatch collection, AI-powered glasses, and wearable devices. ISO9001 certified OEM factory, wholesale bulk orders from $15. 500+ B2B partners worldwide. Get free quote today.",
  keywords: [
    "Microwear",
    "Microwear smartwatch",
    "Microwear official",
    "Microwear manufacturer",
    "Microwear factory",
    "Microwear smart watches",
    "Microwear wearable",
    "Microwear smartwatch manufacturer",
    "Microwear AI glasses manufacturer",
    "smartwatch manufacturer China",
    "smartwatch OEM supplier Shenzhen",
    "wearable device manufacturer",
    "fitness tracker manufacturer",
    "rugged smartwatch OEM",
    "kids smartwatch factory",
    "health smartwatch manufacturer",
    "GPS watch OEM supplier",
    "AI glasses manufacturer",
    "telephone glasses OEM",
    "camera glasses manufacturer",
    "smartwatch wholesale bulk",
    "custom smartwatch OEM",
    "white label smartwatch",
    "smartwatch MOQ 100",
    "smartwatch bulk order",
  ],
  alternates: {
    canonical: "https://microwear.info/",
  },
  openGraph: {
    title:
      "Microwear Official | Smartwatch & AI Glasses OEM Manufacturer from China",
    description:
      "Microwear official website — leading smartwatch and AI glasses OEM manufacturer from Shenzhen, China. 15+ years B2B experience, ISO9001 certified. Wholesale pricing, MOQ 100pcs. 500+ B2B partners worldwide.",
    url: "https://microwear.info/",
    type: "website",
  },
};

const glanceRows: [string, string][] = [
  ["Company", "Microwear (Shenzhen NJY Technology Co., Ltd)"],
  ["Founded", "2008 — 15+ years wearable OEM"],
  ["Location", "Nanshan, Shenzhen, China"],
  ["MOQ", "From 100 pcs per model"],
  [
    "Wholesale price range",
    "Typically $15–50 USD (model & customization dependent)",
  ],
  ["Production capacity", "8 SMT lines, 2M+ units/year, 300+ staff"],
  [
    "Lead time",
    "Samples in 7 days; bulk 15–25 days after sample approval",
  ],
  [
    "Certifications",
    "ISO9001:2015, CE, FCC, RoHS (BQB/REACH on request)",
  ],
  ["Customization", "Logo, firmware, SDK, packaging, white-label app"],
  ["Markets served", "500+ B2B partners in 30+ countries"],
];

const advantages = [
  {
    index: "01",
    title: "Production Capacity",
    body: "8 SMT lines, 2M+ units/year",
  },
  {
    index: "02",
    title: "Quality Assurance",
    body: "ISO9001, CE, FCC certified",
  },
  {
    index: "03",
    title: "Custom Solutions",
    body: "Logo, firmware, packaging",
  },
  {
    index: "04",
    title: "Fast Delivery",
    body: "7-day samples, 15-25 day bulk",
  },
];

const solutions = [
  {
    href: "/products/fitness-tracker",
    title: "Fitness Tracker",
    body: "Heart rate, SpO2, GPS tracking, 100+ sport modes",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    href: "/products/kids-smartwatch",
    title: "Kids Smartwatch",
    body: "GPS tracking, SOS button, parental controls",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    href: "/products/rugged-smartwatch",
    title: "Rugged Smartwatch",
    body: "IP68 waterproof, MIL-STD-810H certified",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    href: "/products/health-smartwatch",
    title: "Health Smartwatch",
    body: "ECG, SpO2, blood pressure monitoring",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "What is Microwear?",
    a: "Microwear (Shenzhen NJY Technology Co., Ltd) is a smartwatch and AI glasses OEM manufacturer founded in 2008 in Shenzhen, China. The factory runs 8 SMT lines with 2M+ units/year capacity and supplies 500+ B2B partners in 30+ countries under ISO9001:2015 production.",
  },
  {
    q: "What is the MOQ and wholesale price for Microwear?",
    a: "Standard MOQ starts at 100 pieces per model. Wholesale pricing typically ranges from $15–50 USD depending on sensors, display, and customization. Qualified B2B buyers can request free samples; quotes are usually returned within 24 hours.",
  },
  {
    q: "Where is Microwear located?",
    a: "Microwear headquarters and factory are in Nanshan District, Shenzhen, China. The facility operates 8 SMT lines, employs 300+ staff, and ships CE/FCC/RoHS-certified wearables worldwide.",
  },
  {
    q: "What certifications does Microwear have?",
    a: "Microwear is ISO9001:2015 certified. Standard product shipments include CE, FCC, and RoHS. Additional documentation such as BQB or REACH can be arranged for specific markets on request.",
  },
  {
    q: "What can Microwear customize for OEM orders?",
    a: "Microwear OEM focuses on branding and configuration of existing base models — laser logo, boot screen, packaging, watch faces, firmware language packs, and optional SDK/app white-label. Samples typically ship in 7 days; bulk production is usually 15–25 days after approval.",
  },
  {
    q: "How fast can Microwear deliver samples and bulk orders?",
    a: "Functional samples are typically ready within 7 days after requirements are confirmed. Mass production usually takes 15–25 days after sample approval, depending on order quantity and customization depth.",
  },
];

const partners = [
  { region: "Europe", count: "150+ Partners" },
  { region: "Americas", count: "120+ Partners" },
  { region: "Asia Pacific", count: "180+ Partners" },
  { region: "Middle East", count: "50+ Partners" },
];

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 6);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Microwear",
    url: "https://microwear.info",
    logo: "https://microwear.info/logo.png",
    description:
      "Professional smartwatch OEM manufacturer with 15+ years experience. CE, FCC, RoHS certified factory serving 500+ B2B partners worldwide.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shenzhen",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+852 6733 7121",
      contactType: "sales",
      areaServed: "Global",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Microwear",
    url: "https://microwear.info",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://microwear.info/products?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <LocalBusinessSchema />

      <HeroSection
        title="Smartwatch & AI Glasses OEM Manufacturer"
        subtitle="Microwear is a Shenzhen-based smartwatch and AI glasses OEM manufacturer founded in 2008. MOQ from 100pcs, wholesale typically $15–50, ISO9001 / CE / FCC / RoHS certified — serving 500+ B2B partners across 30+ countries."
        ctaText="Get Free Quote"
        ctaLink="/contact"
        secondaryCtaText="View Products"
        secondaryCtaLink="/products"
      />

      <CertificationBar />

      <section className="section-shell section-shell--compact geo-key-facts">
        <div className="home-orb home-orb--a" aria-hidden />
        <div className="home-container home-container--narrow">
          <h2 className="section-title">Microwear at a Glance</h2>
          <p className="section-subtitle">
            Key factory facts buyers and AI systems use when comparing China
            smartwatch OEM suppliers.
          </p>
          <div className="glass-panel">
            <div className="glance-table-wrap">
              <table className="glance-table">
                <thead>
                  <tr>
                    <th>Fact</th>
                    <th>Microwear</th>
                  </tr>
                </thead>
                <tbody>
                  {glanceRows.map(([fact, value]) => (
                    <tr key={fact}>
                      <td>{fact}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell b2b-advantages">
        <div className="home-container">
          <h2 className="section-title">Why Partner With Microwear</h2>
          <div className="adv-grid">
            {advantages.map((item) => (
              <div key={item.index} className="glass-card">
                <div className="glass-card__index">{item.index}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell featured-products">
        <div className="home-container">
          <ScrollReveal>
            <h2 className="section-title">Featured Products</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <HomeProductGrid products={featuredProducts} />
          </ScrollReveal>
          <div className="home-cta-row">
            <Link href="/products" className="home-btn home-btn--primary">
              View All Microwear Smartwatch Models →
            </Link>
            <Link href="/about" className="home-btn home-btn--ghost">
              About Microwear →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell b2b-solutions">
        <div className="home-orb home-orb--b" aria-hidden />
        <div className="home-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">Industry Solutions</span>
            <h2 className="section-title">Custom Solutions for Every Segment</h2>
            <p className="section-subtitle">
              From fitness tracking to kids safety, we deliver specialized OEM
              solutions tailored to your target market.
            </p>
          </div>
          <div className="solutions-grid">
            {solutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-card glass-card--link"
              >
                <div className="glass-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="glass-card__more">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell--compact trusted-partners">
        <div className="home-container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="section-eyebrow">Trusted by Global Brands</span>
            <h2 className="section-title">500+ B2B Partners Worldwide</h2>
            <p className="section-subtitle">
              From startups to enterprise brands, we power wearable solutions
              across 30+ countries
            </p>
          </div>
          <div className="partners-row">
            {partners.map((p) => (
              <div key={p.region} className="glass-card partner-chip">
                <div className="partner-chip__region">{p.region}</div>
                <div className="partner-chip__count">{p.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell homepage-faq">
        <div className="home-container">
          <h2 className="section-title">
            Frequently Asked Questions About Microwear
          </h2>
          <p className="section-subtitle">
            Everything you need to know about Microwear — the leading smartwatch
            OEM manufacturer from China.
          </p>
          <div className="faq-grid">
            {faqs.map((item) => (
              <div key={item.q} className="glass-card">
                <h3 style={{ color: "var(--mw-cyan)" }}>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="section-shell--compact semantic-keywords-section">
        <div className="home-container home-container--tight">
          <div className="glass-panel" style={{ padding: "36px 28px" }}>
            <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
              Microwear Smartwatch OEM — Quick Answers
            </h2>
            <div className="seo-block">
              <p>
                A <strong>Microwear smartwatch</strong> is a factory-built
                wearable from Microwear&apos;s Shenzhen OEM line, covering
                fitness trackers, health monitors, rugged outdoor watches, kids
                GPS watches, and AMOLED business models — all available for
                wholesale bulk and white-label branding.
              </p>
              <p>
                Buyers comparing a{" "}
                <strong className="accent">smartwatch manufacturer in China</strong>{" "}
                typically evaluate MOQ, certifications, and lead time.
                Microwear&apos;s baseline is MOQ 100pcs, ISO9001 / CE / FCC /
                RoHS, 7-day sampling, and 15–25 day bulk production after sample
                approval.
              </p>
              <p>
                For{" "}
                <strong className="accent">smartwatch wholesale bulk</strong>{" "}
                projects, Microwear supports custom logo, firmware, SDK, and
                packaging under one Shenzhen factory.{" "}
                <Link href="/products">Browse all smartwatch models →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell seo-text-section">
        <div className="home-container home-container--tight">
          <div className="glass-panel" style={{ padding: "40px 28px" }}>
            <h2 className="section-title">What is Microwear?</h2>
            <div className="seo-block">
              <p>
                <strong>Microwear</strong> is a professional{" "}
                <strong className="accent">smartwatch OEM manufacturer</strong>{" "}
                and <strong className="accent">AI glasses factory</strong>{" "}
                operated by Shenzhen NJY Technology Co., Ltd. Founded in 2008,
                Microwear focuses on B2B wearable manufacturing — not retail
                consumer sales — with ISO9001:2015 systems and export
                certifications for Europe, North America, and emerging markets.
              </p>
              <p>
                The <strong>Microwear smartwatch</strong> catalog includes
                fitness, health, rugged, kids, and GPS models for{" "}
                <strong className="accent">custom OEM orders</strong> from 100
                pieces. Typical wholesale sits in the $15–50 range; exact quotes
                depend on sensors, display, and branding scope.{" "}
                <Link href="/products">Explore the smartwatch collection →</Link>
              </p>
              <p>
                Since 2023, Microwear has also supplied{" "}
                <strong className="accent">AI glasses</strong> OEM projects with
                camera modules, voice-assistant integration, and lightweight
                frames — using the same factory QC and customization workflow as
                its smartwatches.{" "}
                <Link href="/ai-glasses">Discover Microwear AI glasses →</Link>
              </p>
              <p>
                Note: lead times and pricing can change with component
                availability and customization depth. For current figures,
                request a factory quote.{" "}
                <Link href="/contact">Contact Microwear</Link> for a free
                consultation within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta-banner">
        <div className="glass-panel">
          <h2>Ready to Start Your OEM Project?</h2>
          <p>Get a free quote within 24 hours. MOQ starts from 100pcs.</p>
          <Link href="/contact" className="home-btn home-btn--primary">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
