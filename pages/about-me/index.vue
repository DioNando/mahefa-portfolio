<template>
    <v-container>
        <TextsTitle :title="'I\'m David Fernando.'" />
        <div class="about">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis id omnis, dolorum deserunt ipsum cum eos
            natus aperiam. Expedita tempore placeat dolorum magnam cumque non fuga, nulla delectus assumenda architecto?
        </div>
        <div>
            <NuxtLink to="/resume">
                <v-btn rounded variant="text" color="primary" append-icon="mdi-chevron-right" class="text-none">
                    Go to resume
                </v-btn>
            </NuxtLink>
        </div>
        <UiAside />
    </v-container>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.v-container {
    @extend %section-accueil;
}

.about {
    padding-left: 1rem;
    border-left: 5px solid $primary;
    font-size: large;
    width: 60%;
}
</style>
