# 项目结构

默认这些路径都相对于用户生成后的 docs 项目根目录，例如 `D:\tmp\test-docs\docs`。

解释项目结构时，重点关注这些目录和文件：

- `public/config/site.yaml`：中文站点配置
- `public/config/site.en.yaml`：英文站点配置
- `public/docs/zh-cn/`：中文文档内容
- `public/docs/en/`：英文文档内容
- `src/components/`：可供 MDX 使用的自定义 React 组件
- `src/main.tsx`：应用入口
- `vite.config.ts`：开发和构建配置
- `scripts/generate-search-index.js`：搜索索引相关脚本
- `scripts/generate-shiki-bundle.js`：代码高亮资源相关脚本

## 说明重点

- 文档内容按文件组织，放在 `public/docs/<lang>/`
- 导航和侧边栏不是自动从文件生成的，而是配置驱动
- 自定义 MDX 组件默认放在 `src/components/`
- 项目默认是中英双语，因此回答时通常要同时考虑 `zh-cn` 和 `en`