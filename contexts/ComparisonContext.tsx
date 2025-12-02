"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Product } from "@/types/product";

interface ComparisonContextType {
  comparisonProducts: Product[];
  addToComparison: (product: Product) => boolean;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
  canAddMore: () => boolean;
}

const COMPARISON_LIMIT = 3;
const STORAGE_KEY = "microwear-comparison";

const ComparisonContext = createContext<ComparisonContextType | undefined>(
  undefined
);

export const ComparisonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [comparisonProducts, setComparisonProducts] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setComparisonProducts(parsed);
      }
    } catch (error) {
      console.error("Failed to load comparison from localStorage:", error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save to localStorage whenever comparisonProducts changes
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(comparisonProducts));
      } catch (error) {
        console.error("Failed to save comparison to localStorage:", error);
      }
    }
  }, [comparisonProducts, isInitialized]);

  const canAddMore = (): boolean => {
    return comparisonProducts.length < COMPARISON_LIMIT;
  };

  const addToComparison = (product: Product): boolean => {
    // Check if we can add more products
    if (!canAddMore()) {
      return false;
    }

    // Check if product is already in comparison
    if (comparisonProducts.some((p) => p.id === product.id)) {
      return false;
    }

    setComparisonProducts((prev) => [...prev, product]);
    return true;
  };

  const removeFromComparison = (productId: string): void => {
    setComparisonProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  const clearComparison = (): void => {
    setComparisonProducts([]);
  };

  const value: ComparisonContextType = {
    comparisonProducts,
    addToComparison,
    removeFromComparison,
    clearComparison,
    canAddMore,
  };

  return (
    <ComparisonContext.Provider value={value}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = (): ComparisonContextType => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
};
