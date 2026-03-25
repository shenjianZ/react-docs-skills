# Frontmatter 与 MDX

当用户在 docs 项目里编写页面内容时，使用这份参考。

## Frontmatter

推荐优先使用这些高频字段：

- `title`
- `description`
- `author`
- `date`

当页面需要结构化的头部信息时，优先使用 frontmatter。

编写建议：

- 如果这些字段存在，页面头部信息应主要由 frontmatter 提供
- 如果 frontmatter 里已经有 `title`，正文里通常不要再重复写同样的主标题，除非页面确实需要

## MDX

推荐约定：

- 自定义组件通常放在 `src/components/`
- 在文档里优先使用 PascalCase 组件名，便于阅读和维护
- 自定义组件应尽量做成可复用、偏文档展示用途的组件

回答组件问题时，优先说明它属于哪一类：

- 放在 `src/components/` 下的共享自定义组件
- 还需要在 `mdx.components` 中补充映射的组件