// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  content: { documentDriven: true },
  // Auto-import components.
  components: true,

  // If you have enabled Take Over Mode or installed the TypeScript Vue Plugin
  // (Volar), you can disable generating the shim for *.vue files in your
  // nuxt.config file:
  // https://nuxt.com/docs/getting-started/installation#prerequisites
  typescript: {
    shim: false
  },
})
