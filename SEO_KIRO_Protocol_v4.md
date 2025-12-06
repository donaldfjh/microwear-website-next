# Kiro Automation Protocol: Phase 4 (Authority & Core Web Vitals)
## Target: https://microwear.info/
## Goal: Reduce Bounce Rate & Improve PageSpeed Score
## Executor: Kiro (AI Agent)

> **CONTEXT:**
> Google ranks B2B sites higher if they display "Authority" (E-E-A-T). We need to show certificates.
> Also, we must fix "Cumulative Layout Shift" (CLS) by reserving space for images.

---

### 🛡️ PHASE 1: The "Trust Bar" (Certifications)
**Target File:** `Home.tsx` or `components/TrustSection.tsx`
**Logic:** B2B buyers look for CE, RoHS, ISO9001.

- [ ] **Task 1.1: Inject Certification Banner**
    - **Location:** Place this section strictly **immediately above the Footer**.
    - **Action:** Create a grayscale (professional looking) logo bar.
    - **Content Logic:**
      ```tsx
      <section className="border-t border-gray-200 py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500 mb-4 uppercase tracking-widest">Certified Manufacturing Standards</p>
          <div className="flex justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
            {/* Kiro, please create placeholders for these 4 images */}
            <div className="font-bold text-xl text-gray-400 border-2 border-gray-300 p-2 rounded">ISO 9001</div>
            <div className="font-bold text-xl text-gray-400 border-2 border-gray-300 p-2 rounded">CE Certified</div>
            <div className="font-bold text-xl text-gray-400 border-2 border-gray-300 p-2 rounded">RoHS Compliant</div>
            <div className="font-bold text-xl text-gray-400 border-2 border-gray-300 p-2 rounded">FCC Approved</div>
          </div>
        </div>
      </section>
      ```
    - **Note to User:** Add a comment in code: `// TODO: Replace these text placeholders with real certification logos images (CE, RoHS, ISO)`.

---

### ⚡ PHASE 2: Speed Engineering (Resource Hints)
**Target File:** `index.html` (Head section)

- [ ] **Task 2.1: DNS Prefetching**
    - **Action:** Add these lines inside `<head>` to speed up external connections.
      ```html
      <link rel="dns-prefetch" href="//[www.google-analytics.com](https://www.google-analytics.com)">
      <link rel="dns-prefetch" href="//fonts.googleapis.com">
      ```

- [ ] **Task 2.2: Preload Hero Image (LCP Optimization)**
    - **Scanner:** Identify the URL of the main Banner/Hero image.
    - **Action:** Add a preload link in `<head>`:
      `<link rel="preload" as="image" href="/path/to/your-hero-banner.jpg">`
      *(Kiro must replace the path with the actual image path found in the code).*

---

### 📐 PHASE 3: Visual Stability (Fixing CLS)
**Target File:** Global Image Components

- [ ] **Task 3.1: Enforce Aspect Ratio**
    - **Scanner:** Check all `<img>` tags.
    - **Issue:** If images load without width/height, the page "jumps" (CLS penalty).
    - **Action:** Ensure every `<img>` tag has explicit `width="..."` and `height="..."` attributes OR an `aspect-ratio` CSS class.
    - **Execute:** If using standard HTML `img`, add `width="800" height="600"` (values based on actual image size).

---

### 🔗 PHASE 4: Navigation Depth (Breadcrumbs)
**Target File:** `ProductDetail.tsx` or any inner page (if exists).

- [ ] **Task 4.1: Add Breadcrumb Navigation**
    - **Condition:** If the site has sub-pages (like Product Details).
    - **Action:** Add Schema.org Breadcrumb structure.
    - **Visual:** `Home > Smart Watches > Series 9 OEM`
    - **Why:** Helps Google understand site hierarchy.

---
**END OF PROTOCOL v4.0**