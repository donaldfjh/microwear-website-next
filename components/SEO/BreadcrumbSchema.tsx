import React from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbList Schema Component for SEO
 * Helps search engines understand site structure and improves navigation in search results
 */
export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      // Always include Home as first item
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      // Add provided items
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2, // Start from 2 (Home is 1)
        "name": item.name,
        "item": item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`
      }))
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};

/**
 * Example usage:
 * <BreadcrumbSchema 
 *   items={[
 *     { name: "Products", url: "/products" },
 *     { name: "W11 Pro", url: "/products/W11pro" }
 *   ]} 
 * />
 */