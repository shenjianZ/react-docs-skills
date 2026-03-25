# React Docs UI Skills

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/shenjianZ/react-docs-skills.svg)](https://github.com/shenjianZ/react-docs-skills/issues)

为 [react-docs-ui](https://github.com/shenjianZ/react-docs-ui) 提供的 AI Agent 技能集合，帮助用户更高效地配置、编写文档和使用脚手架。

## 📦 包含的 Skills

### 1. react-docs-ui-config
编写有效的 `site.yaml` 和 `site.en.yaml` 配置文件

- 配置导航栏（navbar）、侧边栏（sidebar）
- 管理主题、TOC、搜索、导出、字体等
- 维护中英文配置同步

### 2. react-docs-ui-doc-authoring
编写 Markdown、Frontmatter 和 MDX 文档

- 使用 frontmatter 字段（title、description、author、date）
- 使用自定义 MDX 组件
- 维护中英文双语文档

### 3. react-docs-ui-scaffold
创建和引导使用 create-react-docs-ui 文档站点

- 创建新的文档项目
- 理解生成后的项目结构
- 执行项目启动命令

## 🚀 快速开始

### 安装

```bash
# 克隆仓库
git clone https://github.com/shenjianZ/react-docs-skills.git

# 进入目录
cd react-docs-skills
```

### 使用方式

将技能目录添加到您的 AI Agent 工作区中：

```bash
# 假设您的 Agent 工作区在 ~/.config/ai-agent/skills
cp -r skills/* ~/.config/ai-agent/skills/
```

## 📖 详细文档

每个技能都包含详细的参考文档：

- [配置指南](./skills/react-docs-ui-config/references/)
- [文档编写指南](./skills/react-docs-ui-doc-authoring/references/)
- [脚手架使用指南](./skills/react-docs-ui-scaffold/references/)

更多文档：
- [使用指南](./docs/USAGE.md)
- [开发指南](./docs/DEVELOPMENT.md)

## 🤝 贡献

我们欢迎社区贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解如何参与。

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 🔗 相关链接

- [react-docs-ui](https://github.com/shenjianZ/react-docs-ui)
- [create-react-docs-ui](https://github.com/shenjianZ/react-docs-ui/tree/main/create-react-docs-ui)
