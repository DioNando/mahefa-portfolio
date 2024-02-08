<template>
  <div class="waves">
    <svg class="waves__item" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
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
</template>

<script setup lang="ts">
const theme = useThemeStore()

const colorWaveLight = '56, 163, 165'
const colorWaveDark = '52, 54, 64'

</script>

<style lang="scss">
.waves {
  height: 15vh;
  position: relative;

  &__item {
    width: 100%;
    height: 10vh;
    min-height: 100px;
    max-height: 150px;
    position: absolute;
    bottom: 0;
  }
}

/* ANIMATION */
.parallax>use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax>use:nth-child(1) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax>use:nth-child(2) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax>use:nth-child(3) {
  animation-delay: -5s;
  animation-duration: 15s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>