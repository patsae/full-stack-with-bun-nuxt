<template>
  <div class="custom-layout-container">
    <header class="custom-layout-header">
      <!-- Gradient accent line unique to custom layout -->
      <div class="custom-layout-gradient-line"></div>
      <div class="custom-layout-header-inner">
        <h1 class="custom-layout-title">
          <svg class="custom-layout-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Custom Layout
        </h1>
        <NuxtLink to="/" class="custom-layout-link">
          Return Home
        </NuxtLink>
      </div>
    </header>
    <main class="custom-layout-main">
      <slot />
    </main>
    <footer class="custom-layout-footer">
      <p>Custom Layout Template</p>
    </footer>
  </div>
</template>

<style scoped>
@import '~/assets/css/layout_demo.css';
</style>
