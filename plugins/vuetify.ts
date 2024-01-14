import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import { fr } from "vuetify/locale";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#ffffff",
    surface: "#cccccc",
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

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#000000",
    surface: "#262626",
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

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
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
        myCustomDarkTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
