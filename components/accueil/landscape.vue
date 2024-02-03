<template>
    <section>
        <v-row>
            <v-col class="d-flex align-center justify-center">
                <img src="/assets/img/startup.svg" data-aos="fade-right" />
            </v-col>
            <v-col class="d-flex flex-column align-end justify-center ga-6">
                <!-- <CubeThree class="cube" data-aos="zoom-in" /> -->
                 <img v-if="theme.isDark" src="/assets/img/flame-white.svg" style="width: 25%;" data-aos="fade-out" />
                <img v-else src="/assets/img/flame-dark.svg" style="width: 25%;" data-aos="fade-out" />
                <p class="text-h5 text-end">Hey, I'm David Fernando</p>
                <p class="text-end title">Fullstack developper UI/UX Designer Graphist</p>
                <ButtonStartup />
            </v-col>
        </v-row>
    </section>
</template>
  
<script setup lang="ts">
const theme = useThemeStore()
</script>
  
<style lang="scss" scoped>

section {
    margin-top: 5vh;
}
.title {
    font-size: 3rem;
    font-weight: bold;
}
</style>
  