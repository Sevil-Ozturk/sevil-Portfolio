import process from 'node:process'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/ui'],

  runtimeConfig: {
    public: {
      randomApiKey: process.env.RANDOM_API_KEY,
    },
  },
})
