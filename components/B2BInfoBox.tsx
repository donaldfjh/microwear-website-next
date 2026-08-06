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
  priceRange,
  leadTime = "15-25 days",
  certifications = ["CE", "FCC", "RoHS", "ISO9001"]
}) => {
  return (
    <div
      className="b2b-info-box"
      style={{
        background:
          'linear-gradient(165deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: '20px',
        padding: '24px',
        color: '#f8fafc',
        marginBottom: '32px',
        boxShadow: 'var(--mw-shadow-soft)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
      }}
    >
      <h3
        style={{
          fontSize: '20px',
          marginBottom: '16px',
          fontWeight: '700',
          color: '#f8fafc',
        }}
      >
        B2B Wholesale Information
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '20px',
        }}
      >
        <div>
          <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 600 }}>
            MOQ
          </span>
          <p style={{ fontSize: '18px', fontWeight: '700', color: '#f8fafc', margin: '4px 0 0' }}>
            {moq} pcs
          </p>
        </div>
        <div>
          <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 600 }}>
            Price Range
          </span>
          <p style={{ fontSize: '18px', fontWeight: '700', color: '#f8fafc', margin: '4px 0 0' }}>
            {priceRange || 'Contact for pricing'}
          </p>
        </div>
        <div>
          <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 600 }}>
            Lead Time
          </span>
          <p style={{ fontSize: '18px', fontWeight: '700', color: '#f8fafc', margin: '4px 0 0' }}>
            {leadTime}
          </p>
        </div>
        <div>
          <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 600 }}>
            Certifications
          </span>
          <p style={{ fontSize: '18px', fontWeight: '700', color: '#f8fafc', margin: '4px 0 0' }}>
            {certifications.join(', ')}
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Link
          href="/contact"
          style={{
            background: 'linear-gradient(180deg, #7ef0dc 0%, #5eead4 48%, #2dd4bf 100%)',
            color: '#04201c',
            padding: '12px 24px',
            borderRadius: '999px',
            fontWeight: '700',
            textDecoration: 'none',
            boxShadow:
              '0 1px 0 rgba(255,255,255,0.45) inset, 0 10px 24px rgba(94,234,212,0.28)',
          }}
        >
          Get Quote
        </Link>
        <Link
          href="/oem-services"
          style={{
            background: 'rgba(255,255,255,0.06)',
            color: '#f8fafc',
            padding: '12px 24px',
            borderRadius: '999px',
            fontWeight: '650',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          OEM Services
        </Link>
      </div>
    </div>
  );
};
