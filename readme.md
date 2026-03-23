# 🚀Full-stack with Bun & Nuxt

### 🎯สิ่งที่จะได้เรียนรู้ในคอร์สนี้

1. เรียนรู้เกี่ยวกับการพัฒนาเว็บแอพพลิเคชั่นด้วย Nuxt.js
2. เรียนรู้การใช้ UI Framework ด้วย Nuxt UI ในการทำงานร่วมกัน Nuxt.js
3. เรียนรู้การใช้งาน TailwindCSS
4. เรียนรู้การเขียน API ด้วย Elysia.js
5. เรียนรู้การใช้งาน Object Relational Mapping (ORM) เพื่อติดต่อกับฐานข้อมูล
6. พื้นฐาน TypeScript ที่จำเป็นสำหรับ Stack นี้

# 🛠️ Tech Stack Overview

## Frontend

### 💻Nuxt.js

คือ Open-source Framework ที่สร้างครอบอยุ่บน vue.js เป็น Javascript Framework ที่โดดเด่นเรียนความง่าย เรียนรู้ได้ไว มี Learning Curve ต่ำ มีโครงสร้างที่ไม่ซับซ้อน เหมาะสำหรับผู้เริ่มต้น เพียงแค่มีพื้นฐาน HTML, CSS และ Javascript ก็สสมารถสร้าง Web Application ได้

#### จุดเด่น Nuxt.js

1. Auto-imports: ไม่ต้องเสียเวลาเขียน import บ่อยๆ เพราะ Nuxt จะดึง Components, Composables และ Vue APIs มาให้ใช้งานได้ทันทีในโปรเจกต์
2. Rendering Modes: รองรับการทำงานหลากหลาย ทั้ง SSR (Server-Side Rendering) ที่ดีต่อ SEO, SSG (Static Site Generation) หรือ SPA (Single Page Application) แบบดั้งเดิม
3. File-based Routing: จัดการระบบ Route (หน้าเว็บ) ตามโครงสร้างโฟลเดอร์ใน pages/ ช่วยให้จัดการโปรเจกต์ขนาดใหญ่ได้เป็นระเบียบมาก
4. Server Engine (Nitro): มาพร้อม Nitro engine ที่เบาและเร็วมาก รองรับการรันบน Environment หลากหลาย และทำ Server API ในตัวได้เลย
5. Developer Experience (DX): มี Ecosystem ที่แข็งแกร่งอย่าง Nuxt UI และ DevTools ที่ยอดเยี่ยม ช่วยให้เขียนโค้ดได้สนุกและเห็นข้อผิดพลาดได้ไวขึ้น

### 💻Nuxt UI

Library ชุด Component สำเร็จรูปที่สร้างมาเพื่อ Nuxt โดยเฉพาะ (Built on top of Tailwind CSS & Headless UI) มีคอมโพเนนต์ให้เลือกใช้งานมากมาาย สามารถที่จะปรับแต่งสไตล์ได้ง่าย สวยงามทันสมัย รองรับ Type Safety เต็มรูปแบบ

### 💻Tailwind CSS

Framework สำหรับเขียน CSS ช่วยให้เขียนสไตล์ผ่าน HTML ได้โดยตรง ลดการเขียน CSS แยกไฟล์ ปรับแต่งหน้าตาได้ละเอียดและอิสระสูง ทำ Responsive ได้ง่าย

## Backend

### 💻Bun.js

JavaScript Runtime และ Toolkit ยุคใหม่ที่มาแรงที่สุด เร็วกว่า Node.js หลายเท่าตัว มาพร้อม Package Manager และ Test Runner ในตัว ไม่ต้องลงเครื่องมือแยกให้วุ่นวาย

### 💻Elysia.js

Framework สำหรับสร้าง Server/API ที่ออกแบบมาเพื่อ Bun โดยเฉพาะ เน้นความเร็ว (Performance) สูงสุด และมีจุดเด่นคือ Type-safety ที่ส่งต่อ Type จาก Backend ไปยัง Frontend (Nuxt) ได้โดยตรงผ่าน Eden Treat

### 💻Drizzle ORM

TypeScript ORM ที่เบาและเร็ว (Lightweight) เขียน SQL ได้เหมือนภาษา SQL จริงๆ (Headless ORM) ทำให้เราควบคุมประสิทธิภาพได้เต็มที่ พร้อมระบบ Drizzle Kit ที่ช่วยจัดการ Migration ของ Database ได้แบบง่ายๆ

## Common

### 💻TypeScript

เป็นหัวใจหลักที่เชื่อมโยงทุกอย่างเข้าด้วยกัน ที่ตรวจจับข้อผิดพลาด (Error) ได้ตั้งแต่ช่วงพัฒนา (Compile time) ช่วยให้เขียนโค้ดได้รัดกุม ปลอดภัย และจัดการโปรเจกต์ขนาดใหญ่ได้ง่ายขึ้นผ่านระบบ Interface และ Class

# สารบัญ

| เนื้อหา   | Link                                                                                   |
| --------- | -------------------------------------------------------------------------------------- |
| Introduce | [Link](https://github.com/patsae/full-stack-with-bun-nuxt)                             |
| Setup     | [Link](https://github.com/patsae/full-stack-with-bun-nuxt/tree/main/lesson/lesson%201) |
