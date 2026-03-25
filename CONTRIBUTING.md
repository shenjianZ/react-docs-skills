# 贡献指南

感谢您对 React Docs UI Skills 项目的关注！

## 🎯 贡献范围

我们欢迎以下类型的贡献：

- 🐛 Bug 修复
- 📝 文档改进
- ✨ 新技能（需与 react-docs-ui 相关）
- 🎨 样式优化
- ⚡ 性能优化

## 🚀 开始贡献

### 1. Fork 并克隆仓库

```bash
git clone https://github.com/你的用户名/react-docs-skills.git
cd react-docs-skills
```

### 2. 创建功能分支

```bash
git checkout -b feature/your-feature-name
```

### 3. 提交更改

```bash
git add .
git commit -m "feat: add your feature description"
```

### 4. 推送到你的 Fork

```bash
git push origin feature/your-feature-name
```

### 5. 创建 Pull Request

访问原仓库，点击 "New Pull Request"

## 📋 添加新技能

如果要添加新技能，请遵循以下结构：

```
skills/
├── your-skill-name/
│   ├── SKILL.md          # 技能说明
│   ├── agents/
│   │   └── openai.yaml   # Agent 配置
│   └── references/       # 参考文档
│       └── *.md
```

### Skill 模板

**SKILL.md 模板：**
```markdown
# Your Skill Name

简短描述（1-2 句话）

## 适用场景

- 场景 1
- 场景 2

## 使用方式

说明如何使用这个技能

## 参考文档

- [文档 1](./references/doc1.md)
- [文档 2](./references/doc2.md)
```

**agents/openai.yaml 模板：**
```yaml
interface:
  display_name: "Your Skill Display Name"
  short_description: "简短描述"
  default_prompt: |
    默认提示模板

policy:
  allow_implicit_invocation: true
```

## 📝 提交信息规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat:` 新功能
- `fix:` Bug 修复
- `docs:` 文档更新
- `style:` 代码格式（不影响代码运行）
- `refactor:` 重构
- `test:` 测试相关
- `chore:` 构建/工具相关

示例：
```bash
git commit -m "feat: add new installation skill"
git commit -m "fix: correct sidebar navigation in config skill"
git commit -m "docs: update contribution guidelines"
```

## ✅ 代码审查

在提交 PR 之前，请确保：

- [ ] 代码符合项目风格
- [ ] 添加了必要的文档
- [ ] 通过了本地测试（如果有）
- [ ] 提交信息清晰明确

## 🤝 行为准则

请保持友好和尊重的态度。我们欢迎建设性的讨论和反馈。

## 📞 联系方式

如有问题，请通过以下方式联系：

- GitHub Issues: https://github.com/shenjianZ/react-docs-skills/issues
- Discussions: https://github.com/shenjianZ/react-docs-skills/discussions