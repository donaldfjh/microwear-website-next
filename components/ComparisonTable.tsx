"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import "./ComparisonTable.css";

interface ComparisonTableProps {
  products: Product[];
  onRemoveProduct: (productId: string) => void;
}

const SPEC_GROUPS = [
  {
    title: "Display & Design",
    keys: ["display", "dimensions", "weight"],
  },
  {
    title: "Performance",
    keys: ["processor", "sensors"],
  },
  {
    title: "Battery & Power",
    keys: ["battery"],
  },
  {
    title: "Durability",
    keys: ["waterResistance"],
  },
  {
    title: "Connectivity & Compatibility",
    keys: ["connectivity", "compatibility"],
  },
];

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  products,
  onRemoveProduct,
}) => {
  const [showDifferencesOnly, setShowDifferencesOnly] = useState(false);

  if (products.length === 0) {
    return null;
  }

  // Helper function to format spec key for display
  const formatSpecKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  // Helper function to get spec value as string
  const getSpecValue = (product: Product, key: string): string => {
    const value =
      product.specifications[key as keyof typeof product.specifications];
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value?.toString() || "N/A";
  };

  // Helper function to check if values differ across products for a given spec
  const hasDifference = (key: string): boolean => {
    if (products.length <= 1) return false;
    const values = products.map((p) => getSpecValue(p, key));
    return new Set(values).size > 1;
  };

  const shouldShowRow = (key: string) => {
    if (!showDifferencesOnly) return true;
    return hasDifference(key);
  };

  return (
    <div className="comparison-table-wrapper">
      <div className="comparison-controls">
        <label className="diff-toggle">
          <input
            type="checkbox"
            checked={showDifferencesOnly}
            onChange={(e) => setShowDifferencesOnly(e.target.checked)}
          />
          Show differences only
        </label>
      </div>

      <div className="comparison-table">
        <div className="comparison-grid">
          {/* Header row with product names and images */}
          <div className="comparison-row header-row">
            <div className="spec-label-cell">Product</div>
            {products.map((product) => (
              <div key={product.id} className="product-cell">
                <button
                  className="remove-btn"
                  onClick={() => onRemoveProduct(product.id)}
                  aria-label={`Remove ${product.name} from comparison`}
                >
                  ×
                </button>
                <div className="product-image-wrapper">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    className="product-image"
                    width={150}
                    height={150}
                  />
                </div>
                <h3 className="product-name">{product.name}</h3>
              </div>
            ))}
            {products.length < 3 && (
              <div className="product-cell placeholder-cell">
                <div className="placeholder-content">
                  <div className="placeholder-icon">+</div>
                  <p>Add Product</p>
                  <Link href="/products" className="add-product-btn">
                    Browse
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Grouped Specification rows */}
          {SPEC_GROUPS.map((group) => {
            const visibleKeys = group.keys.filter(shouldShowRow);
            if (visibleKeys.length === 0) return null;

            return (
              <React.Fragment key={group.title}>
                <div className="comparison-row group-header">
                  <div className="spec-label-cell">{group.title}</div>
                  {products.map((p) => (
                    <div key={p.id} className="spec-value-cell empty"></div>
                  ))}
                  {products.length < 3 && (
                    <div className="spec-value-cell empty"></div>
                  )}
                </div>

                {visibleKeys.map((key) => (
                  <div
                    key={key}
                    className={`comparison-row ${
                      hasDifference(key) ? "has-difference" : ""
                    }`}
                  >
                    <div className="spec-label-cell">{formatSpecKey(key)}</div>
                    {products.map((product) => (
                      <div key={product.id} className="spec-value-cell">
                        {getSpecValue(product, key)}
                      </div>
                    ))}
                    {products.length < 3 && (
                      <div className="spec-value-cell"></div>
                    )}
                  </div>
                ))}
              </React.Fragment>
            );
          })}

          {/* Highlights row */}
          {!showDifferencesOnly && (
            <div className="comparison-row">
              <div className="spec-label-cell">Key Highlights</div>
              {products.map((product) => (
                <div key={product.id} className="spec-value-cell">
                  <ul className="highlights-list">
                    {product.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {products.length < 3 && <div className="spec-value-cell"></div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
