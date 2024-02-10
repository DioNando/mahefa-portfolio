<template>
    <div class="boxes-container" ref="main" data-aos="fade-right">
        <div>
            <v-btn @click="toggleTimeline">Toggle Timeline</v-btn>
        </div>
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const main = ref();
let tl: any;
let ctx: any;

const posY = ref(0)
const posY_ref = 0

const handleScroll = () => {
    posY.value = window.scrollY
}

const animationElement = () => {
    toggleTimeline()
}



onMounted(() => {
    if (process.client) {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('aos:in', animationElement);
    }
})

onUnmounted(() => {
    if (process.client) {
        window.removeEventListener('scroll', handleScroll);
    }
});

const toggleTimeline = () => {
    tl.reversed(!tl.reversed());
};
onMounted(() => {
    ctx = gsap.context((self) => {
        const boxes = self.selector('.box');
        tl = gsap
            .timeline()
            .to(boxes[0], { x: 120, rotation: 360 })
            .to(boxes[1], { x: -120, rotation: -360 }, '<')
            .to(boxes[2], { y: -166 })
            .reverse();
    }, main.value); // <- Scope!
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.boxes-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

.box {
    background-color: $primary;
    width: 100px;
    height: 100px;
    border-radius: 1rem;
    font-size: 24px;
    text-align: center;
    line-height: 100px;
}
</style>