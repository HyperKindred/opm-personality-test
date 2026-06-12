<script setup lang="ts">
import type { Question } from '@/types'

const props = defineProps<{
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedOptionId?: string
}>()

const emit = defineEmits<{
  select: [optionId: string]
}>()

function handleSelect(optionId: string) {
  if (props.selectedOptionId) return // 已选不可更改
  emit('select', optionId)
}
</script>

<template>
  <div class="question-card">
    <!-- 进度标题 -->
    <div class="question-header">
      <span class="question-badge">第 {{ questionNumber }} / {{ totalQuestions }} 题</span>
    </div>

    <!-- 题干 -->
    <div class="question-scenario">
      <p>{{ question.scenario }}</p>
    </div>

    <!-- 选项 -->
    <div class="question-options">
      <button
        v-for="(opt, idx) in question.options"
        :key="opt.id"
        class="option-btn"
        :class="{
          selected: selectedOptionId === opt.id,
          disabled: !!selectedOptionId,
        }"
        :disabled="!!selectedOptionId"
        @click="handleSelect(opt.id)"
      >
        <span class="option-label">{{ ['A', 'B', 'C', 'D'][idx] }}</span>
        <span class="option-text">{{ opt.text }}</span>
        <span v-if="selectedOptionId === opt.id" class="option-check">✓</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.question-card {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.question-header {
  margin-bottom: 24px;
}

.question-badge {
  display: inline-block;
  background: linear-gradient(135deg, #ffc832, #ff8c00);
  color: #1a1a2e;
  font-size: 13px;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

.question-scenario {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px 32px;
  margin-bottom: 28px;
  font-size: 17px;
  line-height: 1.7;
  color: #f0f0f0;
  min-height: 80px;
  display: flex;
  align-items: center;
}

.question-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 14px;
  color: #d0d0d0;
  font-size: 15.5px;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: left;
  position: relative;
}

.option-btn:hover:not(.disabled) {
  background: rgba(255, 200, 50, 0.08);
  border-color: rgba(255, 200, 50, 0.3);
  color: #fff;
  transform: translateX(4px);
}

.option-btn.selected {
  background: rgba(255, 200, 50, 0.12);
  border-color: #ffc832;
  color: #fff;
  box-shadow: 0 0 20px rgba(255, 200, 50, 0.08);
}

.option-btn.disabled {
  cursor: default;
  opacity: 0.6;
}

.option-btn.selected.disabled {
  opacity: 1;
}

.option-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.option-btn.selected .option-label {
  background: #ffc832;
  color: #1a1a2e;
}

.option-text {
  flex: 1;
}

.option-check {
  font-size: 20px;
  color: #ffc832;
  font-weight: 700;
}
</style>
