<template>
    <section>
        <TextsTitle :title="'Aside.'" />
        <div class="cards">
            <CardsAside v-for="(item, index) in selectedPhotos" :key="index" :data="item" :emoji="store_emojis.getRandomEmoji()"
                class="card__element" />
        </div>
    </section>
</template>
  
<script setup lang="ts">
import photos from '~/data/photos.json'

const store_elements = useElementStore()

const selectedPhotos = store_elements.getRandomElements(photos, 7)

const store_emojis = useEmojiStore()
await callOnce(store_emojis.fetch)

import anime from 'animejs';
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({
        targets: '.card__element',
        opacity: [0, 1],
        translateY: [250, 0],
        delay: anime.stagger(300, {easing: 'easeOutQuad', from: 'first'})
    })
})


</script>
  
<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

section {
    @extend %section-accueil;
}
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .card__element {
        opacity: 0;
    }
}
</style>
  