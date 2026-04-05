# Lesson 6: State Management in Nuxt 3

ใน Nuxt 3 หรือ Vue 3 การจัดการ State (สถานะของข้อมูล) เป็นหัวใจสำคัญที่ช่วยให้แอปพลิเคชันตอบสนองต่อผู้ใช้งานแบบ Reactivity หรือการที่หน้าตาเว็บไซต์เปลี่ยนไปอัตโนมัติตามข้อมูลที่เปลี่ยนไป

## การทำงานของ State เป็นอย่างไร ?

**State** คือตัวแปรที่ใช้เก็บข้อมูลของ Component หรือของ Application ซึ่งมีคุณสมบัติที่เรียกว่า **"Reactivity"** หมายความว่า เมื่อค่าในตัวแปรเหล่านี้เปลี่ยน ระบบจะทำการอัปเดตหน้าจอ (DOM) ในจุดที่ใช้ตัวแปรเหล่านั้นใหม่อัตโนมัติ โดยที่เราไม่ต้องเขียนโค้ดสั่งให้ไปอัปเดตหน้าจอมือเอง (เช่น ไม่ต้องทำ `document.getElementById(...).innerText = ...`)

## เรียกใช้งานยังไง ?

ใน Nuxt 3 มีการจัดการ State อยู่ 2 ระดับหลักๆ คือ:

### 1. Component State (สำหรับใช้เฉพาะหน้า)
หากต้องการให้ตัวแปรใดๆ มีความเป็น Reactivity ภายใน Component นั้นๆ เราจะใช้ `ref` หรือ `reactive` 

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0) // สร้าง state ด้วย ref
</script>

<template>
  <div>
    <p>จำนวนนับ: {{ count }}</p>
    <button @click="count++">เพิ่มค่า</button>
  </div>
</template>
```

### 2. Global Shared State (ใช้งานร่วมกันระหว่าง Component/Pages)
Nuxt 3 มี Composable ที่ชื่อว่า `useState` จัดเตรียมมาให้ เพื่อใช้แชร์ State ตลอดทั้งแอปพลิเคชัน ข้อมูลที่อยู่ใน `useState` จะไม่หายไปเมื่อเราเปลี่ยนหน้า (จนกว่าจะ Refresh หน้าเว็บ) 

การเรียกใช้ `useState` มีรูปแบบคือ `useState('key_name', init_function)`:

```vue
<script setup>
// 'counter' คือคีย์ของ state นี้ 
// () => 0 คือค่าเริ่มต้น
const counter = useState('counter', () => 0)

const increment = () => {
  counter.value++
}
</script>

<template>
  <div>
    <p>Global Counter: {{ counter }}</p>
    <button @click="increment">บวกเพิ่ม</button>
  </div>
</template>
```

## ตัวอย่างการใช้งานในโปรเจกต์ (Example)

คุณสามารถดูตัวอย่างการใช้งาน State ที่สร้างเตรียมไว้ได้ที่:

- **หน้าหลัก (ตั้งต้น State)**: `attractions/app/pages/state/index.vue`
- **หน้าสาธิตข้าม Component**: `attractions/app/pages/state/second.vue`
- **ไฟล์ตกแต่ง (CSS)**: `attractions/app/assets/css/state.css`

### การเรียกใช้งาน State ข้าม Component

ข้อดีที่โดดเด่นของ `useState` ใน Nuxt คือความสามารถในการ **แชร์ State โดยไม่ต้องส่ง Props** เพื่อทดสอบสิ่งนี้:
1. ไปที่ `http://localhost:3000/state`
2. ทดลองกดเพิ่ม/ลด ค่า Counter
3. คลิกปุ่ม **"หน้าทดสอบ State ข้าม Component"** ซึ่งจะพาไปยังคอมโพเนนต์ `second.vue`

คุณจะพบว่าค่าของ Counter ที่เราแก้ไขไว้จากหน้าก่อน ยังคง **คงอยู่และส่งต่อข้าม Component** ได้ทันที นอกจากนี้ หากเราเปลี่ยนแปลงค่าบนหน้า `second.vue` เมื่อกดย้อนกลับ ค่าล่าสุดก็จะไปปรากฏบนหน้า `index.vue` เช่นกัน! นี่คือหลักการทำงานของ Global Shared State ครับ
