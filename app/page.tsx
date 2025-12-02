import { HeroSection } from "@/components/HeroSection";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { FooterBanner } from "@/components/FooterBanner";
import { getProducts } from "@/lib/products";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title: "MicroWear - Premium Smartwatches",
  description:
    "Premium smartwatches designed for the modern individual. Track your health, stay connected, and express your style with MicroWear's advanced wearable technology.",
  openGraph: {
    title: "MicroWear - Premium Smartwatches",
    description:
      "Premium smartwatches designed for the modern individual. Track your health, stay connected, and express your style.",
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
        title="Elevate Your Lifestyle with MicroWear"
        subtitle="Premium smartwatches designed for the modern individual. Track your health, stay connected, and express your style."
        ctaText="Explore Products"
        ctaLink="/products"
      />

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

      <Testimonials />

      <FooterBanner />
    </div>
  );
}
