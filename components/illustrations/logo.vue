<template>
    <div id="df-svg" data-aos="fade-in" data-aos-duration="1000">

        <svg id="df_2" data-name="df 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250"
            :class="theme.isDark ? 'dark' : 'light'">
            <path class="cls-1"
                d="m186.35,50.7c-9.81-9.31-21.5-16.59-35.07-21.85-13.57-5.25-28.49-7.88-44.73-7.88H25.41v208.05h81.14c16.25,0,31.16-2.68,44.73-8.02,13.57-5.35,25.26-12.68,35.07-21.99,9.81-9.31,17.39-20.31,22.74-32.99,5.35-12.68,8.03-26.35,8.03-41.02v-.59c0-14.66-2.68-28.28-8.03-40.87-5.35-12.58-12.93-23.53-22.74-32.84Zm-17.09,74.9c0,9.32-1.54,17.74-4.61,25.26-3.07,7.53-7.33,14.07-12.78,19.62-5.45,5.55-12.04,9.81-19.76,12.78-7.73,2.97-16.25,4.46-25.56,4.46h-35.37V62.29h35.37c9.31,0,17.83,1.54,25.56,4.61,7.73,3.07,14.31,7.38,19.76,12.93,5.45,5.55,9.71,12.19,12.78,19.91,3.07,7.73,4.61,16.15,4.61,25.26v.59Z" />
            <rect class="cls-1" x="255.99" y="20.97" width="168.6" height="45.77" />
            <rect class="cls-1" x="255.99" y="102.11" width="84.3" height="45.77" />
            <rect class="cls-1" x="255.99" y="183.25" width="45.77" height="45.77" />
            <rect class="cls-1" x="378.82" y="102.11" width="45.77" height="126.91" />
        </svg>
        <svg id="df_1" data-name="df 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250">
            <path class="cls-1"
                d="m186.35,50.7c-9.81-9.31-21.5-16.59-35.07-21.85-13.57-5.25-28.49-7.88-44.73-7.88H25.41v208.05h81.14c16.25,0,31.16-2.68,44.73-8.02,13.57-5.35,25.26-12.68,35.07-21.99,9.81-9.31,17.39-20.31,22.74-32.99,5.35-12.68,8.03-26.35,8.03-41.02v-.59c0-14.66-2.68-28.28-8.03-40.87-5.35-12.58-12.93-23.53-22.74-32.84Zm-17.09,74.9c0,9.32-1.54,17.74-4.61,25.26-3.07,7.53-7.33,14.07-12.78,19.62-5.45,5.55-12.04,9.81-19.76,12.78-7.73,2.97-16.25,4.46-25.56,4.46h-35.37V62.29h35.37c9.31,0,17.83,1.54,25.56,4.61,7.73,3.07,14.31,7.38,19.76,12.93,5.45,5.55,9.71,12.19,12.78,19.91,3.07,7.73,4.61,16.15,4.61,25.26v.59Z" />
            <rect class="cls-1" x="255.99" y="20.97" width="168.6" height="45.77" />
            <rect class="cls-1" x="255.99" y="102.11" width="84.3" height="45.77" />
            <rect class="cls-1" x="255.99" y="183.25" width="45.77" height="45.77" />
            <rect class="cls-1" x="378.82" y="102.11" width="45.77" height="126.91" />
        </svg>
    </div>
</template>

<script setup lang="ts">
const theme = useThemeStore()
import anime from 'animejs';

const { $anime } = useNuxtApp()

const animationElement = () => {
    $anime({
        targets: '#df_1 .cls-1',
        strokeDashoffset: [anime.setDashoffset, -300],
        easing: 'easeInOutQuad',
        duration: 5000,
        delay: function (el, i) { return i * 250 },
        direction: 'alternate',
        loop: true

    })
}


onMounted(() => {
    if (process.client) {
        document.addEventListener('aos:in', animationElement);
    }
})
</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.light {
    stroke: darken($color: $light, $amount: 15%);
    fill: darken($color: $light, $amount: 15%);
}

.dark {
    stroke: $surface;
    fill: $surface;
}


#df-svg {
    @extend %flex-center-el;
    position: relative;
    width: 20rem;
    aspect-ratio: 2/1;

    #df_1,
    #df_2 {
        position: absolute;
        width: 100%;
        stroke-width: 10px;
        fill: none;
    }

    #df_1 .cls-1 {
        stroke: $primary;
    }

    // #df_2 {
    //     display: none;
    // }
}
</style>