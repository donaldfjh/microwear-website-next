"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import "./ComparisonTable.css";

interface ComparisonTableProps {
  products: Product[];
  onRemoveProduct: (productId: string) => void;
  showDifferencesOnly?: boolean;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  products,
  onRemoveProduct,
  showDifferencesOnly = false,
}) => {
  if (products.length === 0) {
    return null;
  }

  // Define spec groups for better organization
  const SPEC_GROUPS = [
    {
      title: "Display & Design",
      keys: ["display", "dimensions", "weight", "waterResistance"],
    },
    {
      title: "Performance",
      keys: ["processor", "battery", "connectivity", "compatibility"],
    },
    {
      title: "Sensors & Features",
      keys: ["sensors"],
    },
  ];

  // Helper function to format spec key for display
  const formatSpecKey = (key: string): string => {
    // Map specific keys to display names if needed
    const keyMap: Record<string, string> = {
      display: "Display Spec",
      dimensions: "Dimensions",
      weight: "Weight",
      waterResistance: "Water Resistance",
      processor: "Processor",
      battery: "Battery Life",
      connectivity: "Connectivity",
      compatibility: "Compatibility",
      sensors: "Sensors",
    };

    return (
      keyMap[key] ||
      key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim()
    );
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

  return (
    <div className="comparison-table">
      <div className="comparison-grid">
        {/* Header row with product names and images */}
        <div className="comparison-row header-row">
          <div className="spec-label-cell"></div>
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
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <Link href={`/products/${product.id}`} className="inquire-btn">
                Inquire
              </Link>
            </div>
          ))}
        </div>

        {/* Grouped Specification rows */}
        {SPEC_GROUPS.map((group) => {
          // Filter keys based on showDifferencesOnly
          const visibleKeys = group.keys.filter(
            (key) => !showDifferencesOnly || hasDifference(key)
          );

          if (visibleKeys.length === 0) return null;

          return (
            <React.Fragment key={group.title}>
              <div className="group-header">{group.title.toUpperCase()}</div>
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
                      <span className="spec-value">
                        {getSpecValue(product, key)}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
