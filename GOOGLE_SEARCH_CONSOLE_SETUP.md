# Google Search Console 设置指南

本指南将帮助你在 Google Search Console 中设置和提交网站的 sitemap。

## 1. 自动生成的文件

项目已配置自动生成以下 SEO 文件：

- **sitemap.xml** - 主站点地图
- **server-sitemap.xml** - 动态博客文章站点地图
- **robots.txt** - 搜索引擎爬虫指令

这些文件会在每次构建时自动生成。

## 2. 访问 Sitemap

部署后，你的 sitemap 将在以下 URL 可用：

- 主 Sitemap: `https://your-domain.com/sitemap.xml`
- 博客 Sitemap: `https://your-domain.com/server-sitemap.xml`
- Robots: `https://your-domain.com/robots.txt`

## 3. Google Search Console 设置步骤

### 步骤 1: 访问 Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 使用你的 Google 账号登录

### 步骤 2: 添加资源

1. 点击左上角的"添加资源"
2. 选择"网址前缀"
3. 输入你的网站 URL（例如：`https://microwear-website-next.vercel.app`）
4. 点击"继续"

### 步骤 3: 验证所有权

选择以下任一验证方法：

#### 方法 A: HTML 文件验证（推荐）

1. 下载 Google 提供的 HTML 验证文件
2. 将文件放在 `nextjs-microwear/public/` 目录
3. 重新部署网站
4. 在 Google Search Console 中点击"验证"

#### 方法 B: HTML 标签验证

1. 复制 Google 提供的 meta 标签
2. 在 `nextjs-microwear/app/layout.tsx` 的 `<head>` 中添加该标签
3. 重新部署网站
4. 在 Google Search Console 中点击"验证"

#### 方法 C: DNS 验证

1. 复制 Google 提供的 TXT 记录
2. 在你的域名提供商处添加 DNS TXT 记录
3. 等待 DNS 传播（可能需要几小时）
4. 在 Google Search Console 中点击"验证"

### 步骤 4: 提交 Sitemap

验证成功后：

1. 在左侧菜单中选择"站点地图"
2. 在"添加新的站点地图"输入框中输入：`sitemap.xml`
3. 点击"提交"
4. 重复步骤 2-3，提交：`server-sitemap.xml`

### 步骤 5: 请求编入索引

1. 在左侧菜单中选择"网址检查"
2. 输入你的主页 URL
3. 点击"请求编入索引"
4. 对重要页面重复此过程（产品页、博客文章等）

## 4. 监控和优化

### 检查索引状态

1. 在"概览"页面查看索引覆盖率
2. 检查是否有错误或警告
3. 查看"覆盖率"报告了解详细信息

### 性能监控

1. 查看"效果"报告了解搜索表现
2. 监控点击次数、展示次数、点击率和排名
3. 识别表现最好的页面和查询

### 移动设备友好性

1. 检查"移动设备易用性"报告
2. 修复任何移动设备问题
3. 确保响应式设计正常工作

### Core Web Vitals

1. 查看"Core Web Vitals"报告
2. 优化页面加载速度
3. 改善用户体验指标

## 5. 常见问题

### Q: Sitemap 提交后多久会被索引？

A: 通常需要几天到几周时间。Google 会根据网站的权重和更新频率决定爬取频率。

### Q: 为什么某些页面没有被索引？

A: 可能原因：

- 页面是新的，还未被爬取
- robots.txt 阻止了爬取
- 页面质量不符合 Google 标准
- 存在技术问题（404、重定向等）

### Q: 如何加快索引速度？

A:

- 提交 sitemap
- 使用"请求编入索引"功能
- 创建高质量内容
- 获取外部链接
- 保持网站更新

### Q: 需要多久更新一次 sitemap？

A: 项目配置为每次构建时自动更新。当你添加新内容时，重新部署即可。

## 6. 自动化建议

### Vercel 部署钩子

如果使用 Vercel 部署，sitemap 会在每次部署时自动生成。

### 定期更新

建议：

- 添加新博客文章后重新部署
- 添加新产品后重新部署
- 每周检查 Google Search Console 报告

## 7. 其他 SEO 工具

除了 Google Search Console，还可以使用：

- **Bing Webmaster Tools**: 提交到 Bing 搜索引擎
- **Google Analytics**: 跟踪网站流量
- **Schema.org 标记**: 添加结构化数据
- **Open Graph 标签**: 优化社交媒体分享

## 8. 联系支持

如果遇到问题：

1. 查看 [Google Search Console 帮助中心](https://support.google.com/webmasters)
2. 访问 [Next.js SEO 文档](https://nextjs.org/learn/seo/introduction-to-seo)
3. 查看 [next-sitemap 文档](https://github.com/iamvishnusankar/next-sitemap)

---

## 快速检查清单

- [ ] 网站已部署到生产环境
- [ ] 访问 sitemap.xml 确认可访问
- [ ] 访问 robots.txt 确认配置正确
- [ ] 在 Google Search Console 添加资源
- [ ] 验证网站所有权
- [ ] 提交 sitemap.xml
- [ ] 提交 server-sitemap.xml
- [ ] 请求主要页面编入索引
- [ ] 设置邮件通知
- [ ] 定期检查报告

祝你的网站 SEO 成功！🚀
