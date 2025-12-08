## 总体目标
- 围绕“Smart Watch/智能手表”关键词，系统优化技术 SEO、页面结构、结构化数据、内部链接与性能，提升 Google 可抓取性与排名。
- 保持现有 UI/样式不破坏，所有改动遵循 Next.js App Router 与代码风格。

## 技术 SEO
- Canonical 统一与补齐：
  - 为以下页面显式设置 `alternates.canonical`（生产域名 `https://microwear.info`）：
    - `app/about/page.tsx`
    - `app/products/page.tsx`
    - `app/contact/page.tsx`
    - `app/blog/page.tsx`
    - `app/comparison/layout.tsx`
- Robots 与 Sitemap 统一：
  - 统一以一个来源产生日志与站点地图（推荐保留 Next Metadata Route）：
    - 保留 `app/sitemap.ts` 并移除历史的 `public/sitemap.xml` 或反之，仅保留一种；确保 `robots` 指向一致。
  - 统一 `app/robots.ts` 的基准域为生产域（与 `layout.metadataBase` 一致），移除 `public/robots.txt` 中不存在的 `server-sitemap.xml`。
- Manifest：保持 `public/manifest.json` 与 `metadata.manifest` 引用一致，无需改动。

## 页面结构与内容
- 关键页面标题（H1/H2）关键词化：
  - 产品目录：`Smart Watch Catalog`，副标题加入 OEM/ODM 关键词。
  - 产品详情：`{product.name} Smart Watch`，H2 改为包含“Smart Watch”的描述性标题。
  - 对比页：`Smart Watch Comparison`。
  - 关于页：`About Microwear Smart Watch Factory` 或副标题补充关键词。
  - 联系页：`Contact Microwear Smart Watch Factory` 并在正文加入 OEM/ODM 描述。
- 规格表语义化：
  - 在产品详情或对比页增加至少一处语义化 `<table>`（保留现有样式），供爬虫稳定识别关键规格。

## 结构化数据（JSON-LD）
- 已有：`Organization`（`app/layout.tsx`）。
- 新增：
  - 产品详情页 `Product + Offer (+ AggregateRating)`：
    - 位置：`app/products/[id]/page.tsx`（或 `ProductDetailClient.tsx`）。
    - 字段映射：来自 `lib/products.ts`/`data/products.json`；`Offer.priceCurrency` 设定为 `USD`（可配置）。
    - 评分：建议在 `products.json` 增加 `ratingValue/ratingCount` 后再映射到 `AggregateRating`。
  - 博客详情页 `BlogPosting`：
    - 位置：`app/blog/[slug]/page.tsx`；映射 `headline/description/author/datePublished/image/mainEntityOfPage`。
  - 首页 FAQ `FAQPage`：
    - 位置：`app/page.tsx` 或 `components/QA.tsx`；从 `qaData` 生成。
  - 面包屑：保留 `BreadcrumbList`（已实现）。

## 内部链接与锚文本
- 导航与 CTA：
  - `components/Navigation.tsx`：`Blog` → `智能手表行业博客`，`About` → `关于 Microwear`。
  - 首页 Hero CTA：`Explore Products` → `浏览全部智能手表产品`。
  - 产品详情 CTA：`Contact Us to Purchase` → `联系工厂采购 {product.name}（智能手表 OEM/ODM）`。
  - 行业洞察与博客列表：`Read More →` → `阅读全文：{title}`；分页 `← Previous/Next →` → `上一页：更多智能手表文章/下一页：更多可穿戴技术文章`。
  - `app/blog/[slug]/page.tsx` 返回链接：改为 `返回智能手表博客`。

## 性能与 LCP（影响排名的重要因素）
- 首屏图片与预加载：
  - 保留首页 LCP 图在 `app/layout.tsx` 的 `<link rel="preload">`，删除非必要的批量预加载（如轮播其它图片）。
  - 为关键图片统一增加 `sizes`，仅首屏使用 `priority`；首屏主图、Logo 优先使用 `webp/svg`。
- 图片格式与缓存：
  - 将高流量 `jpg/png` 转 `webp/avif`，同步更新引用（组件与 JSON）。
  - 在 `next.config.js` 的 `headers()` 中为 `"/images/:path*"` 添加 `Cache-Control: public, max-age=31536000, immutable`。
- 字体与外链：
  - 移除未使用的 `dns-prefetch`（Google Fonts/Analytics），减少渲染阻塞与无意义请求。

## 国际化与多语言（可选加分）
- 如计划中文/英文双语：
  - 增加 `hreflang` 或使用 Next 多语言路由；为中文页面使用对应 canonical；内容与锚文本按语言本地化。

## 分析与转化（可选加分）
- GA4/事件追踪：
  - 为“联系工厂”“报价咨询”等按钮绑定事件，用于 SEO + 转化评估（不强依赖排名，但利于业务闭环）。

## 风险控制与回归
- 图片格式替换需同步更新 JSON/组件所有引用；强缓存上线后改动文件名以避免旧缓存。
- 结构化数据必须符合 schema.org 规范并用生产 URL（从 `NEXT_PUBLIC_SITE_URL` 构造）
- 页面 canonical 与 sitemap/robots 的域名保持一致：`https://microwear.info`

## 实施顺序（建议）
1) Canonical/Robots/Sitemap 统一与修复（技术底座）
2) 关键页面标题与锚文本关键词化（快速收益）
3) 产品/博客/FAQ 结构化数据补齐（排名与展现）
4) LCP/图片/sizes/缓存头优化（性能与抓取效率）
5) 可选的国际化与 GA4 事件追踪（业务闭环）

请确认以上计划，我将按该顺序逐项落地并验证。