<template>
    <div class="card">
        <div class="card-header">
            <NuxtImg :src="props.data.source" />
            <div class="card-icon d-none">
                <!-- <v-icon icon="mdi-code-tags" color="primary"></v-icon> -->
                <div>{{ props.emoji.character }}</div>
            </div>
        </div>
        <div class="card-content">
            <!-- <div class="card-description"> -->
            <div class="card-title">{{ props.emoji.character + ' ' + store_emojis.capitalizeName(props.emoji.unicodeName) }}</div>
            <div class="card-subtitle">{{ store_emojis.separateName(props.emoji.group.toUpperCase()) }}</div>
            <div class="card-description">Lorem ipsum dolor sit a!</div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { type EmojiInterface } from "~/interfaces/emoji.interface";
const store_emojis = useEmojiStore()

const props = defineProps<{
    data: any
    emoji: EmojiInterface
}>()
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.card {
    flex: 1;
    min-width: 250px;
    border-radius: 1rem;
    // background-color: $surface;
    border: 1px $primary solid;
    transition: 1s;
    border-radius: 0.25rem;
    height: auto;
    padding: 0.75rem;
    // color: $light;

    &:hover {
        flex: 2;
        background-color: lighten($color: $surface, $amount: 10%);
    }

    .card-header {
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

        .card-icon {
            position: absolute;
            font-size: 3rem;
            transition: 1s;
        }
    }

    .card-content {
        padding: 0.5rem;

        .card-title {
            font-size: large;
            font-weight: bold;
            color: $secondary;
        }
        
        .card-subtitle {
            font-size: small;
            margin-bottom: 0.5rem;
        }

        .card-description {
            font-size: smaller;
        }
    }
}
</style>