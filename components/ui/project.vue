<template>
    <section>
        <TextsTitle :title="'Some projects.'" />
        <div class="cards-container">
            <div v-for="(item, index) in projects" :key="index" class="card-space">
                <CardsProject :service="item" :show="true" />
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import dataProjects from '~/data/projects.json'
const projects = ref(dataProjects)

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
    align-items: stretch;
    justify-content: center;
    gap: 2rem;

    .card-space {
        flex: 1;
        min-width: 350px;
    }
}
</style>
  