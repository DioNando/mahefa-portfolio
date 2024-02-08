<template>
  <div class="button-top" v-if="posY > 350">
    <v-btn icon="mdi-chevron-up" @click="scrollToTop" :color="theme.isDark ? 'dark' : 'secondary'"></v-btn>
  </div>
</template>

<script setup lang="ts">
const theme = useThemeStore()

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

<style lang="scss">
.button-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  opacity: 0.5;
  transition: 500ms;

  &:hover {
    opacity: 1;
  }
}
</style>