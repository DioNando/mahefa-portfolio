<template>
    <section>
        <TextsTitle :title="'A project ? Contact me.'" />
        <article>
            <div class="d-flex justify-center">
                <FormsContact />
            </div>
            <div class="d-flex justify-center">
                <img src="/assets/img/example-animate.svg" style="width: 100%;" />
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
    margin-bottom: 2rem;
}

article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    div {
        flex: auto;
        padding: 0 2rem;

        @media only screen and (max-width: 1000px) {
            width: 100%;

            img {
                display: none;
            }
        }
    }

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;

    }
}
</style>
  