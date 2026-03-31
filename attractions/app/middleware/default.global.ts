export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`[Middleware] Navigating from: ${from.path} to: ${to.path}`)
})
