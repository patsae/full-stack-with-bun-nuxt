<template>
  <div class="dynamic-container">
    <div class="card">
      <div class="badge">
        Dynamic Route Pattern
      </div>

      <h1 class="title">
        Slug: <span class="highlight">{{ slug }}</span>
      </h1>
      
      <p class="description">
        ส่วนนี้เป็นตัวอย่างของการรับค่า <code>params</code> จาก URL มาใช้งาน 
        โดยไฟล์ชื่อ <code>[slug].vue</code>
      </p>

      <div class="code-block-container">
        <h3 class="code-title">ข้อมูลจาก route.params</h3>
        <pre class="code-block"><code>{{ route.params }}</code></pre>
      </div>

      <NuxtLink to="/" class="btn-primary">
        กลับไปหน้าเมนูหลัก
      </NuxtLink>

    </div>
  </div>
</template>

<script setup lang="ts">
  // useRoute เป็น Auto-imported composable ของ Nuxt สำหรับดูข้อมูล URL ปัจจุบัน
  const route = useRoute()
  
  // ดึงค่า slug (ชื่อตัวแปรจะตรงกับชื่อไฟล์ [slug].vue)
  const slug = route.params.slug
</script>

<style scoped>
@import '~/assets/css/routing.css';
</style>
