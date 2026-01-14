import React from "react";
import "./SEOTextBlock.css";

export const SEOTextBlock: React.FC = () => {
  return (
    <section className="seo-text-block">
      <div className="seo-text-container">
        <h2 className="seo-text-title">
          Your Trusted Smart Watch Manufacturer & OEM Partner
        </h2>
        <p className="seo-text-paragraph">
          As a leading <strong>smart watch manufacturer</strong> based in China,
          Microwear specializes in providing top-tier wearable technology
          solutions for global brands. With over 10 years of expertise in{" "}
          <strong>smartwatch OEM/ODM services</strong>, we control the entire
          supply chain from R&D to final assembly.
        </p>
        <p className="seo-text-paragraph">
          Whether you are looking for health-tracking wearables, GPS sports
          watches, or budget-friendly fitness trackers, our factory ensures
          rigorous quality control (ISO certified) and competitive wholesale
          pricing. Partner with Microwear to scale your wearable business today.
        </p>
      </div>
    </section>
  );
};
