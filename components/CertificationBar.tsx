import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./CertificationBar.css";

export const CertificationBar: React.FC = () => {
  // TODO: Replace these text placeholders with real certification logo images (CE, RoHS, ISO, FCC)
  // Upload your certification logos to /public/images/certifications/ folder
  // Then update the certifications array below with image paths

  const certifications = [
    {
      name: "ISO 9001",
      placeholder: false,
      image: "/images/certifications/ISO9001.webp",
      alt: "ISO 9001 Quality Management System Certification",
    },
    {
      name: "CE Certified",
      placeholder: false,
      image: "/images/certifications/ce.webp",
      alt: "CE Certified European Conformity",
    },
    {
      name: "RoHS Compliant",
      placeholder: false,
      image: "/images/certifications/rohs.webp",
      alt: "RoHS Compliant - Restriction of Hazardous Substances",
    },
    {
      name: "FCC Approved",
      placeholder: false,
      image: "/images/certifications/fcc-approved.svg",
      alt: "FCC Approved - Federal Communications Commission",
    },
  ];

  return (
    <section className="certification-bar">
      <div className="certification-container">
        <ScrollReveal>
          <p className="certification-label">
            Certified Manufacturing Standards
          </p>
        </ScrollReveal>
        <div className="certification-logos">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 0.1} width="fit-content">
              <div className="certification-item">
                {cert.placeholder ? (
                  <div className="certification-badge">{cert.name}</div>
                ) : (
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    width={120}
                    height={60}
                    className="certification-logo"
                    loading="lazy"
                  />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
