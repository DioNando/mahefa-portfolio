<template>
    <section>
        <TextsTitle :title="'Skills.'" />
        <article>
            <div v-for="(item, index) in skills" :key="index" class="skill">
                <div class="skill__title">{{ item.title }}</div>
                <div v-for="i in item.details">
                    {{ i.name }}
                </div>
            </div>
        </article>
        <div class="text-center">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit doloremque quia,
                incidunt nisi architecto nesciunt vel! Nam nemo, distinctio harum illum, error deleniti commodi
                sunt animi tempora
                facilis
                porro?</p>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import dataSkills from '~/data/skills.json'
const skills = ref(dataSkills)

</script>
  
<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

section {
    @extend %section-accueil;
}

article {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;

    .skill {
        flex: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .skill__title {
            font-size: larger;
            font-weight: bold;
            margin-bottom: 0.25rem;
            color: $primary;
        }
    }
}
</style>
  