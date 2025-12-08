"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useComparison } from "@/contexts/ComparisonContext";
import "./HomeProductCard.css";

interface HomeProductCardProps {
  product: Product;
}

export const HomeProductCard: React.FC<HomeProductCardProps> = ({
  product,
}) => {
  const { addToComparison, canAddMore, comparisonProducts } = useComparison();

  const isInComparison = comparisonProducts.some((p) => p.id === product.id);

  const handleAddToCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInComparison) {
      return;
    }

    const success = addToComparison(product);
    if (!success && !canAddMore()) {
      alert("You can only compare up to 3 products at a time.");
    }
  };

  // Get key features (first 3 features)
  const keyFeatures = product.features.slice(0, 3);

  // Generate SEO-friendly alt text
  const altText = `${product.name} - ${product.category} Smartwatch with ${
    keyFeatures[0] || "Advanced Features"
  }`;

  return (
    <Link href={`/products/${product.id}`} className="home-product-card-link">
      <div className="home-product-card">
        <div className="home-product-card-image">
          <Image
            src={product.images[0]}
            alt={altText}
            title={product.name}
            width={300}
            height={300}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
          />
        </div>

        <div className="home-product-card-content">
          <h3 className="home-product-card-name">{product.name}</h3>

          <ul className="home-product-card-features">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button
            type="button"
            className={`home-product-card-compare-btn ${
              isInComparison ? "added" : ""
            }`}
            onClick={handleAddToCompare}
            disabled={isInComparison || (!canAddMore() && !isInComparison)}
          >
            {isInComparison ? "Added to Compare" : "Add to Compare"}
          </button>
        </div>
      </div>
    </Link>
  );
};
