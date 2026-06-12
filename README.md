# 一拳超人 · 人格测试

> ワンパンマン — 20 道情景题，测出你最像哪位英雄……或者怪人。

基于 Vue 3 构建的纯前端 SPA 测评应用，覆盖 **勇气、自我、正义、自律、社交、追求** 六个维度，通过余弦相似度从 11 个一拳超人角色中匹配与你最相似的那一个。

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## ✨ 特性

- 🎲 **随机抽题** — 34 题题库，每次 Fisher-Yates 洗牌抽取 20 题
- 📊 **雷达图** — ECharts 六维雷达图，直观对比你与匹配角色的轮廓
- 🎯 **余弦相似度匹配** — SPREAD_FACTOR 放大极端度，避免结果趋中
- 📱 **响应式** — 桌面/平板/手机自适应
- 🔒 **纯前端** — 你的作答数据不会离开这台设备
- ⚡ **懒加载路由** — 页面级代码分割 + echarts 独立分包

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器 (localhost:5173)
npm run dev

# 类型检查 + 构建
npm run build

# 预览生产构建
npm run preview
```

## 🎭 角色阵容

| 角色 | 称号 |
|------|------|
| 埼玉 | 秃头披风侠 |
| 杰诺斯 | 魔鬼改造人 |
| 龙卷 | 战栗的龙卷 |
| 吹雪 | 地狱的吹雪 |
| 饿狼 | 人类怪人 |
| 无证骑士 | 正义的自行车 |
| King | 地上最强之人 |
| 索尼克 | 音速的索尼克 |
| 僵尸男 | 不死之身 |
| 金属球棒 | 打架天王 |
| 波罗斯 | 宇宙霸主 |

## 🧩 技术栈

- **Vue 3** + TypeScript + Vite
- **Pinia** 状态管理
- **Vue Router** 路由（懒加载）
- **ECharts** 雷达图（vue-echarts）

## 📁 项目结构

```
src/
├── components/       # 通用组件 (RadarChart, CharacterCard, QuestionCard)
├── data/             # 静态数据 (questions, characters, dimensions)
├── engine/           # 评分 & 匹配算法 (纯函数)
├── router/           # 路由配置
├── stores/           # Pinia Store (答题状态)
├── types/            # TypeScript 类型定义
├── views/            # 页面 (HomePage, QuizPage, ResultPage)
└── styles/           # 全局样式
```

## 🛠️ 自定义

- **添加角色**: 编辑 `src/data/characters.ts`，提供 `target` 向量和 `matchReason` 即可
- **添加题目**: 编辑 `src/data/questions.ts`，每题 4 个选项，每个选项携带 1-3 个 `effect`
- **调整维度**: 编辑 `src/data/dimensions.ts` + `src/types/index.ts`
- **角色头像**: 将 PNG 图片放入 `public/avatars/{角色id}.png`

## 📄 License

MIT
