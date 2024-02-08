<template>
    <div class="card" :class="theme.isDark ? 'dark' : 'light'">
        <div class="card__header">
            <NuxtImg :src="props.data.source" />
            <div class="card__icon d-none">
                <!-- <v-icon icon="mdi-code-tags" color="primary"></v-icon> -->
                <div>{{ props.emoji.character }}</div>
            </div>
        </div>
        <div class="card__content">
            <!-- <div class="card-description"> -->
            <div class="card__title">{{ props.emoji.character + ' ' + store_elements.capitalizeName(props.emoji.unicodeName)
            }}</div>
            <div class="card__subtitle">{{ store_elements.separateName(props.emoji.group.toUpperCase()) }}</div>
            <div class="card__description">
                <v-chip size="small" label v-for="index in 5" :key="index">
                    {{ 'item ' + index }}
                </v-chip>
            </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
const theme = useThemeStore()
import { type EmojiInterface } from "~/interfaces/emoji.interface";
const store_elements = useElementStore()


const props = defineProps<{
    data: any
    emoji: EmojiInterface
}>()
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.light {
    // background-image: linear-gradient(45deg, $primary, $quaternary, );
    background-color: darken($color: $light, $amount: 5%);

    &:hover {
        background-color: darken($color: $light, $amount: 15%);
    }
}

.dark {
    background-image: linear-gradient(-45deg, $dark, $surface);

    &:hover {
        background-color: lighten($color: $surface, $amount: 10%);
    }
}

.card {
    flex: 1;
    min-width: 250px;
    border-radius: 1rem;
    // border: 1px $primary solid;
    transition: 1s;
    border-radius: 0.25rem;
    height: auto;
    padding: 0.75rem;

    &:hover {
        flex: 2;
    }

    .card__header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20vh;
        border-radius: .25rem;
        overflow: hidden;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        .card__icon {
            position: absolute;
            font-size: 3rem;
            transition: 1s;
        }
    }

    .card__content {
        padding: 0.5rem;

        .card__title {
            font-size: large;
            font-weight: bold;
            color: $secondary;
        }

        .card__subtitle {
            font-size: small;
            margin-bottom: 0.5rem;
        }

        .card__description {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
    }
}
</style>