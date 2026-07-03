# Shuchang Bio Link App Website

这是一个使用原生 HTML、CSS 和 JavaScript 制作的单页 Bio Link Website。无需后端或数据库，可直接部署到 Vercel、Netlify 或 GitHub Pages。

## 本地打开

直接双击 `index.html` 即可预览。若要使用本地服务器，可在项目目录运行：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 修改公司资料

- 公司英文名、中文名、简介、地点和页脚：编辑 `index.html`。
- Logo：目前是 `index.html` 中 `.logo` 内的 `SC` 占位字样。可以修改文字；若要换成图片，可把 `<span>SC</span>` 换成 `<img src="logo.png" alt="Shuchang logo">`，再把图片放到项目目录。

## 修改社交媒体及按钮链接

打开 `script.js`，编辑最上方的 `links` 数组：

- WhatsApp：修改 `WhatsApp 咨询` 的 `url`，号码格式为 `https://wa.me/60xxxxxxxxx`。
- Facebook：修改 `Facebook Page` 的 `url`。
- Instagram：修改 `Instagram` 的 `url`。
- TikTok：修改 `TikTok` 的 `url`。
- YouTube：修改 `YouTube` 的 `url`。
- Shopee：修改 `Shopee Store` 的 `url`。

浮动 WhatsApp 按钮会自动使用 `links` 数组中以 `WhatsApp` 开头的第一个项目，无需修改 HTML。

每个对象的字段：

```js
{
  name: "按钮名称",
  url: "https://example.com/",
  icon: "fa-solid fa-star",
  color: "#D8AE59",
  social: true
}
```

`social: true` 表示这个链接也会显示在顶部快捷图标列。不需要顶部图标时可删除该字段。

### 增加按钮

在 `links` 数组中复制一个对象，并修改 `name`、`url`、`icon` 和 `color`。

### 删除按钮

从 `links` 数组删除对应的完整对象。

### 修改按钮顺序

调整 `links` 数组中对象的上下顺序，网页会自动按新顺序显示。

Font Awesome 图标名称可在 [Font Awesome Icons](https://fontawesome.com/icons) 查询。

## 修改服务卡片

打开 `script.js`，编辑 `services` 数组。每张卡片包含：

```js
{
  title: "服务名称",
  description: "服务说明",
  icon: "fa-solid fa-star"
}
```

可用同样方式增加、删除或调整卡片顺序。

## 部署到 Vercel

1. 将项目上传到 GitHub。
2. 登录 Vercel，点击 **Add New → Project**。
3. 导入该 GitHub 仓库。
4. Framework Preset 选择 **Other**，无需 Build Command。
5. 点击 **Deploy**。

## 部署到 Netlify

最简单的方法是登录 Netlify，进入 **Sites**，将整个项目文件夹拖到部署区域。也可以导入 GitHub 仓库；无需 Build Command，发布目录填写 `.`。

## 部署到 GitHub Pages

1. 将文件上传到 GitHub 仓库的默认分支。
2. 打开仓库 **Settings → Pages**。
3. Source 选择 **Deploy from a branch**。
4. 选择默认分支及 `/ (root)`，然后保存。
5. 等待 GitHub 提供公开网址。

## 文件说明

- `index.html`：页面结构、公司文字和 SEO
- `style.css`：全部视觉样式及响应式规则
- `script.js`：链接、按钮、服务卡片和互动逻辑
- `design-concept.png`：本页面的视觉设计基准
