<template>
    <section>
        <TextsTitle :title="'My story.'" />
        <article>
            <div class="d-flex flex-column justify-center text-end ga-4 story__text">
                <p class="text-h5 text-end">Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ipsa enim perspiciatis vitae consectetur
                    cumque atque. Labore commodi ratione nesciunt.</p>
                <p>Illo ullam, minus non, repellendus, aspernatur ut in inventore corrupti quod animi vero libero. Quia
                    obcaecati hic nemo id aspernatur.</p>
            </div>
            <div class="d-flex justify-center">
                <IllustrationsLogo />
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
    gap: 2rem;
    
    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
    
    div {
        text-align: start;
        &:first-child {
            flex: 2;
        }

        &:last-child {
            flex: 1;
        }
    }
}
</style>
  