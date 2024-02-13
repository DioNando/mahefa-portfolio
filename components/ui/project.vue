<template>
    <section>
        <TextsTitle :title="'Some projects.'" />
        <div class="cards">
            <div v-for="(item, index) in projects" :key="index" class="card__element">
                <CardsProject :project="item" :show="true" />
            </div>
        </div>
        <div class="text-center">
            <p>Distinctio harum illum, error deleniti commod</p>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import projects from '~/data/projects.json'

import anime from 'animejs';
import { onMounted } from 'vue';

const store_emojis = useEmojiStore()

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

.cards {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: flex-start;
    gap: 2rem;
    overflow-y: hidden;
    overflow-x: auto;
    padding: 0 1rem 1rem 0;
    // border-right: 5rem solid linear-gradient(0deg, $primary, $primary);
    position: relative;
    
    // &::after {
        //     position: absolute;
        //     content: "";
        //     width: 50px;
        //     height: 100%;
    //     background-color: red;
    //     right: 0;
    // }
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    @media only screen and (min-width: 600px) {
        flex-wrap: wrap;
        padding: 0;
        overflow: visible;
        border: none;
    }
    
    .card__element {
        flex: 1;
        min-width: 350px;
    }
}
</style>
  