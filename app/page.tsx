import { HeroSection } from "@/components/HeroSection";
import { SEOTextBlock } from "@/components/SEOTextBlock";
import { HomeProductGrid } from "@/components/HomeProductGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { QA } from "@/components/QA";
import { CertificationBar } from "@/components/CertificationBar";
import { IndustryInsights } from "@/components/IndustryInsights";
import { FooterBanner } from "@/components/FooterBanner";
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
        ctaText="浏览全部智能手表产品"
        ctaLink="/products"
      />

      <CertificationBar />

      <div className="py-8 px-4 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold mb-4">
          Microwear Smart Watch Specifications
        </h3>
        <table className="w-full border-collapse border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Feature</th>
              <th className="border p-2">Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">Display Type</td>
              <td className="border p-2">
                AMOLED / IPS HD Screen (1.9&quot; - 2.2&quot;)
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Health Monitoring</td>
              <td className="border p-2">
                Heart Rate, ECG, Blood Oxygen (SpO2), Sleep Tracking
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Waterproof Level</td>
              <td className="border p-2">IP68 / 5ATM Water Resistant</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Compatibility</td>
              <td className="border p-2">Android & iOS (Custom App Support)</td>
            </tr>
          </tbody>
        </table>
      </div>

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
