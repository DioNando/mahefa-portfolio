<template>
    <v-container>
        <TextsTitle :title="'Resume.'" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat dignissimos dolores dicta
            reprehenderit
            voluptatibus perspiciatis exercitationem, qui, eaque sed consequuntur minima ad nesciunt modi quasi unde
            incidunt culpa magni.</p>
        <div class="d-flex align-center justify-center">
            <TimelinesResume />
        </div>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.v-container {
    @extend %section-accueil;
}
</style>
