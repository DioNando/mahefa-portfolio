<template>
  <v-app>
    <TheHeader />
    <v-main>
      <slot />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
</style>  