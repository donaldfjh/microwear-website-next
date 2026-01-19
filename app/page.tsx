import { HeroSection } from "@/components/HeroSection";
import { SEOTextBlock } from "@/components/SEOTextBlock";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { QA } from "@/components/QA";
import { CertificationBar } from "@/components/CertificationBar";
import { CoreSpecs } from "@/components/CoreSpecs";
import { IndustryInsights } from "@/components/IndustryInsights";
import { FooterBanner } from "@/components/FooterBanner";
import { getProducts } from "@/lib/products";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title:
    "Microwear - Your Premier Partner for Custom Smart Wearables. 10 Years OEM Experience | <24h Prototyping | Defect Rate <0.1%",
  description:
    "Leading smart watch manufacturer Microwear offers premium OEM/ODM wearable solutions. ISO-certified factory, wholesale smartwatches, health trackers, and GPS sports watches for global brands.",
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
  const featuredProducts = products
    .filter((p) => p.category !== "AI Glasses")
    .slice(0, 6);

  // Get AI Glasses for homepage display
  const featuredAIGlasses = products
    .filter((p) => p.category === "AI Glasses")
    .slice(0, 3);

  return (
    <div className="home-page">
      <HeroSection
        title="Professional Smart Watch Manufacturer & OEM/ODM Solutions"
        subtitle="10 Years Experience | ISO9001 Certified | 500+ Global Partners"
        ctaText="Get Free Quote"
        ctaLink="/contact"
        secondaryCtaText="Download Catalog"
        secondaryCtaLink="/products"
      />

      <CertificationBar />

      <ScrollReveal delay={0.2}>
        <CoreSpecs />
      </ScrollReveal>

      <ScrollReveal>
        <SEOTextBlock />
      </ScrollReveal>

      <section className="featured-products-section">
        <div className="featured-products-container">
          <ScrollReveal>
            <h2 className="featured-products-title">
              Premium OEM Smart Watch Collections
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <HomeProductGrid products={featuredProducts} />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="view-all-container">
              <Link href="/products" className="view-all-link">
                View All Smart Watches
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Glasses Section */}
      {featuredAIGlasses.length > 0 && (
        <section className="featured-products-section ai-glasses-home-section">
          <div className="featured-products-container">
            <ScrollReveal>
              <h2 className="featured-products-title">
                Next-Gen AI Smart Glasses
              </h2>
              <p className="section-subtitle">
                Merge digital and physical worlds with our advanced AR wearables
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <HomeProductGrid products={featuredAIGlasses} />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="view-all-container">
                <Link href="/ai-glasses" className="view-all-link">
                  View All AI Glasses
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <QA />

      <ScrollReveal>
        <IndustryInsights />
      </ScrollReveal>

      <FooterBanner />
    </div>
  );
}
