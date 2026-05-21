// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  ssr: false,
  nitro: {
    preset: "cloudflare-pages", // cloudflare_pages
  },
  image: {
    // quality: 80,
    format: ["webp", "png"],
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    },
    provider: "ipx",
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/brandmarks/64x64.png" },
        { rel: "apple-touch-icon", href: "/brandmarks/512x512.png" }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
  },
  experimental: {
    viteEnvironmentApi: true,
  },
})