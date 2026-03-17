import { getProducts } from "@/lib/products";
import { ProductCatalog } from "./ProductCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microwear Smartwatch Catalog | OEM/ODM Wholesale | $15-50 Bulk Pricing 2026",
  description:
    "Microwear Smartwatch full catalog - ISO9001 OEM/ODM factory. MOQ 200pcs, wholesale $15-50. Custom logo, SDK, free samples. 7-15 day lead time. B2B pricing for global partners.",
  keywords: ["microwear smartwatch", "microwear smartwatches", "smartwatch collection", "OEM smart watch bulk", "wholesale smartwatch", "bulk smartwatch orders", "custom smartwatch manufacturer", "B2B smartwatch", "ODM smartwatch factory", "smartwatch wholesale price"],
  alternates: {
    canonical: "https://microwear.info/products",
  },
  openGraph: {
    title:
      "Microwear Smartwatch Collection | OEM/ODM Wholesale & Bulk Orders | 2026",
    description:
      "Microwear smartwatch catalog - ISO9001 OEM/ODM manufacturer. Wholesale bulk orders, B2B pricing, custom logo, SDK. MOQ 200pcs, free samples.",
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
    "name": "Microwear Smartwatch Collection | OEM/ODM Wholesale",
    "description": "Complete catalog of Microwear smartwatch OEM/ODM products with ISO9001 certification. B2B wholesale pricing, bulk orders, custom manufacturing.",
    "url": "https://microwear.info/products",
    "keywords": "microwear smartwatch, wholesale smartwatch, bulk smartwatch orders, OEM ODM smartwatch, B2B smartwatch manufacturer",
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
            },
            "businessFunction": "wholesale",
            "eligibleTransactionVolume": {
              "@type": "PriceSpecification",
              "minPrice": "15.00",
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
