import React from "react";
import { notFound } from "next/navigation";
import { getProducts, getProductById } from "@/lib/products";
import { ProductDetailClient } from "./ProductDetailClient";
import type { Metadata } from "next";
import "./ProductDetailPage.css";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all products at build time
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for each product
export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found - MicroWear",
      description: "The product you're looking for doesn't exist.",
    };
  }

  return {
    title: `${product.name} - MicroWear Smartwatches`,
    description: product.description,
    openGraph: {
      title: `${product.name} - MicroWear`,
      description: product.description,
      images: product.images.length > 0 ? [product.images[0]] : [],
    },
  };
}

// Product Detail Page Component
export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const product = await getProductById(params.id);

  // Handle 404 for invalid product IDs
  if (!product) {
    notFound();
  }

  return (
    <div className="product-detail-page">
      <ProductDetailClient product={product} />
    </div>
  );
}
