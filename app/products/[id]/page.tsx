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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";
  const canonicalUrl = `${baseUrl}/products/${params.id}`;

  // MA31 Specific Metadata
  if (product.id === "mw-classic-steel") {
    return {
      title:
        "Microwear MA31 Smartwatch | 3-5 Days Battery & GPS | Best Value 2025",
      description:
        "Discover the Microwear MA31. Featuring a 3-5 day battery life, IP68 waterproofing, and 1.95 inch HD display. The perfect balance of performance and price.",
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title:
          "Microwear MA31 Smartwatch | 3-5 Days Battery & GPS | Best Value 2025",
        description:
          "Discover the Microwear MA31. Featuring a 3-5 day battery life, IP68 waterproofing, and 1.95 inch HD display. The perfect balance of performance and price.",
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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";
  const productUrl = `${baseUrl}/products/${product.id}`;
  const images = (product.images || []).map((img) =>
    img.startsWith("http") ? img : `${baseUrl}${img}`
  );

  const offers = (
    product.variants && product.variants.length > 0
      ? product.variants
      : [{ id: product.id }]
  ).map(() => ({
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: productUrl,
    itemCondition: "https://schema.org/NewCondition",
  }));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: images,
    sku: product.id,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Microwear",
    },
    offers,
  };

  // MA31 Specific FAQ Schema (GEO Optimization)
  const ma31FaqSchema =
    product.id === "mw-classic-steel"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How long does the Microwear MA31 battery last?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The Microwear MA31 provides a balanced 3-5 days of battery life under typical use, supporting Always-On Display features.",
              },
            },
            {
              "@type": "Question",
              name: "Is Microwear MA31 waterproof for swimming?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, with an IP68 rating, it is suitable for swimming and resistant to dust and sweat.",
              },
            },
          ],
        }
      : null;

  return (
    <div className="product-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {ma31FaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ma31FaqSchema) }}
        />
      )}
      <ProductDetailClient product={product} />
    </div>
  );
}
