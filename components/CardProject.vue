<template>
    <v-card class="card pa-4 bg-background d-flex flex-column" variant="outlined">
        <template v-slot:title>
            <p class="text-h5 font-weight-bold title">{{ service.title }}</p>
        </template>

        <template v-slot:subtitle> {{ service.type }} </template>

        <template v-slot:text>
            <div>
                {{ service.description }}
            </div>
        </template>
        <v-card-actions class="d-flex justify-space-between">
            <v-icon :icon="service.icon" size="x-large"></v-icon>
            <v-btn to="/resume" variant="outlined" color="primary" append-icon="mdi-chevron-right"
                :class="[show ? '' : 'd-none']">
                View more
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script lang="ts" setup>
const { service, show } = defineProps(["service", "show"]);
</script>
  
<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.card {
    transition-duration: 400ms;
    transition-property: box-shadow;
    border: 1px $primary solid;
    height: 100%;

    &:hover {
        box-shadow: rgba($primary, 0.75) 5px 5px, rgba($primary, 0.5) 10px 10px,
            rgba($primary, 0.25) 15px 15px;

        .title,
        .v-icon {
            transition-duration: 400ms;
            color: $primary;
        }
    }
}</style>
  