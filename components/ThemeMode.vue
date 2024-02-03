<template>
  <div>
    <v-switch color="primary" v-model="isDark" hide-details inset false-icon="mdi-white-balance-sunny"
      true-icon="mdi-moon-waxing-crescent" @change="toggleTheme"></v-switch>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";

const customTheme = useTheme();

const theme = useThemeStore()

const isDark = ref(theme.isDark);

const toggleTheme = () => {
  theme.setDark(isDark.value)
  if (isDark.value) {
    customTheme.global.name.value = "myCustomDarkTheme";
  } else {
    customTheme.global.name.value = "myCustomLightTheme";
  }
};
</script>

<style lang="scss" scoped></style>
