<template>
  <div class="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg text-slate-300">
    <div class="flex items-center gap-3 mb-6">
      <div class="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
      </div>
      <h2 class="text-3xl font-bold text-white">Layouts Demo Page</h2>
    </div>
    
    <p class="mb-6 text-lg text-slate-400 leading-relaxed">
      หน้านี้เป็นตัวอย่างการเรียกใช้งาน <strong class="text-indigo-300 text-xl">Custom Layout</strong> อย่างเจาะจง 
      สังเกตได้จากสีของพื้นหลังและ Header ด้านบนที่แตกต่างออกไปจากหน้าปกติ (Default Layout)
    </p>

    <div class="bg-slate-900/80 p-6 rounded-xl border border-slate-700 shadow-inner">
      <h3 class="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        โค้ดการกำหนดค่า Layout
      </h3>
      <p class="text-sm mb-3">ใช้ออบเจ็กต์ <code>definePageMeta</code> สำหรับการกำหนดให้หน้านี้ใช้ layout ชื่อ "custom"</p>
      <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto"><code class="text-emerald-300 font-mono text-sm">definePageMeta({
  layout: 'custom'
})</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>
