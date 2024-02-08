<template>
    <div>
        <p class="title" :class="theme.isDark ? 'dark' : 'light'">{{ props.title }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

const theme = useThemeStore()

const scrollToGallery = () => {
    window.scrollTo({
        top: 650,
        behavior: 'smooth'
    });
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.title {
    font-size: clamp(2rem, 7vw, 4rem);
    font-weight: 900;
    margin-top: 1rem;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}

.light {
    background-image: linear-gradient(45deg, $secondary, $primary, $primary, $primary);
}

.dark {
    background-image: linear-gradient(45deg, $primary, $secondary, $secondary, $secondary);
}
</style>