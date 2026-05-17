// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  ssr: false,
  nitro: {
    preset: "cloudflare_pages",
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
  /*
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  }, */
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', "nitro-cloudflare-dev"],
  tailwindcss: {
    exposeConfig: true,
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
})