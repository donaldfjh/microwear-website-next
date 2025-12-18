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
    { path: "/products?category=AI Glasses", label: "AI Glasses" },
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
    if (path === "/products") {
      const category = searchParams.get("category");
      // If we are on /products but have the AI Glasses category, don't highlight "Smart Watches"
      if (pathname === "/products" && category === "AI Glasses") {
        return false;
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
