# SEO 关键词监控系统

## 📊 监控方案

### 当前状态：需要配置 Brave Search API

由于 `web_search` 工具需要 API key，有以下选择：

## 选项 1：配置 Brave Search API（推荐）

**步骤：**
1. 访问 https://brave.com/search/api/
2. 注册账号获取 API key
3. 在终端运行：
   ```bash
   openclaw configure --section web
   ```
4. 输入 API key

**优点：**
- 稳定的搜索结果
- 可以获取排名数据
- 自动化程度高

## 选项 2：手动监控 + 我分析

**流程：**
1. 我生成监控报告模板
2. 你手动搜索关键词，复制排名数据
3. 我分析数据并给出优化建议

**优点：**
- 不需要 API
- 更灵活

## 选项 3：使用 Google Search Console 数据（最准确）

如果你有 GSC 访问权限：
1. 导出搜索表现数据（CSV）
2. 我分析数据并给出建议
3. 定期更新

---

## 📋 监控关键词列表

已创建 `seo-keywords-monitor.json`，包含以下关键词：

### AI Glasses（高优先级）
- AI glasses OEM
- smart glasses manufacturer
- 智能眼镜

### Smart Watch（高优先级）
- smart watch OEM manufacturer
- smartwatch factory China

### 中低优先级
- AI smart glasses
- smart eyewear OEM
- wearable technology manufacturer

---

## 🔄 监控频率

**建议：** 每天早上 9:00 监控一次
**输出：** SEO 报告保存到 `seo-reports/` 目录

---

## 📈 报告内容

每次监控生成：
1. 关键词排名变化
2. 竞争对手分析
3. 优化建议
4. 需要调整的网站内容

---

## 🎯 下一步

**请选择：**
- A) 配置 Brave API → 我帮你设置完整自动化
- B) 手动监控 → 我生成模板和指南
- C) 使用 GSC 数据 → 我帮你分析导出数据
