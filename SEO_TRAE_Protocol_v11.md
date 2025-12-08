# Trae Protocol: Phase 11 (Technical Core & Canonicalization)
## Target: https://microwear.info/
## Status: Images (WebP/Alt) are PERFECT ✅. Trust Bar is DONE ✅.
## Goal: Fix Canonical URLs, Generate Sitemap, and Manifest.

> **SYSTEM INSTRUCTION:**
> The user has perfected the visual assets.
> Now we must fix the "Invisible Technical SEO" to consolidate ranking power.
> **Do not modify existing images.** Focus on Metadata and Scripts.

---

### 🆔 PHASE 1: Canonical Tag Enforcement
**Target File:** `index.html` (Head) OR `SEOHead.tsx` (Component)

- [ ] **Task 1.1: Self-Referencing Canonical**
    - **Context:** Prevent duplicate content issues when users share links with query parameters.
    - **Action:** Ensure this tag is present and strictly points to the clean URL.
    - **Code:**
      `<link rel="canonical" href="https://microwear.info/" />`
    - **Logic:** If you have multiple pages, ensure each page points to its own clean URL (e.g., `/products` points to `https://microwear.info/products`).

---

### 🗺️ PHASE 2: Dynamic Sitemap Generation
**Target File:** Root Directory / `public` folder

- [ ] **Task 2.1: Create `sitemap.xml`**
    - **Action:** Create a valid XML sitemap file in the `public/` folder.
    - **Content:**
      ```xml
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="[http://www.sitemaps.org/schemas/sitemap/0.9](http://www.sitemaps.org/schemas/sitemap/0.9)">
         <url>
            <loc>[https://microwear.info/](https://microwear.info/)</loc>
            <lastmod>2024-05-20</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
         </url>
         </urlset>
      ```
    - **Why:** Googlebot needs this map to find your pages efficiently.

- [ ] **Task 2.2: Update `robots.txt`**
    - **Action:** Ensure `robots.txt` points to this new sitemap.
    - **Line to Add:** `Sitemap: https://microwear.info/sitemap.xml`

---

### 📱 PHASE 3: Web App Manifest (PWA Lite)
**Target File:** `public/manifest.json` & `index.html`

- [ ] **Task 3.1: Create `manifest.json`**
    - **Action:** Create this file in `public/`.
    - **Content:**
      ```json
      {
        "short_name": "Microwear",
        "name": "Microwear Smart Watch Factory",
        "icons": [
          {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "logo192.png", 
            "type": "image/png",
            "sizes": "192x192"
          }
        ],
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#ffffff",
        "background_color": "#ffffff"
      }
      ```
    - **Note:** Trae needs to check if `logo192.png` exists; if not, use the main logo path.

- [ ] **Task 3.2: Link Manifest in Head**
    - **Action:** Add `<link rel="manifest" href="/manifest.json" />` to `index.html`.
    - **Benefit:** Allows Android users to "Add to Home Screen", making your site feel like an App.

---
**END OF PROTOCOL v11.0**