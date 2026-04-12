<template>
  <div class="routing-container">
    <div class="card">
      <h1 class="title">Routing Menu</h1>

      <ul class="link-list">
        <li>
          <NuxtLink to="/routing/page-one" class="link-item">
            <span class="icon">📄</span>
            <div class="link-text">
              <h3>Page One</h3>
              <p>ตัวอย่างหน้า Page 1</p>
            </div>
            <span class="arrow">➔</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/routing/page-two" class="link-item">
            <span class="icon">📄</span>
            <div class="link-text">
              <h3>Page Two</h3>
              <p>ตัวอย่างหน้า Page 2</p>
            </div>
            <span class="arrow">➔</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/routing/123456" class="link-item">
            <span class="icon">🔗</span>
            <div class="link-text">
              <h3>Dynamic Slug (123456)</h3>
              <p>ตัวอย่างการส่งค่าพารามิเตอร์ [slug]</p>
            </div>
            <span class="arrow">➔</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/routing/hello-world" class="link-item">
            <span class="icon">🔗</span>
            <div class="link-text">
              <h3>Dynamic Slug (hello-world)</h3>
              <p>ตัวอย่างการส่งค่าข้อความแบบ Dynamic</p>
            </div>
            <span class="arrow">➔</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/routing/two-slug/99/john-doe" class="link-item">
            <span class="icon">🔀</span>
            <div class="link-text">
              <h3>Multiple Slugs (/two-slug/99/john-doe)</h3>
              <p>ตัวอย่างการส่งหลายพารามิเตอร์ [idx] และ [name]</p>
            </div>
            <span class="arrow">➔</span>
          </NuxtLink>
        </li>
      </ul>

      <div class="back-link">
        <NuxtLink to="/" class="btn-block">กลับไปหน้าแรก (Home)</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import '~/assets/css/routing.css';
</style>