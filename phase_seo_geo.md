# Project: Microwear Clone - Phase: SEO & GEO Optimization

## 1. 角色设定
你是一位精通 Technical SEO 和 AIO (AI Optimization) 的全栈工程师。
当前目标：优化 Next.js 项目，使其在 Google 搜索中排名靠前 (SEO)，并能被 AI 搜索引擎 (Perplexity, ChatGPT Search) 准确理解和引用 (GEO)。

## 2. 核心策略 (Strategy)
1.  **结构化数据 (Structured Data/JSON-LD)**: 这是 GEO 的核心。我们将用机器可读的 JSON 格式明确告诉 AI：这是一个工厂，有什么证书，卖什么产品。
2.  **语义化内容**: 将关键信息（OEM, ODM, ISO9001, MOQ）放在 AI 容易抓取的标签中。
3.  **Next.js Metadata API**: 配置标准的 Meta 标签。

## 3. 详细执行步骤 (Step-by-Step)

### 步骤 1: 全局 Metadata 配置 (`app/layout.tsx`)
请修改根布局文件，使用 Next.js Metadata API 导出静态元数据：
- **title**: "Microwear | Top Smart Watch Manufacturer & OEM/ODM Factory in China" (包含核心关键词)
- **description**: "Microwear is a leading B2B smart watch manufacturer with 10 years experience. ISO9001 certified factory offering OEM/ODM solutions for global brands. MOQ 500pcs." (强调信任背书和业务模式)
- **keywords**: ["Smart Watch Manufacturer", "China OEM Factory", "Wearable Technology Supplier", "Microwear", "Smartwatch Wholesale"]
- **openGraph**: 配置 og:title, og:description, og:image (用于社媒分享预览)。

### 步骤 2: 添加组织结构化数据 (Organization Schema)
这是 GEO 优化的关键。请在 `app/layout.tsx` 或首页中添加一个 `<Script>` 组件，注入 `application/ld+json`：
```json
{
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "Organization",
  "name": "Microwear",
  "url": "[https://你的域名.com](https://你的域名.com)",
  "logo": "[https://你的域名.com/logo.png](https://你的域名.com/logo.png)",
  "description": "Professional Smart Watch Manufacturer & OEM/ODM Solutions",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Shenzhen",
    "addressCountry": "CN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+852 6733 7121",
    "contactType": "sales",
    "areaServed": "Global"
  },
  "sameAs": [
    "[https://www.facebook.com/Microwear](https://www.facebook.com/Microwear)",
    "[https://www.linkedin.com/company/microwear](https://www.linkedin.com/company/microwear)"
  ]
}