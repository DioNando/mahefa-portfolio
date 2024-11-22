<template>
    <section>
        <NuxtParticles id="tsparticles" :options="particles" @load="onLoad"></NuxtParticles>
        <v-row id="landscape">
            <v-col class="d-none d-sm-flex align-center justify-center">
                <img id="landscape__illustration" src="/assets/img/developer-activity-animate.svg" style="width: 100%;" />
            </v-col>
            <v-col cols="auto" class="d-flex flex-column align-sm-end justify-center ga-6">
                <img v-if="theme.isDark" src="/assets/img/df-light.svg" style="width: 25%;" class="d-none d-sm-block" />
                <img v-else src="/assets/img/df-dark.svg" style="width: 25%;" class="d-none d-sm-block" />
                <div id="name" class="text-h6 d-flex align-end ga-2">
                    <p>Hey, I'm David Fernando </p>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
                        alt="Waving Hand" width="35" height="35" />
                </div>
                <div class="landscape__title">
                    <p>Fullstack developper</p>
                    <p>UI/UX Designer</p>
                    <p>Graphist</p>
                </div>
                <ButtonsStartup id="landscape__btn" class="d-none d-md-block" />
            </v-col>
        </v-row>
    </section>
</template>
  
<script setup lang="ts">
const theme = useThemeStore()

import anime from 'animejs';
const { $anime } = useNuxtApp()

import type { Container } from 'tsparticles-engine'
import particles from '~/data/particlesjs-config.json'

const onLoad = (container: Container) => {
    container.play()
}

onMounted(() => {
    $anime({
        targets: '.landscape__title p',
        opacity: [0, 1],
        translateX: [150, 0],
        delay: anime.stagger(300, { easing: 'easeInOutBounce' })
    })
    $anime({
        targets: '#tsparticles',
        opacity: [0, 1],
        delay: 300,
        easing: 'easeInOutQuad'
    })
})

</script>

<style lang="scss" scoped>
section {
    position: relative;

    #tsparticles {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    #landscape {

        #landscape__illustration {
            display: none;
        }

        #landscape__illustration,
        #landscape__btn {
            z-index: 2;
        }
    }

}

.landscape__title {
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
  