import { HeroSection } from "@/components/HeroSection";
import dynamic from "next/dynamic";
const SEOTextBlock = dynamic(
  () => import("@/components/SEOTextBlock").then((m) => m.SEOTextBlock),
  { ssr: true }
);
const HomeProductGrid = dynamic(
  () => import("@/components/HomeProductGrid").then((m) => m.HomeProductGrid),
  { ssr: false }
);
const WhyChooseUs = dynamic(
  () => import("@/components/WhyChooseUs").then((m) => m.WhyChooseUs),
  { ssr: true }
);
const QA = dynamic(() => import("@/components/QA").then((m) => m.QA), {
  ssr: true,
});
const CertificationBar = dynamic(
  () => import("@/components/CertificationBar").then((m) => m.CertificationBar),
  { ssr: true }
);
const CoreSpecs = dynamic(
  () => import("@/components/CoreSpecs").then((m) => m.CoreSpecs),
  { ssr: true }
);
const IndustryInsights = dynamic(
  () => import("@/components/IndustryInsights").then((m) => m.IndustryInsights),
  { ssr: true }
);
const FooterBanner = dynamic(
  () => import("@/components/FooterBanner").then((m) => m.FooterBanner),
  { ssr: false }
);
import { getProducts } from "@/lib/products";
import Link from "next/link";
import type { Metadata } from "next";
import "./HomePage.css";

export const metadata: Metadata = {
  title: "Microwear | Top Smart Watch Manufacturer & OEM/ODM Factory in China",
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
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home-page">
      <HeroSection
        title="Microwear: Professional Smart Watch Manufacturing Solutions"
        subtitle="Premium wearable technology solutions for global businesses. High-quality smartwatches with advanced health monitoring, GPS tracking, and customizable OEM services."
        ctaText="View All Smart Watch Products"
        ctaLink="/products"
      />

      <CertificationBar />

      <CoreSpecs />

      <SEOTextBlock />

      <section className="featured-products-section">
        <div className="featured-products-container">
          <h2 className="featured-products-title">
            Premium OEM Smart Watch Collections
          </h2>
          <HomeProductGrid products={featuredProducts} />
          <div className="view-all-container">
            <Link href="/products" className="view-all-link">
              View All Smart Watches
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <QA />

      <IndustryInsights />

      <FooterBanner />
    </div>
  );
}
