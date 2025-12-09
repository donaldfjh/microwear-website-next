# Next.js B2B Website Lighthouse Optimization Master Plan

**Goal**: Based on the `localv2.json` report, boost the performance score from 87 to 95+ and resolve critical SEO and Accessibility issues.
**Execution Mode**: @Trae, please read this file and use it as your execution blueprint.

---

## Phase 1: JavaScript Reduction & TTI Optimization (Priority: Highest)
**Context**: `main-app.js` execution time is too long, causing TTI to hit 12s. `layout.js` has 90% unused code during initial load.
**Tasks**:
1.  **Analyze `app/layout.js`**: Identify components not immediately required for the First Contentful Paint (e.g., `Footer`, `ChatWidget`, `NewsletterPopup`).
2.  **Implement Lazy Loading**: Refactor these components to use `next/dynamic`.
    ```javascript
    // Example
    const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
    ```
3.  **Check `app/page.js`**: Apply the same dynamic import strategy to heavy components located "below the fold" (e.g., `ProductsGrid`, `Testimonials`).

## Phase 2: Critical Accessibility Fixes (Priority: High)
**Context**: The "Contact Factory Now" button has an insufficient contrast ratio (3.66), affecting B2B inquiry conversions.
**Tasks**:
1.  **Locate Component**: Search for the button component containing the text "Contact Factory Now".
2.  **Modify Styles**:
    * If using Tailwind: Darken the background color (e.g., change `bg-blue-500` to `bg-blue-600` or `bg-blue-700`).
    * If using CSS Modules: Update the `background-color` hex code to ensure the contrast ratio against white text is > 4.5:1.

## Phase 3: SEO Semantic Structure Correction (Priority: Medium)
**Context**: Heading hierarchy is disordered, skipping directly from H1 to H4.
**Tasks**:
1.  **Refactor `app/page.js`**:
    * Ensure a unique, main `<h1>` exists for the page.
    * Identify tags incorrectly used as `<h4>` (e.g., "Display Type" or parameter titles).
    * Change them to `<h2>` or `<h3>` to maintain a logical hierarchy.
    * If the tag is used purely for styling, replace it with a `<div>` or `<p>` with appropriate CSS classes (e.g., `<p class="text-xl font-bold...">`) to avoid abusing semantic heading tags.

## Phase 4: LCP Image & Resource Optimization (Priority: Medium)
**Context**: `w11poverall.webp` has a high rendering delay; certificate images have mismatched physical vs. displayed dimensions.
**Tasks**:
1.  **LCP Optimization**: Locate the `w11poverall.webp` reference in the Home/Hero section.
    * Ensure the `<Image />` component is used.
    * Add the `priority={true}` property.
    * Add `sizes="100vw"` or specific responsive sizes.
2.  **Certificate Images**: Locate ISO9001 and other certificate images.
    * Adjust `width` and `height` properties to match the rendered size (approx. 141x200), or ensure image optimization is properly configured in `next.config.js`.

## Phase 5: BF Cache (Back/Forward Cache) Fix
**Context**: WebSocket connections are preventing the browser from using the Back/Forward Cache.
**Tasks**:
1.  **Refactor Socket Logic**: Locate the code establishing WebSocket connections (usually in a `useEffect` hook or Global Context).
2.  **Delay Initialization**: Modify the logic to prevent immediate connection on mount. Change it to use `setTimeout` (delay 3-5 seconds) or initialize only after user interaction (e.g., scroll, click).

---
**Post-Execution**: Run `npm run build` to ensure there are no build errors.