<template>
  <div class="pe-page">
    <div class="pe-wrapper">
      <!-- Title Section -->
      <div class="pe-header">
        <h1 class="pe-title">Props & Emit Demo</h1>
        <p class="pe-subtitle">
          เรียนรู้การส่งข้อมูล (Props) และส่งสัญญาณ (Emit) ระหว่าง Parent และ Child Component
        </p>
      </div>

      <!-- Parent Container -->
      <div class="pe-parent-card">
        <div class="pe-badge-parent">
          Parent Component
        </div>
        
        <div class="pe-status-box">
          <span class="pe-status-title">ผลลัพธ์ใน Parent (การดักฟังสัญญาณ Emit):</span>
          <div class="pe-status-row">
            <span class="pe-status-label">ข้อความตอบกลับจากลูก:</span>
            <span v-if="childReply" class="pe-reply-text">
              {{ childReply }}
            </span>
            <span v-else class="pe-no-reply">
              ยังไม่มีการตอบกลับ (รอรับค่า...)
            </span>
          </div>
        </div>

        <div class="pe-form-group">
          <label class="pe-label">ส่งข้อความหาลูก (ส่งเป็น Props):</label>
          <input 
            v-model="parentMessage" 
            type="text" 
            class="pe-input"
            placeholder="พิมพ์ข้อความที่ต้องการส่งให้ลูก..."
          />
        </div>

        <hr class="pe-divider" />

        <!-- Render Child Component -->
        <ChildComponent 
          ref="childRef"
          :message="parentMessage" 
          @update="handleUpdate"
        />

        <div class="pe-parent-action">
          <button @click="triggerChildAlert" class="pe-btn pe-btn-alt">
            <svg class="pe-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            สั่งงานลูก (Expose & Ref)
          </button>
        </div>

        <!-- Back Button -->
        <NuxtLink to="/" class="pe-back-link">
            <div class="pe-back-icon-box">
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
import ChildComponent from './childComponent.vue';

// อ้างอิง Reference ถึง Child Component
const childRef = ref<InstanceType<typeof ChildComponent> | null>(null);

// ตัวแปรเก็บข้อความที่จะส่งไปให้ Child ผ่าน Props แนะนำให้ทดลองพิมพ์เปลี่ยนข้อความ
const parentMessage = ref('สวัสดีลูกรัก! แม่มีเรื่องจะคุยด้วยนะ');

// ตัวแปรไว้เก็บค่าที่ได้รับกลับมาจาก Child ผ่าน Emit
const childReply = ref('');

// ฟังก์ชันสำหรับรับสัญญาณ (Emit) จาก Child
const handleUpdate = (value: string) => {
  childReply.value = value;
  
  // แจ้งเตือนสั้นๆ เพื่อให้เห็นภาพการทำงาน
  console.log('Parent ได้รับสัญญาณ:', value);
};

// ฟังก์ชันสำหรับสั่งงานลูกผ่านการเข้าถึง Ref Expose
const triggerChildAlert = () => {
  if (childRef.value) {
    childRef.value.showAlert();
  }
};
</script>

<style scoped>
@import '~/assets/css/props_emit.css';
</style>