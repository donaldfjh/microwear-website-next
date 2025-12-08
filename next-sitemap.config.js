/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://microwear.info",
  generateRobotsTxt: false, // Using app/robots.ts instead
  generateIndexSitemap: false,
  exclude: ["/sitemap.xml", "/robots.txt"], // Exclude Next.js generated files
  outDir: "./public",
};
