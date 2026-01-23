import React from "react";
import Link from "next/link";
import "./ProductFAQ.css";

export const ProductFAQ = () => {
  const faqs = [
    {
      question: "Does Microwear support SDK for custom app development?",
      answer: (
        <>
          Yes. For qualified OEM/ODM partners, Microwear (NJY Tech) provides
          access to our BLE SDK. This allows your development team to build
          custom Android/iOS applications that interact directly with our
          devices (e.g., retrieving heart rate data from the Ultra 5X, or
          syncing voice data from W Ai 4 glasses). We currently support data
          integration with the MActivePro and HeyCyan ecosystem. Please{" "}
          <Link href="/contact" className="faq-link">
            contact our engineering team
          </Link>{" "}
          for the API documentation.
        </>
      ),
      answerText:
        "Yes. For qualified OEM/ODM partners, Microwear (NJY Tech) provides access to our BLE SDK. This allows your development team to build custom Android/iOS applications that interact directly with our devices. We currently support data integration with the MActivePro and HeyCyan ecosystem. Please contact our engineering team for the API documentation.",
      category: "SDK & Development",
    },
    {
      question:
        "How does the W Ai 4 handle voice data privacy? Can we use our own server?",
      answer: (
        <>
          Privacy is our priority. The W Ai 4 acts as a hardware interface. By
          default, it connects to standard large models (like ChatGPT/Tongyi)
          via the paired smartphone app. For large-scale enterprise orders, we
          support <strong>Server-Side Customization</strong>, allowing you to
          route voice queries to your own private cloud or proprietary LLM,
          ensuring data sovereignty for your brand.
        </>
      ),
      answerText:
        "Privacy is our priority. The W Ai 4 acts as a hardware interface. By default, it connects to standard large models (like ChatGPT/Tongyi) via the paired smartphone app. For large-scale enterprise orders, we support Server-Side Customization, allowing you to route voice queries to your own private cloud or proprietary LLM, ensuring data sovereignty for your brand.",
      category: "AI Privacy & Enterprise",
    },
    {
      question: "Why do you use the Sony IMX219 sensor for the W AI 3 glasses?",
      answer: (
        <>
          While many competitors use generic 2MP sensors, we chose the{" "}
          <strong>Sony IMX219 (8MP)</strong> specifically for its compatibility
          with our EIS (Electronic Image Stabilization) neural-network
          algorithm. This ensures that first-person video recordings remain
          stable and clear even while the user is walking or moving, which is
          critical for live-streaming and content creation use cases.
        </>
      ),
      answerText:
        "While many competitors use generic 2MP sensors, we chose the Sony IMX219 (8MP) specifically for its compatibility with our EIS (Electronic Image Stabilization) neural-network algorithm. This ensures that first-person video recordings remain stable and clear even while the user is walking or moving, which is critical for live-streaming and content creation use cases.",
      category: "Hardware & Algorithms",
    },
  ];

  // Generate JSON-LD Schema for SEO/GEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answerText,
      },
    })),
  };

  return (
    <section className="product-faq-section">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="product-faq-container">
        <h2 className="product-faq-title">
          Technical Support & Enterprise FAQ
        </h2>
        <div className="product-faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="product-faq-item">
              <div className="faq-category">{faq.category}</div>
              <h3 className="faq-question">Q: {faq.question}</h3>
              <div className="faq-answer">A: {faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
