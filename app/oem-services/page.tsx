import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "OEM/ODM Services | Custom Smartwatch Manufacturing | Microwear",
  description:
    "Microwear OEM/ODM services: Custom logo, firmware, packaging, and hardware modifications. MOQ 100pcs, 7-day sampling, 15-25 day production. CE, FCC, RoHS certified. Get free quote for custom smartwatch projects.",
  keywords: [
    "smartwatch OEM services",
    "custom smartwatch manufacturer",
    "ODM smartwatch supplier",
    "white label smartwatch",
    "custom logo smartwatch",
    "smartwatch private label",
    "OEM wearable manufacturer",
    "custom firmware smartwatch",
    "smartwatch customization",
    "bulk smartwatch orders"
  ],
  alternates: {
    canonical: "https://microwear.info/oem-services",
  },
  openGraph: {
    title: "OEM/ODM Services | Custom Smartwatch Manufacturing | Microwear",
    description:
      "Full-service OEM/ODM smartwatch manufacturing. Custom logo, firmware, packaging. MOQ 100pcs, fast sampling, certified quality.",
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
    <div className="oem-services-page" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
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
              OEM/ODM Smartwatch Services
            </h1>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              color: '#94a3b8',
              marginBottom: '40px'
            }}>
              Full-service custom smartwatch manufacturing. From concept to delivery, 
              we handle every detail of your OEM/ODM project with precision and care.
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
                  background: '#3b82f6',
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

      {/* OEM Process Section */}
      <section style={{
        padding: '100px 24px',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              OEM Service Process
            </h2>
            <p style={{
              fontSize: '18px',
              textAlign: 'center',
              color: '#64748b',
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
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
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
                    color: '#1e293b'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#64748b'
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
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              Customization Options
            </h2>
            <p style={{
              fontSize: '18px',
              textAlign: 'center',
              color: '#64748b',
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
                  background: '#f8fafc',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{category.icon}</div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '20px',
                    color: '#1e293b'
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
                        color: '#475569',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <span style={{ color: '#3b82f6' }}>✓</span>
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
              color: '#94a3b8',
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
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                  100 pcs
                </div>
                <div style={{ fontSize: '16px', color: '#94a3b8' }}>
                  Standard MOQ
                </div>
                <p style={{ fontSize: '14px', color: '#64748b', marginTop: '12px' }}>
                  Per model for OEM/ODM orders. Lower quantities available for trial orders.
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
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                  7 Days
                </div>
                <div style={{ fontSize: '16px', color: '#94a3b8' }}>
                  Sample Lead Time
                </div>
                <p style={{ fontSize: '14px', color: '#64748b', marginTop: '12px' }}>
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
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                  15-25 Days
                </div>
                <div style={{ fontSize: '16px', color: '#94a3b8' }}>
                  Mass Production
                </div>
                <p style={{ fontSize: '14px', color: '#64748b', marginTop: '12px' }}>
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
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.7' }}>
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
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              Success Cases
            </h2>
            <p style={{
              fontSize: '18px',
              textAlign: 'center',
              color: '#64748b',
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
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '600', marginBottom: '12px' }}>
                  🇩🇪 German Electronics Distributor
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                  Custom Fitness Smartwatch Line
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', marginBottom: '16px' }}>
                  Developed a white-label fitness smartwatch with custom German UI, health sensors, 
                  and EU-compliant packaging. 5,000 units ordered in first batch.
                </p>
                <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                  <strong>Customization:</strong> Logo, firmware, packaging, sensors
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{
                padding: '32px',
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '600', marginBottom: '12px' }}>
                  🇺🇸 US Health Tech Startup
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                  ECG Smartwatch with Custom App
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', marginBottom: '16px' }}>
                  Full OEM solution including ECG sensor integration, custom mobile app development, 
                  and FDA documentation support. Now their flagship product.
                </p>
                <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                  <strong>Customization:</strong> Hardware, app, cloud platform
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div style={{
                padding: '32px',
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '14px', color: '#3b82f6', fontWeight: '600', marginBottom: '12px' }}>
                  🇦🇪 UAE Trading Company
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                  Multi-Brand Smartwatch Portfolio
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', marginBottom: '16px' }}>
                  Ongoing partnership supplying 3 different smartwatch models with unique branding 
                  for different market segments. 20,000+ units annually.
                </p>
                <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                  <strong>Customization:</strong> Multiple SKUs, branding, packaging
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              Ready to Start Your OEM Project?
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#64748b',
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
                  background: '#3b82f6',
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
                  background: '#f1f5f9',
                  color: '#1e293b',
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
