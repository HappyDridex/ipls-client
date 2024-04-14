// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
                @import "@/assets/scss/abstracts/_functions.scss";
                @import "@/assets/scss/abstracts/_variables.scss";
                @import "@/assets/scss/abstracts/_mixins.scss";`,
        },
      },
    },
  },
  alias: {
    '@popperjs/core': 'node_modules/@popperjs/core/dist/esm/index.js',
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/svg-sprite', '@element-plus/nuxt'],
  elementPlus: {
    importStyle: false,
  },
  css: ['@/assets/scss/_main.scss', 'tippy.js/dist/tippy.css', 'tippy.js/animations/scale.css'],
});
