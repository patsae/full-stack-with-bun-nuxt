<template>
  <div class="state-container">
    <div class="card">
      <div style="text-align: center;">
        <span class="badge">State Management</span>
      </div>
      <h1 class="title">Nuxt 3 State Management</h1>
      <p class="description">
        Learn how to manage state across components using <code>useState</code>.
      </p>

      <div class="counter-box">
        <h3>Shared Counter State</h3>
        <div class="counter-value">{{ counter }}</div>
        <div class="btn-group">
          <button class="btn-danger" @click="decrement">- Decrement</button>
          <button class="btn-primary" @click="increment">+ Increment</button>
        </div>
      </div>

      <NuxtLink to="/state/second" class="btn-block" style="background-color: #be185d;">
        หน้าทดสอบ State ข้าม Component
      </NuxtLink>

      <NuxtLink to="/" class="btn-block">
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/state.css'

// Using Nuxt 3 useState for shared state across components.
// 'counter' is the unique key for this state.
const counter = useState<number>('counter', () => 0)

const increment = () => {
  counter.value++
}

const decrement = () => {
  if (counter.value > 0) {
    counter.value--
  }
}
</script>
