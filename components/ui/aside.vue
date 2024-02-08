<template>
    <section>
        <TextsTitle :title="'Aside.'" />
        <div class="cards-container">
            <CardsAside v-for="(item, index) in photos" :key="index" :data="item" :emoji="store_emojis.getRandomEmoji()" />
        </div>
    </section>
</template>
  
<script setup lang="ts">
import dataPhotos from '~/data/photos.json'
import anime from 'animejs';
import { onMounted } from 'vue';

const store_emojis = useEmojiStore()
const store_elements = useElementStore()

const photos = store_elements.getRandomElements(dataPhotos, 6)

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
@import "~/assets/scss/style.scss";

section {
    @extend %section-accueil;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
  