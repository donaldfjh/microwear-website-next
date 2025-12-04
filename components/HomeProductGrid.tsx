"use client";

import React from "react";
import { HomeProductCard } from "./HomeProductCard";
import type { Product } from "@/types/product";
import "./HomeProductGrid.css";

interface HomeProductGridProps {
  products: Product[];
}

export const HomeProductGrid: React.FC<HomeProductGridProps> = ({
  products,
}) => {
  if (products.length === 0) {
    return (
      <div className="home-product-grid-empty">
        <p>No products found</p>
      </div>
    );
  }

  return (
    <div className="home-product-grid">
      {products.map((product) => (
        <HomeProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
