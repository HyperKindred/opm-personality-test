<script setup lang="ts">
import { ref } from 'vue'
import type { Character } from '@/types'

defineProps<{
  character: Character
  showReason?: boolean
}>()

const imgError = ref(false)
</script>

<template>
  <div class="character-card">
    <!-- 角色头像区 -->
    <div class="char-avatar">
      <img
        v-if="!imgError"
        :src="character.avatar"
        :alt="character.name"
        class="char-img"
        @error="imgError = true"
      />
      <span v-else class="char-emoji">{{ character.emoji }}</span>
    </div>

    <!-- 角色名称 -->
    <h2 class="char-name">{{ character.name }}</h2>
    <p class="char-title">{{ character.title }}</p>

    <!-- 角色描述 -->
    <p class="char-desc">{{ character.description }}</p>

    <!-- 匹配原因 -->
    <div v-if="showReason" class="match-reason">
      <h3 class="match-heading">✨ 为什么是你</h3>
      <p>{{ character.matchReason }}</p>
    </div>
  </div>
</template>

<style scoped>
.character-card {
  text-align: center;
  padding: 28px 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  max-width: 560px;
  margin: 0 auto;
}

.char-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 200, 50, 0.15), rgba(255, 140, 0, 0.1));
  border: 3px solid rgba(255, 200, 50, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  overflow: hidden;
}

.char-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.char-emoji {
  font-size: 56px;
}

.char-name {
  font-size: 26px;
  font-weight: 800;
  color: #ffc832;
  margin: 0 0 4px;
}

.char-title {
  font-size: 13px;
  color: #888;
  margin: 0 0 14px;
}

.char-desc {
  font-size: 13.5px;
  line-height: 1.6;
  color: #bbb;
  margin: 0 0 14px;
  text-align: left;
}

.match-reason {
  background: rgba(255, 200, 50, 0.05);
  border: 1px solid rgba(255, 200, 50, 0.15);
  border-radius: 12px;
  padding: 14px;
  text-align: left;
}

.match-heading {
  font-size: 14px;
  font-weight: 700;
  color: #ffc832;
  margin: 0 0 8px;
}

.match-reason p {
  font-size: 13px;
  line-height: 1.6;
  color: #bbb;
  margin: 0;
}
</style>
