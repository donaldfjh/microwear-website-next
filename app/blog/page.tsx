import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts, getBlogCategories } from "@/lib/blogs";
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

      <div className="blog-container">
        <aside className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="category-list">
              <li>
                <Link href="/blog">All Posts</Link>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <Link href={`/blog?category=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Popular Tags</h3>
            <div className="tags-cloud">
              <span className="tag">Wearables</span>
              <span className="tag">Health</span>
              <span className="tag">Fitness</span>
              <span className="tag">Technology</span>
              <span className="tag">Tips</span>
            </div>
          </div>
        </aside>

        <main className="blog-main">
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.id} className="blog-card">
                <Link href={`/blog/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      loading="lazy"
                    />
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span className="blog-date">{post.date}</span>
                      <span className="blog-read-time">{post.readTime}</span>
                    </div>
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-footer">
                      <span className="blog-author">By {post.author}</span>
                      <span className="read-more">Read More →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
