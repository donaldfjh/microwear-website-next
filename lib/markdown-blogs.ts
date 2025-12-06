import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

/**
 * Get all blog post slugs from markdown files
 */
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
}

/**
 * Get blog post data by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse frontmatter
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      id: slug,
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      content: contentHtml,
      author: data.author || "Anonymous",
      date: data.date || new Date().toISOString().split("T")[0],
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      image: data.image || "/images/products/w11poverall.webp",
      readTime: data.readTime || "5 min read",
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts sorted by date
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  // Filter out null posts and sort by date
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA; // Newest first
    });
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

/**
 * Search posts by query
 */
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
