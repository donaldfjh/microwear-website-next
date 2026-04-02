import { getProducts } from "@/lib/products";
import { ProductCatalog } from "./ProductCatalog";
import { BreadcrumbSchema } from "@/components/SEO/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microwear Smartwatch Collection | OEM/ODM Factory Direct 2026",
  description:
    "Browse complete microwear smartwatch collection - 20+ models for B2B wholesale. ISO9001 certified OEM/ODM factory. MOQ 200pcs, $15-30. Free samples, 24h quotes. Custom logo, SDK, packaging. Every microwear smart watch features advanced health tracking, GPS, premium build.",
  keywords: [
    "microwear smartwatch",
    "microwear smartwatches",
    "microwear smart watch",
    "microwear watch",
    "smartwatch microwear",
    "microwear smartwatch manufacturer",
    "microwear smartwatch factory",
    "microwear smartwatch collection",
    "microwear smartwatch models",
    "microwear smartwatch price",
    "microwear smartwatch catalog",
    "microwear smartwatch wholesale",
    "OEM smartwatch manufacturer",
    "ODM smartwatch factory",
    "wholesale smartwatch bulk",
    "bulk smartwatch orders",
    "B2B smartwatch supplier",
    "custom smartwatch manufacturer",
    "smartwatch OEM China"
  ],
  alternates: {
    canonical: "https://microwear.info/products",
  },
  openGraph: {
    title: "Microwear Smartwatch Collection | OEM/ODM Factory Direct",
    description:
      "Complete microwear smartwatch collection - 20+ models for B2B wholesale. ISO9001 certified factory, MOQ 200pcs, $15-50. Free samples, custom logo, SDK support.",
    type: "website",
  },
};

export default async function ProductsPage() {
  // Fetch all products at build time (SSG)
  const products = await getProducts();

  // Filter out AI Glasses as they have their own dedicated page
  const smartWatches = products.filter((p) => p.category !== "AI Glasses");

  // JSON-LD Structured Data for Product Collection
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Microwear Smartwatch OEM/ODM Manufacturer | Wholesale B2B Bulk Orders",
    "description": "Complete microwear smartwatch OEM/ODM product catalog - ISO9001 certified manufacturer direct. B2B wholesale pricing $15-50, bulk orders welcome. Custom logo, SDK, packaging. Every microwear smartwatch features advanced health tracking, GPS, premium build. Smartwatch microwear factory with 10+ years expertise. MOQ 200pcs, free samples, 24h quotes, 7-15 day lead time. Professional smartwatch microwear manufacturer for global B2B partners.",
    "url": "https://microwear.info/products",
    "keywords": "microwear smartwatch, microwear smartwatches, microwear smart watch, smartwatch microwear, microwear smartwatch manufacturer, microwear smartwatch factory, wholesale smartwatch bulk, bulk smartwatch orders, OEM ODM smartwatch, B2B smartwatch manufacturer, smartwatch microwear factory, microwear factory direct, smartwatch manufacturer China, microwear bulk orders, smartwatch OEM factory, microwear supplier, microwear OEM ODM manufacturer, smartwatch microwear wholesale",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": smartWatches.length,
      "itemListElement": smartWatches.slice(0, 10).map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "url": `https://microwear.info/products/${product.id}`,
          "brand": {
            "@type": "Brand",
            "name": "Microwear"
          },
          "category": product.category,
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-03-21",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Microwear"
            },
            "businessFunction": "wholesale",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "15.00",
              "minPrice": "15.00",
              "maxPrice": "80.00",
              "priceCurrency": "USD"
            }
          }
        }
      }))
    }
  };

  return (
    <>
      {/* SEO: Structured Data */}
      <BreadcrumbSchema items={[{ name: "Products", url: "/products" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      
      {/* Products Intro Section - Enhanced content for better engagement */}
      <section className="products-intro-section" style={{
        padding: '60px 24px',
        backgroundColor: '#1a1a1a',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '42px', 
            fontWeight: '700',
            marginBottom: '24px'
          }}>
            Microwear Smartwatch Collection
          </h1>
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.8',
            opacity: 0.9,
            marginBottom: '32px'
          }}>
            Explore our complete range of <strong>microwear smartwatch</strong> models designed for B2B partners.
            From fitness trackers to premium AMOLED wearables, every microwear smart watch delivers 
            exceptional quality and performance at competitive wholesale prices.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px',
            marginTop: '48px'
          }}>
            <div>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#4CAF50' }}>20+</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Smartwatch Models</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#4CAF50' }}>$15-50</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Wholesale Price</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#4CAF50' }}>200pcs</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>MOQ</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#4CAF50' }}>7-15 Days</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Lead Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM/ODM Services Section */}
      <section style={{
        padding: '60px 24px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            OEM/ODM Services for Microwear Smartwatch
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px'
          }}>
            <div style={{ padding: '32px', background: 'white', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
                🎨 Custom Logo & Branding
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Laser engraving, silk printing, or embossed logo on watch face, case back, and packaging. 
                Build your brand with microwear smartwatch OEM services.
              </p>
            </div>
            
            <div style={{ padding: '32px', background: 'white', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
                ⚙️ Hardware Customization
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Custom sensors, battery capacity, display type (AMOLED/LCD), and strap materials. 
                Tailor every microwear smart watch to your market needs.
              </p>
            </div>
            
            <div style={{ padding: '32px', background: 'white', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
                💻 Software & SDK
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Custom firmware, app development, and full SDK support. Integrate your unique features 
                into microwear smartwatch platform.
              </p>
            </div>
            
            <div style={{ padding: '32px', background: 'white', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
                📦 Packaging Design
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Custom retail boxes, user manuals, and accessories. Premium packaging solutions for 
                your microwear smartwatch products.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a 
              href="/contact?subject=OEM/ODM Inquiry" 
              style={{
                display: 'inline-block',
                padding: '16px 48px',
                backgroundColor: '#1a1a1a',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Request OEM/ODM Quote →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          Frequently Asked Questions
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ padding: '24px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
              What is the MOQ for microwear smartwatch OEM orders?
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Our standard MOQ is 200 pieces per model for OEM orders. For ODM projects with custom 
              hardware/software, MOQ starts from 500pcs. Contact us for flexible terms based on your requirements.
            </p>
          </div>
          
          <div style={{ padding: '24px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
              How long is the lead time for microwear smartwatch bulk orders?
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Sample production: 7-10 days. Bulk orders: 15-25 days after deposit and design confirmation. 
              Express production available for urgent projects (10-15 days, +15% surcharge).
            </p>
          </div>
          
          <div style={{ padding: '24px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
              Do you provide free samples of microwear smartwatch?
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Yes! We provide free samples for qualified B2B buyers. You only need to cover shipping cost. 
              Sample fee will be refunded when you place bulk order (MOQ 200pcs).
            </p>
          </div>
          
          <div style={{ padding: '24px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
              What certifications do microwear smartwatches have?
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              All microwear smartwatch models are CE, FCC, RoHS certified. Our factory is ISO9001:2015 
              certified. Additional certifications (BQB, REACH, etc.) available upon request.
            </p>
          </div>
        </div>
      </section>

      <ProductCatalog products={smartWatches} />
    </>
  );
}
