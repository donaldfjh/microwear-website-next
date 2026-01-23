"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ImageGallery } from "@/components/ImageGallery";
import { useComparison } from "@/contexts/ComparisonContext";
import { useToast } from "@/contexts/ToastContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductSpecs } from "@/components/ProductSpecs";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Product, ProductVariant } from "@/types/product";

// Helper function to map color names to hex values
const getColorHex = (colorName: string): string => {
  const colorMap: Record<string, string> = {
    black: "#000000",
    white: "#FFFFFF",
    silver: "#C0C0C0",
    gold: "#FFD700",
    "rose gold": "#B76E79",
    pink: "#FFC0CB",
    blue: "#0066CC",
    green: "#28A745",
    red: "#DC3545",
    gray: "#6C757D",
    grey: "#6C757D",
    brown: "#8B4513",
    orange: "#FF8C00",
    purple: "#6F42C1",
    yellow: "#FFC107",
  };

  return colorMap[colorName.toLowerCase()] || "#CCCCCC";
};

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToComparison, canAddMore, comparisonProducts } = useComparison();
  const { showToast } = useToast();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );

  // Set initial variant when product loads
  useEffect(() => {
    if (product?.variants && product.variants.length > 0 && !selectedVariant) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product, selectedVariant]);

  // Get images to display based on selected variant
  const getDisplayImages = (): string[] => {
    if (!product) return [];

    // If a variant is selected and has an image, show variant-specific images
    if (selectedVariant?.image && product.variants) {
      const variantImage = selectedVariant.image;

      // Get all variant image paths to filter them out
      const variantImages = product.variants
        .map((v) => v.image)
        .filter((img): img is string => img !== undefined);

      // Filter product images: keep the selected variant image and non-variant images
      const filteredImages = product.images.filter((img) => {
        // Keep the selected variant image
        if (img === variantImage) return true;
        // Filter out other variant images
        if (variantImages.includes(img) && img !== variantImage) return false;
        // Keep all other images (overall, detail, screen, etc.)
        return true;
      });

      // Put variant image first, then other images
      return [
        variantImage,
        ...filteredImages.filter((img) => img !== variantImage),
      ];
    }

    // Default: show all product images
    return product.images;
  };

  const isInComparison = comparisonProducts.some((p) => p.id === product.id);

  const handleAddToComparison = () => {
    if (isInComparison) {
      showToast("This product is already in comparison", "info");
      return;
    }

    const success = addToComparison(product);
    if (success) {
      showToast(`${product.name} added to comparison`, "success");
    } else {
      showToast("You can only compare up to 3 products at a time", "error");
    }
  };

  const getContactLink = () => {
    const subject = encodeURIComponent(`Inquiry about ${product.name}`);
    return `/contact?subject=${subject}`;
  };

  // Construct SEO-rich Alt Text
  const hasGPS = product.specifications.connectivity?.includes("GPS");
  const displayType = product.specifications.display?.includes("AMOLED")
    ? "AMOLED"
    : "HD";
  const featureAlt = hasGPS ? "GPS" : displayType;
  const imageAlt = `Microwear ${product.name} ${featureAlt} Smartwatch`;

  return (
    <>
      <ScrollReveal>
        <Breadcrumb product={product} />
      </ScrollReveal>

      <div className="product-detail-container">
        <div className="product-detail-gallery">
          <ScrollReveal delay={0.1}>
            <ImageGallery
              images={getDisplayImages()}
              alt={imageAlt}
              key={selectedVariant?.id || "default"}
            />
          </ScrollReveal>
        </div>

        <div className="product-detail-info">
          <ScrollReveal delay={0.2}>
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>
          </ScrollReveal>

          {/* Color Selector */}
          {product.variants && product.variants.length > 0 && (
            <ScrollReveal delay={0.3}>
              <div className="color-selector-section">
                <h2>Available Colors</h2>
                <div className="color-options">
                  {product.variants.map((variant: ProductVariant) => (
                    <button
                      key={variant.id}
                      className={`color-option ${
                        selectedVariant?.id === variant.id ? "selected" : ""
                      }`}
                      onClick={() => setSelectedVariant(variant)}
                      aria-label={`Select ${variant.color} color`}
                      title={variant.name}
                    >
                      <div
                        className="color-swatch"
                        style={{
                          backgroundColor: getColorHex(variant.color || ""),
                          border:
                            variant.color?.toLowerCase() === "white" ||
                            variant.color?.toLowerCase() === "silver"
                              ? "1px solid #ddd"
                              : "none",
                        }}
                      />
                      <span className="color-name">{variant.color}</span>
                    </button>
                  ))}
                </div>
                {selectedVariant && (
                  <div className="selected-variant-info">
                    <p>
                      <strong>Selected:</strong> {selectedVariant.name}
                    </p>
                    {selectedVariant.bandMaterial && (
                      <p>
                        <strong>Band Material:</strong>{" "}
                        {selectedVariant.bandMaterial}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.4}>
            <div className="product-detail-actions">
              <Link
                href={getContactLink()}
                className="btn btn-primary"
                aria-label={`Contact factory about ${product.name} OEM/ODM`}
              >
                {`Contact Factory to Buy ${product.name} (OEM/ODM)`}
              </Link>
              <button
                className="btn btn-secondary"
                onClick={handleAddToComparison}
                disabled={isInComparison || !canAddMore()}
                aria-label={
                  isInComparison ? "Already in comparison" : "Add to comparison"
                }
              >
                {isInComparison ? "In Comparison" : "Add to Compare"}
              </button>
            </div>
          </ScrollReveal>

          {/* Highlights Section */}
          {product.highlights && product.highlights.length > 0 && (
            <ScrollReveal delay={0.5}>
              <div className="product-detail-section">
                <h2>Key Highlights</h2>
                <ul className="product-highlights-list">
                  {product.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}

          {/* Use Case Section - GEO Optimized */}
          {product.useCase && (
            <ScrollReveal delay={0.6}>
              <div className="product-detail-section product-use-case">
                <h2>{product.useCase.title}</h2>
                <p className="use-case-content">{product.useCase.content}</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Specifications Section - Replaced with new ProductSpecs component */}
      <ScrollReveal delay={0.2}>
        <ProductSpecs product={product} />
      </ScrollReveal>
    </>
  );
}
