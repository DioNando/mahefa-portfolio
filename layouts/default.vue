<template>
  <v-app>
    <TheHeader />
    <v-main>
      <slot />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<style lang="scss">
@import "~/assets/scss/style.scss";
</style>  