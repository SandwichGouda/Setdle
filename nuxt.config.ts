import { ServerPlaceholder } from "#components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  vite : {
    server: {
      allowedHosts: ['dev.vivenot.dev', 'setdle.vivenot.dev'],
      port: process.env.port
    }
  },

  // Client-side rendering only
  ssr: false,

  modules: ['@nuxt/image']
})