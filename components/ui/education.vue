<template>
    <section>
        <TextsTitle :title="'Education.'" />
        <div class="cards-container">
            <div cols="6" v-for="(item, index) in educations" :key="index" class="education">
                <div class="education-title">{{ item.title }}</div>
                <div class="education-date text-subtitle-1">{{ item.date }}</div>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import dataEducations from '~/data/educations.json'
const educations = ref(dataEducations)

</script>
  
<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

section {
    @extend %section-accueil;
}

.cards-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 1rem;

    @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
}

.education {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 2px $primary solid;

    .education-title {
        font-size: large;
        @include text-overflow-hidden(75%);
    }
}
</style>
  