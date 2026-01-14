import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./QA.css";

interface QAItem {
  id: number;
  question: string;
  answer: string;
}

const qaData: QAItem[] = [
  {
    id: 1,
    question: "What is the battery life of MicroWear smartwatches?",
    answer:
      "Our smartwatches offer exceptional battery life ranging from 5-7 days on a single charge, depending on usage patterns and features enabled.",
  },
  {
    id: 2,
    question: "Are MicroWear watches water-resistant?",
    answer:
      "Yes, all MicroWear smartwatches are water-resistant with IP68 rating, making them suitable for swimming and daily water exposure.",
  },
  {
    id: 3,
    question: "Do the watches work with both iOS and Android?",
    answer:
      "Absolutely! MicroWear smartwatches are compatible with both iOS (10.0+) and Android (5.0+) devices via our dedicated mobile app.",
  },
  {
    id: 4,
    question: "What health features are included?",
    answer:
      "Our watches include heart rate monitoring, sleep tracking, blood oxygen measurement, step counting, and multiple sports modes for comprehensive health tracking.",
  },
  {
    id: 5,
    question: "What is the warranty period?",
    answer:
      "All MicroWear smartwatches come with a 1-year manufacturer warranty covering defects in materials and workmanship.",
  },
  {
    id: 6,
    question: "Can I receive notifications on the watch?",
    answer:
      "Yes, you can receive call, text, email, and app notifications directly on your smartwatch when connected to your smartphone.",
  },
];

export const QA: React.FC = () => {
  return (
    <section className="qa-section">
      <div className="qa-container">
        <ScrollReveal>
          <h2 className="qa-title">Smart Watch Frequently Asked Questions</h2>
          <p className="qa-subtitle">
            Everything you need to know about MicroWear smartwatches
          </p>
        </ScrollReveal>

        <div className="qa-grid">
          {qaData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="qa-card">
                <h3 className="qa-question">{item.question}</h3>
                <p className="qa-answer">{item.answer}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: qaData.map((q) => ({
                "@type": "Question",
                name: q.question,
                acceptedAnswer: { "@type": "Answer", text: q.answer },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};
