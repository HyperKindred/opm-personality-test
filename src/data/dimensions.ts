import type { Dimension } from '@/types'

export const DIMENSIONS: Dimension[] = [
  {
    id: 'bravery',
    label: '勇气',
    low: '谨慎务实',
    high: '勇猛果敢',
    emoji: '⚔️',
  },
  {
    id: 'ego',
    label: '自我',
    low: '谦逊低调',
    high: '极度自信',
    emoji: '🪞',
  },
  {
    id: 'justice',
    label: '正义',
    low: '利己主义',
    high: '理想主义',
    emoji: '⚖️',
  },
  {
    id: 'discipline',
    label: '自律',
    low: '随性而活',
    high: '严于律己',
    emoji: '🔥',
  },
  {
    id: 'sociability',
    label: '社交',
    low: '独来独往',
    high: '热血团队',
    emoji: '🤝',
  },
  {
    id: 'ambition',
    label: '追求',
    low: '安于现状',
    high: '永无止境',
    emoji: '🚀',
  },
]

export const DIMENSION_IDS = DIMENSIONS.map((d) => d.id) as Array<
  (typeof DIMENSIONS)[number]['id']
>
