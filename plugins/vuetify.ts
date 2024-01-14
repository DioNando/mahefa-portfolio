// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { fr } from "vuetify/locale";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#ffffff",
    surface: "#ffffff",
    primary: "#011126",
    "primary-darken-1": "#011126",
    secondary: "#28a6a8",
    "secondary-darken-1": "#28a6a8",
    error: "#e74c3c",
    info: "#31dec4",
    success: "#86D47E",
    warning: "#ff8606",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    locale: {
      locale: "fr",
      fallback: "en",
      messages: { fr },
    },
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify)
})
