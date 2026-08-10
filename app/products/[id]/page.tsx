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

// Generate metadata for each product with SEO optimization
export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found - Microwear",
      description: "The product you're looking for doesn't exist.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";
  const canonicalUrl = `${baseUrl}/products/${params.id}`;

  // Extract core features for SEO
  const coreFeatures = extractCoreFeatures(product);
  const productKeywords = generateProductKeywords(product, params.id);

  // SEO-Optimized Titles with OEM/wholesale focus (no public unit prices)
  const customTitles: Record<string, string> = {
    "mw-health-ma25":
      "Women's Health Smartwatch OEM | Period Tracking & ECG | MOQ 200pcs",
    "mw-kids-fun":
      "GPS Kids Smartwatch Factory | Safety Tracking Watch OEM | MOQ 200pcs",
    W12pro:
      "AMOLED Smartwatch OEM | ECG & GPS Health Tracker | MOQ 200pcs",
    "mw-fit-lite":
      "Budget Fitness Tracker OEM | Affordable Smartwatch Factory | MOQ 200pcs",
    "mw-sport-ultra":
      "Rugged Military Smartwatch OEM | GPS & Waterproof | MOQ 200pcs",
    "mw-classic-steel":
      "Stainless Steel Smartwatch OEM | NFC Hybrid Watch | MOQ 200pcs",
    "mw-health-ma18":
      "Medical Smartwatch OEM | ECG BP SpO2 Monitor | MOQ 200pcs",
    "mw-ai-glasses":
      "AI Voice Glasses OEM | Open-Ear Speaker & Assistant | MOQ 200pcs",
    "mw-ai-glasses-pro":
      "AI Camera Glasses OEM | Sony Sensor & Translation | MOQ 200pcs",
    "mw-ai-glasses-4":
      "Lightweight AI Glasses OEM | ChatGPT & 38g Frame | MOQ 200pcs",
    "chatgpt-compatible-smart-glasses-anti-leakage-ai4":
      "AI Voice Glasses OEM | ChatGPT & 38g Lightweight | MOQ 200pcs",
    "ray-ban-meta-alternative-manufacturer-ai3-pro":
      "AI Camera Glasses OEM | Sony 8MP & Live Translation | MOQ 200pcs",
  };

  if (customTitles[params.id]) {
    const customTitle = `${customTitles[params.id]} | Microwear Factory`;
    const seoDescription = `${product.name} OEM smartwatch by Microwear manufacturer. ${coreFeatures}. ISO9001 certified factory, MOQ 200pcs. Contact for factory quote. Free samples, 7-15 day delivery. Custom logo & SDK support. 500+ global B2B partners.`;
    
    return {
      title: customTitle,
      description: seoDescription,
      keywords: productKeywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: customTitle,
        description: seoDescription,
        images: product.images.length > 0 ? [product.images[0]] : [],
        url: canonicalUrl,
        type: "website",
      },
    };
  }

  // Default SEO-optimized title with features
  const seoTitle = coreFeatures
    ? `${product.name} ${coreFeatures} OEM | Smartwatch Wholesale | Microwear`
    : `${product.name} Smartwatch OEM | MOQ 200pcs | Microwear Factory`;

  const seoDescription = `${product.name} OEM smartwatch by Microwear. ${coreFeatures}. ISO9001 certified factory, MOQ 200pcs. Contact for factory quote. Free samples, 7-15 day lead time. Custom logo & SDK. 500+ global B2B partners.`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: productKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: product.images.length > 0 ? [product.images[0]] : [],
      url: canonicalUrl,
      type: "website",
    },
  };
}

// Helper function: Extract core features from product specifications
function extractCoreFeatures(product: any): string {
  const features: string[] = [];
  
  if (product.specifications?.display?.includes("AMOLED")) features.push("AMOLED");
  if (product.specifications?.health?.includes("ECG")) features.push("ECG");
  if (product.specifications?.connectivity?.includes("GPS")) features.push("GPS");
  if (product.specifications?.water_resistance?.includes("IP68")) features.push("IP68");
  if (product.specifications?.battery?.includes("7-14")) features.push("14-Day Battery");
  if (product.specifications?.display?.includes("1.95")) features.push("1.95\" HD");
  
  return features.slice(0, 2).join(" & ");
}

// Helper function: Generate product-specific keywords
function generateProductKeywords(product: any, _productId: string): string[] {
  const baseKeywords = [
    `${product.name} OEM`,
    `${product.name} wholesale`,
    `${product.name.toLowerCase()} manufacturer`,
    "smartwatch OEM",
    "smartwatch factory China",
    "B2B smartwatch supplier",
    "smartwatch MOQ 200",
    "wholesale smartwatch",
    "ISO9001 smartwatch factory"
  ];
  
  // Add feature-specific keywords
  if (product.specifications?.health?.includes("ECG")) {
    baseKeywords.push("ECG smartwatch OEM", "health monitoring watch factory", "medical smartwatch manufacturer");
  }
  
  if (product.specifications?.connectivity?.includes("GPS")) {
    baseKeywords.push("GPS smartwatch OEM", "fitness tracker with GPS factory");
  }
  
  if (product.category === "AI Glasses") {
    baseKeywords.push("AI glasses OEM", "smart glasses manufacturer", "AR glasses factory", "voice assistant glasses");
  }
  
  baseKeywords.push("factory quote smartwatch OEM", "B2B smartwatch manufacturer");
  
  return baseKeywords;
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
      {/* BreadcrumbList is emitted by the visible <Breadcrumb> inside ProductDetailClient */}
      <ProductSchema product={product} />
      <Suspense fallback={<div>Loading product details...</div>}>
        <ProductDetailClient product={product} />
      </Suspense>
    </div>
  );
}
