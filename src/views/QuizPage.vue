<script setup lang="ts">
import { computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import QuestionCard from '@/components/QuestionCard.vue'

const router = useRouter()
const quiz = useQuizStore()

const progressPercent = computed(() => {
  if (quiz.totalQuestions === 0) return 0
  return Math.round((quiz.answeredCount / quiz.totalQuestions) * 100)
})

function handleAnswer(optionId: string) {
  quiz.answer(optionId)

  // 最后一题完成后跳转，等待 DOM 更新让选中态渲染
  if (quiz.finished) {
    void nextTick(() => router.push('/result'))
  }
}

function goBack() {
  if (quiz.answeredCount > 0) {
    const ok = confirm('确定要返回吗？当前答题进度将不会保存。')
    if (!ok) return
  }
  router.push('/')
}
</script>

<template>
  <div class="quiz-page">
    <!-- 顶部栏 -->
    <header class="quiz-header">
      <button class="back-btn" @click="goBack">← 返回</button>
      <div class="progress-bar-track">
        <div
          class="progress-bar-fill"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
      <span class="progress-text">{{ progressPercent }}%</span>
    </header>

    <!-- 当前题目 -->
    <main class="quiz-main" v-if="quiz.currentQuestion">
      <QuestionCard
        :question="quiz.currentQuestion"
        :question-number="quiz.currentIndex + 1"
        :total-questions="quiz.totalQuestions"
        :selected-option-id="quiz.answers[quiz.currentQuestion.id]"
        @select="handleAnswer"
      />
    </main>

    <!-- 加载状态（不应该发生，但兜底） -->
    <main class="quiz-main" v-else>
      <p class="empty-state">没有找到题目，请返回重试。</p>
    </main>
  </div>
</template>

<style scoped>
.quiz-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.quiz-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.back-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #aaa;
  font-size: 14px;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
}

.back-btn:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}

.progress-bar-track {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffc832, #ff8c00);
  border-radius: 3px;
  transition: width 0.35s ease;
}

.progress-text {
  font-size: 13px;
  color: #888;
  font-weight: 600;
  min-width: 40px;
  text-align: right;
  flex-shrink: 0;
}

.quiz-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px 80px;
}

.empty-state {
  color: #666;
  font-size: 16px;
}
</style>
