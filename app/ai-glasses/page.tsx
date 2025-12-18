import { getProducts } from "@/lib/products";
import { ProductGrid } from "@/components/ProductGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title: "AI Smart Glasses - Microwear Next-Gen Wearables",
  description:
    "Explore Microwear's revolutionary AI Smart Glasses. Featuring integrated AI assistant, AR heads-up display, and open-ear audio for a seamless connected experience.",
  alternates: {
    canonical: "https://microwear.info/ai-glasses",
  },
  openGraph: {
    title: "AI Smart Glasses - Microwear Next-Gen Wearables",
    description:
      "Explore Microwear's revolutionary AI Smart Glasses with integrated AI assistant and AR capabilities.",
    type: "website",
  },
};

export default async function AIGlassesPage() {
  const products = await getProducts();
  const aiGlasses = products.filter((p) => p.category === "AI Glasses");

  return (
    <div className="ai-glasses-page">
      <div id="collection" className="ai-collection-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h1>AI Smart Glasses Collection</h1>
              <p>
                Seamlessly merge the digital and physical worlds with our
                advanced wearable technology.
              </p>
            </div>
          </ScrollReveal>

          {aiGlasses.length > 0 ? (
            <ScrollReveal delay={0.2}>
              <ProductGrid products={aiGlasses} />
            </ScrollReveal>
          ) : (
            <div className="empty-state">
              <p>New models coming soon.</p>
            </div>
          )}
        </div>
      </div>
      
      <section className="features-section">
        <div className="container">
           <ScrollReveal>
            <h2 className="features-title">Why Choose Microwear AI Glasses?</h2>
          </ScrollReveal>
          
          <div className="features-grid">
            <ScrollReveal delay={0.1}>
              <div className="feature-card">
                <h3>🤖 Integrated AI Assistant</h3>
                <p>Chat with ChatGPT/Gemini directly through your glasses for instant answers and assistance.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="feature-card">
                <h3>👓 AR Heads-up Display</h3>
                <p>View navigation, notifications, and real-time translation right in your field of view.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="feature-card">
                <h3>🔊 Open-Ear Audio</h3>
                <p>Enjoy music and calls while staying aware of your surroundings with directional audio.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
