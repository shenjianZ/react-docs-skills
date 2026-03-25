# 使用指南

本指南将帮助您快速开始使用 React Docs UI Skills。

## 目录

- [安装](#安装)
- [配置 AI Agent](#配置-ai-agent)
- [使用技能](#使用技能)
- [常见问题](#常见问题)

## 安装

### 方法 1: 直接克隆

```bash
git clone https://github.com/shenjianZ/react-docs-skills.git
cd react-docs-skills
```

### 方法 2: 下载 ZIP

访问 [GitHub Releases](https://github.com/shenjianZ/react-docs-skills/releases) 下载最新版本。

## 配置 AI Agent

### Claude Code

将技能目录添加到 Claude Code 的工作区：

```bash
# 假设 Claude Code 的技能目录在 ~/.config/claude-code/skills
cp -r skills/* ~/.config/claude-code/skills/
```

### Cursor

```bash
# 假设 Cursor 的技能目录在 ~/.cursor/skills
cp -r skills/* ~/.cursor/skills/
```

### 其他 Agent

请参考您的 Agent 文档，找到技能目录位置并复制技能文件。

## 使用技能

### react-docs-ui-config

用于编写和修改 react-docs-ui 的配置文件。

**示例对话：**
```
你: 帮我添加一个新的导航项到 site.yaml
Agent: [使用 react-docs-ui-config 技能]
```

### react-docs-ui-doc-authoring

用于编写 react-docs-ui 的文档。

**示例对话：**
```
你: 帮我写一个关于安装的文档页面
Agent: [使用 react-docs-ui-doc-authoring 技能]
```

### react-docs-ui-scaffold

用于创建新的 react-docs-ui 项目。

**示例对话：**
```
你: 帮我创建一个新的文档项目
Agent: [使用 react-docs-ui-scaffold 技能]
```

## 常见问题

### Q: 技能没有生效怎么办？

A: 请检查：
1. 技能文件是否正确复制到 Agent 的技能目录
2. Agent 是否支持技能功能
3. 技能配置文件格式是否正确

### Q: 如何更新技能？

A: 使用 git 拉取最新代码：
```bash
git pull origin main
# 然后重新复制到 Agent 技能目录
```

### Q: 可以自定义技能吗？

A: 可以！参考 [贡献指南](../CONTRIBUTING.md) 了解如何创建新技能。

### Q: 技能在哪些 AI Agent 上可用？

A: 目前支持：
- Claude Code
- Cursor
- 其他支持技能系统的 AI Agent

## 下一步

- 查看 [技能文档](../skills/) 了解每个技能的详细信息
- 阅读 [贡献指南](../CONTRIBUTING.md) 了解如何参与贡献
- 访问 [GitHub Issues](https://github.com/shenjianZ/react-docs-skills/issues) 报告问题或提出建议