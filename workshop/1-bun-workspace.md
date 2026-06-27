# Bun Workspace (Monorepo)

คือ ฟีเจอร์ที่ช่วยให้เราสามารถจัดการ หลายๆ โปรเจกต์ (เช่น Frontend และ Backend) รวมไว้ในโฟลเดอร์ (Repository) เดียวกันได้ โดยใช้ Bun เป็นตัวบริหารจัดการ  
แทนที่จะแยกโฟลเดอร์ Frontend และ Backend ออกจากกันเป็นคนละโฟลเดอร์หรือคนละที่ เราจับมันมารวมกันอยู่ในที่เดียว

```
my-project/
├── package.json        # ตั้งค่า workspace: ["apps/*"]
├── apps/
│   ├── frontend/       # โปรเจกต์ Nuxt.js
│   └── backend/        # โปรเจกต์ Elysia.js
```

# 🚀 ข้อดีของ bun Workspace

1. Single Install (ลงตัวเดียว จบ): สั่งคำสั่ง bun install แค่ครั้งเดียวที่โฟลเดอร์นอกสุด (Root) ตัว Bun จะวิ่งไปดาวน์โหลดและจัดการ Node Modules ให้ทุกแอปใน Monorepo ทันที แถมแชร์ Library ร่วมกันได้ ทำให้ประหยัดพื้นที่ฮาร์ดดิสก์
2. Easy Code & Type Sharing: ฝั่ง Frontend สามารถวิ่งไปดึง Type หรือแชร์โค้ดจากฝั่ง Backend มาใช้ได้โดยตรงผ่านคำสั่ง import ธรรมดา ไม่ต้องทำขั้นตอน Compile หรือ Public ขึ้น npm registry ให้วุ่นวาย

# Workshop

#### โครงสร้างโปรเจค

```
attractions/
├── package.json        # ตั้งค่า workspace: ["apps/*"]
├── apps/
│   ├── app/            # โปรเจกต์ Frontend ด้วย Nuxt.js
│   └── api/            # โปรเจกต์ Backend ด้วย Elysia.js
│── packages/           # โฟลเดอร์ packages สำหรับ share resource ในโปรเจค
│   ├── types/          # โฟลเดอร์ types สำหรับเก็บ share type
│   ├── i18n/           # โฟลเดอร์ i18n สำหรับเก็บชุดข้อความ
```

## เริ่มต้นสร้าง Workspace

```
ิีืbun init

---

? Select a project template - Press return to submit.
❯   Blank
    React
    Library
```

package.json

```
{
  //ตั้งชื่อ package หลัก
  "name": "attractionsmonorepo",

  "module": "index.ts",
  "type": "module",
  "private": true,

  //ประกาศพื้นที่ Workspaces
  "workspaces": [
    "apps/*",
    "packages/*"
  ],

  "devDependencies": {
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^5"
  }
}

```

tsconfig.json

```
{
  "compilerOptions": {
    // Environment setup & latest features
    "lib": ["ESNext", "dom"],
    "target": "ESNext",
    "module": "Preserve",
    "moduleDetection": "force",
    "jsx": "preserve",
    "allowJs": true,

    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Some stricter flags (disabled by default)
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false,

    "isolatedModules": true,
    "esModuleInterop": true
  }
}

```

### สร้างโปรเจค Frontend

เข้าไปที่โฟลเดอร์ apps/ แล้วสร้างโฟลเดอร์ชื่อ app/ ขึ้นมาจากนั้นติดตั้ง Nuxt.js

```
bun create nuxt@latest .

Which template would you like to use?
❯ minimal – Minimal setup for Nuxt 4

The directory .../workshop/attractions/apps/app already exists. What would you like to do?
❯ Override its contents

Which package manager would you like to use?
❯ bun (current)

Would you like to browse and install modules?
❯ No
```

แก้ไขไฟล์ package.json ของ app

```
{
  //ตั้งชื่อ package ของ app
  "name": "@attraction/app",

  //สามารถกำหนด version ให้ package ของเราได้ หากต้องการ
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "dependencies": {
    "nuxt": "^4.4.8",
    "vue": "^3.5.38",
    "vue-router": "^5.1.0"
  }
}

```

### สร้างโปรเจค Backend

เข้าไปที่โฟลเดอร์ apps/ แล้วสร้างโฟลเดอร์ชื่อ api/ จากนั้นติดตั้ง elysia.js

```
bun create elysia .
```

แก้ไขไฟล์ package.json ของ api

```
{
  //ตั้งชื่อ package ของ api
  "name": "@attraction/api",
  "version": "1.0.50",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "bun run --watch src/index.ts"
  },
  "dependencies": {
    "elysia": "latest"
  },
  "devDependencies": {
    "bun-types": "latest"
  },
  "module": "src/index.js"
}

```

### เตรียม packages สำหรับ share resource ให้กับ Frontend และ Backend

เข้าไปที่โฟลเดอร์ packages/ แล้วทำการสร้างโฟลเดอร์ขึ้นมา 2 โฟลเดอร์ดังนี้

```
...
packages/           # โฟลเดอร์ packages สำหรับ share resource ในโปรเจค
├── types/          # โฟลเดอร์ types สำหรับเก็บ share type
├── i18n/           # โฟลเดอร์ i18n สำหรับเก็บชุดข้อความ
```

เข้าไปในโฟลเดอร์ i18n ทำการสร้างโฟเดอร์และไฟล์ดังนี้

```
packages/
├── i18n/
│   ├── locales         # โฟลเดอร์เก็บชุดข้อความแต่ละภาษา
│   │   ├ th.json       # ชุดข้อความภาษาไทย
│   ├── index.ts        # สำหรับ export ข้อมูลออกไปใช้งาน
│   ├── package.json
```

package.json

```
{
  //ชื่อ package
  "name": "@attraction/i18n",
  "version": "1.0.0",
  "private": true,
  "type": "module",

  //ไฟล์หลักของโมดูลนี้ เมื่อแอปอื่นพยายามเรียกใช้โมดูลนี้ ตัว Runtime (เช่น Bun) จะวิ่งมาอ่านไฟล์ ./index.ts นี้เป็นไฟล์แรกเพื่อดึงฟังก์ชันด้านในไปใช้งาน
  "main": "./index.ts",
  "types": "./index.ts",

  //กำหนดไฟล์ที่จะถูกส่งออกของโมดูลนี้ (หากคนนอกจะเรียกใช้แพ็กเกจนี้ (จุด .) ให้เข้าถึงได้เฉพาะไฟล์ ./index.ts เท่านั้น)
  "exports": {
    ".": "./index.ts"
  }
}

```

index.ts

```
import * as th from "./locales/th.json";

export { th };

```

เข้าไปในโฟลเดอร์ types ทำการสร้างไฟล์ดังนี้

```
types/
├── index.ts
├── package.json
```

package.json

```
{
  //ชื่อ package
  "name": "@attraction/types",
  "version": "1.0.0",
  "type": "module",
  "main": "index.ts",
  "private": true,
  "exports": {
    ".": "./index.ts"
  }
}


```

เปิดไฟล์ attractions/tsconfig.json เพิ่ม path mapping (หรือการทำ alias) หรือก็คือการตั้งชื่อเล่น (Shortcut) ให้กับตำแหน่งของไฟล์ในโปรเจกต์" เพื่อให้เราสามารถเขียนคำสั่ง import โค้ดข้ามโฟลเดอร์ได้สั้น สะอาด และเป็นระบบ

tsconfig.ts

```
{
  "compilerOptions": {
    //ตั้ง path shortcut ให้ packages ของเรา
    "paths": {
      "@attraction/types": ["./packages/types/index.ts"],
      "@attraction/i18n": ["./packages/i18n/index.ts"]
    },
    ...
  }
}
```
