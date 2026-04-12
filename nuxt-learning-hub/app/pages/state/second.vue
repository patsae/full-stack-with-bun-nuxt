<template>
  <div class="state-container">
    <div class="card">
      <div style="text-align: center;">
        <span class="badge">Cross Component State</span>
      </div>
      <h1 class="title">Shared State Persistence</h1>
      <p class="description">
        This is a second page demonstrating that the state persists and is shared across different components/pages.
        Try changing the value here and navigating back.
      </p>

      <div class="counter-box">
        <h3>Shared Counter State</h3>
        <div class="counter-value">{{ counter }}</div>
        <div class="btn-group">
          <button class="btn-danger" @click="decrement">- Decrement</button>
          <button class="btn-primary" @click="increment">+ Increment</button>
          <button class="btn-primary" style="background-color: #059669;" @click="reset">Reset</button>
        </div>
      </div>

      <NuxtLink to="/state" class="btn-block">
        Back to State Management
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/state.css'

// Requesting the exact same state key 'counter'.
// It will instantly pick up the value if we changed it in the previous page.
// The default function () => 0 is only run if it hasn't been initialized yet.
const counter = useState<number>('counter', () => 0)

const increment = () => {
  counter.value++
}

const decrement = () => {
  if (counter.value > 0) {
    counter.value--
  }
}

const reset = () => {
  counter.value = 0
}
</script>
