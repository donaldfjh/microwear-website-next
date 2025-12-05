# Kiro Automation Protocol: Phase 3 (Conversion & Content Depth)
## Target: https://microwear.info/
## Goal: Increase B2B Inquiry Rate & Keyword Density
## Executor: Kiro (AI Agent)

> **CONTEXT:**
> The technical SEO foundation is set. Now we need to improve the "Text-to-HTML Ratio" (Google needs text to read) and add conversion elements (CTAs) to turn visitors into leads.

---

### 🔵 PHASE 1: The "SEO Text Block" Injection
**Target File:** `Home.tsx` or the main landing page component.
**Logic:** Most B2B sites are too image-heavy. We need a text-rich section for keywords like "OEM", "Factory", "Supply Chain".

- [ ] **Task 1.1: Insert "Why Choose Us" Section**
    - **Location:** Place this AFTER the main Hero Banner/Slider but BEFORE the product list.
    - **Action:** Create a new section/component with a clean white background.
    - **Content to Inject (Strictly use this text):**
      ```tsx
      <section className="seo-text-block py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Trusted Smart Watch Manufacturer & OEM Partner</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            As a leading <strong>smart watch manufacturer</strong> based in China, Microwear specializes in providing top-tier wearable technology solutions for global brands. With over 10 years of expertise in <strong>smartwatch OEM/ODM services</strong>, we control the entire supply chain from R&D to final assembly.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are looking for health-tracking wearables, GPS sports watches, or budget-friendly fitness trackers, our factory ensures rigorous quality control (ISO certified) and competitive wholesale pricing. Partner with Microwear to scale your wearable business today.
          </p>
        </div>
      </section>
      ```
    - **Styling:** Ensure it uses the project's existing CSS framework (Tailwind/Bootstrap) to look native.

---

### 🟣 PHASE 2: Conversion Optimization (The "Sticky" CTA)
**Target File:** `App.tsx` or `Layout.tsx` (Global scope)

- [ ] **Task 2.1: Add Floating WhatsApp/Inquiry Button**
    - **Action:** Create a fixed position button at the bottom-right corner of the screen.
    - **Visual:** A distinct color (e.g., Green for WhatsApp or Blue for Inquiry).
    - **Code Logic (Concept):**
      ```tsx
      <a 
        href="[https://wa.me/YOUR_NUMBER_HERE?text=I'm%20interested%20in%20Microwear%20OEM%20Service](https://wa.me/YOUR_NUMBER_HERE?text=I'm%20interested%20in%20Microwear%20OEM%20Service)" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        <span>Chat with Factory</span>
        {/* Insert WhatsApp Icon SVG here */}
      </a>
      ```
    - **Note:** Ask the user to replace `YOUR_NUMBER_HERE` later.

---

### 🟠 PHASE 3: Internal Linking (Silo Structure)
**Target File:** `Footer.tsx` or `Home.tsx`

- [ ] **Task 3.1: Enhance Footer Keywords**
    - **Action:** In the Footer link section, ensure we have explicit anchor texts targeting our niches.
    - **Update Links:**
      - Change "Products" to "All Smart Watches"
      - Add a link: "OEM/ODM Services" (even if it points to a contact section for now)
      - Add a link: "Wearable Solutions"

---

### 🟢 PHASE 4: Image Optimization Check (Speed)
**Target File:** Root Directory / Config

- [ ] **Task 4.1: Modern Format Check**
    - **Scanner:** Check if we are serving JPG/PNG.
    - **Analysis:** Suggest (in comments) if we should convert logos/banners to WebP.
    - **Action:** If using `next/image` (Next.js), ensure `priority` is set to `true` for the LCP (Largest Contentful Paint) image (the top banner).

---
**END OF PROTOCOL v3.0**