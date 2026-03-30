import React from "react";

/**
 * Organization Schema - 企业组织结构化数据
 * 用于增强品牌在搜索引擎中的展示
 */
export const OrganizationSchema: React.FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Microwear",
    alternateName: "Microwear Technology Co., Ltd.",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Leading OEM/ODM smartwatch manufacturer specializing in health monitoring, GPS tracking, and AI-powered wearable devices.",
    foundingDate: "2015",
    founders: [
      {
        "@type": "Person",
        name: "Microwear Team",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shenzhen",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+86-755-8888-8888",
        contactType: "sales",
        availableLanguage: ["English", "Chinese"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+86-755-8888-8889",
        contactType: "customer support",
        availableLanguage: ["English", "Chinese"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/microwearofficial",
      "https://twitter.com/microwear",
      "https://www.linkedin.com/company/microwear",
      "https://www.youtube.com/microwearofficial",
    ],
    brand: {
      "@type": "Brand",
      name: "Microwear",
      logo: `${baseUrl}/logo.png`,
    },
    knowsAbout: [
      "Smartwatch Manufacturing",
      "Wearable Technology",
      "Health Monitoring Devices",
      "GPS Tracking",
      "OEM/ODM Services",
      "AI Smart Glasses",
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "200-500",
    },
    annualRevenue: {
      "@type": "QuantitativeValue",
      value: "10M-50M USD",
    },
    slogan: "Your Trusted OEM Smartwatch Partner",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * WebSite Schema - 网站结构化数据
 * 用于增强搜索站点链接搜索框
 */
export const WebSiteSchema: React.FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Microwear - OEM Smartwatch Manufacturer",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};