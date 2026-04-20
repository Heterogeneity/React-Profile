# CLAUDE.md

本文档为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 项目概览

这是一个使用 TypeScript、Vite 和 Tailwind CSS 构建的 React 作品集网站。项目已配置部署到 GitHub Pages：`https://Heterogeneity.github.io/React-Profile`。

## 架构

### 核心技术
- **React 19** 启用 React Compiler 进行性能优化
- **TypeScript** 提供类型安全
- **Vite** 作为构建工具，支持热模块替换
- **React Router** 用于客户端路由
- **Tailwind CSS** 用于样式设计
- **Lucide React** 用于图标

### 项目结构
- `src/components/` - 可复用的 UI 组件
- `src/components/home/` - 首页特定组件（Hero、About、Skills、Projects、Contact）
- `src/page/` - 页面组件（HomePage、ExperiencePage、ErrorPage）
- `src/hook/` - 自定义 React Hooks（useIntersect、useScrollToTop）
- `src/data/` - 静态数据文件
- `src/router/` - 路由配置

### 路由配置
- `/` - 首页，包含：Hero、About、Projects、Skills、Contact 部分
- `/experience` - 经验页面（当前为占位符）
- `/*` - 404 错误页面

## 开发命令

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
在端口 4300 启动 Vite 开发服务器，启用热模块替换。

### 构建生产版本
```bash
npm run build
```
将应用构建到 `dist/` 目录，包含优化的代码分割。

### 预览生产构建
```bash
npm run preview
```
在端口 3000 提供生产版本的预览。

### 代码检查
```bash
npm run lint
```
运行 ESLint 检查代码问题。

### 部署到 GitHub Pages
```bash
npm run deploy
```
构建并部署应用到 GitHub Pages（自动运行 predeploy 脚本）。

## 关键配置

### Vite 配置 (`vite.config.ts`)
- 基础路径设置为 `/React-Profile/` 以支持 GitHub Pages
- 通过 Babel 插件启用 React Compiler
- 集成 Tailwind CSS 插件
- 代码分割配置：
  - `vendor` 块用于 React/ReactDOM
  - `icons` 块用于 @ant-design/icons（如果添加）
- 开发服务器运行在端口 4300
- 生产构建使用 Terser 进行压缩

### 路由配置 (`src/router/index.ts`)
- 使用浏览器路由，基础名称为 `/React-Profile/`
- 布局包装器包含 Header 和 Footer
- 三个路由：首页、经验页面和 404 页面

## 组件模式

### 动画模式
组件使用 `useIntersect` Hook 在元素进入视口时触发动画。`hasAnimated` prop 传递给子组件以控制动画状态。

### 布局结构
所有页面都包裹在 `Layout` 组件中，包括：
- Header（导航栏）
- 主内容区域（通过 `<Outlet />`）
- Footer（页脚）

## 近期开发重点

根据提交历史，近期工作主要集中在：
- 404 页面实现
- 导航修复（路由问题）
- 布局改进
- 移动端响应式设计
- 静态部署配置

## GitHub Pages 部署

项目已配置 GitHub Pages 部署：
- package.json 中的 `homepage` 字段指向 GitHub Pages 地址
- Vite 基础路径已配置用于子目录部署
- `predeploy` 脚本构建应用
- `deploy` 脚本使用 gh-pages 部署 `dist` 目录

## React Compiler

React Compiler 已启用并激活。这提供了自动记忆化和性能优化。请注意这会影响开发和构建性能。