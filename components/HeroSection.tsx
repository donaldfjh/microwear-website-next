"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "./HeroSection.css";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const heroProducts = [
  {
    id: "W11pro",
    image: "/images/products/w11poverall.webp",
    name: "Watch 11 Pro",
    altText:
      "Microwear W11 Pro Smart Watch - High Resolution AMOLED Display with Health Monitoring",
  },
  {
    id: "mw-fit-lite",
    image: "/images/products/S11OverAll.png",
    name: "Watch S11",
    altText:
      "Microwear S11 Fitness Smartwatch - Sports and Health Tracking Wearable",
  },
  {
    id: "mw-sport-ultra",
    image: "/images/products/Ultra5Overall.jpg",
    name: "Watch Ultra 5",
    altText:
      "Microwear Ultra 5 Premium Smartwatch - Professional OEM Wearable Technology",
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Elevate Your Lifestyle with MicroWear",
  subtitle = "Premium smartwatches designed for the modern individual. Track your health, stay connected, and express your style.",
  ctaText = "Explore Products",
  ctaLink = "/products",
  secondaryCtaText,
  secondaryCtaLink,
  onCtaClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Remove bulk image preloading, keep LCP image priority loading controlled by layout and priority

  // Auto-cycle through images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heroProducts.length
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  // If there's a custom click handler, use regular anchor to allow preventDefault
  const CtaComponent = onCtaClick ? "a" : Link;

  const currentProduct = heroProducts[currentImageIndex];

  return (
    <section className="hero-section">
      <div className="hero-background">
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={currentProduct.image}
            alt={currentProduct.altText}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </motion.div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <CtaComponent
              href={ctaLink}
              className="hero-cta"
              onClick={onCtaClick ? handleCtaClick : undefined}
            >
              {ctaText}
            </CtaComponent>
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink} className="hero-cta secondary">
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
