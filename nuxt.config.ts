// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@hypernym/nuxt-anime",
    "nuxt-aos",
    "nuxt-particles",
  ],
  runtimeConfig: {
    public: {
      emojisApiUrl: process.env.EMOJIS_API_URL,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData:
            '@use "~/assets/scss/_variables.scss" as *; @use "~/assets/scss/_placeholders.scss" as *; @use "~/assets/scss/_mixins.scss" as *; @use "~/assets/scss/_animations.scss" as *; @use "sass:color";',
        },
      },
    },
  },
  css: ["~/assets/scss/style.scss"],
});
