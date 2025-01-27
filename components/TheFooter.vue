<template>
  <footer>
    <!-- <div class="footer__particles"> -->
    <!-- </div> -->
    <!-- <IllustrationsBars id="footer__bars" class="d-none d-md-block" /> -->
    <IllustrationsWaves id="footer__waves" class="d-none d-md-block" />
    <!-- <NuxtParticles id="footer__particles" :options="particles" @load="onLoad"></NuxtParticles> -->
    <v-footer
      class="footer__elements d-flex flex-column"
      :class="!theme.isDark && 'bg-primary'"
    >
      <div class="link">
        <NuxtLink
          v-for="l in store_elements.navigation"
          :key="l.title"
          :to="l.link"
          class="router-link"
        >
          {{ l.title }}
        </NuxtLink>
      </div>
      <div class="text-body-1">Follow me or contact me.</div>
      <div class="icon text-center d-flex align-center ga-6 mt-6 d-none">
        <NuxtLink
          v-for="(item, index) of links"
          :key="index"
          :href="item.to"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon
            :icon="item.icon"
            size="large"
            class="link-icon"
            :color="theme.isDark ? 'secondary' : 'light'"
          >
          </v-icon>
        </NuxtLink>
      </div>
      <div class="text-center text-disabled pa-4">
        <p>Made with <v-icon icon="mdi-heart"></v-icon></p>
        <p>{{ new Date().getFullYear() }} © Dio_Nando</p>
      </div>
      <ButtonsScrollToTop class="d-none d-sm-block" />
    </v-footer>
  </footer>
</template>

<script setup lang="ts">
import links from "~/data/links.json";

const theme = useThemeStore();
const store_elements = useElementStore();

import anime from "animejs";
const { $anime } = useNuxtApp();

onMounted(() => {
  $anime({
    targets: "#footer__particles",
    opacity: [0, 1],
    delay: 300,
    easing: "easeInOutQuad",
  });
});

import type { Container } from "tsparticles-engine";
import particles from "~/data/footer-particlesjs-config.json";

const onLoad = (container: Container) => {
  container.play();
};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  overflow: hidden;

  #footer__bars,
  #footer__waves {
    z-index: 1;
  }

  #footer__particles {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
  }

  .footer__elements > div {
    z-index: 3;
  }
}

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

.link-icon {
    transition-duration: 250ms;
    &:hover {
      color: $tertiary;
    }
  }
</style>
