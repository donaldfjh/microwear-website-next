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

  // Mirror the visible spec table so the key specs stay machine-readable
  const specProperties = (
    [
      ["Battery", product.specifications.battery],
      ["Display", product.specifications.display],
      ["Water resistance", product.specifications.waterResistance],
    ] as const
  )
    .filter(([, value]) => Boolean(value))
    .map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    }));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    image: images,
    sku: product.id,
    url: productUrl,
    brand: {
      "@type": "Brand",
      name: "Microwear",
    },
    offers,
    manufacturer: { "@id": `${baseUrl}/#organization` },
    ...(specProperties.length ? { additionalProperty: specProperties } : {}),
  };

  // The page's visible FAQ section owns the FAQPage node, so only Product is emitted here.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
};
