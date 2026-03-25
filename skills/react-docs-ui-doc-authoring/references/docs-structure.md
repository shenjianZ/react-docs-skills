# 文档目录结构

默认假设这些路径都位于用户的 docs 项目根目录下，例如 `D:\tmp\test-docs\docs`。

## 目录模型

- 中文文档放在 `public/docs/zh-cn/`
- 英文文档放在 `public/docs/en/`
- 页面路由由这两个语言目录下的文件路径决定
- 如果同一路径同时存在 `.mdx` 和 `.md`，优先使用 `.mdx`

## 常见路径映射

例如：

- `public/docs/zh-cn/index.md` -> 中文首页
- `public/docs/zh-cn/docs/guide/installation.md` -> `/docs/guide/installation`
- `public/docs/en/docs/test/mdx-test.mdx` -> `/docs/test/mdx-test`

## 重要提醒

只创建文档文件，并不会自动让页面出现在 navbar 或 sidebar 中。导航显示仍然要靠配置文件。