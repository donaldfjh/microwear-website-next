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
        ctaText="View All Smart Watch Products"
        ctaLink="/products"
      />

      <CertificationBar />

      <div className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Microwear Smart Watch Specifications
        </h3>
        <div className="overflow-hidden bg-white shadow-lg rounded-xl border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider text-xs border-b border-gray-200">
              <tr>
                <th className="p-4 font-bold">Feature</th>
                <th className="p-4 font-bold">Specification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold text-gray-900 w-1/3 bg-gray-50/50">
                  Display Type
                </td>
                <td className="p-4 text-gray-600">
                  AMOLED / IPS HD Screen (1.9&quot; - 2.2&quot;)
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold text-gray-900 w-1/3 bg-gray-50/50">
                  Health Monitoring
                </td>
                <td className="p-4 text-gray-600">
                  Heart Rate, ECG, Blood Oxygen (SpO2), Sleep Tracking
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold text-gray-900 w-1/3 bg-gray-50/50">
                  Waterproof Level
                </td>
                <td className="p-4 text-gray-600">
                  IP68 / 5ATM Water Resistant
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold text-gray-900 w-1/3 bg-gray-50/50">
                  Compatibility
                </td>
                <td className="p-4 text-gray-600">
                  Android & iOS (Custom App Support)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
