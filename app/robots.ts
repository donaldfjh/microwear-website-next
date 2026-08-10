import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";

// AI/LLM crawlers we want citing us — listed explicitly so the intent is not
// left to a wildcard rule that future edits might tighten.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "meta-externalagent",
];

const DISALLOWED = ["/api/", "/admin/", "/_next/"];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || SEO_CONFIG.site.url).replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt"],
        disallow: DISALLOWED,
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: ["/", "/llms.txt"],
        disallow: DISALLOWED,
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
