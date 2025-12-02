"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./HeroSection.css";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}

const heroProducts = [
  {
    id: "W11pro",
    image: "/images/products/w11poverall.png",
    name: "Watch 11 Pro",
  },
  {
    id: "mw-fit-lite",
    image: "/images/products/S11OverAll.png",
    name: "Watch S11",
  },
  {
    id: "mw-sport-ultra",
    image: "/images/products/Ultra5Overall.jpg",
    name: "Watch Ultra 5",
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Elevate Your Lifestyle with MicroWear",
  subtitle = "Premium smartwatches designed for the modern individual. Track your health, stay connected, and express your style.",
  ctaText = "Explore Products",
  ctaLink = "/products",
  onCtaClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all hero images
  useEffect(() => {
    heroProducts.forEach((product) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = product.image;
      document.head.appendChild(link);
    });
  }, []);

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

  const currentProduct = heroProducts[currentImageIndex];

  return (
    <section className="hero-section">
      <div className="hero-background">
        <Image
          src={currentProduct.image}
          alt={`${currentProduct.name} - Premium Smartwatch`}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <a href={ctaLink} className="hero-cta" onClick={handleCtaClick}>
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};
