import { getProducts } from "@/lib/products";
import { ProductCatalog } from "./ProductCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AMOLED Smart Watch Manufacturer (Bulk & Wholesale) | MOQ 200",
  description:
    "Looking for reliable wearable tech supplier? Microwear offers ISO-certified smartwatch & AI glasses OEM/ODM services. Supports SDK, custom logo & app. Get a Free Quote & Sample today!",
  alternates: {
    canonical: "https://microwear.info/products",
  },
  openGraph: {
    title:
      "Custom AMOLED Smart Watch Manufacturer (Bulk & Wholesale) | MOQ 200",
    description:
      "Looking for reliable wearable tech supplier? Microwear offers ISO-certified smartwatch & AI glasses OEM/ODM services. Supports SDK, custom logo & app. Get a Free Quote & Sample today!",
    type: "website",
  },
};

export default async function ProductsPage() {
  // Fetch all products at build time (SSG)
  const products = await getProducts();

  // Filter out AI Glasses as they have their own dedicated page
  const smartWatches = products.filter((p) => p.category !== "AI Glasses");

  return <ProductCatalog products={smartWatches} />;
}
