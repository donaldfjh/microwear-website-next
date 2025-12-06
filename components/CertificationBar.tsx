import React from "react";
import "./CertificationBar.css";

export const CertificationBar: React.FC = () => {
  // TODO: Replace these text placeholders with real certification logo images (CE, RoHS, ISO, FCC)
  // Upload your certification logos to /public/images/certifications/ folder
  // Then update the certifications array below with image paths

  const certifications = [
    { name: "ISO 9001", placeholder: true },
    { name: "CE Certified", placeholder: true },
    { name: "RoHS Compliant", placeholder: true },
    { name: "FCC Approved", placeholder: true },
  ];

  return (
    <section className="certification-bar">
      <div className="certification-container">
        <p className="certification-label">Certified Manufacturing Standards</p>
        <div className="certification-logos">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-badge">
              {cert.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
