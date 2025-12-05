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

  // Extract key features from specifications for SEO-rich title
  const hasGPS = product.specifications.connectivity?.includes("GPS");
  const displayType = product.specifications.display?.includes("AMOLED")
    ? "AMOLED"
    : product.specifications.display?.includes("LCD")
    ? "LCD"
    : "";

  // Build SEO-optimized title with key features
  const features = [];

  if (hasGPS) features.push("GPS");
  if (displayType) features.push(displayType);

  const featureString = features.length > 0 ? features.join(" & ") : "";
  const seoTitle = featureString
    ? `${product.name} | ${featureString} Smartwatch`
    : `${product.name} | MicroWear Smartwatch`;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";
  const canonicalUrl = `${baseUrl}/products/${params.id}`;

  return {
    title: seoTitle,
    description: product.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: product.description,
      images: product.images.length > 0 ? [product.images[0]] : [],
      url: canonicalUrl,
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
