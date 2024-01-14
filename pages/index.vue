<template>
    <NuxtLayout>
        <main>
            <v-row>
                <v-col v-for="(emoji, index) in emojis" :key="index">
                    {{ emoji.character }}
                </v-col>
            </v-row>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { type EmojiInterface } from '~/interfaces/emoji.interface'

definePageMeta({
    layout: "default",
});

const config = useRuntimeConfig();
const { data: emojis } = useFetch<EmojiInterface[]>(config.public.emojisApiUrl);

</script>

<style lang="scss" scoped>
main {
    display: grid;
    align-content: center;
    height: 100%;
    gap: 2rem;
}
</style>

