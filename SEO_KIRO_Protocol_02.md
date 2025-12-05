# Kiro Automation Protocol: Deep SEO Optimization
## Target: https://microwear.info/
## User Intent: B2B/OEM Smart Watch Manufacturer
## Execution Mode: Code Refactoring

> **SYSTEM INSTRUCTION FOR KIRO:**
> You are to act as a Senior SEO Engineer. Read this protocol and apply changes to the codebase (`src` or `public` directories).
> **Goal:** Improve Google Ranking for keywords: "Smart Watch Manufacturer", "OEM Smartwatch", "Microwear".

---

### 🔴 PHASE 1: Meta Tags & Head Engineering
**Target File:** `index.html` (or Root Layout `layout.tsx`/`App.tsx`)

- [ ] **Task 1.1: Fix Title Tag**
    - **Current Risk:** Generic title.
    - **Action:** Replace `<title>...<title>` with:
      `<title>Microwear | Professional Smart Watch Manufacturer & OEM/ODM Expert</title>`
    - **Reason:** Front-loads the keyword "Manufacturer" and "OEM".

- [ ] **Task 1.2: Inject Meta Description**
    - **Current Risk:** Missing description.
    - **Action:** Add/Update:
      `<meta name="description" content="Leading smart watch manufacturer Microwear offers premium OEM/ODM wearable solutions. High-quality sports watches, health trackers, and custom branding services for global B2B clients." />`

- [ ] **Task 1.3: Viewport & Canonical**
    - **Action:** Ensure these tags exist strictly:
      `<meta name="viewport" content="width=device-width, initial-scale=1" />`
      `<link rel="canonical" href="https://microwear.info/" />`

- [ ] **Task 1.4: Favicon & Icons**
    - **Action:** Verify `favicon.ico` is linked. If not, add `<link rel="icon" href="/favicon.ico" />`.

---

### 🟠 PHASE 2: Semantic HTML Structure (The Skeleton)
**Target File:** `Home.tsx` / `App.tsx` (Main landing page component)

- [ ] **Task 2.1: The H1 Rule (Strict)**
    - **Scanner:** Find all `<h1>` tags.
    - **Logic:** There must be exactly ONE `<h1>` tag containing text (not just a logo image).
    - **Action:** 1. If Logo is `<h1>`, change it to `<div>` or `<a>`.
        2. Wrap the main hero text (e.g., "Innovative Smart Wearables") in `<h1>`.
        3. If no text exists, create a visually hidden H1: `<h1 className="sr-only">Microwear Smart Watch Manufacturing</h1>` (assuming using Tailwind/Bootstrap).

- [ ] **Task 2.2: Image Alt Text (Accessibilty)**
    - **Scanner:** Scan all `<img>` tags.
    - **Action:** - Find images with empty `alt=""` or missing `alt`.
        - **Fix Strategy:**
            - For banner: `alt="Microwear Smart Watch Factory Production Line"`
            - For product: `alt="Latest OEM Smart Watch Model X with Health Tracking"`
            - For icons: `alt=""` (keep empty if purely decorative).

---

### 🟡 PHASE 3: Structured Data Injection (JSON-LD)
**Target File:** `index.html` (Inside `<head>`)

- [ ] **Task 3.1: Add "Organization" Schema**
    - **Action:** Paste this script before `</head>`:
    ```html
    <script type="application/ld+json">
    {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "Organization",
      "name": "Microwear",
      "url": "[https://microwear.info/](https://microwear.info/)",
      "logo": "[https://microwear.info/logo.png](https://microwear.info/logo.png)",
      "description": "Professional Smart Watch Manufacturer and OEM Service Provider",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "areaServed": "Global"
      },
      "sameAs": [
        "[https://www.facebook.com/MicrowearOfficial](https://www.facebook.com/MicrowearOfficial)",
        "[https://www.youtube.com/@Microwear](https://www.youtube.com/@Microwear)"
      ]
    }
    </script>
    ```

---

### 🟢 PHASE 4: Performance & Robots
**Target File:** Root Directory

- [ ] **Task 4.1: Robots.txt Check**
    - **Action:** Check if `public/robots.txt` exists. If not, create it with:
      ```text
      User-agent: *
      Allow: /
      Sitemap: [https://microwear.info/sitemap.xml](https://microwear.info/sitemap.xml)
      ```

- [ ] **Task 4.2: Lazy Loading**
    - **Scanner:** Find `<img>` tags below the fold (e.g., footer images, feature lists).
    - **Action:** Add `loading="lazy"` attribute.

---
**END OF PROTOCOL**