<template>
  <div class="dynamic-container">
    <div class="card">
      <div class="badge">
        Static Route Pattern
      </div>

      <h1 class="title">
        <span class="highlight" style="color: #0284c7;">Page Two</span>
      </h1>
      
      <p class="description">
        นี่คือตัวอย่างหน้าเว็บปกติ (Static Page) หน้าที่ 2<br/>
        ด้านล่างคือวิธีกดเปลี่ยนหน้า 2 แบบ
      </p>

      <div class="link-list" style="margin-top: 1rem;">
        <!-- วิธีที่ 1: ใช้ NuxtLink -->
        <NuxtLink to="/routing/page-one" class="btn-block" style="margin-bottom: 1rem; background-color: #0284c7;">
          วิธีที่ 1: เปลี่ยนหน้าด้วย NuxtLink
        </NuxtLink>

        <!-- วิธีที่ 2: ใช้ Function -->
        <button @click="toPageOne()" class="btn-block" style="width: 100%; cursor: pointer; border: none; font-size: 1rem; background-color: #0284c7;">
          วิธีที่ 2: เปลี่ยนหน้าด้วย Function router.push()
        </button>
      </div>

      <div style="margin-top: 2.5rem; text-align: center;">
        <NuxtLink to="/routing" style="color: #6b7280; text-decoration: none; font-weight: bold;">
          ⬅ กลับไปหน้า Routing Menu
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // ใช้ useRouter คู่กับ .push()
  const router = useRouter()

  const toPageOne = () => {
      router.push('/routing/page-one')
  }
</script>

<style scoped>
@import '~/assets/css/routing.css';

.badge {
  background-color: #e0f2fe; /* Light blue */
  color: #075985; /* Dark blue */
}
</style>