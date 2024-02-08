<template>
  <footer>
    <IllustrationsWaves class="d-none d-md-block" />
    <v-footer class="d-flex flex-column" :class="!theme.isDark ? 'bg-primary' : ''">
      <div class="link">
        <NuxtLink v-for="l in store_elements.navigation" :key="l.title" :to="l.link" class="router-link">
          {{ l.title }}
        </NuxtLink>
      </div>
      <div class="text-body-1">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="icon text-center d-flex align-center ga-6 mt-6 d-none">
        <v-icon v-for="(i, index) of links" :key="index" :icon="i.name" size="large"
          :color="theme.isDark ? 'secondary' : 'light'"></v-icon>
      </div>
      <div class="text-center text-disabled pa-4">
        <p>
          Made with <v-icon icon="mdi-heart"></v-icon>
        </p>
        <p>
          {{ new Date().getFullYear() }} © Dio_Nando
        </p>
      </div>
      <ButtonsScrollToTop class="d-none d-sm-block" />

    </v-footer>
  </footer>
</template>

<script setup lang="ts">
import dataLinks from '~/data/links.json'
const links = ref(dataLinks)

const theme = useThemeStore()
const store_elements = useElementStore()

</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.link {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 1rem;
  text-align: center;

  @media only screen and (min-width: 600px) {
    justify-content: center;
    gap: 4rem;
  }
}

.router-link {
  font-weight: bold;
  transition: 200ms;
  font-size: clamp(0.25rem, 3vw, 1.5rem);

  &-exact-active {
    color: $secondary;
  }

  &:hover {
    color: $quaternary;
    transform: scale(1.1);
  }
}

.icon {
  font-size: 1.5rem;
}

p {
  font-size: small;
}
</style>
