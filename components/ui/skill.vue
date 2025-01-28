<template>
  <section>
    <TextsTitle :title="'Skills.'" />
    <article>
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="(item, index) in skills"
          :key="index"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="skill bg-surface" flat>
            <div
              class="skill__title"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="200"
            >
              {{ item.title }}
            </div>
            <div
              v-for="i in item.details"
              class="skill__detail"
              data-aos="fade-right"
              data-aos-duration="2500"
              data-aos-offset="200"
            >
              {{ i.name }}
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </article>
    <div class="text-center text-disabled">
      <p class="text-h4 font-weight-bold">Lorem ipsum dolor sit amet.</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit
        doloremque quia, incidunt nisi architecto nesciunt vel! Nam nemo,
        distinctio harum illum, error deleniti commodi sunt animi tempora
        facilis porro?
      </p>
    </div>
    <article class="d-flex flex-wrap justify-center ga-2">
      <div v-for="(item, index) in technos" :key="index" class="techno">
        <img :src="`/img/technos/${item.logo}`" :alt="item.name" />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import skills from "~/data/skills.json";
import technos from "~/data/technos.json";
</script>

<style lang="scss" scoped>
section {
  @extend %section-accueil;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  min-width: fit-content;
  margin: 0 0.5rem;
  border: 1px $primary solid;
  padding: 1rem;
  overflow: hidden;

  .skill__title {
    font-size: larger;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: $primary;
    text-wrap: nowrap;
  }
}

.techno {
  display: inline-block;
  height: 5rem;
  background-color: color.adjust($light, $lightness: -5%);
  border-radius: 0.5rem;
  padding: 0.75rem;
  filter: grayscale(100%);
  transition: all 300ms ease-in-out;

  &:hover {
    filter: grayscale(0%);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
