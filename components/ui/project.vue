<template>
  <section>
    <TextsTitle :title="'Some projects.'" />
    <div class="cards">
      <div
        v-for="(item, index) in projects.slice(0, 3)"
        :key="index"
        class="card__element"
      >
        <CardsProject :project="item" :show="true" />
      </div>
    </div>
    <div class="text-end">
      <NuxtLink to="/projects">
        <v-btn append-icon="mdi-chevron-right" variant="plain">
          View all projects
        </v-btn>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import projects from "~/data/projects.json";

import anime from "animejs";
import { onMounted } from "vue";

const store_emojis = useEmojiStore();

await callOnce(store_emojis.fetch);

const { $anime } = useNuxtApp();

onMounted(() => {
  $anime({
    targets: ".card-animation",
    opacity: [{ value: 0 }, { value: 1 }],
    translateY: [{ value: 270 }, { value: 0 }],
    delay: anime.stagger(100, { start: 500 }),
  });
});
</script>

<style lang="scss" scoped>
section {
  @extend %section-accueil;
}

.cards {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  gap: 2rem;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 0 1rem 1rem 0;
  position: relative;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    flex-wrap: wrap;
    padding: 0;
    overflow: visible;
    border: none;
  }

  .card__element {
    flex: 1;
    min-width: 80%;
    scroll-snap-align: center;

    @media only screen and (min-width: 600px) {
      min-width: 350px;
    }
  }
}
</style>
