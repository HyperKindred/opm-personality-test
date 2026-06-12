/** 维度 ID 类型 */
export type DimensionId =
  | 'bravery'
  | 'ego'
  | 'justice'
  | 'discipline'
  | 'sociability'
  | 'ambition'

/** 维度定义 */
export interface Dimension {
  id: DimensionId
  label: string
  low: string
  high: string
  emoji: string
}

/** 选项的维度影响 */
export interface Effect {
  dimId: DimensionId
  delta: number // -15 ~ +15
}

/** 单个选项 */
export interface Option {
  id: string
  text: string
  effects: Effect[]
}

/** 题目 */
export interface Question {
  id: string
  scenario: string
  options: Option[]
}

/** 角色 */
export interface Character {
  id: string
  name: string
  title: string
  emoji: string
  /** 头像图片路径，相对于 public/ 目录，如 "/avatars/saitama.svg" */
  avatar: string
  description: string
  matchReason: string
  target: Record<DimensionId, number>
}

/** 各维度得分 */
export type DimensionScores = Record<DimensionId, number>

/** 测评结果 */
export interface QuizResult {
  scores: DimensionScores
  character: Character
}
