import React from "react";
import type { Product } from "@/types/product";

interface ProductSchemaProps {
  product: Product;
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({ product }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";
  const productUrl = `${baseUrl}/products/${product.id}`;
  
  // Ensure images have absolute URLs
  const images = (product.images || []).map((img) =>
    img.startsWith("http") ? img : `${baseUrl}${img}`
  );

  // Offers Schema
  const offers = (
    product.variants && product.variants.length > 0
      ? product.variants
      : [{ id: product.id }]
  ).map(() => ({
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: productUrl,
    itemCondition: "https://schema.org/NewCondition",
  }));

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: images,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Microwear",
    },
    offers,
  };

  // Dynamic FAQ Generation
  const batteryLife = product.specifications.battery || "3-5 days typical use";
  const waterproof = product.specifications.waterResistance || "IP68 Water Resistant";
  const display = product.specifications.display || "HD Display";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the battery life of the ${product.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The ${product.name} features a long-lasting battery that provides approximately ${batteryLife} on a single charge, depending on usage patterns.`
        }
      },
      {
        "@type": "Question",
        name: `Is the ${product.name} waterproof?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, the ${product.name} is rated ${waterproof}, making it suitable for daily use and exposure to water.`
        }
      },
      {
        "@type": "Question",
        name: `What is the display size of the ${product.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The ${product.name} comes with a ${display}, offering clear visuals and easy navigation.`
        }
      }
    ]
  };

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
};
