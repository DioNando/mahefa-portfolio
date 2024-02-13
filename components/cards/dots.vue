<template>
    <div class="dots">
        <div class="dot" v-for="index in DOT_GRID_ROW * DOT_GRID_COL" :key="index" @mouseenter="handleDotMouseEnter(index)">
        </div>
    </div>
</template>

<script setup lang="ts">
const theme = useThemeStore()
import color from '~/data/color.json'

import anime from 'animejs'
const { $anime } = useNuxtApp()

const DOT_GRID_ROW = 15
const DOT_GRID_COL = 20

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
        delay: anime.stagger(50, { grid: [DOT_GRID_COL, DOT_GRID_ROW], from: index - 1 }),
        direction: 'alternate',
        loop: true
    });
};

const handleDotMouseClick = (index: number) => {
    anime.remove('section .dot')
    $anime({
        targets: 'section .dot',
        translateX: anime.stagger(-5, { grid: [DOT_GRID_COL, DOT_GRID_ROW], from: 'center', axis: 'x' }),
        translateY: anime.stagger(-5, { grid: [DOT_GRID_COL, DOT_GRID_ROW], from: 'center', axis: 'y' }),
        // opacity: [
        //     { value: 0, easing: 'easeInOutSine', duration: 250 },
        //     { value: 1, easing: 'easeInOutSine', duration: 500 },
        // ],
        delay: anime.stagger(200, { grid: [DOT_GRID_COL, DOT_GRID_ROW], from: 'center' }),
        backgroundColor: [
            { value: color.secondary, easing: 'easeInOutSine', duration: 250 },
            { value: color.tertiary, easing: 'easeInOutSine', duration: 500 }
        ],
        easing: 'easeInOutBack',
        direction: 'alternate',
        loop: true
    });
};

onMounted(() => {
    handleDotMouseClick(0)
})

</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.dots {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    gap: 10px;
}

.dot {
    width: 100%;
    aspect-ratio: 1/1;
    background-color: $primary;
    border-radius: 50%;
}
</style>