<template>
  <v-app>
    <v-toolbar border class="bg-primary d-flex pa-6">
      <div class="px-md-4">
        <!-- <NuxtLink to="/" class="ma-0">
          <img src="/assets/img/Flame.svg" style="height: 4rem" />
        </NuxtLink> -->
        <ThemeMode />
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = true"></v-app-bar-nav-icon>
      <div class="d-none d-md-flex">
        <NuxtLink v-for="l in links" :key="l.title" :to="l.link" class="px-lg-8">{{ l.title }}</NuxtLink>
      </div>
    </v-toolbar>
    <v-navigation-drawer style="height: auto" v-model="drawer" location="top" temporary class="bg-primary">
      <v-list class="pa-0">
        <v-list-item v-for="l in links" :key="l.title" :to="l.link" class="pa-4 ma-0 d-flex justify-end"
          active-class="text-secondary">{{ l.title }}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
    <TheFooter />
  </v-app>
</template>
  
<script setup lang="ts">
const drawer = ref(false);

const links = [
  {
    title: "Home",
    link: "/",
  },
];
</script>
  
<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

a {
  text-decoration: none;
  color: inherit;
  margin: 0rem 1rem;
}

.router-link-exact-active {
  color: $light;
}
</style>
  