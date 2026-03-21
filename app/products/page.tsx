import { getProducts } from "@/lib/products";
import { ProductCatalog } from "./ProductCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microwear Smartwatch Collection | OEM/ODM Factory Direct | Wholesale B2B Bulk Orders 2026",
  description:
    "Shop microwear smartwatch collection - ISO9001 OEM/ODM manufacturer direct. MOQ 200pcs, wholesale $15-50. Every microwear smartwatch includes custom logo, SDK, free samples. 7-15 day lead time. B2B bulk orders welcome. Smartwatch microwear factory direct pricing.",
  keywords: ["microwear smartwatch", "microwear smartwatches", "microwear smart watch", "smartwatch microwear", "smartwatch collection", "OEM smart watch bulk", "wholesale smartwatch", "bulk smartwatch orders", "custom smartwatch manufacturer", "B2B smartwatch", "ODM smartwatch factory", "smartwatch wholesale price", "microwear smart watch models", "microwear manufacturer", "microwear factory direct", "microwear watch bulk", "smartwatch OEM China", "microwear smartwatch supplier"],
  alternates: {
    canonical: "https://microwear.info/products",
  },
  openGraph: {
    title:
      "Microwear Smartwatch Collection | OEM/ODM Manufacturer & Wholesale | 2026",
    description:
      "Browse microwear smartwatch catalog - ISO9001 OEM/ODM manufacturer direct. Wholesale bulk orders, B2B pricing, custom logo, SDK. Every microwear smartwatch backed by 10+ years expertise. MOQ 200pcs, free samples.",
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
    "name": "Microwear Smartwatch Collection | OEM/ODM Manufacturer Direct | Wholesale B2B",
    "description": "Complete catalog of microwear smartwatch OEM/ODM products with ISO9001 certification. B2B wholesale pricing, bulk orders, custom manufacturing. Every microwear smartwatch features advanced health tracking, GPS, and premium build quality. Smartwatch microwear factory direct with 10+ years expertise. MOQ 200pcs, free samples, 7-15 day lead time. Microwear smart watch manufacturer for global B2B partners.",
    "url": "https://microwear.info/products",
    "keywords": "microwear smartwatch, microwear smartwatches, microwear smart watch, smartwatch microwear, wholesale smartwatch, bulk smartwatch orders, OEM ODM smartwatch, B2B smartwatch manufacturer, microwear smart watch collection, microwear factory direct, smartwatch manufacturer China, microwear bulk orders, smartwatch OEM factory, microwear supplier",
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
            "price": "15.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-03-21",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Microwear"
            },
            "businessFunction": "wholesale",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "15.00",
              "minPrice": "15.00",
              "maxPrice": "80.00",
              "priceCurrency": "USD"
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
