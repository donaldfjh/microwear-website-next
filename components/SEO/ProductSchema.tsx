import React from "react";
import type { Product } from "@/types/product";

interface ProductSchemaProps {
  product?: Product;
  products?: Product[];
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({
  product,
  products,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";

  // Helper to generate schema for a single product
  const generateProductSchema = (prod: Product) => {
    const productUrl = `${baseUrl}/products/${prod.id}`;

    // Ensure images have absolute URLs
    const images = (prod.images || []).map((img) =>
      img.startsWith("http") ? img : `${baseUrl}${img}`
    );

    // Offers Schema
    const offers = (
      prod.variants && prod.variants.length > 0
        ? prod.variants
        : [{ id: prod.id }]
    ).map(() => ({
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: productUrl,
      itemCondition: "https://schema.org/NewCondition",
    }));

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: prod.name,
      description: prod.description,
      image: images,
      sku: prod.id,
      brand: {
        "@type": "Brand",
        name: "Microwear",
      },
      offers,
    };
  };

  // Helper to generate FAQ schema
  const generateFAQSchema = (prod: Product) => {
    const batteryLife = prod.specifications.battery || "3-5 days typical use";
    const waterproof =
      prod.specifications.waterResistance || "IP68 Water Resistant";
    const display = prod.specifications.display || "HD Display";

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `Does the ${prod.name} support custom health monitoring algorithms for B2B clients?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Microwear provides SDK and API integration for custom health data tracking, including heart rate and SpO2 sensors. We offer full support for white-label app customization.",
          },
        },
        {
          "@type": "Question",
          name: `What is the battery life of the ${prod.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The ${prod.name} features a long-lasting battery that provides approximately ${batteryLife} on a single charge, depending on usage patterns.`,
          },
        },
        {
          "@type": "Question",
          name: `Is the ${prod.name} waterproof?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, the ${prod.name} is rated ${waterproof}, making it suitable for daily use and exposure to water.`,
          },
        },
        {
          "@type": "Question",
          name: `What is the display size of the ${prod.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The ${prod.name} comes with a ${display}, offering clear visuals and easy navigation.`,
          },
        },
        {
          "@type": "Question",
          name: `Can I customize the boot logo and packaging for bulk orders?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We offer comprehensive OEM services including custom boot logos, laser engraving on the case, and fully customized packaging for bulk orders.",
          },
        },
      ],
    };
  };

  // Case 1: Single Product (Detail Page)
  if (product) {
    const productSchema = generateProductSchema(product);
    const faqSchema = generateFAQSchema(product);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </>
    );
  }

  // Case 2: List of Products (Homepage/Catalog)
  if (products && products.length > 0) {
    // Generate ItemList Schema for featured products
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: products.map((prod, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: generateProductSchema(prod),
      })),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    );
  }

  return null;
};
