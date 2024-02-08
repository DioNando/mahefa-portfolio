<template>
    <section>
        <TextsTitle :title="'My story.'" />
        <v-row justify="center" align="center">
            <v-col class="d-flex justify-center">
                <img v-if="theme.isDark" src="/assets/img/df-light.svg" style="width: 45%;" />
                <img v-else src="/assets/img/df-dark.svg" style="width: 45%;" />
            </v-col>
            <v-col class="d-flex justify-center">
                <ButtonsCircle />
            </v-col>
        </v-row>
    </section>
</template>
  
<script setup lang="ts">
const theme = useThemeStore()

</script>
  
<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;
}
</style>
  