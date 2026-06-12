# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

一拳超人·人格测试 — 纯前端 SPA 测评应用。题库共 34 题，每次随机抽取 20 题作答。在 6 个人格维度上生成雷达图，分数经 SPREAD_FACTOR(1.6) 放大后基于余弦相似度匹配到最相似的一拳超人角色（共 11 个）。

**Stack**: Vue 3 + TypeScript + Vite + Pinia + Vue Router + ECharts (vue-echarts)

## Commands

```bash
npm run dev       # 启动开发服务器 (localhost:5173)
npm run build     # 类型检查 + 生产构建 (输出到 dist/)
npm run preview   # 预览构建产物
npm install       # 安装依赖
```

## Architecture (Data Flow)

```
Questions (data/questions.ts)
  │ 用户选择选项, 每个选项携带 effects: [{dimId, delta}]
  ▼
Pinia Store (stores/quiz.ts)
  │ 保存 answers: Record<questionId, optionId>
  │ 提供 currentQuestion, progress, liveScores 等 computed
  ▼
Calculator (engine/calculator.ts)  ← 纯函数, 无副作用
  │ calculateScores()  累加 effects → clamp 0-100 → SPREAD_FACTOR 放大偏离度
  │ matchCharacter()   6维向量与11个角色 target 计算余弦相似度
  ▼
Result (QuizResult)
  ├─ RadarChart (ECharts)   用户轮廓 + 角色轮廓对照
  └─ CharacterCard          角色介绍 + 匹配理由
```

## Key Type Definitions

See [src/types/index.ts](src/types/index.ts):
- `DimensionId` — 6 个维度的联合类型 (`bravery | ego | justice | ...`)
- `Question` — 题干 `scenario` + `Option[]`, 每个 Option 有 `effects: Effect[]`
- `Character` — `target: Record<DimensionId, number>` 是匹配的目标向量
- `QuizResult` — `scores` (你的维度分) + `character` (匹配角色)

## Where to Modify

| What | File |
|------|------|
| 题目内容 / 选项 / effects | [src/data/questions.ts](src/data/questions.ts) |
| 角色定义 / target 向量 / 匹配文案 | [src/data/characters.ts](src/data/characters.ts) |
| 维度体系 (增/删/改维度) | [src/data/dimensions.ts](src/data/dimensions.ts) + [src/types/index.ts](src/types/index.ts) |
| 评分 / 匹配算法 | [src/engine/calculator.ts](src/engine/calculator.ts) |
| 答题状态管理 | [src/stores/quiz.ts](src/stores/quiz.ts) |
| UI 页面 | [src/views/](src/views/) |
| UI 组件 (雷达图/题目卡片/角色卡片) | [src/components/](src/components/) |
| 路由 | [src/router/index.ts](src/router/index.ts) |

## Adding a New Character

1. Add entry to `CHARACTERS` in [src/data/characters.ts](src/data/characters.ts) — provide `target` vector (0-100 per dimension) and `matchReason` text.
2. No other files need changes — matching is computed dynamically via cosine similarity.

## Adding a New Question

1. Add entry to `QUESTIONS` in [src/data/questions.ts](src/data/questions.ts).
2. Each option's `effects` should adjust 1-3 dimensions with delta values (-15 to +15).
3. The store reads `QUESTIONS` directly and `QUESTIONS.length` auto-adapts.

## Important Behaviors

- **Random question selection**: `initQuiz()` shuffles the 34-question pool (Fisher-Yates) and picks 20. Each quiz is different.
- **Score amplification**: After accumulating effects, scores are stretched away from center 50 by `SPREAD_FACTOR=1.6` to prevent all results clustering near the middle.
- **No clearing on "回到首页"**: `goHome()` on ResultPage only navigates, does NOT call `reset()`. Result is kept so browser "Back" still shows it.
- **Image fallback**: `CharacterCard` shows `<img>` with `@error` fallback to emoji. Place real PNGs in `public/avatars/{id}.png` to replace. All images are portrait (1080×1920 or similar).
- **Start a quiz**: Use `quiz.initQuiz()` to shuffle + pick questions. `quiz.reset()` only cleans up — doesn't start a new quiz.
- **Result page guard**: `onMounted` checks `quiz.result` and redirects to `/` if missing.
- **Pure frontend**: all data is static, no API calls. User answers never leave the device.

## Route Layout

```
/         → HomePage     (介绍 + 开始按钮)
/quiz     → QuizPage     (逐题作答, 进度条)
/result   → ResultPage   (雷达图 + 角色匹配 + 维度明细)
```

All routes lazy-loaded. Page transitions use `<Transition mode="out-in">` in [App.vue](src/App.vue).
