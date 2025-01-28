<template>
    <section>
        <TextsTitle :title="'Aside.'" />
        <div class="cards">
            <div v-for="(item, index) in projects" :key="index" class="card__element">
                <CardsProject :project="item" :show="true" />
            </div>
            <div v-for="(item, index) in projects" :key="index" class="card__element">
                <CardsProject :project="item" :show="true" />
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import projects from '~/data/projects.json'
import photos from '~/data/photos.json'
const store_emojis = useEmojiStore()
await callOnce(store_emojis.fetch)

const store_elements = useElementStore()

const selectedPhotos = store_elements.getRandomElements(photos, photos.length)


import anime from 'animejs';
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({
        targets: '.card__element',
        opacity: [0, 1],
        translateY: [250, 0],
        delay: anime.stagger(300, { easing: 'easeOutQuad', from: 'first' })
    })
})


</script>
  
<style lang="scss" scoped>
section {
    @extend %section-accueil;
}

.cards {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: flex-start;
    gap: 2rem;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 1rem;
    padding-right: 1rem;

    &::-webkit-scrollbar {
        display: none;
    }

    .card__element {
        flex: 1;
        min-width: 80%;
        scroll-snap-align: center;

        @media only screen and (min-width: 600px) {
            min-width: 350px;
        }
    }

    @media only screen and (min-width: 600px) {
        display: block;
        columns: 2;
        column-gap: 2rem;
        break-inside: avoid;

        @media only screen and (min-width: 1200px) {
            columns: 3;
        }

        .card__element {
            margin-bottom: 2rem;
        }
    }
}
</style>
  