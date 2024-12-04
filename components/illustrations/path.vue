<template>
    <div class="container">
        <div id="emoji"><img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Tears%20of%20Joy.png"
                alt="Face with Tears of Joy" width="100" height="100" /></div>
        <svg id="blob" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250">
            <path class="cls-1"
                d="m170,25.2c51.01,14.52,53.8,47.9,98.32,54.44,42.89,6.3,58.54-23.43,88.49-11.99,35.73,13.65,60.03,73.77,43.17,111.51-26.69,59.74-136.2,77.31-186.57,38.85-34.22-26.13-25.43-66.66-57.1-78.49-44.01-16.44-88.39,49.57-114.39,34.05-24.97-14.91-22.75-99.32,24.7-135.73,37.68-28.91,89.54-16.57,103.38-12.63Z" />
        </svg>
    </div>
</template>

<script setup lang="ts">

const store_emojis = useEmojiStore()
await callOnce(store_emojis.fetch)
const emoji = store_emojis.getRandomEmoji()

const theme = useThemeStore()
import anime from 'animejs';

const { $anime } = useNuxtApp()

const animationElement = () => {
    $anime({
        targets: '#df_1 .cls-1',
        strokeDashoffset: [anime.setDashoffset, -200],
        easing: 'easeInOutQuad',
        duration: 5000,
        direction: 'alternate',
        loop: true
    })
}


onMounted(() => {
    if (process.client) {
        // document.addEventListener('aos:in', animationElement);
    }

    let path = anime.path("#blob path")

    $anime({
        targets: '#emoji',
        translateX: path("x"),
        translateY: path("y"),
        rotate: path("angle"),
        easing: 'linear',
        duration: 10000,
        loop: true
    })
})

</script>

<style lang="scss" scoped>
.container {
    position: relative;
}

.cls-1 {
    stroke-width: 0px;
    stroke: $error;
    fill: none;
}

#emoji {
    font-size: 10rem;
    position: absolute;
    top: -30px;
    left: -30px;
}
</style>