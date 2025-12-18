"use client";

import React from "react";
import Link from "next/link";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useComparison } from "@/contexts/ComparisonContext";
import "./ComparisonPage.css";

export default function ComparisonPage() {
  const {
    comparisonProducts,
    removeFromComparison,
    clearComparison,
    showDiffOnly,
    toggleDiffOnly,
  } = useComparison();

  const handleRemoveProduct = (productId: string) => {
    removeFromComparison(productId);
  };

  const handleClearAll = () => {
    clearComparison();
  };

  if (comparisonProducts.length === 0) {
    return (
      <div className="comparison-page">
        <ScrollReveal>
          <div className="comparison-header">
            <div className="header-content">
              <div className="header-text">
                <h1>Compare Products</h1>
                <p>Comparing 0 of 3 selected products</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="empty-comparison">
            <svg
              className="empty-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <h2>No products to compare</h2>
            <p>
              Start adding products to your comparison list to see them side by
              side. You can compare up to 3 products at once.
            </p>
            <Link href="/products" className="browse-btn">
              Browse Products
            </Link>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="comparison-page">
      <ScrollReveal>
        <div className="comparison-header">
          <div className="header-content">
            <div className="header-text">
              <h1>Compare Products</h1>
              <p>
                Comparing {comparisonProducts.length} of 3 selected products
              </p>
            </div>
            <div className="header-actions">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={showDiffOnly}
                  onChange={toggleDiffOnly}
                />
                <span className="toggle-slider"></span>
                <span className="toggle-label">Show differences only</span>
              </label>
              <button className="clear-all-btn" onClick={handleClearAll}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="comparison-content">
          <ComparisonTable
            products={comparisonProducts}
            onRemoveProduct={handleRemoveProduct}
            showDifferencesOnly={showDiffOnly}
          />

          {comparisonProducts.length < 3 && (
            <div className="add-more-notice">
              <svg
                className="info-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>
                You can add {3 - comparisonProducts.length} more product
                {3 - comparisonProducts.length !== 1 ? "s" : ""} to your
                comparison.
              </span>
              <Link href="/products" className="add-more-btn">
                Add More Products
              </Link>
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
