<template>
  <div class="dynamic-container">
    <div class="card">
      <div class="badge">
        Multiple Dynamic Routes Pattern
      </div>

      <h1 class="title">
        IDX (ID): <span class="highlight">{{ idx }}</span> <br />
        Name: <span class="highlight">{{ name }}</span>
      </h1>
      
      <p class="description">
        ส่วนนี้เป็นตัวอย่างของการรับพารามิเตอร์ <strong>หลายๆ ค่าพร้อมกัน</strong> จาก URL <br/>
        โดยใช้ <code>[idx]</code> เป็นชื่อโฟลเดอร์ และ <code>[name].vue</code> เป็นชื่อไฟล์
      </p>

      <div class="code-block-container">
        <h3 class="code-title">ข้อมูลรวมจาก route.params</h3>
        <pre class="code-block"><code>{{ route.params }}</code></pre>
      </div>

      <NuxtLink to="/routing" class="btn-primary">
        กลับไปหน้าเมนู Routing
      </NuxtLink>

    </div>
  </div>
</template>

<script setup lang="ts">
  // ดึงค่า params ต่างๆ ที่ถูกส่งมาจาก URL
  const route = useRoute()
  
  // ดึงค่าตามชื่อวงเล็บก้ามปูที่เราตั้งไว้ [idx] กับ [name]
  const idx = route.params.idx
  const name = route.params.name
</script>

<style scoped>
@import '~/assets/css/routing.css';

/* Override for multiples routes page styling */
.badge {
  background-color: #e0e7ff;
  color: #4338ca;
}
.highlight {
  color: #4f46e5;
}
.title {
  text-align: left;
}
.description {
  text-align: left;
}
</style>
