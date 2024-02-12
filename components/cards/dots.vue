<template>
    <section>
        <div class="dot" v-for="index in DOT_GRID_ROW * DOT_GRID_COL" :key="index" @mouseenter="handleDotMouseEnter(index)">
        </div>
    </section>
</template>

<script setup lang="ts">
const theme = useThemeStore()
import color from '~/data/color.json'

import anime from 'animejs'
const { $anime } = useNuxtApp()

const DOT_GRID_ROW = 1
const DOT_GRID_COL = 50

const handleDotMouseEnter = (index: number) => {
    anime.remove('section .dot')
    $anime({
        targets: 'section .dot',
        scale: [
            { value: 1.35, easing: 'easeInOutSine', duration: 250 },
            { value: 1, easing: 'easeInOutSine', duration: 1000 }
        ],
        translateY: [
            { value: -15, easing: 'easeInOutSine', duration: 350 },
            { value: 15, easing: 'easeInOutSine', duration: 350 },
            { value: 0, easing: 'easeInOutSine', duration: 1000 }
        ],
        backgroundColor: [
            { value: color.secondary, easing: 'easeInOutSine', duration: 250 },
            { value: color.tertiary, easing: 'easeInOutSine', duration: 1000 }
        ],
        delay: anime.stagger(50, { grid: [DOT_GRID_COL, DOT_GRID_ROW], from: index - 1}),
        direction: 'alternate',
        loop: true
    });
};

onMounted(() => {
    handleDotMouseEnter(0)
})

</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

section {
    display: grid;
    grid-template-columns: repeat(50, 1fr);
    gap: 15px;
    // margin-bottom: 2rem;
    width: 100%;
}

.dot {
    width: 100%;
    aspect-ratio: 1/1;
    background-color: $primary;
    border-radius: 50%;
}
</style>