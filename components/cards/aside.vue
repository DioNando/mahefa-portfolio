<template>
    <div class="card" :class="theme.isDark ? 'dark' : 'light'">
        <!-- <div class="card__header d-none d-sm-block"> -->
        <div class="card__header">
            <NuxtImg :src="props.data.source" />
        </div>
        <div class="card__content">
            <div class="card__title mt-1">{{ props.emoji.character + ' ' +
                store_elements.capitalizeName(props.emoji.unicodeName)
            }}</div>
            <div class="card__subtitle text-disabled d-none">{{ store_elements.separateName(props.emoji.group.toUpperCase()) }}
            </div>
            <div class="card__description d-none">
                <v-chip size="small" label v-for="index in 3" :key="index">
                    {{ 'item ' + index }}
                </v-chip>
            </div>
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
@import "~/assets/scss/style.scss";

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
    min-width: 80%;
    overflow: hidden;
    border-radius: 0.25rem;
    height: auto;
    padding: 0.25rem;
    transition: 1s ease-in-out;

    display: flex;
    flex-direction: column;

    &:hover {
        min-width: 100%;
    }

    .card__header {
        height: 30vh;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            display: block;
        }
    }

    .card__content {
        padding: 0.5rem;

        .card__title {
            font-size: small;
            // font-weight: bold;
            // color: $secondary;
            @include paragraph-overflow-hidden(1)
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

    @media only screen and (min-width: 600px) {
        .card__header {
            height: auto;
        }
    }

}
</style>