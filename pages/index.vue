<template>
    <v-container>
        <UiLandscape />
        <UiProject />
        <div class="text-center ma-6">
            <h1>Distinctio harum illum, error deleniti commod</h1>
        </div>
        <UiSkill />
        <div class="text-center ma-12">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit doloremque quia,
                incidunt nisi architecto nesciunt vel! Nam nemo, distinctio harum illum, error deleniti commodi
                sunt animi tempora
                facilis
                porro?</p>
        </div>
        <UiStory />
        <UiEducation />
        <UiAside />
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

