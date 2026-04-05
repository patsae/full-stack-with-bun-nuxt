<template>
  <div class="demo-card">
    <div class="demo-header">
      <div class="demo-icon-box">
        <svg class="demo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
      </div>
      <div>
        <h2 class="demo-title">Layouts Demo</h2>
        <p class="demo-subtitle">หน้าต่างนี้เรนเดอร์ผ่าน Custom Layout</p>
      </div>
    </div>
    
    <div>
      <p class="demo-text">
        หน้านี้เป็นตัวอย่างการเรียกใช้งาน <strong class="demo-highlight">Custom Layout</strong> อย่างเจาะจง 
        สังเกตได้จากรูปแบบของ Header ที่มีแถบสีสันและดีไซน์แตกต่างออกไปจากหน้า <span style="color: #94a3b8;">Default Layout</span>
      </p>

      <div class="demo-config-box">
        <h3 class="demo-config-title">
          <svg class="demo-config-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          การกำหนดค่า (Configuration)
        </h3>
        <p class="demo-config-desc">ใช้ออบเจ็กต์ <code>definePageMeta</code> สำหรับการกำหนดให้หน้านี้ใช้ Layout พิเศษ</p>
        <div class="demo-config-code">
          <pre><code>definePageMeta({
  layout: 'custom'
})</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>

<style scoped>
@import '~/assets/css/layout_demo.css';
</style>
