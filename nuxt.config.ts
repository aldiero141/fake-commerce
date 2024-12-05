// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    apiBaseUrl: process.env.NUXT_API_BASE_URL || '',
    public:{
      
    }
  },

  css: ['~/assets/styles/css/global.scss'],
  modules: ['@nuxt/icon'],
})