<template>
    <section>
        <TitleGradient :title="'Some projects.'" />
        <div class="cards-container">
            <div v-for="(item, index) in cards" :key="index" class="card-space">
                <NuxtImg :src="item.source" data-aos="fade-up" data-aos-duration="2000" />
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
const cards = [
    {
        source: "https://images.unsplash.com/photo-1705783679154-c47fab616434?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        source: "https://images.unsplash.com/photo-1705719418761-3808881d06b4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        source: "https://images.unsplash.com/photo-1705615427885-800da48ba0b7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        source: "https://images.unsplash.com/photo-1705522409239-87c3c13496e8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        source: "https://images.unsplash.com/photo-1705351953374-76117bc519e1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        source: "https://images.unsplash.com/photo-1705773895630-0b15890ded6e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        source: "https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

import anime from 'animejs';
import { onMounted } from 'vue';

const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({
        targets: '.gallery',
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
    align-items: flex-start;
    justify-content: center;
    margin: auto;
    .card-space {
        flex: 1;
        min-width: 350px;
        margin: 0.25rem;
        border-radius: 1rem;
        transition: all;
        transition-duration: 500ms;
        height: 35vh;

        &:hover {
            flex: 2;
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 0.25rem;
        }
    }
}
</style>
  