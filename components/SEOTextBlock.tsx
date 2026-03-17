import React from "react";
import "./SEOTextBlock.css";

interface SEOTextBlockProps {
  category?: string;
}

export const SEOTextBlock: React.FC<SEOTextBlockProps> = ({ category }) => {
  return (
    <section className={`seo-text-block ${category ? `seo-${category}` : ""}`}>
      <div className="seo-text-container">
        <h2 className="seo-text-title">
          Microwear Smartwatch - Your Trusted OEM/ODM Manufacturer Partner
        </h2>
        <p className="seo-text-paragraph">
          As a leading <strong>microwear smartwatch manufacturer</strong> based in China,
          Microwear specializes in providing top-tier wearable technology
          solutions for global B2B brands. With over 10 years of expertise in{" "}
          <strong>microwear smartwatch OEM/ODM services</strong>, we control the entire
          supply chain from R&D to final assembly.
        </p>
        <p className="seo-text-paragraph">
          Whether you are looking for health-tracking wearables, GPS sports
          watches, or budget-friendly fitness trackers, our factory ensures
          rigorous quality control (ISO9001 certified) and competitive wholesale
          pricing. Partner with Microwear for bulk smartwatch orders and scale your wearable business today.
        </p>
      </div>
    </section>
  );
};
