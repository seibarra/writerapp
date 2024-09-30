export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: ['@pinia/nuxt', '@nuxt/ui', 'nuxt-zod-i18n', '@nuxtjs/i18n'],
  css: [ '~/assets/css/main.css' ]
})