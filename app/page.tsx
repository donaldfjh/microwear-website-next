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

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Core Technologies & Specifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Display */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Display Type
            </h4>
            <p className="text-gray-600 leading-relaxed">
              AMOLED / IPS HD Screen (1.9&quot; - 2.2&quot;)
            </p>
          </div>

          {/* Health */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Health Monitoring
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Heart Rate, ECG, Blood Oxygen (SpO2), Sleep Tracking
            </p>
          </div>

          {/* Waterproof */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Waterproof Level
            </h4>
            <p className="text-gray-600 leading-relaxed">
              IP68 / 5ATM Water Resistant
            </p>
          </div>

          {/* Compatibility */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Compatibility
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Android & iOS (Custom App Support)
            </p>
          </div>
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
