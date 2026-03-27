# 配置字段

默认假设下面这些文件位于用户生成后的 docs 项目中：

- `public/config/site.yaml`
- `public/config/site.en.yaml`

常见的顶层配置块有：

- `site`
- `navbar`
- `announcement`
- `versions`
- `sidebar`
- `theme`
- `toc`
- `imageViewer`
- `footer`
- `contextMenu`
- `mdx`
- `fonts`
- `codeHighlight`
- `search`
- `seo`
- `export`
- `pageMeta`
- `editLink`
- `feedback`
- `ai`
- `pwa`

补充提醒：

- `site.url` 会影响 `canonical`、`hreflang`、`og:url`
- `theme.defaultMode` 用来控制默认主题模式
- `pageMeta.showAuthors` 会影响页面头部作者展示

## 高频说明

### `navbar`

- `items` 用来定义页面顶部的主导航项
- 顶部导航项决定用户可以进入哪些一级内容区域，例如首页、文档、关于等
- 新增导航项时，`site.yaml` 里的名称应使用中文，`site.en.yaml` 里的名称应使用英文
- `items.link` 应该和某个内容区域入口对应，例如 `/docs`、`/about`
- `actions` 是右侧图标或操作链接
- 外链按需要设置 `external: true`

### `sidebar`

- `sidebar` 不负责定义顶部导航项本身，而是负责管理每个导航项下所有文档的侧边栏导航
- 优先使用 `collections` 结构
- `collections` 的 key 通常对应某个顶部导航项进入后的一级内容区域，例如 `docs`
- 当 `navbar.items.link` 是 `/docs` 时，通常应有 `sidebar.collections.docs`
- `collections.<key>.sections` 里的每个数组元素，代表该内容区域侧边栏中的一个分组
- 每个分组通常包含 `title` 和 `path`
- 如果这个分组下面还有更细的页面，就继续放在它的 `children` 数组里
- `children` 中的子项通常就是具体文档页面的导航项
- `path` 必须和 `public/docs/<lang>/` 下真实存在的文档路径一致
- `sections` 和 `children` 里的 `path`，通常也应该落在对应导航项的区域前缀下，例如 `/docs/...`

### `navbar` 与 `sidebar.collections` 的对应关系

核心原则：

- `navbar` 负责"顶部有哪些导航项"
- `sidebar.collections` 负责"某个导航项下有哪些侧边栏文档分组和页面"

推荐对应方式：

- `navbar.items.link: "/docs"` 对应 `sidebar.collections.docs`
- `navbar.items.link: "/about"` 对应 `sidebar.collections.about`
- 某个 `collections.<key>` 下面的 `path`，通常都应落在这个区域下，例如 `/docs/...` 或 `/about/...`

正确示例：

```yaml
navbar:
  items:
    - title: "文档"
      link: "/docs"

sidebar:
  collections:
    docs:
      sections:
        - title: "快速开始"
          path: "/docs/guide"
          children:
            - title: "安装"
              path: "/docs/guide/installation"
```

错误示例：

```yaml
navbar:
  items:
    - title: "文档"
      link: "/docs"

sidebar:
  collections:
    guide:
      sections:
        - title: "快速开始"
          path: "/guide/installation"
```

上面的错误点有两个：

- 顶部导航入口是 `/docs`，但 `collections` 的 key 写成了 `guide`
- 侧边栏里的路径没有落在 `/docs/...` 这个区域下

### `mdx`

- `componentsPath` 默认指向 `/src/components`
- `components` 可以补充或覆盖组件映射

### `export`

- 导出能力统一由这里控制
- `pdfServer` 只有在 `enabled: true` 时才应按启用状态说明

### `seo`

- 常见字段包括 `defaultTitle`、`titleTemplate`、`defaultDescription`
- `defaultOgImage`、`robots`、`twitterCard` 也属于这里
- 解释 SEO 时，记得一起提醒 `site.url`

### `pageMeta` / `editLink` / `feedback`

- `pageMeta` 控制最后更新时间、作者、编辑入口等页面元信息展示
- `editLink.urlTemplate` 支持 `{lang}`、`{slug}`、`{docPath}`、`{ext}`、`{filePath}`
- `feedback` 用于页面底部反馈提交与文案控制

### `fonts`

- 中文和英文字体通常分开配置
- `downloadFonts` 用来列出项目里会配合字体方案使用的字体文件

回答这类问题时：

- 优先给短小、可直接粘贴的 YAML 片段
- 明确指出应该编辑哪个文件
- 说明是否需要同步修改另一份语言配置
