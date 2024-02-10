<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="516.3px"
            height="190px" viewBox="0 0 516.3 190" style="enable-background:new 0 0 516.3 211.99;" xml:space="preserve">
            <path class="template"
                d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
            <path class="path"
                d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
        </svg>
        <div id="code">drawSVG : {{ values[currentIndex] }} </div>
        <v-btn class="dark-grey-button club-demo-button" @click="next">Next Example</v-btn>
        <!-- https://greensock.com/docs/v3/Plugins/DrawSVGPlugin -->
    </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap-trial";

import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const currentIndex = ref(0);

const values = ["100%", "40% 60%", "20% 50%", "false", "true", "20%"];

onMounted(() => {
    gsap.set(".path, #code", { visibility: "visible" });
})

function next() {

    gsap.killTweensOf(next); //in case the user clicks, clear any delayed calls to this method. 
    if (++currentIndex.value === values.length) {
        currentIndex.value = 0;
    }
    gsap.to(".path", { drawSVG: values[currentIndex.value], duration: 1, ease: "power1.inOut" });
}

</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.logo {
    position: relative;
    @extend %flex-center-el;
    height: 25vh;
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
    stroke-width: 5px;
    stroke: $surface;
}

.path {
    stroke: $primary;
    stroke-width: 5px;
    visibility: hidden;
}

#code,
#value {
    font-size: 2rem;
    font-family: monospace;
}

#code {
    margin: 20px;
    position: relative;
    visibility: hidden;
}
</style>