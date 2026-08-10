/**
 * SEO / GEO Configuration for Microwear
 * Single source of truth for company facts (meta, schema, FAQ, chat, llms.txt).
 * Unit prices are never published — always direct buyers to a factory quote.
 */

export const SEO_CONFIG = {
  site: {
    name: "Microwear",
    url: "https://microwear.info",
    locale: "en_US",
    language: "en",
  },

  company: {
    name: "Microwear",
    legalName: "Shenzhen NJY Technology Co., Ltd",
    foundingDate: "2008",
    yearsExperience: "15+",
    description:
      "Microwear (Shenzhen NJY Technology Co., Ltd) is a smartwatch and AI glasses OEM/ODM manufacturer founded in 2008 in Shenzhen, China. ISO9001-certified factory with 200+ staff, 8 SMT lines, and 2M+ units/year capacity, serving 500+ B2B partners across 30+ countries.",
    slogan: "Redefining wearable technology for the modern lifestyle",
    employees: "200+",
    patents: "300+",
    partners: "500+",
    marketsCount: "30+",
    capacity: "2M+",
    smtLines: "8",
    facilitySize: "15,000㎡",
  },

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

  business: {
    moq: "200",
    moqAiGlasses: "200",
    publishPrices: false,
    leadTime: "15-25 days",
    sampleLeadTime: "7 days",
    certifications: ["ISO9001", "CE", "FCC", "RoHS", "CCC"],
    services: ["OEM", "ODM", "White Label", "Custom Design"],
    paymentMethods: ["T/T", "PayPal", "L/C", "Western Union", "Alipay"],
  },

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

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61578917438987",
    linkedin: "https://www.linkedin.com/in/donald-microwear/",
    twitter: "https://twitter.com/microwear",
    instagram: "https://instagram.com/microwear",
    youtube: "https://www.youtube.com/@Microwear",
  },

  defaults: {
    titleTemplate: "%s | Microwear Smartwatch Manufacturer",
    defaultTitle:
      "Microwear | Smartwatch & AI Glasses OEM Manufacturer China (Since 2008)",
    defaultDescription:
      "Microwear is a Shenzhen smartwatch and AI glasses OEM/ODM factory founded in 2008. MOQ 200pcs, 200+ staff, ISO9001 / CE / FCC / RoHS. Serving 500+ B2B partners in 30+ countries. Contact for factory quote.",
    defaultKeywords: [
      "smartwatch manufacturer",
      "smartwatch OEM factory",
      "AI glasses manufacturer",
      "microwear smartwatch",
      "wholesale smartwatch",
      "B2B smartwatch supplier",
    ],
  },

  categories: {
    smartwatches: {
      name: "Smartwatches",
      slug: "products",
      keywords: [
        "smartwatch OEM",
        "fitness tracker factory",
        "GPS smartwatch wholesale",
      ],
    },
    aiGlasses: {
      name: "AI Glasses",
      slug: "ai-glasses",
      keywords: [
        "AI glasses OEM",
        "ChatGPT glasses",
        "smart glasses manufacturer",
      ],
    },
  },

  b2bKeywords: [
    "smartwatch OEM manufacturer",
    "smartwatch factory China",
    "bulk smartwatch orders",
    "wholesale smartwatch B2B",
    "custom smartwatch with logo",
    "smartwatch MOQ 200",
    "white label smartwatch supplier",
    "smartwatch factory direct quote",
  ],

  geoKeywords: [
    "smartwatch manufacturer Europe",
    "AI glasses wholesale USA",
    "wearable OEM Middle East",
    "smartwatch supplier Asia",
    "smartwatch manufacturer Australia",
  ],
} as const;

/** Canonical facts for GEO-consistent copy */
export const FACTS = {
  brand: SEO_CONFIG.company.name,
  legalName: SEO_CONFIG.company.legalName,
  founded: SEO_CONFIG.company.foundingDate,
  years: SEO_CONFIG.company.yearsExperience,
  employees: SEO_CONFIG.company.employees,
  patents: SEO_CONFIG.company.patents,
  partners: SEO_CONFIG.company.partners,
  markets: SEO_CONFIG.company.marketsCount,
  capacity: SEO_CONFIG.company.capacity,
  smtLines: SEO_CONFIG.company.smtLines,
  facility: SEO_CONFIG.company.facilitySize,
  moqWatchShort: `${SEO_CONFIG.business.moq} pcs`,
  moqGlasses: `${SEO_CONFIG.business.moqAiGlasses} pcs`,
  quoteCta: "Contact for factory quote",
  certsShort: "ISO9001 / CE / FCC / RoHS",
  sampleLead: SEO_CONFIG.business.sampleLeadTime,
  productionLead: SEO_CONFIG.business.leadTime,
  phone: SEO_CONFIG.contact.phone,
  email: SEO_CONFIG.contact.email,
  city: "Shenzhen, China",
} as const;

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
    keywords: keywords || [...SEO_CONFIG.defaults.defaultKeywords],
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: `${title} | ${SEO_CONFIG.site.name}`,
      description,
      images: ogImage ? [ogImage] : undefined,
      url: canonical,
      type: "website" as const,
    },
  };
}

export function generateProductMetaTags(product: {
  name: string;
  description: string;
  price?: number;
  features?: string[];
}) {
  const { name, features } = product;

  const title = `${name} Smartwatch OEM | MOQ ${FACTS.moqWatchShort} | Microwear Factory`;
  const metaDescription = features?.length
    ? `${name} OEM smartwatch by Microwear. ${features.join(", ")}. ISO9001 certified factory founded ${FACTS.founded}, MOQ ${FACTS.moqWatchShort}. ${FACTS.quoteCta}. Free samples.`
    : `${name} OEM smartwatch by Microwear. ISO9001 certified factory founded ${FACTS.founded}, MOQ ${FACTS.moqWatchShort}. ${FACTS.quoteCta}. Free samples. Custom logo & SDK.`;

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
