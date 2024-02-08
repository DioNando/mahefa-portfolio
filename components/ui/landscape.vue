<template>
    <section>
        <v-row>
            <v-col class="d-none d-sm-flex align-center justify-center">
                <div style="width: 100%;">
                    <IllustrationsLandscape />
                </div>
            </v-col>
            <v-col cols="auto" class="d-flex flex-column align-sm-end justify-center ga-6">
                <img v-if="theme.isDark" src="/assets/img/df-light.svg" style="width: 25%;" class="d-none d-sm-block"/>
                <img v-else src="/assets/img/df-dark.svg" style="width: 25%;" class="d-none d-sm-block"/>
                <p class="text-h6">Hey, I'm David Fernando {{ emoji.character }}</p>
                <div class="title">
                    <p>Fullstack developper</p>
                    <p>UI/UX Designer</p>
                    <p>Graphist</p>
                </div>
                <ButtonsStartup class="d-none d-md-block" />
            </v-col>
        </v-row>
    </section>
</template>
  
<script setup lang="ts">
const theme = useThemeStore()

const store_emojis = useEmojiStore()
await callOnce(store_emojis.fetch)

const emoji = store_emojis.getRandomEmoji()

</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    font-size: clamp(0.5rem, 5vw, 3.5rem);

    @media only screen and (min-width: 600px) {
        align-items: flex-end;
    }

    p::after {
        content: '';
        width: 0%;
        height: 3px;
        background: $primary;
        display: block;
        transition: 0.5s;

        @media only screen and (min-width: 600px) {
            margin-left: auto;
        }
    }

    p:hover::after {
        width: 100%;
    }
}
</style>
  