import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAllPostSlugs,
  getPostBySlug,
  getAllPosts,
} from "@/lib/markdown-blogs";
import type { Metadata } from "next";
import "./BlogDetailPage.css";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found - MicroWear",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";
  const canonicalUrl = `${baseUrl}/blog/${params.slug}`;

  return {
    title: `${post.title} - MicroWear Blog`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
      url: canonicalUrl,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info";
  const canonicalUrl = `${baseUrl}/blog/${params.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image
      ? post.image.startsWith("http")
        ? post.image
        : `${baseUrl}${post.image}`
      : undefined,
    author: { "@type": "Person", name: post.author },
    datePublished: new Date(post.date).toISOString(),
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <div className="blog-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="blog-article">
        <div className="article-header">
          <div className="header-nav">
            <Link href="/blog" className="back-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Smart Watch Blog
            </Link>
          </div>
          <div className="category-wrapper">
            <span className="article-category">{post.category}</span>
          </div>
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">
            <span className="article-author">By {post.author}</span>
            <span className="article-date">{post.date}</span>
            <span className="article-read-time">{post.readTime}</span>
          </div>
        </div>

        <div className="article-image">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            priority
          />
        </div>

        <div className="article-content">
          <div className="article-excerpt">{post.excerpt}</div>
          <div
            className="article-body markdown-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="article-tags">
            <strong>Tags:</strong>
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <h2>Related Articles</h2>
          <div className="related-posts-grid">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="related-post-card"
              >
                <div className="related-post-image">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    width={300}
                    height={200}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <div className="related-post-content">
                  <h3>{relatedPost.title}</h3>
                  <p>{relatedPost.excerpt}</p>
                  <span className="related-post-date">{relatedPost.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
