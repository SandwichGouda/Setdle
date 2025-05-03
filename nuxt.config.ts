import { ServerPlaceholder } from "#components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite : {
    server: {
      allowedHosts: ['dev.vivenot.dev'],
      port: process.env.port
    }
  },
  ssr: false // Client-side rendering only
})
