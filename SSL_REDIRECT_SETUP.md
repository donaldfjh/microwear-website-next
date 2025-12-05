# SSL/HTTPS 强制重定向配置

本项目已配置强制 HTTPS 重定向和安全头，确保所有访问都通过安全连接。

## 已实现的功能

### 1. 自动 HTTPS 重定向

所有 HTTP 请求会自动重定向到 HTTPS（301 永久重定向）。

**配置位置**：

- `middleware.ts` - Next.js 中间件层面的重定向
- `vercel.json` - Vercel 平台层面的重定向

### 2. 安全响应头

已添加以下安全头来保护网站：

#### Strict-Transport-Security (HSTS)

```
max-age=31536000; includeSubDomains; preload
```

- 强制浏览器使用 HTTPS 访问网站
- 有效期 1 年
- 包含所有子域名
- 可提交到 HSTS Preload List

#### X-Content-Type-Options

```
nosniff
```

- 防止浏览器 MIME 类型嗅探
- 减少 XSS 攻击风险

#### X-Frame-Options

```
SAMEORIGIN
```

- 防止点击劫持攻击
- 只允许同源页面嵌入

#### X-XSS-Protection

```
1; mode=block
```

- 启用浏览器 XSS 过滤器
- 检测到 XSS 时阻止页面加载

#### Referrer-Policy

```
strict-origin-when-cross-origin
```

- 控制 Referrer 信息发送
- 跨域时只发送源信息

#### Permissions-Policy

```
camera=(), microphone=(), geolocation=()
```

- 禁用不必要的浏览器功能
- 提高隐私保护

## 验证配置

### 本地测试

1. 构建项目：

```bash
npm run build
npm start
```

2. 检查响应头：

```bash
curl -I http://localhost:3000
```

### 生产环境测试

部署后，使用以下工具验证：

#### 1. 在线工具

- [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL 配置测试
- [Security Headers](https://securityheaders.com/) - 安全头检查
- [Mozilla Observatory](https://observatory.mozilla.org/) - 综合安全评分

#### 2. 浏览器开发者工具

1. 打开网站
2. 按 F12 打开开发者工具
3. 切换到 Network 标签
4. 刷新页面
5. 查看响应头

#### 3. 命令行测试

```bash
curl -I https://your-domain.com
```

查找以下响应头：

- `strict-transport-security`
- `x-content-type-options`
- `x-frame-options`
- `x-xss-protection`

## Vercel 特定配置

### 自动 HTTPS

Vercel 默认提供：

- ✅ 自动 SSL 证书（Let's Encrypt）
- ✅ 自动续期
- ✅ HTTP/2 支持
- ✅ 自动 HTTPS 重定向

### 自定义域名

如果使用自定义域名：

1. 在 Vercel 项目设置中添加域名
2. 配置 DNS 记录（A 或 CNAME）
3. Vercel 自动配置 SSL 证书
4. 等待 DNS 传播（通常几分钟到几小时）

## HSTS Preload 提交（可选）

如果想要最高级别的 HTTPS 保护，可以提交到 HSTS Preload List：

### 要求

- ✅ 有效的 HTTPS 证书
- ✅ 所有子域名支持 HTTPS
- ✅ HSTS 头包含 `preload` 指令
- ✅ max-age 至少 31536000 秒（1 年）

### 提交步骤

1. 访问 [hstspreload.org](https://hstspreload.org/)
2. 输入你的域名
3. 检查是否符合要求
4. 提交到 preload list
5. 等待审核（可能需要几周）

### 注意事项

⚠️ **HSTS Preload 是不可逆的**

- 一旦提交，很难移除
- 确保所有子域名都支持 HTTPS
- 确保不会影响开发环境

## 常见问题

### Q: 为什么本地开发时不强制 HTTPS？

A: 中间件检查 `NODE_ENV === 'production'`，只在生产环境启用。

### Q: 如何测试 HTTPS 重定向？

A: 部署到 Vercel 后，尝试访问 `http://your-domain.com`，应该自动跳转到 `https://your-domain.com`。

### Q: 会影响性能吗？

A: 不会。现代 HTTPS 性能与 HTTP 相当，甚至因为 HTTP/2 支持而更快。

### Q: 需要购买 SSL 证书吗？

A: 不需要。Vercel 自动提供免费的 Let's Encrypt SSL 证书。

## 安全检查清单

部署后验证：

- [ ] 访问 http://your-domain.com 自动跳转到 https://
- [ ] 浏览器地址栏显示锁图标
- [ ] SSL Labs 测试评分 A 或 A+
- [ ] Security Headers 检查通过
- [ ] 所有资源（图片、CSS、JS）都通过 HTTPS 加载
- [ ] 没有混合内容警告
- [ ] 响应头包含所有安全头

## 故障排除

### 问题：重定向循环

**原因**：代理或 CDN 配置问题
**解决**：检查 `x-forwarded-proto` 头是否正确传递

### 问题：混合内容警告

**原因**：页面中有 HTTP 资源
**解决**：确保所有资源 URL 使用 HTTPS 或相对路径

### 问题：证书错误

**原因**：DNS 未正确配置或证书未生成
**解决**：检查 Vercel 域名设置，等待证书生成

---

**你的网站现在已经配置了企业级的 HTTPS 安全保护！** 🔒✅
