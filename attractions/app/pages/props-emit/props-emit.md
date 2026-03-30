# 📘 Props & Emit (Communication)

การส่งข้อมูลระหว่าง Components
**Props**: ส่งข้อมูลจาก **แม่** -> **ลูก**
**Emit**: ส่งสัญญาณจาก **ลูก** -> **แม่**

## Props
`parentComponent.vue`
#### ตัวอย่างโค้ด templete:
```vue
    <ChildComponent message="สวัสดีลูกรัก" />
```
#### ตัวอย่างโค้ด script:
```typescript
   import ChildComponent from './childComponent.vue';
```
`childComponent.vue`
#### ตัวอย่างโค้ด templete:
```vue
   <p>{{ props.message }}</p>
```
#### ตัวอย่างโค้ด script:
```typescript
   const props = defineProps<{
        message: string
    }>()
```

---

## Emit
`childComponent.vue`
#### ตัวอย่างโค้ด templete:
```vue
    <button @click="notifyParent">ส่งค่าให้แม่</button>
```
#### ตัวอย่างโค้ด script:
```typescript
// 1. ประกาศว่ามีเหตุการณ์ 'update'
const emit = defineEmits(['update'])

const notifyParent = () => {
  // 2. ยิงสัญญาณพร้อมส่งเลข 100 ไปด้วย
  emit('update', 100)
}
```
`parentComponent.vue`
#### ตัวอย่างโค้ด templete:
```vue
   <ChildComponent @update="handleUpdate" />
```
#### ตัวอย่างโค้ด script:
```typescript
    import ChildComponent from './childComponent.vue';
    const handleUpdate = (value) => {
        console.log('แม่ได้รับค่าแล้ว:', value)
    }
```