import type { Character, DimensionScores, Question, QuizResult } from '@/types'
import { CHARACTERS } from '@/data/characters'
import { DIMENSION_IDS } from '@/data/dimensions'

/** 分数放大因子 — 将分值推离中心 50，加大极端度以提升匹配区分度 */
const SPREAD_FACTOR = 1.6

/**
 * 累加所有选项的 effects → 原始维度向量，再放大偏离度
 */
export function calculateScores(
  questions: Question[],
  answers: Record<string, string>,
): DimensionScores {
  const raw: DimensionScores = {
    bravery: 50,
    ego: 50,
    justice: 50,
    discipline: 50,
    sociability: 50,
    ambition: 50,
  }

  for (const q of questions) {
    const selectedId = answers[q.id]
    if (!selectedId) continue

    const option = q.options.find((o) => o.id === selectedId)
    if (!option) continue

    for (const effect of option.effects) {
      raw[effect.dimId] = clamp(raw[effect.dimId] + effect.delta, 0, 100)
    }
  }

  // 放大偏离中心的程度，避免所有分数都聚集在 50 附近
  for (const key of DIMENSION_IDS) {
    raw[key] = clamp(50 + (raw[key] - 50) * SPREAD_FACTOR, 0, 100)
  }

  return raw
}

/**
 * 计算与所有角色的余弦相似度，返回最匹配的角色
 */
export function matchCharacter(
  scores: DimensionScores,
): { character: Character; similarity: number } {
  const scoresArray = DIMENSION_IDS.map((d) => scores[d])

  let best = CHARACTERS[0]
  let bestSim = -Infinity

  for (const char of CHARACTERS) {
    const targetArray = DIMENSION_IDS.map((d) => char.target[d])
    const sim = cosineSimilarity(scoresArray, targetArray)
    if (sim > bestSim) {
      bestSim = sim
      best = char
    }
  }

  return { character: best, similarity: bestSim }
}

/**
 * 获取完整测评结果
 */
export function getQuizResult(
  questions: Question[],
  answers: Record<string, string>,
): QuizResult {
  const scores = calculateScores(questions, answers)
  const { character } = matchCharacter(scores)
  return { scores, character }
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0
  let magA = 0
  let magB = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    magA += a[i] * a[i]
    magB += b[i] * b[i]
  }
  const mag = Math.sqrt(magA) * Math.sqrt(magB)
  return mag === 0 ? 0 : dot / mag
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v))
}
