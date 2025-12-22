# Microwear 全站 SEO & GEO 系统化优化任务

## 📌 核心逻辑
将“结论先行、数据支撑、结构化呈现”的 GEO 策略应用到所有产品组件中。

---

## 🛠 任务 1：构建动态 Metadata 生成器 (App Router 模式)
**目标：** 确保每个产品页都有唯一的、包含长尾词的标题和描述。

**Action:** 在 `app/products/[id]/page.tsx` 中实现 `generateMetadata` 函数：
- **标题格式：** [产品型号] Smartwatch | [核心卖点1] & [核心卖点2] | Microwear Official
- **描述格式：** 包含该产品的续航数据、防水等级和屏幕尺寸。

---

## 🛠 任务 2：创建通用的 JSON-LD Schema 组件
**目标：** 为每个产品自动生成 FAQ 和 Product Schema。

**Action:** 创建一个 `components/SEO/ProductSchema.tsx` 组件：
- 接收 `product` 数据对象作为 props。
- 自动生成 `FAQPage` Schema。
- 必须包含：Battery Life, Waterproof Level, Display Size 的问答对。

---

## 🛠 任务 3：UI 层面：全站产品页增加“Facts at a Glance”板块
**目标：** AI 引擎（如 Google AIO）最喜欢抓取列表式的事实。

**Action:** 在所有产品详情页的顶部或中部，增加一个高亮显示的参数表：
- **格式：** 简洁的图标 + 加粗的结论。
- **示例：** - **Battery:** **3-5 Days** typical use.
  - **Waterproof:** **IP68 Certified**.
  - **Screen:** **1.95" HD Display**.

---

## 🛠 任务 4：全局图片 Alt 标签规范化
**Action:** 扫描项目中所有的 `next/image` 或 `<img>`。
- 确保 Alt 标签不再是简单的 "watch"，而是动态生成的：`Microwear [Model] [Feature] Smartwatch`.

---

## 🛠 任务 5：全站长尾关键词 FAQ 注入
**Action:** 针对以下通用关键词，在全站页脚或产品列表中间增加隐藏或半隐藏的语义关联文本：
- `Best budget smartwatch with heart rate monitor 2025`
- `How to connect Microwear watch to Android/iOS`
- `Affordable smartwatches with Bluetooth calling`