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

  // Offer without public unit prices — quote on request
  const offers = {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: productUrl,
    itemCondition: "https://schema.org/NewCondition",
    description: "Contact for factory quote. MOQ 200 pcs.",
  };

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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Organization",
        name: "B2B Partner",
      },
      reviewBody: "Excellent OEM partner with reliable quality and timely delivery.",
    },
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
