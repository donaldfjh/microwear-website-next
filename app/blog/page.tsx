import React from "react";
import Link from "next/link";
import { getBlogPosts, getBlogCategories } from "@/lib/blogs";
import { BlogList } from "@/components/BlogList";
import type { Metadata } from "next";
import "./BlogPage.css";

export const metadata: Metadata = {
  title: "Blog - MicroWear Smartwatches",
  description:
    "Stay updated with the latest news, tips, and insights about smartwatches and wearable technology from MicroWear.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = await getBlogCategories();

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>MicroWear Blog</h1>
        <p>
          Insights, tips, and news about smartwatches and wearable technology
        </p>
        <Link href="/blog/admin" className="admin-link">
          ✏️ Add New Post
        </Link>
      </div>

      <BlogList posts={posts} categories={categories} />
    </div>
  );
}
