# 脚手架工作流

当用户想创建一个新的 docs 项目时，按下面的思路回答：

- 用 `npm create react-docs-ui@latest my-docs` 或 `npx create-react-docs-ui@latest my-docs` 创建项目
- 进入生成后的项目目录
- 安装依赖
- 启动本地开发服务器
- 然后开始修改这个项目里的配置文件和文档文件

## 常用命令

常见写法：

```bash
npm create react-docs-ui@latest my-docs
cd my-docs
npm install
npm run dev
```

也可以这样写：

```bash
npx create-react-docs-ui@latest my-docs
cd my-docs
npm install
npm run dev
```

回答时注意：

- 如果用户已经明确在用某个包管理器，就尽量沿用他的用法
- 重点解释生成后的 docs 项目怎么使用，不要展开脚手架内部实现