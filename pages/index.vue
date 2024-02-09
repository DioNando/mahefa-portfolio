<template>
    <v-container>
        <UiLandscape />
        <UiProject />
        <UiSkill />
        <UiStory />
        <UiEducation />
        <UiAside />
        <UiContact />
    </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

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

<style lang="scss">
@import "~/assets/scss/style.scss";
</style>

