<template>
  <IllustrationsWaves />
  <v-footer class="text-center d-flex flex-column pa-0" :class="!theme.isDark ? 'bg-primary' : ''">
    <div class="links mb-6">
      <NuxtLink v-for="l in store_elements.navigation" :key="l.title" :to="l.link" class="router-link">
        {{ l.title }}
      </NuxtLink>
    </div>
    <h2>
      Lorem ipsum dolor sit amet.
    </h2>
    <div class="text-center d-flex align-center ga-6 mt-6">
      <v-icon v-for="(i, index) of links" :key="index" :icon="i.name" size="large"
        :color="theme.isDark ? 'secondary' : 'light'"></v-icon>
    </div>
    <div class="text-center pa-4">
      <p class="text-disabled">
        Made with <v-icon icon="mdi-heart"></v-icon>
      </p>
      <p class="text-disabled">
        {{ new Date().getFullYear() }} © Dio_Nando
      </p>
    </div>
    <ButtonsScrollToTop />

  </v-footer>
</template>

<script setup lang="ts">
import dataLinks from '~/data/links.json'
const links = ref(dataLinks)

const theme = useThemeStore()
const store_elements = useElementStore()

</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 1rem;
  text-align: center;
  justify-content: center;
}

.router-link {
  font-weight: bold;
  transition: 200ms;
  // color: $tertiary;
  font-size: clamp(0.25rem, 3vw, 1.5rem);

  &:hover {
    color: $quaternary;
    transform: scale(1.1);
  }
}

.router-link-exact-active {
  color: $secondary;
}

p {
  font-size: small;
}
</style>
