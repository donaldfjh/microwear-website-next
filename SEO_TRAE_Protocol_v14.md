# Trae Protocol: Phase 14 (Audit Fixes & Contrast)
## Target: https://microwear.info/
## Based on: Lighthouse Report JSON (Score 100 SEO / 95 A11y)
## Goal: Fix Color Contrast & Heading Hierarchy to reach 100/100 across the board.

> **SYSTEM INSTRUCTION:**
> The user achieved 100 SEO score! 
> However, Accessibility failed on "Color Contrast" and "Heading Order".
> We need to darken some colors and fix HTML semantic tags.

---

### 🎨 PHASE 1: Color Contrast Repair (Accessibility)
**Target File:** CSS / Tailwind Config / Specific Components

- [ ] **Task 1.1: Darken Primary Blue Text**
    - **Issue:** The text color `#667eea` (likely a light indigo) is too light on white backgrounds.
    - **Action:** Replace it with a darker shade, e.g., `#4c51bf` (Indigo-700) or `#434190` (Indigo-800).
    - **Target Class:** `.seo-text-paragraph strong` or relevant text class.

- [ ] **Task 1.2: Darken Button Background**
    - **Issue:** The "Add to Compare" button background `#007bff` is slightly too light for white text.
    - **Action:** Change the button background color to `#0056b3` or Tailwind `bg-blue-700`.
    - **Target:** `.home-product-card-compare-btn`.

---

### 🏗️ PHASE 2: Heading Hierarchy Fix
**Target File:** `Home.tsx` (Core Specs Section)

- [ ] **Task 2.1: Fix "Core Specs" Heading**
    - **Issue:** Lighthouse flagged `<h3 class="core-specs__title">` as skipping a level.
    - **Action:** - Check the parent container.
        - If the section title is `H3`, change it to `H2`.
        - Ensure the hierarchy flows: H1 (Main Title) -> H2 (Section Title) -> H3 (Sub-section/Card Title).
    - **Code Change:** `<h2 class="core-specs__title">...</h2>`

---

### 🧪 PHASE 3: Production Build Preparation
**Target:** `package.json` / Terminal

- [ ] **Task 3.1: Verify Table Existence**
    - **Context:** Previous Phase 12 asked for a Spec Table.
    - **Action:** Ensure the `<table>` with "Display Type", "Waterproof Level" exists in the code.

---
**END OF PROTOCOL v14.0**