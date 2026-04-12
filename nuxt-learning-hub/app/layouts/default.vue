<template>
  <div class="min-h-screen flex flex-col font-sans bg-slate-50">
    <header class="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
      <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 class="text-xl font-bold text-slate-800 flex items-center gap-2">
          Nuxt Learning Hub
        </h1>
        <nav class="flex gap-4 items-center">
          <NuxtLink to="/" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="flex-1 p-6 max-w-4xl w-full mx-auto">
      <slot />
    </main>
    <footer class="bg-white border-t border-slate-200 py-6 text-center text-slate-500 text-sm">
      <p>Default Layout © Nuxt Sandbox</p>
    </footer>
  </div>
</template>
