import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { QUESTIONS } from '@/data/questions'
import type { Question } from '@/types'
import { calculateScores, getQuizResult } from '@/engine/calculator'
import type { DimensionScores, QuizResult } from '@/types'

/** 每次测试抽取的题目数 */
const PICK_COUNT = 20

/** Fisher-Yates 洗牌，返回 shuffled 副本 */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const useQuizStore = defineStore('quiz', () => {
  /* ========== 状态 ========== */
  const selectedQuestions = ref<Question[]>([])    // 本次抽中的题目
  const currentIndex = ref(0)                       // 当前第几题 (0-based)
  const answers = ref<Record<string, string>>({})   // { questionId: optionId }
  const finished = ref(false)
  const result = ref<QuizResult | null>(null)

  /* ========== 计算属性 ========== */
  const currentQuestion = computed(() => selectedQuestions.value[currentIndex.value])
  const totalQuestions = computed(() => selectedQuestions.value.length)
  const isLastQuestion = computed(() => currentIndex.value >= totalQuestions.value - 1)
  const hasAnsweredCurrent = computed(() => !!answers.value[currentQuestion.value?.id])

  const answeredCount = computed(() => Object.keys(answers.value).length)

  /** 实时中间分数 */
  const liveScores = computed<DimensionScores | null>(() => {
    const keys = Object.keys(answers.value)
    if (keys.length === 0) return null
    return calculateScores(selectedQuestions.value, answers.value)
  })

  /* ========== 操作 ========== */
  /** 启动新测试 — 洗牌抽题 */
  function initQuiz() {
    selectedQuestions.value = shuffle(QUESTIONS).slice(0, PICK_COUNT)
    currentIndex.value = 0
    answers.value = {}
    finished.value = false
    result.value = null
  }

  function answer(optionId: string) {
    const q = currentQuestion.value
    if (!q) return

    answers.value = { ...answers.value, [q.id]: optionId }

    if (isLastQuestion.value) {
      finish()
    } else {
      currentIndex.value++
    }
  }

  function next() {
    if (isLastQuestion.value) {
      finish()
    } else {
      currentIndex.value++
    }
  }

  function finish() {
    result.value = getQuizResult(selectedQuestions.value, answers.value)
    finished.value = true
  }

  function reset() {
    selectedQuestions.value = []
    currentIndex.value = 0
    answers.value = {}
    finished.value = false
    result.value = null
  }

  return {
    // state
    selectedQuestions,
    currentIndex,
    answers,
    finished,
    result,
    // computed
    currentQuestion,
    totalQuestions,
    isLastQuestion,
    hasAnsweredCurrent,
    answeredCount,
    liveScores,
    // actions
    initQuiz,
    answer,
    next,
    finish,
    reset,
  }
})
