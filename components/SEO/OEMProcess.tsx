import { ScrollReveal } from "@/components/ScrollReveal";
import "./OEMProcess.css";

export function OEMProcess() {
  const steps = [
    {
      step: 1,
      title: "Requirement Analysis",
      description: "Share your specs, target market, and budget. Our team provides a custom solution within 24 hours.",
      duration: "1-2 days",
      icon: "📋",
      features: [
        "Free consultation",
        "Custom spec sheet",
        "Market analysis",
        "Pricing proposal"
      ]
    },
    {
      step: 2,
      title: "Sample Development",
      description: "Prototyping with custom logo, packaging design, and SDK integration. Physical samples shipped globally.",
      duration: "7-15 days",
      icon: "🔧",
      features: [
        "Custom branding",
        "Packaging design",
        "SDK/API access",
        "Sample testing"
      ]
    },
    {
      step: 3,
      title: "Mass Production",
      description: "ISO9001 quality control with real-time production tracking. QC reports provided for every batch.",
      duration: "20-30 days",
      icon: "🏭",
      features: [
        "Quality control",
        "Production tracking",
        "QC documentation",
        "Progress updates"
      ]
    },
    {
      step: 4,
      title: "Global Delivery",
      description: "DHL/FedEx express shipping with door-to-door service. Customs clearance support provided.",
      duration: "3-7 days",
      icon: "🚚",
      features: [
        "Express shipping",
        "Door-to-door",
        "Customs support",
        "Tracking number"
      ]
    }
  ];

  return (
    <section className="oem-process-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>Streamlined OEM Process</h2>
            <p className="section-subtitle">
              From concept to delivery in 4 simple steps
            </p>
          </div>
        </ScrollReveal>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.1}>
              <div className="process-step">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">Step {step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-duration">
                  <span className="duration-label">Duration:</span>
                  <span className="duration-value">{step.duration}</span>
                </div>
                <ul className="step-features">
                  {step.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="process-cta">
            <p className="cta-text">
              Ready to start your custom smartwatch or AI glasses project?
            </p>
            <a href="/contact" className="btn btn-primary">
              Get Free Consultation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}