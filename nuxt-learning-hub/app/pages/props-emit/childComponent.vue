<template>
  <div class="pe-child-card">
    <div class="pe-badge-child">
      Child Component
    </div>

    <!-- ส่วนของการแสดงผล Props ที่รับมาจากแม่ -->
    <div class="pe-child-prop-box">
      <p class="pe-child-prop-title">ข้อความที่รับมาจากแม่ (Props):</p>
      <div class="pe-child-prop-content">
        <svg class="pe-child-prop-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        <span>"{{ message }}"</span>
      </div>
    </div>

    <!-- ส่วนของการสร้าง Emit สะท้อนกลับไปหาแม่ -->
    <div class="pe-child-action">
      <button @click="notifyParent" class="pe-btn">
        <svg class="pe-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
        ส่งตอบกลับ
      </button>
      <span class="pe-action-desc">
        ทดลองกดปุ่มนี้เพื่อ <strong>Emit</strong> สัญญาณกลับไปยัง <strong>Parent</strong> โดยแนบข้อความ "รับทราบแล้วแม่!" นำไปแสดงผล
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// 1. ประกาศรับ Props
const props = defineProps<{
    message: string
}>();

// 2. ประกาศ Events ที่จะ Emit กลับไปหาแม่
const emit = defineEmits<{
    (e: 'update', value: string): void
}>();

// 3. ฟังก์ชันจำลองการส่งข้อมูล
const notifyParent = () => {
    // ยิง Signal ชื่อว่า 'update' พร้อมข้อความ String
    emit('update', 'รับทราบแล้วแม่!');
};

// 4. ฟังก์ชันสำหรับให้ Parent เรียกใช้ผ่าน Expose
const showAlert = () => {
    alert('🚨 แจ้งเตือนจาก Child Component: ทราบแล้วเปลี่ยน ข้าพร้อมใช้งาน!');
};

// 5. เปิดทางให้ Parent เข้าถึงอ็อบเจ็กต์/ฟังก์ชันด้วย defineExpose
defineExpose({
    showAlert
});
</script>

<style scoped>
@import '~/assets/css/props_emit.css';
</style>