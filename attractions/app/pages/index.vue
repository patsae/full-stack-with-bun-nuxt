<template>
  <div class="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
    <div class="max-w-4xl w-full">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Nuxt 4 Learning Hub
        </h1>
        <p class="text-lg text-slate-600 max-w-xl mx-auto">
          Choose a topic below to explore its examples and implementation details.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Vue Directives -->
        <NuxtLink to="/vue-directives" class="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-blue-300 hover:-translate-y-1">
          <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          </div>
          <div class="ml-6 flex-1">
            <h2 class="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Vue Directives</h2>
            <p class="text-slate-500 mt-1 text-sm">v-if, v-for, v-model and more</p>
          </div>
          <div class="text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </div>
        </NuxtLink>

        <!-- Routing -->
        <NuxtLink to="/routing" class="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-emerald-300 hover:-translate-y-1">
          <div class="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
          </div>
          <div class="ml-6 flex-1">
            <h2 class="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">Routing</h2>
            <p class="text-slate-500 mt-1 text-sm">Pages, Navigation & Router</p>
          </div>
          <div class="text-slate-300 group-hover:text-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </div>
        </NuxtLink>

        <!-- Lifecycle -->
        <NuxtLink to="/lifecycle" class="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-violet-300 hover:-translate-y-1">
          <div class="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div class="ml-6 flex-1">
            <h2 class="text-xl font-bold text-slate-800 group-hover:text-violet-600 transition-colors">Lifecycle Hooks</h2>
            <p class="text-slate-500 mt-1 text-sm">onMounted, onUnmounted...</p>
          </div>
          <div class="text-slate-300 group-hover:text-violet-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </div>
        </NuxtLink>

        <!-- Props & Emits -->
        <NuxtLink to="/props-emit" class="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-amber-300 hover:-translate-y-1">
          <div class="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
          </div>
          <div class="ml-6 flex-1">
            <h2 class="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">Props & Emit</h2>
            <p class="text-slate-500 mt-1 text-sm">Component Communication</p>
          </div>
          <div class="text-slate-300 group-hover:text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </div>
        </NuxtLink>

        <!-- State Management -->
        <NuxtLink to="/state" class="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-pink-300 hover:-translate-y-1">
          <div class="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          </div>
          <div class="ml-6 flex-1">
            <h2 class="text-xl font-bold text-slate-800 group-hover:text-pink-600 transition-colors">State Management</h2>
            <p class="text-slate-500 mt-1 text-sm">useState & Reactivity</p>
          </div>
          <div class="text-slate-300 group-hover:text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </div>
        </NuxtLink>

        <!-- Layouts Demo -->
        <NuxtLink to="/layouts-demo" class="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-pink-300 hover:-translate-y-1">
          <div class="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
          </div>
          <div class="ml-6 flex-1">
            <h2 class="text-xl font-bold text-slate-800 group-hover:text-pink-600 transition-colors">Layouts Demo</h2>
            <p class="text-slate-500 mt-1 text-sm">Custom & Default Layouts</p>
          </div>
          <div class="text-slate-300 group-hover:text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </div>
        </NuxtLink>

        <!-- defineModel (defineModal) Demo -->
        <NuxtLink to="/defineModal" class="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-indigo-300 hover:-translate-y-1">
          <div class="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          </div>
          <div class="ml-6 flex-1">
            <h2 class="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">defineModel</h2>
            <p class="text-slate-500 mt-1 text-sm">Two-way Data Binding</p>
          </div>
          <div class="text-slate-300 group-hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Index Page
</script>

<style scoped>

</style>
