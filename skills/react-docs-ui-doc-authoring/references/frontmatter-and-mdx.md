# Frontmatter 与 MDX

当用户在 docs 项目里编写页面内容时，使用这份参考。

## Frontmatter

推荐优先使用这些高频字段：

- `title`
- `description`
- `author`
- `createdAt`
- `lastUpdated`

当页面需要结构化的头部信息时，优先使用 frontmatter。

编写建议：

- 如果这些字段存在，页面头部信息应主要由 frontmatter 提供
- `createdAt` 用于创建时间，`lastUpdated` 用于页面更新时间
- 如果 frontmatter 里已经有 `title`，正文里通常不要再重复写同样的主标题，除非页面确实需要

## Changelog Frontmatter

编写 changelog 或 release notes 时，优先补齐这些字段：

- `title`
- `summary`
- `date`
- `version`
- `type`
- `draft`
- `breaking`

补充约定：

- `type` 只使用项目支持的枚举值
- `draft: true` 通常表示隐藏列表项
- 先写 frontmatter，再补正文中的发布说明内容

## MDX

推荐约定：

- 自定义组件通常放在 `src/components/`
- 在文档里优先使用 PascalCase 组件名，便于阅读和维护
- 自定义组件应尽量做成可复用、偏文档展示用途的组件

回答组件问题时，优先说明它属于哪一类：

- 放在 `src/components/` 下的共享自定义组件
- 还需要在 `mdx.components` 中补充映射的组件
