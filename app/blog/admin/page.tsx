"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./BlogAdminPage.css";

interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string;
  image: string;
  readTime: string;
}

export default function BlogAdminPage() {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "MicroWear Team",
    category: "Technology",
    tags: "",
    image: "/images/products/w11poverall.png",
    readTime: "5 min read",
  });

  const [previewMode, setPreviewMode] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({
        ...prev,
        slug,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now().toString(),
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      date: new Date().toISOString().split("T")[0],
    };

    // Copy to clipboard as JSON
    navigator.clipboard.writeText(JSON.stringify(newBlog, null, 2));
    alert(
      "Blog post JSON copied to clipboard! Paste it into data/blogs.json file."
    );
  };

  const handleReset = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "MicroWear Team",
      category: "Technology",
      tags: "",
      image: "/images/products/w11poverall.png",
      readTime: "5 min read",
    });
  };

  return (
    <div className="blog-admin-page">
      <div className="admin-header">
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
        <h1>Create New Blog Post</h1>
        <p>Fill in the form below to create a new blog article</p>
      </div>

      <div className="admin-container">
        <div className="admin-toolbar">
          <button
            type="button"
            className={`toolbar-btn ${!previewMode ? "active" : ""}`}
            onClick={() => setPreviewMode(false)}
          >
            ✏️ Edit
          </button>
          <button
            type="button"
            className={`toolbar-btn ${previewMode ? "active" : ""}`}
            onClick={() => setPreviewMode(true)}
          >
            👁️ Preview
          </button>
        </div>

        {!previewMode ? (
          <form onSubmit={handleSubmit} className="blog-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title">
                  Title <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog post title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="slug">
                  Slug <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="auto-generated-from-title"
                  required
                />
                <small>URL-friendly version of the title</small>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="excerpt">
                Excerpt <span className="required">*</span>
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                placeholder="Brief summary of the blog post (1-2 sentences)"
                rows={3}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">
                Content <span className="required">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Write your blog post content here. Use double line breaks to separate paragraphs."
                rows={15}
                required
              />
              <small>
                Tip: Use double line breaks (Enter twice) to create new
                paragraphs
              </small>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="author">
                  Author <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="Author name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">
                  Category <span className="required">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Technology">Technology</option>
                  <option value="Guides">Guides</option>
                  <option value="Health">Health</option>
                  <option value="Tips & Tricks">Tips & Tricks</option>
                  <option value="News">News</option>
                  <option value="Reviews">Reviews</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="readTime">
                  Read Time <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="readTime"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleInputChange}
                  placeholder="5 min read"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="tags">
                Tags <span className="required">*</span>
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="Wearables, Innovation, Future Tech (comma-separated)"
                required
              />
              <small>Separate tags with commas</small>
            </div>

            <div className="form-group">
              <label htmlFor="image">
                Featured Image URL <span className="required">*</span>
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="/images/products/w11poverall.png"
                required
              />
              <small>
                Available images: w11poverall.png, MA31Overall.jpg,
                ma25OverAll.jpg, Ultra5Overall.jpg, ma18Overall.webp,
                S11OverAll.png
              </small>
            </div>

            <div className="form-actions">
              <button type="button" onClick={handleReset} className="btn-reset">
                Reset Form
              </button>
              <button type="submit" className="btn-submit">
                Generate JSON & Copy
              </button>
            </div>
          </form>
        ) : (
          <div className="blog-preview">
            <div className="preview-card">
              <div className="preview-header">
                <span className="preview-category">{formData.category}</span>
                <h1>{formData.title || "Blog Title"}</h1>
                <div className="preview-meta">
                  <span>By {formData.author}</span>
                  <span>•</span>
                  <span>{new Date().toISOString().split("T")[0]}</span>
                  <span>•</span>
                  <span>{formData.readTime}</span>
                </div>
              </div>

              <div className="preview-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={formData.image} alt={formData.title} />
              </div>

              <div className="preview-content">
                <div className="preview-excerpt">
                  {formData.excerpt || "Blog excerpt will appear here..."}
                </div>

                <div className="preview-body">
                  {formData.content
                    ? formData.content
                        .split("\n\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))
                    : "Blog content will appear here..."}
                </div>

                {formData.tags && (
                  <div className="preview-tags">
                    <strong>Tags:</strong>
                    {formData.tags.split(",").map((tag, index) => (
                      <span key={index} className="tag">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="admin-instructions">
        <h3>📝 How to Add Your Blog Post</h3>
        <ol>
          <li>Fill in all the required fields in the form above</li>
          <li>Use the Preview tab to see how your post will look</li>
          <li>
            Click &quot;Generate JSON & Copy&quot; to copy the blog post data
          </li>
          <li>
            Open <code>data/blogs.json</code> file in your editor
          </li>
          <li>Paste the copied JSON at the beginning of the array</li>
          <li>Save the file and refresh the blog page to see your new post</li>
        </ol>
      </div>
    </div>
  );
}
