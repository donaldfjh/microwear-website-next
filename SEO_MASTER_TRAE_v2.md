# Trae Master Automation Protocol: Full Site SEO Overhaul
## Target Domain: https://microwear.info/
## User Persona: B2B Smart Watch Manufacturer (OEM/ODM)
## Objective: Dominate Google Rankings for "Smart Watch Factory" keywords.

> **SYSTEM INSTRUCTION FOR TRAE:**
> You are now the Lead SEO Engineer.
> Read this protocol strictly. Analyze the project structure (React/Next.js/Vite).
> Apply changes to `index.html`, `App.tsx`, `Home.tsx` and other relevant files.
> **Do not delete existing logic, only enhance it.**

---

### 🔴 PHASE 1: Identity & Meta Data (The "Passport")
**Target File:** `index.html` (for Vite/CRA) or `layout.tsx`/`head.tsx` (for Next.js)

- [ ] **Task 1.1: The "Golden" Title Tag**
    - **Action:** Find the `<title>` tag. Replace/Update it to:
      `<title>Microwear | Top Smart Watch Manufacturer & OEM/ODM Factory in China</title>`
    - **Logic:** Keyword stacking: Brand + Category + Business Model + Location.

- [ ] **Task 1.2: The B2B Meta Description**
    - **Action:** Find or Add `<meta name="description">`.
    - **Content:**
      `Leading smart watch manufacturer Microwear offers premium OEM/ODM wearable solutions. ISO-certified factory, wholesale smartwatches, health trackers, and GPS sports watches for global brands.`

- [ ] **Task 1.3: Structured Data (JSON-LD)**
    - **Action:** Inject this script block inside `<head>` to prove we are a Factory:
    ```html
    <script type="application/ld+json">
    {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "Organization",
      "name": "Microwear",
      "url": "[https://microwear.info/](https://microwear.info/)",
      "logo": "[https://microwear.info/logo.png](https://microwear.info/logo.png)",
      "description": "Professional Smart Watch Manufacturer and OEM Service Provider",
      "keywords": "Smart Watch OEM, Wearable Tech Factory, Microwear",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "areaServed": "Global"
      }
    }
    </script>
    ```

---

### 🟠 PHASE 2: Semantic Structure & Accessibility
**Target File:** `Home.tsx` / `App.tsx` (Landing Page)

- [ ] **Task 2.1: H1 Tag Enforcement**
    - **Scanner:** Check all `<h1>` tags.
    - **Rule:** Ensure there is **ONLY ONE** `<h1>` per page.
    - **Action:**
        1. If Logo is `<h1>`, downgrade it to `<div>` or `<a>`.
        2. Create a hidden or visible H1 at the top:
           `<h1 className="sr-only">Microwear: Professional Smart Watch Manufacturing Solutions</h1>`
           *(Note: `sr-only` hides it visually but Google sees it. If you can make it visible and good-looking, even better.)*

- [ ] **Task 2.2: Image Alt Text Automation**
    - **Scanner:** Scan all `<img>` tags in the component tree.
    - **Action:** Add descriptive `alt` attributes to any image missing them.
        - Banner images -> `alt="Microwear Smart Watch Factory Assembly Line"`
        - Product images -> `alt="OEM Smart Watch Series X with Health Monitoring"`
        - Icons -> `alt=""` (Decorative).

---

### 🟡 PHASE 3: B2B Trust Indicators (Conversion Rate Optimization)
**Target File:** `Home.tsx` (Insert below Hero Section)

- [ ] **Task 3.1: Inject "Trust Bar"**
    - **Action:** Insert a new section component showing certifications.
    - **Design:** Clean, grayscale, professional.
    - **Code Stub (Trae to implement):**
      ```tsx
      <section className="trust-bar py-6 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto text-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Trusted Manufacturing Standards</p>
          <div className="flex justify-center gap-8 items-center flex-wrap">
             {/* Trae: Use text placeholders styled like badges if images are missing */}
             <span className="px-4 py-2 border rounded text-gray-600 font-semibold">ISO 9001 Certified</span>
             <span className="px-4 py-2 border rounded text-gray-600 font-semibold">CE / RoHS Compliant</span>
             <span className="px-4 py-2 border rounded text-gray-600 font-semibold">BSC I Audited</span>
          </div>
        </div>
      </section>
      ```

---

### 🟢 PHASE 4: Technical Performance (Core Web Vitals)
**Target File:** Root / Global Config

- [ ] **Task 4.1: Robot.txt & Sitemap**
    - **Action:** Check `public/robots.txt`. Ensure it exists and allows indexing:
      ```text
      User-agent: *
      Allow: /
      Sitemap: [https://microwear.info/sitemap.xml](https://microwear.info/sitemap.xml)
      ```

- [ ] **Task 4.2: Lazy Loading Strategy**
    - **Action:** For any image that is NOT in the top Hero section, add `loading="lazy"`.
    - **Action:** For the Main Hero Image, add `rel="preload"` in the head or `priority={true}` if using Next.js Image.

---
**END OF PROTOCOL**