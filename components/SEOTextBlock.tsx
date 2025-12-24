import React from "react";
import "./SEOTextBlock.css";

interface SEOTextBlockProps {
  category: "homepage" | "product-list" | "ai-glasses";
}

export const SEOTextBlock: React.FC<SEOTextBlockProps> = ({ category }) => {
  if (category === "homepage") {
    return (
      <section className="seo-text-block">
        <div className="container">
          <div className="seo-content">
            <h2>Leading Smart Watch Manufacturer & OEM/ODM Partner</h2>
            <p>
              Microwear is a premier <strong>smart watch factory</strong> specializing in high-quality wearable technology for global brands. 
              We offer comprehensive <strong>smart watch wholesale</strong> solutions, including <strong>white label smart watch app customization</strong> 
              and bulk manufacturing services.
            </p>
            <p className="seo-keywords">
              Our expertise covers:
              <span>• Best blood glucose monitoring smart watch for elderly OEM</span>
              <span>• Smart watch with WhatsApp reply and AI voice assistant factory</span>
              <span>• Reliable smart watch supplier for European market with CE RoHS</span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (category === "product-list") {
    return (
      <section className="seo-text-block">
        <div className="container">
          <div className="seo-content">
            <h2>Premium Wholesale Smart Watches for B2B Clients</h2>
            <p>
              Explore our extensive catalog of <strong>low power consumption AMOLED smart watches</strong> designed for durability and performance. 
              Whether you need <strong>bulk smart watches with custom boot logo</strong> for corporate gifts or specialized health monitoring devices, 
              Microwear delivers ISO-certified quality at competitive factory prices.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return null;
};
