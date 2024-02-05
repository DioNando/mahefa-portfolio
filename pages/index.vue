<template>
    <v-container>
        <AccueilLandscape />
        <AccueilProject />
        <div class="text-center ma-6">
            <!-- <img v-if="theme.isDark" src="/assets/img/flame-white.svg" style="width: 30%;" data-aos="fade-out" />
                <img v-else src="/assets/img/flame.svg" style="width: 30%;" data-aos="fade-out" /> -->
            <h1>Distinctio harum illum, error deleniti commod</h1>
        </div>
        <AccueilSkill />
        <div class="text-center ma-12">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit doloremque quia,
                incidunt nisi architecto nesciunt vel! Nam nemo, distinctio harum illum, error deleniti commodi
                sunt animi tempora
                facilis
                porro?</p>
        </div>
        <AccueilStory />
        <AccueilEducation />
        <AccueilAside />
    </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const theme = useThemeStore()
const { $anime } = useNuxtApp()

definePageMeta({
    layout: 'default'
})

onMounted(() => {
    $anime({
        targets: '.cube',
        opacity: {
            value: 1
        },
        delay: 250
    })
})
</script>

