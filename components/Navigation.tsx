"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import "./Navigation.css";

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Smart Watches" },
    { path: "/ai-glasses", label: "AI Glasses" },
    { path: "/blog", label: "Industry Blog" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Factory" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    // Handle paths with query parameters (e.g., AI Glasses)
    // Note: AI Glasses now has its own route /ai-glasses, so this logic is mostly for legacy support
    if (path.includes("?")) {
      const [basePath, queryString] = path.split("?");
      if (pathname !== basePath) return false;

      const params = new URLSearchParams(queryString);
      let match = true;
      params.forEach((value, key) => {
        if (searchParams.get(key) !== value) match = false;
      });
      return match;
    }

    // Special handling for /products to avoid highlighting when viewing AI Glasses
    // (This is less relevant now that AI Glasses has its own route, but kept for safety)
    if (path === "/products") {
      // If we are on /ai-glasses, don't highlight Smart Watches
      if (pathname === "/ai-glasses") {
        return false;
      }
      
      // If viewing an AI Glasses product detail (based on ID convention), don't highlight Smart Watches
      if (pathname.includes("/products/mw-ai-glasses")) {
        return false;
      }

      const category = searchParams.get("category");
      if (pathname === "/products" && category === "AI Glasses") {
        return false;
      }
    }
    
    // Highlight AI Glasses tab when viewing AI Glasses product details
    if (path === "/ai-glasses") {
       if (pathname.includes("/products/mw-ai-glasses")) {
        return true;
      }
    }

    return pathname.startsWith(path);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">
            <Image
              src="/images/logos/image.svg"
              alt="MicroWear"
              className="logo-image"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={isActive(link.path) ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          {...(isMobileMenuOpen
            ? { "aria-expanded": true }
            : { "aria-expanded": false })}
        >
          <span className={isMobileMenuOpen ? "open" : ""}></span>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <ul className={`nav-links mobile ${isMobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={isActive(link.path) ? "active" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
