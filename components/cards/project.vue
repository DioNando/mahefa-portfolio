<template>
    <v-card class="card pa-4 bg-background d-flex flex-column" variant="outlined">
        <template v-slot:title>
            <p class="text-h5 font-weight-bold card--title">{{ project.title }}</p>
        </template>

        <template v-slot:subtitle> {{ project.type }} </template>

        <template v-slot:text>
            <div class="card__description">
                {{ project.description }}
            </div>
        </template>
        <v-card-actions class="d-flex justify-space-between">
            <v-icon :icon="project.icon" size="x-large"></v-icon>
            <v-btn class="text-none" to="/resume" variant="outlined" color="primary" append-icon="mdi-chevron-right"
                :class="[show ? '' : 'd-none']">
                View more
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script lang="ts" setup>
const { project, show } = defineProps(["project", "show"]);
</script>
  
<style lang="scss" scoped>
.card {
    transition-duration: 400ms;
    transition-property: box-shadow;
    border: 1px $primary solid;
    height: 100%;

    .v-icon {
        font-size: 2rem;
    }

    &:hover {
        box-shadow: rgba($primary, 0.75) 5px 5px, rgba($primary, 0.5) 10px 10px,
            rgba($primary, 0.25) 15px 15px;

        .card--title,
        .v-icon {
            transition-duration: 400ms;
            color: $primary;
        }
    }

    &__description {
        @include paragraph-overflow-hidden(2)
    }
}
</style>
  