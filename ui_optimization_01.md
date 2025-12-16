# Trae Protocol: Phase 15 (B2B Identity & UI Overhaul)
## Target: https://microwear.info/
## Goal: Transform the visual identity from "Retail Store" to "OEM Factory".
## Executor: Trae (AI Agent)

> **SYSTEM INSTRUCTION:**
> The current UI looks too much like a B2C e-commerce site. 
> We need to establish B2B authority immediately upon page load.
> Focus on CTAs, Banner messaging, and Trust Signals.

---

### 🏭 PHASE 1: Hero Section Reconstruction
**Target File:** `Home.tsx` / `HeroSection.tsx`

- [ ] **Task 1.1: Update Value Proposition**
    - **Action:** Change the main headline (H1) text.
    - **Old:** "Microwear Smart Watches" (or similar generic text)
    - **New:** "Professional Smart Watch Manufacturer & OEM/ODM Solutions"
    - **Sub-headline:** "10 Years Experience | ISO9001 Certified | 500+ Global Partners"

- [ ] **Task 1.2: Upgrade CTA Buttons**
    - **Action:** Replace the primary button in the Hero section.
    - **Old:** "Shop Now" / "Learn More"
    - **New:** **"Get Free Quote"** (Primary) and **"Download Catalog"** (Secondary/Outline style).

---

### 🛒 PHASE 2: Product Card B2B Logic
**Target File:** `ProductCard.tsx` / `FeaturedProducts.tsx`

- [ ] **Task 2.1: Remove Retail Signals**
    - **Action:** Hide/Remove any "Price" tags (e.g., "$50.00") from the homepage listings. B2B prices are negotiable.
    - **Logic:** If `price` exists, replace it with `"MOQ: 500 Pcs"` or `"Wholesale Only"`.

- [ ] **Task 2.2: Change Action Buttons**
    - **Action:** Find buttons with class `home-product-card-compare-btn` or text "Add to Cart".
    - **Change to:** Text: "Inquire This Model", Icon: Envelope/Chat.

---

### 🏆 PHASE 3: Trust Bar Injection
**Target File:** `Home.tsx`

- [ ] **Task 3.1: Move Certifications Up**
    - **Action:** Move the `CertificationSection` component to be immediately below the `HeroSection`.
    - **Styling:** Add a light gray background (`bg-gray-50`) to make it stand out as a distinct section.

---
**END OF PROTOCOL v15.0**