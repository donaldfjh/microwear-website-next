import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import "./B2BTrustSection.css";

export function B2BTrustSection() {
  const metrics = [
    {
      value: "10+",
      label: "Years",
      description: "Manufacturing Excellence",
    },
    {
      value: "ISO9001",
      label: "Certified",
      description: "Quality Management",
    },
    {
      value: "500+",
      label: "Partners",
      description: "Global B2B Clients",
    },
    {
      value: "300+",
      label: "Patents",
      description: "Core Technologies",
    },
  ];

  const testimonials = [
    {
      company: "European Wearables Distributor",
      quote:
        "Microwear's OEM service exceeded our expectations. 24h prototyping and consistent quality across 50K+ units. Their ChatGPT glasses are now our bestseller.",
      author: "Marco R.",
      role: "Procurement Director",
      rating: 5,
    },
    {
      company: "American Health Tech Startup",
      quote:
        "As a startup, we needed low MOQ and fast iteration. Microwear delivered both with their health smartwatch OEM. From concept to sample in just 10 days.",
      author: "Sarah L.",
      role: "Founder & CEO",
      rating: 5,
    },
    {
      company: "Middle East Electronics Retailer",
      quote:
        "The W AI 3 camera glasses are perfect for our market. Great price point ($40-60 wholesale), excellent Sony sensor quality. Our B2B customers love them.",
      author: "Ahmed K.",
      role: "Product Manager",
      rating: 5,
    },
  ];

  return (
    <section className="b2b-trust-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>Why 500+ Global Brands Choose Microwear</h2>
            <p className="section-subtitle">
              Trusted OEM/ODM partner for smartwatches and AI glasses worldwide
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="trust-metrics">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-description">{metric.description}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="testimonials-section">
            <h3>What Our B2B Partners Say</h3>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-rating">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <blockquote className="testimonial-quote">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="testimonial-author">
                    <strong>{testimonial.author}</strong>
                    <span className="author-role">{testimonial.role}</span>
                    <span className="author-company">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="trust-cta">
            <Link href="/contact" className="btn btn-primary">
              Request Free Sample
            </Link>
            <Link href="/products" className="btn btn-outline">
              View Product Catalog
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}