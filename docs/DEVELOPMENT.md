# 技能开发指南

本指南将帮助您了解如何开发和维护 React Docs UI Skills。

## 目录

- [技能结构](#技能结构)
- [开发流程](#开发流程)
- [测试技能](#测试技能)
- [发布流程](#发布流程)

## 技能结构

每个技能遵循以下结构：

```
skill-name/
├── SKILL.md              # 技能说明文档
├── agents/
│   └── openai.yaml       # Agent 配置
└── references/           # 参考文档
    ├── doc1.md
    └── doc2.md
```

### SKILL.md

技能的主文档，包含：

- 技能名称和描述
- 适用场景
- 使用方式
- 参考文档链接

### agents/openai.yaml

Agent 配置文件，定义：

- 显示名称
- 简短描述
- 默认提示模板
- 调用策略

示例：
```yaml
interface:
  display_name: "技能显示名称"
  short_description: "简短描述"
  default_prompt: |
    默认提示模板内容

policy:
  allow_implicit_invocation: true
```

### references/

包含技能相关的参考文档，可以是：

- 技术规范
- 最佳实践
- 示例代码
- 常见问题

## 开发流程

### 1. 创建技能

```bash
# 创建技能目录
mkdir skills/my-new-skill
cd skills/my-new-skill

# 创建必需文件
touch SKILL.md
mkdir -p agents references
touch agents/openai.yaml
```

### 2. 编写文档

编辑 `SKILL.md`，添加技能说明。

### 3. 配置 Agent

编辑 `agents/openai.yaml`，定义 Agent 行为。

### 4. 添加参考文档

在 `references/` 目录添加相关文档。

### 5. 验证技能

```bash
npm run validate
```

### 6. 提交更改

```bash
git add .
git commit -m "feat: add my-new-skill"
git push origin feature/my-new-skill
```

## 测试技能

### 本地验证

使用验证脚本检查技能结构：

```bash
npm run validate
```

### 手动测试

1. 将技能复制到 Agent 的技能目录
2. 启动 Agent
3. 测试技能的各个功能
4. 验证参考文档的准确性

## 发布流程

### 1. 创建 Pull Request

在 GitHub 上创建 PR，等待代码审查。

### 2. 合并 PR

通过审查后，PR 会被合并到主分支。

### 3. 创建 Release

在 GitHub 上创建新版本：

1. 访问 Releases 页面
2. 点击 "Create a new release"
3. 填写版本号和发布说明
4. 发布

### 4. 更新文档

根据需要更新 README 和其他文档。

## 最佳实践

### 命名规范

- 技能目录：kebab-case（如 `react-docs-ui-config`）
- 文件名：kebab-case（如 `config-fields.md`）
- 显示名称：Pascal Case（如 "React Docs UI Config"）

### 文档规范

- 使用清晰的标题结构
- 提供具体的示例
- 包含常见问题解答
- 保持文档简洁明了

### 代码规范

- YAML 文件使用 2 空格缩进
- Markdown 文件使用一致的格式
- 遵循项目的代码风格

## 工具和资源

### 验证工具

```bash
npm run validate  # 验证所有技能
```

### 参考资源

- [YAML 规范](https://yaml.org/spec/)
- [Markdown 指南](https://www.markdownguide.org/)
- [项目贡献指南](../CONTRIBUTING.md)