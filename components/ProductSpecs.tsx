import React, { useState } from "react";
import "./ProductSpecs.css";
import type { Product } from "@/types/product";

interface ProductSpecsProps {
  product: Product;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<"technical" | "oem">("technical");

  const { specifications, oemOptions, distributorUSPs } = product;

  // Mock OEM options if not present
  const oem = oemOptions || {
    laserLogo: true,
    bootScreen: true,
    customStrap: true,
    giftBox: true,
    appSdk: true,
  };

  // Mock USPs if not present
  const usps = distributorUSPs || [
    "Lowest Return Rate (<1%)",
    "High Profit Margin for Distributors",
    "Market Trending Design 2025",
  ];

  return (
    <div className="product-specs-section">
      <div className="specs-container">
        {/* Main Content Area */}
        <div className="specs-main">
          <div className="specs-header">
            <h2>Product Specifications</h2>
          </div>

          <div className="specs-tabs">
            <button
              className={`tab-btn ${activeTab === "technical" ? "active" : ""}`}
              onClick={() => setActiveTab("technical")}
            >
              Technical Specs
            </button>
            <button
              className={`tab-btn ${activeTab === "oem" ? "active" : ""}`}
              onClick={() => setActiveTab("oem")}
            >
              OEM Customization
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "technical" && (
              <div className="technical-specs-table">
                <table>
                  <tbody>
                    <tr>
                      <td className="spec-label">Chipset</td>
                      <td className="spec-value">
                        {specifications.chipset || "Realtek 8763EWE"}
                      </td>
                    </tr>
                    <tr>
                      <td className="spec-label">Display</td>
                      <td className="spec-value">{specifications.display}</td>
                    </tr>
                    <tr>
                      <td className="spec-label">Battery</td>
                      <td className="spec-value">{specifications.battery}</td>
                    </tr>
                    <tr>
                      <td className="spec-label">Waterproof Rating</td>
                      <td className="spec-value">
                        {specifications.waterResistance}
                      </td>
                    </tr>
                    <tr>
                      <td className="spec-label">App Name</td>
                      <td className="spec-value">
                        {specifications.appName || "MActivePro / FitCloudPro"}
                      </td>
                    </tr>
                    <tr>
                      <td className="spec-label">Certification</td>
                      <td className="spec-value">
                        {specifications.certification || "CE, RoHS, FCC, MSDS"}
                      </td>
                    </tr>
                    <tr>
                      <td className="spec-label">Materials</td>
                      <td className="spec-value">
                        {specifications.materials ||
                          "Zinc Alloy Case + Silicone Strap"}
                      </td>
                    </tr>
                    <tr>
                      <td className="spec-label">Dimensions</td>
                      <td className="spec-value">
                        {specifications.dimensions}
                      </td>
                    </tr>
                    <tr>
                      <td className="spec-label">Connectivity</td>
                      <td className="spec-value">
                        {specifications.connectivity?.join(", ") ||
                          "Bluetooth 5.0"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "oem" && (
              <div className="oem-grid">
                <div className={`oem-card ${oem.laserLogo ? "available" : ""}`}>
                  <div className="oem-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h4>Laser Logo</h4>
                  <p>Custom branding on watch case</p>
                </div>

                <div
                  className={`oem-card ${oem.bootScreen ? "available" : ""}`}
                >
                  <div className="oem-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h4>Boot Screen</h4>
                  <p>Custom startup animation</p>
                </div>

                <div
                  className={`oem-card ${oem.customStrap ? "available" : ""}`}
                >
                  <div className="oem-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </div>
                  <h4>Custom Strap</h4>
                  <p>Materials & Colors</p>
                </div>

                <div className={`oem-card ${oem.giftBox ? "available" : ""}`}>
                  <div className="oem-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 12 20 22 4 22 4 12" />
                      <rect x="2" y="7" width="20" height="5" />
                      <line x1="12" y1="22" x2="12" y2="7" />
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </svg>
                  </div>
                  <h4>Gift Box</h4>
                  <p>Custom packaging design</p>
                </div>

                <div className={`oem-card ${oem.appSdk ? "available" : ""}`}>
                  <div className="oem-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>
                  <h4>App SDK</h4>
                  <p>Software development kit</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="specs-sidebar">
          <div className="usps-box">
            <h3>Why This Model?</h3>
            <ul>
              {usps.map((usp, index) => (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {usp}
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-card">
            <h4>Need more details?</h4>
            <p>Contact our sales team for a full quotation.</p>
            <a href="/contact" className="contact-btn">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
