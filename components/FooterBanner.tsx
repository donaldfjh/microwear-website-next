"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./FooterBanner.css";

export const FooterBanner: React.FC = () => {
  return (
    <section className="footer-banner-section">
      <div className="footer-banner-container">
        {/* Left Side - Company Location */}
        <div className="company-location">
          <ScrollReveal>
            <h3 className="location-title">Visit Our Showroom</h3>
          </ScrollReveal>
          <div className="location-details">
            <ScrollReveal delay={0.1}>
              <div className="location-item">
                <span className="location-icon">📍</span>
                <div className="location-text">
                  <p className="location-label">Address</p>
                  <p className="location-value">
                    JiaDa R&D Building, North Hi-Tech Park, Nanshan District
                    <br />
                    Shenzhen 518057, China
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="location-item">
                <span className="location-icon">📞</span>
                <div className="location-text">
                  <p className="location-label">WhatsApp</p>
                  <p className="location-value">+852 6733 7121</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="location-item">
                <span className="location-icon">✉️</span>
                <div className="location-text">
                  <p className="location-label">Email</p>
                  <p className="location-value">donaldfang@njytech.com.cn</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="location-item">
                <span className="location-icon">🕒</span>
                <div className="location-text">
                  <p className="location-label">Business Hours</p>
                  <p className="location-value">
                    Mon - Fri: 9:30 AM - 6:30 PM
                    <br />
                    Sat: 9:30 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Side - Banner */}
        <ScrollReveal delay={0.2} className="promo-banner-wrapper">
          <div className="promo-banner">
            <div className="banner-content">
              <span className="banner-badge">Limited Time Offer</span>
              <h2 className="banner-title">
                Get Started with MicroWear Smart Watch OEM
              </h2>
              <p className="banner-description">
                Experience the future of wearable technology. Contact us today
                for exclusive deals and personalized recommendations.
              </p>
              <Link href="/contact" className="banner-cta">
                Contact Factory Now
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
