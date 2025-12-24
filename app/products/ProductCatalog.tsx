"use client";

import React, { useState, useCallback } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterPanel } from "@/components/FilterPanel";
import { ProductGrid } from "@/components/ProductGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SEOTextBlock } from "@/components/SEOTextBlock";
import type { Product } from "@/types/product";
import { searchProducts } from "@/utils/search";
import { filterProducts } from "@/utils/filters";
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

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    filters.priceRange !== undefined ||
    (filters.features && filters.features.length > 0);

  const pageTitle = filters.category ? filters.category : "Product Catalog";
  const pageDescription =
    filters.category === "AI Glasses"
      ? "Next-generation smart glasses with AI assistant and AR capabilities"
      : "Discover our collection of premium smartwatches";

  return (
    <div className="product-catalog-page">
      <ScrollReveal>
        <div className="catalog-header">
          <h1>{pageTitle}</h1>
          <p>{pageDescription}</p>
        </div>
      </ScrollReveal>

      <div className="catalog-container">
        <aside className="catalog-sidebar">
          <ScrollReveal delay={0.1}>
            <FilterPanel onFilterChange={handleFilterChange} />
          </ScrollReveal>
        </aside>

        <main className="catalog-main">
          <ScrollReveal delay={0.2}>
            <div className="catalog-search">
              <SearchBar onSearch={handleSearch} />
            </div>
          </ScrollReveal>

          <div className="catalog-results">
            {filteredProducts.length > 0 ? (
              <>
                <ScrollReveal delay={0.3}>
                  <div className="results-count">
                    {filteredProducts.length} product
                    {filteredProducts.length !== 1 ? "s" : ""} found
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <ProductGrid products={filteredProducts} />
                </ScrollReveal>

                {/* Inject SEO Block at the bottom of the list */}
                <ScrollReveal delay={0.5}>
                  <div className="mt-12">
                    <SEOTextBlock category="product-list" />
                  </div>
                </ScrollReveal>
              </>
            ) : (
              <ScrollReveal>
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
              </ScrollReveal>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
