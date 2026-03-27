import React from "react";
import "./WhyChooseUs.css";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: "🏭",
      title: "15+ Years Experience",
      description:
        "Deep expertise in wearable technology manufacturing. Professional OEM/ODM partner serving 500+ B2B clients worldwide.",
    },
    {
      icon: "✅",
      title: "Full Certifications",
      description:
        "CE, FCC, RoHS, ISO 9001 certified factory. Ready for EU, US, and global markets. Compliance documentation provided.",
    },
    {
      icon: "📦",
      title: "Low MOQ 100pcs",
      description:
        "Start from 100pcs - perfect for startups and SMEs. Flexible negotiation for long-term B2B partnerships.",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description:
        "Sample in 7 days, production in 15-25 days. Quick response to market trends and urgent orders.",
    },
    {
      icon: "🔧",
      title: "Custom ODM/OEM",
      description:
        "Full customization: hardware, software, branding, packaging. Your vision, our manufacturing expertise.",
    },
    {
      icon: "🌍",
      title: "Global Shipping",
      description:
        "DDP, FOB, CIF - flexible shipping terms. Experience with 50+ countries. Reliable logistics partners.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <h2 className="why-choose-us-title">Why 500+ B2B Partners Trust Microwear</h2>
        <p className="why-choose-us-subtitle">
          Professional AI glasses and smartwatch OEM/ODM manufacturer with proven track record
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
