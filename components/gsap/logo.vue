<template>
  <div class="d-flex flex-column align-center ga-6">
    <div class="logo">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
          <defs></defs>
          <path
            class="template"
            :class="theme.isDark ? 'dark' : 'light'"
            d="m232.05,195.21c-5.93,14.07-14.34,26.27-25.22,36.6-10.88,10.33-23.85,18.46-38.91,24.4-15.06,5.93-31.6,8.9-49.62,8.9H28.29V34.31h90.01c18.02,0,34.56,2.92,49.62,8.74,15.05,5.83,28.03,13.9,38.91,24.23,10.88,10.33,19.29,22.48,25.22,36.43,5.94,13.96,8.9,29.07,8.9,45.33v.66c0,16.27-2.97,31.44-8.9,45.5Zm-44.18-45.5c0path.71-19.45-5.11-28.03-3.41-8.57-8.13-15.93-14.18-22.09-6.05-6.15-13.35-10.93-21.92-14.34-8.57-3.4-18.03-5.11-28.36-5.11h-39.23v139.14h39.23c10.33,0path.65,28.36-4.95,8.57-3.3,15.88-8.02,21.92-14.18,6.04-6.15,10.77-13.41,14.18-21.76,3.41-8.35,5.11-17.69,5.11-28.03v-.66Z"
          />
          <path
            class="template"
            :class="theme.isDark ? 'dark' : 'light'"
            d="m284.07,34.31h187.04v50.77h-187.04v-50.77Z"
          />
          <path
            class="template"
            :class="theme.isDark ? 'dark' : 'light'"
            d="m284.07,124.32h93.52v50.77h-93.52v-50.77Z"
          />
          <path
            class="template"
            :class="theme.isDark ? 'dark' : 'light'"
            d="m284.07,214.33h50.77v50.77h-50.77v-50.77Z"
          />
          <path
            class="template"
            :class="theme.isDark ? 'dark' : 'light'"
            d="m420.33,265.1V124.32h50.77v140.78h-50.77Z"
          />
        </svg>
      </div>
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-offset="200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
          <defs></defs>
          <path
            class="path"
            d="m232.05,195.21c-5.93,14.07-14.34,26.27-25.22,36.6-10.88,10.33-23.85,18.46-38.91,24.4-15.06,5.93-31.6,8.9-49.62,8.9H28.29V34.31h90.01c18.02,0,34.56,2.92,49.62,8.74,15.05,5.83,28.03,13.9,38.91,24.23,10.88,10.33,19.29,22.48,25.22,36.43,5.94,13.96,8.9,29.07,8.9,45.33v.66c0,16.27-2.97,31.44-8.9,45.5Zm-44.18-45.5c0path.71-19.45-5.11-28.03-3.41-8.57-8.13-15.93-14.18-22.09-6.05-6.15-13.35-10.93-21.92-14.34-8.57-3.4-18.03-5.11-28.36-5.11h-39.23v139.14h39.23c10.33,0path.65,28.36-4.95,8.57-3.3,15.88-8.02,21.92-14.18,6.04-6.15,10.77-13.41,14.18-21.76,3.41-8.35,5.11-17.69,5.11-28.03v-.66Z"
          />
          <path class="path" d="m284.07,34.31h187.04v50.77h-187.04v-50.77Z" />
          <path class="path" d="m284.07,124.32h93.52v50.77h-93.52v-50.77Z" />
          <path class="path" d="m284.07,214.33h50.77v50.77h-50.77v-50.77Z" />
          <path class="path" d="m420.33,265.1V124.32h50.77v140.78h-50.77Z" />
        </svg>
      </div>
    </div>
    <!-- <div id="code">drawSVG : {{ values[currentIndex] }} </div> -->
    <!-- <v-btn id="value" flat variant="tonal" rounded @click="next">drawSVG : {{
            values[currentIndex] }}</v-btn> -->
    <!-- https://greensock.com/docs/v3/Plugins/DrawSVGPlugin -->
  </div>
</template>

<script setup lang="ts">
const theme = useThemeStore();
import { gsap } from "gsap-trial";

import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const currentIndex = ref(0);

const values = [
  "100%",
  "40% 60%",
  "false",
  "20% 50%",
  "true",
  "20%",
  "50% 50%",
  "true",
  "30% 70%",
  "50% 90%",
];

const animationElement = () => {
  gsap.fromTo(".path", { drawSVG: "0%" }, { duration: 2, drawSVG: "0% 100%" });
};

onMounted(() => {
  if (process.client) {
    document.addEventListener("aos:in", animationElement);
  }
});

function next() {
  gsap.killTweensOf(next); //in case the user clicks, clear any delayed calls to this method.
  if (++currentIndex.value === values.length) {
    currentIndex.value = 0;
  }
  gsap.to(".path", {
    drawSVG: values[currentIndex.value],
    duration: 1,
    ease: "power1.inOut",
  });
}
</script>

<style lang="scss" scoped>
.light {
  stroke: color.adjust($light, $lightness: 15%);
}

.dark {
  stroke: $surface;
}

.logo {
  position: relative;
  @extend %flex-center-el;
  max-width: 250px;
  width: 250px;
  aspect-ratio: 2/1;

  div {
    width: 100%;
    position: absolute;
  }
}

.template,
.path {
  fill: none;
}

.template {
  transition: 250ms;
  stroke-width: 10px;
}

.path {
  stroke: $primary;
  stroke-width: 10px;
}

#code,
#value {
  // font-size: 2rem;
  font-family: monospace;
}
</style>
