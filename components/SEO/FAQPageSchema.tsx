import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
  pageTitle?: string;
}

/**
 * FAQPage Schema - FAQ页面结构化数据
 * 用于在搜索结果中展示FAQ富媒体摘要
 */
export const FAQPageSchema: React.FC<FAQPageSchemaProps> = ({
  faqs,
  pageTitle,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    ...(pageTitle && { name: pageTitle }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * 预定义FAQ数据 - 智能手表常见问题
 */
export const smartwatchFAQs: FAQItem[] = [
  {
    question: "What is the battery life of Microwear smartwatches?",
    answer:
      "Microwear smartwatches typically offer 3-7 days of battery life on a single charge, depending on usage patterns and features enabled. Models with AMOLED displays and GPS may have slightly shorter battery life of 2-5 days.",
  },
  {
    question: "Are Microwear smartwatches waterproof?",
    answer:
      "Yes, most Microwear smartwatches are IP68 waterproof rated, meaning they can withstand immersion in water up to 1.5 meters for 30 minutes. Some sport models offer even higher water resistance suitable for swimming.",
  },
  {
    question: "Does Microwear offer OEM/ODM services?",
    answer:
      "Yes, Microwear is a leading OEM/ODM smartwatch manufacturer with over 10 years of experience. We offer full customization services including design, firmware development, packaging, and certification support for global markets.",
  },
  {
    question: "What health monitoring features do Microwear smartwatches have?",
    answer:
      "Microwear smartwatches include comprehensive health monitoring features such as heart rate monitoring, blood oxygen (SpO2) measurement, sleep tracking, ECG, blood pressure monitoring, and women's health tracking on select models.",
  },
  {
    question: "Can I connect Microwear smartwatches to both Android and iOS?",
    answer:
      "Yes, Microwear smartwatches are compatible with both Android 5.0+ and iOS 10.0+ devices. Our companion app is available on Google Play Store and Apple App Store.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for wholesale?",
    answer:
      "For standard models, our MOQ starts from 100 units. For customized OEM orders, the MOQ is typically 500-1000 units depending on the level of customization required.",
  },
];

/**
 * 预定义FAQ数据 - AI眼镜常见问题
 */
export const aiGlassesFAQs: FAQItem[] = [
  {
    question: "What are Microwear AI smart glasses?",
    answer:
      "Microwear AI smart glasses are wearable devices that combine traditional eyewear with AI-powered features such as voice assistants, open-ear audio, camera capture, and real-time translation, all while maintaining a stylish, lightweight design.",
  },
  {
    question: "How long does the battery last on AI glasses?",
    answer:
      "Microwear AI glasses typically provide 4-6 hours of continuous use for audio playback and AI interactions, or up to 24 hours of standby time. The charging case provides additional charges for all-day use.",
  },
  {
    question: "Can I use prescription lenses with Microwear AI glasses?",
    answer:
      "Yes, Microwear AI glasses are designed to accommodate prescription lenses. The frames can be fitted with custom lenses by your optometrist, making them suitable for everyday vision correction needs.",
  },
  {
    question: "What AI features are available?",
    answer:
      "Microwear AI glasses support voice commands, real-time language translation, ChatGPT integration, music control, phone calls, photo/video capture, and voice memo recording through our AI assistant.",
  },
];