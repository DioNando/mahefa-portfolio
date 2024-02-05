<template>
    <section>
        <TitleGradient :title="'Education.'" />
        <div class="cards-container">
            <div cols="6" v-for="(item, index) in store_elements.educations" :key="index" class="education">
                <div class="education-title">{{ item.title }}</div>
                <div class="education-date text-subtitle-1">{{ item.date }}</div>
            </div>
        </div>
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
}

.cards-container {

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-bottom: 3rem;
}

.education {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 2px $primary solid;

    .education-title {
        font-size: large;
    }
}

@media only screen and (max-width: 720px) {
    .cards-container {
        grid-template-columns: 1fr;
    }

    .education-title {
        font-size: small;
    }
}
</style>
  