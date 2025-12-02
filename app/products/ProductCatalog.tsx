"use client";

import React, { useState, useCallback } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterPanel } from "@/components/FilterPanel";
import { ProductGrid } from "@/components/ProductGrid";
import type { Product } from "@/types/product";
import { searchProducts } from "@/utils/search";
import { filterProducts } from "@/utils/filters";
import { useRouter } from "next/navigation";
import "./ProductCatalogPage.css";

interface ProductFilters {
  priceRange?: { min: number; max: number };
  features?: string[];
  category?: string;
}

interface ProductCatalogProps {
  products: Product[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ products }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<ProductFilters>({});

  // Apply search and filters to get displayed products
  const getFilteredProducts = useCallback(() => {
    // First apply search
    let result = searchProducts(products, searchQuery);

    // Then apply filters
    result = filterProducts(result, filters);

    return result;
  }, [products, searchQuery, filters]);

  const filteredProducts = getFilteredProducts();

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleFilterChange = useCallback((newFilters: ProductFilters) => {
    setFilters(newFilters);
  }, []);

  const handleProductClick = (productId: string) => {
    // Navigate to product detail page using Next.js router
    router.push(`/products/${productId}`);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    filters.priceRange !== undefined ||
    (filters.features && filters.features.length > 0);

  return (
    <div className="product-catalog-page">
      <div className="catalog-header">
        <h1>Product Catalog</h1>
        <p>Discover our collection of premium smartwatches</p>
      </div>

      <div className="catalog-container">
        <aside className="catalog-sidebar">
          <FilterPanel onFilterChange={handleFilterChange} />
        </aside>

        <main className="catalog-main">
          <div className="catalog-search">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="catalog-results">
            {filteredProducts.length > 0 ? (
              <>
                <div className="results-count">
                  {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? "s" : ""} found
                </div>
                <ProductGrid
                  products={filteredProducts}
                  onProductClick={handleProductClick}
                />
              </>
            ) : (
              <div className="empty-results">
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <h2>No products found</h2>
                <p>
                  {hasActiveFilters
                    ? "Try adjusting your search or filters to find what you're looking for."
                    : "No products are currently available."}
                </p>
                {hasActiveFilters && (
                  <button
                    className="clear-all-btn"
                    onClick={() => {
                      setSearchQuery("");
                      setFilters({});
                    }}
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
