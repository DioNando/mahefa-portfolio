<template>
  <div>
    <v-btn variant="plain" @click="toggleTheme" icon>
      <v-icon :icon="iconTheme"></v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();
    const iconTheme = ref("mdi-white-balance-sunny");

    return {
      iconTheme,
      theme,
      toggleTheme: () => {
        if (theme.global.current.value.dark) {
          theme.global.name.value = "light";
          iconTheme.value = "mdi-white-balance-sunny";
        } else {
          theme.global.name.value = "dark";
          iconTheme.value = "mdi-moon-waxing-crescent";
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
