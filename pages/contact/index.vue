<template>
    <div>
        <IllustrationsPath />
        <NuxtParticles id="tsparticles" :options="options" @load="onLoad"></NuxtParticles>
    </div>
</template>

<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

const options = {
    fullScreen: {
        enable: true,
        zIndex: 1
    },
    background: {
        color: {
            value: '#fff'
        }
    },
    particles: {
        color: {
            value: "#000"
        },
        links: {
            color: "#000",
            enable: true
        },
        move: {
            enable: true
        },
        number: {
            value: 100
        }
    }
}

const onLoad = (container: Container) => {
    // Do something with the container
    container.pause()
    setTimeout(() => container.play(), 2000)
}
</script>


