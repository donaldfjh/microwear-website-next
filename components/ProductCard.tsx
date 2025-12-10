"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useComparison } from "@/contexts/ComparisonContext";
import { useToast } from "@/contexts/ToastContext";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToComparison, canAddMore, comparisonProducts } = useComparison();
  const { showToast } = useToast();

  const isInComparison = comparisonProducts.some((p) => p.id === product.id);

  const handleAddToCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInComparison) {
      showToast("This product is already in comparison", "info");
      return;
    }

    const success = addToComparison(product);
    if (success) {
      showToast(`${product.name} added to comparison`, "success");
    } else if (!canAddMore()) {
      showToast("You can only compare up to 3 products at a time", "error");
    }
  };

  // Get key features (first 3 features)
  const keyFeatures = product.features.slice(0, 3);

  // Generate SEO-friendly alt text
  const altText = `${product.name} - ${product.category} Smartwatch with ${
    keyFeatures[0] || "Advanced Features"
  }`;

  return (
    <Link href={`/products/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-card-image">
          <Image
            src={product.images[0]}
            alt={altText}
            title={product.name}
            width={300}
            height={300}
            loading="lazy"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
          />
        </div>

        <div className="product-card-content">
          <h3 className="product-card-name">{product.name}</h3>

          <ul className="product-card-features">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button
            className={`product-card-compare-btn ${
              isInComparison ? "added" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCompare(e);
            }}
            disabled={isInComparison || (!canAddMore() && !isInComparison)}
          >
            {isInComparison ? "Added to Compare" : "Add to Compare"}
          </button>
        </div>
      </div>
    </Link>
  );
};
