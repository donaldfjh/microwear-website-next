# Trae Automation Protocol: Phase 5 (Content Growth & Analytics)
## Target: https://microwear.info/
## Goal: Target Long-tail Keywords & Track User Events
## Executor: Trae (AI Agent)

> **CONTEXT:**
> A static homepage is not enough for Google. We need dynamic content placeholders to target keywords like "Trends", "Supply Chain", "China Factory".
> We also need to know if users are actually clicking the WhatsApp button we added in Phase 3.

---

### 📰 PHASE 1: The "Freshness" Signal (News/Blog Teaser)
**Target File:** `Home.tsx` (or the main landing page)
**Logic:** Insert a section that looks like a blog feed.

- [ ] **Task 1.1: Insert "Industry Insights" Section**
    - **Location:** Place this AFTER the "Trust Bar" (Certificates) but BEFORE the Footer.
    - **Action:** Create a clean, 3-column card layout titled "Latest Wearable Tech Insights".
    - **Styling:** Use existing Tailwind/CSS classes. Make sure cards have a hover effect.
    - **Content (Hardcode these 3 placeholders for SEO):**
        1. **Card 1:**
           - Title: "Top 5 Smart Watch Trends for 2025 OEM Market"
           - Summary: "Discover why health monitoring and ECG sensors are dominating the B2B wearable supply chain..."
           - Link: `/news/smart-watch-trends-2025` (Placeholder)
        2. **Card 2:**
           - Title: "How to Choose a Reliable Smart Watch Manufacturer in China"
           - Summary: "A guide for global importers on verifying ISO certifications and production capacity..."
           - Link: `/news/how-to-choose-factory` (Placeholder)
        3. **Card 3:**
           - Title: "Microwear Launches New Series 9 with AMOLED Display"
           - Summary: "Our latest OEM model features ultra-low power consumption and waterproof chassis..."
           - Link: `/news/series-9-launch` (Placeholder)

---

### 📊 PHASE 2: Event Tracking (The "Spy" Pixel)
**Target File:** `App.tsx` or component containing the WhatsApp Button.

- [ ] **Task 2.1: Add Google Analytics Event Tags**
    - **Scanner:** Locate the Floating WhatsApp Button (created in v3).
    - **Action:** Add an `onClick` handler to send data to Google Analytics (GA4).
    - **Code Snippet:**
      ```tsx
      onClick={() => {
        // Safe check for gtag
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'click_whatsapp', {
            'event_category': 'conversion',
            'event_label': 'floating_button_v1'
          });
          console.log('GA Event Sent: click_whatsapp');
        }
      }}
      ```

---

### 🌐 PHASE 3: Global SEO (Hreflang)
**Target File:** `index.html` (Head section)

- [ ] **Task 3.1: Hreflang Tags**
    - **Action:** Add inside `<head>` to tell Google this is an English site for global users.
      `<link rel="alternate" hreflang="en" href="https://microwear.info/" />`
      `<link rel="alternate" hreflang="x-default" href="https://microwear.info/" />`

---

### 🚧 PHASE 4: The 404 Safety Net
**Target File:** `src/pages/404.tsx` (or equivalent)

- [ ] **Task 4.1: Custom 404 Page**
    - **Check:** If `NotFound.tsx` or `404.tsx` is missing, create it.
    - **Content:**
      - Headline: "Product Not Found?"
      - Subtext: "The page you are looking for might have been moved. Explore our latest OEM models."
      - **CTA Button:** "Back to Home" (Primary Color).
      - **Why:** Reduces bounce rate when users hit broken links.

---
**END OF PROTOCOL v5.0** n