import { getProducts } from "@/lib/products";
import { ProductCatalog } from "./ProductCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microwear Smartwatch OEM/ODM Manufacturer | Wholesale B2B Bulk Orders 2026",
  description:
    "Microwear smartwatch OEM/ODM manufacturer direct - ISO9001 certified factory. Wholesale bulk orders $15-50, MOQ 200pcs. Free samples, 24h quotes, 7-15 day delivery. Custom logo, SDK, packaging. 500+ B2B partners globally. Get your smartwatch microwear quote now!",
  keywords: ["microwear smartwatch", "microwear smartwatches", "microwear smart watch", "smartwatch microwear", "microwear smartwatch manufacturer", "microwear smartwatch factory", "smartwatch microwear factory", "OEM smartwatch manufacturer", "ODM smartwatch factory", "wholesale smartwatch bulk", "bulk smartwatch orders", "B2B smartwatch supplier", "custom smartwatch manufacturer", "smartwatch OEM China", "microwear factory direct", "microwear wholesale", "smartwatch microwear bulk", "microwear smartwatch supplier", "OEM ODM smartwatch", "microwear smart watch bulk orders", "smartwatch manufacturer China", "microwear OEM ODM", "smartwatch microwear wholesale price"],
  alternates: {
    canonical: "https://microwear.info/products",
  },
  openGraph: {
    title:
      "Microwear Smartwatch OEM/ODM Manufacturer | Wholesale B2B Factory Direct 2026",
    description:
      "Microwear smartwatch OEM/ODM manufacturer - ISO9001 certified factory direct. Wholesale bulk orders $15-50, MOQ 200pcs. Free samples, 24h quotes, 7-15 day delivery. Custom logo, SDK, packaging. 500+ global B2B partners.",
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
    "name": "Microwear Smartwatch OEM/ODM Manufacturer | Wholesale B2B Bulk Orders",
    "description": "Complete microwear smartwatch OEM/ODM product catalog - ISO9001 certified manufacturer direct. B2B wholesale pricing $15-50, bulk orders welcome. Custom logo, SDK, packaging. Every microwear smartwatch features advanced health tracking, GPS, premium build. Smartwatch microwear factory with 10+ years expertise. MOQ 200pcs, free samples, 24h quotes, 7-15 day lead time. Professional smartwatch microwear manufacturer for global B2B partners.",
    "url": "https://microwear.info/products",
    "keywords": "microwear smartwatch, microwear smartwatches, microwear smart watch, smartwatch microwear, microwear smartwatch manufacturer, microwear smartwatch factory, wholesale smartwatch bulk, bulk smartwatch orders, OEM ODM smartwatch, B2B smartwatch manufacturer, smartwatch microwear factory, microwear factory direct, smartwatch manufacturer China, microwear bulk orders, smartwatch OEM factory, microwear supplier, microwear OEM ODM manufacturer, smartwatch microwear wholesale",
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
