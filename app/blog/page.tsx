import React from "react";
import { getAllPosts, getAllCategories } from "@/lib/markdown-blogs";
import { BlogList } from "@/components/BlogList";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";
import "./BlogPage.css";

export const metadata: Metadata = {
  title: "Smart Watch Industry Insights | OEM/ODM Trends & Technology | Microwear Blog",
  description:
    "Expert insights on smartwatch industry trends, OEM/ODM manufacturing, wearable technology innovations. Learn about battery life, health sensors, AI features from Microwear's 15+ years of expertise.",
  keywords: ["smartwatch industry trends", "OEM manufacturing insights", "wearable technology blog", "smartwatch battery life", "health sensor technology"],
  alternates: {
    canonical: "https://microwear.info/blog",
  },
  openGraph: {
    title: "Smart Watch Industry Insights | Microwear Blog",
    description:
      "Expert insights on smartwatch industry trends, OEM/ODM manufacturing, wearable technology innovations.",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  // JSON-LD Structured Data for Blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Microwear Smart Watch Industry Blog",
    "description": "Expert insights on smartwatch industry trends, OEM/ODM manufacturing, and wearable technology innovations",
    "url": "https://microwear.info/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Microwear",
      "logo": {
        "@type": "ImageObject",
        "url": "https://microwear.info/logo.png"
      }
    },
    "blogPost": posts.slice(0, 10).map((post: any) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://microwear.info/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Microwear"
      },
      "description": post.excerpt,
      "articleSection": post.category
    }))
  };

  return (
    <div className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <ScrollReveal>
        <div className="blog-hero">
          <h1>MicroWear Blog</h1>
          <p>
            Insights, tips, and news about smartwatches and wearable technology
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <BlogList posts={posts} categories={categories} />
      </ScrollReveal>
    </div>
  );
}
