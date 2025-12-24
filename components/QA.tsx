import React from "react";
import "./QA.css";
import type { Product } from "@/types/product";

interface QAProps {
  product: Product;
}

export const QA: React.FC<QAProps> = ({ product }) => {
  const batteryLife = product.specifications.battery || "3-5 days";
  const waterproof = product.specifications.waterResistance || "IP68";

  // Dynamic FAQ content based on product features
  const faqItems = [
    {
      question: `Does the ${product.name} support custom health monitoring algorithms for B2B clients?`,
      answer:
        "Yes, Microwear provides SDK and API integration for custom health data tracking, including heart rate and SpO2 sensors. We offer full support for white-label app customization.",
    },
    {
      question: `What is the battery life of the ${product.name} under heavy usage?`,
      answer: `The ${product.name} is optimized for efficiency, offering approximately ${batteryLife} of usage on a single charge. It supports magnetic fast charging for quick power-ups.`,
    },
    {
      question: `Is the ${product.name} suitable for swimming and water sports?`,
      answer: `Yes, with a ${waterproof} rating, the ${product.name} is designed to withstand water immersion, making it suitable for swimming and daily water exposure.`,
    },
    {
      question: `Can I customize the boot logo and packaging for bulk orders?`,
      answer:
        "Absolutely. We offer comprehensive OEM services including custom boot logos, laser engraving on the case, and fully customized packaging for bulk orders.",
    },
  ];

  return (
    <section
      className="geo-faq-section"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <h2 className="faq-title">
          Frequently Asked Questions about {product.name}
        </h2>
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 itemProp="name" className="faq-question">
                {item.question}
              </h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className="faq-answer-wrapper"
              >
                <p itemProp="text" className="faq-answer">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
