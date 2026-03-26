/**
 * SEO Configuration for Microwear Website
 * Centralized SEO settings for easy maintenance
 */

export const SEO_CONFIG = {
  // Site Information
  site: {
    name: "Microwear",
    url: "https://microwear.info",
    locale: "en_US",
    language: "en",
  },

  // Company Information
  company: {
    name: "Microwear",
    legalName: "Shenzhen NJY Technology Co., Ltd",
    foundingDate: "2008",
    description: "Leading smartwatch and AI glasses OEM/ODM manufacturer with 15+ years experience. ISO9001 certified factory specializing in B2B wholesale, custom smartwatch manufacturing, and wearable technology solutions.",
    slogan: "Redefining wearable technology for the modern lifestyle",
    employees: "300+",
    patents: "1000+",
  },

  // Contact Information
  contact: {
    phone: "+852-6733-7121",
    email: "donaldfang@njytech.com.cn",
    whatsapp: "+85267337121",
    address: {
      street: "JiaDa R&D Building, North Hi-Tech Park, Nanshan District",
      city: "Shenzhen",
      region: "Guangdong",
      postalCode: "518057",
      country: "CN",
    },
    geo: {
      latitude: 22.5431,
      longitude: 114.0579,
    },
  },

  // Business Information
  business: {
    moq: "200",
    priceRange: {
      min: 15,
      max: 50,
      currency: "USD",
    },
    leadTime: "7-15 days",
    certifications: ["ISO9001", "CE", "FCC", "RoHS", "CCC"],
    services: ["OEM", "ODM", "White Label", "Custom Design"],
    paymentMethods: ["T/T", "PayPal", "L/C", "Western Union", "Alipay"],
  },

  // Target Markets
  markets: [
    "United States",
    "United Kingdom", 
    "Germany",
    "France",
    "Japan",
    "Australia",
    "United Arab Emirates",
    "Canada",
    "Netherlands",
    "Spain",
  ],

  // Social Media
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61578917438987",
    linkedin: "https://www.linkedin.com/in/donald-microwear/",
    twitter: "https://twitter.com/microwear",
    instagram: "https://instagram.com/microwear",
    youtube: "https://www.youtube.com/@Microwear",
  },

  // Default Meta Tags
  defaults: {
    titleTemplate: "%s | Microwear Smartwatch Manufacturer",
    defaultTitle: "Microwear | Top Smart Watch Manufacturer & OEM/ODM Factory in China",
    defaultDescription: "Leading smart watch manufacturer Microwear offers premium OEM/ODM wearable solutions. ISO-certified factory, wholesale smartwatches, health trackers, and GPS sports watches for global brands. MOQ 200pcs, wholesale $15-50, free samples.",
    defaultKeywords: [
      "smartwatch manufacturer",
      "smartwatch OEM factory",
      "AI glasses manufacturer",
      "microwear smartwatch",
      "wholesale smartwatch",
      "B2B smartwatch supplier",
    ],
  },

  // Product Categories
  categories: {
    smartwatches: {
      name: "Smartwatches",
      slug: "products",
      keywords: ["smartwatch OEM", "fitness tracker factory", "GPS smartwatch wholesale"],
    },
    aiGlasses: {
      name: "AI Glasses",
      slug: "ai-glasses",
      keywords: ["AI glasses OEM", "ChatGPT glasses", "smart glasses manufacturer"],
    },
  },

  // B2B Keywords
  b2bKeywords: [
    "smartwatch OEM manufacturer",
    "smartwatch factory China",
    "bulk smartwatch orders",
    "wholesale smartwatch B2B",
    "custom smartwatch with logo",
    "smartwatch MOQ 200",
    "white label smartwatch supplier",
    "smartwatch factory direct pricing",
  ],

  // Geo Keywords
  geoKeywords: [
    "smartwatch manufacturer Europe",
    "AI glasses wholesale USA",
    "wearable OEM Middle East",
    "smartwatch supplier Asia",
    "smartwatch manufacturer Australia",
  ],
};

/**
 * Generate Meta Tags for a page
 */
export function generateMetaTags(options: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}) {
  const { title, description, keywords, canonical, ogImage } = options;
  
  return {
    title: `${title} | ${SEO_CONFIG.site.name}`,
    description,
    keywords: keywords || SEO_CONFIG.defaults.defaultKeywords,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: `${title} | ${SEO_CONFIG.site.name}`,
      description,
      images: ogImage ? [ogImage] : undefined,
      url: canonical,
      type: "website",
    },
  };
}

/**
 * Generate Product Meta Tags
 */
export function generateProductMetaTags(product: {
  name: string;
  description: string;
  price?: number;
  features?: string[];
}) {
  const { name, price, features } = product;
  
  const title = `${name} Smartwatch OEM | Wholesale $${price || '15-50'} | Microwear Factory`;
  const metaDescription = features?.length 
    ? `${name} OEM smartwatch by Microwear. ${features.join(', ')}. ISO9001 certified factory, MOQ 200pcs, wholesale $${price || '15-50'}. Free samples, 7-15 day delivery.`
    : `${name} OEM smartwatch by Microwear. ISO9001 certified factory, MOQ 200pcs, wholesale $${price || '15-50'}. Free samples, 7-15 day delivery. Custom logo & SDK.`;
  
  return generateMetaTags({
    title,
    description: metaDescription,
    keywords: [
      `${name} OEM`,
      `${name.toLowerCase()} manufacturer`,
      ...SEO_CONFIG.b2bKeywords.slice(0, 3),
    ],
  });
}