"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useComparison } from "@/contexts/ComparisonContext";
import "./FloatingComparisonBar.css";

export const FloatingComparisonBar: React.FC = () => {
  const { comparisonProducts, clearComparison, showDiffOnly, toggleDiffOnly } =
    useComparison();
  const pathname = usePathname();

  // Hide the bar if there are no products or if we are on the comparison page
  if (comparisonProducts.length === 0 || pathname === "/comparison") {
    return null;
  }

  return (
    <div className="floating-comparison-bar">
      <div className="comparison-bar-container">
        <div className="comparison-bar-left">
          <span className="comparison-count">
            Comparing ({comparisonProducts.length}/3)
          </span>
          <div className="comparison-bar-products">
            {comparisonProducts.map((product) => (
              <div key={product.id} className="comparison-bar-product">
                <div className="comparison-bar-image">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="rounded-image"
                  />
                </div>
              </div>
            ))}
            {Array.from({ length: 3 - comparisonProducts.length }).map(
              (_, i) => (
                <div key={`empty-${i}`} className="comparison-bar-empty-slot">
                  {/* <span>Add Product</span> */}
                </div>
              )
            )}
          </div>
        </div>

        <div className="comparison-bar-center">
          <div className="diff-toggle">
            <span className="diff-label">Diff only</span>
            <label className="toggle-switch-small">
              <input
                type="checkbox"
                checked={showDiffOnly}
                onChange={toggleDiffOnly}
                aria-label="Toggle diff only"
              />
              <span className="toggle-slider-small"></span>
            </label>
          </div>
        </div>

        <div className="comparison-bar-right">
          <button className="comparison-clear-btn" onClick={clearComparison}>
            Clear All
          </button>
          <Link href="/comparison" className="comparison-bar-action">
            Compare Now
          </Link>
        </div>
      </div>
    </div>
  );
};
