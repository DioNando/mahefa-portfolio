<template>
    <section>
        <TitleGradient :title="'Skills.'" />
        <article>
            <div v-for="(item, index) in store_elements.skills" :key="index" class="skill">
                <div class="skill-title">{{ item.title }}</div>
                <div v-for="i in item.details">
                    {{ i.name }}
                </div>
            </div>
        </article>
    </section>
</template>
  
<script setup lang="ts">
const store_elements = useElementStore()

</script>
  
<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;

    article {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 2rem;

        .skill {
            flex: auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .skill-title {
                font-size: x-large;
                font-weight: bold;
                color: $primary;
                margin-bottom: 0.25rem;
            }
        }
    }
}
</style>
  