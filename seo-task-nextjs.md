# Next.js SEO & GEO Optimization Task: Microwear MA31

## 📌 Context
- **Framework:** Next.js (Check if it's App Router `page.tsx` or Pages Router `_app.tsx/page.tsx`)
- **Product:** Microwear MA31
- **Goal:** Implement GEO-friendly content and structured data.

---

## 🛠 Task 1: Metadata Update
**Action:** Update the page metadata using the Next.js `Metadata` object (App Router) or `<Head>` component (Pages Router).

- **Title:** "Microwear MA31 Smartwatch | 3-5 Days Battery & GPS | Best Value 2025"
- **Description:** "Discover the Microwear MA31. Featuring a 3-5 day battery life, IP68 waterproofing, and 1.95 inch HD display. The perfect balance of performance and price."

---

## 🛠 Task 2: JSON-LD Injection (GEO Optimization)
**Action:** Create a structured data component. Use `next/script` or a `dangerouslySetInnerHTML` script tag to inject the FAQ Schema.

```typescript
const faqSchema = {
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does the Microwear MA31 battery last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Microwear MA31 provides a balanced 3-5 days of battery life under typical use, supporting Always-On Display features."
      }
    },
    {
      "@type": "Question",
      "name": "Is Microwear MA31 waterproof for swimming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with an IP68 rating, it is suitable for swimming and resistant to dust and sweat."
      }
    }
  ]
};