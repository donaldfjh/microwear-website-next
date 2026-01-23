import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProducts, getProductById } from "@/lib/products";
import { ProductDetailClient } from "./ProductDetailClient";
import { ProductSchema } from "@/components/SEO/ProductSchema";
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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";
  const canonicalUrl = `${baseUrl}/products/${params.id}`;

  // SEO-Optimized Titles for Specific Products
  const customTitles: Record<string, string> = {
    "mw-health-ma25":
      "Best OEM Smartwatch for Women's Health (Period Tracking & ECG) | Microwear",
    "mw-kids-fun":
      "GPS Tracking Smartwatch for Kids & Seniors Safety | OEM Factory",
    W11pro:
      "Premium AMOLED Smartwatch with ECG & 100+ Sport Modes | Microwear W11 Pro",
    "mw-fit-lite":
      "Best Affordable Fitness Tracker & Smartwatch Manufacturer | Microwear S11",
    "mw-sport-ultra":
      "Rugged Military Smartwatch for Outdoor Sports (GPS & Waterproof) | Watch Ultra 5",
    "mw-classic-steel":
      "Classic Stainless Steel Hybrid Smartwatch Manufacturer (NFC) | Microwear MA31",
    "mw-health-ma18":
      "Medical-Grade Health Monitor Smartwatch (ECG, BP & SpO2) | Microwear MA18",
    "mw-ai-glasses":
      "Smart Audio Glasses with Open-Ear Speaker & Voice Assistant | Microwear AI 3",
    "mw-ai-glasses-pro":
      "AI Camera Glasses with Sony Sensor & Live Translation | Microwear AI 3 Pro",
    "mw-ai-glasses-4":
      "Lightweight AI Voice Glasses (38g) with ChatGPT Integration | Microwear AI 4",
  };

  if (customTitles[params.id]) {
    const customTitle = customTitles[params.id];
    return {
      title: customTitle,
      description: product.description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: customTitle,
        description: product.description,
        images: product.images.length > 0 ? [product.images[0]] : [],
        url: canonicalUrl,
      },
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
      <ProductSchema product={product} />
      <Suspense fallback={<div>Loading product details...</div>}>
        <ProductDetailClient product={product} />
      </Suspense>
    </div>
  );
}
