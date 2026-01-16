import React from "react";
import Link from "next/link";
import type { Product } from "@/types/product";

interface BreadcrumbProps {
  product: Product;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ product }) => {
  const isAIGlasses = product.category === "AI Glasses";
  const parentName = isAIGlasses ? "AI Glasses" : "Smart Watches";
  const parentPath = isAIGlasses ? "/ai-glasses" : "/products";
  const baseUrl = "https://microwear.info";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: parentName,
        item: `${baseUrl}${parentPath}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${baseUrl}/products/${product.id}`,
      },
    ],
  };

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-separator" aria-hidden="true">
            {" "}
            ›{" "}
          </span>
          <Link href={parentPath} className="breadcrumb-link">
            {parentName}
          </Link>
          <span className="breadcrumb-separator" aria-hidden="true">
            {" "}
            ›{" "}
          </span>
          <span className="breadcrumb-current" aria-current="page">
            {product.name}
          </span>
        </div>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
};
