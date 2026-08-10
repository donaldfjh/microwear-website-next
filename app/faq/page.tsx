import React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { QA } from "@/components/QA";
import { BreadcrumbSchema } from "@/components/SEO/BreadcrumbSchema";
import type { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title: "FAQ | Smartwatch OEM Questions Answered | Microwear",
  description:
    "Find answers to common B2B questions about smartwatch OEM manufacturing. MOQ, pricing, certifications, delivery time, customization options, and OEM process explained. Get expert guidance for your wearable project.",
  keywords: [
    "smartwatch OEM FAQ",
    "smartwatch MOQ",
    "smartwatch wholesale pricing",
    "OEM smartwatch process",
    "smartwatch certifications",
    "custom smartwatch questions",
    "bulk order FAQ",
    "wearable manufacturing FAQ"
  ],
  alternates: {
    canonical: "https://microwear.info/faq",
  },
  openGraph: {
    title: "FAQ | Smartwatch OEM Questions Answered | Microwear",
    description:
      "Answers to common B2B questions about smartwatch OEM manufacturing. MOQ, pricing, certifications, and delivery explained.",
    type: "website",
  },
};

export default function FAQPage() {
  const faqItems = [
    {
      id: 1,
      question: "What is the Minimum Order Quantity (MOQ) for OEM smartwatches?",
      answer:
        "Our standard MOQ is 200 pieces per model for OEM smartwatch and AI glasses orders. Contact our sales team to discuss your specific requirements and volume needs. Sample orders are available for product evaluation."
    },
    {
      id: 2,
      question: "What is the pricing range for bulk smartwatch orders?",
      answer:
        "Unit pricing depends on model, customization level, and order volume. We do not publish fixed wholesale tiers — contact us for a factory quote tailored to your specs. Volume discounts are available for larger orders. Custom firmware, packaging, and branding may affect final pricing. Submit your requirements through our contact form for a detailed quote."
    },
    {
      id: 3,
      question: "What certifications do Microwear smartwatches have?",
      answer:
        "All Microwear products are fully certified for global markets:\n\n• ISO 9001:2015 - Quality Management System\n• CE - European Conformity\n• FCC - US Federal Communications Commission\n• RoHS - Restriction of Hazardous Substances\n• UKCA - UK Conformity Assessed (Post-Brexit)\n• BSCI - Business Social Compliance Initiative\n• CCC - China Compulsory Certification\n\nAdditional certifications (BQB Bluetooth, REACH, FDA documentation support) available upon request. We assist with regulatory compliance documentation for your target markets."
    },
    {
      id: 4,
      question: "What is the typical delivery time for bulk orders?",
      answer:
        "Production and delivery timelines:\n\n• Sample production: 7-10 working days\n• Standard OEM orders (200-1000 pcs): 15-25 working days\n• Large volume orders (1000+ pcs): 20-30 working days\n• Express production: 10-15 working days (+15% surcharge)\n\nDelivery time starts after sample approval and deposit confirmation. We provide real-time production updates and photos throughout the manufacturing process. Shipping methods: DHL/FedEx express (3-5 days), air freight (7-10 days), sea freight (25-40 days)."
    },
    {
      id: 5,
      question: "What is the OEM customization process?",
      answer:
        "Our streamlined OEM process includes 5 stages:\n\n1️⃣ Requirement Analysis - Share your specifications, target market, and customization needs. Engineering team evaluates feasibility and provides technical recommendations within 24 hours.\n\n2️⃣ Design & Engineering - R&D team creates 3D designs, selects components, develops custom firmware. Receive detailed renderings and specs for approval.\n\n3️⃣ Prototyping & Sampling - Functional prototypes within 7 days. Test and refine based on your feedback. Sample approval before mass production.\n\n4️⃣ Mass Production - Automated SMT lines, real-time QC monitoring, batch testing. Production photos and updates shared throughout.\n\n5️⃣ Quality Inspection & Delivery - 100% final QC, certification docs, secure packaging, global shipping. After-sales support included."
    },
    {
      id: 6,
      question: "Can I customize the smartwatch firmware and app?",
      answer:
        "Yes, full firmware and app customization is available:\n\n• Custom UI/UX design and boot animations\n• Feature activation/deactivation (health sensors, GPS, etc.)\n• Multi-language support (15+ languages)\n• White-label mobile app development\n• SDK documentation for third-party integration\n• OTA update configuration\n• Custom AI assistant integration (ChatGPT, local models)\n\nOur firmware team works closely with you to implement your unique features. App development typically takes 2-4 weeks for basic customization."
    },
    {
      id: 7,
      question: "Do you provide free samples?",
      answer:
        "Yes! We offer free samples for qualified B2B buyers:\n\n• 1-2 sample units available at no product cost\n• You only cover shipping (via DHL/FedEx)\n• Sample fee fully refunded when you place a bulk order (MOQ 200+ pcs)\n• Sample production time: 7-10 working days\n\nRequest samples through our contact page. We evaluate your business profile (company website, purchase intent) before shipping. Samples help you verify quality, features, and customization options before committing to bulk orders."
    },
    {
      id: 8,
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple secure payment methods for B2B transactions:\n\n• T/T (Bank Transfer) - Standard method, 30% deposit + 70% before shipment\n• PayPal - For sample orders and small transactions (under $5,000)\n• L/C (Letter of Credit) - For large orders ($50,000+), requires bank verification\n• Western Union - For urgent sample orders\n• Trade Assurance via Alibaba - Full buyer protection available\n\nPayment terms negotiable for long-term partnerships. First-time buyers: 50% deposit recommended. Established partners: monthly settlement available after 3 successful orders."
    },
    {
      id: 9,
      question: "What is your warranty and after-sales policy?",
      answer:
        "Comprehensive warranty and after-sales support:\n\n• 12-month warranty on all products (defects, manufacturing issues)\n• Free replacement for defective units (1% spare parts included in bulk orders)\n• Technical support via email, WhatsApp, video call\n• Remote firmware updates and bug fixes\n• Repair guidance and spare parts supply\n\nFor OEM partners, we provide:\n• Technical documentation and training\n• Firmware update support for 24 months\n• Spare parts inventory management\n• Priority support channel (direct engineer contact)"
    },
    {
      id: 10,
      question: "Can you manufacture custom smartwatch designs?",
      answer:
        "Absolutely! We specialize in custom OEM smartwatch manufacturing:\n\n• Custom case design, shape, and dimensions\n• Unique strap materials and colors\n• Custom sensor configurations (ECG, SpO2, GPS, NFC)\n• Display selection (AMOLED, LCD, round/square)\n• Brand-specific boot animations and UI\n• Custom packaging and accessories\n\nCustom design projects require:\n• 3D models or concept drawings\n• Minimum MOQ 200 pieces for fully custom designs\n• 4-6 weeks development time\n• NDA available for confidential designs\n\nOur engineering team has 300+ patents and can transform your concept into reality."
    },
    {
      id: 11,
      question: "How do I start an OEM partnership with Microwear?",
      answer:
        "Starting your OEM partnership is straightforward:\n\n1. Submit inquiry via contact form or WhatsApp (+852 6733 7121)\n2. Share your requirements (model preferences, customization, target market, volume)\n3. Receive preliminary quote within 24 hours\n4. Request samples for product evaluation\n5. Approve samples and finalize customization specs\n6. Confirm order details, pricing, and timeline\n7. Sign OEM agreement (optional NDA)\n8. Submit deposit to initiate production\n9. Receive production updates and QC photos\n10. Final payment and shipment\n\nOur team guides you through each step. No technical expertise required - we handle all engineering and manufacturing details."
    },
    {
      id: 12,
      question: "What makes Microwear different from other smartwatch manufacturers?",
      answer:
        "Microwear stands out in 5 key areas:\n\n🏭 Production Capacity: 15,000㎡ factory, 200+ employees, 8 SMT lines, 2M+ units/year\n\n✅ Quality Assurance: <0.3% defect rate, ISO9001 certified, 100% QC inspection\n\n🔧 Customization Depth: Full OEM from design to firmware, 300+ patents, custom AI integration\n\n🚚 Speed: 7-day samples, 15-day bulk production, real-time updates\n\n🤝 Partnership Focus: Dedicated account managers, flexible MOQ, volume discounts, long-term support\n\n15+ years experience serving 500+ B2B partners across 30+ countries. We don't just manufacture - we build your wearable brand together."
    }
  ];

  return (
    <div className="faq-page">
      {/* SEO: Structured Data — the FAQPage node is emitted once by <QA> below */}
      <BreadcrumbSchema items={[{ name: "FAQ", url: "/faq" }]} />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '120px 24px 80px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <span style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(14, 165, 233, 0.3)',
              borderRadius: '100px',
              color: '#0ea5e9',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '20px'
            }}>
              B2B KNOWLEDGE BASE
            </span>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '24px'
            }}>
              Frequently Asked Questions
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              lineHeight: '1.7'
            }}>
              Everything you need to know about OEM smartwatch manufacturing. 
              From MOQ to customization, pricing to delivery - get expert answers here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section style={{
        padding: '60px 24px',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            <ScrollReveal delay={0.1}>
              <div style={{
                padding: '32px',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--mw-shadow-soft)',
                borderRadius: '16px',
                textAlign: 'center',}}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#0ea5e9', marginBottom: '8px' }}>
                  200 pcs
                </div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  Minimum Order
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{
                padding: '32px',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--mw-shadow-soft)',
                borderRadius: '16px',
                textAlign: 'center',}}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#0ea5e9', marginBottom: '8px' }}>
                  Quote
                </div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  Factory Quote
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div style={{
                padding: '32px',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--mw-shadow-soft)',
                borderRadius: '16px',
                textAlign: 'center',}}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#0ea5e9', marginBottom: '8px' }}>
                  15-25
                </div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  Days Delivery
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div style={{
                padding: '32px',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--mw-shadow-soft)',
                borderRadius: '16px',
                textAlign: 'center',}}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#0ea5e9', marginBottom: '8px' }}>
                  7+
                </div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  Certifications
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Categories Navigation */}
      <section style={{
        padding: '40px 24px',
        backgroundColor: 'transparent'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <p style={{
              fontSize: '16px',
              color: '#64748b',
              marginBottom: '24px'
            }}>
              Quick navigation to key topics:
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              {[
                { name: 'MOQ & Pricing', icon: '💰' },
                { name: 'Certifications', icon: '📜' },
                { name: 'Delivery Time', icon: '🚚' },
                { name: 'OEM Process', icon: '🔧' },
                { name: 'Customization', icon: '🎨' },
                { name: 'Samples', icon: '📦' }
              ].map((cat, idx) => (
                <span key={idx} style={{
                  padding: '8px 16px',
                  background: '#f1f5f9',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  {cat.icon} {cat.name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <QA
            items={faqItems}
            title="B2B FAQ"
            subtitle="Comprehensive answers to smartwatch OEM manufacturing questions"
            schemaId="https://microwear.info/faq#faq"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px'
            }}>
              Still Have Questions?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '32px',
              lineHeight: '1.7'
            }}>
              Our team is ready to answer your specific questions about OEM manufacturing, 
              customization options, and partnership opportunities.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <Link 
                href="/contact" 
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--mw-shadow-soft)',
                  color: '#0ea5e9',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '16px'
                }}
              >
                Contact Us
              </Link>
              <Link 
                href="/oem-services" 
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '16px',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                OEM Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Resources Section */}
      <section style={{
        padding: '60px 24px',
        backgroundColor: '#0f172a'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              Related Resources
            </h3>
          </ScrollReveal>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            <ScrollReveal delay={0.1}>
              <Link href="/factory" style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                display: 'block'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🏭</div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                  Factory Tour
                </h4>
                <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                  Explore our 15,000㎡ manufacturing facility
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link href="/products" style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                display: 'block'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>📱</div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                  Product Catalog
                </h4>
                <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                  Browse 20+ smartwatch models
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link href="/about" style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                display: 'block'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>📖</div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                  About Us
                </h4>
                <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                  15+ years OEM expertise
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}