import React from "react";

/**
 * LocalBusiness Schema for Microwear
 * Enhances local SEO and appears in Google Maps/Local Pack
 */
export const LocalBusinessSchema: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://microwear.info/#organization",
    "name": "Microwear",
    "alternateName": [
      "Shenzhen NJY Technology Co., Ltd",
      "Microwear Smartwatch Manufacturer",
      "Microwear OEM Factory"
    ],
    "url": "https://microwear.info",
    "logo": {
      "@type": "ImageObject",
      "url": "https://microwear.info/images/logos/image.png",
      "width": 200,
      "height": 60
    },
    "image": [
      "https://microwear.info/images/products/fac2.png",
      "https://microwear.info/images/products/w11poverall.webp"
    ],
    "description": "Leading smartwatch and AI glasses OEM/ODM manufacturer with 15+ years experience. ISO9001 certified factory specializing in B2B wholesale, custom smartwatch manufacturing, and wearable technology solutions. MOQ 200pcs, wholesale pricing $15-50, free samples for qualified partners.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "JiaDa R&D Building, North Hi-Tech Park, Nanshan District",
      "addressLocality": "Shenzhen",
      "addressRegion": "Guangdong",
      "postalCode": "518057",
      "addressCountry": "CN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5431,
      "longitude": 114.0579
    },
    "telephone": "+852-6733-7121",
    "email": "donaldfang@njytech.com.cn",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+852-6733-7121",
        "contactType": "sales",
        "areaServed": "Global",
        "availableLanguage": ["English", "Chinese", "Spanish"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "email": "donaldfang@njytech.com.cn",
        "contactType": "customer service",
        "areaServed": "Global",
        "availableLanguage": ["English", "Chinese"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61578917438987",
      "https://www.linkedin.com/in/donald-microwear/",
      "https://twitter.com/microwear",
      "https://instagram.com/microwear",
      "https://www.youtube.com/@Microwear"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["T/T", "PayPal", "L/C", "Western Union", "Alipay"],
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "France"
      },
      {
        "@type": "Country",
        "name": "Japan"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Smart Wearable Products",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Smartwatches",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Health & Fitness Smartwatches",
                "description": "ECG, SpO2, Heart Rate monitoring smartwatches for OEM/ODM"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GPS Sports Smartwatches",
                "description": "Outdoor and sports smartwatches with GPS tracking"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Kids Smartwatches",
                "description": "GPS tracking and safety features for children"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "AI Glasses",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "AI Voice Glasses",
                "description": "ChatGPT integrated smart glasses with voice assistant"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "AI Camera Glasses",
                "description": "Sony camera smart glasses for first-person recording"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "award": [
      "ISO9001:2015 Certified",
      "300+ Core Patents",
      "15+ Years Manufacturing Experience"
    ],
    "knowsAbout": [
      "Smart Watch Manufacturing",
      "Wearable Technology",
      "OEM/ODM Services",
      "AI Glasses Development",
      "Health Monitoring Devices",
      "GPS Tracking Technology",
      "B2B Wholesale Distribution"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
};