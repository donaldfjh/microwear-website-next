# Kiro Automation Protocol: SEO Optimization (v1.0)
## Target Domain: https://microwear.info/
## Priority: Critical
## Executor: Kiro (AI Agent)

> **CONTEXT FOR KIRO:** > You are an Expert SEO Engineer and Full-Stack Developer. 
> Your goal is to maximize the ranking of this website for keywords: "Smart Watch Manufacturer", "Microwear", "Wearable Tech OEM".
> Follow the checklist below to modify the source code strictly.

---

### 🛑 PHASE 1: Meta Data Engineering (Head Section)
**Target File:** `index.html` (or the main layout/root layout file)

- [ ] **Action 1 (Title Refinement):** - Locate `<title>`.
    - **Logic:** Must follow `[Core Keyword] | [Value Proposition] | [Brand Name]`.
    - **Execute Change:** Replace content with:
      `Smart Watch Manufacturer & Wearable Tech Expert | OEM/ODM Services | Microwear`
    
- [ ] **Action 2 (Meta Description):**
    - Locate `<meta name="description">`.
    - **Condition:** If missing, create it.
    - **Execute Change:** Set `content` to:
      `Explore Microwear's latest smartwatches. Leading smart watch manufacturer offering premium OEM/ODM services for global businesses. High-quality wearable technology & health monitoring solutions.`

- [ ] **Action 3 (Canonical Tag):**
    - **Execute Change:** Add strictly inside `<head>`:
      `<link rel="canonical" href="https://microwear.info/" />`

- [ ] **Action 4 (Open Graph for Social Sharing):**
    - **Execute Change:** Add the following meta tags:
      ```html
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Microwear - Professional Smart Watch Manufacturer" />
      <meta property="og:description" content="Discover premium smartwatches and OEM solutions at Microwear." />
      <meta property="og:url" content="[https://microwear.info/](https://microwear.info/)" />
      ```

---

### 🏗️ PHASE 2: Semantic Structure & Accessibility
**Target File:** `src/pages/Home.tsx` OR `index.html` (Analyze project structure to find Homepage)

- [ ] **Action 5 (H1 Hygiene):**
    - **Scan:** Find all `<h1>` tags.
    - **Rule:** There must be ONLY ONE `<h1>` per page.
    - **Fix:** - If the Logo is wrapped in `<h1>`, change it to `<div>` or `<span>`.
      - Ensure the main Hero Text (e.g., "Leading Smart Watch Innovator") is the ONLY `<h1>`.

- [ ] **Action 6 (Image Alt Attributes):**
    - **Scan:** Find all `<img>` tags, especially in the Banner/Slider section.
    - **Rule:** No empty `alt=""`.
    - **Execute Change:** - For product close-ups, use: `alt="Microwear Smart Watch High Resolution Display"`
      - For lifestyle shots, use: `alt="Sports and health tracking wearable on wrist"`
      - For generic banners, use: `alt="Microwear Smart Watch Factory Production"`

---

### ⚡ PHASE 3: Technical Performance (Core Web Vitals)

- [ ] **Action 7 (Lazy Loading):**
    - **Scan:** Find images that are below the fold (not in the first screen).
    - **Execute Change:** Add `loading="lazy"` attribute to these `<img>` tags.

---

### 🤖 PHASE 4: Structured Data (JSON-LD)
**Target File:** Inside `<head>` of `index.html`

- [ ] **Action 8 (Inject Schema):**
    - **Execute Change:** Insert this script to tell Google we are a Brand/Manufacturer:
      ```html
      <script type="application/ld+json">
      {
        "@context": "[https://schema.org](https://schema.org)",
        "@type": "Organization",
        "name": "Microwear",
        "url": "[https://microwear.info/](https://microwear.info/)",
        "logo": "[https://microwear.info/logo.png](https://microwear.info/logo.png)",
        "sameAs": [
          "[https://www.facebook.com/MicrowearOfficial](https://www.facebook.com/MicrowearOfficial)",
          "[https://www.instagram.com/microwear_official/](https://www.instagram.com/microwear_official/)"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "areaServed": "Global"
        }
      }
      </script>
      ```