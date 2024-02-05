<template>
    <section>
        <v-row>
            <v-col class="d-flex align-center justify-center">
                <!-- <img src="/assets/img/startup.svg" data-aos="fade-right" /> -->
                <div style="width: 100%;">
                    <IllustrationLandscape />
                </div>
            </v-col>
            <v-col cols="auto" class="d-flex flex-column align-end justify-center ga-6">
                <!-- <CubeThree class="cube" data-aos="zoom-in" /> -->
                <img v-if="theme.isDark" src="/assets/img/df-light.svg" style="width: 25%;" />
                <img v-else src="/assets/img/df-dark.svg" style="width: 25%;" />
                <p class="text-h5 text-end">Hey, I'm David Fernando {{ emoji.character }}</p>
                <div class="text-end title">
                    <p>Fullstack developper</p>
                    <p>UI/UX Designer</p>
                    <p>Graphist</p>
                </div>
                <ButtonStartup />
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
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_animations.scss";

section {
    margin-top: 5vh;
}

.title {
    font-size: clamp(0.5rem, 5vw, 3.5rem);
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p::after {
        content: '';
        width: 0%;
        height: 3px;
        background: $primary;
        display: block;
        transition: 0.5s;
        margin-left: auto;
    }

    p:hover::after {
        width: 100%;
    }
}
</style>
  