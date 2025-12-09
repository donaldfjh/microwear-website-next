# Trae Protocol: Phase 13 (Accessibility Polish & Performance Prep)
## Target: https://microwear.info/
## Based on: Lighthouse Report JSON (Score 100/100/95/87)
## Goal: Fix Color Contrast & Heading Hierarchy to reach 100/100/100.

> **SYSTEM INSTRUCTION:**
> The user has achieved a perfect 100 SEO score.
> The remaining issues are strictly related to Accessibility (Color Contrast, Heading Order).
> We will also add a performance tweak for the LCP image.

---

### 🎨 PHASE 1: Accessibility - Color Contrast
**Target File:** CSS / Tailwind Classes / `Home.tsx`

- [ ] **Task 1.1: Darken Primary Text Color**
    - **Issue:** The text color `#667eea` (likely used for "smart watch manufacturer") has a contrast ratio of 3.5. We need at least 4.5:1.
    - **Action:** Find where this color is used (likely a Tailwind class like `text-indigo-500`) and change it to a darker shade.
    - **Fix:** Change to `text-indigo-700` (approx hex `#434190`) or simply `#3730a3`.

- [ ] **Task 1.2: Fix Button Contrast**
    - **Issue:** The "Add to Compare" button text (White) on Blue background (`#007bff`) has a ratio of 3.97.
    - **Action:** Darken the button background.
    - **Fix:** Change background color to `#0056b3` (or Tailwind `bg-blue-700`).

---

### 🏗️ PHASE 2: Accessibility - Heading Hierarchy
**Target File:** `Home.tsx` (Core Specs Section)

- [ ] **Task 2.1: Fix Skipped Heading Level**
    - **Issue:** The element `<h3 class="core-specs__title">` appears without a preceding `<h2>`.
    - **Action:** Change this `<h3>` tag to `<h2>`.
    - **Logic:** H1 -> H2 -> H2 -> H2. Do not jump from H1 to H3.

---

### 🚀 PHASE 3: Performance - LCP Optimization
**Target File:** `Home.tsx` (Hero Section)

- [ ] **Task 3.1: Explicit Preload for LCP Image**
    - **Issue:** The main hero image is the Largest Contentful Paint (LCP) element.
    - **Action:** Ensure the Next.js `<Image />` component for the hero banner has the `priority` prop.
    - **Code:** `<Image src="..." priority={true} ... />`
    - **Why:** This tells the browser to load this image immediately, boosting the Performance score in production.

---

### 🧹 PHASE 4: Production Build Check
**Target:** Terminal / Build Process

- [ ] **Task 4.1: Reminder (No Code Change)**
    - **Note:** The current Performance score (87) is due to "Unminified JavaScript" in Development Mode.
    - **Action:** User must run `npm run build` and `npm run start` to see the true score.

---
**END OF PROTOCOL v13.0**