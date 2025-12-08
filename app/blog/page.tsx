import React from "react";
import { getAllPosts, getAllCategories } from "@/lib/markdown-blogs";
import { BlogList } from "@/components/BlogList";
import type { Metadata } from "next";
import "./BlogPage.css";

export const metadata: Metadata = {
  title: "Blog - MicroWear Smartwatches",
  description:
    "Stay updated with the latest news, tips, and insights about smartwatches and wearable technology from MicroWear.",
  alternates: {
    canonical: "https://microwear.info/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>MicroWear Blog</h1>
        <p>
          Insights, tips, and news about smartwatches and wearable technology
        </p>
      </div>

      <BlogList posts={posts} categories={categories} />
    </div>
  );
}
