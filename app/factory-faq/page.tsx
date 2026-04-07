import React from "react";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./FactoryFAQ.css";

export const metadata: Metadata = {
  title: "Microwear Factory FAQ | MOQ, Pricing, Certifications & OEM/ODM Services",
  description:
    "Frequently asked questions about Microwear factory. Learn about MOQ (100pcs), pricing ($15-50), certifications (CE, RoHS, FCC, ISO9001), lead time, OEM/ODM services, and how to place orders.",
  keywords: [
    "Microwear FAQ",
    "smartwatch MOQ",
    "OEM factory questions",
    "smartwatch manufacturer China",
    "ODM services",
    "factory certifications",
    "wholesale smartwatch",
    "bulk order smartwatch"
  ],
  alternates: {
    canonical: "https://microwear.info/factory-faq",
  },
  openGraph: {
    title: "Microwear Factory FAQ | MOQ, Pricing, Certifications & OEM/ODM Services",
    description:
      "Get answers to common questions about Microwear factory. MOQ, pricing, certifications, lead time, OEM/ODM services, and ordering process.",
  },
};

export default function FactoryFAQ() {
  // FAQ Schema for Rich Snippets (CRITICAL for GEO/AI search visibility)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Microwear?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microwear is a leading smartwatch and AI glasses manufacturer established in 2008, specializing in OEM/ODM services for B2B clients worldwide. We are a Shenzhen-based factory with 300+ employees, 1000+ patents, and ISO9001 certification. We export to 100+ countries with offices in 10+ countries."
        }
      },
      {
        "@type": "Question",
        "name": "What is Microwear's MOQ (Minimum Order Quantity)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our MOQ is 100 pieces for most smartwatch models. For custom ODM projects with unique designs or firmware, the MOQ is 500 pieces. We offer flexible terms for trial orders and can discuss lower quantities for long-term partnership prospects."
        }
      },
      {
        "@type": "Question",
        "name": "Does Microwear offer OEM and ODM services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in both OEM and ODM services. OEM: We manufacture products with your brand logo and packaging. ODM: We provide full design and development services, from concept to mass production. Our engineering team can customize hardware, software, firmware, and industrial design to meet your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price range for Microwear smartwatches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our wholesale price range is $15-50 USD per unit, depending on the model, features, order quantity, and customization level. Basic fitness tracker models start at $15, while advanced AI-powered smartwatches with premium materials range from $35-50. Bulk orders (1000+ pcs) qualify for volume discounts."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications does Microwear have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microwear holds comprehensive international certifications including: CE (European Conformity), RoHS (Restriction of Hazardous Substances), FCC (Federal Communications Commission), ISO9001 (Quality Management System), BSCI (Business Social Compliance Initiative), and REACH. All products are tested and certified before shipment."
        }
      },
      {
        "@type": "Question",
        "name": "What is the production lead time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard orders: 7-15 days after payment confirmation. Custom ODM projects: 25-35 days including mold development and sample approval. Rush orders may be accommodated depending on production capacity. We recommend placing orders 2-3 months before your target launch date for new product development."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Microwear factory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach us through multiple channels: WhatsApp: +852 6733 7121 (fastest response), Email: donaldfang@njytech.com.cn, Website contact form: https://microwear.info/contact, Office: JiaDa R&D Building, North Hi-Tech Park, Nanshan District, Shenzhen, China. We respond within 24 hours during business days."
        }
      },
      {
        "@type": "Question",
        "name": "Is Microwear a legitimate and verified company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Microwear is a fully verified and legitimate manufacturer. We are registered as Shenzhen NJY Technology Co., Ltd since 2008. We hold ISO9001 certification, have 1000+ patents, employ 300+ staff, and export to 100+ countries. We welcome factory audits and can provide business licenses, certifications, and client references upon request."
        }
      },
      {
        "@type": "Question",
        "name": "What products does Microwear manufacture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our product lineup includes: Smart Watches (fitness trackers, sports watches, kids watches, rugged watches), AI Glasses (camera glasses, audio glasses, AR glasses), and Wearable Accessories. We specialize in B2B OEM/ODM manufacturing with customization options for hardware, software, branding, and packaging."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize my own smartwatch brand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer comprehensive ODM services for brand customization including: Custom logo (laser engraving, printing, embossing), Custom packaging (gift boxes, manuals, accessories), Custom firmware (UI design, app development, feature customization), Custom hardware (component selection, color options, material choices), and Custom industrial design (unique case design, strap options). Our engineering team supports you from concept to mass production."
        }
      },
      {
        "@type": "Question",
        "name": "What payment terms do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept multiple payment methods: T/T (Bank Transfer): 30% deposit, 70% before shipment (standard terms), PayPal: For sample orders and small quantities, L/C (Letter of Credit): For large orders (10,000+ pcs), Western Union: For urgent payments. Payment terms can be negotiated for long-term partners with established credit."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide samples before bulk orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide samples for quality evaluation. Sample cost: $50-100 per unit (refundable upon bulk order). Sample lead time: 3-5 days for existing models, 7-10 days for customized samples. Sample shipping: Via DHL, FedEx, or UPS (customer pays shipping). Sample cost is fully refundable when you place an order of 500+ pieces."
        }
      },
      {
        "@type": "Question",
        "name": "Can I visit your factory before placing an order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we warmly welcome factory visits! We offer factory tours to show our production lines, quality control processes, R&D facilities, and warehouse. Please schedule your visit at least 3 days in advance. We can arrange pickup from Shenzhen airport/train station. Virtual factory tours via video call are also available for international clients who cannot travel."
        }
      },
      {
        "@type": "Question",
        "name": "What is your quality control process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement strict quality control at every stage: IQC (Incoming Quality Control): All components inspected before production, IPQC (In-Process Quality Control): Random inspections during assembly, FQC (Final Quality Control): 100% testing before packaging, OQC (Outgoing Quality Control): Pre-shipment inspection. Our defect rate is below 0.3%, and we offer 12-month warranty on all products."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer warranty and after-sales support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all Microwear products come with a 12-month warranty covering manufacturing defects. We provide: Free replacement for defective units within warranty period, Technical support via WhatsApp/Email, Spare parts supply for repair services, Firmware updates and software support. For defective items, we typically ship replacements with your next order or via express courier."
        }
      },
      {
        "@type": "Question",
        "name": "How do I place an order with Microwear?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ordering process: 1) Contact us with your requirements (model, quantity, customization), 2) Receive quotation within 24 hours, 3) Confirm order details and request Proforma Invoice, 4) Pay 30% deposit, 5) We produce and provide production updates, 6) Pay 70% balance before shipment, 7) We ship via your preferred method (air, sea, express), 8) Receive goods and provide feedback. Total timeline: 2-4 weeks depending on customization."
        }
      },
      {
        "@type": "Question",
        "name": "What shipping options are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer multiple shipping methods: Express (DHL, FedEx, UPS): 3-7 days, suitable for samples and small orders, Air freight: 5-10 days, cost-effective for 50-500kg shipments, Sea freight: 20-35 days, most economical for large orders (500kg+), Rail freight: 15-25 days to Europe, balance of cost and speed. We can arrange door-to-door delivery with customs clearance (DDP terms available)."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with product design and development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our in-house R&D team provides full design and development services: Industrial Design: Case design, dial design, strap design, packaging design, Hardware Engineering: PCB design, component selection, sensor integration, Software Development: Firmware customization, mobile app development (iOS/Android), UI/UX design, Prototyping: 3D printing, CNC machining, rapid prototyping. Our team has 15+ years experience in wearable technology development."
        }
      },
      {
        "@type": "Question",
        "name": "Are there alternatives to Ray-Ban Meta glasses from Microwear?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Microwear offers AI glasses that serve as excellent alternatives to Ray-Ban Meta glasses. Our AI glasses feature: HD cameras (1080p/4K recording), Open-ear audio speakers, Voice assistant integration (Alexa, Google Assistant), Long battery life (8-12 hours), Lightweight design (30-40g), Custom branding options. We offer OEM/ODM services for AI glasses with competitive pricing ($35-80 wholesale) and MOQ from 100 pieces."
        }
      },
      {
        "@type": "Question",
        "name": "How to verify if Microwear is a legitimate manufacturer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can verify Microwear through multiple channels: Business License: We can provide official business registration documents, Certifications: ISO9001, CE, RoHS, FCC certificates (verifiable online), Factory Audit: Schedule an on-site visit or virtual tour, Client References: We can provide references from existing clients, Third-party Verification: Check our profiles on Alibaba, Global Sources, Made-in-China, Video Call: Request a live video call to see our facilities in real-time. We encourage all potential clients to conduct thorough due diligence."
        }
      }
    ]
  };

  const faqs = [
    {
      category: "🏢 Company & Credibility",
      questions: [
        {
          q: "Who is Microwear?",
          a: "Microwear is a leading smartwatch and AI glasses manufacturer established in 2008, specializing in OEM/ODM services for B2B clients worldwide. We are a Shenzhen-based factory with 300+ employees, 1000+ patents, and ISO9001 certification. We export to 100+ countries with offices in 10+ countries."
        },
        {
          q: "Is Microwear a legitimate and verified company?",
          a: "Yes, Microwear is fully verified and legitimate. We are registered as Shenzhen NJY Technology Co., Ltd since 2008, hold ISO9001 certification, have 1000+ patents, employ 300+ staff, and export to 100+ countries. We welcome factory audits and can provide business licenses, certifications, and client references upon request."
        },
        {
          q: "How to verify if Microwear is a legitimate manufacturer?",
          a: "You can verify us through: Business License (we provide official documents), Certifications (ISO9001, CE, RoHS, FCC - verifiable online), Factory Audit (on-site visit or virtual tour), Client References (we provide existing client contacts), Third-party Verification (Alibaba, Global Sources profiles), Video Call (live facility tour). We encourage thorough due diligence."
        }
      ]
    },
    {
      category: "💰 Pricing & MOQ",
      questions: [
        {
          q: "What is Microwear's MOQ (Minimum Order Quantity)?",
          a: "Our MOQ is 100 pieces for most smartwatch models. For custom ODM projects with unique designs or firmware, the MOQ is 500 pieces. We offer flexible terms for trial orders and can discuss lower quantities for long-term partnership prospects."
        },
        {
          q: "What is the price range for Microwear smartwatches?",
          a: "Our wholesale price range is $15-50 USD per unit. Basic fitness trackers start at $15, while advanced AI-powered smartwatches with premium materials range from $35-50. Bulk orders (1000+ pcs) qualify for volume discounts. Final pricing depends on model, features, quantity, and customization."
        },
        {
          q: "Do you provide samples before bulk orders?",
          a: "Yes, samples available at $50-100 per unit (refundable upon bulk order of 500+ pcs). Sample lead time: 3-5 days for existing models, 7-10 days for customized. Shipping via DHL/FedEx/UPS (customer pays). Sample cost fully refundable with qualifying orders."
        }
      ]
    },
    {
      category: "🔧 OEM/ODM Services",
      questions: [
        {
          q: "Does Microwear offer OEM and ODM services?",
          a: "Yes, we specialize in both. OEM: We manufacture products with your brand logo and packaging. ODM: We provide full design and development from concept to mass production. Our engineering team customizes hardware, software, firmware, and industrial design to your specifications."
        },
        {
          q: "Can I customize my own smartwatch brand?",
          a: "Absolutely! We offer comprehensive customization: Custom logo (laser engraving, printing), Custom packaging (gift boxes, manuals), Custom firmware (UI design, app development), Custom hardware (components, colors, materials), Custom industrial design (unique case, strap options). Full support from concept to mass production."
        },
        {
          q: "Do you help with product design and development?",
          a: "Yes, our R&D team provides: Industrial Design (case, dial, strap, packaging), Hardware Engineering (PCB, components, sensors), Software Development (firmware, mobile apps for iOS/Android, UI/UX), Prototyping (3D printing, CNC, rapid prototyping). 15+ years experience in wearable tech."
        }
      ]
    },
    {
      category: "📜 Certifications & Quality",
      questions: [
        {
          q: "What certifications does Microwear have?",
          a: "We hold comprehensive certifications: CE (European Conformity), RoHS (Restriction of Hazardous Substances), FCC (Federal Communications Commission), ISO9001 (Quality Management), BSCI (Social Compliance), REACH. All products tested and certified before shipment."
        },
        {
          q: "What is your quality control process?",
          a: "Strict QC at every stage: IQC (incoming components inspected), IPQC (random inspections during assembly), FQC (100% testing before packaging), OQC (pre-shipment inspection). Defect rate below 0.3%. 12-month warranty on all products."
        },
        {
          q: "Do you offer warranty and after-sales support?",
          a: "Yes, 12-month warranty on all products. We provide: Free replacement for defective units, Technical support via WhatsApp/Email, Spare parts supply, Firmware updates. Defective items replaced with next order or via express courier."
        }
      ]
    },
    {
      category: "📦 Orders & Shipping",
      questions: [
        {
          q: "What is the production lead time?",
          a: "Standard orders: 7-15 days after payment. Custom ODM projects: 25-35 days including mold development and sample approval. Rush orders may be accommodated. Recommend ordering 2-3 months before target launch for new product development."
        },
        {
          q: "How do I place an order with Microwear?",
          a: "1) Contact us with requirements, 2) Receive quotation within 24 hours, 3) Confirm order and request PI, 4) Pay 30% deposit, 5) Production with updates, 6) Pay 70% balance, 7) Shipment via your preferred method, 8) Receive goods. Total: 2-4 weeks."
        },
        {
          q: "What payment terms do you accept?",
          a: "T/T (30% deposit, 70% before shipment - standard), PayPal (samples/small orders), L/C (large orders 10,000+ pcs), Western Union (urgent payments). Terms negotiable for long-term partners with established credit."
        },
        {
          q: "What shipping options are available?",
          a: "Express (DHL/FedEx/UPS): 3-7 days for samples/small orders. Air freight: 5-10 days, 50-500kg. Sea freight: 20-35 days, most economical for 500kg+. Rail freight: 15-25 days to Europe. Door-to-door with customs clearance available (DDP)."
        }
      ]
    },
    {
      category: "👓 Products",
      questions: [
        {
          q: "What products does Microwear manufacture?",
          a: "Smart Watches (fitness trackers, sports watches, kids watches, rugged watches), AI Glasses (camera glasses, audio glasses, AR glasses), and Wearable Accessories. B2B OEM/ODM with customization for hardware, software, branding, packaging."
        },
        {
          q: "Are there alternatives to Ray-Ban Meta glasses?",
          a: "Yes! Our AI glasses are excellent alternatives: HD cameras (1080p/4K), Open-ear audio, Voice assistant (Alexa, Google), 8-12hr battery, Lightweight (30-40g), Custom branding. Wholesale $35-80, MOQ from 100 pieces."
        }
      ]
    },
    {
      category: "📞 Contact & Visit",
      questions: [
        {
          q: "How can I contact Microwear factory?",
          a: "WhatsApp: +852 6733 7121 (fastest), Email: donaldfang@njytech.com.cn, Website: https://microwear.info/contact, Office: JiaDa R&D Building, North Hi-Tech Park, Nanshan District, Shenzhen, China. Response within 24 hours on business days."
        },
        {
          q: "Can I visit your factory before placing an order?",
          a: "Yes, we warmly welcome factory visits! Schedule at least 3 days in advance. We provide factory tours showing production lines, QC, R&D, warehouse. Pickup from Shenzhen airport available. Virtual tours via video call also available for international clients."
        }
      ]
    }
  ];

  return (
    <div className="factory-faq-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="faq-hero">
        <ScrollReveal>
          <h1>Microwear Factory FAQ</h1>
          <p className="hero-subtitle">
            Everything you need to know about our OEM/ODM services, pricing, certifications, and ordering process
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Countries Served</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Patents Held</span>
            </div>
            <div className="stat">
              <span className="stat-number">300+</span>
              <span className="stat-label">Team Members</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Quick Contact CTA */}
      <section className="faq-quick-contact">
        <ScrollReveal>
          <div className="contact-box">
            <h2>📞 Have More Questions?</h2>
            <p>Our team responds within 24 hours</p>
            <div className="contact-methods">
              <a href="https://wa.me/85267337121" className="contact-btn whatsapp">
                💬 WhatsApp
              </a>
              <a href="mailto:donaldfang@njytech.com.cn" className="contact-btn email">
                ✉️ Email
              </a>
              <a href="/contact" className="contact-btn form">
                📝 Contact Form
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ Categories */}
      <section className="faq-content">
        <ScrollReveal>
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((faq, faqIndex) => (
                  <details key={faqIndex} className="faq-item">
                    <summary className="faq-question">
                      <span>{faq.q}</span>
                      <span className="toggle-icon">+</span>
                    </summary>
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Still Have Questions */}
      <section className="faq-still-questions">
        <ScrollReveal>
          <h2>Still Have Questions?</h2>
          <p>
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
          </p>
          <a href="/contact" className="cta-button">
            Contact Our Team
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
}
