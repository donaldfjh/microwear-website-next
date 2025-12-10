"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useComparison } from "@/contexts/ComparisonContext";
import "./Navigation.css";

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { comparisonProducts } = useComparison();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Smart Watches" },
    { path: "/blog", label: "Smart Watch Industry Blog" },
    { path: "/about", label: "About Microwear" },
    { path: "/contact", label: "Contact Factory" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const isHomePage = pathname === "/";

  return (
    <nav className={`navigation ${!isHomePage ? "light-theme" : ""}`}>
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
          <li>
            <Link
              href="/comparison"
              className={`nav-compare-btn ${
                isActive("/comparison") ? "active" : ""
              }`}
              aria-label="View Product Comparison"
            >
              Compare
              {comparisonProducts.length > 0 && (
                <span className="compare-badge">
                  {comparisonProducts.length}
                </span>
              )}
            </Link>
          </li>
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
        <li>
          <Link
            href="/comparison"
            className={isActive("/comparison") ? "active" : ""}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Compare Products
            {comparisonProducts.length > 0 && (
              <span className="compare-badge mobile">
                {comparisonProducts.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
