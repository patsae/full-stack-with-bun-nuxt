<template>
  <div class="card">
    <h1 class="text-primary text-xl font-bold mb-4">v-bind (Attribute Binding)</h1>
    <div class="space-y-2">
      <img v-bind:src="imagePath" />
      <div class="code-block-container">
        <h3 class="code-title">การกำหนด Attribute src ของ img</h3>
        <pre class="code-block"><code>const imagePath = "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4";</code></pre>
      </div>
    </div>
  </div>

  <div class="card my-4!">
    <h1 class="text-primary text-xl font-bold mb-4">v-model (Two-way Data Binding)</h1>
    <div class="space-y-2">
      <input v-model="searchText" placeholder="พิมพ์..." class="border border-gray-300 rounded-lg w-full px-2 py-4" />
      <p>คุณกำลังพิมพ์ข้อความ: {{ searchText }}</p>
    </div>
  </div>

  <div class="card my-4!">
    <h1 class="text-primary text-xl font-bold mb-4">v-if & v-show (Conditional Rendering)</h1>
    <div class="space-y-2">
      <p v-if="status === 'success'" class="p-2 border border-green-200 rounded-lg bg-green-50 text-green-800">บันทึกสำเร็จ</p>
      <p v-else-if="status === 'error'" class="p-2 border border-red-200 rounded-lg bg-red-50 text-red-800">เกิดข้อผิดพลาด</p>
      <p v-else class="p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-800">กำลังรอ...</p>
      <div class="flex items-center gap-4">
        <input v-model="status" type="radio" id="status-success" name="status" value="success" />
        <label for="status-success">Success</label>
        <input v-model="status" type="radio" id="status-error" name="status" value="error" />
        <label for="status-error">Error</label>
        <input v-model="status" type="radio" id="status-wait" name="status" value="" />
        <label for="status-wait">Wait</label>
      </div>
    </div>
  </div>

  <div class="card my-4!">
    <h1 class="text-primary text-xl font-bold mb-4">v-for (List Rendering)</h1>
    <div class="space-y-2">
      <div class="flex items-stretch gap-4">
        <div class="w-1/2 bg-gray-50 rounded-lg border border-gray-200">
          <ul class="list-disc p-4">
            <li v-for="item in items" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="w-1/2">
          <div class="code-block-container">
            <h3 class="code-title">การกำหนด Attribute src ของ img</h3>
            <pre class="code-block"><code>const items = ref([
  { id: 1, name: "siripong" },
  { id: 2, name: "kwanchanok" },
  { id: 1, name: "mark" },
]);</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card my-4!">
    <h1 class="text-primary text-xl font-bold mb-4">Event & v-on (Event Handling)</h1>
    <div class="space-y-2">
      <p>นับจำนวน Count</p>
      <div class="border border-gray-200 bg-gray-50 p-4 rounded-lg">{{ count }}</div>
      <button class="border border-green-200 bg-green-50 p-2 text-sm rounded-lg text-green-800" @click="count++">เพิ่มตัวเลข</button>
      <button class="border border-yellow-200 bg-yellow-50 p-2 text-sm rounded-lg text-yellow-800 ms-2" @click="showAlert">Alert</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

code {
  background-color: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9em;
  text-wrap: initial;
  color: #374151;
}

.code-block-container {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
}

.code-title {
  margin-top: 0;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #4b5563;
  margin-bottom: 1rem;
}

.code-block {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1.25rem;
  border-radius: 6px;
  margin: 0;
}

.code-block code {
  background-color: transparent;
  color: inherit;
  padding: 0;
}
</style>

<script setup lang="ts">
const imagePath = "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4";
const searchText = ref("");
const status = ref("");
const items = ref([
  { id: 1, name: "siripong" },
  { id: 2, name: "kwanchanok" },
  { id: 1, name: "mark" },
]);
const count = ref(0);

function showAlert() {
  alert("Alert text");
}
</script>
