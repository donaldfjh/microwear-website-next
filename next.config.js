/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: next.config i18n is Pages Router only and breaks App Router routing
  // (all routes 404). Use app/[locale] + middleware if DE locale is needed.
  // i18n: {
  //   locales: ['en', 'de'],
  //   defaultLocale: 'en',
  //   localeDetection: false,
  // },

  // Image optimization for better Core Web Vitals
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Bundle optimization
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Modularize imports for smaller bundles
  modularizeImports: {
    // Optimize framer-motion imports
    'framer-motion': {
      transform: 'framer-motion/dist/esm/{{member}}.mjs',
    },
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', '@vercel/analytics'],
  },
  async redirects() {
    return [
      {
        source: "/products/W11pro",
        destination: "/products/W12pro",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
