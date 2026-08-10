import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";
import { getAllPostSlugs } from "@/lib/markdown-blogs";
import { SEO_CONFIG } from "@/lib/seo-config";

const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
 { path: "/", changeFrequency: "weekly", priority: 1 },
 { path: "/products", changeFrequency: "weekly", priority: 0.95 },
 { path: "/ai-glasses", changeFrequency: "weekly", priority: 0.9 },
 { path: "/about", changeFrequency: "monthly", priority: 0.85 },
 { path: "/factory", changeFrequency: "monthly", priority: 0.8 },
 { path: "/oem-services", changeFrequency: "monthly", priority: 0.8 },
 { path: "/factory-faq", changeFrequency: "monthly", priority: 0.8 },
 { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
 { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
 { path: "/blog", changeFrequency: "weekly", priority: 0.75 },
 { path: "/comparison", changeFrequency: "monthly", priority: 0.5 },
 { path: "/products/fitness-tracker", changeFrequency: "monthly", priority: 0.7 },
 { path: "/products/health-smartwatch", changeFrequency: "monthly", priority: 0.7 },
 { path: "/products/rugged-smartwatch", changeFrequency: "monthly", priority: 0.7 },
 { path: "/products/kids-smartwatch", changeFrequency: "monthly", priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 const baseUrl = SEO_CONFIG.site.url.replace(/\/$/, "");
 const now = new Date();

 const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((item) => ({
 url: `${baseUrl}${item.path === "/" ? "" : item.path}`,
 lastModified: now,
 changeFrequency: item.changeFrequency,
 priority: item.priority,
 }));

 let productEntries: MetadataRoute.Sitemap = [];
 try {
 const products = await getProducts();
 productEntries = products.map((product) => ({
 url: `${baseUrl}/products/${encodeURIComponent(product.id)}`,
 lastModified: now,
 changeFrequency: "weekly" as const,
 priority: 0.85,
 }));
 } catch {
 productEntries = [];
 }

 const blogEntries: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
 url: `${baseUrl}/blog/${encodeURIComponent(slug)}`,
 lastModified: now,
 changeFrequency: "monthly" as const,
 priority: 0.65,
 }));

 return [...staticEntries, ...productEntries, ...blogEntries];
}
