<template>
  <v-card
    class="card pa-1 bg-surface d-flex flex-column justify-space-between"
    variant="outlined"
  >
    <div class="d-flex flex-column ga-3">
      <!-- <div class="card__image">
        <img :src="selectedPhoto.source" alt="project image" />
      </div> -->
      <div class="pb-2"></div>
      <div class="px-5 d-flex flex-column">
        <div>
          <p class="text-h5 font-weight-bold card--title">
            {{ project.title }}
          </p>
        </div>

        <div class="d-flex align-center ga-2 text-subtitle-1 text-grey">
          <v-icon :icon="project.icon"></v-icon>
          <span> {{ project.role }} </span>
        </div>
      </div>

      <div class="px-5 card__description">
        {{ project.description }}
      </div>
    </div>
    <div class="px-5 pb-5 d-flex flex-wrap justify-end ga-2 mt-3">
      <v-chip v-for="(item, index) in project.technologies" :key="index">{{
        item
      }}</v-chip>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
const { project, show } = defineProps(["project", "show"]);

import photos from "~/data/photos.json";

const store_elements = useElementStore();

const selectedPhoto = store_elements.getRandomElement(photos);
</script>

<style lang="scss" scoped>
.card {
  transition-duration: 400ms;
  transition-property: box-shadow;
  border: 1px $primary solid;
  height: 100%;

  .card__image {
    height: 200px;
    width: 100%;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 0.15rem;
    }
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

  // &__description {
  //     @include paragraph-overflow-hidden(3)
  // }
}
</style>
