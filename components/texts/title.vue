<template>
    <div>
        <h1 class="title" :class="theme.isDark ? 'dark' : 'light'">{{ props.title }}</h1>
        <!-- <div>
            <v-btn icon="mdi-chevron-down" :color="theme.isDark ? 'info' : 'success'" size="x-large" class="mb-4"
                @click="scrollToGallery"></v-btn>
        </div> -->
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