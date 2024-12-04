<template>
  <section>
    <TextsTitle :title="'Education.'" />
    <div class="cards-container">
      <div
        cols="12"
        v-for="(item, index) in educations"
        :key="index"
        class="education"
      >
        <div class="education-sub">
          <div class="education-title text-primary">{{ item.title }}</div>
          <div class="education-location">{{ item.location }}</div>
          <div class="education-major">{{ item.major }}</div>
        </div>
        <!-- <div class="education-title">{{ item.location }}</div> -->
        <div class="education-date text-subtitle-1 text-grey">{{ item.date }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import educations from "~/data/educations.json";
</script>

<style lang="scss" scoped>
section {
  @extend %section-accueil;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 1rem;

  // @media only screen and (min-width: 600px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
}

.education {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 2px $primary solid;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }

  .education-sub {
    flex: auto;
  }

  .education-title {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .education-location {
    font-weight: 500;
  }

  .education-location {
    @include text-overflow-hidden(90%);
  }
}
</style>
