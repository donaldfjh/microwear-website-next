/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://microwear.info",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // 对于中小型网站，单个 sitemap 更好被收录
  sitemapSize: 7000,
  exclude: ["/server-sitemap.xml"], // 如果有动态生成的 sitemap，可以在这里排除
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/_next/*"],
      },
    ],
    additionalSitemaps: [
      // 如果有其他 sitemap 可以在这里添加
    ],
  },
  // 开启 IndexNow，帮助 Bing 等搜索引擎快速收录
  // 注意：Google 目前不完全支持 IndexNow，但此配置对 Bing/Yandex 有效
  // Google 主要依赖 sitemap 和 Search Console
  additionalPaths: async (config) => {
    // 可以在这里手动添加额外的动态路径
    return [];
  },
};
