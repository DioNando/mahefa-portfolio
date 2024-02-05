<template>
    <section>
        <TitleGradient :title="'Aside.'" />
        <div class="cards-container">
            <CardAside v-for="(item, index) in store_elements.photos" :key="index" :data="item"
                :emoji="store_emojis.getRandomEmoji()" />
        </div>
    </section>
</template>
  
<script setup lang="ts">
import anime from 'animejs';
import { onMounted } from 'vue';

const store_emojis = useEmojiStore()
const store_elements = useElementStore()

await callOnce(store_emojis.fetch)

const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({
        targets: '.card-animation',
        opacity: [
            { value: 0 },
            { value: 1 },
        ],
        translateY: [
            { value: 270 },
            { value: 0 },
        ],
        delay: anime.stagger(100, { start: 500 })
    })
})


</script>
  
<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
  