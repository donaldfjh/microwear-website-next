"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import "./HomeProductCard.css";

interface HomeProductCardProps {
  product: Product;
}

export const HomeProductCard: React.FC<HomeProductCardProps> = ({
  product,
}) => {
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
          <div className="moq-badge">MOQ: 500 Pcs</div>
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
            className="home-product-card-compare-btn"
            onClick={(e) => {
              e.preventDefault(); // Prevent link navigation
              // Add inquire logic here, e.g., redirect to contact with product param
              window.location.href = `/contact?product=${product.id}`;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "8px" }}
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Inquire This Model
          </button>
        </div>
      </div>
    </Link>
  );
};
