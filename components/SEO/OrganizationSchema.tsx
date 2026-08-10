import React from "react";
import { SEO_CONFIG, FACTS } from "@/lib/seo-config";

/**
 * Organization Schema — always driven by SEO_CONFIG (GEO single source of truth)
 */
export const OrganizationSchema: React.FC = () => {
  const baseUrl = SEO_CONFIG.site.url;
  const { company, contact, social } = SEO_CONFIG;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: `${baseUrl}/`,
    logo: `${baseUrl}/images/logos/image.png`,
    description: company.description,
    foundingDate: company.foundingDate,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 200,
      unitText: "employees",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      email: contact.email,
      contactType: "sales",
      availableLanguage: ["English", "Chinese"],
    },
    sameAs: [
      social.facebook,
      social.linkedin,
      social.youtube,
      social.twitter,
      social.instagram,
    ],
    areaServed: `${FACTS.markets} countries`,
    makesOffer: {
      "@type": "Offer",
      description: `MOQ ${FACTS.moqWatchShort}. ${FACTS.quoteCta}.`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
