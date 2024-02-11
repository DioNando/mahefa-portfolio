<template>
    <section>
        <v-row>
            <v-col class="d-none d-sm-flex align-center justify-center">
                <img id="illustration-landscape" src="/assets/img/developer-activity-animate.svg" style="width: 100%;" />
            </v-col>
            <v-col cols="auto" class="d-flex flex-column align-sm-end justify-center ga-6">
                <img v-if="theme.isDark" src="/assets/img/df-light.svg" style="width: 25%;" class="d-none d-sm-block" />
                <img v-else src="/assets/img/df-dark.svg" style="width: 25%;" class="d-none d-sm-block" />
                <p id="name" class="text-h6">Hey, I'm David Fernando</p>
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

import anime from 'animejs';
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({
        targets: '.title p',
        opacity: [0, 1],
        translateX: [250, 0],
        delay: anime.stagger(300, { easing: 'easeOutBounce' })
    })
    $anime({
        // targets: '#illustration-landscape',
        // opacity: [0, 1],
        // translateY: [250, 0],
        // delay: 300,
        // easing: 'easeOutBounce'
    })
})

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
  