import { getServerSideSitemap } from "next-sitemap";
import { getAllPosts } from "@/lib/markdown-blogs";

export async function GET() {
  const posts = await getAllPosts();
  const baseUrl =
    process.env.SITE_URL || "https://microwear-website-next.vercel.app";

  const blogFields = posts.map((post) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: new Date(post.date).toISOString(),
    changefreq: "weekly" as const,
    priority: 0.8,
  }));

  return getServerSideSitemap(blogFields);
}
