<template>
    <section>
        <TitleGradient :title="'My story.'" />
        <v-row justify="center">
            <CircleButton />
        </v-row>
    </section>
</template>
  
<script setup lang="ts">

</script>
  
<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;
}
</style>
  