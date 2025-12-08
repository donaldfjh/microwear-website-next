"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types/blog";
import "./BlogList.css";

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
}

const POSTS_PER_PAGE = 6;

export function BlogList({ posts, categories }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Tag filter
    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    // Sort
    if (sortBy === "date") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [posts, searchQuery, selectedCategory, selectedTag, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedTag(""); // Clear tag filter when changing category
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? "" : tag);
  };

  return (
    <div className="blog-container">
      <aside className="blog-sidebar">
        {/* Search Box */}
        <div className="sidebar-section">
          <h3>Search</h3>
          <input
            type="text"
            className="search-input"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="sidebar-section">
          <h3>Categories</h3>
          <ul className="category-list">
            <li>
              <button
                type="button"
                onClick={() => handleCategoryClick("All")}
                className={selectedCategory === "All" ? "active" : ""}
              >
                All Posts ({posts.length})
              </button>
            </li>
            {categories.map((category) => {
              const count = posts.filter((p) => p.category === category).length;
              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className={selectedCategory === category ? "active" : ""}
                  >
                    {category} ({count})
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Tags */}
        <div className="sidebar-section">
          <h3>Tags</h3>
          <div className="tags-cloud">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag ${selectedTag === tag ? "active" : ""}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="sidebar-section">
          <h3>Sort By</h3>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "date" | "title")}
          >
            <option value="date">Latest First</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </aside>

      <main className="blog-main">
        {/* Results Info */}
        <div className="blog-results-info">
          <p>
            Showing {currentPosts.length} of {filteredPosts.length} articles
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {selectedTag && ` tagged with "${selectedTag}"`}
          </p>
          {(searchQuery || selectedCategory !== "All" || selectedTag) && (
            <button
              type="button"
              className="clear-filters-btn"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedTag("");
              }}
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Blog Grid */}
        {currentPosts.length > 0 ? (
          <>
            <div className="blog-grid">
              {currentPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <Link href={`/blog/${post.slug}`} className="blog-card-link">
                    <div className="blog-card-image">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={250}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 400px"
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
                        <span className="read-more">阅读全文：{post.title}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  上一页：更多智能手表文章
                </button>

                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        type="button"
                        className={`pagination-number ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                <button
                  type="button"
                  className="pagination-btn"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  下一页：更多可穿戴技术文章
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
}
