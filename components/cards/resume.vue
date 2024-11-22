<template>
    <v-card class="card pa-4 bg-background d-flex flex-column" variant="outlined">
        <template v-slot:title>
            <p class="text-h6 font-weight-bold card__title">{{ resume.title }}</p>
        </template>

        <template v-slot:subtitle> {{ resume.type }} </template>

        <template v-slot:text>
            <ul class="card__description">
                <li v-for="i in resume.description">
                    {{ i.title }}
                </li>
            </ul>
        </template>
    </v-card>
</template>
  
<script lang="ts" setup>
const { resume } = defineProps(["resume"]);
</script>
  
<style lang="scss" scoped>
.card {
    transition-duration: 400ms;
    transition-property: box-shadow;
    border: 1px $primary solid;
    height: 100%;

    &:hover {

        .card__title,
        .v-icon {
            transition-duration: 400ms;
            color: $primary;
        }
    }

    .card__title {
        margin-bottom: .5rem;
    }

    .card__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 1rem;
    }
}
</style>
  