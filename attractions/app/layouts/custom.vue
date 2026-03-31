<template>
  <div class="min-h-screen flex flex-col font-sans bg-slate-900 text-slate-200">
    <header class="bg-indigo-900 border-b border-indigo-700 shadow-md">
      <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 class="text-xl font-bold text-indigo-100 flex items-center gap-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Custom Layout Header
        </h1>
        <NuxtLink to="/" class="text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg font-medium transition-colors text-sm">
          Return Home
        </NuxtLink>
      </div>
    </header>
    <main class="flex-1 p-6 max-w-4xl w-full mx-auto">
      <slot />
    </main>
    <footer class="bg-slate-950 py-6 text-center text-slate-500 text-sm">
      <p>Custom Layout Template</p>
    </footer>
  </div>
</template>
