import fs from "fs/promises";
import path from "path";
import { BlogPost } from "@/types/blog";

/**
 * Fetches all blog posts from the blogs.json file
 * @returns Promise<BlogPost[]> - Array of all blog posts
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "blogs.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const posts = JSON.parse(fileContents);

    if (!Array.isArray(posts)) {
      throw new Error("Blog posts data is not an array");
    }

    // Sort by date (newest first)
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("ENOENT")) {
        throw new Error(
          "Blog posts data file not found. Please ensure data/blogs.json exists."
        );
      }
      if (error instanceof SyntaxError) {
        throw new Error("Blog posts data file contains invalid JSON.");
      }
      throw error;
    }
    throw new Error("An unknown error occurred while fetching blog posts");
  }
}

/**
 * Fetches a single blog post by its slug
 * @param slug - The blog post slug to search for
 * @returns Promise<BlogPost | undefined> - The blog post if found
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

/**
 * Fetches blog posts by category
 * @param category - The category to filter by
 * @returns Promise<BlogPost[]> - Array of blog posts in the category
 */
export async function getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.category === category);
}

/**
 * Fetches all unique categories from blog posts
 * @returns Promise<string[]> - Array of unique categories
 */
export async function getBlogCategories(): Promise<string[]> {
  const posts = await getBlogPosts();
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories));
}
