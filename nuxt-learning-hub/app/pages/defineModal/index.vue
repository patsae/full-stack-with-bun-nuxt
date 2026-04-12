<template>
  <div class="dm-page">
    <div class="dm-wrapper">
      <!-- Title Section -->
      <div class="dm-header">
        <h1 class="dm-title">defineModel Demo</h1>
        <p class="dm-subtitle">
          สัมผัสพลังของ Two-way binding ระหว่าง Parent และ Child Component
        </p>
      </div>

      <!-- Parent Container -->
      <div class="dm-parent-card">
        <div class="dm-badge-parent">
          Parent Component
        </div>
        
        <div class="dm-display-box">
          <span class="dm-display-label">ข้อมูลในฝั่งแม่ (Parent State):</span>
          <span class="dm-display-value">
            {{ sharedText || '(รอให้ Child Component พิมพ์บางอย่างมา...)' }}
          </span>
        </div>

        <hr class="dm-divider" />

        <!-- ยื่น State ให้ลูกจัดการผ่าน v-model -->
        <!-- เราสามารถตั้งชื่อ Model ใดๆ ก็ได้ เช่น v-model:ชื่อ=... ในที่นี้เราตั้งเป็น v-model:text -->
        <ChildDefineModel v-model:text="sharedText" />

        <!-- Back Button -->
        <NuxtLink to="/" class="dm-back-link">
            <div class="dm-back-icon-box">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </div>
            กลับหน้าหลัก
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildDefineModel from './childDefineModel.vue';

// ตัวแปรส่วนกลางในฝั่งแม่ (Parent) สร้างไว้เตรียมรอให้ลูกนำไปผูกติด (Bind)
// เมื่อลูกอัปเดต ค่า sharedText นี้ก็จะเปลี่ยนตามไปด้วยทันที
const sharedText = ref('');
</script>

<style scoped>
@import '~/assets/css/define_modal.css';
</style>
