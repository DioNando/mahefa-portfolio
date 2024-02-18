<template>
    <section>
        <TextsTitle :title="'My story.'" />
        <article>
            <div class="">
                <p class="text-h5 font-weight-bold">Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ipsa enim perspiciatis vitae consectetur
                    cumque atque. Labore commodi ratione nesciunt.</p>
                <p>Illo ullam, minus non, repellendus, aspernatur ut in inventore corrupti quod animi vero libero. Quia
                    obcaecati hic nemo id aspernatur.</p>
            </div>
            <div class="d-none d-md-block">
                <CardsDots />
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

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 3rem;

        @media only screen and (min-width: 600px) {
            flex-direction: row;
            align-items: center;
        }

        div:first-child {
            text-align: end;
            flex: 2;
        }

        div:last-child {
            flex: 1;
            width: 100%;
        }
    }
}
</style>
  