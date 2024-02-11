<template>
    <section>
        <TextsTitle :title="'My story.'" />
        <article>
            <div class="d-flex justify-center">
                <IllustrationsLogo />
            </div>
            <div class="d-flex justify-center">
                <ButtonsCircle />
            </div>
        </article>
    </section>
</template>
  
<script setup lang="ts">
const theme = useThemeStore()

</script>
  
<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

section {
    @extend %section-accueil;
}

article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
}
</style>
  