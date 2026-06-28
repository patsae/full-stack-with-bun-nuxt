# Setup Nuxt.js

เข้าไปที่โปรเจค attracions/apps/app

.env

```
APP_ENV=development
APP_NAME=theAttractions
APP_BASEURL=/theAttractions

PORT=3100
```

### ติดตั้ง Package

```
//ติดตั้ง typescript สำหรับตรวจสอบความถูกต้องของประเภทข้อมูล (Type-checking) และแปลโค้ด TypeScript ให้เป็น JavaScript
bun install -D vue-tsc typescript tsx

//ติดตั้ง tailwindcss
bun install tailwindcss @tailwindcss/vite

//ติดตี่ง nuxt ui
bun install @nuxt/ui

//อื่นๆ ที่แนะนำ
ิีืbun install @vueuse/core @nuxt/icon
```

### Tailwindcss

สร้างไฟล์ main.css ไว้ที่ app/assets/css/main.css

### nuxt.config.ts

```
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  //ปิด devtools ของ nuxt.js
  devtools: { enabled: false },

  //ระบุไฟล์ css หลัก
  css: ["~/assets/css/main.css"],

  //ปิด Server Side Render เพื่อเป็นโหมด Single Page Application
  ssr: false,

  app: {
    baseURL: process.env.APP_BASEURL,
    head: {
      title: process.env.APP_NAME,
    },
  },

  //เรียกใช้ env ผ่าน runtime config
  runtimeConfig: {
    public: {
      appEnv: process.env.APP_ENV,
      appName: process.env.APP_NAME,
    },
  },

  //เรียกใช้ modules ต่างๆ
  modules: ["@nuxt/icon", "@nuxt/ui"],

  //ตั้งค่า vite.js ให้เรียกใช้ tailwindcss
  vite: {
    plugins: [tailwindcss()],
  },

  icon: {
    mode: "css",
    cssLayer: "base",
  },

  //ปิด color mode
  ui: {
    colorMode: false,
    fonts: false,
  },
});

```

### ปรับปรุงไฟล์ package.json

แก้ไขไฟล์ package.json ของ apps/app

```
{
    ...,
    "scripts": {
        "dev": "bun --env-file=.env nuxt dev",
    },
    ...
}
```

### การสั่งทำงานผ่าน package.json หลัก

แก้ไขไฟล์ package.json ของ root project

```
{
    ...,
    "scripts": {
        "dev:app": "bun --filter @attraction/app dev"
    },
    ...
}
```

# Workshop

สร้างเว็บไซต์ theAttraction

- index.vue หน้าแสดงรายการบทความทั้งหมด
- login.vue หน้าฟอร์ม login
- 401.vue หน้าแสดงข้อผิดพลาด กรณีที่ยังไม่มีการเข้าสู่ระบบ
- [slag].vue หน้าแสดงข้อผิดพลาด กรณีที่ไม่มีหน้าให้แสดง
- places/[:id].vue หน้าแสดงบทความ
- form.vue หน้าแสดงฟอร์มเขียนบทความ
