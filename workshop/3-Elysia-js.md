# Setup Elysia.js

เข้าไปที่โปรเจค attracions/apps/api

.env

```
APP_ENV=development
APP_BASEURL=/api

PORT=3000

DB_HOST=localhost
DB_DATABASE=attractions_db
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=

ALLOW_ORIGIN=["http://localhost:3100"]

SECRET=
```

### ติดตั้ง Package

```
//module ที่แนะนำ
bun install @elysiajs/cors elysia-rate-limit jose memoirist

//ติดตั้ง package ติดต่อฐานข้อมูล
bun install mysql2 drizzle-kit drizzle-orm

//ติดตั้ง typescript สำหรับตรวจสอบความถูกต้องของประเภทข้อมูล (Type-checking) และแปลโค้ด TypeScript ให้เป็น JavaScript
bun install -D typescript tsx @types/node @types/bun
```

### โครงสร้าง API

```
apps/
├── api/
│   ├──src/
│   │   ├── controller/             # ส่วนจัดการเรื่อง Route, validate, sanitize, tranform data
│   │   ├── services/               # ส่วน Business Logic ทั้งหมดของระบบ
│   │   ├── repository/             # ส่วนติดต่อกับ Database โดยตรงผ่าน Drizzle ORM
│   │   ├── types/                  # เก็บ type ที่ใช้เฉพาะใน api
│   │   ├── index.ts                # Entry Point หลักของแอปพลิเคชัน Elysia.js ทำหน้าที่สั่งเปิด Server, ประกอบร่าง Controller ต่างๆ เข้าด้วยกัน
│   │   ├── config.ts               # เก็บค่าคอนฟิกูเรชันทั้งหมดของโปรเจกต์ เช่น การอ่านค่า Environment Variables
│   │   ├── repos.registry.ts       # ทำ Dependency Injection (DI) หรือเป็นตัวลงทะเบียนรวบรวม Instance ของ Repository ทั้งหมดในระบบ

```

### ปรับปรุงไฟล์ package.json

แก้ไขไฟล์ package.json ของ apps/app

```
{
    ...,
    "scripts": {
        "dev": "bun --env-file=.env run --watch ../../apps/api/src/index.ts"
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
        "dev:app": "bun --filter @attraction/app dev",
        "dev:api": "bun --filter @attraction/api dev"
    },
    ...
}
```

# Workshop

สร้าง api ด้วย Elysia.js

- สร้าง controller จัดการเรื่อง Route, validate, sanitize, tranform data
- สร้าง services จัดการเรื่อง Business Logic ทั้งหมดของระบบ
- สร้าง repository จัดการเรื่องติดต่อกับ Database โดยตรงผ่าน Drizzle ORM
