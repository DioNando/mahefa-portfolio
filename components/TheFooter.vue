<template>
  <div class="vague">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
      preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax" v-if="theme.isDark">
        <use xlink:href="#gentle-wave" x="48" y="0" :fill="'rgba(' + colorWaveDark + ',0.25)'" />
        <use xlink:href="#gentle-wave" x="48" y="0" :fill="'rgba(' + colorWaveDark + ',0.5)'" />
        <use xlink:href="#gentle-wave" x="48" y="3" :fill="'rgba(' + colorWaveDark + ',1)'" />
      </g>
      <g class="parallax" v-if="!theme.isDark">
        <use xlink:href="#gentle-wave" x="48" y="0" :fill="'rgba(' + colorWaveLight + ',0.25)'" />
        <use xlink:href="#gentle-wave" x="48" y="0" :fill="'rgba(' + colorWaveLight + ',0.5)'" />
        <use xlink:href="#gentle-wave" x="48" y="3" :fill="'rgba(' + colorWaveLight + ',1)'" />
      </g>
    </svg>
  </div>
  <v-footer class="text-center d-flex flex-column pa-0" :class="!theme.isDark ? 'bg-primary' : ''">

    <div class="links mb-6">
      <NuxtLink v-for="l in store_elements.links" :key="l.title" :to="l.link" class="router-link">
        {{ l.title }}
      </NuxtLink>
    </div>
    <h2>
      Lorem ipsum dolor sit amet.
    </h2>
    <div class="text-center d-flex align-center ga-6 mt-6">
      <v-icon v-for="(i, index) of store_elements.icons" :key="index" :icon="i.name" size="large"
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

    <div class="button-top" v-if="posY > 700">
      <v-btn icon="mdi-chevron-up" @click="scrollToTop" :color="theme.isDark ? 'dark' : 'secondary'"></v-btn>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const theme = useThemeStore()
const store_elements = useElementStore()

const colorWaveLight = '0, 219, 222'
const colorWaveDark = '52, 54, 64'

const posY = ref(0)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const handleScroll = () => {
  posY.value = window.scrollY
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll);
  }
})
// destroyed() {
//   if (process.client) {
//     window.removeEventListener('scroll', handleScroll);
//   }
// }

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

.vague {
  height: 15vh;
  position: relative;
}

.button-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
</style>
