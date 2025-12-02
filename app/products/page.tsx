import { getProducts } from "@/lib/products";
import { ProductCatalog } from "./ProductCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - MicroWear Smartwatches",
  description:
    "Browse our collection of premium smartwatches. Find the perfect smartwatch with advanced features, elegant design, and cutting-edge technology.",
  openGraph: {
    title: "Products - MicroWear Smartwatches",
    description:
      "Browse our collection of premium smartwatches with advanced features and elegant design.",
    type: "website",
  },
};

export default async function ProductsPage() {
  // Fetch all products at build time (SSG)
  const products = await getProducts();

  return <ProductCatalog products={products} />;
}
