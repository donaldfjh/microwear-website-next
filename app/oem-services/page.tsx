import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./OEMServices.css";

export const metadata: Metadata = {
  title: "OEM Services | Custom Smartwatch & AI Glasses Manufacturing | Microwear",
  description:
    "Microwear OEM services for smartwatches and AI glasses — custom logo, firmware, packaging, and catalog options. ISO9001 certified factory, MOQ 100pcs, 7-day sampling, 15-25 day production. CE, FCC, RoHS certified. Get free quote for custom wearable projects.",
  keywords: [
    "smartwatch OEM services",
    "AI glasses OEM manufacturer",
    "custom smartwatch manufacturer",
    "white label smartwatch",
    "custom logo smartwatch",
    "smartwatch private label",
    "OEM wearable manufacturer",
    "custom firmware smartwatch",
    "smartwatch customization",
    "bulk smartwatch orders",
    "telephone glasses OEM",
    "camera glasses manufacturer",
    "smartwatch wholesale China",
    "AI glasses OEM"
  ],
  alternates: {
    canonical: "https://microwear.info/oem-services",
  },
  openGraph: {
    title: "OEM Services | Smartwatch & AI Glasses Custom Manufacturing | Microwear",
    description:
      "Full-service OEM smartwatch and AI glasses manufacturing from Microwear. Custom logo, firmware, packaging. ISO9001 certified, MOQ 100pcs, fast sampling.",
    url: "https://microwear.info/oem-services",
    type: "website",
  },
};

export default function OEMServicesPage() {
  const oemProcess = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Share your product requirements, target market, and customization needs. Our engineering team evaluates feasibility and provides technical recommendations.",
      icon: "📋"
    },
    {
      step: "02",
      title: "Design & Engineering",
      description: "Our R&D team creates detailed designs, selects components, and develops custom firmware. 3D renderings and technical specifications provided for approval.",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Prototyping & Sampling",
      description: "Functional prototypes built within 7 days. Testing and refinement based on your feedback. Sample approval before mass production.",
      icon: "🔧"
    },
    {
      step: "04",
      title: "Mass Production",
      description: "Full-scale manufacturing on automated production lines. Real-time production updates, in-process QC, and batch testing throughout.",
      icon: "🏭"
    },
    {
      step: "05",
      title: "Quality Inspection & Delivery",
      description: "100% final QC inspection, certification documentation, secure packaging, and global shipping. After-sales support included.",
      icon: "✅"
    }
  ];

  const customizationOptions = [
    {
      category: "Logo & Branding",
      options: [
        "Laser engraving on device back",
        "Custom boot logo animation",
        "Branded watch faces",
        "Custom packaging design",
        "User manual & documentation"
      ],
      icon: "🏷️"
    },
    {
      category: "Firmware & Software",
      options: [
        "Custom UI/UX design",
        "Feature customization",
        "Multi-language support",
        "SDK for app integration",
        "OTA update configuration"
      ],
      icon: "💻"
    },
    {
      category: "Hardware Modifications",
      options: [
        "Sensor selection (ECG, SpO2, etc.)",
        "Display customization",
        "Battery capacity options",
        "Strap material & color",
        "Waterproof rating adjustments"
      ],
      icon: "⚙️"
    },
    {
      category: "Packaging & Accessories",
      options: [
        "Custom box design & printing",
        "Charging cable branding",
        "Instruction manual languages",
        "Protective films & cases",
        "Retail-ready packaging"
      ],
      icon: "📦"
    },
    {
      category: "APP & Cloud Services",
      options: [
        "White-label mobile app",
        "Custom app features",
        "Cloud data platform",
        "API integration",
        "Server deployment options"
      ],
      icon: "📱"
    }
  ];

  return (
    <div className="oem-services-page site-page">
      {/* Hero Section */}
      <section className="oem-hero" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '120px 24px 80px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              OEM Smartwatch & AI Glasses Manufacturing
            </h1>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              color: 'var(--mw-muted)',
              marginBottom: '24px'
            }}>
              Microwear OEM service is factory branding and configuration of base smartwatch and AI glasses models
              from Shenzhen NJY Technology: custom logo, firmware, packaging, and catalog options with MOQ from 100pcs,
              7-day sampling, and 15–25 day bulk production after sample approval.
            </p>
            <p style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: 'var(--mw-muted)',
              marginBottom: '40px',
              maxWidth: '760px',
              margin: '0 auto 40px'
            }}>
              ISO9001:2015 factory · CE / FCC / RoHS · wholesale typically $15–50 · 8 SMT lines, 2M+ units/year
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
                  padding: '16px 32px',
                  background: 'linear-gradient(180deg,#7ef0dc,#5eead4 50%,#2dd4bf)',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
              >
                Get Free Quote
              </Link>
              <Link 
                href="/products" 
                style={{
                  padding: '16px 32px',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                View Base Models
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GEO: OEM customization scope table */}
      <section style={{
        padding: '72px 24px',
        backgroundColor: 'transparent'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '12px',
              color: 'var(--mw-text)'
            }}>
              What Microwear OEM Includes
            </h2>
            <p style={{
              fontSize: '16px',
              textAlign: 'center',
              color: 'var(--mw-muted)',
              marginBottom: '32px',
              lineHeight: '1.7'
            }}>
              Microwear focuses on OEM branding and configuration of proven base models for B2B partners.
            </p>
          </ScrollReveal>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '15px',
              background: 'linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <thead>
                <tr style={{ background: '#0f172a', color: 'white' }}>
                  <th style={{ textAlign: 'left', padding: '14px 16px' }}>Area</th>
                  <th style={{ textAlign: 'left', padding: '14px 16px' }}>OEM scope</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Branding', 'Laser logo, boot animation, watch faces, packaging, manuals'],
                  ['Firmware', 'Language packs, feature toggles, UI skinning on base models'],
                  ['App / SDK', 'Optional white-label app and SDK integration'],
                  ['Hardware', 'Strap color/material and selected catalog options — not new PCB/ID from scratch'],
                  ['MOQ', 'From 100 pcs per model'],
                  ['Sample lead time', 'About 7 days after requirements are confirmed'],
                  ['Bulk lead time', '15–25 days after sample approval'],
                  ['Wholesale price', 'Typically $15–50 USD depending on model and options'],
                ].map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--mw-text)', borderTop: '1px solid #e2e8f0', width: '28%' }}>{row[0]}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--mw-muted)', borderTop: '1px solid #e2e8f0' }}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OEM Process Section */}
      <section style={{
        padding: '100px 24px',
        backgroundColor: 'transparent'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '16px',
              color: 'var(--mw-text)'
            }}>
              OEM Service Process
            </h2>
            <p style={{
              fontSize: '18px',
              textAlign: 'center',
              color: 'var(--mw-muted)',
              marginBottom: '64px',
              maxWidth: '700px',
              margin: '0 auto 64px'
            }}>
              From initial consultation to final delivery, our streamlined process 
              ensures your custom smartwatch project stays on track and on budget.
            </p>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {oemProcess.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div style={{
                  padding: '32px',
                  background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))',
                  borderRadius: '16px',
                  boxShadow: 'var(--mw-shadow-soft)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontSize: '64px',
                    fontWeight: '700',
                    color: '#f1f5f9',
                    lineHeight: '1'
                  }}>
                    {item.step}
                  </div>
                  <div style={{ fontSize: '42px', marginBottom: '20px' }}>{item.icon}</div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    color: 'var(--mw-text)'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: 'var(--mw-muted)'
                  }}>
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options Section */}
      <section style={{
        padding: '100px 24px',
        backgroundColor: 'transparent'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '16px',
              color: 'var(--mw-text)'
            }}>
              Customization Options
            </h2>
            <p style={{
              fontSize: '18px',
              textAlign: 'center',
              color: 'var(--mw-muted)',
              marginBottom: '64px',
              maxWidth: '700px',
              margin: '0 auto 64px'
            }}>
              Every aspect of your smartwatch can be customized to match your brand 
              identity and market requirements.
            </p>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {customizationOptions.map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div style={{
                  padding: '32px',
                  background: 'linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{category.icon}</div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '20px',
                    color: 'var(--mw-text)'
                  }}>
                    {category.category}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {category.options.map((option, idx) => (
                      <li key={idx} style={{
                        padding: '8px 0',
                        fontSize: '15px',
                        color: 'var(--mw-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <span style={{ color: 'var(--mw-cyan)' }}>✓</span>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ & Lead Time Section */}
      <section style={{
        padding: '100px 24px',
        backgroundColor: '#0f172a',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '16px'
            }}>
              MOQ & Lead Time
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--mw-muted)',
              marginBottom: '48px'
            }}>
              Flexible order quantities and fast turnaround for your business needs
            </p>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}>
            <ScrollReveal delay={0.1}>
              <div style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ fontSize: '48px', fontWeight: '700', color: 'var(--mw-cyan)', marginBottom: '8px' }}>
                  100 pcs
                </div>
                <div style={{ fontSize: '16px', color: 'var(--mw-muted)' }}>
                  Standard MOQ
                </div>
                <p style={{ fontSize: '14px', color: 'var(--mw-muted)', marginTop: '12px' }}>
                  Per model for OEM orders. Lower quantities available for trial orders.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ fontSize: '48px', fontWeight: '700', color: 'var(--mw-cyan)', marginBottom: '8px' }}>
                  7 Days
                </div>
                <div style={{ fontSize: '16px', color: 'var(--mw-muted)' }}>
                  Sample Lead Time
                </div>
                <p style={{ fontSize: '14px', color: 'var(--mw-muted)', marginTop: '12px' }}>
                  Functional prototypes ready within 7 days of requirement confirmation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ fontSize: '48px', fontWeight: '700', color: 'var(--mw-cyan)', marginBottom: '8px' }}>
                  15-25 Days
                </div>
                <div style={{ fontSize: '16px', color: 'var(--mw-muted)' }}>
                  Mass Production
                </div>
                <p style={{ fontSize: '14px', color: 'var(--mw-muted)', marginTop: '12px' }}>
                  Production time after sample approval. Varies by order quantity and customization.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div style={{
              padding: '32px',
              background: 'rgba(59,130,246,0.1)',
              borderRadius: '16px',
              border: '1px solid rgba(59,130,246,0.2)'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
                📦 Volume Discounts Available
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--mw-muted)', lineHeight: '1.7' }}>
                Orders above 1,000 units qualify for tiered pricing. Contact our sales team for 
                custom quotes based on your specific requirements and annual volume commitments.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Success Cases Section */}
      <section style={{
        padding: '100px 24px',
        backgroundColor: 'transparent'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '16px',
              color: 'var(--mw-text)'
            }}>
              Success Cases
            </h2>
            <p style={{
              fontSize: '18px',
              textAlign: 'center',
              color: 'var(--mw-muted)',
              marginBottom: '64px'
            }}>
              Real projects delivered for our B2B partners worldwide
            </p>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            <ScrollReveal delay={0.1}>
              <div style={{
                padding: '32px',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))',
                borderRadius: '16px',
                boxShadow: 'var(--mw-shadow-soft)'
              }}>
                <div style={{ fontSize: '14px', color: 'var(--mw-cyan)', fontWeight: '600', marginBottom: '12px' }}>
                  🇩🇪 German Electronics Distributor
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'var(--mw-text)' }}>
                  Custom Fitness Smartwatch Line
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--mw-muted)', lineHeight: '1.7', marginBottom: '16px' }}>
                  Developed a white-label fitness smartwatch with custom German UI, health sensors, 
                  and EU-compliant packaging. 5,000 units ordered in first batch.
                </p>
                <div style={{ fontSize: '14px', color: 'var(--mw-muted)' }}>
                  <strong>Customization:</strong> Logo, firmware, packaging, sensors
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{
                padding: '32px',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))',
                borderRadius: '16px',
                boxShadow: 'var(--mw-shadow-soft)'
              }}>
                <div style={{ fontSize: '14px', color: 'var(--mw-cyan)', fontWeight: '600', marginBottom: '12px' }}>
                  🇺🇸 US Health Tech Startup
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'var(--mw-text)' }}>
                  ECG Smartwatch with Custom App
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--mw-muted)', lineHeight: '1.7', marginBottom: '16px' }}>
                  Full OEM solution including ECG sensor integration, custom mobile app development, 
                  and FDA documentation support. Now their flagship product.
                </p>
                <div style={{ fontSize: '14px', color: 'var(--mw-muted)' }}>
                  <strong>Customization:</strong> Hardware, app, cloud platform
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div style={{
                padding: '32px',
                background: 'linear-gradient(165deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))',
                borderRadius: '16px',
                boxShadow: 'var(--mw-shadow-soft)'
              }}>
                <div style={{ fontSize: '14px', color: 'var(--mw-cyan)', fontWeight: '600', marginBottom: '12px' }}>
                  🇦🇪 UAE Trading Company
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'var(--mw-text)' }}>
                  Multi-Brand Smartwatch Portfolio
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--mw-muted)', lineHeight: '1.7', marginBottom: '16px' }}>
                  Ongoing partnership supplying 3 different smartwatch models with unique branding 
                  for different market segments. 20,000+ units annually.
                </p>
                <div style={{ fontSize: '14px', color: 'var(--mw-muted)' }}>
                  <strong>Customization:</strong> Multiple SKUs, branding, packaging
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* GEO FAQ + Schema */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#0f172a',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '12px'
          }}>
            OEM FAQ
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--mw-muted)',
            marginBottom: '40px',
            fontSize: '16px'
          }}>
            Direct answers buyers ask when sourcing a custom smartwatch OEM manufacturer in China.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {[
              {
                q: 'What does Microwear OEM service include?',
                a: 'Microwear OEM covers branding and configuration on existing smartwatch or AI glasses base models — laser logo, boot animation, packaging, watch faces, and firmware language packs — with MOQ from 100pcs.'
              },
              {
                q: 'What is the MOQ for custom smartwatch manufacturing?',
                a: 'Standard MOQ is 100 pieces per model. Trial quantities may be discussed for first-time partners depending on the base model and options selected.'
              },
              {
                q: 'How long do OEM samples and bulk orders take?',
                a: 'Samples are typically ready in 7 days after requirements are confirmed. Mass production usually takes 15–25 days after sample approval.'
              },
              {
                q: 'Can Microwear provide SDK and white-label apps?',
                a: 'Yes. Firmware feature toggles, multi-language UI, SDK for app integration, and white-label mobile app options are available under OEM projects.'
              },
            ].map((item) => (
              <div key={item.q} style={{
                padding: '24px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#60a5fa', marginBottom: '10px' }}>{item.q}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--mw-muted)', margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does Microwear OEM service include?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Microwear OEM covers branding and configuration on existing smartwatch or AI glasses base models — laser logo, boot animation, packaging, watch faces, and firmware language packs — with MOQ from 100pcs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the MOQ for custom smartwatch manufacturing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Standard MOQ is 100 pieces per model. Trial quantities may be discussed for first-time partners depending on the base model and options selected."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long do OEM samples and bulk orders take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Samples are typically ready in 7 days after requirements are confirmed. Mass production usually takes 15–25 days after sample approval."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Microwear provide SDK and white-label apps?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Firmware feature toggles, multi-language UI, SDK for app integration, and white-label mobile app options are available under OEM projects."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* SEO Text Section - B2B Keyword Density */}
      <section style={{
        padding: '60px 24px',
        background: 'transparent'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', textAlign: 'center', color: 'var(--mw-text)' }}>
            What is Microwear OEM manufacturing?
          </h2>
          <div style={{ lineHeight: '1.8', fontSize: '16px', color: 'var(--mw-muted)' }}>
            <p style={{ marginBottom: '16px' }}>
              <strong>Microwear OEM manufacturing</strong> is the factory service that brands and configures proven wearable base models for B2B buyers. As a Shenzhen <strong>smartwatch OEM manufacturer</strong> and <strong>AI glasses factory</strong>, Microwear handles logo, firmware, packaging, sampling, mass production, and export documentation under ISO9001:2015 with 8 SMT lines and 2M+ annual capacity.
            </p>
            <p style={{ marginBottom: '16px' }}>
              For <strong>custom smartwatch manufacturing</strong>, buyers typically request OEM branding on catalog models — logo, packaging, firmware language, and optional SDK/app white-label. The same workflow supports <strong>AI glasses OEM</strong> and telephone/camera glasses projects for partners expanding beyond wrist wearables.
            </p>
            <p>
              Practical baselines: MOQ from 100pcs, wholesale commonly $15–50, samples in about 7 days, bulk in 15–25 days after approval. Final cost and schedule depend on components and options selected — request a current factory quote before locking volume. <Link href="/contact?subject=OEM Inquiry" style={{ color: '#0ea5e9', textDecoration: 'underline' }}>Start your OEM project</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: 'transparent',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '16px',
              color: 'var(--mw-text)'
            }}>
              Ready to Start Your OEM Project?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--mw-muted)',
              marginBottom: '32px',
              lineHeight: '1.7'
            }}>
              Contact our engineering team for a free consultation and quote. 
              We&apos;ll review your requirements and provide technical recommendations within 24 hours.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link 
                href="/contact" 
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(180deg,#7ef0dc,#5eead4 50%,#2dd4bf)',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
              >
                Get Free Quote
              </Link>
              <Link 
                href="/factory" 
                style={{
                  padding: '16px 32px',
                  background: 'rgba(255,255,255,0.06)',
                  color: 'var(--mw-text)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
              >
                Visit Factory Page
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
