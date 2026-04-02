import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Factory | Smartwatch Manufacturing Facility | Microwear",
  description:
    "Microwear factory: 15,000㎡ facility, 450+ employees, 8 SMT production lines. ISO9001, CE, FCC, RoHS certified. Advanced QC systems, 2M+ units annual capacity. Factory tours welcome.",
  keywords: [
    "smartwatch factory",
    "wearable manufacturing facility",
    "ISO9001 certified factory",
    "electronics manufacturer China",
    "Shenzhen smartwatch factory",
    "OEM factory tour",
    "quality control manufacturing",
    "SMT production line",
    "electronics assembly factory",
    "certified manufacturer"
  ],
  alternates: {
    canonical: "https://microwear.info/factory",
  },
  openGraph: {
    title: "Our Factory | Smartwatch Manufacturing Facility | Microwear",
    description:
      "Tour our 15,000㎡ smartwatch manufacturing facility. ISO9001 certified, 450+ employees, advanced QC systems. Production capacity 2M+ units annually.",
    url: "https://microwear.info/factory",
    type: "website",
  },
};

export default function FactoryPage() {
  const factoryStats = [
    { value: "15,000㎡", label: "Factory Area", icon: "🏭" },
    { value: "450+", label: "Skilled Employees", icon: "👥" },
    { value: "8", label: "SMT Production Lines", icon: "⚙️" },
    { value: "2M+", label: "Annual Capacity", icon: "📦" },
    { value: "15+", label: "Years Experience", icon: "📅" },
    { value: "<0.3%", label: "Defect Rate", icon: "✅" }
  ];

  const certifications = [
    {
      name: "ISO 9001",
      description: "Quality Management System",
      icon: "📜",
      details: "Certified since 2015. Annual audits ensure continuous compliance with international quality standards."
    },
    {
      name: "CE",
      description: "European Conformity",
      icon: "🇪🇺",
      details: "All products meet EU safety, health, and environmental protection requirements."
    },
    {
      name: "FCC",
      description: "Federal Communications Commission",
      icon: "🇺🇸",
      details: "Compliant with US electromagnetic interference standards for electronic devices."
    },
    {
      name: "RoHS",
      description: "Restriction of Hazardous Substances",
      icon: "🌿",
      details: "Free from lead, mercury, cadmium, and other hazardous materials."
    },
    {
      name: "BSCI",
      description: "Business Social Compliance Initiative",
      icon: "🤝",
      details: "Ethical manufacturing practices, fair labor conditions, and worker safety standards."
    },
    {
      name: "UKCA",
      description: "UK Conformity Assessed",
      icon: "🇬🇧",
      details: "Post-Brexit certification for products sold in the United Kingdom market."
    }
  ];

  const qcProcesses = [
    {
      stage: "IQC - Incoming Quality Control",
      description: "All incoming components undergo rigorous inspection. Supplier qualifications audited quarterly. Component traceability maintained throughout production.",
      checks: [
        "Visual inspection for defects",
        "Electrical parameter testing",
        "Material composition verification",
        "Supplier documentation review"
      ]
    },
    {
      stage: "IPQC - In-Process Quality Control",
      description: "Real-time monitoring at every production stage. Automated optical inspection (AOI) on SMT lines. Statistical process control (SPC) for key parameters.",
      checks: [
        "SMT soldering quality inspection",
        "Assembly tolerance verification",
        "Functional testing at sub-assembly",
        "Process parameter monitoring"
      ]
    },
    {
      stage: "FQC - Final Quality Control",
      description: "100% final inspection before packaging. Comprehensive functional testing. Appearance and packaging verification. Random sampling for reliability testing.",
      checks: [
        "100% functional testing",
        "Waterproof testing (IP68/5ATM)",
        "Battery performance verification",
        "Bluetooth connectivity testing",
        "Sensor accuracy calibration"
      ]
    },
    {
      stage: "OQC - Outgoing Quality Control",
      description: "Pre-shipment inspection. Drop test and vibration test for packaging integrity. Documentation verification. Certificate of compliance included with each batch.",
      checks: [
        "Packaging integrity inspection",
        "Shipping mark verification",
        "Documentation completeness",
        "Random batch sampling"
      ]
    }
  ];

  const equipment = [
    {
      category: "SMT Production",
      items: [
        "Yamaha YSM20 Pick & Place Machines (6 units)",
        "DEK Horizon Screen Printers (3 units)",
        "Reflow Ovens with Nitrogen Protection (4 units)",
        "Automated Optical Inspection (AOI) Systems (8 units)"
      ]
    },
    {
      category: "Assembly Lines",
      items: [
        "Automated Assembly Lines (8 lines)",
        "Laser Marking Machines (4 units)",
        "Ultrasonic Welding Equipment (6 units)",
        "Precision Screwdriver Systems (50+ stations)"
      ]
    },
    {
      category: "Testing Equipment",
      items: [
        "Waterproof Testing Chambers (10 units)",
        "Battery Testing Systems (5 units)",
        "Environmental Test Chambers (-40°C to +85°C)",
        "Drop Test & Vibration Test Machines",
        "Bluetooth & RF Testing Equipment"
      ]
    },
    {
      category: "Quality Control",
      items: [
        "X-Ray Inspection Systems (2 units)",
        "3D Coordinate Measuring Machines",
        "Spectrometer for Material Analysis",
        "Microscope Inspection Stations (20+ units)"
      ]
    }
  ];

  return (
    <div className="factory-page" style={{ minHeight: '100vh' }}>
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
              World-Class Manufacturing Facility
            </h1>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              color: '#94a3b8',
              marginBottom: '40px'
            }}>
              15,000㎡ smartwatch manufacturing facility in Shenzhen, China. 
              ISO9001 certified with advanced production lines and comprehensive QC systems.
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
                Schedule Factory Tour
              </Link>
              <Link 
                href="/oem-services" 
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
                OEM Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Factory Stats Section */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '64px',
              color: '#1e293b'
            }}>
              Factory at a Glance
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px'
          }}>
            {factoryStats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div style={{
                  padding: '32px 24px',
                  background: 'white',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>{stat.icon}</div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: '#3b82f6',
                    marginBottom: '8px'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Introduction Section */}
      <section style={{
        padding: '100px 24px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#1e293b'
            }}>
              About Our Factory
            </h2>
            <div style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#475569',
              marginBottom: '32px'
            }}>
              <p style={{ marginBottom: '20px' }}>
                Microwear operates a state-of-the-art <strong>15,000 square meter manufacturing facility</strong> in 
                Shenzhen, China&apos;s electronics manufacturing hub. Established in 2010, our factory has grown to become 
                a trusted partner for 500+ B2B clients worldwide.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Our facility houses <strong>8 automated SMT production lines</strong> and <strong>8 assembly lines</strong>, 
                capable of producing over <strong>2 million units annually</strong>. With 450+ skilled employees including 
                50+ engineers in our R&D department, we maintain full control over the entire manufacturing process from 
                component sourcing to final packaging.
              </p>
              <p>
                We welcome B2B partners to visit our factory for on-site inspections and quality audits. 
                Virtual factory tours are also available for international clients.
              </p>
            </div>
          </ScrollReveal>

          {/* Factory Layout Placeholder */}
          <ScrollReveal delay={0.2}>
            <div style={{
              marginTop: '48px',
              padding: '60px',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
              borderRadius: '16px',
              textAlign: 'center',
              border: '2px dashed #cbd5e1'
            }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>🏭</div>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>
                Factory Floor Plan
              </h3>
              <p style={{ fontSize: '16px', color: '#64748b' }}>
                [Factory layout diagram placeholder - to be added with actual facility photos]
              </p>
              <div style={{
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'center',
                gap: '32px',
                flexWrap: 'wrap',
                fontSize: '14px',
                color: '#94a3b8'
              }}>
                <span>📍 SMT Workshop: 3,000㎡</span>
                <span>📍 Assembly Workshop: 4,000㎡</span>
                <span>📍 QC Lab: 800㎡</span>
                <span>📍 Warehouse: 5,000㎡</span>
                <span>📍 R&D Center: 1,200㎡</span>
                <span>📍 Office & Facilities: 1,000㎡</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications Section */}
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
              Certifications & Compliance
            </h2>
            <p style={{
              fontSize: '18px',
              textAlign: 'center',
              color: '#64748b',
              marginBottom: '64px',
              maxWidth: '700px',
              margin: '0 auto 64px'
            }}>
              Our factory and products meet international quality and safety standards, 
              ensuring smooth market access worldwide.
            </p>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div style={{
                  padding: '32px',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ fontSize: '42px', marginBottom: '16px' }}>{cert.icon}</div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#1e293b'
                  }}>
                    {cert.name}
                  </h3>
                  <div style={{
                    fontSize: '14px',
                    color: '#3b82f6',
                    fontWeight: '500',
                    marginBottom: '12px'
                  }}>
                    {cert.description}
                  </div>
                  <p style={{
                    fontSize: '15px',
                    color: '#64748b',
                    lineHeight: '1.7'
                  }}>
                    {cert.details}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
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
              Quality Control Process
            </h2>
            <p style={{
              fontSize: '18px',
              textAlign: 'center',
              color: '#64748b',
              marginBottom: '64px',
              maxWidth: '700px',
              margin: '0 auto 64px'
            }}>
              Four-stage quality control system ensures every product meets our 
              stringent standards before reaching your customers.
            </p>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '32px'
          }}>
            {qcProcesses.map((process, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div style={{
                  padding: '32px',
                  background: '#f8fafc',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    color: '#3b82f6'
                  }}>
                    {process.stage}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: '#475569',
                    lineHeight: '1.7',
                    marginBottom: '16px'
                  }}>
                    {process.description}
                  </p>
                  <div style={{
                    background: 'white',
                    padding: '16px',
                    borderRadius: '8px'
                  }}>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#64748b',
                      marginBottom: '8px',
                      textTransform: 'uppercase'
                    }}>
                      Key Inspection Points
                    </div>
                    <ul style={{
                      margin: 0,
                      paddingLeft: '20px',
                      fontSize: '14px',
                      color: '#475569'
                    }}>
                      {process.checks.map((check, idx) => (
                        <li key={idx} style={{ marginBottom: '6px' }}>{check}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Quality Metrics */}
          <ScrollReveal delay={0.4}>
            <div style={{
              marginTop: '48px',
              padding: '32px',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              borderRadius: '16px',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '600',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                Quality Performance Metrics
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                    &lt;0.3%
                  </div>
                  <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                    Defect Rate
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                    100%
                  </div>
                  <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                    Final Inspection
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                    12 Months
                  </div>
                  <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                    Warranty Period
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '36px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
                    24 Hours
                  </div>
                  <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                    Issue Response Time
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Equipment Section */}
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
              Production Equipment
            </h2>
            <p style={{
              fontSize: '18px',
              textAlign: 'center',
              color: '#64748b',
              marginBottom: '64px',
              maxWidth: '700px',
              margin: '0 auto 64px'
            }}>
              State-of-the-art manufacturing and testing equipment ensures 
              precision, efficiency, and consistent quality.
            </p>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '32px'
          }}>
            {equipment.map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div style={{
                  padding: '32px',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '20px',
                    color: '#1e293b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{ fontSize: '24px' }}>⚙️</span>
                    {category.category}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {category.items.map((item, idx) => (
                      <li key={idx} style={{
                        padding: '10px 0',
                        fontSize: '15px',
                        color: '#475569',
                        borderBottom: idx < category.items.length - 1 ? '1px solid #f1f5f9' : 'none',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px'
                      }}>
                        <span style={{ color: '#3b82f6', marginTop: '2px' }}>▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Equipment Photos Placeholder */}
          <ScrollReveal delay={0.4}>
            <div style={{
              marginTop: '48px',
              padding: '60px',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
              borderRadius: '16px',
              textAlign: 'center',
              border: '2px dashed #cbd5e1'
            }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>📷</div>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>
                Equipment Photos
              </h3>
              <p style={{ fontSize: '16px', color: '#64748b' }}>
                [Equipment photos placeholder - to be added with actual factory photos]
              </p>
              <div style={{
                marginTop: '24px',
                fontSize: '14px',
                color: '#94a3b8'
              }}>
                SMT Lines • Assembly Stations • QC Lab • Testing Equipment
              </div>
            </div>
          </ScrollReveal>
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
              Visit Our Factory
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#64748b',
              marginBottom: '32px',
              lineHeight: '1.7'
            }}>
              We welcome B2B partners to visit our facility for on-site inspections 
              and quality audits. Virtual tours are also available for international clients.
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
                Schedule Factory Tour
              </Link>
              <Link 
                href="/oem-services" 
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
                Learn About OEM Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
