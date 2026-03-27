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
- `public/docs/zh-cn/changelog/v0.6.20.md` -> `/changelog/v0.6.20`
- `public/docs/en/changelog/v0.6.20.md` -> `/changelog/v0.6.20`

## Changelog 路径约定

- 发布记录默认放在 `public/docs/<lang>/changelog/`
- 文件名就是最终详情页路由里的 slug
- changelog 列表页通常是 `/:lang/changelog`
- changelog 详情页通常是 `/:lang/changelog/:slug`

## 重要提醒

只创建文档文件，并不会自动让页面出现在 navbar 或 sidebar 中。导航显示仍然要靠配置文件。
如果项目使用 changelog 索引文件驱动列表页，在新增、重命名或删除发布文件后，还要重新生成索引。
