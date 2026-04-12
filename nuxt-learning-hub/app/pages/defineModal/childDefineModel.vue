<template>
  <div class="dm-child-card">
    <div class="dm-badge-child">Child Component</div>

    <div class="dm-form-group">
      <label class="dm-label">
        ลูกขออนุญาตแก้ไขข้อมูลนี้โดยตรงนะ:
      </label>
      
      <!-- เอาตัวรับค่า textModel ไปผูกเข้ากับ <input> ทันที -->
      <!-- จากนั้นปล่อยให้ v-model ของ <input> จัดการรับค่าการพิมพ์ทั้งหมดเลย -->
      <input 
        v-model="textModel" 
        type="text" 
        class="dm-input" 
        placeholder="ลองพิมพ์อะไรบางอย่างที่นี่สิ (ในฝั่งลูก) ..." 
      />
      
      <p class="dm-hint">
        💡 เมื่อเริ่มพิมพ์ที่นี่ ข้อมูลตัวอักษรจะถูกแก้ ส่งสัญญาณ Emit และไปปรากฏที่ Parent ตัวด้านบนสุดอัตโนมัติ 
        โดยที่ผู้พัฒนา<strong>ไม่ต้องเขียนฟังก์ชัน Emit</strong> เพื่อดักจับ Event ใดๆ สักตัว!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// ใช้มาโคร defineModel เพื่อรวม Props + Emit เป็นท่อเดียวกัน (Two-way binding)
// จะได้ชื่อตัวแปรเดียว คือ textModel กลับมาใช้งาน
const textModel = defineModel<string>('text');
</script>

<style scoped>
@import '~/assets/css/define_modal.css';
</style>
