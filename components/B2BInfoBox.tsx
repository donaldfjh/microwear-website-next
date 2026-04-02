import React from 'react';
import Link from 'next/link';

interface B2BInfoBoxProps {
  moq?: number;
  priceRange?: string;
  leadTime?: string;
  certifications?: string[];
}

export const B2BInfoBox: React.FC<B2BInfoBoxProps> = ({
  moq = 100,
  priceRange = "$15-50",
  leadTime = "15-25 days",
  certifications = ["CE", "FCC", "RoHS", "ISO9001"]
}) => {
  return (
    <div className="b2b-info-box" style={{
      background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
      borderRadius: '12px',
      padding: '24px',
      color: 'white',
      marginBottom: '32px'
    }}>
      <h3 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: '600' }}>
        B2B Wholesale Information
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
        <div>
          <span style={{ opacity: 0.8 }}>MOQ</span>
          <p style={{ fontSize: '18px', fontWeight: '600' }}>{moq} pcs</p>
        </div>
        <div>
          <span style={{ opacity: 0.8 }}>Price Range</span>
          <p style={{ fontSize: '18px', fontWeight: '600' }}>{priceRange}</p>
        </div>
        <div>
          <span style={{ opacity: 0.8 }}>Lead Time</span>
          <p style={{ fontSize: '18px', fontWeight: '600' }}>{leadTime}</p>
        </div>
        <div>
          <span style={{ opacity: 0.8 }}>Certifications</span>
          <p style={{ fontSize: '18px', fontWeight: '600' }}>{certifications.join(', ')}</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Link href="/contact" style={{
          background: 'white',
          color: '#0ea5e9',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          textDecoration: 'none'
        }}>
          Get Quote
        </Link>
        <Link href="/oem-services" style={{
          background: 'rgba(255,255,255,0.2)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          textDecoration: 'none'
        }}>
          OEM Services
        </Link>
      </div>
    </div>
  );
};
