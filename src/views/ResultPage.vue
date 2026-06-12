<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import RadarChart from '@/components/RadarChart.vue'
import CharacterCard from '@/components/CharacterCard.vue'

const router = useRouter()
const quiz = useQuizStore()

onMounted(() => {
  if (!quiz.result) {
    router.replace('/')
  }
})

const result = computed(() => quiz.result!)
const charScores = computed(() => result.value?.character.target ?? null)

function restart() {
  quiz.initQuiz()
  router.push('/quiz')
}

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="result-page" v-if="result">
    <div class="result-hero">
      <h1 class="result-title">🎉 测评结果</h1>
      <p class="result-subtitle">
        你的六个维度构成了独特的人格画像 — 你与 {{ result.character.name }} 最为相似
      </p>
    </div>

    <div class="result-body">
      <!-- 左列：雷达图 -->
      <section class="chart-section">
        <h2 class="section-title">📊 人格维度</h2>
        <RadarChart
          :user-scores="result.scores"
          :char-scores="charScores"
          :char-name="result.character.name"
        />
        <div class="chart-legend-tip">
          <span class="legend-dot user-dot"></span> 你的测评
          <span class="legend-dot char-dot"></span> {{ result.character.name }}
        </div>
      </section>

      <!-- 右列：角色匹配 -->
      <section class="match-section">
        <h2 class="section-title">🎭 你的灵魂角色</h2>
        <CharacterCard :character="result.character" :show-reason="true" />
      </section>
    </div>

    <div class="result-actions">
      <button class="action-btn primary" @click="restart">
        🔄 再来一次
      </button>
      <button class="action-btn secondary" @click="goHome">
        🏠 回到首页
      </button>
    </div>
  </div>

  <div class="result-page empty" v-else>
    <p>暂无结果，请先完成测试。</p>
    <button class="action-btn primary" @click="goHome">返回首页</button>
  </div>
</template>

<style scoped>
.result-page {
  min-height: 100vh;
  padding: 24px 24px 40px;
}

.result-page.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #888;
}

/* ===== 顶部 ===== */
.result-hero {
  text-align: center;
  margin-bottom: 28px;
}

.result-title {
  font-size: 32px;
  font-weight: 800;
  color: #ffc832;
  margin: 0 0 8px;
}

.result-subtitle {
  font-size: 15px;
  color: #999;
  margin: 0;
}

/* ===== 两栏主体 ===== */
.result-body {
  display: flex;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 32px;
  align-items: flex-start;
}

.chart-section {
  flex: 0 0 420px;
  min-width: 0;
}

.match-section {
  flex: 1;
  min-width: 0;
}

.section-title {
  font-size: 17px;
  font-weight: 700;
  color: #ddd;
  margin: 0 0 14px;
  text-align: center;
}

.chart-legend-tip {
  text-align: center;
  font-size: 12px;
  color: #888;
  margin-top: 4px;
}

.legend-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 4px 0 12px;
  vertical-align: middle;
}

.user-dot {
  background: #ffc832;
}

.char-dot {
  background: #64c8ff;
}

/* ===== 操作按钮 ===== */
.result-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 12px 32px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  transition: all 0.25s ease;
}

.action-btn.primary {
  background: linear-gradient(135deg, #ffc832, #ff8c00);
  color: #1a1a2e;
  box-shadow: 0 4px 16px rgba(255, 200, 50, 0.2);
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(255, 200, 50, 0.3);
}

.action-btn.secondary {
  background: rgba(255, 255, 255, 0.06);
  color: #bbb;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.action-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.10);
  color: #fff;
}

/* ===== 响应式 ===== */
@media (max-width: 900px) {
  .result-body {
    flex-direction: column;
    gap: 40px;
  }

  .chart-section {
    flex: 0 0 auto;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }

  .result-title {
    font-size: 28px;
  }
}
</style>
