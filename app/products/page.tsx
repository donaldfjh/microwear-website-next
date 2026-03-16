import { getProducts } from "@/lib/products";
import { ProductCatalog } from "./ProductCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microwear Smartwatch Collection | OEM/ODM Bulk Orders | 2026 Models",
  description:
    "Browse Microwear's complete smartwatch catalog. ISO9001 certified OEM/ODM manufacturer. Bulk orders, custom logo, SDK support. MOQ 200pcs. Free samples for qualified partners.",
  keywords: ["microwear smartwatch", "smartwatch collection", "OEM smart watch bulk", "wholesale smartwatch", "custom smartwatch manufacturer"],
  alternates: {
    canonical: "https://microwear.info/products",
  },
  openGraph: {
    title:
      "Microwear Smartwatch Collection | OEM/ODM Bulk Orders | 2026 Models",
    description:
      "Browse Microwear's complete smartwatch catalog. ISO9001 certified OEM/ODM manufacturer. Bulk orders, custom logo, SDK support. MOQ 200pcs.",
    type: "website",
  },
};

export default async function ProductsPage() {
  // Fetch all products at build time (SSG)
  const products = await getProducts();

  // Filter out AI Glasses as they have their own dedicated page
  const smartWatches = products.filter((p) => p.category !== "AI Glasses");

  // JSON-LD Structured Data for Product Collection
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Microwear Smartwatch Collection",
    "description": "Complete catalog of Microwear OEM/ODM smartwatches with ISO9001 certification",
    "url": "https://microwear.info/products",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": smartWatches.length,
      "itemListElement": smartWatches.slice(0, 10).map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "url": `https://microwear.info/products/${product.id}`,
          "brand": {
            "@type": "Brand",
            "name": "Microwear"
          },
          "category": product.category,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Microwear"
            }
          }
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ProductCatalog products={smartWatches} />
    </>
  );
}
