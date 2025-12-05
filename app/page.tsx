import { HeroSection } from "@/components/HeroSection";
import { SEOTextBlock } from "@/components/SEOTextBlock";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { QA } from "@/components/QA";
import { FooterBanner } from "@/components/FooterBanner";
import { getProducts } from "@/lib/products";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title: "Microwear | Professional Smart Watch Manufacturer & OEM/ODM Expert",
  description:
    "Leading smart watch manufacturer Microwear offers premium OEM/ODM wearable solutions. High-quality sports watches, health trackers, and custom branding services for global B2B clients.",
  alternates: {
    canonical: "https://microwear.info/",
  },
  openGraph: {
    title: "Microwear - Professional Smart Watch Manufacturer",
    description:
      "Discover premium smartwatches and OEM solutions at Microwear.",
    url: "https://microwear.info/",
    type: "website",
  },
};

export default async function HomePage() {
  // Fetch products at build time
  const products = await getProducts();

  // Get featured products (first 6 products for the homepage)
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home-page">
      <HeroSection
        title="Leading Smart Watch Manufacturer & OEM/ODM Partner"
        subtitle="Premium wearable technology solutions for global businesses. High-quality smartwatches with advanced health monitoring, GPS tracking, and customizable OEM services."
        ctaText="Explore Products"
        ctaLink="/products"
      />

      <SEOTextBlock />

      <section className="featured-products-section">
        <div className="featured-products-container">
          <h2 className="featured-products-title">Featured Products</h2>
          <HomeProductGrid products={featuredProducts} />
          <div className="view-all-container">
            <Link href="/products" className="view-all-link">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <QA />

      <FooterBanner />
    </div>
  );
}
