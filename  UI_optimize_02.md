# Trae Protocol: Phase 16 (B2B Product Specifications UI)

**Target:** Product Detail Page (or Homepage Featured Product)
**Goal:** Replace generic "Features" with "Technical Specs Table" & "OEM Options".
**Executor:** Trae (AI Agent)

---

## 🛑 SYSTEM INSTRUCTION
The current product details are too retail-focused. B2B buyers need hard technical data and customization capabilities.
**Objective:** Implement a structured **Tabbed Interface** for Specs vs. Customization.

---

## 📊 PHASE 1: Data Structuring
**Target File:** `types/ProductData.ts` or `types/index.ts`

- [ ] **Task 1.1: Standardize Spec Keys**
  Ensure every product object includes these specific B2B keys (Standardized TypeScript Interface):
  - **Chipset:** (e.g., Realtek/Jieli)
  - **Screen:** Size & Resolution
  - **Battery:** Capacity (mAh)
  - **Waterproof:** Rating (IP68/5ATM)
  - **App Name:** (e.g., FitCloudPro)
  - **Certification:** (CE/RoHS/FCC)

---

## 💻 PHASE 2: UI Implementation (The Specs Component)
**Target File:** `components/ProductSpecs.tsx` (New Component)

- [ ] **Task 2.1: Implement Tabbed Layout**
  Create a Tabs component with two distinct views:
  1.  **Technical Specs Tab:** Display a clean, zebra-striped table (`odd:bg-gray-50`) for key-value pairs. High readability is the priority.
  2.  **OEM Customization Tab:** Display a Grid layout with Icons + Text for options like "Laser Logo", "Strap Color", "Boot Screen", "Gift Box".

- [ ] **Task 2.2: Add "Download Datasheet" Button**
  - **Placement:** Top right of the Tab headers or section title.
  - **Style:** Secondary/Outline style (distinct from the main "Inquire" button).
  - **Icon:** Visible PDF/Download icon.

---

## 🌟 PHASE 3: Feature Highlights (Right Sidebar)
**Target File:** `components/ProductSpecs.tsx`

- [ ] **Task 3.1: Add "Why This Model" Box**
  - **Action:** Create a highlighted box (dark background/high contrast) adjacent to the table (on Desktop) or stacked (on Mobile).
  - **Content:** List 3 Unique Selling Points (USPs) specifically for distributors (e.g., "Lowest return rate", "High profit margin", "Market trending design").

---

## 🚀 EXECUTION PROMPT (Copy & Paste to Trae)

> **Use the following prompt to execute Phase 16:**

```text
# Role
Act as a Senior Frontend Developer specialized in B2B E-commerce interfaces.

# Context
We are executing Phase 16: Replacing retail-style features with a Data-Heavy Technical Specifications component.

# Task
Create a new component `components/ProductSpecs.tsx`.

# Requirements

## 1. Data Structure
Define this TypeScript interface for the component props:
interface B2BProductSpecs {
  technical: {
    chipset: string;
    screen: string;
    battery: string;
    waterproof: string;
    appName: string;
    certification: string;
    materials: string;
  };
  oemOptions: {
    laserLogo: boolean;
    bootScreen: boolean;
    customStrap: boolean;
    giftBox: boolean;
    appSdk: boolean;
  };
  usps: string[]; // Array of 3 strings for the sidebar
}

## 2. UI/UX Logic
- **Layout:** Use a 2-Column layout for Desktop (Main Content vs. Sidebar).
- **Tabs:** Implement a stateful tab switch between "Technical Specs" and "OEM Customization".
- **Specs Tab:** Render a zebra-striped table. Text should be legible and dense (not too much whitespace).
- **OEM Tab:** Render a Grid of cards/icons showing available customization options.
- **Sidebar:** A "Distributor Highlights" box with a dark background and light text, listing the `usps`.
- **CTA:** Include a "Download Datasheet" button (Outline style) near the header.

## 3. Styling
- Use Tailwind CSS.
- Ensure the design looks professional, trustworthy, and industrial (B2B style).

# Action
Generate the full code for `components/ProductSpecs.tsx`, including mock data to demonstrate the layout.