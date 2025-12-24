import React from "react";
import "./QA.css";
import type { Product } from "@/types/product";

interface QAProps {
  product?: Product;
}

export const QA: React.FC<QAProps> = ({ product }) => {
  // 1. Homepage / Global FAQs (Default)
  let faqItems = [
    {
      question: "What is the MOQ for OEM smart watch orders?",
      answer:
        "Our MOQ starts at 500 pcs for custom logo orders (OEM). For fully customized ODM projects (new ID/mould), MOQ typically starts at 3000 pcs. We support mixed colors for trial orders to help you test the market.",
    },
    {
      question: "Are Microwear watches waterproof?",
      answer:
        "Yes, our models are IP68/5ATM certified, meaning they are dust-tight and can withstand immersion in water. They are suitable for swimming, rain, and daily use, but not for deep diving or hot saunas.",
    },
    {
      question: "Do you provide SDK for custom app development?",
      answer:
        "Yes, we provide open SDKs and API documentation for B2B clients who need to develop their own apps or integrate health data into existing platforms (e.g., corporate wellness programs, elderly care systems).",
    },
    {
      question: "What is the warranty policy for wholesale orders?",
      answer:
        "We offer a standard 12-month warranty for all wholesale orders. Defective units can be replaced or repaired. We also provide 1-2% spare units free of charge for bulk orders to handle immediate after-sales needs.",
    },
  ];

  // 2. Product-Specific FAQs (if product prop is provided)
  if (product) {
    const batteryLife = product.specifications.battery || "3-5 days";
    const waterproof = product.specifications.waterResistance || "IP68";

    faqItems = [
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
  }

  const title = product
    ? `Frequently Asked Questions about ${product.name}`
    : "Everything you need to know about MicroWear smartwatches";

  return (
    <section
      className="geo-faq-section"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <h2 className="faq-title">{title}</h2>
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <summary className="faq-question-wrapper">
                <h3 itemProp="name" className="faq-question">
                  {item.question}
                </h3>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
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
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
