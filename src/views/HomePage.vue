<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'

const router = useRouter()
const quiz = useQuizStore()

const avatarSrc = computed(() => import.meta.env.BASE_URL + 'avatars/one_punch_man.png')

function startQuiz() {
  quiz.initQuiz()
  router.push('/quiz')
}
</script>

<template>
  <div class="home">
    <div class="hero">
      <div class="hero-logo">
        <img :src="avatarSrc" alt="一拳超人" class="hero-img" />
      </div>
      <h1 class="hero-title">一拳超人·人格测试</h1>
      <p class="hero-subtitle">
        二十道情景题，测出你最像哪位英雄<br />
        —— 或者怪人。
      </p>

      <div class="hero-desc">
        <p>
          场景改编自一拳超人世界观，每个选择都反映了你内在的
          <strong>勇气、自我、正义、自律、社交</strong> 和 <strong>追求</strong>。
        </p>
        <p>测试约需 5 分钟，准备好了就点下面开始。</p>
      </div>

      <button class="start-btn" @click="startQuiz">
        <span class="btn-text">开始测试</span>
        <span class="btn-arrow">→</span>
      </button>

      <div class="hero-footnote">
        <span>⚡ 纯前端 · 你的数据不会离开这台设备</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.hero {
  text-align: center;
  max-width: 560px;
}

.hero-logo {
  margin-bottom: 24px;
  animation: float 3s ease-in-out infinite;
}

.hero-img {
  width: 200px;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(255, 200, 50, 0.3));
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.hero-title {
  font-size: 40px;
  font-weight: 800;
  color: #ffc832;
  margin: 0 0 12px;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-size: 18px;
  color: #999;
  line-height: 1.6;
  margin: 0 0 32px;
}

.hero-desc {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 36px;
  font-size: 15px;
  line-height: 1.7;
  color: #bbb;
}

.hero-desc strong {
  color: #ffc832;
}

.hero-desc p {
  margin: 0 0 8px;
}
.hero-desc p:last-child {
  margin-bottom: 0;
}

.start-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 48px;
  background: linear-gradient(135deg, #ffc832, #ff8c00);
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 200, 50, 0.25);
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 200, 50, 0.35);
}

.btn-arrow {
  font-size: 22px;
  transition: transform 0.3s ease;
}

.start-btn:hover .btn-arrow {
  transform: translateX(4px);
}

.hero-footnote {
  margin-top: 40px;
  font-size: 13px;
  color: #666;
}
</style>
