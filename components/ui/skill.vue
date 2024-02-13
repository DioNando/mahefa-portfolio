<template>
    <section>
        <TextsTitle :title="'Skills.'" />
        <article>
            <div v-for="(item, index) in skills" :key="index" class="skill">
                <div class="skill__title" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="200">{{ item.title
                }}</div>
                <div v-for="i in item.details" class="skill__detail" data-aos="fade-right" data-aos-duration="2500"
                    data-aos-offset="200">
                    {{ i.name }}
                </div>
            </div>
        </article>
        <div class="text-center text-disabled">
            <p class="text-h4 font-weight-bold">Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit doloremque quia,
                incidunt nisi architecto nesciunt vel! Nam nemo, distinctio harum illum, error deleniti commodi
                sunt animi tempora
                facilis
                porro?</p>
        </div>
        <!-- <div class="d-flex justify-center mt-4">
            <IllustrationsLogo />
        </div> -->
    </section>
</template>
  
<script setup lang="ts">
import skills from '~/data/skills.json'
</script>
  
<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

section {
    @extend %section-accueil;
}

article {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    flex-wrap: nowrap;
    overflow-y: hidden;
    overflow-x: auto;


    &::-webkit-scrollbar {
        display: none;
    }

    @media only screen and (min-width: 600px) {
        gap: 0;
        flex-wrap: wrap;
    }

    .skill {
        flex: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        min-width: fit-content;
        border-left: 1px $primary solid;
        padding-left: 1rem;
        overflow: hidden;

        .skill__title {
            font-size: larger;
            font-weight: 600;
            margin-bottom: 0.25rem;
            color: $primary;
            text-wrap: nowrap;
        }
    }
}
</style>
  