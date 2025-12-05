/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://microwear-website-next.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${
        process.env.SITE_URL || "https://microwear-website-next.vercel.app"
      }/server-sitemap.xml`,
    ],
  },
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = 0.7;
    let changefreq = "daily";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/products/")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/blog/")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path === "/blog") {
      priority = 0.9;
      changefreq = "daily";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
