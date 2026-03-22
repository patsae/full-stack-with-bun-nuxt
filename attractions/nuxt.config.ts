import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    preset: "bun",
  },
  app: {
    baseURL: process.env.BASE_URL,
    head: {
      title: "theAttractions",
      link: [{ rel: "icon", type: "image/x-icon", href: "images/favicon.png" }],
      meta: [
        {
          name: "description",
          content: "Full Stack with Bun & Nuxt.js",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/icon", "@nuxtjs/i18n", "@nuxt/fonts", "@nuxt/ui"],
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  fonts: {
    families: [{ name: "Bai Jamjuree" }],
  },
  i18n: {
    defaultLocale: "th",
    locales: [{ code: "th", name: "Thailand", file: "th.json" }],
  },
});
