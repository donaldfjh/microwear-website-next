# Trae Protocol: Phase 13 (Keyword Domination: "Smart Watch")
## Target: https://microwear.info/
## Goal: Maximize ranking for "Smart Watch" & "OEM Smartwatch"
## Executor: Trae (AI Agent)

> **SYSTEM INSTRUCTION:**
> The technical foundation is perfect. Now we must optimize the CONTENT text.
> **Key Objective:** Increase the frequency and relevance of the keyword "Smart Watch" without spamming.
> **Action Area:** Headings, Spec Tables, and Link Text.

---

### 🗣️ PHASE 1: Heading Surgery (H2/H3 Optimization)
**Target File:** `Home.tsx` / `ProductSection.tsx`

- [ ] **Task 1.1: Rename Generic Headings**
    - **Scanner:** Find generic headings like `<h2>Our Products</h2>` or `<h2>New Arrivals</h2>`.
    - **Action:** Rewrite them to include the core keyword.
    - **Replacements:**
        - Change "Our Products" to → `<h2>Premium OEM Smart Watch Collections</h2>`
        - Change "New Arrivals" to → `<h2>Latest 2025 Smart Watch Models</h2>`
        - Change "About Us" to → `<h2>About Microwear Smart Watch Factory</h2>`
    - **Why:** H2 tags carry huge SEO weight.

---

### 📊 PHASE 2: The "Spec Sheet" Injection (Google Candy)
**Target File:** `Home.tsx` (Insert below the Hero Banner or inside a "Featured Product" section)

- [ ] **Task 2.1: Create a Comparison/Spec Table**
    - **Context:** Google loves `<table>` tags for technical products.
    - **Action:** Insert a clean, responsive table showing generic specs of your top series.
    - **Content Logic:**
      ```tsx
      <div className="py-8 px-4 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Microwear Smart Watch Specifications</h3>
        <table className="w-full border-collapse border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Feature</th>
              <th className="border p-2">Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">Display Type</td>
              <td className="border p-2">AMOLED / IPS HD Screen (1.9" - 2.2")</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Health Monitoring</td>
              <td className="border p-2">Heart Rate, ECG, Blood Oxygen (SpO2), Sleep Tracking</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Waterproof Level</td>
              <td className="border p-2">IP68 / 5ATM Water Resistant</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Compatibility</td>
              <td className="border p-2">Android & iOS (Custom App Support)</td>
            </tr>
          </tbody>
        </table>
      </div>
      ```
    - **SEO Benefit:** Captures keywords like "AMOLED", "IP68", "ECG".

---

### 🔗 PHASE 3: Anchor Text Optimization
**Target File:** `Navbar.tsx`, `Footer.tsx`, `Home.tsx`

- [ ] **Task 3.1: Fix Link Labels**
    - **Scanner:** Look for generic buttons like "View More" or "Products".
    - **Action:** Update the text (labels/aria-labels) to be specific.
    - **Updates:**
        - "Products" → "Smart Watches"
        - "Contact Us" → "Contact Factory"
        - "View More" → "View All Smart Watches"
    - **Why:** Tells Google what the destination page is actually about.

---

### 📝 PHASE 4: Semantic Keyword Injection
**Target File:** `Home.tsx` (Introduction Paragraph)

- [ ] **Task 4.1: Natural Keyword Weaving**
    - **Action:** Find the introductory text block (added in Phase 3).
    - **Update:** Ensure these LSI keywords exist naturally in the text:
      - "Bluetooth Calling"
      - "Wearable Technology"
      - "Fitness Tracker"
      - "Custom Logo Printing"
      - "Smart Watch Supply Chain"

---
**END OF PROTOCOL v13.0**