# Trae Protocol: Phase 14 (Competitor Analysis & Content Depth)
## Target: https://microwear.info/
## Goal: Outrank competitors by matching "Top 10" content depth & utility.
## Executor: Trae (AI Agent)

> **SYSTEM INSTRUCTION:**
> Based on Google top 5 search results analysis, the site lacks "Comparative Value" and "Trend Authority".
> We must add a "Comparison Table" and a "2025 Trend Guide" to the homepage.

---

### 📊 PHASE 1: The "Competitor Crusher" Table
**Target File:** `Home.tsx` (Insert after the new Spec Table)

- [ ] **Task 1.1: Create Comparison Section**
    - **Concept:** "Microwear Standards vs. Market Average".
    - **Action:** Create a responsive comparison table component.
    - **Data Structure:**
      | Feature | Microwear OEM Standard | Typical Market Standard |
      | :--- | :--- | :--- |
      | **Waterproof** | Real IP68 (Vacuum Tested) | IP67 or Fake IP68 |
      | **Battery** | 450mAh (7-10 Days) | 280mAh (3-5 Days) |
      | **Sensors** | High-Precision Health Monitor | Basic G-Sensor |
      | **Warranty** | 12-24 Months | 6 Months |
    - **Styling:** Use green checks (✅) for Microwear and gray dashes (-) for Market. High contrast header.

---

### 🔮 PHASE 2: The "2025 Trend" Injection
**Target File:** `Home.tsx` (Hero Section or dedicated Trend Section)

- [ ] **Task 2.1: Update Headlines for Freshness**
    - **Scanner:** Find headings mentioning "Latest Models" or similar.
    - **Action:** Append "2025" to them.
        - *Example:* "Latest Smart Watch Models" -> "Latest **2025** OEM Smart Watch Models".
    - **Why:** Google favors "fresh" content for queries like "new smart watch".

- [ ] **Task 2.2: Add "Why Choose Us" Trend Icons**
    - **Action:** Add a row of 3-4 feature icons/blurbs highlighting 2025 trends:
        - **AI Voice Assistant** (Icon: Microphone)
        - **Non-Invasive Glucose** (Icon: Health)
        - **AMOLED Always-On** (Icon: Eye/Sun)
    - **Text:** Short 2-line explanation for each, emphasizing these are "Ready for Mass Production".

---

### 🧠 PHASE 3: The "Buying Guide" FAQ Expansion
**Target File:** `FAQSection.tsx` (or where FAQ is located)

- [ ] **Task 3.1: Add "People Also Ask" Questions**
    - **Source:** Google PAA box.
    - **Action:** Append these 2 questions to your existing FAQ list (and update Schema):
        1. **Q:** "How to verify a smart watch manufacturer in China?"
           **A:** "Look for ISO9001, BSCI audits, and request a factory video tour. Microwear welcomes on-site inspections..."
        2. **Q:** "What is the difference between OEM and ODM?"
           **A:** "OEM prints your logo on existing models (Microwear Series). ODM builds a new design from scratch. We support both."

---
**END OF PROTOCOL v14.0**