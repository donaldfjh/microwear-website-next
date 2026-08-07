import React from "react";
import Link from "next/link";

interface B2BInfoBoxProps {
  moq?: number;
  priceRange?: string;
  leadTime?: string;
  certifications?: string[];
}

export const B2BInfoBox: React.FC<B2BInfoBoxProps> = ({
  moq = 100,
  priceRange,
  leadTime = "15-25 days",
  certifications = ["CE", "FCC", "RoHS", "ISO9001"],
}) => {
  return (
    <div className="b2b-info-box">
      <h3 className="b2b-info-box__title">B2B Wholesale Information</h3>
      <div className="b2b-info-box__grid">
        <div>
          <span className="b2b-info-box__label">MOQ</span>
          <p className="b2b-info-box__value">{moq} pcs</p>
        </div>
        <div>
          <span className="b2b-info-box__label">Price Range</span>
          <p className="b2b-info-box__value">
            {priceRange || "Contact for pricing"}
          </p>
        </div>
        <div>
          <span className="b2b-info-box__label">Lead Time</span>
          <p className="b2b-info-box__value">{leadTime}</p>
        </div>
        <div>
          <span className="b2b-info-box__label">Certifications</span>
          <p className="b2b-info-box__value">{certifications.join(", ")}</p>
        </div>
      </div>
      <div className="b2b-info-box__actions">
        <Link href="/contact" className="b2b-info-box__btn b2b-info-box__btn--primary">
          Get Quote
        </Link>
        <Link
          href="/oem-services"
          className="b2b-info-box__btn b2b-info-box__btn--ghost"
        >
          OEM Services
        </Link>
      </div>
    </div>
  );
};
