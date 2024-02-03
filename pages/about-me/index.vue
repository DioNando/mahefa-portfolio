<template>
    <v-container>
        <div class="emojis">
            <div v-for="(i, index) of emoji.emojis" class="ma-1">
                <p>{{ i.character }}</p>
            </div>
        </div>
    </v-container>
</template>

<script setup lang="ts">
const emoji = useEmojiStore()

await callOnce(emoji.fetch)

import anime from 'animejs';
import { onMounted } from 'vue';

const { $anime } = useNuxtApp()

definePageMeta({
    layout: 'default'
})

onMounted(() => {
    $anime({
        targets: '.emojis div',
        translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
        translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
        rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
        delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
        easing: 'easeInOutQuad'
    })
})

</script>

<style lang="scss" scoped>
.emojis {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    div {
        flex: auto;

        p {
            font-size: larger;
        }
    }

}
</style>
