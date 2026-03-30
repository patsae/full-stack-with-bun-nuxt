<template>
  <div class="lifecycle-container">
    <h1 class="lifecycle-title">Lifecycle Hooks</h1>
    <p>กด <code>F12</code> แล้วเลือกแท็บ <strong>Console</strong> เพื่อดูลำดับการทำงานของ Lifecycles</p>
    
    <div class="mt-4">
      <!-- ปุ่มนี้มีไว้สำหรับทดสอบ onBeforeUpdate และ onUpdated -->
      <button @click="count++" class="btn-test">
        คลิกเพิ่มตัวเลขเพื่อทดสอบ Update (Count: {{ count }})
      </button>
    </div>

    <div class="mt-8">
      <NuxtLink to="/" class="back-link">
        ⬅ กลับไปหน้าแรก (ทดสอบ Unmounted)
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

const count = ref(0)

// 1. Initialization / Setup
// เป็นส่วนแรกสุดที่ถูกเรียก โค้ดที่วางลอยๆ นอก Hook จะทำงานแทบจะทันที
console.log('1. [Setup/Root] Component ถูกสร้างขึ้นแล้ว! (รันทั้ง Server และ Browser)')

// 2. onBeforeMount
// ก่อนที่ Vue จะนำ Component ไปต่อ (Mount) เข้ากับ DOM (หน้าจอเว็บ)
onBeforeMount(() => {
  console.log('2. [onBeforeMount] กำลังจะเอา HTML ไปเรนเดอร์ลงบนเว็บ')
})

// 3. onMounted (ใช้บ่อยที่สุด)
// Component เอาไปต่อกับหน้าเว็บเสร็จสมบูรณ์ 
// ตรงนี้เราเข้าถึง <div> หรือ DOM ต่างๆ ได้ เป็นจุดที่เหมาะกับการดึงข้อมูล API ภายนอกด้วย
onMounted(() => {
  console.log('3. [onMounted] เรนเดอร์ลงหน้าเว็บเสร็จแล้ว พร้อมโชว์! (เหมาะกับการ Call API ฝั่ง Client)')
})

// 4. onBeforeUpdate
// ถูกเรียกเมื่อ State (เช่น count) มีการเปลี่ยนแปลง "ก่อน" ที่วงจรจะอัปเดตตัวเลขใหม่ขึ้นหน้าจอจริง
onBeforeUpdate(() => {
  console.log('4. [onBeforeUpdate] ตรวจพบข้อมูลเปลี่ยน กำลังเตรียมอัปเดตหน้าจอ...')
})

// 5. onUpdated
// ถูกเรียกเมื่อหน้าจออัปเดตค่าและโชว์ตัวเลขใหม่ให้ผู้ใช้งานเห็นเรียบร้อยแล้ว
onUpdated(() => {
  console.log('5. [onUpdated] หน้าจอโชว์ข้อมูลใหม่ล่าสุดเรียบร้อยแล้ว')
})

// 6. onBeforeUnmount
// ทำงาน"ก่อน"ที่ Component นี้จะหายไป (เช่น เรากำลังคลิกลิงก์เปลี่ยนหน้า)
// เหมาะกับการเคลียร์ค่า Timer หรือ Event Listeners ที่ตั้งทิ้งไว้
onBeforeUnmount(() => {
  console.log('6. [onBeforeUnmount] Component กำลังจะถูกทำลายทิ้ง...')
})

// 7. onUnmounted
// ทำงานเมื่อ Component ถูกทำลายและล้างข้อมูลออกจากระบบจนเสร็จแล้ว
onUnmounted(() => {
  console.log('7. [onUnmounted] ทำลาย Component เสร็จสิ้น (ลาก่อน).')
})
</script>

<style scoped>
@import '~/assets/lifecycle.css';
</style>
